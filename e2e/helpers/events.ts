import {expect} from 'detox';

export const tapOnElementById = async (selector: string) => {
  await expect(element(by.id(selector))).toBeVisible();

  await element(by.id(selector)).tap();
};

export const longPressOnElementById = async (selector: string) => {
  await expect(element(by.id(selector))).toBeVisible();

  await element(by.id(selector)).longPress();
};

export const tapOnElementByText = async (text: string) => {
  await expect(element(by.text(text))).toBeVisible();

  await element(by.text(text)).tap();
};

export const inputTextById = async (selector: string, text: string) => {
  await expect(element(by.id(selector))).toBeVisible();

  await element(by.id(selector)).typeText(text);
};

export const inputTextByIdAndEnter = async (selector: string, text: string) => {
  await expect(element(by.id(selector))).toBeVisible();

  await element(by.id(selector)).typeText(text + '\n');
};

export const clearTextById = async (selector: string) => {
  await expect(element(by.id(selector))).toBeVisible();

  await element(by.id(selector)).clearText();
};

export const scrollToBottom = async (id: string) => {
  await element(by.id(id)).scrollTo('bottom');
};

export const scroll = async (
  id: string,
  pixels: number,
  direction: Detox.Direction,
) => {
  await element(by.id(id)).scroll(pixels, direction);
};

export const scrollUntilVisible = async (
  scrollViewId: string,
  elementId: string,
  direction: 'up' | 'down' = 'down',
  maxAttempts: number = 10,
) => {
  let isElementVisible = false;
  let attempts = 0;

  while (!isElementVisible && attempts < maxAttempts) {
    try {
      await waitFor(element(by.id(elementId)))
        .toBeVisible()
        .withTimeout(2000);
      isElementVisible = true;
    } catch (error) {
      await element(by.id(scrollViewId)).scroll(200, direction);
      attempts++;
    }
  }

  if (!isElementVisible) {
    throw new Error(
      `Element with id "${elementId}" not visible after ${maxAttempts} attempts`,
    );
  }
};

export const tapOnFirstElement = async (id: string) => {
  await element(by.id(id)).atIndex(0).tap();
};

// Drag on view
export const swipeOnElementById = async (
  id: string,
  direction: Detox.Direction,
  distance: number = 0,
) => {
  await element(by.id(id)).swipe(direction, 'fast', distance);
};
