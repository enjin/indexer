import { AccountId32 } from '../../../common/types'

export type LiquidityWithdrawn = {
    who: AccountId32
    offerId: bigint
}
