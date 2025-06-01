import { Block } from '../../../contexts'
import { UnsupportedStorageError } from '../../../utils/errors'
import { multiTokens } from '../../../types/storage'
import { match } from 'ts-pattern'
import { CollectionAccount } from './types'
import { AccountId32 } from '../../common/types'

export async function collectionAccounts(
    block: Block,
    params: { collectionId: bigint; accountId?: string }
): Promise<CollectionAccount | undefined>
export async function collectionAccounts(
    block: Block,
    params?: { batchSize?: number }
): Promise<AsyncIterable<[k: [bigint, AccountId32], v: CollectionAccount | undefined][]> | undefined>
export async function collectionAccounts(
    block: Block,
    params?: { collectionId?: bigint; accountId?: string; batchSize?: number }
): Promise<
    CollectionAccount | AsyncIterable<[k: [bigint, AccountId32], v: CollectionAccount | undefined][]> | undefined
> {
    const getCollectionAccounts = async (
        version: (typeof multiTokens.collectionAccounts)[keyof typeof multiTokens.collectionAccounts]
    ) => {
        if (params?.collectionId && params.accountId) {
            return version.get(block, params.collectionId, params.accountId)
        }

        return version.getPairsPaged(params?.batchSize ?? 1000, block)
    }

    return match(block)
        .returnType<
            Promise<
                | CollectionAccount
                | AsyncIterable<[k: [bigint, AccountId32], v: CollectionAccount | undefined][]>
                | undefined
            >
        >()
        .when(
            () => multiTokens.collectionAccounts.matrixEnjinV603.is(block),
            () => getCollectionAccounts(multiTokens.collectionAccounts.matrixEnjinV603)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(collectionAccounts.name)
        })
}
