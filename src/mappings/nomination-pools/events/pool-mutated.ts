import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import {
    Collection,
    Era,
    Event as EventModel,
    Extrinsic,
    NominationPoolsBonded,
    PoolMember,
    Token,
    TokenAccount,
} from '../../../model'

function getEventData(event: EventItem) {
    if (nominationPools.poolMutated.enjinV1023.is(event)) {
        return nominationPools.poolMutated.enjinV1023.decode(event)
    }

    if (nominationPools.poolMutated.enjinV110.is(event)) {
        return nominationPools.poolMutated.enjinV110.decode(event)
    }

    if (nominationPools.poolMutated.enjinV100.is(event)) {
        return nominationPools.poolMutated.enjinV100.decode(event)
    }

    if (nominationPools.poolMutated.v1023.is(event)) {
        return nominationPools.poolMutated.v1023.decode(event)
    }

    if (nominationPools.poolMutated.v110.is(event)) {
        return nominationPools.poolMutated.v110.decode(event)
    }

    if (nominationPools.poolMutated.v104.is(event)) {
        return nominationPools.poolMutated.v104.decode(event)
    }

    if (nominationPools.poolMutated.v102.is(event)) {
        return nominationPools.poolMutated.v102.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.poolMutated)
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
