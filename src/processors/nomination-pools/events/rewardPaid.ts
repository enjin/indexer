import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, NominationPoolsRewardPaid } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.nominationPools.rewardPaid.enjinV100.is(event)) {
        return events.nominationPools.rewardPaid.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.rewardPaid.name)
}

export async function rewardPaid(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    return new EventModel({
        id: item.id,
        name: NominationPoolsRewardPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsRewardPaid({
            pool: eventData.poolId.toString(),
            era: eventData.era,
            reward: eventData.reward,
            bonus: eventData.bonus,
            validatorStash: (await getOrCreateAccount(ctx, eventData.validatorStash)).id,
        }),
    })
}
