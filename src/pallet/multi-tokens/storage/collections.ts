import { Block } from '~/contexts'
import { UnsupportedStorageError } from '~/util/errors'
import { multiTokens } from '~/type/storage'
import { match } from 'ts-pattern'
import { Collection } from '~/pallet/multi-tokens/storage/types'

export async function collections(block: Block, params: { collectionId: bigint }): Promise<Collection | undefined>
export async function collections(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[k: bigint, v: Collection | undefined][]> | undefined>
export async function collections(
    block: Block,
    params?: {
        collectionId?: bigint
        batchSize?: number
    }
): Promise<Collection | AsyncIterable<[k: bigint, v: Collection | undefined][]> | undefined> {
    const getCollections = async (version: (typeof multiTokens.collections)[keyof typeof multiTokens.collections]) => {
        if (params?.collectionId) {
            return version.get(block, params.collectionId)
        }
        return version.getPairsPaged(params?.batchSize ?? 1000, block)
    }

    return match(block)
        .returnType<Promise<Collection | AsyncIterable<[k: bigint, v: Collection | undefined][]> | undefined>>()
        .when(
            () => multiTokens.collections.matrixEnjinV1022.is(block),
            () => getCollections(multiTokens.collections.matrixEnjinV1022)
        )
        .when(
            () => multiTokens.collections.matrixEnjinV1012.is(block),
            () => getCollections(multiTokens.collections.matrixEnjinV1012)
        )
        .when(
            () => multiTokens.collections.matrixEnjinV603.is(block),
            () => getCollections(multiTokens.collections.matrixEnjinV603)
        )
        .when(
            () => multiTokens.collections.matrixV1020.is(block),
            () => getCollections(multiTokens.collections.matrixV1020)
        )
        .when(
            () => multiTokens.collections.matrixV1010.is(block),
            () => getCollections(multiTokens.collections.matrixV1010)
        )
        .when(
            () => multiTokens.collections.matrixV500.is(block),
            () => getCollections(multiTokens.collections.matrixV500)
        )
        .when(
            () => multiTokens.collections.enjinV1032.is(block),
            () => getCollections(multiTokens.collections.enjinV1032)
        )
        .when(
            () => multiTokens.collections.enjinV100.is(block),
            () => getCollections(multiTokens.collections.enjinV100)
        )
        .when(
            () => multiTokens.collections.v1050.is(block),
            () => getCollections(multiTokens.collections.v1050)
        )
        .when(
            () => multiTokens.collections.v1030.is(block),
            () => getCollections(multiTokens.collections.v1030)
        )
        .when(
            () => multiTokens.collections.v100.is(block),
            () => getCollections(multiTokens.collections.v100)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(collections.name)
        })
}
