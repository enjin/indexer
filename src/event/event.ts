import {
    Account,
    Listing,
    TokenEvent,
    MarketplaceListEvent,
    MarketplaceListingCancelEvent,
    MarketplacePurchaseEvent,
    MarketplaceBidEvent,
    Token,
    Bid,
} from '../model'
import { EventHandlerContext } from '../mappings/types/contexts'

export class Event {
    constructor(private ctx: EventHandlerContext, private token: Token) {}

    get commonFields() {
        return {
            token: this.token,
            height: this.ctx.block.height,
            createdAt: new Date(this.ctx.block.timestamp),
        }
    }

    private catchError(err: any) {
        const error = err.message ?? err
        this.ctx.log.error(error.toString())
    }

    public async MarketplaceListingCancel(from: Account, listing: Listing) {
        const event = new TokenEvent({
            id: `${listing.id}-cancelled`,
            event: new MarketplaceListingCancelEvent({
                from: from.id,
                listing: listing.id,
            }),
            ...this.commonFields,
        })

        await this.ctx.store.save(event)
        this.ctx.log.debug('MarketplaceListingCancelEvent saved!')
    }

    public async MarketplaceList(from: Account, listing: Listing) {
        const event = new TokenEvent({
            id: `${listing.id}-listed`,
            event: new MarketplaceListEvent({
                from: from.id,
                listing: listing.id,
            }),
            ...this.commonFields,
        })

        await this.ctx.store.save(event)
        this.ctx.log.debug('MarketplaceListEvent saved!')
    }

    public async MarketplacePurchase(
        from: Account,
        to: Account,
        listing: Listing,
        amount: bigint,
        remainingAmount?: bigint
    ) {
        const event = new TokenEvent({
            // Why remainingAmount here?
            // An address could possibly buy same amount of nft twice from the same listing.

            // eslint-disable-next-line sonarjs/no-nested-template-literals
            id: `${listing.id}-${from.id}-${remainingAmount ? `${amount}-${remainingAmount}` : amount}-purchased`,
            event: new MarketplacePurchaseEvent({
                from: from.id,
                to: to.id,
                amount,
                listing: listing.id,
            }),
            ...this.commonFields,
        })

        await this.ctx.store.save(event)
        this.ctx.log.debug('MarketplacePurchaseEvent saved!')
    }

    public async MarketplaceBid(from: Account, bid: Bid) {
        const event = new TokenEvent({
            id: `${bid.id}-bid`,
            event: new MarketplaceBidEvent({
                from: from.id,
                bid: bid.id,
            }),
            ...this.commonFields,
        })

        await this.ctx.store.save(event)
        this.ctx.log.debug('MarketplaceBidEvent saved!')
    }
}
