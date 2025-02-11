import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import {
    Event as EventModel,
    Extrinsic,
    StakeExchangeLiquidityConfigUpdated,
    StakeExchangeTokenFilter,
    StakeExchangeTokenFilterType,
} from '../../model'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'
import { TokenFilter } from '../../mappings/common/types'

export function getFilterFromType(tokenFilter: TokenFilter) {
    let entity: StakeExchangeTokenFilter | null = null

    switch (tokenFilter.__kind) {
        case 'All':
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.All,
            })
            break
        case 'Whitelist':
            entity = new StakeExchangeTokenFilter({
                type: StakeExchangeTokenFilterType.Whitelist,
                value: tokenFilter.value.map((v) => v.toString()),
            })
            break
        case 'BlockList':
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

    const event = mappings.stakeExchange.events.liquidityConfigUpdated(item)
    const account = await getOrCreateAccount(ctx, event.who)

    const tokenFilter = getFilterFromType(event.config.tokenFilter)
    tokenFilter.id = account.id
    tokenFilter.account = account

    await ctx.store.save(tokenFilter)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            account: account.id,
            tokenFilter: tokenFilter.id,
        },
    })

    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityConfigUpdated.name,
        extrinsic: item.extrinsic.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityConfigUpdated({
            account: account.id,
            tokenFilter: tokenFilter.id,
        }),
    })
}
