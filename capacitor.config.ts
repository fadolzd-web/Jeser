import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.sayegh.bridge',
  appName: 'Sayegh Bridge',
  webDir: 'www',
  server: { androidScheme: 'https' },
  plugins: { CapacitorHttp: { enabled: true } }
};
export default config;
