import { inputTextByIdAndEnter } from '../../helpers';
import { AUTOMATION_TEST_IDS } from '../../ids';

describe('Log in and out', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { notifications: 'YES' },
    });
  });

  it('should fill login form', async () => {
    await inputTextByIdAndEnter(
      AUTOMATION_TEST_IDS.LOGIN_EMAIL_INPUT,
      'test@test.com',
    );
  });

  afterAll(async () => {
    await device.terminateApp();
  });
});
