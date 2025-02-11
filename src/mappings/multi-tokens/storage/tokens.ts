import { BlockHeader } from '../../../common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import { Token } from './types/tokens'

export async function tokens(block: BlockHeader, collectionId: bigint, tokenId: bigint): Promise<Token | undefined> {
    return match(block)
        .returnType<Promise<Token | undefined>>()
        .when(
            () => storage.multiTokens.tokens.enjinV1032.is(block),
            () => storage.multiTokens.tokens.enjinV1032.get(block, collectionId, tokenId)
        )
        .when(
            () => storage.multiTokens.tokens.enjinV100.is(block),
            () => storage.multiTokens.tokens.enjinV100.get(block, collectionId, tokenId)
        )
        .when(
            () => storage.multiTokens.tokens.v1050.is(block),
            () => storage.multiTokens.tokens.v1050.get(block, collectionId, tokenId)
        )
        .when(
            () => storage.multiTokens.tokens.v1030.is(block),
            () => storage.multiTokens.tokens.v1030.get(block, collectionId, tokenId)
        )
        .when(
            () => storage.multiTokens.tokens.v102.is(block),
            () => storage.multiTokens.tokens.v102.get(block, collectionId, tokenId)
        )
        .when(
            () => storage.multiTokens.tokens.v100.is(block),
            () => storage.multiTokens.tokens.v100.get(block, collectionId, tokenId)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(tokens.name)
        })
}

// export async function token(ctx: CommonContext, block: BlockHeader, collectionId: bigint, tokenId: bigint) {
//     if (storage.multiTokens.tokens.matrixEnjinV1012.is(block)) {
//         const data = await storage.multiTokens.tokens.matrixEnjinV1012.get(block, collectionId, tokenId)
//
//         if (data) {
//             const cap = data.cap ? getCapType(data.cap) : null
//             const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
//             const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
//             const unitPrice: bigint = 10_000_000_000_000_000n
//
//             return {
//                 collectionId,
//                 tokenId,
//                 infusion: data.infusion,
//                 initialSupply: data.supply,
//                 minimumBalance: 1n,
//                 anyoneCanInfuse: data.anyoneCanInfuse,
//                 unitPrice,
//                 cap,
//                 nativeMetadata: new NativeTokenMetadata({
//                     decimalCount: data.metadata.decimalCount,
//                     name: hexToString(data.metadata.name),
//                     symbol: hexToString(data.metadata.symbol),
//                 }),
//                 accountDepositCount: data.accountCount,
//                 behavior,
//                 freezeState,
//                 listingForbidden: data.listingForbidden ?? false,
//             }
//         }
//     }
//
//     if (storage.multiTokens.tokens.matrixEnjinV603.is(block)) {
//         const data = await storage.multiTokens.tokens.matrixEnjinV603.get(block, collectionId, tokenId)
//
//         if (data) {
//             const cap = data.cap ? getCapType(data.cap) : null
//             const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
//             const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
//             const unitPrice: bigint | null =
//                 data.sufficiency.__kind === 'Insufficient' ? data.sufficiency.unitPrice : 10_000_000_000_000_000n
//             const { minimumBalance } = data
//
//             return {
//                 collectionId,
//                 tokenId,
//                 initialSupply: data.supply,
//                 minimumBalance,
//                 unitPrice,
//                 cap,
//                 behavior,
//                 freezeState,
//                 listingForbidden: data.listingForbidden,
//             }
//         }
//     }
//
//     throw new UnsupportedStorageError('storage.multi-tokens.token')
// }
