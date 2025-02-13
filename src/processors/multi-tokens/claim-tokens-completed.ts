import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensCompleted } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'

export async function claimTokensCompleted(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.claimTokensCompleted(item)
    const claim = await ctx.store.findOneByOrFail(MultiTokensClaims, {
        id: `${data.destination}-${data.ethereumAddress}`,
    })

    claim.completed = true

    await ctx.store.save(claim)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            account: data.destination,
            ethAccount: data.ethereumAddress,
            extrinsic: item.extrinsic?.id,
        },
    })

    return new EventModel({
        id: item.id,
        name: MultiTokensClaimTokensCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensCompleted({
            account: data.destination,
            ethAccount: data.ethereumAddress,
        }),
    })
}
