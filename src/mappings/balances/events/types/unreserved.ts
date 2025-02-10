import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Unreserved = {
    who: AccountId32
    amount: bigint
}
