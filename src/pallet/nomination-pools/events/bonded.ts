import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsBonded } from '~/model'
import { Bonded } from '~/pallet/nomination-pools/events/types'

export function bonded(event: EventItem): Bonded {
    return match(event)
        .returnType<Bonded>()
        .when(
            () => nominationPools.bonded.enjinV101.is(event),
            () => nominationPools.bonded.enjinV101.decode(event)
        )
        .when(
            () => nominationPools.bonded.enjinV100.is(event),
            () => nominationPools.bonded.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.bonded.v104.is(event),
            () => nominationPools.bonded.v104.decode(event)
        )
        .when(
            () => nominationPools.bonded.v100.is(event),
            () => nominationPools.bonded.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function bondedEventModel(item: EventItem, data: Bonded, tokenId: bigint): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsBonded({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            tokenId: tokenId,
            account: data.member,
            bonded: data.bonded,
        }),
    })
}
