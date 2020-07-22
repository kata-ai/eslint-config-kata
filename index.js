// @ts-nocheck

module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/base', './rules/typescript'].map(require.resolve),
  rules: {},
};
