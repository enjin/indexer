import { throwFatalError } from '../../../utils/errors'
import {
    Attribute,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    MultiTokensTokenDestroyed,
    RoyaltyCurrency,
    Token,
    TokenRarity,
    TraitToken,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { QueueUtils } from '../../../queues'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { TokenDestroyed } from './token-destroyed.type'
import { multiTokens } from '../../../types/events'
import { tokenDestroyed } from './token-destroyed.map'

interface TokenDestroyedProcessData {
    token: Token
    listingSales: ListingSale[]
    listingStatus: ListingStatus[]
    listingsMake: Listing[]
    listingTake: Listing[]
    royaltyCurrencies: RoyaltyCurrency[]
    traitTokens: TraitToken[]
    tokenRarity: TokenRarity[]
    attributes: Attribute[]
}

export class TokenDestroyedProcessor extends EventProcessor<TokenDestroyed> {
    constructor() {
        super(multiTokens.tokenDestroyed.name)
    }

    protected decodeEventItem(item: EventItem): TokenDestroyed {
        return tokenDestroyed(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: TokenDestroyed): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: TokenDestroyed
    ): Promise<TokenDestroyedProcessData | undefined> {
        const token = await ctx.store.findOneBy<Token>(Token, {
            id: `${data.collectionId}-${data.tokenId}`,
        })

        if (!token) {
            throwFatalError(`[TokenDestroyed] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return undefined
        }

        const [
            listingSales,
            listingStatus,
            listingsMake,
            listingTake,
            royaltyCurrencies,
            traitTokens,
            tokenRarity,
            attributes,
        ] = await Promise.all([
            ctx.store.find(ListingSale, {
                where: [
                    {
                        listing: {
                            makeAssetId: {
                                id: token.id,
                            },
                        },
                    },
                    {
                        listing: {
                            takeAssetId: {
                                id: token.id,
                            },
                        },
                    },
                ],
            }),
            ctx.store.find(ListingStatus, {
                where: [
                    {
                        listing: {
                            makeAssetId: {
                                id: token.id,
                            },
                        },
                    },
                    {
                        listing: {
                            takeAssetId: {
                                id: token.id,
                            },
                        },
                    },
                ],
            }),
            ctx.store.find(Listing, {
                where: {
                    makeAssetId: {
                        id: token.id,
                    },
                },
            }),
            ctx.store.find(Listing, {
                where: {
                    takeAssetId: {
                        id: token.id,
                    },
                },
            }),
            ctx.store.find(RoyaltyCurrency, {
                where: {
                    token: {
                        id: token.id,
                    },
                },
            }),
            ctx.store.find(TraitToken, {
                where: {
                    token: {
                        id: token.id,
                    },
                },
            }),
            ctx.store.find(TokenRarity, {
                where: {
                    token: {
                        id: token.id,
                    },
                },
            }),
            ctx.store.find(Attribute, {
                where: {
                    token: {
                        id: token.id,
                    },
                },
            }),
        ])

        return {
            token,
            listingSales,
            listingStatus,
            listingsMake,
            listingTake,
            royaltyCurrencies,
            traitTokens,
            tokenRarity,
            attributes,
        }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: TokenDestroyed,
        processData: TokenDestroyedProcessData
    ): Promise<TokenDestroyedProcessData> {
        const {
            token,
            listingSales,
            listingStatus,
            listingsMake,
            listingTake,
            royaltyCurrencies,
            traitTokens,
            tokenRarity,
            attributes,
        } = processData

        token.bestListing = null
        token.recentListing = null
        token.lastSale = null

        await ctx.store.save(token)

        await Promise.all([
            ctx.store.remove(listingSales),
            ctx.store.remove(listingStatus),
            ctx.store.remove(listingsMake),
            ctx.store.remove(listingTake),
            ctx.store.remove(royaltyCurrencies),
            ctx.store.remove(traitTokens),
            ctx.store.remove(tokenRarity),
            ctx.store.remove(attributes),
        ])

        await ctx.store.remove(token)

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: TokenDestroyed,
        result: TokenDestroyedProcessData
    ): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
        QueueUtils.dispatchComputeTraits(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: TokenDestroyed, result: TokenDestroyedProcessData): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            caller: data.caller,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(item: EventItem, data: TokenDestroyed, result?: TokenDestroyedProcessData): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensTokenDestroyed.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            data: new MultiTokensTokenDestroyed({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                caller: data.caller,
            }),
        })
    }
}
