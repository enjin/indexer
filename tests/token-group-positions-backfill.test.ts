import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { FindOperator } from 'typeorm'
import { ChainInfo, Token, TokenGroup, TokenGroupToken } from '~/model'

const HASH = `0x${'ab'.repeat(32)}`
const OTHER_HASH = `0x${'cd'.repeat(32)}`
const GENESIS = `0x${'11'.repeat(32)}`
const HEIGHT = 100

type Fixture = {
    tokens: Token[]
    latest: ChainInfo | undefined
    canonicalHash: string
    finalizedHeight: number
    storageHeight: number
    genesisHash: string
    chainTokens: Map<string, { groups?: bigint[] } | undefined>
    databaseConnections: number
    rpcConnections: number
    storageHashes: string[]
    storageReads: [bigint, bigint][]
    updates: { id: string; position: number }[]
}

let current: Fixture
const testRequire = createRequire(__filename)
const originalModules = new Map<string, NodeJS.Module | undefined>()

function stubModule(name: string, exports: unknown): void {
    const path = testRequire.resolve(name)
    originalModules.set(path, testRequire.cache[path])
    const module = new Module(path)
    module.loaded = true
    module.exports = exports
    testRequire.cache[path] = module
}

stubModule('~/contexts', {
    connectionManager: () => {
        current.databaseConnections++
        return Promise.resolve({
            transaction: (isolation: string, callback: (tx: unknown) => Promise<void>) => {
                assert.equal(isolation, 'REPEATABLE READ')
                return callback({
                    find: (entity: unknown, options: { where?: { id: FindOperator<string> } }) => {
                        if (entity === ChainInfo) return Promise.resolve(current.latest ? [current.latest] : [])
                        assert.equal(entity, Token)
                        const ids = options.where?.id.value as string[]
                        assert(Array.isArray(ids), 'repair must query only its requested token IDs')
                        return Promise.resolve(current.tokens.filter((token) => ids.includes(token.id)))
                    },
                    update: (entity: unknown, criteria: { id: string }, changes: { position: number }) => {
                        assert.equal(entity, TokenGroupToken)
                        assert.deepEqual(Object.keys(changes), ['position'])
                        const membership = current.tokens
                            .flatMap((token) => token.tokenGroupTokens)
                            .find((row) => row.id === criteria.id)
                        assert(membership, 'repair must update an existing membership')
                        current.updates.push({ id: membership.id, position: changes.position })
                        membership.position = changes.position
                        return Promise.resolve({ affected: 1 })
                    },
                })
            },
        })
    },
})

stubModule('~/util/rpc', {
    __esModule: true,
    default: {
        getInstance: () => {
            current.rpcConnections++
            return Promise.resolve({
                api: {
                    genesisHash: { toString: () => current.genesisHash },
                    rpc: {
                        chain: {
                            getFinalizedHead: () => Promise.resolve(HASH),
                            getHeader: () => Promise.resolve({ number: { toNumber: () => current.finalizedHeight } }),
                            getBlockHash: (height: number) => {
                                assert.equal(height, HEIGHT)
                                return Promise.resolve({ toString: () => current.canonicalHash })
                            },
                        },
                    },
                },
            })
        },
    },
})

stubModule('~/worker/jobs/tokens/token-storage-reader', {
    FinalizedTokenStorageReader: {
        create: (_api: unknown, hash: string) => {
            current.storageHashes.push(hash)
            return Promise.resolve({
                hash,
                height: current.storageHeight,
                token: (collectionId: bigint, tokenId: bigint) => {
                    current.storageReads.push([collectionId, tokenId])
                    return Promise.resolve(current.chainTokens.get(`${collectionId}-${tokenId}`))
                },
            })
        },
    },
})

const { syncTokenGroupPositions } = testRequire(
    '~/worker/jobs/tokens/sync-token-group-positions'
) as typeof import('~/worker/jobs/tokens/sync-token-group-positions')

after(() => {
    for (const [path, original] of originalModules) testRequire.cache[path] = original
})

function token(id: string, memberships: [string, number | null][]): Token {
    const row = new Token({ id, tokenId: BigInt(id.split('-')[1]) })
    row.tokenGroupTokens = memberships.map(
        ([group, position]) =>
            new TokenGroupToken({
                id: `${row.tokenId}-${group}`,
                token: row,
                tokenGroup: new TokenGroup({ id: group }),
                position,
            })
    )
    return row
}

function fixture(tokens: Token[] = []): Fixture {
    current = {
        tokens,
        latest: new ChainInfo({ blockHash: HASH, blockNumber: HEIGHT, genesisHash: GENESIS }),
        canonicalHash: HASH,
        finalizedHeight: HEIGHT + 5,
        storageHeight: HEIGHT,
        genesisHash: GENESIS,
        chainTokens: new Map(),
        databaseConnections: 0,
        rpcConnections: 0,
        storageHashes: [],
        storageReads: [],
        updates: [],
    }
    return current
}

function job(data: unknown) {
    const messages: string[] = []
    const progress: number[] = []
    return {
        request: {
            data,
            log: (message: string) => {
                messages.push(message)
                return Promise.resolve(0)
            },
            updateProgress: (value: number) => {
                progress.push(value)
                return Promise.resolve()
            },
        } as Parameters<typeof syncTokenGroupPositions>[0],
        messages,
        progress,
    }
}

