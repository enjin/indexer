import { events, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Account,
    EarlyBirdShares,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsEarlyBirdSharesCaptured,
} from '../../../model'
import { Sns } from '../../../common/sns'

function getPoolShares(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.earlyBirdShares.enjinV1022.is(block)) {
        return storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
    }

    throw new UnknownVersionError('NominationPools.EarlyBirdShares')
}

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdSharesCaptured.enjinV1022.is(event)) {
        return events.nominationPools.earlyBirdSharesCaptured.enjinV1022.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdSharesCaptured.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdSharesCaptured.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdSharesCaptured({
            pool: data.poolId.toString(),
            totalAccounts: data.totalAccounts,
        }),
    })
}

export async function earlyBirdSharesCaptured(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const data = await getPoolShares(block, eventData.poolId)

    const toSave = data.map((s) => {
        return new EarlyBirdShares({
            id: `${eventData.poolId}-${s[0][1]}`,
            pool: new NominationPool({ id: eventData.poolId.toString() }),
            account: new Account({ id: s[0][1] }),
            shares: s[1],
        })
    })

    await ctx.store.save(toSave)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                pool: eventData.poolId.toString(),
                totalAccounts: eventData.totalAccounts,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, eventData)
}
