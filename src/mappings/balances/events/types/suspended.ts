import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Suspended = {
    who: AccountId32
    amount: bigint
}
