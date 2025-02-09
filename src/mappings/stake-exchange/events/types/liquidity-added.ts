import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type LiquidityAdded = {
    who: AccountId32
    offerId: bigint
}
