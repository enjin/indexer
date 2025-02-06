import { calls, events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Era,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    PoolMember,
    PoolMemberRewards,
    StakeExchangeBuyOrderCompleted,
    StakeExchangeOffer,
    TokenAccount,
} from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { StakeExchangeCall_buy } from '../../../types/generated/enjinV1026'

function getEventData(event: EventItem) {
    if (events.stakeExchange.buyOrderCompleted.enjinV1033.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV1033.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.enjinV1026.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV1026.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.enjinV120.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV120.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.enjinV100.is(event)) {
        return events.stakeExchange.buyOrderCompleted.enjinV100.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v1033.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v1033.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v1026.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v1026.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v120.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v120.decode(event)
    }

    if (events.stakeExchange.buyOrderCompleted.v100.is(event)) {
        return events.stakeExchange.buyOrderCompleted.v100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.buyOrderCompleted.name)
}
function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, offerId: bigint) {
    const rate = typeof data.rate === 'bigint' ? data.rate : BigInt(data.rate * 10 ** 9)
    return new EventModel({
        id: item.id,
        name: StakeExchangeBuyOrderCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeBuyOrderCompleted({
            offerId,
            amount: data.amount,
            account: data.who,
            rate,
            tokenId: data.tokenId,
            points: (data.amount * rate) / 10n ** 18n,
        }),
    })
}
