import assert from 'node:assert/strict'
import test from 'node:test'
import {
    Event,
    MultiTokensEphemeralTokenDestroyed,
    MultiTokensTokenCreated,
    MultiTokensTokenDestroyed,
    MultiTokensTokenGroupAdded,
    MultiTokensTokenGroupRemoved,
    MultiTokensTokenGroupsUpdated,
} from '~/model'
import { tokenGroupOrderFromEvents } from '~/worker/jobs/tokens/token-group-event-order'

const identity = { collectionId: 3844n, tokenId: 11n }

function event(data: NonNullable<Event['data']>, index: number, blockNumber = 100): Event {
    return new Event({
        id: `${String(blockNumber).padStart(10, '0')}-abcde-${String(index).padStart(6, '0')}`,
        blockNumber,
        index,
        name: data.isTypeOf,
        data,
    })
}

const created = (index = 0, blockNumber = 100) => event(new MultiTokensTokenCreated(identity), index, blockNumber)
const added = (tokenGroupId: bigint, index: number, blockNumber = 100) =>
    event(new MultiTokensTokenGroupAdded({ ...identity, tokenGroupId }), index, blockNumber)
const removed = (tokenGroupId: bigint, index: number) =>
    event(new MultiTokensTokenGroupRemoved({ ...identity, tokenGroupId }), index)
const updated = (tokenGroups: bigint[], index: number) =>
    event(new MultiTokensTokenGroupsUpdated({ ...identity, tokenGroups }), index)

void test('creation anchors an empty group list and additions preserve assignment order', () => {
    const baseline = created()
    assert.deepEqual(tokenGroupOrderFromEvents([baseline]), { groups: [], baselineEventId: baseline.id })
    assert.deepEqual(tokenGroupOrderFromEvents([baseline, added(33n, 1), added(32n, 2)]), {
        groups: ['33', '32'],
        baselineEventId: baseline.id,
    })
})

void test('the latest full group list replaces previous assignment order and provides its own baseline', () => {
    const baseline = updated([32n, 33n], 3)
    assert.deepEqual(tokenGroupOrderFromEvents([created(), added(33n, 1), added(32n, 2), baseline, added(34n, 4)]), {
        groups: ['32', '33', '34'],
        baselineEventId: baseline.id,
    })
})

void test('a full group list is sufficient without earlier creation history, including an empty list', () => {
    const baseline = updated([], 2)
    assert.deepEqual(tokenGroupOrderFromEvents([added(32n, 0), baseline, added(33n, 3)]), {
        groups: ['33'],
        baselineEventId: baseline.id,
    })
})

void test('additions alone do not prove a complete baseline', () => {
    assert.equal(tokenGroupOrderFromEvents([]), undefined)
    assert.equal(tokenGroupOrderFromEvents([added(32n, 1), added(33n, 2)]), undefined)
})

void test('orders by numeric block and event index regardless of input order or event ID text', () => {
    const baseline = created(10, 9)
    const first = added(33n, 11, 9)
    const second = added(32n, 0, 10)
    baseline.id = 'z'
    first.id = 'y'
    second.id = 'a'
    assert.deepEqual(tokenGroupOrderFromEvents([second, first, baseline]), {
        groups: ['33', '32'],
        baselineEventId: 'z',
    })
})

void test('derives missing legacy ordinals from Subsquid event IDs', () => {
    const baseline = created()
    baseline.blockNumber = null
    baseline.index = null
    const addition = added(32n, 1)
    addition.index = undefined
    assert.deepEqual(tokenGroupOrderFromEvents([addition, baseline]), {
        groups: ['32'],
        baselineEventId: baseline.id,
    })
})

void test('rejects missing, invalid or conflicting event ordinals', () => {
    for (const changes of [
        { id: 'unparseable', index: null },
        { index: -1 },
        { blockNumber: 1.5 },
        { blockNumber: 101, index: null },
        { blockNumber: null, index: 8 },
    ]) {
        const broken = Object.assign(added(32n, 1), changes)
        assert.equal(tokenGroupOrderFromEvents([created(), broken, updated([32n], 2)]), undefined)
    }
})

