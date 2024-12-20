# Angular Multi-Platform Template

This repository serves as a template for creating Angular applications that can target multiple platforms:

- Web Browsers (static files and Progresiva Web App support)
- Android (using Capacitor)
- iOS (using Capacitor)
- Desktop (using Electron)

## Prerequisites

- Node.js (v18.19.1)
- Ionic Cli
- Xcode (for iOS development)
- Android Studio (for Android development)

## Getting Started

1. Clone this template
2. Instal Ionic Cli `npm install -g @ionic/cli`
3. Run `npm install`
4. Run `ng serve` for web development

## Build Commands

```bash
# Web
ng build

# Android
ng build && npx cap sync android

# iOS
ng build && npx cap sync ios

# Desktop (electron)
ng build && npx cap sync @capacitor-community/electron
```

## Run commands

```bash
# Web
ng serve

# Android emulator
npx cap run android

# Desktop app in debug mode
npx cap run @capacitor-community/electron
```


## Project Structure

```
crossplatform-ng-template
├── src/                 # Angular source files for all platforms
├── electron/            # Desktop configurations (electron framework)
├── android/             # Android platform files
├── ios/                 # iOS platform files
├── public/              # PWA configurations and icons
├── capacitor.config.ts  # Capacitor configuration
├── .browserslistrc      # Configure browser support
└── tsconfig*            # Typescript configs
```

## Documentation

For detailed instructions, visit [project documentation](docs/index.md)

## License

MIT