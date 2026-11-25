import assert from 'node:assert/strict'
import test, { type TestContext } from 'node:test'
import type { Job } from 'bullmq'
import * as contexts from '~/contexts'
import config from '~/util/config'
import * as notificationQueue from '~/queue/mint-rate-limit-notifications'
import { applyPendingMintRateLimitChanges } from '~/worker/jobs/tokens/apply-pending-mint-rate-limit-changes'
import type { PendingMintRateLimitNotification } from '~/queue/mint-rate-limit-notifications'
import { Sns } from '~/util/sns'
import { publishMintRateLimitNotifications } from '~/worker/jobs/tokens/publish-mint-rate-limit-notifications'
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

function mockPendingNotifications(t: TestContext, ...pending: PendingMintRateLimitNotification[]) {
    const originalTopic = config.amazonSns.topicArn
    config.amazonSns.topicArn = 'test-topic'
    t.after(() => {
        config.amazonSns.topicArn = originalTopic
    })

    const remaining = new Map(
        pending.map((notification) => [
            JSON.stringify(notification),
            Math.max(Number(notification.blockNumber), notification.source?.block ?? 0),
        ])
    )
    t.mock.method(notificationQueue, 'mintRateLimitNotificationsRedis', () =>
        Promise.resolve({
            key: 'mint-rate-limit-notifications',
            client: {
                zrangebyscore: (key: string, min: string, height: number) => {
                    assert.equal(key, 'mint-rate-limit-notifications')
                    assert.equal(min, '-inf')
                    return Promise.resolve(
                        [...remaining].filter(([, block]) => block <= height).map(([payload]) => payload)
                    )
                },
                zrem: (key: string, payload: string) => {
                    assert.equal(key, 'mint-rate-limit-notifications')
                    return Promise.resolve(Number(remaining.delete(payload)))
                },
            },
        })
    )
    return remaining
}

void test('the minute publisher waits for finality and drops an orphaned source', async (t) => {
    const event = mintRateLimitNotification('Reached', { collectionId: '124650', tokenId: '3' }, 200n, {
        max: 1n,
        period: 144n,
    })
    const remaining = mockPendingNotifications(t, { event, blockNumber: '200', source: { id: 'mint', block: 201 } })
    const existsBy = t.mock.fn(() => Promise.resolve(false))
    t.mock.method(contexts, 'connectionManager', () => Promise.resolve({ existsBy }))
    const send = t.mock.fn(() => Promise.resolve(true))
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))

    await publishMintRateLimitNotifications(200)
    assert.equal(existsBy.mock.callCount(), 0)
    assert.equal(remaining.size, 1)

    await publishMintRateLimitNotifications(201)
    assert.equal(existsBy.mock.callCount(), 1)
    assert.equal(send.mock.callCount(), 0)
    assert.equal(remaining.size, 0)
})

void test('quiet availability is sent only when the current window still opens at its queued block', async (t) => {
    const state = {
        limit: { max: 1n, period: 144n },
        window: { lastSlot: 771026n, buckets: [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n] },
    }
    const subject = { collectionId: '124650', tokenId: '3' }
    const event = mintRateLimitNotification('Available', subject, 13878630n, state.limit)
    const pending = {
        event,
        blockNumber: '13878630',
        source: { id: 'mint', block: 13878479 },
        availabilityFrom: '13878479',
    }
    const remaining = mockPendingNotifications(t, pending)
    let superseded = true
    const manager = {
        existsBy: () => Promise.resolve(true),
        findOne: () =>
            Promise.resolve({
                mintRateLimit: { ...state, pending: superseded ? { effectiveBlock: 13878629n } : null },
            }),
    }
    t.mock.method(contexts, 'connectionManager', () => Promise.resolve(manager))
    const send = t.mock.fn(() => Promise.resolve(true))
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))
    await publishMintRateLimitNotifications(13878630)
    assert.equal(remaining.size, 0)
    assert.equal(send.mock.callCount(), 0)

    superseded = false
    remaining.set(JSON.stringify(pending), 13878630)
    await publishMintRateLimitNotifications(13878630)
    assert.deepEqual(
        send.mock.calls.map(({ arguments: args }) => args),
        [[event, 13878630n]]
    )
})

void test('the existing minute job applies policy and retries ready SNS alerts without resending successes', async (t) => {
    const event = mintRateLimitNotification('ChangeApplied', { collectionId: '124745' }, 200n, null)
    const remaining = mockPendingNotifications(t, { event, blockNumber: '200' })
    let policyChecks = 0
    let pending = true
    let snsDown = true
    const query = (sql: string) => Promise.resolve(sql.includes('squid_processor.status') ? [{ height: 200 }] : [])
    const manager = {
        query,
        transaction: (run: (transaction: { query: typeof query }) => Promise<unknown>) => {
            policyChecks++
            return run({ query })
        },
        findOne: () => Promise.resolve({ mintRateLimit: pending ? { pending: { effectiveBlock: 200n } } : null }),
    }
    t.mock.method(contexts, 'connectionManager', () => Promise.resolve(manager))
    const send = t.mock.fn(() => {
        assert(policyChecks >= 2)
        return snsDown ? Promise.reject(new Error('SNS unavailable')) : Promise.resolve(true)
    })
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))

    await applyPendingMintRateLimitChanges({} as Job)
    assert.equal(send.mock.callCount(), 0)
    assert.equal(remaining.size, 1)

    pending = false
    await assert.rejects(applyPendingMintRateLimitChanges({} as Job), /Failed to publish mint rate limit notifications/)
    assert.equal(remaining.size, 1)

    snsDown = false
    await applyPendingMintRateLimitChanges({} as Job)
    await applyPendingMintRateLimitChanges({} as Job)
    assert.deepEqual(
        send.mock.calls.map(({ arguments: args }) => args),
        [
            [event, 200n],
            [event, 200n],
        ]
    )
    assert.equal(remaining.size, 0)
})
