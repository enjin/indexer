import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensThawed,
    Token,
    TokenAccount,
    TransferPolicy,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { FreezeType_Token as FreezeTypeToken_v500 } from '../../../types/generated/v500'

function getEventData(event: EventItem) {
    if (events.multiTokens.thawed.matrixEnjinV603.is(event)) {
        const { collectionId, freezeType } = events.multiTokens.thawed.matrixEnjinV603.decode(event)

        if (freezeType.__kind === 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                collectionAccount: freezeType.value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: (freezeType as FreezeTypeToken_v500).tokenId,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            tokenId: freezeType.tokenId,
            tokenAccount: freezeType.accountId,
            collectionAccount: undefined,
        }
    }

    throw new UnknownVersionError(events.multiTokens.thawed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensThawed(),
    })
}

export async function thawed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    if (data.tokenAccount) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${data.tokenAccount}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(
                `[Thawed] We have not found token account ${data.tokenAccount}-${data.collectionId}-${data.tokenId}.`,
                'fatal'
            )
            return getEvent(item, data)
        }

        tokenAccount.isFrozen = false
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = data.collectionAccount
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Thawed] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
            return getEvent(item, data)
        }

        collectionAccount.isFrozen = false
        collectionAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId !== undefined) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwError(`[Thawed] We have not found collection account ${data.collectionId}-${data.tokenId}.`, 'fatal')
            return getEvent(item, data)
        }

        token.isFrozen = false
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Thawed] We have not found collection ${data.collectionId.toString()}.`, 'fatal')
            return getEvent(item, data)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: false })
        await ctx.store.save(collection)
    }

    return getEvent(item, data)
}
