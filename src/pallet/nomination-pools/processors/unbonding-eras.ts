import { Block } from '~/contexts'
import { UnbondingEras } from '~/model'
import * as mappings from '~/pallet/index'
import { SubPools, UnbondPool } from '~/pallet/nomination-pools/storage/types'

/**
 * The unbond pool that backs a member's chunk for `era`: the era's own pool while it exists, otherwise the era-less
 * pool it was merged into (`SubPools::maybe_merge_pools`). Mirrors the lookup in `do_withdraw_unbonded`.
 */
export function unbondPoolFor(subPools: SubPools, era: number): UnbondPool {
    return subPools.withEra.find(([poolEra]) => poolEra === era)?.[1] ?? subPools.noEra
}

/**
 * `Pallet::point_to_balance`: the balance `points` of an unbond pool are worth. Zero when the pool is empty, so a
 * fully slashed pool pays nothing out.
 */
export function unbondPointsToBalance(pool: UnbondPool, points: bigint): bigint {
    if (pool.balance === 0n || pool.points === 0n || points === 0n) {
        return 0n
    }

    return (pool.balance * points) / pool.points
}

/**
 * A member's unbonding chunks (`[era, points]` from `NominationPools.UnbondingMembers`) priced against the pool's
 * `SubPoolsStorage` read at the same block, so a slash of the unbonding pool (`UnbondingPoolSlashed`) lowers the
 * reported balance. Without a slash points and balance are equal. Shared by the processors and the refresh workers
 * so both store the same values.
 */
export function unbondingErasFromPoints(
    eras: [number, bigint][],
    subPools: SubPools | undefined
): UnbondingEras[] | null {
    if (eras.length === 0) {
        return null
    }

    return eras.map(
        ([era, points]) =>
            new UnbondingEras({
                era,
                balance: subPools ? unbondPointsToBalance(unbondPoolFor(subPools, era), points) : points,
            })
    )
}

/**
 * A member's unbonding chunks as `NominationPools.UnbondingMembers` holds them after `block`.
 *
 * `Unbonded` and `Withdrawn` do not say which chunks they touched: the chain merges unbonds that land on the
 * same era into one chunk and `withdraw_unbonded` releases every chunk with `era <= CurrentEra`, where
 * `CurrentEra` is the planned era and runs ahead of the indexer's `Era` rows (created on `EraPaid`). Rebuilding
 * the list from events drifted on both counts (WAPI-2101), so read it from storage instead.
 */
export async function unbondingErasAt(block: Block, poolId: number, member: string): Promise<UnbondingEras[] | null> {
    const [unbonding, subPools] = await Promise.all([
        mappings.nominationPools.storage.unbondingMembers(block, poolId, member),
        mappings.nominationPools.storage.subPools(block, poolId),
    ])

    return unbondingErasFromPoints(unbonding?.unbondingEras ?? [], subPools)
}
