import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    {
        ignores: ['src/model', 'src/types'],
    },
    ...compat.extends('plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'),
    {
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'script',

            parserOptions: {
                project: './tsconfig.json',
            },
        },

        rules: {
            'no-console': 'warn',
            'import/prefer-default-export': 'off',
            'class-methods-use-this': 'off',
            'no-param-reassign': 'off',
            'no-underscore-dangle': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
            'max-len': [
                'error',
                {
                    code: 130,
                    ignoreComments: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                },
            ],
        },
    },
]
