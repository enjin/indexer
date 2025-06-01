import { AccountId32, UnlockChunk } from '../../../common/types'

export type StakingLedger = {
    stash: AccountId32
    total: bigint
    active: bigint
    unlocking: UnlockChunk[]
    claimedRewards?: number[] // Removed on v1030
    legacyClaimedRewards?: number[] // Added on v1030
}
