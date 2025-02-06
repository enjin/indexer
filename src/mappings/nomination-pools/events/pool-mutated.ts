import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsPoolMutated } from '../../../model'
import { hexToString } from '@polkadot/util'

type PoolMutatedEvent = {
    poolId: bigint
    mutation: {
        newCommission?: {
            __kind: string
            value?: number
        }
        capacity?: bigint
        name?: string
    }
}

function poolMutated(event: EventItem) {
    return match(event)
        .returnType<PoolMutatedEvent>()
        .when(nominationPools.poolMutated.enjinV1023.is, () => nominationPools.poolMutated.enjinV1023.decode(event))
        .when(nominationPools.poolMutated.enjinV110.is, () => nominationPools.poolMutated.enjinV110.decode(event))
        .when(nominationPools.poolMutated.enjinV100.is, () => nominationPools.poolMutated.enjinV100.decode(event))
        .when(nominationPools.poolMutated.v1023.is, () => nominationPools.poolMutated.v1023.decode(event))
        .when(nominationPools.poolMutated.v110.is, () => nominationPools.poolMutated.v110.decode(event))
        .when(nominationPools.poolMutated.v104.is, () => nominationPools.poolMutated.v104.decode(event))
        .when(nominationPools.poolMutated.v102.is, () => nominationPools.poolMutated.v102.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof poolMutated>) {
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
