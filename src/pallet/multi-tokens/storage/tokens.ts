import { Block } from '../../../contexts'
import { UnsupportedStorageError } from '../../../util/errors'
import { multiTokens } from '../../../type/storage'
import { match } from 'ts-pattern'
import { Token } from './types'

export async function tokens(
    block: Block,
    params: { collectionId: bigint; tokenId: bigint }
): Promise<Token | undefined>
export async function tokens(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[k: [bigint, bigint], v: Token | undefined][]> | undefined>
export async function tokens(
    block: Block,
    params?: { collectionId?: bigint; tokenId?: bigint; batchSize?: number }
): Promise<Token | AsyncIterable<[k: [bigint, bigint], v: Token | undefined][]> | undefined> {
    const getTokens = async (version: (typeof multiTokens.tokens)[keyof typeof multiTokens.tokens]) => {
        if (params?.collectionId && params.tokenId !== undefined) {
            return version.get(block, params.collectionId, params.tokenId)
        }
        return version.getPairsPaged(params?.batchSize ?? 1000, block)
    }

    return match(block)
        .returnType<Promise<Token | AsyncIterable<[k: [bigint, bigint], v: Token | undefined][]> | undefined>>()
        .when(
            () => multiTokens.tokens.matrixEnjinV1022.is(block),
            () => getTokens(multiTokens.tokens.matrixEnjinV1022)
        )
        .when(
            () => multiTokens.tokens.matrixEnjinV1012.is(block),
            () => getTokens(multiTokens.tokens.matrixEnjinV1012)
        )
        .when(
            () => multiTokens.tokens.matrixEnjinV603.is(block),
            () => getTokens(multiTokens.tokens.matrixEnjinV603)
        )
        .when(
            () => multiTokens.tokens.matrixV1020.is(block),
            () => getTokens(multiTokens.tokens.matrixV1020)
        )
        .when(
            () => multiTokens.tokens.matrixV1010.is(block),
            () => getTokens(multiTokens.tokens.matrixV1010)
        )
        .when(
            () => multiTokens.tokens.matrixV600.is(block),
            () => getTokens(multiTokens.tokens.matrixV600)
        )
        .when(
            () => multiTokens.tokens.matrixV500.is(block),
            () => getTokens(multiTokens.tokens.matrixV500)
        )
        .when(
            () => multiTokens.tokens.enjinV1050.is(block),
            () => getTokens(multiTokens.tokens.enjinV1050)
        )
        .when(
            () => multiTokens.tokens.enjinV1032.is(block),
            () => getTokens(multiTokens.tokens.enjinV1032)
        )
        .when(
            () => multiTokens.tokens.enjinV100.is(block),
            () => getTokens(multiTokens.tokens.enjinV100)
        )
        .when(
            () => multiTokens.tokens.v1050.is(block),
            () => getTokens(multiTokens.tokens.v1050)
        )
        .when(
            () => multiTokens.tokens.v1030.is(block),
            () => getTokens(multiTokens.tokens.v1030)
        )
        .when(
            () => multiTokens.tokens.v102.is(block),
            () => getTokens(multiTokens.tokens.v102)
        )
        .when(
            () => multiTokens.tokens.v100.is(block),
            () => getTokens(multiTokens.tokens.v100)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(tokens.name)
        })
}

// export async function token(ctx: CommonContext, block: BlockHeader, collectionId: bigint, tokenId: bigint) {
//     if (multiTokens.tokens.matrixEnjinV1012.is(block)) {
//         const data = await multiTokens.tokens.matrixEnjinV1012)
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
//     if (multiTokens.tokens.matrixEnjinV603.is(block)) {
//         const data = await multiTokens.tokens.matrixEnjinV603)
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
//     throw new UnsupportedStorageError('multi-tokens.token')
// }
