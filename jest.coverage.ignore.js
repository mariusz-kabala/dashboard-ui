const PERMANENT_IGNORE = [
  '/node_modules/',
  '/dist/',
  '.d.ts',
  './i18n.ts',
  './.storybook',
]

const TEMPORARY_IGNORE = []

module.exports = [...PERMANENT_IGNORE, ...TEMPORARY_IGNORE]
