import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensCompleted } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { Sns } from '../../common/sns'

export async function claimTokensCompleted(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    const claim = await ctx.store.findOneByOrFail(MultiTokensClaims, { id: `${data.destination}-${data.ethereumAddress}` })

    claim.completed = true

    await ctx.store.save(claim)

    Sns.getInstance().send({
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
