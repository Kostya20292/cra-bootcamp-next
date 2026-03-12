import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'no-console': 'warn',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'check-file/folder-naming-convention': ['error', { 'src/**/': 'KEBAB_CASE' }],
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/components/**/*.{ts,tsx}': 'PASCAL_CASE',
          'src/hooks/**/*.{ts,tsx}': 'CAMEL_CASE',
          'src/utils/**/*.{ts,tsx}': 'CAMEL_CASE',
          'src/lib/**/*.{ts,tsx}': 'CAMEL_CASE',
          'src/store/**/*.{ts,tsx}': 'CAMEL_CASE',
          'src/types/**/*.{ts,tsx}': 'CAMEL_CASE',
          'src/constants/**/*.{ts,tsx}': 'CAMEL_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],
    },
  },
]);

export default eslintConfig;
