/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest"
  },
  testRegex: "(/tests/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}"
  ],
};
