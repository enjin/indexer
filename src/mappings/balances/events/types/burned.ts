import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Burned = {
    who: AccountId32
    amount: bigint
}
