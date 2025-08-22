import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusCalculated } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { updateEarlyBirdInfo } from '~/pallet/nomination-pools/processors/pool'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function earlyBirdBonusCalculated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.earlyBirdBonusCalculated(item)
    await updateEarlyBirdInfo(ctx, block)

    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusCalculated.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusCalculated({
            totalAmount: data.totalAmount,
        }),
    })
}
