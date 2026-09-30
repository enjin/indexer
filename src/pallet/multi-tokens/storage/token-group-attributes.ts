import { Block } from '~/contexts'
import { Bytes } from '~/pallet/common/types'
import { Attribute } from '~/pallet/multi-tokens/storage/types'
import {
    getMixedAttribute,
    getMixedAttributePairs,
    normalizeLegacyAttribute,
    normalizeLegacyAttributePairs,
} from '~/pallet/multi-tokens/storage/attribute-values'
import { multiTokens } from '~/type/storage'

export async function tokenGroupAttributes(
    block: Block,
    params: { tokenGroupId: bigint; key: Bytes }
): Promise<Attribute | undefined>
export async function tokenGroupAttributes(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[k: [bigint, string], v: Attribute | undefined][]> | undefined>
export async function tokenGroupAttributes(
    block: Block,
    params?: { tokenGroupId?: bigint; key?: Bytes; batchSize?: number }
): Promise<Attribute | AsyncIterable<[[bigint, string], Attribute | undefined][]> | undefined> {
    const target =
        params?.tokenGroupId !== undefined && params.key !== undefined
            ? { tokenGroupId: params.tokenGroupId, key: params.key }
            : undefined

    const current = [multiTokens.tokenGroupAttributes.v1080, multiTokens.tokenGroupAttributes.matrixV1040].find(
        (version) => version.is(block)
    )
    if (current) {
        if (target) {
            return getMixedAttribute(block, 'TokenGroupAttributes', [target.tokenGroupId, target.key])
        }

        return getMixedAttributePairs(block, 'TokenGroupAttributes', current, params?.batchSize ?? 1000)
    }

    const legacy = [
        multiTokens.tokenGroupAttributes.matrixEnjinV1022,
        multiTokens.tokenGroupAttributes.enjinV1062,
    ].find((version) => version.is(block))

    if (!legacy) return undefined
    if (target) return normalizeLegacyAttribute(await legacy.get(block, target.tokenGroupId, target.key))

    return normalizeLegacyAttributePairs(legacy.getPairsPaged(params?.batchSize ?? 1000, block))
}
