import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensFrozenEvent } from '../../../types/generated/events'
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
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { FreezeType_CollectionAccount, FreezeType_Token, FreezeType_TokenAccount } from '../../../types/generated/efinityV3012'
import { FreezeState as FreezeStateEvent } from '../../../types/generated/v500'

interface EventData {
    collectionId: bigint
    freezeType: string
    freezeState: FreezeStateEvent | undefined
    tokenId: bigint | undefined
    collectionAccount: Uint8Array | undefined
    tokenAccount: Uint8Array | undefined
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensFrozenEvent(ctx, event)

    if (data.isEfinityV3014) {
        const { collectionId, freezeType } = data.asEfinityV3014

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
                collectionAccount: (freezeType as FreezeType_CollectionAccount).value,
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
            tokenId: (freezeType as FreezeType_TokenAccount).tokenId,
            tokenAccount: (freezeType as FreezeType_TokenAccount).accountId,
            collectionAccount: undefined,
        }
    }

    if (data.isV500) {
        const { collectionId, freezeType } = data.asV500

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
                collectionAccount: (freezeType as FreezeType_CollectionAccount).value,
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
            tokenId: (freezeType as FreezeType_TokenAccount).tokenId,
            tokenAccount: (freezeType as FreezeType_TokenAccount).accountId,
            collectionAccount: undefined,
        }
    }

    if (data.isEfinityV2) {
        const { collectionId, freezeType } = data.asEfinityV2

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
                collectionAccount: (freezeType as FreezeType_CollectionAccount).value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                tokenId: (freezeType as FreezeType_Token).value,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            freezeState: undefined,
            tokenId: (freezeType as FreezeType_TokenAccount).tokenId,
            tokenAccount: (freezeType as FreezeType_TokenAccount).accountId,
            collectionAccount: undefined,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function frozen(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Frozen', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (data.tokenAccount) {
        const address = u8aToHex(data.tokenAccount)
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        tokenAccount.isFrozen = true
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = u8aToHex(data.collectionAccount)
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        collectionAccount.isFrozen = true
        collectionAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId) {
        const token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        token.isFrozen = true

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

        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        collection.transferPolicy = new TransferPolicy({ isFrozen: true })
        await ctx.store.save(collection)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensFrozen(),
    })
}
