import { AccountId32 } from '~/pallet/common/types'

export type Thawed = {
    who: AccountId32
    amount: bigint
}
