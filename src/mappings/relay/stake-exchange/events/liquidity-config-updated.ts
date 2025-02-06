import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    StakeExchangeTokenFilterType,
    StakeExchangeLiquidityConfigUpdated,
    StakeExchangeTokenFilter,
} from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.liquidityConfigUpdated.enjinV100.is(event)) {
        return events.stakeExchange.liquidityConfigUpdated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.liquidityConfigUpdated.name)
}

export function getFilterFromType(tokenFilter: ReturnType<typeof getEventData>['config']['tokenFilter']) {
    let entity: StakeExchangeTokenFilter | null = null

    switch (tokenFilter.__kind) {
        case StakeExchangeTokenFilterType.All:
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.All,
            })
            break
        case StakeExchangeTokenFilterType.Whitelist:
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.Whitelist,
                value: tokenFilter.value.map((v) => v.toString()),
            })
            break
        case StakeExchangeTokenFilterType.BlockList:
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.BlockList,
                value: tokenFilter.value.map((v) => v.toString()),
            })
            break
        default:
            throw new Error('Unknown token filter type')
    }

    return entity
}

export async function liquidityConfigUpdated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const account = await getOrCreateAccount(ctx, eventData.who)

    const entity = getFilterFromType(eventData.config.tokenFilter)
    entity.id = account.id
    entity.account = account

    await ctx.store.save(entity)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            account: account.id,
            tokenFilter: entity.id,
        },
    })

    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityConfigUpdated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityConfigUpdated({
            account: account.id,
            tokenFilter: entity.id,
        }),
    })
}
