import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/data-selection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeSetEvent } from '../../../types/generated/events'
import {
    Attribute,
    Collection,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MintPolicy,
    MultiTokensAttributeSet,
    Token,
} from '../../../model'
import { getMetadata } from '../../util/metadata'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'
import { safeString } from '../../../common/tools'
import { computeTraits } from '../../../jobs/compute-traits'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
    value: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensAttributeSetEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, key, value } = data.asEfinityV2
        return { collectionId, tokenId, key, value }
    }
    throw new UnknownVersionError(data.constructor.name)
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function attributeSet(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.AttributeSet', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    let collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    if (!collection) {
        collection = new Collection({
            id: data.collectionId.toString(),
            collectionId: data.collectionId,
            owner: await getOrCreateAccount(ctx, new Uint8Array(32).fill(0)),
            mintPolicy: new MintPolicy({
                forceSingleMint: false,
            }),
            stats: new CollectionStats({
                lastSale: null,
                floorPrice: null,
                highestSale: null,
                tokenCount: 0,
                salesCount: 0,
                supply: 0n,
                marketCap: 0n,
                volume: 0n,
            }),
            attributeCount: 0,
            totalDeposit: 0n,
            createdAt: new Date(block.timestamp),
        })
        await ctx.store.save(collection)
    }

    let token = null
    if (data.tokenId) {
        token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })
    }

    const key = safeString(Buffer.from(data.key).toString())
    const value = safeString(Buffer.from(data.value).toString())
    const id = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`

    let attribute = await ctx.store.findOne<Attribute>(Attribute, {
        where: { id: attributeId },
    })

    if (attribute) {
        attribute.value = value
        attribute.updatedAt = new Date(block.timestamp)
        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.metadata = await getMetadata(token.metadata, attribute)
            await ctx.store.save(token)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.metadata = await getMetadata(collection.metadata, attribute)
            await ctx.store.save(collection)
        }
        await ctx.store.save(attribute)
    } else {
        attribute = new Attribute({
            id: attributeId,
            key,
            value,
            deposit: 0n, // TODO: Change fixed for now
            collection,
            token,
            createdAt: new Date(block.timestamp),
            updatedAt: new Date(block.timestamp),
        })

        await ctx.store.insert(Attribute, attribute as any)

        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.metadata = await getMetadata(token.metadata, attribute)
            token.attributeCount += 1
            await ctx.store.save(token)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.metadata = await getMetadata(collection.metadata, attribute)
            collection.attributeCount += 1
            await ctx.store.save(collection)
        }
    }
    if (token && token.metadata?.attributes) {
        computeTraits(collection.id)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeSet({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key,
            value,
        }),
    })
}
