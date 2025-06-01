import { hexToString } from '@polkadot/util'
import {
    BonusCycle,
    Commission,
    EarlyBirdShares,
    EraReward,
    Event as EventModel,
    NominationPool,
    PoolBalance,
    PoolMember,
    PoolMemberRewards,
    PoolState,
    PoolValidator,
    Token,
} from '../../../model'
import { storage } from '../../../types'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { UnsupportedStorageError } from '../../../utils/errors'

function getCurrentEra(ctx: CommonContext, block: Block) {
    if (storage.staking.currentEra.enjinV100.is(block)) {
        return storage.staking.currentEra.enjinV100.get(block)
    }

    throw new UnsupportedStorageError('Staking.CurrentEra')
}

export async function created(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.call) return undefined

    const eventData = mappings.nominationPools.events.created(item)
    const callData = mappings.nominationPools.calls.create(item.call)

    const currentEraInfo = await getCurrentEra(ctx, block)

    if (!currentEraInfo) {
        throw new Error('Active era info is not provided')
    }

    // TODO: Check if the destroyed event was never emitted before
    const poolId = await ctx.store.findOneBy(NominationPool, { degenToken: { id: `2-${callData.tokenId}` } })
    if (poolId) {
        const earlyBirdShares = await ctx.store.findBy(EarlyBirdShares, { pool: { id: poolId.id } })
        const poolMemberRewards = await ctx.store.findBy(PoolMemberRewards, { pool: { id: poolId.id } })
        const poolMembers = await ctx.store.findBy(PoolMember, { pool: { id: poolId.id } })
        const eraRewards = await ctx.store.findBy(EraReward, { pool: { id: poolId.id } })
        const poolValidators = await ctx.store.findBy(PoolValidator, { pool: { id: poolId.id } })

        if (earlyBirdShares.length) await ctx.store.remove(earlyBirdShares)
        if (poolMemberRewards.length) await ctx.store.remove(poolMemberRewards)
        if (poolMembers.length) await ctx.store.remove(poolMembers)
        if (eraRewards.length) await ctx.store.remove(eraRewards)
        if (poolValidators.length) await ctx.store.remove(poolValidators)

        await ctx.store.remove(poolId)
    }
    ///////////

    const pool = new NominationPool({
        id: eventData.poolId.toString(),
        points: 0n, // update at bonded event
        state: PoolState.Open,
        name: 'name' in callData ? hexToString(callData.name as string) : '',
        commission: new Commission(),
        deposit: callData.deposit,
        tokenId: callData.tokenId,
        degenToken: new Token({ id: `2-${callData.tokenId}` }),
        capacity: eventData.capacity,
        saturation: 0n,
        availableStakeAmount: eventData.capacity,
        availableStakePoints: eventData.capacity,
        balance: new PoolBalance({
            stash: 0n,
            reward: 0n,
            bonus: 0n,
            active: 0n,
        }),
        bonusCycle: new BonusCycle({
            start: currentEraInfo,
            end: currentEraInfo + callData.duration,
        }),
        apy: 0,
        rate: 1000_000_000_000_000_000n,
        historicalApy: 0,
        slashes: [],
        totalMembers: 0,
        createdAt: new Date(block.timestamp ?? 0),
        createdBlock: block.height,
        nodeCount: 0,
    })

    ctx.log.warn(`Pool ${pool.id} created`)

    await ctx.store.insert(pool)

    return mappings.nominationPools.events.createdEventModel(item, eventData)
}
