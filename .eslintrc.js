module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended'
    // "plugin:standard/recommended"
  ],
  plugins: ['jest'],
  globals: {},
  rules: {
    // NOTE: prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        semi: false,
        tabWidth: 2,
        useTabs: false,
        alwaysParens: 'avoid'
      }
    ],
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never']
  }
}
