import path from 'path';
import { fileURLToPath } from 'url';
import { Options } from '@wdio/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config: Options.WebdriverIO = {
  automationProtocol: 'webdriver',
  specs: ['./specs/*.ts'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Anonymous',
    'appium:appActivity': 'br.com.pztec.estoque.Inicio', 
    'appium:appWaitActivity': 'br.com.pztec.estoque.Inicio',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.resolve(__dirname, './packages/android/product_registration.apk'),
    'appium:autoGrantPermissions': true,
    'appium:autoAcceptAlerts': true
  }],

  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  services: ['appium'],
  reporters: ['spec'],

  autoCompileOpts: {
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  }
};
