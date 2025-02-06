import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityAdded, StakeExchangeOffer } from '../../../model'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.liquidityAdded.enjinV100.is(event)) {
        return events.stakeExchange.liquidityAdded.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.liquidityAdded.name)
}

function getCallData(call: CallItem) {
    if (calls.stakeExchange.addLiquidity.enjinV100.is(call)) {
        return calls.stakeExchange.addLiquidity.enjinV100.decode(call)
    }

    throw new UnknownVersionError(calls.stakeExchange.addLiquidity.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, callData: ReturnType<typeof getCallData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityAdded({
            offerId: data.offerId,
            amount: callData.amount,
            account: data.who,
        }),
    })
}

export async function liquidityAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = getEventData(item)
    const callData = getCallData(item.extrinsic.call)

    if (!eventData || !callData) return undefined

    const offer = await ctx.store.findOneByOrFail(StakeExchangeOffer, { id: eventData.offerId.toString() })
    offer.total += callData.amount

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: callData.amount,
            account: eventData.who,
        },
    })

    await ctx.store.save(offer)

    return getEvent(item, eventData, callData)
}
