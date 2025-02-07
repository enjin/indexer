import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { multiTokens } from '../../../types/generated/storage'
import { match } from 'ts-pattern'

type Collection = {
    owner: string
    policy: any
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [assetId: { collectionId: bigint; tokenId: bigint }, null][]
}

export async function collections(block: BlockHeader, collectionId: bigint): Promise<Collection | undefined> {
    return match(block)
        .returnType<Promise<Collection | undefined>>()
        .when(multiTokens.collections.enjinV100.is, multiTokens.collections.enjinV100.get(block, collectionId))
        .when(multiTokens.collections.v100.is, multiTokens.collections.v100.get(block, collectionId))
        .otherwise(() => {
            throw new UnsupportedStorageError('collections')
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
