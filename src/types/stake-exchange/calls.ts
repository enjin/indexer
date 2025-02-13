import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v101 from '../v101'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'

export const createOffer = {
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
    enjinV100: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    enjinV120: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    enjinV1021: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    enjinV1023: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    v100: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    v101: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    v120: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    v1021: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
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
    v1023: new CallType(
        'StakeExchange.create_offer',
        sts.struct({
            offer: v1023.CreateOffer,
        })
    ),
}

export const cancelOffer = {
    name: 'StakeExchange.cancel_offer',
    /**
     * Cancel an existing offer with `offer_id`
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::OfferNotFound`] if the `offer_id` does not exist
     */
    enjinV100: new CallType(
        'StakeExchange.cancel_offer',
        sts.struct({
            offerId: sts.bigint(),
        })
    ),
}

export const configureLiquidityAccount = {
    name: 'StakeExchange.configure_liquidity_account',
    /**
     * Set the liquidity config for the caller account
     */
    enjinV100: new CallType(
        'StakeExchange.configure_liquidity_account',
        sts.struct({
            config: enjinV100.LiquidityAccountConfig,
        })
    ),
}

export const withdrawLiquidity = {
    name: 'StakeExchange.withdraw_liquidity',
    /**
     * Withdraw liquidity from a current active offer
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
     * - [`Error::OfferNotFound`] if the offerId does not exist
     */
    enjinV100: new CallType(
        'StakeExchange.withdraw_liquidity',
        sts.struct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const addLiquidity = {
    name: 'StakeExchange.add_liquidity',
    /**
     * Add liquidity to a current active offer
     *
     * # Errors
     * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
     * - [`Error::OfferNotFound`] if the offerId does not exist
     */
    enjinV100: new CallType(
        'StakeExchange.add_liquidity',
        sts.struct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const buy = {
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
    enjinV100: new CallType(
        'StakeExchange.buy',
        sts.struct({
            offerId: sts.bigint(),
            amount: sts.bigint(),
            tokenId: sts.bigint(),
        })
    ),
}
