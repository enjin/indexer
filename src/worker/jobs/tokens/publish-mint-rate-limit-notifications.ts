import { connectionManager } from '~/contexts'
import { Collection, Event, Token } from '~/model'
import { mintRateLimitAvailableAt } from '~/pallet/multi-tokens/mint-rate-limit-notifications'
import {
    type PendingMintRateLimitNotification,
    mintRateLimitNotificationsEnabled,
    mintRateLimitNotificationsRedis,
} from '~/queue/mint-rate-limit-notifications'
import { Sns } from '~/util/sns'
import type { EntityManager } from 'typeorm'

const PUBLISH_BATCH_SIZE = 100

async function publishIfReady(
    manager: EntityManager,
    { event, blockNumber, source, availabilityFrom }: PendingMintRateLimitNotification
): Promise<boolean> {
    if (source && !(await manager.existsBy(Event, { id: source.id }))) return true

    const block = BigInt(blockNumber)
    if (!source || availabilityFrom !== undefined) {
        const collectionId = String(event.body.collectionId)
        const tokenId = event.body.tokenId
        const subject = await manager.findOne(tokenId == null ? Collection : Token, {
            where: { id: tokenId == null ? collectionId : `${collectionId}-${String(tokenId)}` },
            select: { mintRateLimit: true },
        })
        const state = subject?.mintRateLimit
        const due = state?.pending && state.pending.effectiveBlock <= block
        if (!source && due) return false
        if (
            availabilityFrom !== undefined &&
            (due || mintRateLimitAvailableAt(state, BigInt(availabilityFrom)) !== block)
        )
            return true
    }

    return Sns.getInstance().sendFinalized(event, block)
}

export async function publishMintRateLimitNotifications(height: number): Promise<void> {
    if (!mintRateLimitNotificationsEnabled()) return

    const manager = await connectionManager()
    const { client, key } = await mintRateLimitNotificationsRedis()
    const ready = await client.zrangebyscore(key, '-inf', height, 'LIMIT', 0, PUBLISH_BATCH_SIZE)
    const failures = new Set<string>()
    for (const payload of ready) {
        try {
            const notification = JSON.parse(payload) as PendingMintRateLimitNotification
            if (await publishIfReady(manager, notification)) await client.zrem(key, payload)
        } catch (error) {
            failures.add(error instanceof Error ? error.message : String(error))
        }
    }
    if (failures.size > 0)
        throw new Error(`Failed to publish mint rate limit notifications (${[...failures].join(', ')})`)
}
