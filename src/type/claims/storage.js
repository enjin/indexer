'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.earlyBirdRewardsLookup =
    exports.approvedBlockNumber =
    exports.pendingApprovals =
    exports.total =
    exports.accountNonce =
    exports.exchangeRate =
    exports.latestBlockNumber =
    exports.delayClaimsPeriod =
    exports.totalUnclaimedAmount =
    exports.transactionHashLookup =
    exports.claims =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v101 = require('../v101')
var v102 = require('../v102')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
exports.claims = {
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Claims.Claims',
        'Optional',
        [matrixEnjinV603.H160],
        support_1.sts.array(function () {
            return matrixEnjinV603.ClaimData
        })
    ),
    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    matrixV500: new support_1.StorageType('Claims.Claims', 'Optional', [matrixV500.Account], support_1.sts.bigint()),
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    matrixV604: new support_1.StorageType(
        'Claims.Claims',
        'Optional',
        [matrixV604.H160],
        support_1.sts.array(function () {
            return matrixV604.ClaimData
        })
    ),
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    enjinV100: new support_1.StorageType(
        'Claims.Claims',
        'Optional',
        [enjinV100.Account],
        support_1.sts.array(function () {
            return enjinV100.ClaimData
        })
    ),
    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    v101: new support_1.StorageType('Claims.Claims', 'Optional', [v101.Account], support_1.sts.bigint()),
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    v102: new support_1.StorageType(
        'Claims.Claims',
        'Optional',
        [v102.Account],
        support_1.sts.array(function () {
            return v102.ClaimData
        })
    ),
}
exports.transactionHashLookup = {
    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    matrixEnjinV603: new support_1.StorageType(
        'Claims.TransactionHashLookup',
        'Optional',
        [matrixEnjinV603.H256],
        support_1.sts.unit()
    ),
    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    enjinV100: new support_1.StorageType(
        'Claims.TransactionHashLookup',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [
                    enjinV100.H256,
                    support_1.sts.option(function () {
                        return support_1.sts.number()
                    }),
                ]
            }),
        ],
        support_1.sts.unit()
    ),
}
exports.totalUnclaimedAmount = {
    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    matrixEnjinV603: new support_1.StorageType('Claims.TotalUnclaimedAmount', 'Default', [], support_1.sts.bigint()),
}
exports.delayClaimsPeriod = {
    /**
     *  Delay time in block numbers before the user could claim
     */
    matrixEnjinV603: new support_1.StorageType('Claims.DelayClaimsPeriod', 'Optional', [], support_1.sts.number()),
}
exports.latestBlockNumber = {
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    matrixEnjinV603: new support_1.StorageType('Claims.LatestBlockNumber', 'Optional', [], support_1.sts.number()),
    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    matrixV500: new support_1.StorageType('Claims.LatestBlockNumber', 'Optional', [], matrixV500.TrackedBlockNumbers),
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    matrixV604: new support_1.StorageType('Claims.LatestBlockNumber', 'Optional', [], support_1.sts.number()),
    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    enjinV100: new support_1.StorageType('Claims.LatestBlockNumber', 'Optional', [], enjinV100.TrackedBlockNumbers),
}
exports.exchangeRate = {
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixEnjinV603: new support_1.StorageType('Claims.ExchangeRate', 'Optional', [], matrixEnjinV603.Perbill),
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixV500: new support_1.StorageType('Claims.ExchangeRate', 'Optional', [], matrixV500.FixedU128),
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixV604: new support_1.StorageType('Claims.ExchangeRate', 'Optional', [], matrixV604.Perbill),
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    v101: new support_1.StorageType('Claims.ExchangeRate', 'Optional', [], v101.FixedU128),
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    v102: new support_1.StorageType('Claims.ExchangeRate', 'Optional', [], v102.Perbill),
}
exports.accountNonce = {
    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Claims.AccountNonce',
        'Optional',
        [matrixEnjinV603.H160],
        support_1.sts.number()
    ),
}
exports.total = {
    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    matrixV500: new support_1.StorageType('Claims.Total', 'Default', [], support_1.sts.bigint()),
}
exports.pendingApprovals = {
    matrixV500: new support_1.StorageType(
        'Claims.PendingApprovals',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [
                    matrixV500.H256,
                    support_1.sts.option(function () {
                        return support_1.sts.number()
                    }),
                ]
            }),
        ],
        matrixV500.TransactionData
    ),
}
exports.approvedBlockNumber = {
    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    matrixV500: new support_1.StorageType('Claims.ApprovedBlockNumber', 'Optional', [], matrixV500.TrackedBlockNumbers),
}
exports.earlyBirdRewardsLookup = {
    /**
     *  EarlyBirdRewardsLookup
     *  This stores early bird rewards of user
     */
    enjinV100: new support_1.StorageType(
        'Claims.EarlyBirdRewardsLookup',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.EarlyBirdRewardsData
    ),
}
