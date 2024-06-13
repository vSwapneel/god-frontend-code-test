const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!**/public/**",
    "!**/*.config.js",
    "!**/jest.setup.js"
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ]
};

module.exports = createJestConfig(customJestConfig);