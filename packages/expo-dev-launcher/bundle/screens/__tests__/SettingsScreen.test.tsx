import * as React from 'react';

import { copyToClipboardAsync } from '../../native-modules/DevLauncherInternal';
import { DevMenuSettingsType, setSettingsAsync } from '../../native-modules/DevMenuInternal';
import { render, fireEvent, act } from '../../test-utils';
import { SettingsScreen } from '../SettingsScreen';

const mockSetSettingsAsync = setSettingsAsync as jest.Mock;

describe('<SettingsScreen />', () => {
  afterEach(() => {
    mockSetSettingsAsync.mockClear();
  });

  test('shows the correct settings on mount 1', async () => {
    const testSettings: DevMenuSettingsType = {
      motionGestureEnabled: true,
      touchGestureEnabled: true,
      showsAtLaunch: false,
    };

    const { getByA11yLabel, findAllByA11yState } = render(<SettingsScreen />, {
      initialAppProviderProps: { initialDevMenuSettings: testSettings },
    });

    const showsAtLaunchButton = getByA11yLabel(/toggle showing menu/i);
    expect(showsAtLaunchButton.props.value).toBe(testSettings.showsAtLaunch);

    const activeCheckmarks = await findAllByA11yState({ checked: true });
    expect(activeCheckmarks.length).toEqual(2);
  });

  test('shows the correct settings on mount 2', async () => {
    const testSettings: DevMenuSettingsType = {
      motionGestureEnabled: true,
      touchGestureEnabled: false,
      showsAtLaunch: true,
    };

    const { getByA11yLabel, findAllByA11yState } = render(<SettingsScreen />, {
      initialAppProviderProps: { initialDevMenuSettings: testSettings },
    });

    const showsAtLaunchButton = getByA11yLabel(/toggle showing menu/i);
    expect(showsAtLaunchButton.props.value).toBe(testSettings.showsAtLaunch);

    const activeCheckmarks = await findAllByA11yState({ checked: true });
    expect(activeCheckmarks.length).toEqual(1);
  });

  test('toggling shake device', async () => {
    const { getByText } = render(<SettingsScreen />);

    await act(async () => {
      const toggle = getByText(/shake device/i);
      fireEvent.press(toggle);
      expect(setSettingsAsync).toHaveBeenCalledTimes(1);
      expect(setSettingsAsync).toHaveBeenLastCalledWith({ motionGestureEnabled: true });
    });

    await act(async () => {
      const toggle = getByText(/shake device/i);
      fireEvent.press(toggle);

      expect(setSettingsAsync).toHaveBeenCalledTimes(2);
      expect(setSettingsAsync).toHaveBeenLastCalledWith({ motionGestureEnabled: false });
    });
  });

  test('toggling gesture press', async () => {
    const { getByText } = render(<SettingsScreen />);

    await act(async () => {
      const toggle = getByText(/three-finger long-press/i);
      fireEvent.press(toggle);
      expect(setSettingsAsync).toHaveBeenCalledTimes(1);
      expect(setSettingsAsync).toHaveBeenLastCalledWith({ touchGestureEnabled: true });
    });

    await act(async () => {
      const toggle = getByText(/three-finger long-press/i);
      fireEvent.press(toggle);

      expect(setSettingsAsync).toHaveBeenCalledTimes(2);
      expect(setSettingsAsync).toHaveBeenLastCalledWith({ touchGestureEnabled: false });
    });
  });

  test('toggling show menu at launch press', async () => {
    const { getByA11yLabel } = render(<SettingsScreen />);

    await act(async () => {
      const toggle = getByA11yLabel(/toggle showing menu at launch/i);
      fireEvent.press(toggle);
      expect(setSettingsAsync).toHaveBeenCalledTimes(1);
      expect(setSettingsAsync).toHaveBeenLastCalledWith({ showsAtLaunch: true });
    });

    await act(async () => {
      const toggle = getByA11yLabel(/toggle showing menu at launch/i);
      fireEvent.press(toggle);

      expect(setSettingsAsync).toHaveBeenCalledTimes(2);
      expect(setSettingsAsync).toHaveBeenLastCalledWith({ showsAtLaunch: false });
    });
  });

  test('displays runtime version when available', () => {
    const fakeRTV = 'TESTING FAKE RTV';
    const fakeSDKVersion = 'TESTING FAKE SDKVersion';

    const { getByText, queryByText } = render(<SettingsScreen />, {
      initialAppProviderProps: {
        initialBuildInfo: {
          runtimeVersion: fakeRTV,
          sdkVersion: fakeSDKVersion,
        },
      },
    });

    getByText(fakeRTV);
    // should not be visible if RTV is there
    expect(queryByText(fakeSDKVersion)).toBe(null);
  });

  test('displays sdk version when rtv is not available', () => {
    const fakeSDKVersion = 'TESTING FAKE SDKVersion';

    const { getByText, queryByText } = render(<SettingsScreen />, {
      initialAppProviderProps: {
        initialBuildInfo: {
          sdkVersion: fakeSDKVersion,
        },
      },
    });

    expect(queryByText(/runtime version/i)).toBe(null);
    getByText(fakeSDKVersion);
  });

  test('copies app info to clipboard', () => {
    const fakeRTV = 'TESTING FAKE RTV';
    const fakeSDKVersion = 'TESTING FAKE SDKVersion';

    const fakeAppInfo = {
      runtimeVersion: fakeRTV,
      sdkVersion: fakeSDKVersion,
    };

    const { getByText } = render(<SettingsScreen />, {
      initialAppProviderProps: {
        initialBuildInfo: fakeAppInfo,
      },
    });

    expect(copyToClipboardAsync).not.toHaveBeenCalled();

    const button = getByText(/tap to copy all/i);
    fireEvent.press(button);

    expect(copyToClipboardAsync).toHaveBeenCalled();
    expect(copyToClipboardAsync).toHaveBeenLastCalledWith(
      expect.stringContaining(fakeAppInfo.runtimeVersion)
    );
    expect(copyToClipboardAsync).toHaveBeenLastCalledWith(
      expect.stringContaining(fakeAppInfo.sdkVersion)
    );
  });
});
