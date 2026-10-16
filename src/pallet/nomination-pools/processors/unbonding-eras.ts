import { Block } from '~/contexts'
import { UnbondingEras } from '~/model'
import * as mappings from '~/pallet/index'

/**
 * A member's unbonding chunks as `NominationPools.UnbondingMembers` holds them after `block`.
 *
 * `Unbonded` and `Withdrawn` do not say which chunks they touched: the chain merges unbonds that land on the
 * same era into one chunk and `withdraw_unbonded` releases every chunk with `era <= CurrentEra`, where
 * `CurrentEra` is the planned era and runs ahead of the indexer's `Era` rows (created on `EraPaid`). Rebuilding
 * the list from events drifted on both counts (WAPI-2101), so read it from storage instead.
 */
export async function unbondingErasAt(block: Block, poolId: number, member: string): Promise<UnbondingEras[] | null> {
    const unbonding = await mappings.nominationPools.storage.unbondingMembers(block, poolId, member)

    if (!unbonding || unbonding.unbondingEras.length === 0) {
        return null
    }

    return unbonding.unbondingEras.map(([era, balance]) => new UnbondingEras({ era, balance }))
}
