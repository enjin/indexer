import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import { Attribute, Collection, Metadata, Token, TokenGroup, TokenGroupToken, TransferPolicy } from '~/model'
import { frozenEventModel } from '~/pallet/multi-tokens/events/frozen'
import { attributes } from '~/pallet/multi-tokens/storage/attributes'
import { decodeAttributeStorageValue } from '~/pallet/multi-tokens/storage/attribute-values'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
assert.equal(testRequire.cache[testRequire.resolve('bullmq')], undefined, 'BullMQ loaded before processor test setup')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = {
    QueueUtils: {
        dispatchComputeMetadata: () => Promise.resolve(),
        dispatchComputeStats: () => Promise.resolve(),
    },
}
testRequire.cache[queueModulePath] = queueModule

const { attributeSet } = testRequire(
    '~/pallet/multi-tokens/processors/attribute-set'
) as typeof import('~/pallet/multi-tokens/processors/attribute-set')
const { frozen } = testRequire(
    '~/pallet/multi-tokens/processors/frozen'
) as typeof import('~/pallet/multi-tokens/processors/frozen')
const { tokenGroupDestroyed } = testRequire(
    '~/pallet/multi-tokens/processors/token-group-destroyed'
) as typeof import('~/pallet/multi-tokens/processors/token-group-destroyed')
const { readAttributeStorage } = testRequire(
    '~/pallet/multi-tokens/processors/common/attribute-storage'
) as typeof import('~/pallet/multi-tokens/processors/common/attribute-storage')
assert.equal(testRequire.cache[testRequire.resolve('bullmq')], undefined, 'processor tests loaded real BullMQ queues')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function matrixV1040Runtime(call?: (method: string, params?: unknown[]) => Promise<unknown>): Runtime {
    const metadata = fs
        .readFileSync('typegen/canary-matrixchain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === 1040)

    assert(metadata)
    return new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata,
        undefined,
        call ? { call } : undefined
    )
}

function encodedAttributes(storageName = 'Attributes') {
    const runtime = matrixV1040Runtime()
    const type = runtime.description.storage.MultiTokens.items[storageName].value
    const current = runtime.scaleCodec.encodeToHex(type, {
        value: '0x617474726962757465',
        deposit: 123n,
        depositor: undefined,
        frozen: true,
    })
    const definition = runtime.description.types[type]
    assert.equal(definition.kind, TypeKind.Composite)

    const types = runtime.description.types.slice() as Type[]
    types[type] = { ...definition, fields: definition.fields.slice(0, -1) }
    const legacy = new Codec(types).encodeToHex(type, {
        value: '0x617474726962757465',
        deposit: 123n,
        depositor: undefined,
    })

    return { current, legacy }
}

function eventItem(runtime: Runtime, name: string, args: unknown, id = '10-2'): EventItem {
    return {
        id,
        name,
        args,
        block: { _runtime: runtime },
    } as EventItem
}

void test('attribute storage decoder accepts strict current and pre-v6 layouts', () => {
    const runtime = matrixV1040Runtime()
    const { current, legacy } = encodedAttributes()
    const group = encodedAttributes('TokenGroupAttributes')

    assert.deepEqual(decodeAttributeStorageValue(runtime, 'Attributes', current), {
        value: '0x617474726962757465',
        deposit: 123n,
        depositor: undefined,
        isFrozen: true,
    })
    assert.deepEqual(decodeAttributeStorageValue(runtime, 'Attributes', legacy), {
        value: '0x617474726962757465',
        deposit: 123n,
        depositor: undefined,
        isFrozen: false,
    })
    assert.equal(decodeAttributeStorageValue(runtime, 'TokenGroupAttributes', group.current).isFrozen, true)
    assert.equal(decodeAttributeStorageValue(runtime, 'TokenGroupAttributes', group.legacy).isFrozen, false)
})

