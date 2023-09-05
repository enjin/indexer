import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimsClaimedEarlyBirdReward, EarlyBirdRewardsData, Event as EventModel, Extrinsic } from '../../../model'
import { ClaimsClaimedEarlyBirdRewardEvent } from '../../../types/generated/events'
import { getOrCreateAccount } from '../../util/entities'
import { ClaimsEarlyBirdRewardsLookupStorage } from '../../../types/generated/storage'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsClaimedEarlyBirdRewardEvent(ctx, event)

    if (data.isV104) {
        return data.asV104
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEarlyBirdEligibleData(ctx: CommonContext, block: SubstrateBlock) {
    const data = new ClaimsEarlyBirdRewardsLookupStorage(ctx, block)

    if (data.isEnjinV100) {
        return data.asEnjinV100
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimedEarlyBirdReward(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ClaimedEarlyBirdReward', { event: { args: true; extrinsic: true } }>
) {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)
    const account = await getOrCreateAccount(ctx, eventData.who)

    const [reward, storage] = await Promise.all([
        ctx.store.findOneByOrFail(EarlyBirdRewardsData, { id: account.id }),
        getEarlyBirdEligibleData(ctx, block).get(eventData.who),
    ])

    if (!storage || storage.eligibleAmount === 0n) {
        ctx.store.remove(reward)
    } else {
        reward.earlyBirdRewards = null
        await ctx.store.save(reward)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new ClaimsClaimedEarlyBirdReward({
            account: account.id,
            amount: eventData.amount,
        }),
    })
}
