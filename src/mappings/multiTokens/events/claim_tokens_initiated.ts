import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensClaimTokensInitiatedEvent } from '../../../types/generated/events'
import { Event as EventModel, Extrinsic, MultiTokensClaimTokensInitiated, MultiTokensClaims } from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensClaimTokensInitiatedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function claimTokensInitiated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.ClaimTokensInitiated', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const account = await getOrCreateAccount(ctx, data.accountId)

    const claim = new MultiTokensClaims({
        id: `${u8aToHex(data.accountId)}-${u8aToHex(data.ethereumAddress)}`,
        account,
        ethAccount: u8aToHex(data.ethereumAddress),
        completed: false,
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(MultiTokensClaims, claim as any)

    if (item.event.extrinsic) {
        Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                account: u8aToHex(data.accountId),
                ethAccount: u8aToHex(data.ethereumAddress),
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensInitiated({
            account: u8aToHex(data.accountId),
            ethAccount: u8aToHex(data.ethereumAddress),
        }),
    })
}
