import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type TokenAccountCreated = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    balance: bigint
}
