/**
 * Fixed commands let lint-staged append filenames as separate argv entries.
 * The option terminator prevents filenames from being interpreted as flags.
 * @type {import('lint-staged').Configuration}
 */
export default {
    '*': [
        'eslint --fix --config eslint.config.mjs --',
        'prettier --ignore-unknown --config prettier.config.mjs --write --',
    ],
}
