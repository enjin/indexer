import { AccountId32 } from '~/pallet/common/types'

export type Frozen = {
    who: AccountId32
    amount: bigint
}
