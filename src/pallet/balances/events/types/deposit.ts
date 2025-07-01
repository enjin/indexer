import { AccountId32 } from '~/pallet/common/types'

export type Deposit = {
    who: AccountId32
    amount: bigint
}
