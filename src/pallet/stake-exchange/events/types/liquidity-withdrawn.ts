import { AccountId32 } from '~/pallet/common/types'

export type LiquidityWithdrawn = {
    who: AccountId32
    offerId: bigint
}
