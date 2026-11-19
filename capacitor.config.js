// capacitor.config.js - نسخة JS من دون TypeScript
const config = {
  appId: 'com.sayegh.bridge',
  appName: 'Sayegh Bridge',
  webDir: 'www',
  server: { androidScheme: 'https' },
  plugins: { CapacitorHttp: { enabled: true } }
};
module.exports = config;
