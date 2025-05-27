import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    prettierConfig,
    {
        ignores: [
            '.github/',
            '.vscode/',
            '.idea/',
            'node_modules/',
            'lib/',
            'db/',
            'typegen/',
            'src/type/',
            'src/model/',
            'src/worker/jobs/',
            'eslint.config.mjs',
            'prettier.config.mjs',
            'src/server-extension/',
        ],
    },
    {
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    }
)