void test('position repair rejects missing or unbounded scope and invalid inputs before database or RPC access', async () => {
    const base = { tokenIds: ['3844-11'], blockHash: HASH }
    for (const data of [
        undefined,
        {},
        { ...base, tokenIds: [] },
        { ...base, tokenIds: '3844-11' },
        { ...base, tokenIds: Array.from({ length: 101 }, (_, index) => `3844-${index}`) },
        { ...base, tokenIds: [11] },
        ...['', '11', '-1-11', '3844--1', '03844-11', '3844-011', '3844-1.5'].map((id) => ({
            ...base,
            tokenIds: [id],
        })),
        { ...base, blockHash: undefined },
        { ...base, blockHash: '0x1234' },
        { ...base, blockHash: `0x${'zz'.repeat(32)}` },
        { ...base, dryRun: 'false' },
    ]) {
        const state = fixture()
        await assert.rejects(syncTokenGroupPositions(job(data).request))
        assert.equal(state.databaseConnections, 0)
        assert.equal(state.rpcConnections, 0)
    }
})

void test('position repair defaults to a dry run and pins token reads to the supplied indexed block', async () => {
    const row = token('3844-11', [
        ['32', null],
        ['33', null],
    ])
    const state = fixture([row])
    state.chainTokens.set(row.id, { groups: [33n, 32n] })
    const request = job({ tokenIds: [row.id], blockHash: HASH })

    await syncTokenGroupPositions(request.request)

    assert.deepEqual(state.updates, [])
    assert.deepEqual(
        row.tokenGroupTokens.map((membership) => membership.position),
        [null, null]
    )
    assert.deepEqual(state.storageHashes, [HASH])
    assert.deepEqual(state.storageReads, [[3844n, 11n]])
    assert.equal(request.progress.at(-1), 100)
    assert(request.messages.length > 0)
})

void test('position repair follows each token group list rather than database row or group token order', async () => {
    const first = token('3844-11', [
        ['33', null],
        ['32', null],
    ])
    const second = token('3844-6', [
        ['32', null],
        ['33', null],
    ])
    const state = fixture([second, first])
    state.chainTokens.set(first.id, { groups: [32n, 33n] })
    state.chainTokens.set(second.id, { groups: [33n, 32n] })
    const request = job({ tokenIds: [first.id, second.id], blockHash: HASH, dryRun: false })

    await syncTokenGroupPositions(request.request)

    assert.deepEqual(
        [...state.updates].sort((a, b) => a.id.localeCompare(b.id)),
        [
            { id: '11-32', position: 0 },
            { id: '11-33', position: 1 },
            { id: '6-32', position: 1 },
            { id: '6-33', position: 0 },
        ]
    )
    assert.equal(request.progress.at(-1), 100)
})

void test('position repair writes only incorrect positions and is idempotent on retry', async () => {
    const row = token('3844-11', [
        ['32', 0],
        ['33', 8],
    ])
    const state = fixture([row])
    state.chainTokens.set(row.id, { groups: [32n, 33n] })
    const data = { tokenIds: [row.id], blockHash: HASH, dryRun: false }

    await syncTokenGroupPositions(job(data).request)
    assert.deepEqual(state.updates, [{ id: '11-33', position: 1 }])
    await syncTokenGroupPositions(job(data).request)
    assert.deepEqual(state.updates, [{ id: '11-33', position: 1 }])
})

void test('position repair skips absent storage, unknown groups, mismatched memberships and duplicate chain groups', async () => {
    const rows = [1, 2, 3, 4].map((id) =>
        token(`3844-${id}`, [
            ['32', null],
            ['33', null],
        ])
    )
    const state = fixture(rows)
    state.chainTokens.set(rows[1].id, {})
    state.chainTokens.set(rows[2].id, { groups: [32n, 34n] })
    state.chainTokens.set(rows[3].id, { groups: [32n, 32n] })
    const request = job({ tokenIds: [...rows.map((row) => row.id), '3844-99'], blockHash: HASH, dryRun: false })

    await syncTokenGroupPositions(request.request)

    assert.deepEqual(state.updates, [])
    assert(rows.every((row) => row.tokenGroupTokens.every((membership) => membership.position === null)))
    assert.equal(request.progress.at(-1), 100)
})

void test('position repair preserves bigint collection, token and group identifiers', async () => {
    const collectionId = 9_007_199_254_740_993n
    const tokenId = 340_282_366_920_938_463_463_374_607_431_768_211_455n
    const groupId = 9_007_199_254_740_995n
    const row = token(`${collectionId}-${tokenId}`, [[groupId.toString(), null]])
    const state = fixture([row])
    state.chainTokens.set(row.id, { groups: [groupId] })

    await syncTokenGroupPositions(job({ tokenIds: [row.id], blockHash: HASH, dryRun: false }).request)

    assert.deepEqual(state.storageReads, [[collectionId, tokenId]])
    assert.deepEqual(state.updates, [{ id: `${tokenId}-${groupId}`, position: 0 }])
})

void test('position repair rejects wrong, missing, forked or unfinalized indexed snapshots without writes', async () => {
    const cases: ((state: Fixture) => void)[] = [
        (state) => {
            state.latest = undefined
        },
        (state) => {
            assert(state.latest)
            state.latest.blockHash = OTHER_HASH
        },
        (state) => {
            state.genesisHash = OTHER_HASH
        },
        (state) => {
            state.canonicalHash = OTHER_HASH
        },
        (state) => {
            state.finalizedHeight = HEIGHT - 1
        },
        (state) => {
            state.storageHeight = HEIGHT + 1
        },
    ]
    for (const configure of cases) {
        const row = token('3844-11', [['32', null]])
        const state = fixture([row])
        state.chainTokens.set(row.id, { groups: [32n] })
        configure(state)

        await assert.rejects(
            syncTokenGroupPositions(job({ tokenIds: [row.id], blockHash: HASH, dryRun: false }).request)
        )

        assert.deepEqual(state.updates, [])
    }
})
