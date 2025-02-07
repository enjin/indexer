import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsNominated,
    PoolValidator,
    Validator,
} from '../../../model'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.nominationPools.nominated.enjinV101.is(event)) {
        return events.nominationPools.nominated.enjinV101.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.nominated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsNominated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsNominated({
            pool: data.poolId.toString(),
            validators: data.validators.map((id) => id),
        }),
    })
}

export async function nominated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const pool = await ctx.store.findOneByOrFail(NominationPool, { id: eventData.poolId.toString() })
    const accounts = await Promise.all(eventData.validators.map((v) => getOrCreateAccount(ctx, v)))

    const validators = accounts.map((account) => new Validator({ id: account.id, account }))
    await ctx.store.save(validators)

    // remove existing pool validators
    const existingPoolValidators = await ctx.store.findBy(PoolValidator, { pool: { id: pool.id } })
    await ctx.store.remove(existingPoolValidators)

    const poolValidators = accounts.map(
        (account) => new PoolValidator({ id: `${pool.id}-${account.id}`, validator: new Validator({ id: account.id }), pool })
    )

    await ctx.store.save(poolValidators)

    return getEvent(item, eventData)
}
