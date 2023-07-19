/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      lines: 50,
      branches: 50,
      functions: 50,
      statements: 50,
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
}
