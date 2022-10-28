import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensThawedEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount, Token, TokenAccount, TransferPolicy } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'
import {
    FreezeType_CollectionAccount,
    FreezeType_Token,
    FreezeType_TokenAccount,
} from '../../../types/generated/v6'

interface EventData {
    collectionId: bigint
    freezeType: string
    tokenId: bigint | undefined
    collectionAccount: Uint8Array | undefined
    tokenAccount: Uint8Array | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensThawedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, freezeType } = event.asEfinityV2

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

export async function handleThawed(ctx: EventHandlerContext) {
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

        tokenAccount.isFrozen = false
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

        collectionAccount.isFrozen = false
        collectionAccount.updatedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId) {
        const token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: {
                collection: true,
            },
        })

        token.isFrozen = false
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
            relations: {
                owner: true,
                floorListing: true,
                tokens: true,
                collectionAccounts: true,
                tokenAccounts: true,
                attributes: true,
            },
        })

        collection.transferPolicy = new TransferPolicy({ isFrozen: false })
        await ctx.store.save(collection)
    }
}
