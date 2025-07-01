import { AccountId32, H160 } from '~/pallet/common/types'

export type Claimed = {
    who: AccountId32
    ethereumAddress?: H160
    amount: bigint
}
