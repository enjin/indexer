/**
 * @type {import('lint-staged').Configuration}
 */
export default {
    '!(*.ts)': 'prettier . --write --config prettier.config.mjs',
    '*.ts': ['eslint . --fix --config eslint.config.mjs', 'prettier . --write --config prettier.config.mjs'],
}
