import { AccountId32, Deposit, Bytes, Approval, TokenAccountReserve } from '../../../common/types'

export type TokenAccount = {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves?: [Bytes, bigint][] // Removed on v1050
    holds?: TokenAccountReserve[] // Added on v1050
    locks: [Bytes, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
    deposit?: Deposit // Added on v1030
    storageVersion?: number // Added on v1050
}
