// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: "react-native",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["node_modules", "src/utils"],
  moduleDirectories: ["node_modules"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "\\.(ts|tsx)$": "ts-jest"
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transformIgnorePatterns: [],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  },
  testPathIgnorePatterns: ["dist/"]
};
