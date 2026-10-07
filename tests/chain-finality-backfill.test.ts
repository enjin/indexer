import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { ChainInfo } from '~/model'
import Rpc from '~/util/rpc'

const testRequire = createRequire(__filename)
const contextsPath = testRequire.resolve('~/contexts')
const queuePath = testRequire.resolve('~/queue/validators/validators.queue')
const originalContexts = testRequire.cache[contextsPath]
const originalQueue = testRequire.cache[queuePath]
const contextsModule = new Module(contextsPath)
contextsModule.loaded = true
let manager: unknown
contextsModule.exports = { connectionManager: () => Promise.resolve(manager) }
testRequire.cache[contextsPath] = contextsModule
const queueModule = new Module(queuePath)
queueModule.loaded = true
queueModule.exports = { default: { add: () => assert.fail('range repair must not queue more jobs') } }
testRequire.cache[queuePath] = queueModule
const { backfillChainFinality } = testRequire(
    '~/worker/jobs/validators/backfill-chain-finality'
) as typeof import('~/worker/jobs/validators/backfill-chain-finality')
after(() => {
    testRequire.cache[contextsPath] = originalContexts
    testRequire.cache[queuePath] = originalQueue
})

void test('repair marks old canonical blocks but does not mark an orphaned hash', async (t) => {
    const rows = [
        new ChainInfo({
            id: '0x100',
            blockHash: '0x100',
            blockNumber: 100,
            genesisHash: '0xgenesis',
            finalized: false,
        }),
        new ChainInfo({
            id: '0xorphan',
            blockHash: '0xorphan',
            blockNumber: 101,
            genesisHash: '0xgenesis',
            finalized: false,
        }),
        new ChainInfo({ id: '0x102', blockHash: '0x102', blockNumber: 102, genesisHash: '0xgenesis', finalized: null }),
    ]
    const canonicalHashes = new Map([
        [100, '0x100'],
        [101, '0x101'],
        [102, '0x102'],
    ])
    t.mock.method(Rpc, 'getInstance', () =>
        Promise.resolve({
            api: {
                genesisHash: { toString: () => '0xgenesis' },
                rpc: {
                    chain: {
                        getFinalizedHead: () => Promise.resolve('0x102'),
                        getHeader: () => Promise.resolve({ number: { toNumber: () => 102 } }),
                        getBlockHash: (height: number) =>
                            Promise.resolve({ toString: () => canonicalHashes.get(height) }),
                    },
                },
            },
        } as unknown as Rpc)
    )

    manager = {
        getRepository: () => ({
            createQueryBuilder: () => {
                const params: Record<string, number | string> = {}
                const builder = {
                    where: (_sql: string, values: Record<string, number | string>) => {
                        Object.assign(params, values)
                        return builder
                    },
                    andWhere: (_sql: string, values?: Record<string, number | string>) => {
                        Object.assign(params, values)
                        return builder
                    },
                    orderBy: () => builder,
                    addOrderBy: () => builder,
                    take: () => builder,
                    getMany: () =>
                        Promise.resolve(
                            rows
                                .filter(
                                    (row) =>
                                        row.finalized !== true &&
                                        row.blockNumber >= params.fromBlock &&
                                        row.blockNumber <= params.upper &&
                                        row.genesisHash === params.genesisHash &&
                                        (row.blockNumber > params.cursorHeight ||
                                            (row.blockNumber === params.cursorHeight && row.id > params.cursorId))
                                )
                                .map((row) => new ChainInfo(row))
                        ),
                }
                return builder
            },
        }),
        save: (updated: ChainInfo[]) => {
            for (const row of updated) {
                const stored = rows.find((candidate) => candidate.id === row.id)
                assert(stored)
                stored.finalized = row.finalized
            }
            return Promise.resolve(updated)
        },
    }
    const messages: string[] = []
    const job = {
        data: { fromBlock: 100, toBlock: 102 },
        log: (message: string) => {
            messages.push(message)
            return Promise.resolve(1)
        },
        updateProgress: () => Promise.resolve(),
    } as unknown as Parameters<typeof backfillChainFinality>[0]

    await backfillChainFinality(job)

    assert.deepEqual(
        rows.map((row) => row.finalized),
        [true, false, true]
    )
    assert.match(messages[0], /finalized 2, non-canonical 1/)
})
