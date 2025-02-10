import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type DustLost = {
    account: AccountId32
    amount: bigint
}
