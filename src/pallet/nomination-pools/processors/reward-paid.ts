import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, Extrinsic, NominationPoolsRewardPaid } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'

export async function rewardPaid(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.rewardPaid(item)

    return new EventModel({
        id: item.id,
        name: NominationPoolsRewardPaid.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsRewardPaid({
            pool: eventData.poolId.toString(),
            era: eventData.era,
            reward: eventData.reward,
            bonus: eventData.bonus,
            validatorStash: (await getOrCreateAccount(ctx, eventData.validatorStash)).id,
        }),
    })
}
