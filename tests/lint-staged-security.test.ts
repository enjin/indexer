import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import test from 'node:test'

const configPath = resolve(__dirname, '../lint-staged.config.mjs')

function assertSafeArguments(filenames: string[]): void {
    const cwd = realpathSync(mkdtempSync(join(tmpdir(), 'lint-staged-security-')))
    const bin = join(cwd, 'bin')
    try {
        mkdirSync(bin)
        // Capture what the real lint-staged runner passes to each tool, without executing configs.
        for (const tool of ['eslint', 'prettier']) {
            writeFileSync(
                join(bin, tool),
                '#!/usr/bin/env node\n' +
                    `require('node:fs').writeFileSync(require('node:path').join(__dirname, '${tool}.json'), ` +
                    'JSON.stringify(process.argv.slice(2)))\n',
                { mode: 0o755 }
            )
        }
        execFileSync('git', ['init', '--quiet', cwd])
        for (const filename of filenames) writeFileSync(join(cwd, filename), 'const value = 1\n')
        execFileSync('git', ['add', '--', ...filenames], { cwd })

        const result = spawnSync(
            process.execPath,
            [require.resolve('lint-staged/bin'), '--config', configPath, '--no-stash', '--quiet'],
            { cwd, env: { ...process.env, PATH: `${bin}:${process.env.PATH ?? ''}` }, encoding: 'utf8' }
        )
        assert.equal(result.status, 0, result.stderr || result.stdout)

        const paths = filenames.map((filename) => join(cwd, filename)).sort()
        for (const tool of ['eslint', 'prettier']) {
            const args = JSON.parse(readFileSync(join(bin, `${tool}.json`), 'utf8')) as string[]
            const options =
                tool === 'eslint'
                    ? ['--fix', '--config', 'eslint.config.mjs', '--']
                    : ['--ignore-unknown', '--config', 'prettier.config.mjs', '--write', '--']
            assert.deepEqual(args.slice(0, options.length), options)
            assert.deepEqual(args.slice(options.length).sort(), paths)
        }
    } finally {
        rmSync(cwd, { recursive: true, force: true })
    }
}

void test('lint-staged preserves a quote-breakout filename as one argument after --', () => {
    assertSafeArguments(["file' --config=evil.mjs '.ts"])
})

void test('lint-staged preserves special filenames even above the old ten-file threshold', () => {
    assertSafeArguments([
        'plain.ts',
        'file --config=evil.mjs.ts',
        "O'Reilly.ts",
        'file" --config=evil.mjs ".ts',
        '--config=evil.mjs',
        'file\nwith\nnewlines.ts',
        'file;echo injected.ts',
        'file$(echo injected).ts',
        'file`echo injected`.ts',
        'file with spaces.ts',
        '日本語.ts',
    ])
})
