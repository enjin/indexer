'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.buy =
    exports.addLiquidity =
    exports.withdrawLiquidity =
    exports.configureLiquidityAccount =
    exports.cancelOffer =
    exports.createOffer =
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
exports.createOffer = {
    name: 'StakeExchange.create_offer',
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    enjinV100: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: enjinV100.Offer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    enjinV120: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: enjinV120.CreateOffer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    enjinV1021: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: enjinV1021.CreateOffer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    enjinV1023: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: enjinV1023.CreateOffer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    v100: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: v100.Offer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    v101: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: v101.Offer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    v120: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: v120.CreateOffer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    v1021: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: v1021.CreateOffer,
        })
    ),
    /**
     * Place a new offer with the given parameters
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::ZeroOffer`] if offer amount is zero.
     * - [`Error::ZeroRate`] if rate amount is zero.
     * - [`Error::Overflow`] if arithmetic overflow occurs
     */
    v1023: new support_1.CallType(
        'StakeExchange.create_offer',
        support_1.sts.struct({
            offer: v1023.CreateOffer,
        })
    ),
}
exports.cancelOffer = {
    name: 'StakeExchange.cancel_offer',
    /**
     * Cancel an existing offer with `offer_id`
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::OfferNotFound`] if the `offer_id` does not exist
     */
    enjinV100: new support_1.CallType(
        'StakeExchange.cancel_offer',
        support_1.sts.struct({
            offerId: support_1.sts.bigint(),
        })
    ),
}
exports.configureLiquidityAccount = {
    name: 'StakeExchange.configure_liquidity_account',
    /**
     * Set the liquidity config for the caller account
     */
    enjinV100: new support_1.CallType(
        'StakeExchange.configure_liquidity_account',
        support_1.sts.struct({
            config: enjinV100.LiquidityAccountConfig,
        })
    ),
}
exports.withdrawLiquidity = {
    name: 'StakeExchange.withdraw_liquidity',
    /**
     * Withdraw liquidity from a current active offer
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::OfferNotFound`] if the offerId does not exist
     */
    enjinV100: new support_1.CallType(
        'StakeExchange.withdraw_liquidity',
        support_1.sts.struct({
            offerId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.addLiquidity = {
    name: 'StakeExchange.add_liquidity',
    /**
     * Add liquidity to a current active offer
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
     * - [`Error::OfferNotFound`] if the offerId does not exist
     */
    enjinV100: new support_1.CallType(
        'StakeExchange.add_liquidity',
        support_1.sts.struct({
            offerId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.buy = {
    name: 'StakeExchange.buy',
    /**
     * Buy from a current active offer, returning the native currency by exchanging the staked
     * tokens
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
     * - [`Error::TokenRestriction`] if the tokenId is restricted by the LP
     * - [`Error::NotEnoughLiquidity`] if the offer cannot cover the amount requested
     * - [`Error::TransferParamCreationFailed`] if the multitokens transfer failed
     */
    enjinV100: new support_1.CallType(
        'StakeExchange.buy',
        support_1.sts.struct({
            offerId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
        })
    ),
}
