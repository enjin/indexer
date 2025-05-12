'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nextOfferId = exports.offers = exports.liquidityConfigs = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v101 = require('../v101')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
exports.liquidityConfigs = {
    /**
     *  Mapping of LP accounts to their configuration
     */
    enjinV100: new support_1.StorageType(
        'StakeExchange.LiquidityConfigs',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.LiquidityAccountConfig
    ),
}
exports.offers = {
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV100: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], enjinV100.Offer),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV120: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], enjinV120.Offer),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV1021: new support_1.StorageType(
        'StakeExchange.Offers',
        'Optional',
        [support_1.sts.bigint()],
        enjinV1021.Offer
    ),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV1023: new support_1.StorageType(
        'StakeExchange.Offers',
        'Optional',
        [support_1.sts.bigint()],
        enjinV1023.Offer
    ),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v100: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], v100.Offer),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v101: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], v101.Offer),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v120: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], v120.Offer),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v1021: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], v1021.Offer),
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v1023: new support_1.StorageType('StakeExchange.Offers', 'Optional', [support_1.sts.bigint()], v1023.Offer),
}
exports.nextOfferId = {
    /**
     *  Value to use for Next offer Id
     */
    enjinV100: new support_1.StorageType('StakeExchange.NextOfferId', 'Default', [], support_1.sts.bigint()),
}
