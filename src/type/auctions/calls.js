'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.cancelAuction = exports.bid = exports.newAuction = void 0
var support_1 = require('../support')
exports.newAuction = {
    name: 'Auctions.new_auction',
    /**
     * Create a new auction.
     *
     * This can only happen when there isn't already an auction in progress and may only be
     * called by the root origin. Accepts the `duration` of this auction and the
     * `lease_period_index` of the initial lease period of the four that are to be auctioned.
     */
    enjinV100: new support_1.CallType(
        'Auctions.new_auction',
        support_1.sts.struct({
            duration: support_1.sts.number(),
            leasePeriodIndex: support_1.sts.number(),
        })
    ),
}
exports.bid = {
    name: 'Auctions.bid',
    /**
     * Make a new bid from an account (including a parachain account) for deploying a new
     * parachain.
     *
     * Multiple simultaneous bids from the same bidder are allowed only as long as all active
     * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
     *
     * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
     * funded by) the same account.
     * - `auction_index` is the index of the auction to bid on. Should just be the present
     * value of `AuctionCounter`.
     * - `first_slot` is the first lease period index of the range to bid on. This is the
     * absolute lease period index value, not an auction-specific offset.
     * - `last_slot` is the last lease period index of the range to bid on. This is the
     * absolute lease period index value, not an auction-specific offset.
     * - `amount` is the amount to bid to be held as deposit for the parachain should the
     * bid win. This amount is held throughout the range.
     */
    enjinV100: new support_1.CallType(
        'Auctions.bid',
        support_1.sts.struct({
            para: support_1.sts.number(),
            auctionIndex: support_1.sts.number(),
            firstSlot: support_1.sts.number(),
            lastSlot: support_1.sts.number(),
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.cancelAuction = {
    name: 'Auctions.cancel_auction',
    /**
     * Cancel an in-progress auction.
     *
     * Can only be called by Root origin.
     */
    enjinV100: new support_1.CallType('Auctions.cancel_auction', support_1.sts.unit()),
}
