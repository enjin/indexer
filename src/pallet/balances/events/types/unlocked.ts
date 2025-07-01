import { AccountId32 } from '~/pallet/common/types'

export type Unlocked = {
    who: AccountId32
    amount: bigint
}
