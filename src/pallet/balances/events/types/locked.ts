import { AccountId32 } from '~/pallet/common/types'

export type Locked = {
    who: AccountId32
    amount: bigint
}
