import { AccountId32 } from '~/pallet/common/types'

export type Transfer = {
    from: AccountId32
    to: AccountId32
    amount: bigint
}
