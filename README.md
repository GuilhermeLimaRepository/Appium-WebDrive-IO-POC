# 🤖 Mobile Test Automation - Appium + WebdriverIO + TypeScript

This project automates end-to-end tests on an Android app using **WebdriverIO**, **Appium**, **TypeScript**, and the **Mocha** test framework.

## 📱 Tested Application

- **Package:** `br.com.pztec.estoque`
- **Main Activity:** `br.com.pztec.estoque.Inicio`
- **APK Path:** `./packages/android/product_registration.apk`

---

## ⚙️ Tech Stack

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/)

---

## 📁 Project Structure

```
.
├── specs/                 # Automated test specs written in TypeScript
├── packages/android/     # APK used for testing
├── tsconfig.json         # TypeScript configuration
├── wdio.conf.ts          # WebdriverIO main configuration
└── README.md
```

---

## 🚀 How to Run the Tests

### 1. Install dependencies
```bash
npm install
```

### 2. Start Appium (in a separate terminal)
```bash
npx appium
```

> 💡 Tip: Use [Appium Inspector](https://github.com/appium/appium-inspector) to inspect elements and activities of the app.

### 3. Run the test suite
```bash
npx wdio run wdio.conf.ts
```

---

## ⚙️ Key Configuration Highlights

- **Android device with API 31 (Android 12)**
- **Automation engine:** `UiAutomator2`
- Automatically handles permissions and system alerts:
  ```ts
  'appium:autoGrantPermissions': true,
  'appium:autoAcceptAlerts': true
  ```

---

## ✅ Sample Test (`specs/example.spec.ts`)

```ts
describe('Product Registration App', () => {
  it('should launch the app and display the home screen', async () => {
    const title = await $('id=com.example:id/title');
    await expect(title).toBeDisplayed();
  });
});
```

---

## 👤 Author

**Tony** – Lead QA Engineer  
Brazilian Time Zone 🌍  
[LinkedIn](https://www.linkedin.com/in/your-profile) | [GitHub](https://github.com/your-username)
