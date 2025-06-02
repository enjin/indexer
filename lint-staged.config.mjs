/**
 * @type {import('lint-staged').Configuration}
 */
export default {
    '*': (files) => [
        files.length > 10
            ? 'eslint --fix --config eslint.config.mjs'
            : `eslint ${files.join(' ')} --fix --config eslint.config.mjs`,
        `prettier --ignore-unknown --config prettier.config.mjs --write ${files.join(' ')}`,
    ],
}
