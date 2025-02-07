import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusCalculated } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { updateEarlyBirdInfo } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdBonusCalculated.enjinV1021.is(event)) {
        return events.nominationPools.earlyBirdBonusCalculated.enjinV1021.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdBonusCalculated.name)
}

export async function earlyBirdBonusCalculated(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    await updateEarlyBirdInfo(ctx, block)

    if (!eventData) return undefined

    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusCalculated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusCalculated({
            totalAmount: eventData.totalAmount,
        }),
    })
}
