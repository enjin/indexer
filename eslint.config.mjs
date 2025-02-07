// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(eslint.configs.recommended, tseslint.configs.strictTypeChecked, prettierConfig, {
    languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
            projectFolderIgnoreList: [
                '**/node_modules/**',
                '**/lib/**',
                '**/db/**',
                '**/typegen/**',
                '**/src/types/generated/**',
                '**/src/model/**',
            ],
        },
    },
})
