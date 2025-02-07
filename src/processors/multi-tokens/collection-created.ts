import {
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    MarketPolicy,
    MintPolicy,
    Royalty,
    RoyaltyCurrency,
    Token,
    TransferPolicy,
} from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { DefaultRoyalty } from '../../types/generated/matrixV500'

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

export async function collectionCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (!item.call) return undefined
    const eventData = mappings.multiTokens.events.collectionCreated(item)

    if (skipSave) {
        const collection = await ctx.store.findOne(Collection, { where: { id: eventData.collectionId.toString() } })

        if (collection) {
            collection.createdAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(collection)
        }

        return mappings.multiTokens.events.collectionCreatedEventModel(item, eventData)
    }

    let callData = mappings.multiTokens.calls.createCollection(item.call)
    callData = await getCollectionId(ctx, block, eventData.collectionId)

    const account = await getOrCreateAccount(ctx, eventData.owner)
    const collection = new Collection({
        id: eventData.collectionId.toString(),
        collectionId: eventData.collectionId,
        owner: account,
        mintPolicy: new MintPolicy({
            maxTokenCount: callData.maxTokenCount,
            maxTokenSupply: callData.maxTokenSupply,
            forceSingleMint: callData.forceSingleMint,
        }),
        marketPolicy: callData.market,
        transferPolicy: new TransferPolicy({
            isFrozen: false,
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
        burnPolicy: null,
        attributePolicy: null,
        attributeCount: 0,
        totalDeposit: 0n, // TODO
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(collection)

    const royaltyPromises = callData.explicitRoyaltyCurrencies
        .map((currency: any) => {
            const tokenId = `${currency.collectionId.toString()}-${currency.tokenId.toString()}`
            return new RoyaltyCurrency({
                id: `${collection.id}-${tokenId}`,
                collection,
                token: new Token({ id: tokenId }),
            })
        })
        .map((rc: any) => ctx.store.save(rc))

    await Promise.all(royaltyPromises)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: eventData.collectionId,
                owner: eventData.owner,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.collectionCreatedEventModel(item, eventData)
}
