import {
    Event as EventModel,
    Collection,
    MintPolicy,
    TransferPolicy,
    Token,
    RoyaltyCurrency,
    CollectionSocials,
    CollectionFlags,
    CollectionStats,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'
import { Sns } from '../../../util/sns'
import { matrixUtility } from '../../../type/calls'

// async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
//     const account = await getOrCreateAccount(ctx, royalty.beneficiary)
//     return new MarketPolicy({
//         royalty: new Royalty({
//             beneficiary: account.id,
//             percentage: royalty.percentage,
//         }),
//     })
// }

export async function collectionCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (!item.call) return undefined
    const eventData = mappings.multiTokens.events.collectionCreated(item)

    if (skipSave) {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: eventData.collectionId.toString() },
        })

        if (collection) {
            collection.createdAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(collection)
        }

        return mappings.multiTokens.events.collectionCreatedEventModel(item, eventData)
    }

    // TODO: Refactor this later
    let callData = undefined
    if (item.call.name !== matrixUtility.batch.name) {
        callData = mappings.multiTokens.utils.anyCreateCollection(item.call)
    }
    if (callData === undefined || !('descriptor' in callData)) {
        callData = await mappings.multiTokens.utils.getCollectionAsCall(item.call, eventData.collectionId)
    }

    const forceSingleMint =
        'forceSingleMint' in callData.descriptor.policy.mint
            ? callData.descriptor.policy.mint.forceSingleMint
            : callData.descriptor.policy.mint.forceCollapsingSupply

    const account = await getOrCreateAccount(ctx, eventData.owner)
    const collection = new Collection({
        id: eventData.collectionId.toString(),
        collectionId: eventData.collectionId,
        owner: account,
        mintPolicy: new MintPolicy({
            maxTokenCount: callData.descriptor.policy.mint.maxTokenCount,
            maxTokenSupply: callData.descriptor.policy.mint.maxTokenSupply,
            forceSingleMint: forceSingleMint,
        }),
        // TODO: Fix this
        // marketPolicy: callData.descriptor.policy.market,
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

    const royaltyPromises = callData.descriptor.explicitRoyaltyCurrencies
        .map((currency: { collectionId: bigint; tokenId: bigint }) => {
            const tokenId = `${currency.collectionId.toString()}-${currency.tokenId.toString()}`
            return new RoyaltyCurrency({
                id: `${collection.id}-${tokenId}`,
                collection,
                token: new Token({ id: tokenId }),
            })
        })
        .map((rc: RoyaltyCurrency) => ctx.store.save(rc))

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
