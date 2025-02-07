import { throwError } from '../../common/errors'
import { Collection, CollectionAccount, Event as EventModel, Token, TokenAccount } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

export async function tokenAccountCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenAccountCreated(item)

    if (skipSave) {
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            tokenAccount.createdAt = new Date(block.timestamp ?? 0)
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(tokenAccount)
        }

        return mappings.multiTokens.events.tokenAccountCreatedEventModel(item, data)
    }

    const collection = new Collection({ id: data.collectionId.toString() })
    const token = await ctx.store.findOneBy(Token, { id: `${data.collectionId}-${data.tokenId}` })

    if (!token) {
        throwError(`[TokenAccountCreated] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return undefined
    }

    const account = await getOrCreateAccount(ctx, data.accountId)
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${data.accountId}` },
    })

    if (collectionAccount) {
        collectionAccount.accountCount += 1
        await ctx.store.save(collectionAccount)
    } else {
        const newCollectionAccount = new CollectionAccount({
            id: `${data.collectionId}-${data.accountId}`,
            isFrozen: false,
            approvals: null,
            accountCount: 1,
            account,
            collection,
            createdAt: new Date(block.timestamp ?? 0),
            updatedAt: new Date(block.timestamp ?? 0),
        })
        await ctx.store.insert(newCollectionAccount)
    }

    const tokenAccount = new TokenAccount({
        id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
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
        createdAt: new Date(block.timestamp ?? 0),
        updatedAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(tokenAccount)

    return mappings.multiTokens.events.tokenAccountCreatedEventModel(item, data)
}
