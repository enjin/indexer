import {
    EarlyBirdShares,
    EraReward,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsDestroyed,
    PoolMember,
    PoolMemberRewards,
    PoolValidator,
} from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (events.nominationPools.destroyed.enjinV100.is(event)) {
        return events.nominationPools.destroyed.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.destroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsDestroyed({
            pool: data.poolId.toString(),
        }),
    })
}

export async function destroyed(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)
    if (!eventData) return undefined

    const earlyBirdShares = await ctx.store.findBy(EarlyBirdShares, { pool: { id: eventData.poolId.toString() } })
    const poolMemberRewards = await ctx.store.findBy(PoolMemberRewards, { pool: { id: eventData.poolId.toString() } })
    const poolMembers = await ctx.store.findBy(PoolMember, { pool: { id: eventData.poolId.toString() } })
    const eraRewards = await ctx.store.findBy(EraReward, { pool: { id: eventData.poolId.toString() } })
    const poolValidators = await ctx.store.findBy(PoolValidator, { pool: { id: eventData.poolId.toString() } })
    const nominationPool = await ctx.store.findOneBy(NominationPool, { id: eventData.poolId.toString() })

    if (earlyBirdShares.length) await ctx.store.remove(earlyBirdShares)
    if (poolMemberRewards.length) await ctx.store.remove(poolMemberRewards)
    if (poolMembers.length) await ctx.store.remove(poolMembers)
    if (eraRewards.length) await ctx.store.remove(eraRewards)
    if (poolValidators.length) await ctx.store.remove(poolValidators)
    if (nominationPool) await ctx.store.remove(nominationPool)

    return getEvent(item, eventData)
}