void test('attribute storage decoder rejects malformed mixed-layout values', () => {
    const runtime = matrixV1040Runtime()
    const { current, legacy } = encodedAttributes()

    assert.throws(
        () => decodeAttributeStorageValue(runtime, 'Attributes', `${current.slice(0, -2)}ff`),
        /either current or pre-v6 attribute storage/
    )
    assert.throws(
        () => decodeAttributeStorageValue(runtime, 'Attributes', `${legacy}ff`),
        /either current or pre-v6 attribute storage/
    )
    assert.throws(
        () => decodeAttributeStorageValue(runtime, 'Attributes', '0xdeadbeef'),
        /either current or pre-v6 attribute storage/
    )
})

void test('attribute point reads support collection attributes and token zero', async () => {
    const { current } = encodedAttributes()
    let reads = 0
    const runtime = matrixV1040Runtime((method) => {
        assert.equal(method, 'state_getStorageAt')
        reads += 1
        return Promise.resolve(current)
    })
    const block = { _runtime: runtime, hash: '0x01' } as Block

    assert.equal((await attributes(block, { collectionId: 7n, key: '0x01' }))?.isFrozen, true)
    assert.equal((await attributes(block, { collectionId: 7n, tokenId: 0n, key: '0x01' }))?.isFrozen, true)
    assert.equal(reads, 2)
})

void test('frozen event identity includes attribute kind, raw key, and token zero relation', () => {
    const event = frozenEventModel({ id: '10-2', name: 'MultiTokens.Frozen', extrinsic: { id: '10-1' } } as EventItem, {
        collectionId: 7n,
        freezeType: { __kind: 'Attribute', tokenId: 0n, key: '0x0102' },
    })

    assert.equal(event.collectionId, '7')
    assert.equal(event.tokenId, '7-0')
    assert.equal(event.data.isTypeOf, 'MultiTokensFrozen')
    assert.equal(event.data.kind, 'Attribute')
    assert.equal(event.data.tokenId, 0n)
    assert.equal(event.data.attributeKey, '0x0102')
})

void test('attribute and token-group-attribute freeze processors leave collection transfer policy unchanged', async () => {
    const runtime = matrixV1040Runtime()
    const collection = new Collection({ id: '7', transferPolicy: new TransferPolicy({ isFrozen: false }) })
    const tokenAttribute = new Attribute({ id: '7-0-0x0102', isFrozen: false })
    const groupAttribute = new Attribute({ id: '9-0x0304-tg', isFrozen: false })
    const entities = new Map<string, unknown>([
        [collection.id, collection],
        [tokenAttribute.id, tokenAttribute],
        [groupAttribute.id, groupAttribute],
    ])
    const saved: unknown[] = []
    const ctx = {
        store: {
            findOne: (_entity: unknown, options: { where: { id: string } }) =>
                Promise.resolve(entities.get(options.where.id)),
            save: (entity: unknown) => Promise.resolve(saved.push(entity)),
        },
    } as never
    const block = { _runtime: runtime, hash: '0x01', timestamp: 1_000 } as Block

    await frozen(
        ctx,
        block,
        eventItem(runtime, 'MultiTokens.Frozen', {
            collectionId: '7',
            freezeType: { __kind: 'Attribute', tokenId: '0', key: '0x0102' },
        }),
        false
    )
    await frozen(
        ctx,
        block,
        eventItem(runtime, 'MultiTokens.Frozen', {
            collectionId: '7',
            freezeType: { __kind: 'TokenGroupAttribute', tokenGroupId: '9', key: '0x0304' },
        }),
        false
    )

    assert.equal(tokenAttribute.isFrozen, true)
    assert.equal(groupAttribute.isFrozen, true)
    assert.equal(collection.transferPolicy?.isFrozen, false)
    assert.deepEqual(saved, [tokenAttribute, groupAttribute])
})

