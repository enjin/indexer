import { hexToString } from '@polkadot/util'
import { BonusCycle, Commission, NominationPool, PoolBalance, PoolState, Token } from '~/model'
import { storage } from '~/type'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { UnsupportedStorageError } from '~/util/errors'
import { QueueUtils } from '~/queue'
import { EventHandlerResult } from '~/processor.handler'

function getCurrentEra(ctx: CommonContext, block: Block) {
    if (storage.staking.currentEra.enjinV100.is(block)) {
        return storage.staking.currentEra.enjinV100.get(block)
    }

    throw new UnsupportedStorageError('Staking.CurrentEra')
}

export async function created(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic || !item.call) return undefined

    const eventData = mappings.nominationPools.events.created(item)
    const callData = mappings.nominationPools.calls.create(item.call)

    const currentEraInfo = await getCurrentEra(ctx, block)

    let duration = 300

    if (callData.duration) {
        duration = callData.duration // 300 era is the default duration // changed in v1060
    }

    if (!currentEraInfo) {
        throw new Error('Active era info is not provided')
    }

    const token = await ctx.store.findOneOrFail(Token, {
        where: { id: `2-${callData.tokenId}`, tokenAccounts: { balance: 1n } },
        relations: {
            tokenAccounts: {
                account: true,
            },
        },
    })

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
        accumulatedCommission: 0n,
        balance: new PoolBalance({
            stash: 0n,
            reward: 0n,
            bonus: 0n,
            active: 0n,
        }),
        bonusCycle: new BonusCycle({
            start: currentEraInfo,
            end: currentEraInfo + duration,
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

    token.nominationPool = pool
    await ctx.store.save(token)

    QueueUtils.dispatchComputePoolOffers(pool.id.toString())

    const owner: string = token.tokenAccounts[0].account.id

    return mappings.nominationPools.events.createdEventModel(item, eventData, callData.tokenId, owner)
}
