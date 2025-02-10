import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Slashed = {
    who: AccountId32
    amount: bigint
}
