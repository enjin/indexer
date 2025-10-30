import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const lpFee = {
    /**
     *  A % the liquidity providers will take of every swap. Represents 10ths of a percent.
     */
    matrixV1030: new ConstantType('AssetConversion.LPFee', sts.number()),
}

export const poolSetupFee = {
    /**
     *  A one-time fee to setup the pool.
     */
    matrixV1030: new ConstantType('AssetConversion.PoolSetupFee', sts.bigint()),
}

export const poolSetupFeeAsset = {
    /**
     *  Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`].
     */
    matrixV1030: new ConstantType('AssetConversion.PoolSetupFeeAsset', matrixV1030.AssetId),
}

export const liquidityWithdrawalFee = {
    /**
     *  A fee to withdraw the liquidity.
     */
    matrixV1030: new ConstantType('AssetConversion.LiquidityWithdrawalFee', matrixV1030.Permill),
}

export const mintMinLiquidity = {
    /**
     *  The minimum LP token amount that could be minted. Ameliorates rounding errors.
     */
    matrixV1030: new ConstantType('AssetConversion.MintMinLiquidity', sts.bigint()),
}

export const maxSwapPathLength = {
    /**
     *  The max number of hops in a swap.
     */
    matrixV1030: new ConstantType('AssetConversion.MaxSwapPathLength', sts.number()),
}

export const palletId = {
    /**
     *  The pallet's id, used for deriving its sovereign account ID.
     */
    matrixV1030: new ConstantType('AssetConversion.PalletId', matrixV1030.PalletId),
}
