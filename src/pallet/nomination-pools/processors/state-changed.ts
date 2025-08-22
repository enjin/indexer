import { SnsEvent } from '~/util/sns'
import { Block, CommonContext, EventItem } from '~/contexts'
import { NominationPool, PoolState } from '~/model'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function stateChanged(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const data = mappings.nominationPools.events.stateChanged(item)

    const pool = await ctx.store.findOne(NominationPool, {
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
    if (!pool) return undefined

    pool.state = PoolState[data.newState.__kind]
    await ctx.store.save(pool)

    if (data.newState.__kind === PoolState.Destroying) {
        const snsEvent: SnsEvent = {
            id: item.id,
            name: 'NominationPools.Destroy',
            body: {
                pool: data.poolId.toString(),
                state: data.newState.__kind,
                extrinsic: item.extrinsic.id,
                name: pool.name,
                tokenId: `2-${pool.tokenId}`,
                owner: pool.degenToken.tokenAccounts[0].account.id,
            },
        }
        return [mappings.nominationPools.events.stateChangedEventModel(item, data), snsEvent]
    }
}
