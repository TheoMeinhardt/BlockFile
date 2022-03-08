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
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/extensions': ['error', { js: 'ignorePackages' }],
    'import/no-unresolved': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'max-len': ['error', { code: 500 }],
    'no-restricted-syntax': 'off',
    indent: ['error', 2],
  },
};
