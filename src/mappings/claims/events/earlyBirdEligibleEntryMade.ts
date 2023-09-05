import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimsEarlyBirdEligibleEntryMade, EarlyBirdRewardsData, Event as EventModel, Extrinsic } from '../../../model'
import { ClaimsEarlyBirdEligibleEntryMadeEvent } from '../../../types/generated/events'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsEarlyBirdEligibleEntryMadeEvent(ctx, event)

    if (data.isV104) {
        return data.asV104
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function earlyBirdEligibleEntryMade(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.EarlyBirdEligibleEntryMade', { event: { args: true; extrinsic: true } }>
) {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)
    const account = await getOrCreateAccount(ctx, eventData.account)

    const existingEarlyBirdReward = await ctx.store.findOneBy(EarlyBirdRewardsData, {
        id: account.id,
    })

    if (existingEarlyBirdReward) {
        existingEarlyBirdReward.eligibleAmount += eventData.eligibleAmount
        await ctx.store.save(existingEarlyBirdReward)
    } else {
        const earlyBirdReward = new EarlyBirdRewardsData({
            id: account.id,
            account,
            eligibleAmount: eventData.eligibleAmount,
            createdBlock: block.height,
            createdAt: new Date(block.timestamp),
        })
        await ctx.store.save(earlyBirdReward)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new ClaimsEarlyBirdEligibleEntryMade({
            account: account.id,
            eligibleAmount: eventData.eligibleAmount,
        }),
    })
}
