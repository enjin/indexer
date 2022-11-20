/* eslint-disable no-restricted-syntax */
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionMutatedEvent } from '../../../types/generated/events'
import { Collection, MarketPolicy, Royalty, RoyaltyCurrency, Token } from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { AssetId, DefaultRoyalty } from '../../../types/generated/efinityV3000'
import { ChainContext, Option } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    owner: Uint8Array | undefined
    royalty: Option<DefaultRoyalty | undefined>
    explicitRoyaltyCurrencies: AssetId[] | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionMutatedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, mutation } = event.asEfinityV2
        return {
            collectionId,
            owner: mutation.owner,
            royalty: { __kind: 'None' },
            explicitRoyaltyCurrencies: undefined,
        }
    }
    if (event.isEfinityV3000) {
        const { collectionId, mutation } = event.asEfinityV3000
        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }
    if (event.isV6) {
        const { collectionId, mutation } = event.asV6
        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }
    if (event.isV5) {
        const { collectionId, mutation } = event.asV5
        return {
            collectionId,
            owner: mutation.owner,
            royalty: { __kind: 'None' },
            explicitRoyaltyCurrencies: undefined,
        }
    }
    throw new UnknownVersionError(event.constructor.name)
}

async function getMarket(royalty: DefaultRoyalty, ctx: ChainContext): Promise<MarketPolicy> {
    const address = encodeId(royalty.beneficiary)
    const account = await getOrCreateAccount(ctx as CommonHandlerContext, address)

    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function handleCollectionMutated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (data.owner) {
        collection.owner = await getOrCreateAccount(ctx, encodeId(data.owner))
    }

    if (data.royalty.__kind !== 'None') {
        if (data.royalty.value === undefined) {
            collection.marketPolicy = undefined
        } else {
            collection.marketPolicy = await getMarket(data.royalty.value, ctx)
        }
    }

    if (data.explicitRoyaltyCurrencies !== undefined) {
        const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
            where: { collection: { id: collection.id } },
        })

        if (data.explicitRoyaltyCurrencies.length === 0) {
            await ctx.store.remove(royaltyCurrencies)
        } else {
            for (const currency of data.explicitRoyaltyCurrencies) {
                const rc = royaltyCurrencies.find(
                    (_rc) => _rc.id === `${collection.id}-${currency.collectionId}-${currency.tokenId}`
                )
                if (rc) {
                    royaltyCurrencies.splice(royaltyCurrencies.indexOf(rc), 1)
                    // eslint-disable-next-line no-continue
                    continue
                }

                // eslint-disable-next-line no-await-in-loop
                const token = await ctx.store.findOneOrFail<Token>(Token, {
                    where: { id: `${currency.collectionId}-${currency.tokenId}` },
                })

                const royaltyCurrency = new RoyaltyCurrency({
                    id: `${collection.id}-${token.id}`,
                    collection,
                    token,
                })

                // eslint-disable-next-line no-await-in-loop
                await ctx.store.insert(RoyaltyCurrency, royaltyCurrency as any)
            }
            await ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)
}
