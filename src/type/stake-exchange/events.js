'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.offerCompleted =
    exports.buyOrderCompleted =
    exports.liquidityAdded =
    exports.liquidityWithdrawn =
    exports.liquidityConfigUpdated =
    exports.offerCancelled =
    exports.offerCreated =
        void 0
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
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
var enjinV1033 = require('../enjinV1033')
var v1033 = require('../v1033')
exports.offerCreated = {
    name: 'StakeExchange.OfferCreated',
    /**
     * A offer was placed
     */
    enjinV100: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV100.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    enjinV120: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV120.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    enjinV1021: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV1021.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    enjinV1023: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV1023.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v100: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v100.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v101: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v101.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v120: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v120.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v1021: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v1021.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v1023: new support_1.EventType(
        'StakeExchange.OfferCreated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v1023.Offer,
        })
    ),
}
exports.offerCancelled = {
    name: 'StakeExchange.OfferCancelled',
    /**
     * A offer was cancelled
     */
    enjinV100: new support_1.EventType(
        'StakeExchange.OfferCancelled',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
        })
    ),
}
exports.liquidityConfigUpdated = {
    name: 'StakeExchange.LiquidityConfigUpdated',
    /**
     * Liquidity config was set for account
     */
    enjinV100: new support_1.EventType(
        'StakeExchange.LiquidityConfigUpdated',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            who: enjinV100.AccountId32,
            /**
             * The offer that was placed
             */
            config: enjinV100.LiquidityAccountConfig,
        })
    ),
}
exports.liquidityWithdrawn = {
    name: 'StakeExchange.LiquidityWithdrawn',
    /**
     * Liquidity was withdrawn from a offer
     */
    enjinV100: new support_1.EventType(
        'StakeExchange.LiquidityWithdrawn',
        support_1.sts.struct({
            /**
             * ID of the account
             */
            who: enjinV100.AccountId32,
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
        })
    ),
}
exports.liquidityAdded = {
    name: 'StakeExchange.LiquidityAdded',
    /**
     * Liquidity was added to a offer
     */
    enjinV100: new support_1.EventType(
        'StakeExchange.LiquidityAdded',
        support_1.sts.struct({
            /**
             * ID of the account
             */
            who: enjinV100.AccountId32,
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
        })
    ),
}
exports.buyOrderCompleted = {
    name: 'StakeExchange.BuyOrderCompleted',
    /**
     * Buy order was completed
     */
    enjinV100: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV100.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: enjinV100.FixedU128,
        })
    ),
    /**
     * Buy order was completed
     */
    enjinV120: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV120.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: enjinV120.Perbill,
        })
    ),
    /**
     * Buy order was completed
     */
    enjinV1026: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV1026.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: enjinV1026.Perbill,
            /**
             * The creator of the offer
             */
            offerCreator: enjinV1026.AccountId32,
        })
    ),
    /**
     * Buy order was completed
     */
    enjinV1033: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV1033.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: enjinV1033.Perbill,
            /**
             * The creator of the offer
             */
            offerCreator: enjinV1033.AccountId32,
            /**
             * The offer Id
             */
            offerId: support_1.sts.bigint(),
        })
    ),
    /**
     * Buy order was completed
     */
    v100: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v100.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: v100.FixedU128,
        })
    ),
    /**
     * Buy order was completed
     */
    v120: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v120.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: v120.Perbill,
        })
    ),
    /**
     * Buy order was completed
     */
    v1026: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v1026.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: v1026.Perbill,
            /**
             * The creator of the offer
             */
            offerCreator: v1026.AccountId32,
        })
    ),
    /**
     * Buy order was completed
     */
    v1033: new support_1.EventType(
        'StakeExchange.BuyOrderCompleted',
        support_1.sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v1033.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: support_1.sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: support_1.sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: v1033.Perbill,
            /**
             * The creator of the offer
             */
            offerCreator: v1033.AccountId32,
            /**
             * The offer Id
             */
            offerId: support_1.sts.bigint(),
        })
    ),
}
exports.offerCompleted = {
    name: 'StakeExchange.OfferCompleted',
    /**
     * A offer was completed and removed
     */
    enjinV110: new support_1.EventType(
        'StakeExchange.OfferCompleted',
        support_1.sts.struct({
            /**
             * ID of the offer
             */
            offerId: support_1.sts.bigint(),
        })
    ),
}
