import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Reserved = {
    who: AccountId32
    amount: bigint
}
