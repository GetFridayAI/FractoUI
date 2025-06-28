const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  }
};