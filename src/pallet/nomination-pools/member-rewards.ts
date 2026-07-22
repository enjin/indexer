export const POOL_RATE_SCALE = 10n ** 18n

// Pool rate growth is the value actually credited to each point after pool-level accounting.
export function calculatePoolMemberReward(points: bigint, changeInRate: bigint): bigint {
    return (points * changeInRate) / POOL_RATE_SCALE
}
