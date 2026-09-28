import assert from 'node:assert/strict'
import test from 'node:test'
import type { EventItem, ExtrinsicItem } from '~/contexts'
import type { SnsEvent } from '~/util/sns'
import { SnsEventCache } from '~/util/sns-event-cache'

function block(height: number, branch = 'a') {
    return { height, hash: `0x${branch.repeat(56)}${height.toString(16).padStart(8, '0')}` }
}

function transaction(header: ReturnType<typeof block>, hash: string, indices: number[], callAddress: number[] = []) {
    const extrinsic = {
        hash,
        signature: { address: 'alice', signedExtensions: { CheckNonce: 1 } },
        events: [],
    } as unknown as ExtrinsicItem
    extrinsic.events = indices.map(
        (index) =>
            ({
                id: `${header.height.toString().padStart(10, '0')}-${header.hash.slice(2, 7)}-${index.toString().padStart(6, '0')}`,
                index,
                name: 'MultiTokens.Transferred',
                callAddress,
                extrinsic,
            }) as EventItem
    )
    return extrinsic.events
}

function notification(item: EventItem): SnsEvent {
    return {
        id: item.id,
        name: item.name,
        body: { from: 'alice', to: 'bob', amount: 1n, extrinsic: item.extrinsic?.hash },
    }
}

function publish(cache: SnsEventCache, header: ReturnType<typeof block>, item: EventItem) {
    const event = cache.prepare(header, item, notification(item))
    if (event) cache.record(header, item, event)
    return event
}

void test('identical transfers in one canonical block and its successor are all published', () => {
    const cache = new SnsEventCache()
    const first = block(101)
    cache.beginBlock(first)
    const [a, b] = transaction(first, '0xtx1', [2, 3])
    const [c] = transaction(first, '0xtx2', [8])
    for (const item of [a, b, c]) assert.deepEqual(publish(cache, first, item), notification(item))

    const next = block(102)
    cache.beginBlock(next)
    const [d] = transaction(next, '0xtx3', [2])
    assert.deepEqual(publish(cache, next, d), notification(d))
})

void test('only the same block hash and event index are deduplicated', () => {
    const cache = new SnsEventCache()
    const header = block(101)
    const [item] = transaction(header, '0xtx1', [2])
    cache.beginBlock(header)
    assert.ok(publish(cache, header, item))
    cache.beginBlock(header)
    assert.equal(publish(cache, header, item), undefined)
})

void test('replacement links the same transaction occurrences despite changed block-wide indices', () => {
    const cache = new SnsEventCache()
    const original = block(101)
    cache.beginBlock(original)
    const old = transaction(original, '0xtx1', [2, 3])
    old.forEach((item) => publish(cache, original, item))

    const replacement = block(101, 'b')
    cache.beginBlock(replacement)
    const fresh = transaction(replacement, '0xtx1', [7, 8])
    for (let index = 0; index < fresh.length; index++) {
        const event = publish(cache, replacement, fresh[index])
        assert.equal(event?.body.isReorganized, true)
        assert.equal(event.body.reorganizedId, old[index].id)
        assert.equal(publish(cache, replacement, fresh[index]), undefined)
    }
})

void test('empty replacement blocks orphan descendants and allow reinclusion at a different height', () => {
    const cache = new SnsEventCache()
    cache.beginBlock(block(101))
    const original = block(102)
    cache.beginBlock(original)
    const [old] = transaction(original, '0xtx1', [2])
    publish(cache, original, old)

    cache.beginBlock(block(101, 'b'))
    cache.beginBlock(block(102, 'b'))
    const replacement = block(103, 'b')
    cache.beginBlock(replacement)
    const [item] = transaction(replacement, '0xtx1', [9])
    assert.equal(publish(cache, replacement, item)?.body.reorganizedId, old.id)
})

