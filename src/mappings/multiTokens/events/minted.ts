import { UnsupportedEventError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensMinted,
    Token,
    TokenAccount,
} from '../../../model'
import { isNonFungible } from '../utils/helpers'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { computeTraits } from '../../../jobs/compute-traits'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'
import { processMetadata } from '../../../jobs/process-metadata'

function getEventData(event: EventItem) {
    if (events.multiTokens.minted.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, issuer, recipient, amount } = events.multiTokens.minted.matrixEnjinV603.decode(event)
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, recipient, amount }
        }
        return {
            collectionId,
            tokenId,
            issuer: '0x0000000000000000000000000000000000000000000000000000000000000000',
            recipient,
            amount,
        }
    }

    throw new UnsupportedEventError(events.multiTokens.minted.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    token?: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensMinted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensMinted({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            issuer: data.issuer,
            recipient: data.recipient,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token,
            from: new Account({ id: data.issuer }),
            to: new Account({ id: data.recipient }),
            event,
        }),
    ]
}

export async function minted(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    const promises: Promise<any>[] = []

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (data.amount === 0n) {
        return undefined
    }

    if (skipSave) {
        await Promise.all([getOrCreateAccount(ctx, data.recipient), getOrCreateAccount(ctx, data.issuer)])
        return getEvent(item, data, token)
    }

    if (!token) {
        throwError(`[Minted] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data, token)
    }

    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    promises.push(ctx.store.save(token))

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${data.recipient}-${data.collectionId}-${data.tokenId}` },
    })

    if (!tokenAccount) {
        throwError(`[Minted] We have not found token account ${data.recipient}-${data.collectionId}-${data.tokenId}.`, 'fatal')

        await Promise.all(promises)
        return getEvent(item, data, token)
    }

    tokenAccount.balance += data.amount
    tokenAccount.totalBalance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
    promises.push(ctx.store.save(tokenAccount))

    await Promise.all(promises)

    processMetadata(token.id, 'token')
    computeTraits(data.collectionId.toString())
    syncCollectionStats(data.collectionId.toString())

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                issuer: data.issuer,
                recipient: data.recipient,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
                hash: item.extrinsic.hash,
            },
        })
    }

    return getEvent(item, data, token)
}
