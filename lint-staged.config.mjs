/**
 * Escape a filename for safe use in shell commands.
 * Wraps the filename in single quotes and escapes any single quotes within.
 * @param {string} filename
 * @returns {string}
 */
function escapeFilename(filename) {
    return `'${filename.replace(/'/g, "'\\''")}'`
}

/**
 * @type {import('lint-staged').Configuration}
 */
export default {
    '*': (files) => {
        const escapedFiles = files.map(escapeFilename).join(' ')
        return [
            files.length > 10
                ? 'eslint --fix --config eslint.config.mjs'
                : `eslint ${escapedFiles} --fix --config eslint.config.mjs`,
            `prettier --ignore-unknown --config prettier.config.mjs --write ${escapedFiles}`,
        ]
    },
}
