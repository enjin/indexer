import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import test from 'node:test'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'
import type { SnsEvent } from '~/util/sns'

const testRequire = createRequire(__filename)

void test('SNS FIFO publishes branch corrections with distinct deterministic deduplication IDs', async () => {
    const commands: { input: Record<string, unknown> }[] = []
    const exports: { Sns?: { getInstance(): { send(event: SnsEvent, height: number): Promise<void> } } } = {}
    const mocks: Record<string, unknown> = {
        '@aws-sdk/client-sns': {
            SNSClient: class {
                send(command: { input: Record<string, unknown> }) {
                    commands.push(command)
                    return Promise.resolve()
                }
            },
            PublishCommand: class {
                constructor(public input: Record<string, unknown>) {}
            },
        },
        '~/util/config': {
            __esModule: true,
            default: {
                chainName: 'test-chain',
                amazonSns: { topicArn: 'test-topic', region: 'test-region', credentials: {} },
            },
        },
        '~/util/data': { DataService: { getInstance: () => ({ lastBlockNumber: 0 }) } },
        '~/util/tools': { safeJsonString: JSON.stringify },
    }
    const filename = path.resolve(__dirname, '../src/util/sns.ts')
    const source = ts.transpileModule(readFileSync(filename, 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText
    runInNewContext(source, {
        exports,
        require: (name: string) => mocks[name] ?? testRequire(name),
        console,
    })
    assert.ok(exports.Sns)
    const sns = exports.Sns.getInstance()
    const original: SnsEvent = { id: 'event-a', name: 'MultiTokens.Transferred', body: { amount: 1 } }
    const replacement: SnsEvent = {
        ...original,
        id: 'event-b',
        body: { ...original.body, isReorganized: true, reorganizedId: 'event-a' },
    }
    const restored: SnsEvent = {
        ...original,
        body: { ...original.body, isReorganized: true, reorganizedId: 'event-b' },
    }
    await sns.send(original, 101)
    await sns.send(replacement, 101)
    await sns.send(restored, 101)
    await sns.send(restored, 101)

    const ids = commands.map((command) => command.input.MessageDeduplicationId)
    assert.equal(ids[0], original.id)
    assert.equal(new Set(ids.slice(0, 3)).size, 3)
    assert.equal(ids[2], ids[3])
    assert.match(ids[2] as string, /^[a-f0-9]{64}$/)
    assert.deepEqual(JSON.parse(commands[2].input.Message as string), restored.body)
    const attributes = commands[2].input.MessageAttributes as Record<string, { StringValue: string }>
    assert.equal(attributes.EventId.StringValue, original.id)
})
