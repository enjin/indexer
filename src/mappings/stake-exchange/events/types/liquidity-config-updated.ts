import { AccountId32 } from '@enjin/indexer/mappings/common/types'
import { LiquidityAccountConfig } from '@enjin/indexer/mappings/common/types'

export type LiquidityConfigUpdated = {
    who: AccountId32
    config: LiquidityAccountConfig
}
