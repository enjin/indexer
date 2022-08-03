import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensFrozenEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount, Token, TokenAccount, TransferPolicy } from '../../../model'
import { encodeId } from '../../../common/tools'
import { FreezeType_CollectionAccount, FreezeType_Token, FreezeType_TokenAccount } from '../../../types/generated/v2'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    freezeType: string
    tokenId: bigint | undefined
    collectionAccount: Uint8Array | undefined
    tokenAccount: Uint8Array | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensFrozenEvent(ctx)

    if (event.isV5) {
        const { collectionId, freezeType } = event.asV5

        if (freezeType.__kind == 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind == 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                collectionAccount: (freezeType as FreezeType_CollectionAccount).value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind == 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: (freezeType as FreezeType_Token).value,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            tokenId: (freezeType as FreezeType_TokenAccount).tokenId,
            tokenAccount: (freezeType as FreezeType_TokenAccount).accountId,
            collectionAccount: undefined,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleFrozen(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    if (data.tokenAccount) {
        const address = encodeId(data.tokenAccount)
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
            relations: {
                account: true,
                collection: true,
                token: true,
            },
        })

        tokenAccount.isFrozen = true
        tokenAccount.updatedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = encodeId(data.collectionAccount)
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
            relations: {
                account: true,
                collection: true,
            },
        })

        collectionAccount.isFrozen = true
        collectionAccount.updatedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId) {
        const token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: {
                collection: true,
            },
        })

        token.isFrozen = true
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
            relations: {
                owner: true,
            },
        })

        collection.transferPolicy = new TransferPolicy({ isFrozen: true })
        await ctx.store.save(collection)
    }
}
