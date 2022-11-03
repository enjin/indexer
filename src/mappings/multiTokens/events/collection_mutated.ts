import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionMutatedEvent } from '../../../types/generated/events'
import { Collection, MarketPolicy, Royalty, RoyaltyCurrency, Token } from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { AssetId, DefaultRoyalty } from '../../../types/generated/efinityV3000'
import { ChainContext } from '../../../types/generated/support'


interface EventData {
    collectionId: bigint
    owner: Uint8Array | undefined
    royalty: DefaultRoyalty | undefined
    explicitRoyaltyCurrencies: AssetId[] | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionMutatedEvent(ctx)
    console.log(`Block: ${ctx.block.height}, event: ${ctx.event.name}`)

    if (event.isEfinityV2) {
        const { collectionId, mutation } = event.asEfinityV2
        return {
            collectionId: collectionId,
            owner: mutation.owner,
            royalty: undefined,
            explicitRoyaltyCurrencies: undefined,
        }
    } else if (event.isEfinityV3000) {
        const { collectionId, mutation } = event.asEfinityV3000
        return {
            collectionId: collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    } else if (event.isV6) {
        const { collectionId, mutation } = event.asV6
        return {
            collectionId: collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    } else if (event.isV5) {
        const { collectionId, mutation } = event.asV5
        return {
            collectionId: collectionId,
            owner: mutation.owner,
            royalty: undefined,
            explicitRoyaltyCurrencies: undefined,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getMarket(royalty: DefaultRoyalty, ctx: ChainContext): Promise<MarketPolicy> {
    const address = encodeId(royalty.beneficiary)
    const account = await getOrCreateAccount((ctx as CommonHandlerContext), address)

    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        })
    })
}

export async function handleCollectionMutated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
        relations: {
            owner: true
        }
    })

    if (data.owner) {
        collection.owner = await getOrCreateAccount(ctx, encodeId(data.owner))
    }

    if (data.royalty) {
        collection.marketPolicy = await getMarket(data.royalty, ctx)
    }

    if (data.explicitRoyaltyCurrencies !== undefined) {
        const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
            where: { collection: { id: collection.id }},
        })

        if (data.explicitRoyaltyCurrencies.length === 0) {
            await ctx.store.remove(royaltyCurrencies)
        } else {
            for (const currency of data.explicitRoyaltyCurrencies) {
                const rc = royaltyCurrencies.find((rc) => rc.id === `${collection.id}-${currency.collectionId}-${currency.tokenId}`)
                if (rc) {
                    royaltyCurrencies.splice(royaltyCurrencies.indexOf(rc), 1)
                    continue
                }

                const token = await ctx.store.findOneOrFail<Token>(Token, {
                    where: { id: `${currency.collectionId}-${currency.tokenId}` },
                })

                const royaltyCurrency = new RoyaltyCurrency({
                    id: `${collection.id}-${token.id}`,
                    collection: collection,
                    token: token,
                })

                await ctx.store.insert(royaltyCurrency)
            }
            await ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)
}
