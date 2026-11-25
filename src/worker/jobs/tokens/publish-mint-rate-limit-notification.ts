import { DelayedError, type Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Collection, Event, Token } from '~/model'
import { mintRateLimitAvailableAt } from '~/pallet/multi-tokens/mint-rate-limit-notifications'
import type { MintRateLimitNotificationJob } from '~/queue/mint-rate-limit-notifications'
import { finalizedIndexedHeight } from '~/util/finalized-indexed-height'
import { Sns } from '~/util/sns'

async function defer(job: Job, token: string | undefined, remaining = 0): Promise<never> {
    const delay = Math.min(86_400_000, Math.max(15_000, remaining * 6000))
    await job.moveToDelayed(Date.now() + delay, token)
    throw new DelayedError()
}

export async function publishMintRateLimitNotification(
    job: Job<MintRateLimitNotificationJob>,
    token?: string
): Promise<void> {
    const manager = await connectionManager()
    const { event, blockNumber, source, availabilityFrom } = job.data
    const height = await finalizedIndexedHeight(manager)
    const through = Math.max(Number(blockNumber), source?.block ?? 0)
    if (height === null || height < through) {
        await defer(job, token, height === null ? 0 : through - height)
    }
    if (source && !(await manager.existsBy(Event, { id: source.id }))) return

    if (!source || availabilityFrom !== undefined) {
        const collectionId = String(event.body.collectionId)
        const tokenId = event.body.tokenId
        const subject = await manager.findOne(tokenId == null ? Collection : Token, {
            where: { id: tokenId == null ? collectionId : `${collectionId}-${String(tokenId)}` },
            select: { mintRateLimit: true },
        })
        const state = subject?.mintRateLimit
        const block = BigInt(blockNumber)
        const due = state?.pending && state.pending.effectiveBlock <= block
        if (!source && due) await defer(job, token)
        if (
            availabilityFrom !== undefined &&
            (due || mintRateLimitAvailableAt(state, BigInt(availabilityFrom)) !== block)
        )
            return
    }

    if (!(await Sns.getInstance().sendFinalized(event, BigInt(blockNumber)))) {
        throw new Error('SNS is not configured on the Tokens worker')
    }
}
