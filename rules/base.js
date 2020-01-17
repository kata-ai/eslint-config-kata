// Base
// Default configurations and extensions to the Airbnb ESLint config.

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {
    // Allow setting square bracket notation.
    'dot-notation': 'off',

    // Max line-length is 120.
    'max-len': ['error', { code: 120, ignoreUrls: true }],

    // Disable multiline expressions and lines that start with `[` or `(`.
    'no-unexpected-multiline': 'error',

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '#region', '#endregion', '/'], // space here to support sprockets directives and typescript reference comments
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '#region', '#endregion', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
  },
}
