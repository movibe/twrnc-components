module.exports = {
  extends: [
    'expo',
    'plugin:storybook/recommended',
    'eslint-config-prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'testing-library',
    'simple-import-sort',
    'sort-keys-fix',
    'sort-destructure-keys',
    'unused-imports',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$',
      },
    ],
    'import/export': 0,
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'node/no-missing-import': 'off',
    'tailwindcss/no-custom-classname': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/ignore': ['react-native'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {}, // eslint-import-resolver-babel-module
      typescript: true, // eslint-import-resolver-typescript
    },
    react: {
      version: 'detect', // eslint-plugin-react
    },
    tailwindcss: {
      callees: ['tailwind'],
      // can be set to e.g. ['tw'] for use in tw`bg-blue`
      classRegex: '^tailwind(Name)?$',
      config: 'tailwind.config.ts',
      removeDuplicates: true,
      skipClassAttribute: false,
      tags: [],
      whitelist: [], // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  },
}
