import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'
import { TokenAccount } from './types/token-accounts'
import { AccountId32 } from '../../common/types'

export async function tokenAccounts(
    block: BlockHeader,
    collectionId: bigint,
    tokenId: bigint
): Promise<[k: [bigint, bigint, AccountId32], v: TokenAccount | undefined][]> {
    return (
        match(block)
            .returnType<Promise<[k: [bigint, bigint, string], v: TokenAccount | undefined][]>>()
            .when(storage.multiTokens.tokenAccounts.enjinV1032.is, () =>
                storage.multiTokens.tokenAccounts.enjinV1032.getPairs(block, collectionId, tokenId)
            )
            .when(storage.multiTokens.tokenAccounts.enjinV100.is, () =>
                storage.multiTokens.tokenAccounts.enjinV100.getPairs(block, collectionId, tokenId)
            )
            .when(storage.multiTokens.tokenAccounts.v1050.is, () =>
                storage.multiTokens.tokenAccounts.v1050.getPairs(block, collectionId, tokenId)
            )
            .when(storage.multiTokens.tokenAccounts.v1030.is, () =>
                storage.multiTokens.tokenAccounts.v1030.getPairs(block, collectionId, tokenId)
            )
            .when(storage.multiTokens.tokenAccounts.v101.is, () =>
                storage.multiTokens.tokenAccounts.v101.getPairs(block, collectionId, tokenId)
            )
            // TODO: In this spec it the account would come before the collection and token id
            // .when(storage.multiTokens.tokenAccounts.v100.is, storage.multiTokens.tokenAccounts.v100.getPairs(block, '1', collectionId))
            .otherwise(() => {
                throw new UnsupportedStorageError('collections')
            })
    )
}
