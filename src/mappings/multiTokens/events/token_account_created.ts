import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import * as Sentry from '@sentry/node'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountCreatedEvent } from '../../../types/generated/events'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenAccountCreated,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensTokenAccountCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.TokenAccountCreated', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            account: u8aToHex(data.accountId),
            balance: data.balance,
        }),
    })
}

export async function tokenAccountCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenAccountCreated', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) {
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.createdAt = new Date(block.timestamp)
            tokenAccount.updatedAt = new Date(block.timestamp)
            ctx.store.save(tokenAccount)

            return getEvent(item, data)
        }

        // This token account was probably deleted before the LAST_HEIGHT when it was synced, and thus does not exist here.
        // So let the script continue, so it creates the token account that will probably be deleted later
        Sentry.captureMessage(
            `[TokenAccountCreated] We have not found token account ${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}.`,
            'fatal'
        )
    }

    const collection = new Collection({ id: data.collectionId.toString() })
    const token = await ctx.store.findOneBy(Token, { id: `${data.collectionId}-${data.tokenId}` })

    if (!token) {
        Sentry.captureMessage(`[TokenAccountCreated] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return undefined
    }

    const [account, collectionAccount] = await Promise.all([
        getOrCreateAccount(ctx, data.accountId),
        ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${u8aToHex(data.accountId)}` },
        }),
    ])

    if (!collectionAccount) {
        const newCollectionAccount = new CollectionAccount({
            id: `${data.collectionId}-${u8aToHex(data.accountId)}`,
            isFrozen: false,
            approvals: null,
            accountCount: 1,
            account,
            collection,
            createdAt: new Date(block.timestamp),
            updatedAt: new Date(block.timestamp),
        })
        await ctx.store.insert(CollectionAccount, newCollectionAccount as any)
    } else {
        collectionAccount.accountCount += 1
        await ctx.store.save(collectionAccount)
    }

    const tokenAccount = new TokenAccount({
        id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}`,
        balance: 0n, // The balance is updated on Mint event
        reservedBalance: 0n,
        totalBalance: 0n,
        lockedBalance: 0n,
        namedReserves: null,
        locks: null,
        approvals: null,
        isFrozen: false,
        account,
        collection,
        token,
        createdAt: new Date(block.timestamp),
        updatedAt: new Date(block.timestamp),
    })

    await ctx.store.save(TokenAccount, tokenAccount as any)

    return getEvent(item, data)
}
