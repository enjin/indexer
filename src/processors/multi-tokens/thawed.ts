import { throwError } from '../../common/errors'
import { Collection, CollectionAccount, Event as EventModel, Token, TokenAccount, TransferPolicy } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { syncCollectionStats } from '../../jobs/collection-stats'

export async function thawed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.thawed(item)

    if (skipSave) return mappings.multiTokens.events.thawedEventModel(item, data)

    if (data.tokenAccount) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${data.tokenAccount}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(
                `[Thawed] We have not found token account ${data.tokenAccount}-${data.collectionId}-${data.tokenId}.`,
                'fatal'
            )
            return mappings.multiTokens.events.thawedEventModel(item, data)
        }

        tokenAccount.isFrozen = false
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = data.collectionAccount
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Thawed] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
            return mappings.multiTokens.events.thawedEventModel(item, data)
        }

        collectionAccount.isFrozen = false
        collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId !== undefined) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwError(`[Thawed] We have not found collection account ${data.collectionId}-${data.tokenId}.`, 'fatal')
            return mappings.multiTokens.events.thawedEventModel(item, data)
        }

        token.isFrozen = false
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Thawed] We have not found collection ${data.collectionId.toString()}.`, 'fatal')
            return mappings.multiTokens.events.thawedEventModel(item, data)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: false })
        await ctx.store.save(collection)
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                kind: data.freezeType,
                address: data.collectionAccount ?? data.tokenAccount,
                collectionId: data.collectionId.toString(),
                tokenId: data.tokenId ?? null,
                token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    syncCollectionStats(data.collectionId.toString())

    return mappings.multiTokens.events.thawedEventModel(item, data)
}
