// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(eslint.configs.recommended, tseslint.configs.strictTypeChecked, prettierConfig, {
    rules: {
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unsafe-return": "off",
    },
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
