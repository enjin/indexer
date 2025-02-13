import { BlockHeader } from '../../../contexts'
import { UnsupportedStorageError } from '../../../utils/errors'
import { multiTokens } from '../../../types/storage'
import { match } from 'ts-pattern'
import { Collection } from './types'

export async function collections(block: BlockHeader, collectionId: bigint): Promise<Collection | undefined> {
    return match(block)
        .returnType<Promise<Collection | undefined>>()
        .when(
            () => multiTokens.collections.matrixEnjinV1012.is(block),
            () => multiTokens.collections.matrixEnjinV1012.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.matrixEnjinV603.is(block),
            () => multiTokens.collections.matrixEnjinV603.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.matrixV1010.is(block),
            () => multiTokens.collections.matrixV1010.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.matrixV500.is(block),
            () => multiTokens.collections.matrixV500.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.enjinV1032.is(block),
            () => multiTokens.collections.enjinV1032.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.enjinV100.is(block),
            () => multiTokens.collections.enjinV100.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.v1050.is(block),
            () => multiTokens.collections.v1050.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.v1030.is(block),
            () => multiTokens.collections.v1030.get(block, collectionId)
        )
        .when(
            () => multiTokens.collections.v100.is(block),
            () => multiTokens.collections.v100.get(block, collectionId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(collections.name)
        })
}

//
//
// async function getCollectionId(ctx: CommonContext, block: BlockHeader, collectionId: bigint) {
//     if (storage.multiTokens.collections.v1010.is(block)) {
//         const data = await storage.multiTokens.collections.v1010.get(block, collectionId)
//         const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies
//
//         const assets = currencies?.map(([assetId, _]) => assetId)
//
//         if (data) {
//             const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
//             return {
//                 maxTokenCount: data.policy.mint.maxTokenCount,
//                 maxTokenSupply: data.policy.mint.maxTokenSupply,
//                 forceSingleMint: data.policy.mint.forceCollapsingSupply,
//                 market,
//                 explicitRoyaltyCurrencies: assets ?? [], // Check
//             }
//         }
//     }
//
//     if (storage.multiTokens.collections.matrixEnjinV603.is(block)) {
//         const data = await storage.multiTokens.collections.matrixEnjinV603.get(block, collectionId)
//         const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies
//
//         const assets = currencies?.map(([assetId, _]) => assetId)
//
//         if (data) {
//             const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
//             return {
//                 maxTokenCount: data.policy.mint.maxTokenCount,
//                 maxTokenSupply: data.policy.mint.maxTokenSupply,
//                 forceSingleMint: data.policy.mint.forceSingleMint,
//                 market,
//                 explicitRoyaltyCurrencies: assets ?? [], // Check
//             }
//         }
//     }
//
//     return {
//         maxTokenCount: 0n,
//         maxTokenSupply: 0n,
//         forceSingleMint: false,
//         market: null,
//         explicitRoyaltyCurrencies: [],
//     }
// }
