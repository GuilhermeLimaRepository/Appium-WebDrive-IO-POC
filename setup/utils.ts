// utils/common.ts
import { setTimeout } from "node:timers/promises";

export const sleep = async (ms: number): Promise<void> => {
  await setTimeout(ms);
};

export const waitForXPath = async (xpath: string, timeout = 10000) => {
  const el = await $(xpath);
  await el.waitForDisplayed({ timeout });
};

export const waitForElement = async (identifier: string, timeout = 10000): Promise<boolean> => {
  try {
    const el = await $(identifier);
    await el.waitForDisplayed({ timeout });
    return true;
  } catch {
    return false;
  }
};

export const waitForClick = async (attribute: string, timeout = 10000) => {
  const el = await $(attribute);
  await el.waitForDisplayed({ timeout });
  await el.click();
};

export const clearFieldById = async (id: string) => {
  const el = await $(id);
  await el.clearValue();
};

export const clearFieldByXPath = async (xpath: string) => {
  const el = await $(xpath);
  await el.clearValue();
};

export const clickById = async (id: string) => {
  const el = await $(id);
  await el.click();
};

export const clickByXPath = async (xpath: string) => {
  const el = await $(xpath);
  await el.click();
};

export const sendKeysById = async (id: string, value: string) => {
  const el = await $(id);
  await el.setValue(value);
};

export const sendKeysByXPath = async (xpath: string, value: string) => {
  const el = await $(xpath);
  await el.setValue(value);
};

export const enterText = async (text: string, id: string, timeout = 30000) => {
  const el = await $(id);
  await el.waitForDisplayed({ timeout });
  await el.setValue(text);
};

export const scrollDown = async () => {
  await driver.execute('mobile: swipeGesture', {
    direction: 'down',
    percent: 0.7,
  });
};

export const acceptAlert = async () => {
  try {
    await driver.acceptAlert();
  } catch (error) {
    console.warn('No Alert Found.');
  }
};

/** =====================
 *  CUSTOM TEST ACTIONS
 * ===================== */

// Authenticate using the SDK in sandbox mode (fake login simulation)
export const authenticateSandbox = async (usernameId: string, passwordId: string, submitButtonId: string) => {
  await sendKeysById(usernameId, 'sandbox_user');
  await sendKeysById(passwordId, 'sandbox_pass');
  await clickById(submitButtonId);
};

// Select the DI/BB product interface
export const selectProductInterface = async (selectorId: string) => {
  await clickById(selectorId);
};

// Enable all session options (e.g., toggles or checkboxes)
export const enableAllSessionOptions = async (optionIds: string[]) => {
  for (const id of optionIds) {
    const el = await $(id);
    const isChecked = await el.getAttribute('checked');
    if (!isChecked || isChecked === 'false') {
      await el.click();
    }
  }
};

// Fill the entire form with realistic data
export const fillFormWithFakeData = async (formData: { id: string; value: string }[]) => {
  for (const field of formData) {
    await sendKeysById(field.id, field.value);
  }
};

// Assert session creation by checking key presence
export const assertSessionKeyCreated = async (sessionKeyId: string): Promise<boolean> => {
  const el = await $(sessionKeyId);
  await el.waitForDisplayed({ timeout: 10000 });
  const value = await el.getText();
  return value && value.length > 0;
};
