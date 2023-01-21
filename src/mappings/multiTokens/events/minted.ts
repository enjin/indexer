import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensMintedEvent } from '../../../types/generated/events'
import { Account, AccountEvent, Event as EventModel, Extrinsic, MultiTokensMinted, Token, TokenAccount } from '../../../model'
import { isNonFungible } from '../utils/helpers'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    recipient: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensMintedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, issuer, recipient, amount } = data.asEfinityV2
        return { collectionId, tokenId, issuer, recipient, amount }
    }
    if (data.isV3011) {
        const { collectionId, tokenId, issuer, recipient, amount } = data.asV3011
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, recipient, amount }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), recipient, amount }
    }
    if (data.isEfinityV3012) {
        const { collectionId, tokenId, issuer, recipient, amount } = data.asEfinityV3012
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, recipient, amount }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), recipient, amount }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function minted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Minted', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })
    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)

    const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
        where: { id: `${u8aToHex(data.recipient)}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    tokenAccount.balance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp)
    await ctx.store.save(tokenAccount)

    const { account } = tokenAccount
    account.tokenValues += data.amount * token.unitPrice
    await ctx.store.save(account)

    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: token.id,
        data: new MultiTokensMinted({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            issuer: u8aToHex(data.issuer),
            recipient: u8aToHex(data.recipient),
            amount: data.amount,
        }),
    })

    ctx.store.save(AccountEvent, [
        new AccountEvent({
            id: `${item.event.id}-issuer`,
            account: new Account({ id: u8aToHex(data.issuer) }),
            event,
        }),
        new AccountEvent({
            id: `${item.event.id}-recipient`,
            account: new Account({ id: u8aToHex(data.recipient) }),
            event,
        }),
    ])

    return event
}
