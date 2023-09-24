module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  ignorePatterns: ['dist', 'node_modules/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'react',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
      rules: {
        'no-console': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
      },
    },
  ],
};
