import { throwFatalError } from '~/util/errors'
import {
    AccountTokenEvent,
    Attribute,
    Event as EventModel,
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
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { In } from 'typeorm'

export async function tokenDestroyed(
    ctx: CommonContext,
    _block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenDestroyed(item)

    if (skipSave) return mappings.multiTokens.events.tokenDestroyedEventModel(item, data)

    const token = await ctx.store.findOneBy<Token>(Token, {
        id: `${data.collectionId}-${data.tokenId}`,
    })

    if (!token) {
        throwFatalError(`[TokenDestroyed] We have not found token ${data.collectionId}-${data.tokenId}.`)
        return mappings.multiTokens.events.tokenDestroyedEventModel(item, data)
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
        ctx.log.info(`[TokenDestroyed] Clearing pool members for token ${token.id}`)
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

        ctx.log.info(
            `[TokenDestroyed] Found ${tokenMembers.length} pool members for token accounts ${tokenAccounts.map((t) => t.id).join(', ')}`
        )

        for (const member of tokenMembers) {
            ctx.log.info(`[TokenDestroyed] Clearing pool member ${member.id}`)
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

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                caller: data.caller,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    QueueUtils.dispatchComputeStats(data.collectionId.toString())
    QueueUtils.dispatchComputeTraits(data.collectionId.toString())

    return mappings.multiTokens.events.tokenDestroyedEventModel(item, data)
}
