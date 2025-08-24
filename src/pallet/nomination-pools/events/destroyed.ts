import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsDestroyed } from '~/model'
import { Destroyed } from '~/pallet/nomination-pools/events/types'

export function destroyed(event: EventItem): Destroyed {
    return match(event)
        .returnType<Destroyed>()
        .when(
            () => nominationPools.destroyed.enjinV100.is(event),
            () => nominationPools.destroyed.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function destroyedEventModel(
    item: EventItem,
    data: Destroyed,
    tokenId: bigint,
    owner: string | undefined
): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsDestroyed({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            tokenId: tokenId,
            account: owner,
        }),
    })
}
