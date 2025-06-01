import { Block } from '../../../contexts'
import { UnsupportedStorageError } from '../../../utils/errors'
import { multiTokens } from '../../../types/storage'
import { match } from 'ts-pattern'
import { Attribute } from './types'
import { Bytes } from '../../common/types'

export async function attributes(
    block: Block,
    params: { collectionId: bigint; tokenId?: bigint; key?: Bytes }
): Promise<Attribute | undefined>
export async function attributes(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[k: [bigint, bigint?, string?], v: Attribute | undefined][]> | undefined>
export async function attributes(
    block: Block,
    params?: { collectionId?: bigint; tokenId?: bigint; key?: string; batchSize?: number }
): Promise<Attribute | AsyncIterable<[k: [bigint, bigint?, string?], v: Attribute | undefined][]> | undefined> {
    const getAttributes = async (version: (typeof multiTokens.attributes)[keyof typeof multiTokens.attributes]) => {
        if (params?.collectionId && params.tokenId) {
            return version.get(block, params.collectionId, params.tokenId, params.key ?? '')
        }

        return version.getPairsPaged(params?.batchSize ?? 1000, block)
    }

    return match(block)
        .returnType<
            Promise<Attribute | AsyncIterable<[k: [bigint, bigint?, string?], v: Attribute | undefined][]> | undefined>
        >()
        .when(
            () => multiTokens.attributes.matrixEnjinV1012.is(block),
            () => getAttributes(multiTokens.attributes.matrixEnjinV1012)
        )
        .when(
            () => multiTokens.attributes.matrixEnjinV603.is(block),
            () => getAttributes(multiTokens.attributes.matrixEnjinV603)
        )
        .when(
            () => multiTokens.attributes.matrixV1010.is(block),
            () => getAttributes(multiTokens.attributes.matrixV1010)
        )
        .when(
            () => multiTokens.attributes.matrixV500.is(block),
            () => getAttributes(multiTokens.attributes.matrixV500)
        )
        .when(
            () => multiTokens.attributes.enjinV1032.is(block),
            () => getAttributes(multiTokens.attributes.enjinV1032)
        )
        .when(
            () => multiTokens.attributes.enjinV100.is(block),
            () => getAttributes(multiTokens.attributes.enjinV100)
        )
        .when(
            () => multiTokens.attributes.v1030.is(block),
            () => getAttributes(multiTokens.attributes.v1030)
        )
        .when(
            () => multiTokens.attributes.v100.is(block),
            () => getAttributes(multiTokens.attributes.v100)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(attributes.name)
        })
}
