import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v101 from '../v101'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as enjinV1033 from '../enjinV1033'
import * as v1033 from '../v1033'

export const offerCreated = {
    name: 'StakeExchange.OfferCreated',
    /**
     * A offer was placed
     */
    enjinV100: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV100.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    enjinV120: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV120.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    enjinV1021: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV1021.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    enjinV1023: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: enjinV1023.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v100: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v100.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v101: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v101.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v120: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v120.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v1021: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v1021.Offer,
        })
    ),
    /**
     * A offer was placed
     */
    v1023: new EventType(
        'StakeExchange.OfferCreated',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
            /**
             * The offer that was placed
             */
            offer: v1023.Offer,
        })
    ),
}

export const offerCancelled = {
    name: 'StakeExchange.OfferCancelled',
    /**
     * A offer was cancelled
     */
    enjinV100: new EventType(
        'StakeExchange.OfferCancelled',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
        })
    ),
}

export const liquidityConfigUpdated = {
    name: 'StakeExchange.LiquidityConfigUpdated',
    /**
     * Liquidity config was set for account
     */
    enjinV100: new EventType(
        'StakeExchange.LiquidityConfigUpdated',
        sts.struct({
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

export const liquidityWithdrawn = {
    name: 'StakeExchange.LiquidityWithdrawn',
    /**
     * Liquidity was withdrawn from a offer
     */
    enjinV100: new EventType(
        'StakeExchange.LiquidityWithdrawn',
        sts.struct({
            /**
             * ID of the account
             */
            who: enjinV100.AccountId32,
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
        })
    ),
}

export const liquidityAdded = {
    name: 'StakeExchange.LiquidityAdded',
    /**
     * Liquidity was added to a offer
     */
    enjinV100: new EventType(
        'StakeExchange.LiquidityAdded',
        sts.struct({
            /**
             * ID of the account
             */
            who: enjinV100.AccountId32,
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
        })
    ),
}

export const buyOrderCompleted = {
    name: 'StakeExchange.BuyOrderCompleted',
    /**
     * Buy order was completed
     */
    enjinV100: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV100.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: enjinV100.FixedU128,
        })
    ),
    /**
     * Buy order was completed
     */
    enjinV120: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV120.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: enjinV120.Perbill,
        })
    ),
    /**
     * Buy order was completed
     */
    enjinV1026: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV1026.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
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
    enjinV1033: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: enjinV1033.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
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
            offerId: sts.bigint(),
        })
    ),
    /**
     * Buy order was completed
     */
    v100: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v100.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: v100.FixedU128,
        })
    ),
    /**
     * Buy order was completed
     */
    v120: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v120.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
            /**
             * The rate at which the order was completed
             */
            rate: v120.Perbill,
        })
    ),
    /**
     * Buy order was completed
     */
    v1026: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v1026.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
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
    v1033: new EventType(
        'StakeExchange.BuyOrderCompleted',
        sts.struct({
            /**
             * AccountId of the buyer
             */
            who: v1033.AccountId32,
            /**
             * The tokenId that was exchanged
             */
            tokenId: sts.bigint(),
            /**
             * The amount of tokens transferred
             */
            amount: sts.bigint(),
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
            offerId: sts.bigint(),
        })
    ),
}

export const offerCompleted = {
    name: 'StakeExchange.OfferCompleted',
    /**
     * A offer was completed and removed
     */
    enjinV110: new EventType(
        'StakeExchange.OfferCompleted',
        sts.struct({
            /**
             * ID of the offer
             */
            offerId: sts.bigint(),
        })
    ),
}
