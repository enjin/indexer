import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import {Event as EventModel, Extrinsic, NominationPoolsWithdrawn, PoolState} from '~/model'
import { Withdrawn } from '~/pallet/nomination-pools/events/types'

export function withdrawn(event: EventItem): Withdrawn {
    return match(event)
        .returnType<Withdrawn>()
        .when(
            () => nominationPools.withdrawn.enjinV100.is(event),
            () => nominationPools.withdrawn.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function withdrawnEventModel(item: EventItem, data: Withdrawn, tokenId: bigint, state: PoolState): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsWithdrawn({
            pool: data.poolId.toString(),
            tokenId: tokenId,
            account: data.member,
            balance: data.balance,
            points: data.points,
            numSlashingSpans: 0, // data.numSlashingSpans,
            state: state.toString(),
        }),
    })
}
