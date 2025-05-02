'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.winningOffset =
    exports.bidAccepted =
    exports.reserveConfiscated =
    exports.unreserved =
    exports.reserved =
    exports.auctionClosed =
    exports.auctionStarted =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.auctionStarted = {
    name: 'Auctions.AuctionStarted',
    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    enjinV100: new support_1.EventType(
        'Auctions.AuctionStarted',
        support_1.sts.struct({
            auctionIndex: support_1.sts.number(),
            leasePeriod: support_1.sts.number(),
            ending: support_1.sts.number(),
        })
    ),
}
exports.auctionClosed = {
    name: 'Auctions.AuctionClosed',
    /**
     * An auction ended. All funds become unreserved.
     */
    enjinV100: new support_1.EventType(
        'Auctions.AuctionClosed',
        support_1.sts.struct({
            auctionIndex: support_1.sts.number(),
        })
    ),
}
exports.reserved = {
    name: 'Auctions.Reserved',
    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    enjinV100: new support_1.EventType(
        'Auctions.Reserved',
        support_1.sts.struct({
            bidder: enjinV100.AccountId32,
            extraReserved: support_1.sts.bigint(),
            totalAmount: support_1.sts.bigint(),
        })
    ),
}
exports.unreserved = {
    name: 'Auctions.Unreserved',
    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    enjinV100: new support_1.EventType(
        'Auctions.Unreserved',
        support_1.sts.struct({
            bidder: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.reserveConfiscated = {
    name: 'Auctions.ReserveConfiscated',
    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    enjinV100: new support_1.EventType(
        'Auctions.ReserveConfiscated',
        support_1.sts.struct({
            paraId: enjinV100.Id,
            leaser: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.bidAccepted = {
    name: 'Auctions.BidAccepted',
    /**
     * A new bid has been accepted as the current winner.
     */
    enjinV100: new support_1.EventType(
        'Auctions.BidAccepted',
        support_1.sts.struct({
            bidder: enjinV100.AccountId32,
            paraId: enjinV100.Id,
            amount: support_1.sts.bigint(),
            firstSlot: support_1.sts.number(),
            lastSlot: support_1.sts.number(),
        })
    ),
}
exports.winningOffset = {
    name: 'Auctions.WinningOffset',
    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    enjinV100: new support_1.EventType(
        'Auctions.WinningOffset',
        support_1.sts.struct({
            auctionIndex: support_1.sts.number(),
            blockNumber: support_1.sts.number(),
        })
    ),
}
