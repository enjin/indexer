import { Block, CommonContext } from '~/contexts'
import { constants } from '~/type'
import { Account, NominationPool, PoolValidator, Validator } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { decodePoolId } from '~/pallet/nomination-pools/pool-account'
import { createAccount } from '~/pallet/nomination-pools/processors/pool'

/**
 * Returns the pool id when `account` is a pool's bonded (staking stash) account, otherwise undefined.
 */
export function poolIdFromBondedAccount(block: Block, account: string): string | undefined {
    return decodePoolId(constants.nominationPools.palletId.enjinV100.get(block), account)
}

/**
 * Replaces the pool's validator set with `accounts`, creating any missing Validator entities.
 */
export async function replacePoolValidators(ctx: CommonContext, pool: NominationPool, accounts: Account[]) {
    for (const account of accounts) {
        const validator = await ctx.store.findOne(Validator, {
            where: { account: { id: account.id } },
        })

        if (!validator) {
            await ctx.store.insert(
                new Validator({
                    id: account.id,
                    account,
                    nodeCount28d: [],
                    commission28d: [],
                    blockProduction28d: [],
                    peerCommission28d: [],
                    slashes84d: [],
                    grade: null,
                    isActive: true,
                })
            )
        }
    }

    const existingPoolValidators = await ctx.store.findBy<PoolValidator>(PoolValidator, { pool: { id: pool.id } })
    await ctx.store.remove(existingPoolValidators)

    const poolValidators = accounts.map(
        (account) =>
            new PoolValidator({ id: `${pool.id}-${account.id}`, validator: new Validator({ id: account.id }), pool })
    )

    await ctx.store.save(poolValidators)
}

/**
 * Rebuilds the pool's validator set from `Staking.Nominators` of its bonded account at `block`. Used after events that
 * change a pool's nominations without a `NominationPools.Nominated` event (kick by a validator, chill).
 */
export async function syncPoolValidators(ctx: CommonContext, block: Block, poolId: string) {
    const pool = await ctx.store.findOneBy<NominationPool>(NominationPool, { id: poolId })
    if (!pool) return

    const nominations = await mappings.staking.storage.nominators(block, createAccount(block, poolId, 1))
    const accounts = await Promise.all((nominations?.targets ?? []).map((target) => getOrCreateAccount(ctx, target)))

    await replacePoolValidators(ctx, pool, accounts)
}
