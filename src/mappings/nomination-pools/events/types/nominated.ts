import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Nominated = {
    poolId: number
    validators: AccountId32[]
}
