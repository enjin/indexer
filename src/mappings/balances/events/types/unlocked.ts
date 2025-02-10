import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Unlocked = {
    who: AccountId32
    amount: bigint
}
