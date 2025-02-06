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
