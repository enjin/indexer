import { AccountId32 } from '../../../common/types'
import { LiquidityAccountConfig } from '../../../common/types'

export type LiquidityConfigUpdated = {
    who: AccountId32
    config: LiquidityAccountConfig
}
