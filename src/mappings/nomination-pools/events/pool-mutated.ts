import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsPoolMutated } from '../../../model'
import { hexToString } from '@polkadot/util'
import { PoolMutated } from './types'

export function poolMutated(event: EventItem): PoolMutated {
    return match(event)
        .returnType<PoolMutated>()
        .when(
            () => nominationPools.poolMutated.enjinV1023.is(event),
            () => nominationPools.poolMutated.enjinV1023.decode(event)
        )
        .when(
            () => nominationPools.poolMutated.enjinV110.is(event),
            () => nominationPools.poolMutated.enjinV110.decode(event)
        )
        .when(
            () => nominationPools.poolMutated.enjinV100.is(event),
            () => nominationPools.poolMutated.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.poolMutated.v1023.is(event),
            () => nominationPools.poolMutated.v1023.decode(event)
        )
        .when(
            () => nominationPools.poolMutated.v110.is(event),
            () => nominationPools.poolMutated.v110.decode(event)
        )
        .when(
            () => nominationPools.poolMutated.v104.is(event),
            () => nominationPools.poolMutated.v104.decode(event)
        )
        .when(
            () => nominationPools.poolMutated.v102.is(event),
            () => nominationPools.poolMutated.v102.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function poolMutatedEventModel(item: EventItem, data: PoolMutated): EventModel | undefined {
    const mutation: Record<string, string | number | undefined> = {}
    if (data.mutation.newCommission !== undefined && data.mutation.newCommission.__kind === 'SomeMutation' && data.mutation.newCommission.value !== undefined) {
        mutation.newCommission = data.mutation.newCommission.value
    } else {
        mutation.newCommission = undefined
    }

    if ('capacity' in data.mutation && data.mutation.capacity) {
        mutation.capacity = data.mutation.capacity.toString()
    }

    if ('name' in data.mutation) {
        mutation.name = data.mutation.name ? hexToString(data.mutation.name) : ''
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
