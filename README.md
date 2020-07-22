# eslint-config-kata

> ESLint config used at Kata.ai

This is the common ESLint config used by projects at [Kata.ai](https://kata.ai). All rules follow the [Kata Platform Development Standard](https://github.com/kata-ai/development-standard).

## Installation

Install `eslint` and `eslint-config-kata` using your favourite package manager:

```bash
# yarn
yarn add --dev eslint eslint-config-kata
# npm
npm install --save-dev eslint eslint-config-kata
```

Then, in your `.eslintrc` file, extend `eslint-config-kata`.

```json
{
  "extends": ["kata"]
}
```

If you're using this ESLint config for React-based projects, extend `eslint-config-kata/react` instead.

```json
{
  "extends": ["kata/react"]
}
```

For more setups, take a look at the [templates directory](./templates)

## Versioning

Note that this package does not specifically follow Semantic Versioning, since all changes in this package are relative to the changes in our Development Standard. Major version bumps will occur when we transition into a new major version of ESLint.

To recap:

- `major`: Will be bumped when we transition to a new major version of ESLint
- `minor`: Potentially breaking changes that's still within the same major version of ESLint
- `patch`: Minor patches/bugfixes

## Using TypeScript

To use `eslint-config-kata` with TypeScript, you need to do a little additional setup to make `eslint-plugin-import` play well with TypeScript. First, install `eslint-import-resolver-typescript`.

```bash
# yarn
yarn add --dev eslint-import-resolver-typescript
```

Then, on `.eslintrc`:

```js
module.exports = {
  // other configuration are omitted for brevity
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
```

## Using Prettier

[Prettier](https://prettier.io/) is a tool to automatically format your code during save. It supports various editors, from VSCode, Atom, Sublime, and even Emacs.

To use this ESLint config in conjunction with Prettier, copy the `.prettierrc` file in this repository and paste it to your project.

Then install the Prettier eslint config and plugin:

```sh-session
$ yarn add --dev eslint-plugin-prettier eslint-config-prettier prettier
```

And finally, include them as follows. (**IMPORTANT:** `eslint-config-prettier` MUST be extended **after** `eslint-config-kata`!)

```json
{
  "extends": ["kata", "prettier", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Contributing

Issues and Pull Requests welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) beforehand.

## License

[MIT](LICENSE) (c) Kata.ai.

## Maintainers

- Resi Respati ([@resir014](https://twitter.com/resir014)) – Kata.ai
