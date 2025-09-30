import {
    Collection,
    MintPolicy,
    TransferPolicy,
    Token,
    RoyaltyCurrency,
    CollectionSocials,
    CollectionFlags,
    CollectionStats,
    MarketPolicy,
    RoyaltyBeneficiary,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { SnsEvent } from '~/util/sns'
import { matrixUtility } from '~/type/calls'
import { DefaultRoyalty as DefaultRoyalty1020 } from '~/type/matrixV1020'
import { DefaultRoyalty as DefaultRoyalty500 } from '~/type/matrixV500'
import { EventHandlerResult } from '~/processor.handler'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'

type DefaultRoyalty = DefaultRoyalty500 | DefaultRoyalty1020

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const beneficiaries =
        'beneficiaries' in royalty
            ? royalty.beneficiaries
            : [
                  {
                      beneficiary: royalty.beneficiary,
                      percentage: royalty.percentage,
                  },
              ]

    const beneficiariesWithAccount = await Promise.all(
        beneficiaries.map(async (v) => {
            return new RoyaltyBeneficiary({
                accountId: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new MarketPolicy({
        beneficiaries: beneficiariesWithAccount,
    })
}

export async function collectionCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
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

        return [mappings.multiTokens.events.collectionCreatedEventModel(item, eventData), undefined]
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

    const royalty = callData.descriptor.policy.market.royalty
    const market = royalty ? await getMarket(ctx, royalty) : null

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
        marketPolicy: market,
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
        tokenGroups: [],
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(collection)

    await dispatchComputeAccountStats(account.id)

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

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: eventData.collectionId,
            owner: eventData.owner,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [mappings.multiTokens.events.collectionCreatedEventModel(item, eventData), snsEvent]
}
