import { DefaultMintParams, AccountId32 } from '@enjin/indexer/mappings/common/types'

export type BatchMint = {
    collectionId: bigint
    recipients: {
        accountId: AccountId32
        params: DefaultMintParams
    }[]
}
