import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type IdentityKilled = {
    who: AccountId32
    deposit: bigint
}
