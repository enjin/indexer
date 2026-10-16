import { Block, CommonContext, EventItem } from '~/contexts'
import { PoolMember, TokenAccount } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { createAccount, updatePool } from '~/pallet/nomination-pools/processors/pool'
import { Sns, SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { IsNull, Not } from 'typeorm'
import { EventHandlerResult } from '~/processor.handler'
import { CustomStakingEvent } from '~/pallet/common/types'
import { unbondingErasAt } from '~/pallet/nomination-pools/processors/unbonding-eras'

/**
 * `do_withdraw_unbonded` pays a regular member's withdrawal to the member, who must hold an `UnbondingMembers`
 * entry. The deposit is paid to the pool token owner, and is only withdrawable once the deposit account is the
 * pool's sole unbonding member, so the recipient has no entry right before the withdrawal.
 */
async function isDepositWithdrawal(block: Block, poolId: number, recipient: string): Promise<boolean> {
    const entry = await mappings.nominationPools.storage.unbondingMembers(block.getParent(), poolId, recipient)
    return entry === undefined
}

export async function withdrawn(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const data = mappings.nominationPools.events.withdrawn(item)
    const pool = await updatePool(ctx, block, data.poolId.toString())
    const recipient = await getOrCreateAccount(ctx, data.member)

    // `Withdrawn.member` is the recipient. For the deposit that is the pool token owner (or the unclaimed-balance
    // receiver), while the withdrawn position belongs to the pool's deposit account.
    const isStashWithdrawing = await isDepositWithdrawal(block, data.poolId, recipient.id)
    const account = isStashWithdrawing ? await getOrCreateAccount(ctx, createAccount(block, pool.id, 1)) : recipient

    const poolMember = await ctx.store.findOne<PoolMember>(PoolMember, {
        where: { id: `${data.poolId}-${account.id}` },
        relations: { tokenAccount: true },
    })
    if (!poolMember) {
        return undefined
    }

    poolMember.unbondingEras = await unbondingErasAt(block, data.poolId, account.id)

    await ctx.store.save(poolMember)

    if (poolMember.unbondingEras === null && (!poolMember.tokenAccount || poolMember.tokenAccount.balance <= 0n)) {
        poolMember.bonded = 0n
        poolMember.isActive = false
        pool.totalMembers -= 1
        await ctx.store.save(poolMember)
        await ctx.store.save(pool)
    }

    const owner = await ctx.store.findOne(TokenAccount, {
        where: { token: { id: `2-${pool.tokenId}` } },
        relations: { account: true },
    })

    const unbondingMembers = await ctx.store.find(PoolMember, {
        where: { pool: { id: pool.id }, unbondingEras: Not(IsNull()), isStash: false },
    })

    const snsEvent: SnsEvent = {
        id: item.id,
        name: isStashWithdrawing ? CustomStakingEvent.DepositWithdrawn : item.name,
        body: {
            pool: data.poolId.toString(),
            account: recipient.id,
            balance: data.balance,
            points: data.points,
            extrinsic: item.extrinsic.id,
            hash: item.extrinsic.hash,
            name: pool.name,
            tokenId: `2-${pool.tokenId}`,
            state: pool.state,
            owner: owner?.account.id,
        },
    }

    if (!isStashWithdrawing && unbondingMembers.length === 0 && pool.isDestroying()) {
        await Sns.getInstance().send(
            {
                id: `${item.id}-all-members-withdrawn`,
                name: CustomStakingEvent.AllMembersWithdrawn,
                body: {
                    pool: pool.id,
                    extrinsic: item.extrinsic.id,
                    hash: item.extrinsic.hash,
                    name: pool.name,
                    tokenId: `2-${pool.tokenId}`,
                    state: pool.state,
                    owner: owner?.account.id,
                },
            },
            block.height
        )
    }

    return [mappings.nominationPools.events.withdrawnEventModel(item, data, pool.tokenId), snsEvent]
}
