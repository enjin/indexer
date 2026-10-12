import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const lpFee = {
    /**
     *  The fraction of every swap that the liquidity providers take as a fee.
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.LPFee', matrixEnjinV1041.Permill),
}

export const poolSetupFee = {
    /**
     *  A one-time fee to setup the pool.
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.PoolSetupFee', sts.bigint()),
}

export const poolSetupFeeAsset = {
    /**
     *  Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`].
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.PoolSetupFeeAsset', matrixEnjinV1041.AssetId),
}

export const liquidityWithdrawalFee = {
    /**
     *  A fee to withdraw the liquidity.
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.LiquidityWithdrawalFee', matrixEnjinV1041.Permill),
}

export const mintMinLiquidity = {
    /**
     *  The minimum LP token amount that could be minted. Ameliorates rounding errors.
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.MintMinLiquidity', sts.bigint()),
}

export const maxSwapPathLength = {
    /**
     *  The max number of hops in a swap.
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.MaxSwapPathLength', sts.number()),
}

export const palletId = {
    /**
     *  The pallet's id, used for deriving its sovereign account ID.
     */
    matrixEnjinV1041: new ConstantType('AssetConversion.PalletId', matrixEnjinV1041.PalletId),
}
