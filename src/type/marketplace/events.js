'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.whitelistedAccountsRemoved =
    exports.whitelistedAccountsAdded =
    exports.listingUpgraded =
    exports.listingRemovedUnderMinimum =
    exports.migrationStep =
    exports.counterOfferRemoved =
    exports.counterOfferAnswered =
    exports.counterOfferPlaced =
    exports.expiredListingRemoved =
    exports.listingConverted =
    exports.protocolFeeSet =
    exports.auctionFinalized =
    exports.bidPlaced =
    exports.listingFilled =
    exports.listingCancelled =
    exports.listingCreated =
        void 0
var support_1 = require('../support')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1005 = require('../matrixEnjinV1005')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixEnjinV1014 = require('../matrixEnjinV1014')
var matrixV1020 = require('../matrixV1020')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var v1030 = require('../v1030')
var v1031 = require('../v1031')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.listingCreated = {
    name: 'Marketplace.ListingCreated',
    /**
     * A listing was created
     */
    matrixEnjinV603: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV603.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV1012.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixEnjinV1022: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1022.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV1022.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV500: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV500.H256,
            /**
             * The listing
             */
            listing: matrixV500.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV1010: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV1010.H256,
            /**
             * The listing
             */
            listing: matrixV1010.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV1011: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV1011.H256,
            /**
             * The listing
             */
            listing: matrixV1011.Listing,
        })
    ),
    /**
     * A listing was created
     */
    matrixV1020: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixV1020.H256,
            /**
             * The listing
             */
            listing: matrixV1020.Listing,
        })
    ),
    /**
     * A listing was created
     */
    enjinV110: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: enjinV110.H256,
            /**
             * The listing
             */
            listing: enjinV110.Listing,
        })
    ),
    /**
     * A listing was created
     */
    enjinV1032: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: enjinV1032.H256,
            /**
             * The listing
             */
            listing: enjinV1032.Listing,
        })
    ),
    /**
     * A listing was created
     */
    enjinV1050: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: enjinV1050.H256,
            /**
             * The listing
             */
            listing: enjinV1050.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v110: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: v110.H256,
            /**
             * The listing
             */
            listing: v110.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1030: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1030.H256,
            /**
             * The listing
             */
            listing: v1030.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1031: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1031.H256,
            /**
             * The listing
             */
            listing: v1031.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1050: new support_1.EventType(
        'Marketplace.ListingCreated',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1050.H256,
            /**
             * The listing
             */
            listing: v1050.Listing,
        })
    ),
}
exports.listingCancelled = {
    name: 'Marketplace.ListingCancelled',
    /**
     * A listing was cancelled
     */
    matrixEnjinV603: new support_1.EventType(
        'Marketplace.ListingCancelled',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV603.H256,
        })
    ),
}
exports.listingFilled = {
    name: 'Marketplace.ListingFilled',
    /**
     * A listing was filled or partially filled
     */
    matrixEnjinV603: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixEnjinV603.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixEnjinV1012.AccountId32,
            /**
             * The price it was filled with
             */
            price: support_1.sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    matrixV500: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixV500.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixV500.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    matrixV1011: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixV1011.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixV1011.AccountId32,
            /**
             * The price it was filled with
             */
            price: support_1.sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    enjinV110: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: enjinV110.H256,
            /**
             * account that filled the listing
             */
            buyer: enjinV110.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    enjinV1032: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: enjinV1032.H256,
            /**
             * account that filled the listing
             */
            buyer: enjinV1032.AccountId32,
            /**
             * The price it was filled with
             */
            price: support_1.sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    v110: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: v110.H256,
            /**
             * account that filled the listing
             */
            buyer: v110.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    v1031: new support_1.EventType(
        'Marketplace.ListingFilled',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: v1031.H256,
            /**
             * account that filled the listing
             */
            buyer: v1031.AccountId32,
            /**
             * The price it was filled with
             */
            price: support_1.sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: support_1.sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: support_1.sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
}
exports.bidPlaced = {
    name: 'Marketplace.BidPlaced',
    /**
     * A bid was placed
     */
    matrixEnjinV603: new support_1.EventType(
        'Marketplace.BidPlaced',
        support_1.sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The bid that was placed
             */
            bid: matrixEnjinV603.Bid,
        })
    ),
}
exports.auctionFinalized = {
    name: 'Marketplace.AuctionFinalized',
    /**
     * An auction was finalized
     */
    matrixEnjinV603: new support_1.EventType(
        'Marketplace.AuctionFinalized',
        support_1.sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The bid that won
             */
            winningBid: support_1.sts.option(function () {
                return matrixEnjinV603.Bid
            }),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: support_1.sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: support_1.sts.bigint(),
        })
    ),
}
exports.protocolFeeSet = {
    name: 'Marketplace.ProtocolFeeSet',
    /**
     * Protocol fee was set
     */
    matrixEnjinV603: new support_1.EventType(
        'Marketplace.ProtocolFeeSet',
        support_1.sts.struct({
            /**
             * The new protocol fee
             */
            protocolFee: matrixEnjinV603.Perbill,
        })
    ),
}
exports.listingConverted = {
    name: 'Marketplace.ListingConverted',
    /**
     * A listing was converted to the correct format
     */
    matrixEnjinV1005: new support_1.EventType(
        'Marketplace.ListingConverted',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1005.H256,
        })
    ),
}
exports.expiredListingRemoved = {
    name: 'Marketplace.ExpiredListingRemoved',
    /**
     * An expired listing was removed
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.ExpiredListingRemoved',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1012.H256,
        })
    ),
}
exports.counterOfferPlaced = {
    name: 'Marketplace.CounterOfferPlaced',
    /**
     * A counter offer was placed on a listing
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.CounterOfferPlaced',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The counter offer
             */
            counterOffer: matrixEnjinV1012.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    matrixV1010: new support_1.EventType(
        'Marketplace.CounterOfferPlaced',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1010.H256,
            /**
             * The counter offer
             */
            counterOffer: matrixV1010.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    matrixV1011: new support_1.EventType(
        'Marketplace.CounterOfferPlaced',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1011.H256,
            /**
             * The counter offer
             */
            counterOffer: matrixV1011.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    v1030: new support_1.EventType(
        'Marketplace.CounterOfferPlaced',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1030.H256,
            /**
             * The counter offer
             */
            counterOffer: v1030.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    v1031: new support_1.EventType(
        'Marketplace.CounterOfferPlaced',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1031.H256,
            /**
             * The counter offer
             */
            counterOffer: v1031.CounterOffer,
        })
    ),
}
exports.counterOfferAnswered = {
    name: 'Marketplace.CounterOfferAnswered',
    /**
     * A response was issued for a counter offer
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.CounterOfferAnswered',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The account that created the counter offer
             */
            creator: matrixEnjinV1012.AccountId32,
            /**
             * The response to the counter offer
             */
            response: matrixEnjinV1012.CounterOfferResponse,
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    matrixV1010: new support_1.EventType(
        'Marketplace.CounterOfferAnswered',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1010.H256,
            /**
             * If the offer was accepted
             */
            accepted: support_1.sts.boolean(),
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    matrixV1011: new support_1.EventType(
        'Marketplace.CounterOfferAnswered',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixV1011.H256,
            /**
             * The account that created the counter offer
             */
            creator: matrixV1011.AccountId32,
            /**
             * The response to the counter offer
             */
            response: matrixV1011.CounterOfferResponse,
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    v1030: new support_1.EventType(
        'Marketplace.CounterOfferAnswered',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1030.H256,
            /**
             * If the offer was accepted
             */
            accepted: support_1.sts.boolean(),
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    v1031: new support_1.EventType(
        'Marketplace.CounterOfferAnswered',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1031.H256,
            /**
             * The account that created the counter offer
             */
            creator: v1031.AccountId32,
            /**
             * The response to the counter offer
             */
            response: v1031.CounterOfferResponse,
        })
    ),
}
exports.counterOfferRemoved = {
    name: 'Marketplace.CounterOfferRemoved',
    /**
     * A counter offer was removed
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.CounterOfferRemoved',
        support_1.sts.struct({
            /**
             * Id of the listing
             */
            listingId: matrixEnjinV1012.H256,
            /**
             * The account that created the counter offer
             */
            creator: matrixEnjinV1012.AccountId32,
        })
    ),
}
exports.migrationStep = {
    name: 'Marketplace.MigrationStep',
    /**
     * The migration step has completed
     */
    matrixEnjinV1012: new support_1.EventType(
        'Marketplace.MigrationStep',
        support_1.sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: support_1.sts.number(),
            /**
             * The migration phase
             */
            phase: support_1.sts.number(),
        })
    ),
}
exports.listingRemovedUnderMinimum = {
    name: 'Marketplace.ListingRemovedUnderMinimum',
    /**
     * Tried to settle a listing with take value under the minimum requirement
     */
    matrixEnjinV1014: new support_1.EventType(
        'Marketplace.ListingRemovedUnderMinimum',
        support_1.sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1014.H256,
        })
    ),
}
exports.listingUpgraded = {
    name: 'Marketplace.ListingUpgraded',
    /**
     * A listing has been upgraded
     */
    matrixEnjinV1022: new support_1.EventType(
        'Marketplace.ListingUpgraded',
        support_1.sts.struct({
            listingId: matrixEnjinV1022.H256,
        })
    ),
}
exports.whitelistedAccountsAdded = {
    name: 'Marketplace.WhitelistedAccountsAdded',
    /**
     * Whitelisted accounts were added to a listing
     */
    matrixEnjinV1022: new support_1.EventType(
        'Marketplace.WhitelistedAccountsAdded',
        support_1.sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV1022.H256,
            /**
             * The accounts that were added
             */
            accounts: support_1.sts.array(function () {
                return matrixEnjinV1022.WhitelistAddAccount
            }),
        })
    ),
}
exports.whitelistedAccountsRemoved = {
    name: 'Marketplace.WhitelistedAccountsRemoved',
    /**
     * Whitelisted accounts were removed from a listing
     */
    matrixEnjinV1022: new support_1.EventType(
        'Marketplace.WhitelistedAccountsRemoved',
        support_1.sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV1022.H256,
            /**
             * The account ids that were removed
             */
            accountIds: support_1.sts.array(function () {
                return matrixEnjinV1022.AccountId32
            }),
        })
    ),
}
