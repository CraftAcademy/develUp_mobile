// const detox = require("detox");
import detox from 'detox'
// const adapter = require("detox/runners/jest/adapter");
import adapter from 'detox/runners/jest/adapter'
// const { mockServer } = require('./mockServer')
import  mockServer from './mockServer'
let server
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);
beforeAll(async () => {
  server = mockServer.open(3000)
  await detox.init();
});
beforeEach(async () => {
  await adapter.beforeEach();
});
afterEach(async () => { });
afterAll(async () => {
  mockServer.close(server)
  await adapter.afterAll();
  await detox.cleanup();
});
