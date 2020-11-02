const { cleanup, init } = require('detox')
const adapter = require('detox/runners/jest/adapter')

const config = require('../package.json').detox;
const unmock = require("unmock").default;
const assignments = require('./mocks/assignmentsResponse')


jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

let develUp

beforeAll(async () => {
  await init(config);
  await unmock
    .nock("https://develup-2020.herokuapp.com/api/v1", "develUp")
    .get("/assignments")
    .reply(200, assignments)
  develUp = unmock.services.develUp

  await unmock.on()
});

beforeEach(async () => {
  await adapter.beforeEach();
  await develUp.reset()
});

afterEach(async () => {
  await develUp.spy.resetHistory()
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
})