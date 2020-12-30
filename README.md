# Qr code
 React native ile qr code tarayıcı

## Kütüphaneler
* npm install react-native-camera --save
  npx react-native link react-native-camera
  
* npm install react-native-qrcode-scanner --save
  npx react-native link react-native-qrcode-scanner
  
* npm install react-native-permissions --save
  npx react-native link react-native-permissions
  
Kütüphaneleri kurduktan sonra tekrar link ile bağlamak gerekebilir:
* npx react-native link


## İzinler
Kütüphanaler kurulduktan sonra kamerayı kullanmak için izinleri vermemiz gerekiyor

### Android için

android/app/src/main/AndroidManifest.xml
```
 <uses-permission android:name="android.permission.VIBRATE"/>
```

Ayrıca bu config ayarını da yapmamız gerekiyor;
android/app/build.gradle
```
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' <-- insert this line
  }
}

```
### Kaynak
- https://github.com/moaazsidat/react-native-qrcode-scanner
