import { Block, CommonContext, EventItem } from '~/contexts'
import { Era, Event as EventModel, Extrinsic, StakingEraPaid } from '~/model'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'

export async function eraPaid(ctx: CommonContext, block: Block, item: EventItem) {
    const event = mappings.staking.events.eraPaid(item)

    const lastEra = await ctx.store.find<Era>(Era, {
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
        id: `${event.eraIndex + 1}`,
        index: event.eraIndex + 1,
        startAt: new Date(block.timestamp ?? 0),
        startBlock: block.height,
        nodeCount: 0,
    })

    await ctx.store.save(era)

    await Promise.all([QueueUtils.dispatchComputeValidators(), QueueUtils.dispatchStakePoolsEvents(item.extrinsic?.id)])

    return new EventModel({
        id: item.id,
        name: StakingEraPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingEraPaid({
            eraIndex: event.eraIndex,
            validatorPayout: event.validatorPayout,
            remainder: event.remainder,
        }),
    })
}
