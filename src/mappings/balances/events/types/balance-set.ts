import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type BalanceSet = {
    who: AccountId32
    free: bigint
    reserved?: bigint // Removed on v104
}
