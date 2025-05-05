import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, NominationPool, PoolValidator, Validator } from '../../../model'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'

export async function nominated(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.nominationPools.events.nominated(item)

    const pool = await ctx.store.findOneByOrFail<NominationPool>(NominationPool, { id: eventData.poolId.toString() })
    const accounts = await Promise.all(eventData.validators.map((v) => getOrCreateAccount(ctx, v)))

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
                })
            )
        }
    }

    // remove existing pool validators
    const existingPoolValidators = await ctx.store.findBy<PoolValidator>(PoolValidator, { pool: { id: pool.id } })
    await ctx.store.remove(existingPoolValidators)

    const poolValidators = accounts.map(
        (account) =>
            new PoolValidator({ id: `${pool.id}-${account.id}`, validator: new Validator({ id: account.id }), pool })
    )

    await ctx.store.save(poolValidators)

    return mappings.nominationPools.events.nominatedEventModel(item, eventData)
}
