import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type LiquidityWithdrawn = {
    who: AccountId32
    offerId: bigint
}
