import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensCompleted } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.claimTokensCompleted.matrixEnjinV1000.is(event)) {
        return events.multiTokens.claimTokensCompleted.matrixEnjinV1000.decode(event)
    }
    throw new UnknownVersionError(events.multiTokens.claimTokensCompleted.name)
}

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
        },
    })

    return new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensCompleted({
            account: data.destination,
            ethAccount: data.ethereumAddress,
        }),
    })
}
