import { AccountId32 } from '~/pallet/common/types'
import { LiquidityAccountConfig } from '~/pallet/common/types'

export type LiquidityConfigUpdated = {
    who: AccountId32
    config: LiquidityAccountConfig
}
