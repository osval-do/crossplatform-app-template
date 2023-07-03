import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.company.crossplatformtemplate',
  appName: 'crossplatform-ng-template',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: "#ff0000",
  android: {
    minWebViewVersion: 55
  },
};

export default config;
