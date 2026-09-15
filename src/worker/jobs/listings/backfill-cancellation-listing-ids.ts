import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Event as EventModel, MarketplaceListingCancelled, MarketplaceOfferCancelled } from '~/model'
import { QueueUtils } from '~/queue'
import { stripCancellationListingIdPrefix } from './cancellation-listing-id'

export type BackfillCancellationListingIdsData = {
    afterId?: string
    batchSize?: number
}

const DEFAULT_BATCH_SIZE = 500
const MAX_BATCH_SIZE = 2000
const CANCELLATION_EVENT_NAMES = [MarketplaceListingCancelled.name, MarketplaceOfferCancelled.name]

export async function backfillCancellationListingIds(job: Job<BackfillCancellationListingIdsData>): Promise<void> {
    const em = await connectionManager()
    const batchSize = Math.max(1, Math.min(job.data.batchSize ?? DEFAULT_BATCH_SIZE, MAX_BATCH_SIZE))
    const query = em
        .createQueryBuilder(EventModel, 'cancellationEvent')
        .where('"cancellationEvent"."name" IN (:...names)', { names: CANCELLATION_EVENT_NAMES })
        .andWhere('"cancellationEvent"."data" ->> \'listing\' LIKE \'0x%\'')
        .orderBy('"cancellationEvent"."id"', 'ASC')
        .take(batchSize)

    if (job.data.afterId) {
        query.andWhere('"cancellationEvent"."id" > :afterId', { afterId: job.data.afterId })
    }

    const events = await query.getMany()
    const changed = events.filter(stripCancellationListingIdPrefix)

    if (changed.length > 0) await em.save(changed)

    const lastEvent = events.at(-1)
    if (!lastEvent) {
        await job.log('Marketplace cancellation listing ID backfill complete')
        await job.updateProgress(100)
        return
    }

    await job.log(`Stripped listing ID prefixes from ${changed.length} events through ${lastEvent.id}`)

    if (events.length === batchSize) {
        await QueueUtils.dispatchBackfillCancellationListingIds({
            afterId: lastEvent.id,
            batchSize,
        })
    }

    await job.updateProgress(100)
}
