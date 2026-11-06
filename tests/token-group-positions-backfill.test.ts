import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { FindOperator } from 'typeorm'
import {
    Event,
    MultiTokensTokenCreated,
    MultiTokensTokenGroupAdded,
    MultiTokensTokenGroupsUpdated,
    Token,
    TokenGroup,
    TokenGroupToken,
} from '~/model'

type Fixture = {
    tokens: Token[]
    events: Map<string, Event[]>
    databaseConnections: number
    rpcConnections: number
    historyReads: string[]
    updates: { id: string; position: number }[]
    concurrentPosition?: number
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
            transaction: (isolation: string, callback: (tx: unknown) => Promise<unknown>) => {
                assert.equal(isolation, 'REPEATABLE READ')
                return callback({
                    findOne: (entity: unknown, options: { where: { id: string } }) => {
                        assert.equal(entity, Token)
                        return Promise.resolve(current.tokens.find((token) => token.id === options.where.id))
                    },
                    find: (
                        entity: unknown,
                        options: {
                            where: { collectionId: string; name: FindOperator<string>; data: FindOperator<string> }
                            take: number
                        }
                    ) => {
                        assert.equal(entity, Event)
                        assert.equal(options.where.data.type, 'raw')
                        const tokenId = options.where.data.objectLiteralParameters?.tokenId as string
                        const id = `${options.where.collectionId}-${tokenId}`
                        current.historyReads.push(id)
                        assert(options.take <= 10_001, 'event history must remain bounded')
                        return Promise.resolve(current.events.get(id) ?? [])
                    },
                    update: (
                        entity: unknown,
                        criteria: {
                            id: string
                            token: { id: string }
                            tokenGroup: { id: string }
                            position: FindOperator<number> | number
                        },
                        changes: { position: number }
                    ) => {
                        assert.equal(entity, TokenGroupToken)
                        if (typeof criteria.position !== 'number') assert.equal(criteria.position.type, 'isNull')
                        assert.deepEqual(Object.keys(changes), ['position'])
                        const membership = current.tokens
                            .flatMap((token) => token.tokenGroupTokens)
                            .find((row) => row.id === criteria.id && row.token.id === criteria.token.id)
                        assert(membership, 'repair must update an existing membership')
                        assert.equal(membership.tokenGroup.id, criteria.tokenGroup.id)
                        if (current.concurrentPosition !== undefined) membership.position = current.concurrentPosition
                        const expectedPosition = typeof criteria.position === 'number' ? criteria.position : null
                        if (membership.position !== expectedPosition) return Promise.resolve({ affected: 0 })
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
            throw new Error('Event-based position repair must not require RPC')
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

function event(id: string, data: Event['data']): Event {
    assert(data)
    return new Event({ id, name: data.isTypeOf, data })
}

function history(id: string, groups = ['32', '33']): Event[] {
    const [collectionId, tokenId] = id.split('-').map(BigInt)
    return [
        event('0002614762-50e63-000005', new MultiTokensTokenCreated({ collectionId, tokenId })),
        ...groups.map((group, index) =>
            event(
                `0006825${index.toString().padStart(3, '0')}-1c5fe-000004`,
                new MultiTokensTokenGroupAdded({ collectionId, tokenId, tokenGroupId: BigInt(group) })
            )
        ),
    ]
}

function fixture(tokens: Token[] = []): Fixture {
    current = {
        tokens,
        events: new Map(tokens.map((row) => [row.id, history(row.id)])),
        databaseConnections: 0,
        rpcConnections: 0,
        historyReads: [],
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

void test('event repair validates a bounded token scope before database access', async () => {
    const base = { tokenIds: ['3844-11'] }
    for (const data of [
        undefined,
        {},
        { tokenIds: [] },
        { tokenIds: '3844-11' },
        { tokenIds: Array.from({ length: 101 }, (_, index) => `3844-${index}`) },
        { tokenIds: [11] },
        ...['', '11', '-1-11', '3844--1', '03844-11', '3844-011', '3844-1.5'].map((id) => ({ tokenIds: [id] })),
        { ...base, dryRun: 'false' },
    ]) {
        const state = fixture()
        await assert.rejects(syncTokenGroupPositions(job(data).request))
        assert.equal(state.databaseConnections, 0)
        assert.equal(state.rpcConnections, 0)
    }
})

void test('event repair defaults to a dry run without a block hash or RPC', async () => {
    const row = token('3844-11', [
        ['32', null],
        ['33', null],
    ])
    const state = fixture([row])
    const request = job({ tokenIds: [row.id] })

    await syncTokenGroupPositions(request.request)

    assert.deepEqual(state.updates, [])
    assert(row.tokenGroupTokens.every((membership) => membership.position === null))
    assert.equal(state.rpcConnections, 0)
    assert(request.messages.some((message) => message.includes('2 positions would change')))
    assert.equal(request.progress.at(-1), 100)
})

void test('assignments correct populated positions using only token IDs', async () => {
    const row = token('105178-36', [
        ['76', 0],
        ['71', 2],
        ['22', 7],
    ])
    const state = fixture([row])
    const groups = ['22', '71', '76']
    state.events.set(row.id, history(row.id, groups))
    const data = { tokenIds: [row.id] }
    const preview = job(data)

    await syncTokenGroupPositions(preview.request)
    assert(preview.messages.some((message) => message.includes('3 positions would change')))
    assert.deepEqual(state.updates, [])

    await syncTokenGroupPositions(job({ ...data, dryRun: false }).request)
    assert.deepEqual(
        row.tokenGroupTokens.map((membership) => membership.position),
        [2, 1, 0]
    )

    await syncTokenGroupPositions(job({ ...data, dryRun: false }).request)
    assert.equal(state.updates.length, 3)
    assert.equal(state.rpcConnections, 0)
})

void test('event repair rejects a concurrent change to a populated position', async () => {
    const row = token('105178-2', [
        ['32', 1],
        ['33', 0],
    ])
    const state = fixture([row])
    const data = { tokenIds: [row.id], dryRun: false }
    state.concurrentPosition = 2
    await assert.rejects(syncTokenGroupPositions(job(data).request), /changed during repair/)
    assert.deepEqual(state.updates, [])
})

void test('event repair reconstructs production assignment order and follows explicit reorder events', async () => {
    const first = token('3844-11', [
        ['33', null],
        ['32', null],
    ])
    const second = token('3844-6', [
        ['32', 0],
        ['33', 1],
    ])
    const state = fixture([second, first])
    const secondHistory = state.events.get(second.id)
    assert(secondHistory)
    secondHistory.push(
        event(
            '0007000000-aabbc-000004',
            new MultiTokensTokenGroupsUpdated({ collectionId: 3844n, tokenId: 6n, tokenGroups: [33n, 32n] })
        )
    )
    const request = job({ tokenIds: [first.id, second.id], dryRun: false })

    await syncTokenGroupPositions(request.request)

    assert.deepEqual(state.updates, [
        { id: '11-33', position: 1 },
        { id: '11-32', position: 0 },
        { id: '6-32', position: 1 },
        { id: '6-33', position: 0 },
    ])
    assert.equal(state.rpcConnections, 0)
    assert(request.messages.some((message) => message.includes('0007000000-aabbc-000004')))
})

void test('event repair preserves matching positions and is idempotent', async () => {
    const row = token('3844-11', [
        ['32', 0],
        ['33', null],
    ])
    const state = fixture([row])
    const data = { tokenIds: [row.id, row.id], dryRun: false }

    await syncTokenGroupPositions(job(data).request)
    await syncTokenGroupPositions(job(data).request)

    assert.deepEqual(state.updates, [{ id: '11-33', position: 1 }])
    assert.deepEqual(state.historyReads, [row.id, row.id])
})

void test('event repair skips missing history, mismatched memberships and absent tokens', async () => {
    const rows = [1, 2, 3].map((id) =>
        token(`3844-${id}`, [
            ['32', 1],
            ['33', 0],
        ])
    )
    const state = fixture(rows)
    state.events.set(rows[0].id, [])
    state.events.set(rows[1].id, history(rows[1].id, ['32', '34']))
    state.events.set(rows[2].id, history(rows[2].id).slice(1))
    const request = job({ tokenIds: [...rows.map((row) => row.id), '3844-99'], dryRun: false })

    await syncTokenGroupPositions(request.request)

    assert.deepEqual(state.updates, [])
    assert.equal(request.progress.at(-1), 100)
    assert.equal(request.messages.filter((message) => message.startsWith('Skipped')).length, 4)
})

void test('event repair rejects concurrent position changes instead of overwriting them', async () => {
    const row = token('3844-11', [['32', null]])
    const state = fixture([row])
    state.events.set(row.id, history(row.id, ['32']))
    state.concurrentPosition = 9

    await assert.rejects(syncTokenGroupPositions(job({ tokenIds: [row.id], dryRun: false }).request), /changed/)

    assert.deepEqual(state.updates, [])
    assert.equal(row.tokenGroupTokens[0].position, 9)
})

void test('event repair preserves bigint identifiers and bounds retained event history', async () => {
    const collectionId = 9_007_199_254_740_993n
    const tokenId = 340_282_366_920_938_463_463_374_607_431_768_211_455n
    const groupId = 9_007_199_254_740_995n
    const row = token(`${collectionId}-${tokenId}`, [[groupId.toString(), null]])
    const state = fixture([row])
    state.events.set(row.id, history(row.id, [groupId.toString()]))
    await syncTokenGroupPositions(job({ tokenIds: [row.id], dryRun: false }).request)
    assert.deepEqual(state.updates, [{ id: `${tokenId}-${groupId}`, position: 0 }])

    row.tokenGroupTokens[0].position = null
    state.updates = []
    state.events.set(
        row.id,
        Array.from({ length: 10_001 }, () => history(row.id)[0])
    )
    await syncTokenGroupPositions(job({ tokenIds: [row.id], dryRun: false }).request)
    assert.deepEqual(state.updates, [])
})
