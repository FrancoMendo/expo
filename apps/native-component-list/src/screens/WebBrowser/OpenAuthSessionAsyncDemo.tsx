import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import FunctionDemo from '../../components/FunctionDemo';

export default function OpenAuthSessionAsyncDemo() {
  const redirectUrl = Linking.createURL('redirect');

  return (
    <FunctionDemo
      namespace="WebBrowser"
      name="openAuthSessionAsync"
      parameters={[
        {
          name: 'url',
          type: 'constant',
          value: 'url',
        },
        { name: 'redirectUrl', type: 'constant', value: redirectUrl },
        {
          name: 'options',
          type: 'object',
          properties: [{ name: 'createTask', type: 'boolean', initial: true }],
        },
      ]}
      additionalParameters={[{ name: 'shouldPrompt', type: 'boolean', initial: false }]}
      actions={(
        _: string,
        redirectUrl: string,
        options: WebBrowser.WebBrowserOpenOptions,
        shouldPrompt: boolean
      ) => {
        const url = `https://fake-auth.netlify.com?state=faker&redirect_uri=${encodeURIComponent(
          redirectUrl
        )}&prompt=${shouldPrompt ? 'consent' : 'none'}`;
        return WebBrowser.openAuthSessionAsync(url, redirectUrl, options);
      }}
    />
  );
}
