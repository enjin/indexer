import { Block, CommonContext, EventItem } from '~/contexts'
import { NominationPool, PoolMember } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { getOrCreateAccount } from '~/util/entities'

/**
 * An empty entry left `NominationPools.UnbondingMembers`, either at the end of a partial `withdraw_unbonded` or
 * through `remove_empty_unbonding_members`. The member has no unbonding chunks left. A member that also holds no
 * sENJ is no longer part of the pool.
 */
export async function unbondingMemberRemoved(
    ctx: CommonContext,
    _block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.nominationPools.events.unbondingMemberRemoved(item)
    const account = await getOrCreateAccount(ctx, data.member)

    const member = await ctx.store.findOne(PoolMember, {
        where: { id: `${data.poolId}-${account.id}` },
        relations: { tokenAccount: true },
    })

    if (member) {
        member.unbondingEras = null

        // `totalBalance`: sENJ that is reserved (e.g. listed) still makes the account a member.
        if (member.isActive && (member.tokenAccount?.totalBalance ?? 0n) <= 0n) {
            const pool = await ctx.store.findOneBy(NominationPool, { id: data.poolId.toString() })
            member.bonded = 0n
            member.isActive = false
            if (pool) {
                pool.totalMembers -= 1
                await ctx.store.save(pool)
            }
        }

        await ctx.store.save(member)
    }

    return mappings.nominationPools.events.unbondingMemberRemovedEventModel(item, data, account.id)
}
