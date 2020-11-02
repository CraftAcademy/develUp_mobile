const { reloadApp } = require('detox-expo-helpers')

describe('Example', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
    await reloadApp()
  });

  it('is expected to have text on screen', async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();
    await expect(element(by.text('Welcome to DevelUp'))).toBeVisible();
  });

  xit('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
  });

  xit('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
