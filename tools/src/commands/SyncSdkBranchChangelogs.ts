import chalk from 'chalk';
import semver from 'semver';
import { Command } from '@expo/commander';
import { Changelog, MemChangelog, UNPUBLISHED_VERSION_NAME } from '../Changelogs';
import Git from '../Git';
import { Package, getListOfPackagesAsync } from '../Packages';
import { filterAsync } from '../Utils';

type CommandOptions = {
  branch: string;
};

export default (program: Command) => {
  program
    .command('sync-sdk-branch-changelogs')
    .alias('ssbc')
    .description('Sync packages changelogs from sdk branch to current branch.')
    .option('-b, --branch <name>', 'Source branch name')
    .asyncAction(async (options: CommandOptions) => {
      if (!options.branch) {
        throw new Error(
          'Missing branch name. Run with `--branch <name>` to specify source branch.'
        );
      }

      console.log('\u203A Fetching latest git changes');
      // await Git.fetchAsync();
      console.log('');

      const packages = await getPackagesAsync();

      for (const pkg of packages) {
        // for (const pkg of packages.filter((pkg) =>
        //   ['expo-file-system', 'expo-standard-web-crypto', 'expo-constants'].includes(pkg.packageName)
        // )) {
        let changed = false;
        try {
          changed = await syncChangelogAsync(pkg, options.branch);
        } catch (e) {
          console.error(`❌ ${chalk.red(pkg.packageName)}: ${e}`);
        }
        if (changed) {
          console.log(`✅ ${pkg.packageName}`);
        }
      }
    });
};

async function getPackagesAsync(): Promise<Package[]> {
  const packages = await getListOfPackagesAsync();
  return filterAsync(packages, (pkg) => pkg.hasChangelogAsync());
}

async function syncChangelogAsync(pkg: Package, sourceBranch: string) {
  const sourceChangelog = new MemChangelog(
    await Git.readFileAsync(`origin/${sourceBranch}`, pkg.changelogPath)
  );
  const targetChangelog = new Changelog(pkg.changelogPath);

  const sourceLastVersion = await sourceChangelog.getLastPublishedVersionAsync();
  const targetLastVersion = await targetChangelog.getLastPublishedVersionAsync();
  if (!sourceLastVersion || !targetLastVersion) {
    throw new Error('Cannot determine latest published version');
  }

  if (semver.gt(targetLastVersion, sourceLastVersion)) {
    throw new Error(
      'Current version is newer than source branch and there might be some inconsistency in between. Please update manually.'
    );
  } else if (semver.eq(sourceLastVersion, targetLastVersion)) {
    return false;
  }

  const changes = await sourceChangelog.getChangesAsync(targetLastVersion, sourceLastVersion);

  if (changes.totalCount < 1) {
    return false;
  }

  delete changes.versions[UNPUBLISHED_VERSION_NAME];
  for (const [version, groupData] of Object.entries(changes.versions)) {
    for (const [changeType, entries] of Object.entries(groupData)) {
      for (const entry of entries) {
        await targetChangelog.moveEntryBetweenVersionsAsync(
          UNPUBLISHED_VERSION_NAME,
          version,
          changeType,
          entry,
          { versionDate: changes.versionDateMap[version] }
        );
        await targetChangelog.saveAsync();
      }
    }
  }

  return true;
}
