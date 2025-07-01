import { AccountId32 } from '~/pallet/common/types'

export type Slashed = {
    who: AccountId32
    amount: bigint
}
