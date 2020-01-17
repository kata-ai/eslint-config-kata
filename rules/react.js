// React
// Overrides and custom rules for React projects.
// Reference https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // We use TypeScript for typechecking, so no need to set up PropTypes.
        'react/prop-types': 'off',

        // Cannot use `Component.displayName` pattern on class components in TS.
        'react/static-property-placement': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',

    // Limit JSX files to `.jsx` and `.tsx` extensions.
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
}
