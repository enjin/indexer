import { nominationPools } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Event as EventModel,
    Extrinsic,
    NominationPoolsDepositUnbonded,
    NominationPoolsMembersUnbonded,
    NominationPoolsUnbonded,
} from '../../../model'
import { Unbonded } from './types'

export function unbonded(event: EventItem): Unbonded {
    return match(event)
        .returnType<Unbonded>()
        .when(
            () => nominationPools.unbonded.enjinV100.is(event),
            () => nominationPools.unbonded.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function unbondedEventModel(
    item: EventItem,
    data: Unbonded,
    isDeposit: boolean = false
): EventModel | undefined {
    const unbondData = {
        pool: data.poolId.toString(),
        account: data.member,
        unbondingPoints: data.points,
        balance: data.balance,
        era: data.era,
    }

    return new EventModel({
        id: item.id,
        name: isDeposit ? NominationPoolsDepositUnbonded.name : NominationPoolsUnbonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: isDeposit ? new NominationPoolsDepositUnbonded(unbondData) : new NominationPoolsUnbonded(unbondData),
    })
}

export function allMembersUnbonded(item: EventItem, data: Unbonded): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsMembersUnbonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsMembersUnbonded({
            pool: data.poolId.toString(),
        }),
    })
}
