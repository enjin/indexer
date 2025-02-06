import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusPaymentUnlocked } from '../../../model'
import { updateEarlyBirdInfo } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.is(event)) {
        return events.nominationPools.earlyBirdBonusPaymentUnlocked.enjinV1022.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdBonusPaymentUnlocked.name)
}

export async function earlyBirdBonusPaymentUnlocked(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    await updateEarlyBirdInfo(ctx, block)

    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaymentUnlocked.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaymentUnlocked({
            nextPaymentBlock: eventData.nextPaymentBlock,
            paymentId: eventData.paymentId,
        }),
    })
}
