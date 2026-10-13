import assert from 'node:assert/strict'
import test from 'node:test'

// Import the configuration to test the escapeFilename function
// Since it's not exported, we'll need to test it through the configuration callback
import lintStagedConfig from '../lint-staged.config.mjs'

void test('escapes filenames with spaces to prevent argument injection', () => {
    const maliciousFiles = ['src --config=evil.mjs']
    const commands = lintStagedConfig['*'](maliciousFiles)

    // The prettier command should have the filename properly escaped
    const prettierCommand = commands[1]
    assert.ok(prettierCommand.includes("'src --config=evil.mjs'"))
    assert.ok(!prettierCommand.includes('src --config=evil.mjs '))

    // Verify the injected --config option is not parsed as a separate argument
    // The escaped version should be wrapped in single quotes
    assert.match(prettierCommand, /'src --config=evil\.mjs'/)
})

void test('escapes filenames with single quotes to prevent quote breakout', () => {
    const maliciousFiles = ["src' --config=evil.mjs '"]
    const commands = lintStagedConfig['*'](maliciousFiles)

    const prettierCommand = commands[1]
    // Single quotes should be escaped as '\''
    assert.ok(prettierCommand.includes("'src'\\''"))
    assert.ok(prettierCommand.includes("--config=evil.mjs"))
    assert.ok(prettierCommand.includes("'\\'''"))
})

void test('escapes multiple malicious filenames correctly', () => {
    const maliciousFiles = ['file1 --config=evil1.mjs', 'file2 --config=evil2.mjs']
    const commands = lintStagedConfig['*'](maliciousFiles)

    const prettierCommand = commands[1]
    // Both files should be individually escaped
    assert.match(prettierCommand, /'file1 --config=evil1\.mjs'/)
    assert.match(prettierCommand, /'file2 --config=evil2\.mjs'/)
})

void test('handles filenames with shell metacharacters safely', () => {
    const maliciousFiles = ['file;rm -rf /', 'file$(whoami)', 'file`id`', 'file|cat /etc/passwd']
    const commands = lintStagedConfig['*'](maliciousFiles)

    const prettierCommand = commands[1]
    // All shell metacharacters should be safely quoted
    assert.match(prettierCommand, /'file;rm -rf \/'/)
    assert.match(prettierCommand, /'file\$\(whoami\)'/)
    assert.match(prettierCommand, /'file`id`'/)
    assert.match(prettierCommand, /'file\|cat \/etc\/passwd'/)
})

void test('escapes filenames in ESLint command when file count is low', () => {
    const maliciousFiles = ['src --config=evil.mjs']
    const commands = lintStagedConfig['*'](maliciousFiles)

    const eslintCommand = commands[0]
    // With only 1 file, ESLint should include the escaped filename
    assert.ok(eslintCommand.includes("'src --config=evil.mjs'"))
    assert.match(eslintCommand, /'src --config=evil\.mjs'/)
})

void test('does not include filenames in ESLint command when file count exceeds threshold', () => {
    // Create more than 10 files to trigger the threshold
    const manyFiles = Array.from({ length: 11 }, (_, i) => `file${i}.ts`)
    const commands = lintStagedConfig['*'](manyFiles)

    const eslintCommand = commands[0]
    // When there are more than 10 files, ESLint should not include individual filenames
    assert.equal(eslintCommand, 'eslint --fix --config eslint.config.mjs')
    assert.ok(!eslintCommand.includes('file0.ts'))
})

void test('preserves legitimate filenames with special characters', () => {
    const legitimateFiles = ['my-file.ts', 'my_file.ts', 'my.file.ts', 'my@file.ts']
    const commands = lintStagedConfig['*'](legitimateFiles)

    const prettierCommand = commands[1]
    // All legitimate files should be present and escaped
    assert.match(prettierCommand, /'my-file\.ts'/)
    assert.match(prettierCommand, /'my_file\.ts'/)
    assert.match(prettierCommand, /'my\.file\.ts'/)
    assert.match(prettierCommand, /'my@file\.ts'/)
})

