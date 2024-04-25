/* eslint-disable no-restricted-syntax */
import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Collection,
    Event as EventModel,
    Extrinsic,
    MarketPolicy,
    MultiTokensCollectionMutated,
    Royalty,
    RoyaltyCurrency,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { DefaultRoyalty } from '../../../types/generated/v500'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.collectionMutated.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionMutated.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.collectionMutated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: null,
        data: new MultiTokensCollectionMutated({
            collectionId: data.collectionId,
        }),
    })
}

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

export async function collectionMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionMutated] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return getEvent(item, data)
    }

    if (data.mutation.owner) {
        collection.owner = await getOrCreateAccount(ctx, data.mutation.owner)
    }

    if (data.mutation.royalty.__kind === 'SomeMutation') {
        if (data.mutation.royalty.value === undefined) {
            collection.marketPolicy = null
        } else {
            collection.marketPolicy = await getMarket(ctx, data.mutation.royalty.value)
        }
    }

    if (data.mutation.explicitRoyaltyCurrencies !== undefined) {
        const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
            where: { collection: { id: collection.id } },
        })

        if (data.mutation.explicitRoyaltyCurrencies.length === 0) {
            ctx.store.remove(royaltyCurrencies)
        } else {
            for (const currency of data.mutation.explicitRoyaltyCurrencies) {
                const rc = royaltyCurrencies.find(
                    (_rc) => _rc.id === `${collection.id}-${currency.collectionId}-${currency.tokenId}`
                )
                if (rc) {
                    royaltyCurrencies.splice(royaltyCurrencies.indexOf(rc), 1)
                    // eslint-disable-next-line no-continue
                    continue
                }

                // eslint-disable-next-line no-await-in-loop
                const token = await ctx.store.findOne<Token>(Token, {
                    where: { id: `${currency.collectionId}-${currency.tokenId}` },
                })

                if (!token) {
                    throwError(
                        `[CollectionMutated] We have not found token ${currency.collectionId}-${currency.tokenId}`,
                        'fatal'
                    )
                } else {
                    const royaltyCurrency = new RoyaltyCurrency({
                        id: `${collection.id}-${token.id}`,
                        collection,
                        token,
                    })

                    // eslint-disable-next-line no-await-in-loop
                    await ctx.store.insert(royaltyCurrency)
                }
            }
            ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)

    return getEvent(item, data)
}
