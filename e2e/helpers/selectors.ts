import {expect} from 'detox';

const WAIT_FOR_TIMEOUT = 3000;

export const checkIfElementWithIdIsVisible = async (selector: string) => {
  await expect(element(by.id(selector))).toBeVisible();
};

export const waitForElementWithIdToBeVisible = async (
  selector: string,
  timeout: number = WAIT_FOR_TIMEOUT,
) => {
  await waitFor(element(by.id(selector)))
    .toBeVisible()
    .withTimeout(timeout);
};

export const checkIfElementWithIdIsNotVisible = async (selector: string) => {
  await expect(element(by.id(selector))).not.toBeVisible();
};

export const checkElementTextById = async (selector: string, text: string) => {
  await expect(element(by.id(selector))).toHaveText(text);
};

export const waitForElementWithTextToBeVisible = async (
  text: string,
  timeout: number = WAIT_FOR_TIMEOUT,
) => {
  await waitFor(element(by.text(text)))
    .toBeVisible()
    .withTimeout(timeout);
};
