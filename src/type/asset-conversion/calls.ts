import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const createPool = {
    name: 'AssetConversion.create_pool',
    /**
     * Creates an empty liquidity pool and an associated new `lp_token` asset
     * (the id of which is returned in the `Event::PoolCreated` event).
     *
     * Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
     */
    matrixV1030: new CallType(
        'AssetConversion.create_pool',
        sts.struct({
            asset1: matrixV1030.AssetId,
            asset2: matrixV1030.AssetId,
        })
    ),
}

export const addLiquidity = {
    name: 'AssetConversion.add_liquidity',
    /**
     * Provide liquidity into the pool of `asset1` and `asset2`.
     * NOTE: an optimal amount of asset1 and asset2 will be calculated and
     * might be different than the provided `amount1_desired`/`amount2_desired`
     * thus you should provide the min amount you're happy to provide.
     * Params `amount1_min`/`amount2_min` represent that.
     * `mint_to` will be sent the liquidity tokens that represent this share of the pool.
     *
     * NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
     * batch an atomic call with [`Pallet::add_liquidity`] and
     * [`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
     * calls to render the liquidity withdrawable and rectify the exchange rate.
     *
     * Once liquidity is added, someone may successfully call
     * [`Pallet::swap_exact_tokens_for_tokens`].
     */
    matrixV1030: new CallType(
        'AssetConversion.add_liquidity',
        sts.struct({
            asset1: matrixV1030.AssetId,
            asset2: matrixV1030.AssetId,
            amount1Desired: sts.bigint(),
            amount2Desired: sts.bigint(),
            amount1Min: sts.bigint(),
            amount2Min: sts.bigint(),
            mintTo: matrixV1030.AccountId32,
        })
    ),
}

export const removeLiquidity = {
    name: 'AssetConversion.remove_liquidity',
    /**
     * Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
     * burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
     * it's possible to control the min amount of returned tokens you're happy with.
     */
    matrixV1030: new CallType(
        'AssetConversion.remove_liquidity',
        sts.struct({
            asset1: matrixV1030.AssetId,
            asset2: matrixV1030.AssetId,
            lpTokenBurn: sts.bigint(),
            amount1MinReceive: sts.bigint(),
            amount2MinReceive: sts.bigint(),
            withdrawTo: matrixV1030.AccountId32,
        })
    ),
}

export const swapExactTokensForTokens = {
    name: 'AssetConversion.swap_exact_tokens_for_tokens',
    /**
     * Swap the exact amount of `asset1` into `asset2`.
     * `amount_out_min` param allows you to specify the min amount of the `asset2`
     * you're happy to receive.
     *
     * [`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
     * for a quote.
     */
    matrixV1030: new CallType(
        'AssetConversion.swap_exact_tokens_for_tokens',
        sts.struct({
            path: sts.array(() => matrixV1030.AssetId),
            amountIn: sts.bigint(),
            amountOutMin: sts.bigint(),
            sendTo: matrixV1030.AccountId32,
            keepAlive: sts.boolean(),
        })
    ),
}

export const swapTokensForExactTokens = {
    name: 'AssetConversion.swap_tokens_for_exact_tokens',
    /**
     * Swap any amount of `asset1` to get the exact amount of `asset2`.
     * `amount_in_max` param allows to specify the max amount of the `asset1`
     * you're happy to provide.
     *
     * [`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
     * for a quote.
     */
    matrixV1030: new CallType(
        'AssetConversion.swap_tokens_for_exact_tokens',
        sts.struct({
            path: sts.array(() => matrixV1030.AssetId),
            amountOut: sts.bigint(),
            amountInMax: sts.bigint(),
            sendTo: matrixV1030.AccountId32,
            keepAlive: sts.boolean(),
        })
    ),
}

export const touch = {
    name: 'AssetConversion.touch',
    /**
     * Touch an existing pool to fulfill prerequisites before providing liquidity, such as
     * ensuring that the pool's accounts are in place. It is typically useful when a pool
     * creator removes the pool's accounts and does not provide a liquidity. This action may
     * involve holding assets from the caller as a deposit for creating the pool's accounts.
     *
     * The origin must be Signed.
     *
     * - `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
     * - `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
     *
     * Emits `Touched` event when successful.
     */
    matrixV1030: new CallType(
        'AssetConversion.touch',
        sts.struct({
            asset1: matrixV1030.AssetId,
            asset2: matrixV1030.AssetId,
        })
    ),
}
