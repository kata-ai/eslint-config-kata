module.exports = {
  extends: ['./index.js', 'eslint-config-prettier', 'eslint-config-prettier/@typescript-eslint'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
