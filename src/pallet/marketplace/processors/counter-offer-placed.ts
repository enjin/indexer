import { Account, AccountTokenEvent, CounterOffer, Event as EventModel, Listing } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount, unwrapSigner } from '~/util/entities'
import { calls } from '~/type'
import Big from 'big.js'
import { rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'
import { CounterOffer as CounterOfferData } from '~/pallet/common/types'

type CounterOfferTerms = {
    buyerPrice: bigint | undefined
    amount: bigint
    sellerPrice: bigint
}

/** Legacy offers (canary 1010/1030) carry `accountId`/`price` only; the missing deposit and seller price default to 1. */
function counterOfferTerms(counterOffer: CounterOfferData): CounterOfferTerms {
    return {
        buyerPrice: counterOffer.price ?? counterOffer.buyerPrice,
        amount: counterOffer.deposit?.amount ?? 1n,
        sellerPrice: counterOffer.sellerPrice ?? 1n,
    }
}

/** A fuel tank `dispatch_and_touch` credits its signer; otherwise the depositor (or legacy account) from the event. */
function offererAddress(item: EventItem, counterOffer: CounterOfferData): string | undefined {
    const extrinsic = item.extrinsic
    if (extrinsic?.call?.name === calls.fuelTanks.dispatchAndTouch.name) return unwrapSigner(extrinsic)
    return counterOffer.deposit?.depositor ?? counterOffer.accountId
}

function blockDate(block: Block): Date {
    return new Date(block.timestamp ?? 0)
}

async function findOfferListing(ctx: CommonContext, listingId: string): Promise<Listing | undefined> {
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            takeAssetId: {
                collection: true,
            },
        },
    })
    return listing?.state.isTypeOf === 'OfferState' ? listing : undefined
}

/** Saves the counter offer and returns whether it is new to the listing. */
async function saveCounterOffer(
    ctx: CommonContext,
    block: Block,
    listing: Listing,
    account: Account,
    terms: CounterOfferTerms
): Promise<boolean> {
    const id = `${listing.id}-${account.id}`
    const existing = await ctx.store.findOneBy<CounterOffer>(CounterOffer, { id })
    const offer = existing ?? new CounterOffer({ id, listing, account })
    offer.buyerPrice = terms.buyerPrice
    offer.amount = terms.amount
    offer.sellerPrice = terms.sellerPrice
    offer.createdAt = blockDate(block)
    offer.lastAction = account
    await ctx.store.save(offer)
    return !existing
}

async function saveListing(ctx: CommonContext, block: Block, listing: Listing, isNewOffer: boolean): Promise<void> {
    listing.updatedAt = blockDate(block)
    listing.state = rebuildOfferState(listing.amount, listing.state, {
        counterOfferDelta: isNewOffer ? 1 : 0,
        isExpired: false,
    })
    await ctx.store.save(listing)
}

function scaleUp(value: bigint, decimals: number): number {
    return Big(value.toString())
        .mul(10 ** decimals)
        .toNumber()
}

function scaleDown(value: bigint, decimals: number): number {
    return Big(value.toString())
        .div(10 ** decimals)
        .toNumber()
}

/** Zero and missing prices are both reported as `undefined`. */
function scaleUpPrice(value: bigint | undefined, decimals: number): number | undefined {
    return value ? scaleUp(value, decimals) : undefined
}

function snsListing(listing: Listing, decimals: number) {
    return {
        id: listing.id,
        price: scaleUp(listing.price, decimals),
        amount: scaleDown(listing.amount, decimals),
        highestPrice: scaleUp(listing.highestPrice, decimals),
        seller: {
            id: listing.seller.id,
        },
        data: listing.data.toJSON(),
        state: listing.state.toJSON(),
        type: listing.type.toString(),
        takeAssetId: listing.takeAssetId.id,
    }
}

function snsEvent(item: EventItem, listing: Listing, account: Account, terms: CounterOfferTerms): SnsEvent | undefined {
    if (!item.extrinsic) return undefined

    const token = listing.takeAssetId
    const decimalCount = token.nativeMetadata?.decimalCount
    const decimals = decimalCount ?? 0
    return {
        id: item.id,
        name: item.name,
        body: {
            listing: snsListing(listing, decimals),
            buyerPrice: scaleUpPrice(terms.buyerPrice, decimals),
            amount: scaleDown(terms.amount, decimals),
            sellerPrice: scaleUpPrice(terms.sellerPrice, decimals),
            account: { id: account.id },
            extrinsic: item.extrinsic.id,
            token: token.id,
            decimalCount,
        },
    }
}

export async function counterOfferPlaced(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.counterOfferPlaced(item)
    const listing = await findOfferListing(ctx, event.listingId.substring(2))
    if (!listing) return undefined

    const terms = counterOfferTerms(event.counterOffer)
    const account = await getOrCreateAccount(ctx, offererAddress(item, event.counterOffer))
    const isNewOffer = await saveCounterOffer(ctx, block, listing, account, terms)
    await saveListing(ctx, block, listing, isNewOffer)

    const token = listing.takeAssetId
    return [
        ...mappings.marketplace.events.counterOfferPlacedEventModel(
            item,
            event,
            listing,
            account,
            token.collection,
            token
        ),
        snsEvent(item, listing, account, terms),
    ]
}
