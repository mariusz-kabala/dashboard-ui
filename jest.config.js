const coveragePathIgnorePatterns = require('./jest.coverage.ignore.js')

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coverageReporters: ['text', 'json', 'html'],
  testURL: 'http://localhost',
  testMatch: ['<rootDir>/packages/**/*.test.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/tools/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'd.ts', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  setupFiles: ['<rootDir>/setupTests.tsx'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/node_modules/**',
    '!./packages/**/stories/**/*.stories.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coveragePathIgnorePatterns,
}
