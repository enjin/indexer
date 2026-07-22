/**
 * Reward accounting for nomination pools.
 *
 * On-chain semantics (Enjin relaychain `pallet-nomination-pools`, `do_payout_rewards`):
 *   - `RewardPaid.reward` is the GROSS amount added to the pool's reward account from the
 *     validator payout, captured BEFORE commission is deducted.
 *   - `claim_commission()` then transfers `commission` OUT of the reward account.
 *   - Only the remainder (`reward - commission`) is transferred to the bonded account and
 *     staked via `bond_extra`, i.e. only the net amount compounds into the pool rate.
 *
 * Therefore the amount that actually reinvests/compounds is `reward - commission`, NOT
 * `reward + commission`. Historically the indexer added commission, overstating every
 * per-era `reinvested` and every member reward by `2 * commission` (~1.07/0.93 ≈ +15% at a
 * 7% commission). See NFTIO reward-accounting fix.
 */

const RATE_PRECISION = 10n ** 18n

/**
 * Net amount reinvested into the pool for a single `RewardPaid` event.
 * This is what compounds into the pool rate: gross reward minus the operator commission.
 */
export function netReinvested(reward: bigint, commission: bigint): bigint {
    const net = reward - commission
    // Guard against pathological data (commission should never exceed the reward it is
    // carved out of); never contribute a negative amount to reinvested.
    return net > 0n ? net : 0n
}

/**
 * Per-member reward for an era, derived from the on-chain rate movement.
 *
 * `changeInRate` is `rate_now - rate_prev` (rate is scaled by 1e18). A member holding
 * `points` gains `points * changeInRate / 1e18` in value over the era. This is exactly the
 * member's real value growth and is consistent with what Subscan reports, because both read
 * the same on-chain rate. It also equals `points * reinvested / totalPoolPoints` once
 * `reinvested` is the net (post-commission) figure, since
 * `reinvested ≈ changeInRate * totalPoolPoints / 1e18`.
 */
export function memberEraReward(points: bigint, changeInRate: bigint): bigint {
    const reward = (points * changeInRate) / RATE_PRECISION
    return reward > 0n ? reward : 0n
}
