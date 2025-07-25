import { AccountId32, BalanceStatus } from '~/pallet/common/types'

export type ReserveRepatriated = {
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}
