import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityWithdrawn, StakeExchangeOffer } from '../../../model'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.liquidityWithdrawn.enjinV100.is(event)) {
        return events.stakeExchange.liquidityWithdrawn.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.liquidityWithdrawn.name)
}

function getCallData(call: CallItem) {
    if (calls.stakeExchange.withdrawLiquidity.enjinV100.is(call)) {
        return calls.stakeExchange.withdrawLiquidity.enjinV100.decode(call)
    }

    throw new UnknownVersionError(calls.stakeExchange.withdrawLiquidity.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, callData: ReturnType<typeof getCallData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityWithdrawn({
            offerId: data.offerId,
            amount: callData.amount,
            account: data.who,
        }),
    })
}

export async function liquidityWithdrawn(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = getEventData(item)
    const callData = getCallData(item.extrinsic.call)

    if (!eventData || !callData) return undefined

    const offer = await ctx.store.findOneByOrFail(StakeExchangeOffer, { id: eventData.offerId.toString() })
    offer.total -= callData.amount

    await ctx.store.save(offer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: callData.amount,
            account: eventData.who,
        },
    })

    return getEvent(item, eventData, callData)
}
