import { Sns } from '../../../common/sns'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensInfused, Token } from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { u8aToHex } from '@polkadot/util'
import { getTokenId } from './token_created'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.infused.matrixEnjinV1022.is(event)) {
        return events.multiTokens.infused.matrixEnjinV1022.decode(event)
    }

    if (events.multiTokens.infused.matrixEnjinV1012.is(event)) {
        return events.multiTokens.infused.matrixEnjinV1012.decode(event)
    }

    if (events.multiTokens.infused.v1020.is(event)) {
        return events.multiTokens.infused.v1020.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.infused.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    token?: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const accountId =
        typeof data.accountId == 'string'
            ? data.accountId
            : data.accountId.__kind == 'Root'
              ? u8aToHex(new Uint8Array(32).fill(0))
              : data.accountId.value

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
            accountId,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token,
            from: new Account({ id: accountId }),
            event,
        }),
    ]
}

export async function infused(ctx: CommonContext, block: BlockHeader, item: EventItem, skipSave: boolean) {
    const data = getEventData(ctx, item)
    if (skipSave) return undefined

    const storage = await getTokenId(ctx, block, data.collectionId, data.tokenId)
    const token = await ctx.store.findOneByOrFail(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })
    token.infusion = storage.infusion ?? 0n

    await ctx.store.save(token)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                amount: data.amount,
                accountId: data.accountId,
                extrinsic: item.extrinsic.id,
                hash: item.extrinsic.hash,
            },
        })
    }

    return getEvent(item, data, token)
}
