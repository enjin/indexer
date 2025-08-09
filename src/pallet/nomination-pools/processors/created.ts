import { hexToString } from '@polkadot/util'
import { BonusCycle, Commission, Event as EventModel, NominationPool, PoolBalance, PoolState, Token } from '~/model'
import { storage } from '~/type'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { UnsupportedStorageError } from '~/util/errors'
import { QueueUtils } from '~/queue'

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

    // Find token by id only to avoid relation-heavy reads before flush
    const tokenId = `2-${callData.tokenId}`
    const token = await ctx.store.findOne(Token, { where: { id: tokenId } })

    const pool = new NominationPool({
        id: eventData.poolId.toString(),
        points: 0n, // update at bonded event
        state: PoolState.Open,
        name: 'name' in callData ? hexToString(callData.name as string) : '',
        commission: new Commission(),
        deposit: callData.deposit,
        tokenId: callData.tokenId,
        degenToken: new Token({ id: tokenId }),
        capacity: eventData.capacity,
        saturation: 0n,
        availableStakeAmount: eventData.capacity,
        availableStakePoints: eventData.capacity,
        accumulatedCommission: 0n,
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

    await ctx.store.save(pool)

    // Do not link token.nominationPool here to avoid FK violations under buffered flush; defer to background task
    // if (token) {
    //     token.nominationPool = pool
    //     await ctx.store.save(token)
    // }

    QueueUtils.dispatchComputePoolOffers(pool.id.toString())

    // Skip owner derivation here; resolve later in a background job if needed
    return mappings.nominationPools.events.createdEventModel(item, eventData, callData.tokenId, '')
}
