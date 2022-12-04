/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionMutatedEvent } from '../../../types/generated/events'
import { Collection, MarketPolicy, Royalty, RoyaltyCurrency, Token } from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { AssetId, DefaultRoyalty } from '../../../types/generated/efinityV3000'
import { ChainContext, Event, Option } from '../../../types/generated/support'
import { Context, getAccount } from '../../../processor'

interface EventData {
    collectionId: bigint
    owner: Uint8Array | undefined
    royalty: Option<DefaultRoyalty | undefined>
    explicitRoyaltyCurrencies: AssetId[] | undefined
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensCollectionMutatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, mutation } = data.asEfinityV2
        return {
            collectionId,
            owner: mutation.owner,
            royalty: { __kind: 'None' },
            explicitRoyaltyCurrencies: undefined,
        }
    }
    if (data.isEfinityV3000) {
        const { collectionId, mutation } = data.asEfinityV3000
        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }
    if (data.isV6) {
        const { collectionId, mutation } = data.asV6
        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }
    if (data.isV5) {
        const { collectionId, mutation } = data.asV5
        return {
            collectionId,
            owner: mutation.owner,
            royalty: { __kind: 'None' },
            explicitRoyaltyCurrencies: undefined,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getMarket(ctx: Context, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const account = await getAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function collectionMutated(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionMutated', { event: { args: true; extrinsic: true; call: true } }>
) {
    const data = getEventData(ctx, item.event)
    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (data.owner) {
        collection.owner = await getAccount(ctx, data.owner)
    }

    if (data.royalty.__kind !== 'None') {
        if (data.royalty.value === undefined) {
            collection.marketPolicy = undefined
        } else {
            collection.marketPolicy = await getMarket(ctx, data.royalty.value)
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
                await ctx.store.insert(royaltyCurrency)
            }
            await ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)
}
