import { hexToString } from '@polkadot/util'
import { BonusCycle, Commission, Event as EventModel, NominationPool, PoolBalance, PoolState, Token } from '../../model'
import { storage } from '../../types'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import * as mappings from './../../mappings'
import { UnsupportedStorageError } from '../../utils/errors'

function getCurrentEra(ctx: CommonContext, block: BlockHeader) {
    if (storage.staking.currentEra.enjinV100.is(block)) {
        return storage.staking.currentEra.enjinV100.get(block)
    }

    throw new UnsupportedStorageError('Staking.CurrentEra')
}

export async function created(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.call) return undefined

    const eventData = mappings.nominationPools.events.created(item)
    const callData = mappings.nominationPools.calls.create(item.call)

    const currentEraInfo = await getCurrentEra(ctx, block)

    if (!currentEraInfo) {
        throw new Error('Active era info is not provided')
    }

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
    })

    await ctx.store.insert(pool)

    return mappings.nominationPools.events.createdEventModel(item, eventData)
}
