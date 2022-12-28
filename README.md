# @asasinmode/eslint-config

## Check out the original author https://github.com/antfu

[![npm](https://img.shields.io/npm/v/@asasinmode/eslint-config?color=0373fc&label=)](https://npmjs.com/package/@asasinmode/eslint-config)

- Almost a 1:1 copy of [Anthony Fu's eslint config]()
- Curly braces around if blocks
- Semicolons
- Padding lines around statements
- Empty line before return
- `tsconfig.json` to enable typescript rules

## Usage

### Install

```bash
pnpm add -D eslint @asasinmode/eslint-config
```

### Config `package.json `

```json
{
  "eslintConfig": {
    "extends": "@asasinmode"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json` in your project's directory.

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue",
    "html",
    "markdown",
    "json"
  ]
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env. 

```sh
// .env
ESLINT_TSCONFIG = 'tsconfig.json'
```
