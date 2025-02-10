import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Frozen = {
    who: AccountId32
    amount: bigint
}
