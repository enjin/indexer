import { hexToString } from '@polkadot/util'
import { throwFatalError } from '../../../utils/errors'
import {
    Attribute,
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MintPolicy,
    MultiTokensAttributeSet,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queues'
import { safeString } from '../../../utils/tools'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { AttributeSet } from './attribute-set.type'
import { multiTokens } from '../../../types/events'
import { attributeSet } from './attribute-set.map'

interface AttributeSetProcessData {
    attribute?: Attribute
    collection: Collection
    token?: Token
    key: string
    value: string
    attributeId: string
}

export class AttributeSetProcessor extends EventProcessor<AttributeSet> {
    constructor() {
        super(multiTokens.attributeSet.name)
    }

    protected decodeEventItem(item: EventItem): AttributeSet {
        return attributeSet(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: AttributeSet): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: AttributeSet
    ): Promise<AttributeSetProcessData | undefined> {
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
                createdAt: new Date(),
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
                return undefined
            }
        }

        return { attribute, collection, token, key, value, attributeId }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: AttributeSet,
        processData: AttributeSetProcessData
    ): Promise<AttributeSetProcessData> {
        const { attribute, collection, token, key, value, attributeId } = processData
        const timestamp = new Date(block.timestamp ?? 0)

        if (attribute) {
            attribute.value = value
            attribute.updatedAt = timestamp

            if (token) {
                if (!token.metadata) {
                    token.metadata = new Metadata()
                }
                await ctx.store.save(token)
            } else {
                if (!collection.metadata) {
                    collection.metadata = new Metadata()
                }
                await ctx.store.save(collection)
            }

            await ctx.store.save(attribute)
        } else {
            const newAttribute = new Attribute({
                id: attributeId,
                key,
                value,
                deposit: 0n, // TODO: Change fixed for now
                collection: token ? undefined : collection,
                token,
                createdAt: timestamp,
                updatedAt: timestamp,
            })

            await ctx.store.insert(newAttribute)
            processData.attribute = newAttribute

            if (token) {
                if (!token.metadata) {
                    token.metadata = new Metadata()
                }
                token.attributeCount += 1
                await ctx.store.save(token)
            } else {
                if (!collection.metadata) {
                    collection.metadata = new Metadata()
                }
                collection.attributeCount += 1
                await ctx.store.save(collection)
            }
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: AttributeSet,
        result: AttributeSetProcessData
    ): Promise<void> {
        if (result.token) {
            QueueUtils.dispatchComputeMetadata(result.token.id, 'token')
            QueueUtils.dispatchComputeTraits(result.token.id)
        } else {
            QueueUtils.dispatchComputeMetadata(result.collection.id, 'collection', false, true)
        }
    }

    protected getNotificationBody(item: EventItem, data: AttributeSet, result: AttributeSetProcessData): any {
        return {
            collectionId: data.collectionId.toString(),
            tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
            key: result.key,
            value: result.value,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(item: EventItem, data: AttributeSet, result?: AttributeSetProcessData): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensAttributeSet.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
            data: new MultiTokensAttributeSet({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                key: safeString(data.key),
                value: safeString(hexToString(data.value)),
            }),
        })
    }
}
