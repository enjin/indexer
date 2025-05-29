/**
 * @type {import('lint-staged').Configuration}
 */
export default {
    '!(*.ts)': 'prettier . --write --config prettier.config.mjs',
    '*.ts': ['eslint --fix', 'prettier . --write --config prettier.config.mjs'],
}