void test('attribute set reconciles same-block frozen state and a later root overwrite from storage', async () => {
    const encoded = encodedAttributes()
    const currentFalse = encoded.current.slice(0, -2) + '00'
    let reads = 0
    let storageValue = encoded.current
    let expectedHash = '0x01'
    const runtime = matrixV1040Runtime((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert.equal(params?.[1], expectedHash)
        reads += 1
        return Promise.resolve(storageValue)
    })
    const collection = new Collection({ id: '7', metadata: new Metadata(), attributeCount: 0 })
    const token = new Token({ id: '7-0', metadata: new Metadata(), attributeCount: 1 })
    const attribute = new Attribute({
        id: '7-0-0x0102',
        key: 'key',
        value: 'old',
        isFrozen: false,
        token,
    })
    const ctx = {
        store: {
            findOne: (entity: unknown, options: { where: { id: string } }) => {
                if (entity === Attribute) {
                    return Promise.resolve(options.where.id === attribute.id ? attribute : undefined)
                }
                if (entity === Collection) return Promise.resolve(collection)
                if (entity === Token) return Promise.resolve(token)
                return Promise.resolve(undefined)
            },
            save: () => Promise.resolve(undefined),
            insert: () => Promise.resolve(undefined),
        },
    } as never
    const firstBlock = { _runtime: runtime, hash: '0x01', timestamp: 1_000 } as Block
    const args = { collectionId: '7', tokenId: '0', key: '0x0102', value: '0x6e6577' }

    await attributeSet(ctx, firstBlock, eventItem(runtime, 'MultiTokens.AttributeSet', args, '10-2'), false)
    await attributeSet(ctx, firstBlock, eventItem(runtime, 'MultiTokens.AttributeSet', args, '10-3'), false)

    assert.equal(attribute.isFrozen, true)
    assert.equal(reads, 1, 'duplicate same-block events should reuse the point read')

    storageValue = currentFalse
    expectedHash = '0x02'
    const secondBlock = { _runtime: runtime, hash: '0x02', timestamp: 2_000 } as Block
    await attributeSet(ctx, secondBlock, eventItem(runtime, 'MultiTokens.AttributeSet', args, '11-2'), false)

    assert.equal(attribute.isFrozen, false, 'authoritative root overwrite must be allowed to clear the indexed flag')
    assert.equal(reads, 2)
})

void test('legacy runtimes avoid attribute point reads when metadata has no frozen field', async () => {
    const metadata = fs
        .readFileSync('typegen/enjin-matrixchain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === 1031)
    assert(metadata)
    let reads = 0
    const runtime = new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata,
        undefined,
        { call: () => Promise.resolve((reads += 1)) }
    )

    const value = await readAttributeStorage({ _runtime: runtime, hash: '0x01' } as Block, {
        kind: 'attribute',
        collectionId: 7n,
        key: '0x0102',
    })

    assert.equal(value, undefined)
    assert.equal(reads, 0)
})

void test('token group destruction skips snapshot writes and removes children before the group', async () => {
    const runtime = matrixV1040Runtime()
    const block = { _runtime: runtime, hash: '0x01', timestamp: 1_000 } as Block
    const item = eventItem(runtime, 'MultiTokens.TokenGroupDestroyed', { tokenGroupId: '9' })
    let calls = 0
    const skipContext = {
        store: new Proxy(
            {},
            {
                get: () => () => {
                    calls += 1
                    throw new Error('snapshot replay touched the store')
                },
            }
        ),
    } as never

    await tokenGroupDestroyed(skipContext, block, item, true)
    assert.equal(calls, 0)

    const group = new TokenGroup({ id: '9' })
    const groupAttributes = [new Attribute({ id: '9-0x01-tg' })]
    const token = new Token({ id: '7-0' })
    const memberships = [new TokenGroupToken({ id: '9-7-0', token })]
    const removed: unknown[] = []
    const ctx = {
        store: {
            findOne: () => Promise.resolve(group),
            find: (entity: unknown) => Promise.resolve(entity === Attribute ? groupAttributes : memberships),
            remove: (entity: unknown) => Promise.resolve(removed.push(entity)),
        },
    } as never

    await tokenGroupDestroyed(ctx, block, item, false)
    assert.deepEqual(removed, [groupAttributes, memberships, group])
})
