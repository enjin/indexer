import assert from 'node:assert/strict'
import test from 'node:test'
import { MintRateLimitState } from '~/model'
import { toMintRateLimitStateModel } from '~/pallet/multi-tokens/processors/mint-rate-limit-state'
import { getSnsEventHash } from '~/util/tools'
import {
    mintRateLimitChangeApplied,
    mintRateLimitAvailableAt,
    mintRateLimitBlocked,
    mintRateLimitStatuses,
} from '~/pallet/multi-tokens/mint-rate-limit-notifications'

void test('the Canary mint reaches the one-unit limit and reopens at the exact quiet block', () => {
    const state = {
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    }
    assert.equal(mintRateLimitBlocked(state, 13878479n), true)
    assert.equal(mintRateLimitAvailableAt(state, 13878479n), 13878630n)
    assert.equal(mintRateLimitBlocked(state, 13878630n), false)
})

void test('a removal sends a null limit and a collection event has no token id', () => {
    const event = mintRateLimitChangeApplied({ collectionId: '124745' }, 200n, null)
    assert.equal(event.name, 'MultiTokens.MintRateLimitChangeApplied')
    assert.deepEqual(event.body, { collectionId: '124745', tokenId: null, effectiveBlock: '200', limit: null })
})

void test('a mint that exhausts a new window reports only the new limit hit', () => {
    const initial = new MintRateLimitState({
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    })
    const statuses = mintRateLimitStatuses('token', null, initial, 13878479n)
    assert.deepEqual(statuses, [
        { scope: 'token', status: 'reached', effectiveBlock: '13878479', limit: { max: '1', period: '144' } },
    ])
    assert.deepEqual(mintRateLimitStatuses('token', null, null, 13878479n), [])

    const next = new MintRateLimitState({
        limit: initial.limit,
        window: { lastSlot: 771035n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    })
    const later = mintRateLimitStatuses('collection', initial, next, 13878630n)
    assert.deepEqual(
        later.map(({ scope, status, effectiveBlock }) => [scope, status, effectiveBlock]),
        [['collection', 'reached', '13878630']]
    )
    initial.mintBlockedUntil = 13878630n
    assert.deepEqual(mintRateLimitStatuses('collection', initial, next, 13878630n), later)
})

void test('a mint reports a due reopening only if its refresh drops the deadline while minting remains available', () => {
    const limit = { max: 2n, period: 144n }
    const before = new MintRateLimitState({
        limit,
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 2n, 0n, 0n, 0n] },
        mintBlockedUntil: 13878630n,
    })
    const after = new MintRateLimitState({
        limit,
        window: { lastSlot: 771035n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    })
    assert.deepEqual(mintRateLimitStatuses('token', before, after, 13878630n), [
        { scope: 'token', status: 'available', effectiveBlock: '13878630', limit: { max: '2', period: '144' } },
    ])
    after.mintBlockedUntil = before.mintBlockedUntil
    assert.deepEqual(mintRateLimitStatuses('token', before, after, 13878630n), [])
    before.mintBlockedUntil = undefined
    after.mintBlockedUntil = undefined
    assert.deepEqual(mintRateLimitStatuses('token', before, after, 13878630n), [])
})

void test('a mint rate status does not change the existing mint SNS reorganization identity', () => {
    const body = { collectionId: 124650n, tokenId: 3n, amount: 1 }
    const plain = getSnsEventHash('MultiTokens.Minted', { ...body, mintRateLimitStatus: null })
    const reached = getSnsEventHash('MultiTokens.Minted', {
        ...body,
        mintRateLimitStatus: [{ scope: 'token', status: 'reached', effectiveBlock: '13878479' }],
    })
    assert.equal(reached, plain)
})

void test('Indexing an exhausted mint window stores the exact quiet reopening block', () => {
    const state = {
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    }
    assert.equal(toMintRateLimitStateModel(state, 13878479)?.mintBlockedUntil, 13878630n)
    const observed = toMintRateLimitStateModel(state, 13878479)
    assert.equal(toMintRateLimitStateModel(state, 13878630, observed?.mintBlockedUntil)?.mintBlockedUntil, 13878630n)
    assert.equal(toMintRateLimitStateModel(state, 13878630)?.mintBlockedUntil, undefined)
    assert.equal(
        toMintRateLimitStateModel({ ...state, pending: { effectiveBlock: 13878629n } }, 13878479)?.mintBlockedUntil,
        undefined
    )
    assert.equal(
        toMintRateLimitStateModel({ ...state, pending: { effectiveBlock: 13878631n } }, 13878479)?.mintBlockedUntil,
        13878630n
    )
})
