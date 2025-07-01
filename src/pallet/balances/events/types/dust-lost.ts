import { AccountId32 } from '~/pallet/common/types'

export type DustLost = {
    account: AccountId32
    amount: bigint
}
