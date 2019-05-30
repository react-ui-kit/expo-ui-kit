// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: "react-native",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["node_modules", "src/utils"],
  moduleDirectories: ["node_modules"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: []
};
