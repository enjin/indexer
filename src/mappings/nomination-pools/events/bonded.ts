import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsBonded } from '../../../model'

type BondedEvent = {
    member: string
    poolId: number
    bonded: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<BondedEvent>()
        .when(nominationPools.bonded.enjinV101.is, () => nominationPools.bonded.enjinV101.decode(event))
        .when(nominationPools.bonded.enjinV100.is, () => nominationPools.bonded.enjinV100.decode(event))
        .when(nominationPools.bonded.v104.is, () => nominationPools.bonded.v104.decode(event))
        .when(nominationPools.bonded.v100.is, () => nominationPools.bonded.v100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.bonded)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsBonded({
            pool: data.poolId.toString(),
            account: data.member,
            bonded: data.bonded,
        }),
    })
}
