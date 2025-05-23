import { Block, CommonContext, EventItem } from '../../../contexts'
import { CommissionChangeRate, NominationPool } from '../../../model'
import { Sns } from '../../../util/sns'
import { hexToString } from '@polkadot/util'
import * as mappings from '../../index'

export async function poolMutated(ctx: CommonContext, block: Block, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.poolMutated(item)

    const mutation: Record<string, number | string | Record<string, number>> = {}

    const pool = await ctx.store.findOneByOrFail<NominationPool>(NominationPool, { id: eventData.poolId.toString() })

    if (eventData.mutation.duration !== undefined) {
        pool.bonusCycle.pendingDuration = eventData.mutation.duration
        mutation.duration = eventData.mutation.duration
    }

    if (
        eventData.mutation.newCommission !== undefined &&
        eventData.mutation.newCommission.__kind === 'SomeMutation' &&
        eventData.mutation.newCommission.value !== undefined
    ) {
        pool.commission.current = eventData.mutation.newCommission.value
        mutation.newCommission = eventData.mutation.newCommission.value
    }

    if (eventData.mutation.maxCommission !== undefined) {
        pool.commission.max = eventData.mutation.maxCommission
        mutation.maxCommission = eventData.mutation.maxCommission
    }

    if (eventData.mutation.changeRate) {
        pool.commission.changeRate = new CommissionChangeRate({
            maxDelta: eventData.mutation.changeRate.maxDelta,
            minDelay: eventData.mutation.changeRate.minDelay,
        })

        mutation.changeRate = {
            maxDelta: eventData.mutation.changeRate.maxDelta,
            minDelay: eventData.mutation.changeRate.minDelay,
        }
    }

    if ('capacity' in eventData.mutation && eventData.mutation.capacity) {
        pool.capacity = eventData.mutation.capacity
        mutation.capacity = pool.capacity.toString()
    }

    if ('name' in eventData.mutation) {
        pool.name = hexToString(eventData.mutation.name as string)
        mutation.name = pool.name
    }

    await ctx.store.save(pool)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            mutation,
            extrinsic: item.extrinsic.id,
        },
    })

    return mappings.nominationPools.events.poolMutatedEventModel(item, eventData)
}
