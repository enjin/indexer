import { AccountId32, Bytes, RuntimeHoldReason } from '../../../common/types'

export type Reserved = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    amount: bigint
    reserveId?: Bytes | RuntimeHoldReason // Changed from Bytes? to RuntimeHoldReason on v1050
}