void test('prevents config injection via whitespace-separated arguments', () => {
    // This is the core vulnerability: a filename with spaces can inject additional CLI arguments
    const exploitFiles = ['legitimate.ts --config=malicious.mjs']
    const commands = lintStagedConfig['*'](exploitFiles)

    const prettierCommand = commands[1]
    // The entire string should be treated as one filename argument
    assert.match(prettierCommand, /'legitimate\.ts --config=malicious\.mjs'/)

    // Verify that --config is not a separate argument by checking it's inside quotes
    const configMatch = prettierCommand.match(/'[^']*--config=malicious\.mjs[^']*'/)
    assert.ok(configMatch, 'The --config option should be inside single quotes')
})

void test('prevents code execution via staged JavaScript configuration files', () => {
    // Simulate the pentest scenario: staging both a malicious path and a config file
    const exploitFiles = ['src --config=evil.mjs', 'evil.mjs']
    const commands = lintStagedConfig['*'](exploitFiles)

    const prettierCommand = commands[1]
    // Both files should be escaped, preventing the injection
    assert.match(prettierCommand, /'src --config=evil\.mjs'/)
    assert.match(prettierCommand, /'evil\.mjs'/)

    // The fixed --config option should come before the files
    const configIndex = prettierCommand.indexOf('--config prettier.config.mjs')
    const filesIndex = prettierCommand.indexOf("'src --config=evil.mjs'")
    assert.ok(configIndex < filesIndex, 'Fixed config should come before file arguments')
})

void test('handles empty filename list', () => {
    const emptyFiles: string[] = []
    const commands = lintStagedConfig['*'](emptyFiles)

    // Should return commands even with no files
    assert.equal(commands.length, 2)
    assert.ok(commands[0].includes('eslint'))
    assert.ok(commands[1].includes('prettier'))
})

void test('handles filenames with newlines', () => {
    const maliciousFiles = ['file\nwith\nnewlines.ts']
    const commands = lintStagedConfig['*'](maliciousFiles)

    const prettierCommand = commands[1]
    // Newlines should be safely contained within quotes
    assert.match(prettierCommand, /'file\nwith\nnewlines\.ts'/)
})

void test('handles filenames with backslashes', () => {
    const filesWithBackslashes = ['path\\to\\file.ts']
    const commands = lintStagedConfig['*'](filesWithBackslashes)

    const prettierCommand = commands[1]
    // Backslashes should be preserved within quotes
    assert.match(prettierCommand, /'path\\to\\file\.ts'/)
})

void test('prevents argument injection in ESLint command', () => {
    const exploitFiles = ['src --fix=false --config=evil.mjs']
    const commands = lintStagedConfig['*'](exploitFiles)

    const eslintCommand = commands[0]
    // The entire string should be treated as one filename
    assert.match(eslintCommand, /'src --fix=false --config=evil\.mjs'/)

    // Verify the fixed --config option is not overridden
    const fixedConfigIndex = eslintCommand.indexOf('--config eslint.config.mjs')
    assert.ok(fixedConfigIndex > 0, 'Fixed ESLint config should be present')
})

void test('complex quote escaping scenario', () => {
    // Test a filename with multiple single quotes
    const complexFiles = ["file'with'multiple'quotes.ts"]
    const commands = lintStagedConfig['*'](complexFiles)

    const prettierCommand = commands[1]
    // Each single quote should be escaped as '\''
    assert.ok(prettierCommand.includes("'file'\\''with'\\''multiple'\\''quotes.ts'"))
})

void test('verifies configuration structure returns array of commands', () => {
    const files = ['test.ts']
    const commands = lintStagedConfig['*'](files)

    // Should return an array with 2 commands
    assert.ok(Array.isArray(commands))
    assert.equal(commands.length, 2)
    assert.equal(typeof commands[0], 'string')
    assert.equal(typeof commands[1], 'string')
})

void test('ensures fixed config options are always present', () => {
    const files = ['test.ts']
    const commands = lintStagedConfig['*'](files)

    const eslintCommand = commands[0]
    const prettierCommand = commands[1]

    // Fixed config options should always be present
    assert.ok(eslintCommand.includes('--config eslint.config.mjs'))
    assert.ok(prettierCommand.includes('--config prettier.config.mjs'))
})
