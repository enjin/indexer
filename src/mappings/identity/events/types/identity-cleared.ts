import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type IdentityCleared = {
    who: AccountId32
    deposit: bigint
}
