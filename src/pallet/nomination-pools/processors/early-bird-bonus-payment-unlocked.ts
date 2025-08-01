import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, NominationPoolsEarlyBirdBonusPaymentUnlocked } from '~/model'
import { updateEarlyBirdInfo } from '~/pallet/nomination-pools/processors/pool'
import * as mappings from '~/pallet/index'

export async function earlyBirdBonusPaymentUnlocked(ctx: CommonContext, block: Block, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.earlyBirdBonusPaymentUnlocked(item)
    await updateEarlyBirdInfo(ctx, block)

    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaymentUnlocked.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaymentUnlocked({
            nextPaymentBlock: eventData.nextPaymentBlock,
            paymentId: eventData.paymentId,
        }),
    })
}
