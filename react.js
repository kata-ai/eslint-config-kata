// @ts-nocheck

module.exports = {
  extends: ['eslint-config-airbnb', './rules/base', './rules/typescript', './rules/react'].map(require.resolve),
  rules: {},
};