void test('rejects duplicate event coordinates even if a later full list exists', () => {
    assert.equal(tokenGroupOrderFromEvents([created(), added(32n, 0), updated([32n], 2)]), undefined)
})

void test('duplicate additions invalidate the order until a later full replacement', () => {
    const history = [created(), added(32n, 1), added(32n, 2)]
    assert.equal(tokenGroupOrderFromEvents(history), undefined)
    const baseline = updated([33n, 32n], 3)
    assert.deepEqual(tokenGroupOrderFromEvents([...history, baseline]), {
        groups: ['33', '32'],
        baselineEventId: baseline.id,
    })
})

void test('unknown removals invalidate the order until a later creation or full list', () => {
    const history = [created(), removed(32n, 1)]
    assert.equal(tokenGroupOrderFromEvents(history), undefined)
    const baseline = created(2)
    assert.deepEqual(tokenGroupOrderFromEvents([...history, baseline, added(33n, 3)]), {
        groups: ['33'],
        baselineEventId: baseline.id,
    })
})

void test('supports removals with an unambiguous remaining order and puts re-added groups last', () => {
    const baseline = updated([32n, 33n], 0)
    assert.deepEqual(tokenGroupOrderFromEvents([baseline, removed(32n, 1), added(32n, 2)]), {
        groups: ['33', '32'],
        baselineEventId: baseline.id,
    })
    assert.deepEqual(tokenGroupOrderFromEvents([baseline, removed(32n, 1), removed(33n, 2)]), {
        groups: [],
        baselineEventId: baseline.id,
    })
})

void test('last and penultimate removals preserve a provable order', () => {
    const baseline = updated([32n, 33n, 34n, 35n], 0)
    const history = [baseline, removed(34n, 1), removed(35n, 2), added(36n, 3)]
    assert.deepEqual(tokenGroupOrderFromEvents(history), {
        groups: ['32', '33', '36'],
        baselineEventId: baseline.id,
    })
})

void test('does not guess when an earlier removal can reorder surviving groups', () => {
    const history = [updated([32n, 33n, 34n], 0), removed(32n, 1), added(35n, 2)]
    assert.equal(tokenGroupOrderFromEvents(history), undefined)
    const baseline = updated([34n, 33n, 35n], 3)
    assert.deepEqual(tokenGroupOrderFromEvents([...history, baseline]), {
        groups: ['34', '33', '35'],
        baselineEventId: baseline.id,
    })
})

for (const data of [new MultiTokensTokenDestroyed(identity), new MultiTokensEphemeralTokenDestroyed(identity)]) {
    void test(`${data.isTypeOf} clears the previous token lifetime`, () => {
        const history = [created(), added(32n, 1), event(data, 2)]
        assert.equal(tokenGroupOrderFromEvents(history), undefined)
        assert.equal(tokenGroupOrderFromEvents([...history, added(33n, 3)]), undefined)
        const baseline = created(4)
        assert.deepEqual(tokenGroupOrderFromEvents([...history, baseline, added(33n, 5)]), {
            groups: ['33'],
            baselineEventId: baseline.id,
        })
    })
}

void test('preserves bigint group IDs beyond the safe integer range', () => {
    const baseline = updated([9_007_199_254_740_993n, 340_282_366_920_938_463_463_374_607_431_768_211_455n], 0)
    assert.deepEqual(tokenGroupOrderFromEvents([baseline]), {
        groups: ['9007199254740993', '340282366920938463463374607431768211455'],
        baselineEventId: baseline.id,
    })
})

void test('duplicate groups in a full list invalidate it until a valid replacement', () => {
    const history = [created(), updated([32n, 32n], 1)]
    assert.equal(tokenGroupOrderFromEvents(history), undefined)
    const baseline = updated([33n], 2)
    assert.deepEqual(tokenGroupOrderFromEvents([...history, baseline]), {
        groups: ['33'],
        baselineEventId: baseline.id,
    })
})
