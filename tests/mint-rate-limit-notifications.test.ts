import assert from 'node:assert/strict'
import test from 'node:test'
import { MintRateLimitState } from '~/model'
import {
    mintRateLimitNotification,
    mintRateLimitAvailableAt,
    mintRateLimitBlocked,
    mintRateLimitStatusNotifications,
} from '~/pallet/multi-tokens/mint-rate-limit-notifications'

void test('the Canary mint reaches the one-unit limit and reopens at the exact quiet block', () => {
    const state = {
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    }
    assert.equal(mintRateLimitBlocked(state, 13878479n), true)
    assert.equal(mintRateLimitAvailableAt(state, 13878479n), 13878630n)
    assert.equal(mintRateLimitBlocked(state, 13878630n), false)
    const event = mintRateLimitNotification('Reached', { collectionId: '124650', tokenId: '3' }, 13878479n, state.limit)
    assert.equal(event.name, 'MultiTokens.MintRateLimitReached')
    assert.deepEqual(event.body, {
        collectionId: '124650',
        tokenId: '3',
        effectiveBlock: '13878479',
        limit: { max: '1', period: '144' },
    })
    assert.equal(
        mintRateLimitNotification('Reached', { collectionId: '124650', tokenId: '3' }, 13878479n, state.limit).id,
        event.id
    )
})

void test('a removal sends a null limit and a collection event has no token id', () => {
    const event = mintRateLimitNotification('ChangeApplied', { collectionId: '124745' }, 200n, null)
    assert.equal(event.name, 'MultiTokens.MintRateLimitChangeApplied')
    assert.deepEqual(event.body, { collectionId: '124745', tokenId: null, effectiveBlock: '200', limit: null })
})

void test('a mint can publish a reached alert and a previous reopening without scheduling a job', () => {
    const initial = new MintRateLimitState({
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    })
    const subject = { collectionId: '124650', tokenId: '3' }
    const events = mintRateLimitStatusNotifications(subject, null, initial, 13878479n)
    assert.deepEqual(
        events.map(({ name }) => name),
        ['MultiTokens.MintRateLimitReached']
    )

    const next = new MintRateLimitState({
        limit: initial.limit,
        window: { lastSlot: 771035n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    })
    const later = mintRateLimitStatusNotifications(subject, initial, next, 13878630n)
    assert.deepEqual(
        later.map(({ name, body }) => [name, body.effectiveBlock]),
        [
            ['MultiTokens.MintRateLimitAvailable', '13878630'],
            ['MultiTokens.MintRateLimitReached', '13878630'],
        ]
    )
})
