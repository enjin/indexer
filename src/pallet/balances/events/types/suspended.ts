import { AccountId32 } from '~/pallet/common/types'

export type Suspended = {
    who: AccountId32
    amount: bigint
}
