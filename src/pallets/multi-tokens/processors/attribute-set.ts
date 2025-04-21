import { hexToString } from '@polkadot/util'
import { throwFatalError } from '../../../utils/errors'
import {
    Attribute,
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Metadata,
    MintPolicy,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queues'
import { safeString } from '../../../utils/tools'

export async function attributeSet(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.attributeSet(item)

    if (skipSave) return mappings.multiTokens.events.attributeSetEventModel(item, data)

    const key = safeString(hexToString(data.key))
    const value = safeString(hexToString(data.value))
    const id = data.tokenId !== undefined ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${data.key}`

    let [attribute, collection] = await Promise.all([
        ctx.store.findOne<Attribute>(Attribute, {
            where: { id: attributeId },
        }),
        ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        }),
    ])
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
            flags: new CollectionFlags({
                featured: false,
                hiddenForLegalReasons: false,
            }),
            verifiedAt: null,
            socials: new CollectionSocials({
                discord: null,
                twitter: null,
                instagram: null,
                medium: null,
                tiktok: null,
                website: null,
            }),
            hidden: false,
            attributeCount: 0,
            totalDeposit: 0n,
            createdAt: new Date(block.timestamp ?? 0),
        })
        await ctx.store.save(collection)
    }

    let token: Token | undefined
    if (data.tokenId !== undefined) {
        token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwFatalError(`[AttributeSet] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return mappings.multiTokens.events.attributeSetEventModel(item, data)
        }
    }

    if (attribute) {
        attribute.value = value
        attribute.updatedAt = new Date(block.timestamp ?? 0)
        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            await ctx.store.save(token)
            QueueUtils.dispatchComputeMetadata(token.id, 'token')
        } else {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            await ctx.store.save(collection)
            QueueUtils.dispatchComputeMetadata(collection.id, 'collection', false, true)
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
            createdAt: new Date(block.timestamp ?? 0),
            updatedAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.insert(attribute)

        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.attributeCount += 1
            await ctx.store.save(token)
            QueueUtils.dispatchComputeMetadata(token.id, 'token')
        } else {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.attributeCount += 1
            await ctx.store.save(collection)
            QueueUtils.dispatchComputeMetadata(collection.id, 'collection', false, true)
        }
    }
    if (token) {
        QueueUtils.dispatchComputeTraits(token.id)
    }

    return mappings.multiTokens.events.attributeSetEventModel(item, data)
}
