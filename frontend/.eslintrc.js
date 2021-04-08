module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        modules: true,
      },
    },
    extends: [
      'plugin:prettier/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      // TODO: fix accessability issues in one go
      // "plugin:jsx-a11y/recommended",
      'plugin:react/recommended',
    ],
    rules: {
      'react/prop-types': 0,
      'import/no-unresolved': [2, { commonjs: true, amd: true }],
      'import/no-named-as-default': 0,
      'import/no-duplicates': 0,
      'import/named': 0,
      'react/no-unescaped-entities': 0,
      'react/no-children-prop': 0,
    },
    plugins: ['react-hooks', 'import'],
    env: {
      browser: true,
      node: true,
    },
    settings: {
      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: ['.tsx', '.ts'],
        },
      },
      // Append 'ts' extensions to Airbnb 'import/extensions' setting
      'import/extensions': ['.tsx', '.ts'],
      react: {
        version: 'detect',
      },
      'import/ignore': ['.ts'],
    },
  };