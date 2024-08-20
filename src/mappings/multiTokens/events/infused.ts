import { Sns } from '../../../common/sns'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensInfused, Token } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.infused.v1010.is(event)) {
        return events.multiTokens.infused.v1010.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.infused.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    token?: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensInfused.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensInfused({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            amount: data.amount,
            accountId: data.accountId,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token,
            from: new Account({ id: data.accountId }),
            event,
        }),
    ]
}

export async function infused(ctx: CommonContext, block: BlockHeader, item: EventItem, skipSave: boolean) {
    const data = getEventData(ctx, item)
    if (skipSave) return undefined

    const token = await ctx.store.findOneByOrFail(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })
    token.infusion += data.amount

    await ctx.store.save(token)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                amount: data.amount,
                accountId: data.accountId,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, token)
}
