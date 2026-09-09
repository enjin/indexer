import {
    AccountTokenEvent,
    Attribute,
    Bid,
    CounterOffer,
    Listing,
    ListingSale,
    ListingStatus,
    PoolMember,
    RoyaltyCurrency,
    Token,
    TokenAccount,
    TokenGroupToken,
    TokenLoan,
    TokenRarity,
    TraitToken,
    UserInfusion,
    WhitelistedAccount,
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
    const event = mappings.multiTokens.events.tokenDestroyedEventModel(item, data)

    if (skipSave) return [event, undefined]

    const token = await ctx.store.findOneBy<Token>(Token, { id: `${data.collectionId}-${data.tokenId}` })
    if (!token) {
        ctx.log.warn(`[TokenDestroyed] Token ${data.collectionId}-${data.tokenId} was already absent`)
        return [event, tokenDestroyedSnsEvent(item, data)]
    }

    token.bestListing = null
    token.bestListingPrice = null
    token.recentListing = null
    token.lastSale = null
    await ctx.store.save(token)

    const loan = await ctx.store.findOneBy(TokenLoan, { id: token.id })
    if (loan) await ctx.store.remove(loan)

    const [
        accountTokenEvents,
        tokenAccounts,
        listingsMake,
        listingsTake,
        royaltyCurrencies,
        traitTokens,
        tokenRarity,
        attributes,
        userInfusions,
        tokenGroupTokens,
    ] = await Promise.all([
        ctx.store.find(AccountTokenEvent, { where: { token: { id: token.id } } }),
        ctx.store.find(TokenAccount, {
            where: { token: { id: token.id } },
            relations: { account: true },
        }),
        ctx.store.find(Listing, {
            where: { makeAssetId: { id: token.id } },
            relations: {
                seller: true,
                makeAssetId: { collection: true },
                takeAssetId: { collection: true },
            },
        }),
        ctx.store.find(Listing, {
            where: { takeAssetId: { id: token.id } },
            relations: {
                seller: true,
                makeAssetId: { collection: true },
                takeAssetId: { collection: true },
            },
        }),
        ctx.store.find(RoyaltyCurrency, { where: { token: { id: token.id } } }),
        ctx.store.find(TraitToken, { where: { token: { id: token.id } } }),
        ctx.store.find(TokenRarity, { where: { token: { id: token.id } } }),
        ctx.store.find(Attribute, { where: { token: { id: token.id } } }),
        ctx.store.find(UserInfusion, { where: { token: { id: token.id } } }),
        ctx.store.find(TokenGroupToken, { where: { token: { id: token.id } } }),
    ])

    const listings = Array.from(
        new Map([...listingsMake, ...listingsTake].map((listing) => [listing.id, listing])).values()
    )
    const listingIds = listings.map((listing) => listing.id)
    const [bids, listingSales, listingStatus, counterOffers, whitelistedAccounts] =
        listingIds.length === 0
            ? [[], [], [], [], []]
            : await Promise.all([
                  ctx.store.find(Bid, { where: { listing: { id: In(listingIds) } }, relations: { bidder: true } }),
                  ctx.store.find(ListingSale, {
                      where: { listing: { id: In(listingIds) } },
                      relations: { buyer: true },
                  }),
                  ctx.store.find(ListingStatus, { where: { listing: { id: In(listingIds) } } }),
                  ctx.store.find(CounterOffer, {
                      where: { listing: { id: In(listingIds) } },
                      relations: { account: true, lastAction: true },
                  }),
                  ctx.store.find(WhitelistedAccount, {
                      where: { listing: { id: In(listingIds) } },
                      relations: { account: true },
                  }),
              ])

    const saleIds = listingSales.map((sale) => sale.id)
    const [tokensWithBestListing, tokensWithRecentListing, tokensWithLastSale] = await Promise.all([
        listingIds.length === 0
            ? []
            : ctx.store.find(Token, {
                  where: { bestListing: { id: In(listingIds) } },
                  relations: { bestListing: true },
              }),
        listingIds.length === 0
            ? []
            : ctx.store.find(Token, {
                  where: { recentListing: { id: In(listingIds) } },
                  relations: { recentListing: true },
              }),
        saleIds.length === 0
            ? []
            : ctx.store.find(Token, { where: { lastSale: { id: In(saleIds) } }, relations: { lastSale: true } }),
    ])

    for (const referencedToken of tokensWithBestListing) {
        referencedToken.bestListing = null
        referencedToken.bestListingPrice = null
    }
    for (const referencedToken of tokensWithRecentListing) referencedToken.recentListing = null
    for (const referencedToken of tokensWithLastSale) referencedToken.lastSale = null

    const tokenAccountIds = tokenAccounts.map((tokenAccount) => tokenAccount.id)
    const poolMembers =
        tokenAccountIds.length === 0
            ? []
            : await ctx.store.find(PoolMember, {
                  where: { tokenAccount: { id: In(tokenAccountIds) } },
                  relations: { tokenAccount: true },
              })
    for (const member of poolMembers) member.tokenAccount = null
    for (const accountTokenEvent of accountTokenEvents) accountTokenEvent.token = null

    const referencedTokens = Array.from(
        new Map(
            [...tokensWithBestListing, ...tokensWithRecentListing, ...tokensWithLastSale]
                .filter((referencedToken) => referencedToken.id !== token.id)
                .map((referencedToken) => [referencedToken.id, referencedToken])
        ).values()
    )

    await Promise.all([
        ctx.store.save(accountTokenEvents),
        ctx.store.save(poolMembers),
        ctx.store.save(referencedTokens),
    ])
    await Promise.all([
        ctx.store.remove(bids),
        ctx.store.remove(counterOffers),
        ctx.store.remove(whitelistedAccounts),
        ctx.store.remove(listingSales),
        ctx.store.remove(listingStatus),
    ])
    await ctx.store.remove(listings)
    await Promise.all([
        ctx.store.remove(tokenAccounts),
        ctx.store.remove(userInfusions),
        ctx.store.remove(royaltyCurrencies),
        ctx.store.remove(traitTokens),
        ctx.store.remove(tokenRarity),
        ctx.store.remove(attributes),
        ctx.store.remove(tokenGroupTokens),
    ])
    await ctx.store.remove(token)

    const accountIds = new Set<string>()
    tokenAccounts.forEach((tokenAccount) => accountIds.add(tokenAccount.account.id))
    listings.forEach((listing) => accountIds.add(listing.seller.id))
    bids.forEach((bid) => accountIds.add(bid.bidder.id))
    listingSales.forEach((sale) => accountIds.add(sale.buyer.id))
    counterOffers.forEach((offer) => {
        accountIds.add(offer.account.id)
        if (offer.lastAction) accountIds.add(offer.lastAction.id)
    })
    whitelistedAccounts.forEach((entry) => accountIds.add(entry.account.id))
    await Promise.all(Array.from(accountIds, (accountId) => QueueUtils.dispatchComputeAccountStats(accountId)))

    const affectedTokenIds = new Set<string>()
    listings.forEach((listing) => {
        if (listing.makeAssetId.id !== token.id) affectedTokenIds.add(listing.makeAssetId.id)
        if (listing.takeAssetId.id !== token.id) affectedTokenIds.add(listing.takeAssetId.id)
    })
    await Promise.all(Array.from(affectedTokenIds, (id) => QueueUtils.dispatchComputeTokenBestListing(id)))
    const collectionIds = new Set<string>([data.collectionId.toString()])
    listings.forEach((listing) => {
        collectionIds.add(listing.makeAssetId.collection.id)
        collectionIds.add(listing.takeAssetId.collection.id)
    })
    await Promise.all(Array.from(collectionIds, (id) => QueueUtils.dispatchComputeStats(id)))

    return [event, tokenDestroyedSnsEvent(item, data)]
}

function tokenDestroyedSnsEvent(
    item: EventItem,
    data: { collectionId: bigint; tokenId: bigint; caller?: string }
): SnsEvent {
    return {
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
}
