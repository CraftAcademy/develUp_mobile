const { reloadApp } = require('detox-expo-helpers')
const assignments = require('./mocks/assignmentsResponse');
// const nock = require('nock')


describe('App', () => {
  beforeAll(async () => {
    console.log(JSON.stringify(assignments))
    await reloadApp()
  });

  it('is expected to have elements identifiable by testID', async () => {
    await expect(element(by.id('welcome-message'))).toBeVisible();
  });

  it('is expected to have have elements identifiable by label (text)', async () => {
    await expect(element(by.label('Welcome to DevelUp'))).toBeVisible();
  });

  it('is expected to have elements identifiable by testID and assert label', async () => {
    await expect(element(by.id('welcome-message'))).toHaveLabel('Welcome to DevelUp');
  });
});
