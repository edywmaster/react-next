# Projeto React/Next TypeScript

## Como foi criado esse projeto

- Primerio, criando projeto

```bash
npx create-next-app react-next --use-npm --ts
```

- Removendo arquivos, pasta styles e conteúdo dentro da pasta public
- Configurar eslint:

npx eslint --init

npm install --save-dev --save-exact prettier eslint-config-prettier eslint-plugin-prettier

- Adicionar prettier na configuração do eslint:

```bash
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": ["plugin:react/recommended", "google", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": false,
          "MethodDefinition": false,
          "ClassDeclaration": false,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        }
      }
    ]
  }
}

```

- Criar arquivo de configuração do prettier `prettier.config.js`:

```bash
module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  endOfLine: 'auto',
}
```

- Instalar Stitches

```bash
npm install @stitches/react
```

- Criar arquivo de configuração do Stitches `stitches.config.js`

- Intalar Radix Colors

npm install @radix-ui/colors
