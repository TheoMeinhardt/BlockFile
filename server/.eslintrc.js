module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['tsconfig.json', 'truffle-config.js'],
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/extensions': ['error', { js: 'ignorePackages' }],
    'import/no-unresolved': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'max-len': ['error', { code: 500 }],
    'no-restricted-syntax': 'off',
    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
  },
};
