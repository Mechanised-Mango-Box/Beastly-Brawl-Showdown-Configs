import eslintPluginImport from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      import: eslintPluginImport,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'import/no-unresolved': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