void test('unrelated transactions and hook events on a replaced block are not speculative matches', () => {
    const cache = new SnsEventCache()
    const original = block(101)
    cache.beginBlock(original)
    const [old] = transaction(original, '0xtx1', [2])
    publish(cache, original, old)

    const replacement = block(101, 'b')
    cache.beginBlock(replacement)
    const [item] = transaction(replacement, '0xtx2', [2])
    assert.deepEqual(publish(cache, replacement, item), notification(item))
    const hook = { ...item, index: 3, extrinsic: undefined } as EventItem
    assert.deepEqual(publish(cache, replacement, hook), notification(hook))
})

void test('returning to a former branch links the most recently orphaned event', () => {
    const cache = new SnsEventCache()
    const a = block(101)
    const b = block(101, 'b')
    const [eventA] = transaction(a, '0xtx1', [2])
    const [eventB] = transaction(b, '0xtx1', [4])
    cache.beginBlock(a)
    publish(cache, a, eventA)
    cache.beginBlock(b)
    assert.equal(publish(cache, b, eventB)?.body.reorganizedId, eventA.id)
    cache.beginBlock(a)
    assert.equal(publish(cache, a, eventA)?.body.reorganizedId, eventB.id)
    assert.equal(publish(cache, a, eventA), undefined)
})

void test('unsigned extrinsics with identical encoded hashes are not guessed to be the same execution', () => {
    const cache = new SnsEventCache()
    const original = block(101)
    const replacement = block(101, 'b')
    const [old] = transaction(original, '0xunsigned', [2])
    const [fresh] = transaction(replacement, '0xunsigned', [2])
    assert.ok(old.extrinsic)
    assert.ok(fresh.extrinsic)
    delete old.extrinsic.signature
    delete fresh.extrinsic.signature
    cache.beginBlock(original)
    publish(cache, original, old)
    cache.beginBlock(replacement)
    assert.deepEqual(publish(cache, replacement, fresh), notification(fresh))
    assert.equal(publish(cache, replacement, fresh), undefined)
})

void test('call addresses preserve distinct occurrences when sibling calls emit different numbers of events', () => {
    const cache = new SnsEventCache()
    const original = block(101)
    const replacement = block(101, 'b')
    const [old] = transaction(original, '0xtx1', [3], [1])
    const [fresh] = transaction(replacement, '0xtx1', [8], [1])
    // The preceding sibling now emits the same event name twice. Its events
    // must not change the ordinal used to identify the event from call [1].
    const siblings = transaction(replacement, '0xtx1', [6, 7], [0])
    assert.ok(fresh.extrinsic)
    fresh.extrinsic.events.unshift(...siblings)
    cache.beginBlock(original)
    publish(cache, original, old)
    cache.beginBlock(replacement)
    assert.equal(publish(cache, replacement, fresh)?.body.reorganizedId, old.id)
})

void test('unpublished notifications remain retryable after validation or batch failure', () => {
    const cache = new SnsEventCache()
    const header = block(101)
    const [item] = transaction(header, '0xtx1', [2])
    cache.beginBlock(header)
    assert.ok(cache.prepare(header, item, notification(item)))
    // No record: validation/send was never reached before the callback failed.
    cache.beginBlock(header)
    assert.deepEqual(publish(cache, header, item), notification(item))
    assert.equal(publish(cache, header, item), undefined)
})

void test('expiration is applied before lookup even when no notifications have been sent', () => {
    let now = 0
    const cache = new SnsEventCache(() => now)
    const header = block(101)
    const [item] = transaction(header, '0xtx1', [2])
    cache.beginBlock(header)
    publish(cache, header, item)
    now = 30_000
    // An idle interval does not keep a stale event suppressed for one extra pass.
    assert.deepEqual(publish(cache, header, item), notification(item))
    now = 60_000
    const replacement = block(101, 'b')
    cache.beginBlock(replacement)
    const [fresh] = transaction(replacement, '0xtx1', [4])
    assert.deepEqual(publish(cache, replacement, fresh), notification(fresh))
})
