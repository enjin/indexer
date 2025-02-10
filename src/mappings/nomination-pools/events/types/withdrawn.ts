import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Withdrawn = {
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
}
