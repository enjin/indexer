import { nominationPools } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Event as EventModel,
    Extrinsic,
    NominationPoolsWithdrawn,
    NominationPoolsDepositWithdrawn,
    NominationPoolsMembersWithdrawn,
} from '../../../model'
import { Withdrawn } from './types'

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

export function withdrawnEventModel(
    item: EventItem,
    data: Withdrawn,
    isDeposit: boolean = false
): EventModel | undefined {
    const withdrawnData = {
        pool: data.poolId.toString(),
        account: data.member,
        balance: data.balance,
        points: data.points,
        numSlashingSpans: 0, // data.numSlashingSpans,
    }
    return new EventModel({
        id: item.id,
        name: isDeposit ? NominationPoolsDepositWithdrawn.name : NominationPoolsWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: isDeposit
            ? new NominationPoolsDepositWithdrawn(withdrawnData)
            : new NominationPoolsWithdrawn(withdrawnData),
    })
}

export function allMembersWithdrawn(item: EventItem, data: Withdrawn): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsMembersWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsMembersWithdrawn({
            pool: data.poolId.toString(),
        }),
    })
}
