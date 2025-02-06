import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Era, Event as EventModel, Extrinsic, StakingEraPaid } from '../../../model'
import { UnknownVersionError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (events.staking.eraPaid.enjinV100.is(event)) {
        return events.staking.eraPaid.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.staking.eraPaid.enjinV100.name)
}

export async function eraPaid(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = getEventData(item)
    if (!eventData) return undefined

    const lastEra = await ctx.store.find(Era, {
        order: {
            index: 'DESC',
        },
        take: 1,
    })

    if (lastEra.length === 0) return undefined

    lastEra[0].endAt = new Date(block.timestamp ?? 0)
    lastEra[0].endBlock = block.height
    await ctx.store.save(lastEra[0])

    const era = new Era({
        id: `${eventData.eraIndex + 1}`,
        index: eventData.eraIndex + 1,
        startAt: new Date(block.timestamp ?? 0),
        startBlock: block.height,
    })

    await ctx.store.save(era)

    return new EventModel({
        id: item.id,
        name: StakingEraPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingEraPaid({
            eraIndex: eventData.eraIndex,
            validatorPayout: eventData.validatorPayout,
            remainder: eventData.remainder,
        }),
    })
}
