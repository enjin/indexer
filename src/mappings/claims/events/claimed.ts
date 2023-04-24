import { hexToU8a, u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Claim, ClaimsClaimed, Event as EventModel, Extrinsic, TokenAccount } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimsClaimedEvent } from '../../../types/generated/events'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    who: Uint8Array
    ethereumAddress: Uint8Array | undefined
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new ClaimsClaimedEvent(ctx, event)

    if (data.isV500) {
        const { who, ethereumAddress, amount } = data.asV500
        return {
            who,
            ethereumAddress,
            amount,
        }
    }

    if (data.isEfinityV2) {
        const { who, ethereumAddress, amount } = data.asEfinityV2
        return {
            who,
            ethereumAddress,
            amount,
        }
    }

    if (data.isEfinityV1) {
        const [who, ethereumAddress, amount] = data.asEfinityV1
        return {
            who,
            ethereumAddress,
            amount,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.Claimed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const who = u8aToHex(data.who)
    const account = await getOrCreateAccount(ctx as unknown as CommonContext, data.who)
    const ethereumAddress = u8aToHex(data.ethereumAddress)
    const extrinsic = item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null

    const claim = new Claim({
        id: `${who}-${ethereumAddress}`,
        extrinsic,
        account,
        ethereumAddress,
        amount: data.amount,
    })

    await ctx.store.save(claim)

    return new EventModel({
        id: item.event.id,
        extrinsic,
        data: new ClaimsClaimed({
            who,
            ethereumAddress,
            amount: data.amount,
        }),
    })
}
