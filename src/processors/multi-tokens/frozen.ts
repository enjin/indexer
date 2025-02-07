import { throwError } from '../../common/errors'
import { Collection, CollectionAccount, Event as EventModel, FreezeState, Token, TokenAccount, TransferPolicy } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { syncCollectionStats } from '../../jobs/collection-stats'
// import { isTokenFrozen } from '@enjin/indexer/processors/multi-tokens/token-created'

export async function frozen(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    // const data = mappings.multiTokens.events.frozen(item)
    // if (!data) return undefined
    //
    // if (skipSave) return mappings.multiTokens.events.frozenEventModel(item, data)
    //
    // if (data.tokenAccount) {
    //     const address = data.tokenAccount
    //     const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
    //         where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
    //     })
    //
    //     if (!tokenAccount) {
    //         throwError(`[Frozen] We have not found collection ${address}-${data.collectionId}-${data.tokenId}`, 'fatal')
    //         return mappings.multiTokens.events.frozenEventModel(item, data)
    //     }
    //
    //     tokenAccount.isFrozen = true
    //     tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    //     await ctx.store.save(tokenAccount)
    // } else if (data.collectionAccount) {
    //     const address = data.collectionAccount
    //     const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
    //         where: { id: `${data.collectionId}-${address}` },
    //     })
    //
    //     if (!collectionAccount) {
    //         throwError(`[Frozen] We have not found collection ${data.collectionId}-${address}`, 'fatal')
    //         return mappings.multiTokens.events.frozenEventModel(item, data)
    //     }
    //
    //     collectionAccount.isFrozen = true
    //     collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
    //     await ctx.store.save(collectionAccount)
    // } else if (data.tokenId !== undefined) {
    //     const token = await ctx.store.findOne<Token>(Token, {
    //         where: { id: `${data.collectionId}-${data.tokenId}` },
    //     })
    //
    //     if (!token) {
    //         throwError(`[Frozen] We have not found collection ${data.collectionId}-${data.tokenId}`, 'fatal')
    //         return mappings.multiTokens.events.frozenEventModel(item, data)
    //     }
    //
    //     switch (data.freezeState?.__kind) {
    //         case 'Permanent':
    //             token.freezeState = FreezeState.Permanent
    //             break
    //         case 'Temporary':
    //             token.freezeState = FreezeState.Temporary
    //             break
    //         case 'Never':
    //             token.freezeState = FreezeState.Never
    //             break
    //         default:
    //             token.freezeState = null
    //             break
    //     }
    //
    //     token.isFrozen = isTokenFrozen(token.freezeState)
    //
    //     await ctx.store.save(token)
    // } else {
    //     const collection = await ctx.store.findOne<Collection>(Collection, {
    //         where: { id: data.collectionId.toString() },
    //     })
    //
    //     if (!collection) {
    //         throwError(`[Frozen] We have not found collection ${data.collectionId.toString()}`, 'fatal')
    //         return mappings.multiTokens.events.frozenEventModel(item, data)
    //     }
    //
    //     collection.transferPolicy = new TransferPolicy({ isFrozen: true })
    //     await ctx.store.save(collection)
    // }
    //
    // if (item.extrinsic) {
    //     await Sns.getInstance().send({
    //         id: item.id,
    //         name: item.name,
    //         body: {
    //             kind: data.freezeType,
    //             address: data.collectionAccount ?? data.tokenAccount,
    //             collectionId: data.collectionId.toString(),
    //             tokenId: data.tokenId ?? null,
    //             token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
    //             extrinsic: item.extrinsic.id,
    //         },
    //     })
    // }
    //
    // syncCollectionStats(data.collectionId.toString())
    //
    // return mappings.multiTokens.events.frozenEventModel(item, data)
    return undefined
}
