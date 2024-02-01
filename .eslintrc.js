module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier', // 确保这个在最后
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'], // 根据您的项目路径配置
        ],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'unicorn'],
  rules: {
    semi: 0,
    indent: 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'no-use-before-define': 0,

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-use-before-define': ['off'],

    'implicit-arrow-linebreak': 0,
    'consistent-return': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
  },
};
