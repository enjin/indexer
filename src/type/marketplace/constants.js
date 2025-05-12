'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxUpgradeBatchSize =
    exports.maxWhitelistedAccountsPerExtrinsic =
    exports.maxPendingActions =
    exports.whitelistedAccountDeposit =
    exports.maxPendingListingIds =
    exports.counterOfferDeposit =
    exports.maxListingConversions =
    exports.maxSaltLength =
    exports.maxRoundingError =
    exports.listingActiveDelay =
    exports.listingDeposit =
    exports.reserveIdentifier =
    exports.minimumBidIncreasePercentage =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.minimumBidIncreasePercentage = {
    /**
     *  The percentage the minimum bid in an auction must increase by
     */
    matrixEnjinV603: new support_1.ConstantType('Marketplace.MinimumBidIncreasePercentage', matrixEnjinV603.Perbill),
}
exports.reserveIdentifier = {
    /**
     *  ID used by the pallet for making reservations
     */
    matrixEnjinV603: new support_1.ConstantType('Marketplace.ReserveIdentifier', support_1.sts.bytes()),
}
exports.listingDeposit = {
    /**
     *  The deposit for creating a listing
     */
    matrixEnjinV603: new support_1.ConstantType('Marketplace.ListingDeposit', support_1.sts.bigint()),
}
exports.listingActiveDelay = {
    /**
     *  The delay before a listing is considered active
     */
    matrixEnjinV603: new support_1.ConstantType('Marketplace.ListingActiveDelay', support_1.sts.number()),
}
exports.maxRoundingError = {
    /**
     *  The max amount that can be lost due to rounding before failing
     */
    matrixEnjinV603: new support_1.ConstantType('Marketplace.MaxRoundingError', support_1.sts.bigint()),
}
exports.maxSaltLength = {
    /**
     *  Max length of salt used when creating listings and bids
     */
    matrixEnjinV603: new support_1.ConstantType('Marketplace.MaxSaltLength', support_1.sts.number()),
}
exports.maxListingConversions = {
    /**
     *  Max number of listings to convert
     */
    matrixEnjinV1005: new support_1.ConstantType('Marketplace.MaxListingConversions', support_1.sts.number()),
}
exports.counterOfferDeposit = {
    /**
     *  The deposit for creating a counter offer
     */
    matrixEnjinV1012: new support_1.ConstantType('Marketplace.CounterOfferDeposit', support_1.sts.bigint()),
}
exports.maxPendingListingIds = {
    /**
     *  Max number of listing ids in [`PendingListingIds`]
     */
    matrixEnjinV1012: new support_1.ConstantType('Marketplace.MaxPendingListingIds', support_1.sts.number()),
}
exports.whitelistedAccountDeposit = {
    /**
     *  The deposit for each whitelisted account in a listing
     */
    matrixEnjinV1022: new support_1.ConstantType('Marketplace.WhitelistedAccountDeposit', support_1.sts.bigint()),
}
exports.maxPendingActions = {
    /**
     *  Max number of actions in [`PendingActions`]
     */
    matrixEnjinV1022: new support_1.ConstantType('Marketplace.MaxPendingActions', support_1.sts.number()),
}
exports.maxWhitelistedAccountsPerExtrinsic = {
    /**
     *  Max number of accounts parameters accepted by whitelist related extrinsics
     */
    matrixEnjinV1022: new support_1.ConstantType(
        'Marketplace.MaxWhitelistedAccountsPerExtrinsic',
        support_1.sts.number()
    ),
}
exports.maxUpgradeBatchSize = {
    /**
     *  Max number of listings that can be migrated in a single call of
     *  [`upgrade_listings`](Pallet::upgrade_listings)
     */
    matrixEnjinV1022: new support_1.ConstantType('Marketplace.MaxUpgradeBatchSize', support_1.sts.number()),
}
