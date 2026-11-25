import config from '~/util/config'
import type { IRedisClient } from 'bullmq'
import { safeJsonObject, isRelay } from '~/util/tools'
import type { SnsEvent } from '~/util/sns'
import type { MintRateLimitState } from '~/model'
import {
    type MintRateLimitSubject,
    mintRateLimitAvailableAt,
    mintRateLimitBlocked,
    mintRateLimitNotification,
    mintRateLimitSlotLength,
} from '~/pallet/multi-tokens/mint-rate-limit-notifications'

export interface PendingMintRateLimitNotification {
    event: SnsEvent
    blockNumber: string
    source?: { id: string; block: number }
    availabilityFrom?: string
}

interface NotificationRedisClient extends IRedisClient {
    zadd(key: string, block: string, payload: string): Promise<number>
    zrangebyscore(
        key: string,
        min: string,
        max: number,
        limit: 'LIMIT',
        offset: number,
        count: number
    ): Promise<string[]>
    zrem(key: string, payload: string): Promise<number>
}

function supportsSortedSets(client: IRedisClient): client is NotificationRedisClient {
    return (
        'zadd' in client &&
        typeof client.zadd === 'function' &&
        'zrangebyscore' in client &&
        typeof client.zrangebyscore === 'function' &&
        'zrem' in client &&
        typeof client.zrem === 'function'
    )
}

export function mintRateLimitNotificationsEnabled(): boolean {
    return !!config.amazonSns.topicArn && !isRelay()
}

export async function mintRateLimitNotificationsRedis() {
    const { TokensQueue } = await import('~/queue')
    const client = await TokensQueue.client
    // BullMQ's ioredis adapter forwards native methods beyond its public interface.
    if (!supportsSortedSets(client)) throw new Error('The Tokens Redis client must support sorted-set commands')
    return { client, key: TokensQueue.toKey(`mint-rate-limit-notifications:${config.chainName}`) }
}

export async function queueMintRateLimitNotification(
    event: SnsEvent,
    block: bigint,
    source?: PendingMintRateLimitNotification['source'],
    availabilityFrom?: bigint
): Promise<void> {
    if (!mintRateLimitNotificationsEnabled()) return

    const notification: PendingMintRateLimitNotification = {
        event: { ...event, body: safeJsonObject(event.body) },
        blockNumber: block.toString(),
        source,
        availabilityFrom: availabilityFrom?.toString(),
    }
    const { client, key } = await mintRateLimitNotificationsRedis()
    const finalizedBlock = source && BigInt(source.block) > block ? BigInt(source.block) : block
    await client.zadd(key, finalizedBlock.toString(), JSON.stringify(notification))
}

export async function queueMintRateLimitChanges(
    subject: MintRateLimitSubject,
    before: MintRateLimitState | null | undefined,
    after: MintRateLimitState | null | undefined,
    height: bigint,
    source?: PendingMintRateLimitNotification['source']
): Promise<void> {
    if (!mintRateLimitNotificationsEnabled() || (!before && !after)) return

    const pending = before?.pending
    let transitionBlock = height
    if (pending && pending.effectiveBlock <= height && !after?.pending) {
        const limit = pending.newLimit ?? null
        if (limit?.max === after?.limit.max && limit?.period === after?.limit.period) {
            transitionBlock = pending.effectiveBlock
            const event = mintRateLimitNotification('ChangeApplied', subject, transitionBlock, limit)
            await queueMintRateLimitNotification(event, transitionBlock, source)
        }
    }

    const previousBlock = transitionBlock === pending?.effectiveBlock ? transitionBlock - 1n : height
    const previouslyBlocked = mintRateLimitBlocked(before, previousBlock)
    const blocked = mintRateLimitBlocked(after, height)
    if (previouslyBlocked !== blocked) {
        const event = mintRateLimitNotification(
            blocked ? 'Reached' : 'Available',
            subject,
            transitionBlock,
            after?.limit ?? null
        )
        await queueMintRateLimitNotification(event, transitionBlock, source)
    }

    // A mint can arrive before the queued availability check runs. The previous
    // window still tells us exactly when capacity opened for that mint.
    if (before && after && !previouslyBlocked && !before.pending && after.window.lastSlot > before.window.lastSlot) {
        const from = before.window.lastSlot * mintRateLimitSlotLength(before.limit.period)
        const available = mintRateLimitAvailableAt(before, from)
        if (available !== undefined && available <= height) {
            const event = mintRateLimitNotification('Available', subject, available, before.limit)
            await queueMintRateLimitNotification(event, available, source)
        }
    }

    if (after && blocked) {
        const available = mintRateLimitAvailableAt(after, height)
        if (available !== undefined && (after.pending == null || after.pending.effectiveBlock > available)) {
            const event = mintRateLimitNotification('Available', subject, available, after.limit)
            await queueMintRateLimitNotification(event, available, source, height)
        }
    }
}
