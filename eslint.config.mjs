import globals from 'globals';
import pluginJs from '@eslint/js';
import jest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    ignores: ['dist/', 'coverage/', 'node_modules/', '*.config.js', '*.json', 'src/js/__tests__/test.js'], // отключение проверок для папок
  },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    }, // определение стандарта и парсинга
  },
  {
    files: ['src/**/*.js'], // правила для js-файлов
    rules: {
      indent: ['error', 4], // отступы, авто
      semi: ['error', 'always'], // точка с запятой, авто
      'no-unused-vars': 'off', // не используемые переменные
      'no-console': 'off', // console.log
      'no-var': 'error', // запрет var-переменных
    },
  },
  {
    files: ['**/*.test.js'], // настройка работы с jest
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['*.config.*'], // правила для конфигов
    rules: {
      'no-underscore-dangle': 'off', // двойное подчеркивание перед/после переменной
      'import/no-extraneous-dependencies': 'off', // импорт из дев-зависимостей
    },
  },
];
