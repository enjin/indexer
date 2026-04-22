import { Block } from '~/contexts'
import { UnsupportedStorageError } from '~/util/errors'
import { multiTokens } from '~/type/storage'
import { match } from 'ts-pattern'
import { Token } from '~/pallet/multi-tokens/storage/types'

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
            () => multiTokens.tokens.matrixEnjinV1031.is(block),
            () => getTokens(multiTokens.tokens.matrixEnjinV1031)
        )
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
            () => multiTokens.tokens.matrixV1030.is(block),
            () => getTokens(multiTokens.tokens.matrixV1030)
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
            () => multiTokens.tokens.v1060.is(block),
            () => getTokens(multiTokens.tokens.v1060)
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
