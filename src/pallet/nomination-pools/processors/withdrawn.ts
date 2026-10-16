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
import { calls } from '~/type'

/**
 * Whether the originating call withdraws the deposit: `withdraw_deposit`, or `withdraw_unbonded` targeting the
 * deposit account (`do_withdraw_unbonded` keys `is_withdrawing_deposit` on the target). `item.call` is the innermost
 * call that emitted the event; the processor resolves batch, proxy, multisig, sudo and `dispatch_as` wrappers.
 * `undefined` when the call does not say (an unresolved wrapper or a non-`Id` address).
 */
function isDepositWithdrawalCall(item: EventItem, depositAccount: string): boolean | undefined {
    const call = item.call
    if (!call) return undefined

    if (call.name === calls.nominationPools.withdrawDeposit.name) return true
    if (call.name !== calls.nominationPools.withdrawUnbonded.name) return undefined

    const { memberAccount } = mappings.nominationPools.calls.withdrawUnbonded(call)
    if (memberAccount.__kind !== 'Id') return undefined

    return memberAccount.value.toLowerCase() === depositAccount.toLowerCase()
}

/**
 * Fallback when the call is not conclusive. A regular member's withdrawal is paid to the member, who must hold an
 * `UnbondingMembers` entry. The deposit is paid to the pool token owner and is only withdrawable once the deposit
 * account is the sole unbonding member, so the recipient normally has no entry at the parent block. That fails when
 * the owner withdrew their own position earlier in the same block, so when both entries existed it is ambiguous; it
 * is then attributed to the recipient with a warning.
 */
async function isDepositWithdrawalByStorage(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    poolId: number,
    recipient: string,
    depositAccount: string
): Promise<boolean> {
    const parent = block.getParent()
    const [recipientEntry, depositEntry] = await Promise.all([
        mappings.nominationPools.storage.unbondingMembers(parent, poolId, recipient),
        mappings.nominationPools.storage.unbondingMembers(parent, poolId, depositAccount),
    ])

    if (recipientEntry === undefined) return true
    if (depositEntry !== undefined) {
        ctx.log.warn(`Withdrawn ${item.id}: cannot tell a deposit withdrawal from ${recipient}'s own; using the latter`)
    }
    return false
}

export async function withdrawn(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const data = mappings.nominationPools.events.withdrawn(item)
    const pool = await updatePool(ctx, block, data.poolId.toString())
    const recipient = await getOrCreateAccount(ctx, data.member)

    // `Withdrawn.member` is the recipient. For the deposit that is the pool token owner (or the unclaimed-balance
    // receiver), while the withdrawn position belongs to the pool's deposit account.
    const depositAccount = createAccount(block, pool.id, 1)
    const isStashWithdrawing =
        isDepositWithdrawalCall(item, depositAccount) ??
        (await isDepositWithdrawalByStorage(ctx, block, item, data.poolId, recipient.id, depositAccount))
    const account = isStashWithdrawing ? await getOrCreateAccount(ctx, depositAccount) : recipient

    const poolMember = await ctx.store.findOne<PoolMember>(PoolMember, {
        where: { id: `${data.poolId}-${account.id}` },
        relations: { tokenAccount: true },
    })
    if (!poolMember) {
        return undefined
    }

    poolMember.unbondingEras = await unbondingErasAt(block, data.poolId, account.id)

    await ctx.store.save(poolMember)

    if (poolMember.unbondingEras === null && (poolMember.tokenAccount?.totalBalance ?? 0n) <= 0n) {
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
