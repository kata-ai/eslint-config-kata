module.exports = {
  extends: ['./index.js', 'eslint-config-prettier', 'eslint-config-prettier/@typescript-eslint'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
