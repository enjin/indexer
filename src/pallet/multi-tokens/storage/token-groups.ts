import { Block } from '~/contexts'
import { multiTokens } from '~/type/storage'

export type TokenGroupStorage = {
    collectionId: bigint
    attributeCount: number
    tokenCount: bigint
}

export async function tokenGroups(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[bigint, TokenGroupStorage | undefined][]> | undefined> {
    const storage = multiTokens.tokenGroups.matrixEnjinV1022
    if (!storage.is(block)) return undefined

    return Promise.resolve(storage.getPairsPaged(params?.batchSize ?? 1000, block))
}
