import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensFrozen,
    Token,
    TokenAccount,
    TransferPolicy,
    FreezeState,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { isTokenFrozen } from './token_created'
import { Sns } from '../../../common/sns'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(event: EventItem) {
    if (events.multiTokens.frozen.matrixEnjinV603.is(event)) {
        const { collectionId, freezeType } = events.multiTokens.frozen.matrixEnjinV603.decode(event)

        if (freezeType.__kind === 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                collectionAccount: freezeType.value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: freezeType.freezeState,
                tokenId: freezeType.tokenId,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            freezeState: undefined,
            tokenId: freezeType.tokenId,
            tokenAccount: freezeType.accountId,
            collectionAccount: undefined,
        }
    }

    throw new UnknownVersionError(events.multiTokens.frozen.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensFrozen.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensFrozen(),
    })
}

export async function frozen(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    if (data.tokenAccount) {
        const address = data.tokenAccount
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(`[Frozen] We have not found collection ${address}-${data.collectionId}-${data.tokenId}`, 'fatal')
            return getEvent(item, data)
        }

        tokenAccount.isFrozen = true
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = data.collectionAccount
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Frozen] We have not found collection ${data.collectionId}-${address}`, 'fatal')
            return getEvent(item, data)
        }

        collectionAccount.isFrozen = true
        collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId !== undefined) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwError(`[Frozen] We have not found collection ${data.collectionId}-${data.tokenId}`, 'fatal')
            return getEvent(item, data)
        }

        switch (data.freezeState?.__kind) {
            case 'Permanent':
                token.freezeState = FreezeState.Permanent
                break
            case 'Temporary':
                token.freezeState = FreezeState.Temporary
                break
            case 'Never':
                token.freezeState = FreezeState.Never
                break
            default:
                token.freezeState = null
                break
        }

        token.isFrozen = isTokenFrozen(token.freezeState)

        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Frozen] We have not found collection ${data.collectionId.toString()}`, 'fatal')
            return getEvent(item, data)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: true })
        await ctx.store.save(collection)
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                kind: data.freezeType,
                address: data.collectionAccount ?? data.tokenAccount,
                collectionId: data.collectionId.toString(),
                tokenId: data.tokenId ?? null,
                token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    syncCollectionStats(data.collectionId.toString())

    return getEvent(item, data)
}
