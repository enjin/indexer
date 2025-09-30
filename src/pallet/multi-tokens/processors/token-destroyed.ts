import { throwFatalError } from '~/util/errors'
import {
    AccountTokenEvent,
    Attribute,
    Listing,
    ListingSale,
    ListingStatus,
    PoolMember,
    RoyaltyCurrency,
    Token,
    TokenAccount,
    TokenRarity,
    TraitToken,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { In } from 'typeorm'
import { EventHandlerResult } from '~/processor.handler'

export async function tokenDestroyed(
    ctx: CommonContext,
    _block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenDestroyed(item)

    if (skipSave) return [mappings.multiTokens.events.tokenDestroyedEventModel(item, data), undefined]

    const token = await ctx.store.findOneBy<Token>(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })

    if (!token) {
        throwFatalError(`[TokenDestroyed] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return [mappings.multiTokens.events.tokenDestroyedEventModel(item, data), undefined]
    }

    token.bestListing = null
    token.recentListing = null
    token.lastSale = null

    await ctx.store.save(token)

    const [
        accountTokenEvents,
        tokenAccounts,
        listingSales,
        listingStatus,
        listingsMake,
        listingTake,
        royaltyCurrencies,
        traitTokens,
        tokenRarity,
        attributes,
    ] = await Promise.all([
        ctx.store.find(AccountTokenEvent, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
        ctx.store.find(TokenAccount, {
            where: {
                token: {
                    id: token.id,
                },
            },
        }),
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

    const events = accountTokenEvents.map((e: AccountTokenEvent): AccountTokenEvent => {
        e.token = null
        return e
    })

    // clear pool members if exists
    if (token.id.toString().startsWith('1')) {
        const tokenMembers = await ctx.store.find(PoolMember, {
            relations: {
                tokenAccount: true,
            },
            where: {
                tokenAccount: {
                    id: In(tokenAccounts.map((t) => t.id)),
                },
            },
        })

        for (const member of tokenMembers) {
            if (member.tokenAccount) {
                member.tokenAccount = null
                await ctx.store.save(member)
            }
        }
    }

    await Promise.all([
        ctx.store.save(events),
        ctx.store.remove(tokenAccounts),
        ctx.store.remove(listingSales),
        ctx.store.remove(listingStatus),
        ctx.store.remove(listingsMake),
        ctx.store.remove(listingTake),
        ctx.store.remove(royaltyCurrencies),
        ctx.store.remove(traitTokens),
        ctx.store.remove(tokenRarity),
        ctx.store.remove(attributes),
        ctx.store.remove(token),
    ])

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            caller: data.caller,
            extrinsic: item.extrinsic?.id,
        },
    }

    await QueueUtils.dispatchComputeStats(data.collectionId.toString())
    await QueueUtils.dispatchComputeTraits(data.collectionId.toString())

    return [mappings.multiTokens.events.tokenDestroyedEventModel(item, data), snsEvent]
}
