import assert from 'node:assert/strict'
import test from 'node:test'
import type { Job } from 'bullmq'
import * as contexts from '~/contexts'
import type { MintRateLimitNotificationJob } from '~/queue/mint-rate-limit-notifications'
import { Sns } from '~/util/sns'
import { publishMintRateLimitNotification } from '~/worker/jobs/tokens/publish-mint-rate-limit-notification'
import {
    mintRateLimitNotification,
    mintRateLimitAvailableAt,
    mintRateLimitBlocked,
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

void test('the Tokens publisher waits for the source to finalize and skips orphaned events', async (t) => {
    const event = mintRateLimitNotification('Reached', { collectionId: '124650', tokenId: '3' }, 200n, {
        max: 1n,
        period: 144n,
    })
    let height = 199
    let canonical = false
    const manager = {
        query: () => Promise.resolve([{ height }]),
        existsBy: () => Promise.resolve(canonical),
    }
    t.mock.method(contexts, 'connectionManager', () => Promise.resolve(manager))
    const send = t.mock.fn(() => Promise.resolve(true))
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))
    const moveToDelayed = t.mock.fn((at: number, token?: string) => {
        assert(at > Date.now())
        assert.equal(token, 'lock')
        return Promise.resolve()
    })
    const job = {
        data: { event, blockNumber: '200', source: { id: 'mint', block: 200 } },
        moveToDelayed,
    } as unknown as Job<MintRateLimitNotificationJob>

    await assert.rejects(publishMintRateLimitNotification(job, 'lock'), { name: 'DelayedError' })
    assert.equal(moveToDelayed.mock.callCount(), 1)
    assert.equal(send.mock.callCount(), 0)

    height = 200
    await publishMintRateLimitNotification(job, 'lock')
    assert.equal(send.mock.callCount(), 0)

    canonical = true
    await publishMintRateLimitNotification(job, 'lock')
    assert.deepEqual(
        send.mock.calls.map(({ arguments: args }) => args),
        [[event, 200n]]
    )
})

void test('the Tokens publisher waits for a scheduled removal to commit', async (t) => {
    const event = mintRateLimitNotification('ChangeApplied', { collectionId: '124745' }, 200n, null)
    let pending = true
    const manager = {
        query: () => Promise.resolve([{ height: 204 }]),
        findOne: () => Promise.resolve({ mintRateLimit: pending ? { pending: { effectiveBlock: 200n } } : null }),
    }
    t.mock.method(contexts, 'connectionManager', () => Promise.resolve(manager))
    const send = t.mock.fn(() => Promise.resolve(true))
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))
    const job = {
        data: { event, blockNumber: '200' },
        moveToDelayed: () => Promise.resolve(),
    } as unknown as Job<MintRateLimitNotificationJob>

    await assert.rejects(publishMintRateLimitNotification(job), { name: 'DelayedError' })
    assert.equal(send.mock.callCount(), 0)
    pending = false
    await publishMintRateLimitNotification(job)
    assert.deepEqual(
        send.mock.calls.map(({ arguments: args }) => args),
        [[event, 200n]]
    )
})

void test('quiet availability is sent only when the current window still opens at its queued block', async (t) => {
    const state = {
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    }
    const subject = { collectionId: '124650', tokenId: '3' }
    const event = mintRateLimitNotification('Available', subject, 13878630n, state.limit)
    let pending = true
    const manager = {
        query: () => Promise.resolve([{ height: 13878630 }]),
        existsBy: () => Promise.resolve(true),
        findOne: () =>
            Promise.resolve({ mintRateLimit: { ...state, pending: pending ? { effectiveBlock: 13878629n } : null } }),
    }
    t.mock.method(contexts, 'connectionManager', () => Promise.resolve(manager))
    const send = t.mock.fn(() => Promise.resolve(true))
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))
    const job = {
        data: {
            event,
            blockNumber: '13878630',
            source: { id: 'mint', block: 13878479 },
            availabilityFrom: '13878479',
        },
    } as unknown as Job<MintRateLimitNotificationJob>

    await publishMintRateLimitNotification(job)
    assert.equal(send.mock.callCount(), 0)
    pending = false
    await publishMintRateLimitNotification(job)
    assert.deepEqual(
        send.mock.calls.map(({ arguments: args }) => args),
        [[event, 13878630n]]
    )
})
