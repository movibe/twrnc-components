/* eslint-disable radix */
import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'myapp',
  slug: 'myapp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    // bundleIdentifier: 'com.example.myapp',
  },
  android: {
    // package: 'com.example.myapp',
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'single',
    favicon: './src/assets/images/favicon.png',
  },
  plugins: ['expo-router', 'expo-font'],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
}
export default config
