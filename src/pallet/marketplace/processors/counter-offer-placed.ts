import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount, unwrapSigner } from '~/util/entities'
import { calls } from '~/type'
import Big from 'big.js'
import { rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'

export async function counterOfferPlaced(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.counterOfferPlaced(item)
    const withFuelTank = item.extrinsic?.call?.name === calls.fuelTanks.dispatchAndTouch.name

    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            takeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing || listing.state.isTypeOf !== 'OfferState') return undefined

    const takeAssetId = listing.takeAssetId
    const accountId =
        withFuelTank && item.extrinsic
            ? unwrapSigner(item.extrinsic)
            : event.counterOffer.deposit != undefined
              ? event.counterOffer.deposit.depositor
              : event.counterOffer.accountId

    const buyerPrice = event.counterOffer.price != undefined ? event.counterOffer.price : event.counterOffer.buyerPrice
    const depositAmount = event.counterOffer.deposit != undefined ? event.counterOffer.deposit.amount : 1n
    const sellerPrice = event.counterOffer.sellerPrice != undefined ? event.counterOffer.sellerPrice : 1n
    const account = await getOrCreateAccount(ctx, accountId)

    const offerId = `${listing.id}-${account.id}`
    const existingOffer = await ctx.store.findOneBy<CounterOffer>(CounterOffer, { id: offerId })
    const offer = existingOffer ?? new CounterOffer({ id: offerId, listing, account })
    offer.buyerPrice = buyerPrice
    offer.amount = depositAmount
    offer.sellerPrice = sellerPrice
    offer.createdAt = new Date(block.timestamp ?? 0)
    offer.lastAction = account

    listing.updatedAt = new Date(block.timestamp ?? 0)
    listing.state = rebuildOfferState(listing.amount, listing.state, {
        counterOfferDelta: existingOffer ? 0 : 1,
        isExpired: false,
    })

    await ctx.store.save(offer)
    await ctx.store.save(listing)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: Big(listing.price.toString())
                    .mul(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                amount: Big(listing.amount.toString())
                    .div(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                highestPrice: Big(listing.highestPrice.toString())
                    .mul(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                seller: {
                    id: listing.seller.id,
                },
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
                type: listing.type.toString(),
                takeAssetId: takeAssetId.id,
            },
            buyerPrice: buyerPrice
                ? Big(buyerPrice.toString())
                      .mul(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                      .toNumber()
                : undefined,
            amount: Big(depositAmount.toString())
                .div(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                .toNumber(),
            sellerPrice: sellerPrice
                ? Big(sellerPrice.toString())
                      .mul(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                      .toNumber()
                : undefined,
            account: { id: account.id },
            extrinsic: item.extrinsic?.id,
            token: takeAssetId.id,
            decimalCount: takeAssetId.nativeMetadata?.decimalCount,
        },
    }

    return [
        ...mappings.marketplace.events.counterOfferPlacedEventModel(
            item,
            event,
            listing,
            account,
            takeAssetId.collection,
            takeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
