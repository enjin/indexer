import { stakeExchange } from '../../../types/generated'
import { EventItem } from '../../types/contexts'
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
    if (stakeExchange.buyOrderCompleted.enjinV1033.is(event)) {
        return stakeExchange.buyOrderCompleted.enjinV1033.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.enjinV1026.is(event)) {
        return stakeExchange.buyOrderCompleted.enjinV1026.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.enjinV120.is(event)) {
        return stakeExchange.buyOrderCompleted.enjinV120.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.enjinV100.is(event)) {
        return stakeExchange.buyOrderCompleted.enjinV100.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.v1033.is(event)) {
        return stakeExchange.buyOrderCompleted.v1033.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.v1026.is(event)) {
        return stakeExchange.buyOrderCompleted.v1026.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.v120.is(event)) {
        return stakeExchange.buyOrderCompleted.v120.decode(event)
    }

    if (stakeExchange.buyOrderCompleted.v100.is(event)) {
        return stakeExchange.buyOrderCompleted.v100.decode(event)
    }

    throw new UnknownVersionError(stakeExchange.buyOrderCompleted)
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
