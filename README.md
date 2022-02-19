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
  "settings": {
    "react": {
      "version": "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  "extends": [
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
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
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
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

```bash
npm install @radix-ui/colors
```

- Instalar Jest

```bash
npm i jest -D
```

- Inicializar jest

```bash
npx jest --init
```

- Instalar Typescript para node

```bash
npm i ts-node -D
```

- Instalar Typescript para jest

```bash
npm i @types/jest -D
```

- Instalar conversor de linguagem SWC ou Babel, para o melhor funcionamento do Jest

```bash
npm i @swc/core @swc/jest -D
```

- Configurar o Jest para usar SWC em `jest.config.ts`

```bash
 transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic'
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
```

- Instalar bibliotecas de testes de

```bash
npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
```
