import { Block, CommonContext, EventItem } from '~/contexts'
import { CommissionChangeRate, NominationPool } from '~/model'
import { Sns } from '~/util/sns'
import { hexToString } from '@polkadot/util'
import * as mappings from '~/pallet/index'

export async function poolMutated(ctx: CommonContext, block: Block, item: EventItem) {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.poolMutated(item)
    const mutation: Record<string, number | string | Record<string, number>> = {}

    const pool = await ctx.store.findOneOrFail<NominationPool>(NominationPool, {
        where: {
            id: data.poolId.toString(),
            degenToken: {
                tokenAccounts: {
                    balance: 1n,
                },
            },
        },
        relations: {
            degenToken: {
                tokenAccounts: {
                    account: true,
                },
            },
        },
    })

    if (data.mutation.duration !== undefined) {
        pool.bonusCycle.pendingDuration = data.mutation.duration
        mutation.duration = data.mutation.duration
    }

    if (
        data.mutation.newCommission !== undefined &&
        data.mutation.newCommission.__kind === 'SomeMutation' &&
        data.mutation.newCommission.value !== undefined
    ) {
        mutation.oldCommission = pool.commission.current ?? 0
        pool.commission.current = data.mutation.newCommission.value
        mutation.newCommission = data.mutation.newCommission.value
    }

    if (data.mutation.maxCommission !== undefined) {
        pool.commission.max = data.mutation.maxCommission
        mutation.maxCommission = data.mutation.maxCommission
    }

    if (data.mutation.changeRate) {
        pool.commission.changeRate = new CommissionChangeRate({
            maxDelta: data.mutation.changeRate.maxDelta,
            minDelay: data.mutation.changeRate.minDelay,
        })

        mutation.changeRate = {
            maxDelta: data.mutation.changeRate.maxDelta,
            minDelay: data.mutation.changeRate.minDelay,
        }
    }

    if ('capacity' in data.mutation && data.mutation.capacity) {
        pool.capacity = data.mutation.capacity
        mutation.capacity = pool.capacity.toString()
    }

    if ('name' in data.mutation) {
        pool.name = hexToString(data.mutation.name as string)
        mutation.name = pool.name
    }

    await ctx.store.save(pool)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            pool: pool.id,
            mutation,
            extrinsic: item.extrinsic.id,
            name: pool.name,
            tokenId: pool.degenToken.id,
            owner: pool.degenToken.tokenAccounts[0].account.id,
        },
    })

    return mappings.nominationPools.events.poolMutatedEventModel(item, data)
}
