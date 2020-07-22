// TypeScript
// Overrides and custom rules for TypeScript
// Reference https://github.com/typescript-eslint/typescript-eslint

module.exports = {
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // Allow unused variables that starts with, or is `_`
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

        // Allow camelcase.
        '@typescript-eslint/camelcase': 'off',

        // No need to add return type for functions, it's inferred already.
        '@typescript-eslint/explicit-function-return-type': ['off'],

        // Allow `.ts` and `.tsx` extensions to be omitted
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],

        // Extend this config for TypeScript files
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'test/**', // tape, common npm pattern
              'tests/**', // also common npm pattern
              'spec/**', // mocha, rspec-like pattern
              '**/jest.config.ts', // jest config
              '**/jest.setup.ts', // jest setup
              '**/__tests__/**', // jest pattern
              '**/__mocks__/**', // jest pattern
              '**/__stories__/**', // storybook files
              'test.{ts,tsx}', // repos with a single test file
              'test-*.{ts,tsx}', // repos with multiple top-level test files
              '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
              '**/*{.,_}{stories,story}.{ts,tsx}', // storybook files
            ],
            optionalDependencies: false,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
};
