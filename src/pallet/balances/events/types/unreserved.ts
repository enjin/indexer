import { AccountId32 } from '~/pallet/common/types'

export type Unreserved = {
    who: AccountId32
    amount: bigint
}
