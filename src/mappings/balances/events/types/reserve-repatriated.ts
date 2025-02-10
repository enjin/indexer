import { AccountId32, BalanceStatus } from '@enjin/indexer/mappings/common/types'

export type ReserveRepatriated = {
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}
