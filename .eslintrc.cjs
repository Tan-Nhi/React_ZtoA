module.exports = {
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
        'plugin:react-refresh/recommended',
    ],
    ignorePatterns: ['dist','.eslintrc.cjs'],
    parserOptions: {
      ecmaVersion: 'latest', 
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react-refresh'],
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
  };
  