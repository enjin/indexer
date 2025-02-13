import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusCalculated } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { updateEarlyBirdInfo } from './pool'
import * as mappings from './../../mappings'

export async function earlyBirdBonusCalculated(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.earlyBirdBonusCalculated(item)

    await updateEarlyBirdInfo(ctx, block)

    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusCalculated.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusCalculated({
            totalAmount: eventData.totalAmount,
        }),
    })
}
