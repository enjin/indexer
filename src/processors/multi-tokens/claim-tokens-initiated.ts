import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensInitiated } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { getOrCreateAccount } from '../../utils/entities'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'

export async function claimTokensInitiated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.claimTokensInitiated(item)
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
            await Sns.getInstance().send({
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
