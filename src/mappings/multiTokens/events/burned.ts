import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensBurnedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensBurned,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensBurnedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, accountId, amount } = data.asEfinityV2
        return { collectionId, tokenId, accountId, amount }
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function burned(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Burned', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountTokenEvent] | undefined | EventModel> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const address = u8aToHex(data.accountId)

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    }

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (token) {
        token.supply -= data.amount
        await ctx.store.save(token)
    }

    if (tokenAccount && token) {
        const { account } = tokenAccount
        account.tokenValues -= data.amount * token.unitPrice
        await ctx.store.save(account)
    }

    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: token ? token.id : null,
        data: new MultiTokensBurned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            account: address,
            amount: data.amount,
        }),
    })

    if (token) {
        return [
            event,
            new AccountTokenEvent({
                id: item.event.id,
                token,
                account: new Account({ id: address }),
                event,
            }),
        ]
    }

    return event
}
