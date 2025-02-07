import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, CommissionChangeRate, NominationPool, NominationPoolsPoolMutated, Extrinsic } from '../../../model'
import { Sns } from '../../../common/sns'
import { hexToString } from '@polkadot/util'

function getEventData(event: EventItem) {
    if (events.nominationPools.poolMutated.enjinV1023.is(event)) {
        return events.nominationPools.poolMutated.enjinV1023.decode(event)
    }

    if (events.nominationPools.poolMutated.enjinV110.is(event)) {
        return events.nominationPools.poolMutated.enjinV110.decode(event)
    }

    if (events.nominationPools.poolMutated.enjinV100.is(event)) {
        return events.nominationPools.poolMutated.enjinV100.decode(event)
    }

    if (events.nominationPools.poolMutated.v1023.is(event)) {
        return events.nominationPools.poolMutated.v1023.decode(event)
    }

    if (events.nominationPools.poolMutated.v110.is(event)) {
        return events.nominationPools.poolMutated.v110.decode(event)
    }

    if (events.nominationPools.poolMutated.v104.is(event)) {
        return events.nominationPools.poolMutated.v104.decode(event)
    }

    if (events.nominationPools.poolMutated.v102.is(event)) {
        return events.nominationPools.poolMutated.v102.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.poolMutated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    const mutation: any = {}
    if (data.mutation.newCommission.__kind === 'SomeMutation' && data.mutation.newCommission.value !== undefined) {
        mutation.newCommission = data.mutation.newCommission.value
    } else {
        mutation.newCommission = undefined
    }

    if ('capacity' in data.mutation && data.mutation.capacity) {
        mutation.capacity = data.mutation.capacity.toString()
    }

    if ('name' in data.mutation) {
        mutation.name = data.mutation.name ? hexToString(data.mutation.name as string) : ''
    }

    return new EventModel({
        id: item.id,
        name: NominationPoolsPoolMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsPoolMutated({
            pool: data.poolId.toString(),
            mutation,
        }),
    })
}

export async function poolMutated(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    const mutation: Record<string, any> = {}

    const pool = await ctx.store.findOneByOrFail(NominationPool, { id: eventData.poolId.toString() })

    if (eventData.mutation.duration !== undefined) {
        pool.bonusCycle.pendingDuration = eventData.mutation.duration
        mutation.duration = eventData.mutation.duration
    }

    if (eventData.mutation.newCommission.__kind === 'SomeMutation' && eventData.mutation.newCommission.value !== undefined) {
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
        pool.capacity = eventData.mutation.capacity as bigint
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

    return getEvent(item, eventData)
}
