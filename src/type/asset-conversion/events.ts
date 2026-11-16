import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV1043 from '../matrixEnjinV1043'

export const poolCreated = {
    name: 'AssetConversion.PoolCreated',
    /**
     * A successful call of the `CreatePool` extrinsic will create this event.
     */
    matrixEnjinV1043: new EventType(
        'AssetConversion.PoolCreated',
        sts.struct({
            /**
             * The account that created the pool.
             */
            creator: matrixEnjinV1043.AccountId32,
            /**
             * The pool id associated with the pool. Note that the order of the assets may not be
             * the same as the order specified in the create pool extrinsic.
             */
            poolId: sts.tuple(() => [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]),
            /**
             * The account ID of the pool.
             */
            poolAccount: matrixEnjinV1043.AccountId32,
            /**
             * The id of the liquidity tokens that will be minted when assets are added to this
             * pool.
             */
            lpToken: matrixEnjinV1043.LpTokenId,
        })
    ),
}

export const liquidityAdded = {
    name: 'AssetConversion.LiquidityAdded',
    /**
     * A successful call of the `AddLiquidity` extrinsic will create this event.
     */
    matrixEnjinV1043: new EventType(
        'AssetConversion.LiquidityAdded',
        sts.struct({
            /**
             * The account that the liquidity was taken from.
             */
            who: matrixEnjinV1043.AccountId32,
            /**
             * The account that the liquidity tokens were minted to.
             */
            mintTo: matrixEnjinV1043.AccountId32,
            /**
             * The pool id of the pool that the liquidity was added to.
             */
            poolId: sts.tuple(() => [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]),
            /**
             * The amount of the first asset that was added to the pool.
             */
            amount1Provided: sts.bigint(),
            /**
             * The amount of the second asset that was added to the pool.
             */
            amount2Provided: sts.bigint(),
            /**
             * The id of the lp token that was minted.
             */
            lpToken: matrixEnjinV1043.LpTokenId,
            /**
             * The amount of lp tokens that were minted of that id.
             */
            lpTokenMinted: sts.bigint(),
        })
    ),
}

export const liquidityRemoved = {
    name: 'AssetConversion.LiquidityRemoved',
    /**
     * A successful call of the `RemoveLiquidity` extrinsic will create this event.
     */
    matrixEnjinV1043: new EventType(
        'AssetConversion.LiquidityRemoved',
        sts.struct({
            /**
             * The account that the liquidity tokens were burned from.
             */
            who: matrixEnjinV1043.AccountId32,
            /**
             * The account that the assets were transferred to.
             */
            withdrawTo: matrixEnjinV1043.AccountId32,
            /**
             * The pool id that the liquidity was removed from.
             */
            poolId: sts.tuple(() => [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]),
            /**
             * The amount of the first asset that was removed from the pool.
             */
            amount1: sts.bigint(),
            /**
             * The amount of the second asset that was removed from the pool.
             */
            amount2: sts.bigint(),
            /**
             * The id of the lp token that was burned.
             */
            lpToken: matrixEnjinV1043.LpTokenId,
            /**
             * The amount of lp tokens that were burned of that id.
             */
            lpTokenBurned: sts.bigint(),
            /**
             * Liquidity withdrawal fee (%).
             */
            withdrawalFee: matrixEnjinV1043.Permill,
        })
    ),
}

export const swapExecuted = {
    name: 'AssetConversion.SwapExecuted',
    /**
     * Assets have been converted from one to another. Both `SwapExactTokenForToken`
     * and `SwapTokenForExactToken` will generate this event.
     */
    matrixEnjinV1043: new EventType(
        'AssetConversion.SwapExecuted',
        sts.struct({
            /**
             * Which account was the instigator of the swap.
             */
            who: matrixEnjinV1043.AccountId32,
            /**
             * The account that the assets were transferred to.
             */
            sendTo: matrixEnjinV1043.AccountId32,
            /**
             * The amount of the first asset that was swapped.
             */
            amountIn: sts.bigint(),
            /**
             * The amount of the second asset that was received.
             */
            amountOut: sts.bigint(),
            /**
             * The route of asset IDs with amounts that the swap went through.
             * E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
             */
            path: sts.array(() => sts.tuple(() => [matrixEnjinV1043.AssetId, sts.bigint()])),
        })
    ),
}

export const swapCreditExecuted = {
    name: 'AssetConversion.SwapCreditExecuted',
    /**
     * Assets have been converted from one to another.
     */
    matrixEnjinV1043: new EventType(
        'AssetConversion.SwapCreditExecuted',
        sts.struct({
            /**
             * The amount of the first asset that was swapped.
             */
            amountIn: sts.bigint(),
            /**
             * The amount of the second asset that was received.
             */
            amountOut: sts.bigint(),
            /**
             * The route of asset IDs with amounts that the swap went through.
             * E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
             */
            path: sts.array(() => sts.tuple(() => [matrixEnjinV1043.AssetId, sts.bigint()])),
        })
    ),
}

export const touched = {
    name: 'AssetConversion.Touched',
    /**
     * Pool has been touched in order to fulfill operational requirements.
     */
    matrixEnjinV1043: new EventType(
        'AssetConversion.Touched',
        sts.struct({
            /**
             * The ID of the pool.
             */
            poolId: sts.tuple(() => [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]),
            /**
             * The account initiating the touch.
             */
            who: matrixEnjinV1043.AccountId32,
        })
    ),
}
