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
import { DefaultRoyalty as DefaultRoyalty1032 } from '../../../types/generated/enjinV1032'
import { DefaultRoyalty as DefaultRoyalty1050 } from '../../../types/generated/v1050'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.collectionMutated.v1050.is(event)) {
        return events.multiTokens.collectionMutated.v1050.decode(event)
    }

    if (events.multiTokens.collectionMutated.enjinV100.is(event)) {
        return events.multiTokens.collectionMutated.enjinV100.decode(event)
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

type DefaultRoyalty = DefaultRoyalty1032 | DefaultRoyalty1050

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
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
            return new Royalty({
                beneficiary: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new MarketPolicy({
        royalty: beneficiariesWithAccount[0],
        beneficiaries: beneficiariesWithAccount,
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
            // TODO: This will now be an array
            collection.marketPolicy = null //await getMarket(ctx, data.mutation.royalty.value)
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

                    continue
                }

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

                    await ctx.store.insert(royaltyCurrency)
                }
            }
            ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)

    return getEvent(item, data)
}
