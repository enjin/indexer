'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.listingIdsByAccountId =
    exports.listingIdsByTakeAsset =
    exports.listingIdsByMakeAsset =
    exports.upgradeBlockNumber =
    exports.whitelistedAccounts =
    exports.pendingActions =
    exports.pendingListingIds =
    exports.nextListingIdInput =
    exports.counterOffers =
    exports.listings =
    exports.info =
        void 0
var support_1 = require('../support')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1020 = require('../matrixV1020')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var v1030 = require('../v1030')
var v1031 = require('../v1031')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.info = {
    /**
     *  Stores information about the marketplace
     */
    matrixEnjinV603: new support_1.StorageType('Marketplace.Info', 'Default', [], matrixEnjinV603.MarketPlaceInfo),
    /**
     *  Stores information about the marketplace
     */
    matrixV500: new support_1.StorageType('Marketplace.Info', 'Default', [], matrixV500.MarketPlaceInfo),
    /**
     *  Stores information about the marketplace
     */
    matrixV604: new support_1.StorageType('Marketplace.Info', 'Default', [], matrixV604.MarketPlaceInfo),
}
exports.listings = {
    /**
     *  Listings by ID
     */
    matrixEnjinV603: new support_1.StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.Listing
    ),
    /**
     *  Listings by ID
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixEnjinV1012.H256],
        matrixEnjinV1012.Listing
    ),
    /**
     *  Listings by ID (real storage)
     */
    matrixEnjinV1022: new support_1.StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixEnjinV1022.H256],
        matrixEnjinV1022.Listing
    ),
    /**
     *  Listings by ID
     */
    matrixV500: new support_1.StorageType('Marketplace.Listings', 'Optional', [matrixV500.H256], matrixV500.Listing),
    /**
     *  Listings by ID
     */
    matrixV1010: new support_1.StorageType('Marketplace.Listings', 'Optional', [matrixV1010.H256], matrixV1010.Listing),
    /**
     *  Listings by ID
     */
    matrixV1011: new support_1.StorageType('Marketplace.Listings', 'Optional', [matrixV1011.H256], matrixV1011.Listing),
    /**
     *  Listings by ID (real storage)
     */
    matrixV1020: new support_1.StorageType('Marketplace.Listings', 'Optional', [matrixV1020.H256], matrixV1020.Listing),
    /**
     *  Listings by ID
     */
    enjinV110: new support_1.StorageType('Marketplace.Listings', 'Optional', [enjinV110.H256], enjinV110.Listing),
    /**
     *  Listings by ID
     */
    enjinV1032: new support_1.StorageType('Marketplace.Listings', 'Optional', [enjinV1032.H256], enjinV1032.Listing),
    /**
     *  Listings by ID (real storage)
     */
    enjinV1050: new support_1.StorageType('Marketplace.Listings', 'Optional', [enjinV1050.H256], enjinV1050.Listing),
    /**
     *  Listings by ID
     */
    v110: new support_1.StorageType('Marketplace.Listings', 'Optional', [v110.H256], v110.Listing),
    /**
     *  Listings by ID
     */
    v1030: new support_1.StorageType('Marketplace.Listings', 'Optional', [v1030.H256], v1030.Listing),
    /**
     *  Listings by ID
     */
    v1031: new support_1.StorageType('Marketplace.Listings', 'Optional', [v1031.H256], v1031.Listing),
    /**
     *  Listings by ID (real storage)
     */
    v1050: new support_1.StorageType('Marketplace.Listings', 'Optional', [v1050.H256], v1050.Listing),
}
exports.counterOffers = {
    /**
     *  Counter offers by listing id and account
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Marketplace.CounterOffers',
        'Optional',
        [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.CounterOffer
    ),
}
exports.nextListingIdInput = {
    /**
     *  Used to generate the next listing id. Increments by one every time a listing is created.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Marketplace.NextListingIdInput',
        'Default',
        [],
        support_1.sts.bigint()
    ),
}
exports.pendingListingIds = {
    /**
     *  Listing ids that will be processed in on idle
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Marketplace.PendingListingIds',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1012.H256
        })
    ),
}
exports.pendingActions = {
    /**
     *  Actions that will be processed in on idle
     */
    matrixEnjinV1022: new support_1.StorageType(
        'Marketplace.PendingActions',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1022.PendingAction
        })
    ),
}
exports.whitelistedAccounts = {
    matrixEnjinV1022: new support_1.StorageType(
        'Marketplace.WhitelistedAccounts',
        'Optional',
        [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32],
        matrixEnjinV1022.WhitelistedAccount
    ),
}
exports.upgradeBlockNumber = {
    /**
     *  The block number that the upgrade took place on
     */
    matrixEnjinV1022: new support_1.StorageType(
        'Marketplace.UpgradeBlockNumber',
        'Optional',
        [],
        support_1.sts.number()
    ),
}
exports.listingIdsByMakeAsset = {
    /**
     *  Listing Ids by make asset's collection id and token id
     */
    matrixV500: new support_1.StorageType(
        'Marketplace.ListingIdsByMakeAsset',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixV500.H256
    ),
}
exports.listingIdsByTakeAsset = {
    /**
     *  Listing Ids by take asset's collection id and token id
     */
    matrixV500: new support_1.StorageType(
        'Marketplace.ListingIdsByTakeAsset',
        'Optional',
        [support_1.sts.bigint(), support_1.sts.bigint()],
        matrixV500.H256
    ),
}
exports.listingIdsByAccountId = {
    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    matrixV500: new support_1.StorageType(
        'Marketplace.ListingIdsByAccountId',
        'Optional',
        [matrixV500.AccountId32, matrixV500.H256],
        support_1.sts.unit()
    ),
}
