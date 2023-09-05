import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import {
    ClaimsEarlyBirdRewardCreated,
    EarlyBirdReward,
    EarlyBirdRewardsData,
    Event as EventModel,
    Extrinsic,
} from '../../../model'
import { ClaimsEarlyBirdRewardCreatedEvent } from '../../../types/generated/events'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsEarlyBirdRewardCreatedEvent(ctx, event)

    if (data.isV104) {
        return data.asV104
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function earlyBirdRewardCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.EarlyBirdRewardCreated', { event: { args: true; extrinsic: true } }>
) {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)
    const account = await getOrCreateAccount(ctx, eventData.who)

    const earlyBirdReward = new EarlyBirdRewardsData({
        id: account.id,
        account,
        earlyBirdRewards: new EarlyBirdReward({
            poolId: eventData.poolId.toString(),
            startBlockNumber: block.height,
            amount: eventData.amount,
        }),
    })

    await ctx.store.save(earlyBirdReward)

    await Sns.getInstance().send({
        id: item.event.id,
        name: item.event.name,
        body: {
            account: account.id,
            poolId: eventData.poolId.toString(),
            amount: eventData.amount,
            extrinsic: item.event.extrinsic.id,
        },
    })

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new ClaimsEarlyBirdRewardCreated({
            account: account.id,
            poolId: eventData.poolId.toString(),
            amount: eventData.amount,
        }),
    })
}
