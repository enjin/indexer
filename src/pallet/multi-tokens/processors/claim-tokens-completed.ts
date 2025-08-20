import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensCompleted } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function claimTokensCompleted(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.claimTokensCompleted(item)
    const claim = await ctx.store.findOneByOrFail(MultiTokensClaims, {
        id: `${data.destination}-${data.ethereumAddress}`,
    })

    claim.completed = true

    await ctx.store.save(claim)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            account: data.destination,
            ethAccount: data.ethereumAddress,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [
        new EventModel({
            id: item.id,
            name: MultiTokensClaimTokensCompleted.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new MultiTokensClaimTokensCompleted({
                account: data.destination,
                ethAccount: data.ethereumAddress,
            }),
        }),
        snsEvent,
    ]
}
