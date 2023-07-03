# Cross platform angular frontend
A preconfigured base project for apps that can target the following systems:
- Android
- Desktop (Windows, Linux & MacOS)
- iOS
- Web

# Frameworks
- (Angular v15)[https://angular.io/docs]
- (Ionic v6)[https://ionicframework.com/docs/]
- (Capacitor v4.6.3)[https://capacitorjs.com/docs/]
- (Capacitor Electron v4.1.2)[https://github.com/capacitor-community/electron]

# Development
This project uses Angular and Ionic for the UI. Any compatible library and component with angular 15 can be used.
Components from Ionic can be found (here)[https://ionicframework.com/docs/components].

## Installing native plugins
In order to add native functionality on mobile devices you can either add [cordova plugins](https://capacitorjs.com/docs/plugins/cordova)
Or add [capacitor specific plugins](https://capacitorjs.com/docs/plugins)


# Building

Web:
```sh
npm run build
```


# Running
Web:
```sh
ionic serve
```

Android:
```sh
npx cap run android
```

iOS:
```sh
npx cap run ios
```

Desktop:
```sh
npx cap open @capacitor-community/electron
```


# Opening native projects
Use the following commands to open the generated IDE projects:

[Android (Android Studio)](https://capacitorjs.com/docs/android)
```sh
npx cap open android
```

[iOS (XCode)](https://capacitorjs.com/docs/ios)
```sh
npx cap open ios
```