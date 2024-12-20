import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Event as EventModel, Extrinsic, MultiTokensClaimTokensInitiated, MultiTokensClaims } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.claimTokensInitiated.matrixEnjinV1000.is(event)) {
        return events.multiTokens.claimTokensInitiated.matrixEnjinV1000.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.claimTokensInitiated.name)
}

export async function claimTokensInitiated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    const account = await getOrCreateAccount(ctx, data.accountId)
    const claimExists = await ctx.store.findOne(MultiTokensClaims, {
        where: { id: `${data.accountId}-${data.ethereumAddress}` },
    })

    if (!claimExists) {
        const claim = new MultiTokensClaims({
            id: `${data.accountId}-${data.ethereumAddress}`,
            account,
            ethAccount: data.ethereumAddress,
            completed: false,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(claim)

        if (item.extrinsic) {
            Sns.getInstance().send({
                id: item.id,
                name: item.name,
                body: {
                    account: data.accountId,
                    ethAccount: data.ethereumAddress,
                    extrinsic: item.extrinsic.id,
                },
            })
        }
    }

    return new EventModel({
        id: item.id,
        name: MultiTokensClaimTokensInitiated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensInitiated({
            account: data.accountId,
            ethAccount: data.ethereumAddress,
        }),
    })
}
