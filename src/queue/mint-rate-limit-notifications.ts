import { JobsEnum } from '~/queue/constants'
import config from '~/util/config'
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

export interface MintRateLimitNotificationJob {
    event: SnsEvent
    blockNumber: string
    source?: { id: string; block: number }
    availabilityFrom?: string
}

export async function queueMintRateLimitNotification(
    event: SnsEvent,
    block: bigint,
    source?: MintRateLimitNotificationJob['source'],
    availabilityFrom?: bigint
): Promise<void> {
    if (!config.amazonSns.topicArn || isRelay()) return

    const { TokensQueue } = await import('~/queue')
    const job: MintRateLimitNotificationJob = {
        event: { ...event, body: safeJsonObject(event.body) },
        blockNumber: block.toString(),
        source,
        availabilityFrom: availabilityFrom?.toString(),
    }
    await TokensQueue.add(JobsEnum.PUBLISH_MINT_RATE_LIMIT_NOTIFICATION, job, {
        jobId: `mint-rate-${event.id}${source ? `-${source.id}` : ''}${availabilityFrom === undefined ? '' : '-check'}`,
    })
}

export async function queueMintRateLimitChanges(
    subject: MintRateLimitSubject,
    before: MintRateLimitState | null | undefined,
    after: MintRateLimitState | null | undefined,
    height: bigint,
    source?: MintRateLimitNotificationJob['source']
): Promise<void> {
    if (!config.amazonSns.topicArn || isRelay() || (!before && !after)) return

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
