import { throwError } from '../../common/errors'
import { Collection, CollectionAccount, Event as EventModel, Token, TokenAccount, TransferPolicy } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
// import { syncCollectionStats } from '../../jobs/collection-stats'
import { match } from 'ts-pattern'

export async function thawed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const event = mappings.multiTokens.events.thawed(item)

    if (skipSave) return mappings.multiTokens.events.thawedEventModel(item, event)

    if (event.freezeType.__kind === 'TokenAccount') {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${event.freezeType.accountId}-${event.collectionId}-${event.freezeType.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(
                `[Thawed] We have not found token account ${event.freezeType.accountId}-${event.collectionId}-${event.freezeType.tokenId}.`,
                'fatal'
            )
            return mappings.multiTokens.events.thawedEventModel(item, event)
        }

        tokenAccount.isFrozen = false
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else if (event.freezeType.__kind === 'CollectionAccount') {
        const address = event.freezeType.value
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${event.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Thawed] We have not found collection account ${event.collectionId}-${address}.`, 'fatal')
            return mappings.multiTokens.events.thawedEventModel(item, event)
        }

        collectionAccount.isFrozen = false
        collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    } else if (event.freezeType.__kind === 'Token') {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${event.collectionId}-${event.freezeType.tokenId}` },
        })

        if (!token) {
            throwError(
                `[Thawed] We have not found collection account ${event.collectionId}-${event.freezeType.tokenId}.`,
                'fatal'
            )
            return mappings.multiTokens.events.thawedEventModel(item, event)
        }

        token.isFrozen = false
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: event.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Thawed] We have not found collection ${event.collectionId.toString()}.`, 'fatal')
            return mappings.multiTokens.events.thawedEventModel(item, event)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: false })
        await ctx.store.save(collection)
    }

    if (item.extrinsic) {
        const { address, tokenId } = match(event.freezeType)
            .returnType<{ address: string | null; tokenId: bigint | null }>()
            .with({ __kind: 'CollectionAccount' }, (t) => ({ address: t.value, tokenId: null }))
            .with({ __kind: 'TokenAccount' }, (t) => ({ address: t.accountId, tokenId: t.tokenId }))
            .with({ __kind: 'Token' }, (t) => ({ address: null, tokenId: t.tokenId }))
            .otherwise(() => ({ address: null, tokenId: null }))

        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                kind: event.freezeType,
                address: address,
                collectionId: event.collectionId.toString(),
                tokenId: tokenId,
                token: tokenId ? `${event.collectionId}-${tokenId}` : null,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    // syncCollectionStats(event.collectionId.toString())

    return mappings.multiTokens.events.thawedEventModel(item, event)
}
