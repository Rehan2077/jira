const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/**@type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

module.exports = createJestConfig(config);
