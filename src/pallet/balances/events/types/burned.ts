import { AccountId32 } from '~/pallet/common/types'

export type Burned = {
    who: AccountId32
    amount: bigint
}
