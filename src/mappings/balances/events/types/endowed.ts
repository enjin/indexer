import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Endowed = {
    account: AccountId32
    freeBalance: bigint
}
