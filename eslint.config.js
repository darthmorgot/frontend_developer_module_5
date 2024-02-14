import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from "eslint-plugin-react-refresh";
import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    ...js.configs.recommended,
    ...reactRecommended,
    ...reactJsx,
    ...reactHooks.configs.recommended,
    files: ['**/*.{js,jsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: 'off'
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser
      },
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      jsdoc,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      "react/no-unused-state": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsdoc/require-jsdoc": "error",
      "jsdoc/require-param-description": "error",
      "jsdoc/require-param-name": "error",
      "jsdoc/require-returns-description": "error",
    }
  }
];
