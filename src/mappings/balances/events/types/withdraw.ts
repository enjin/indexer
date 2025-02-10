import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Withdraw = {
    who: AccountId32
    amount: bigint
}
