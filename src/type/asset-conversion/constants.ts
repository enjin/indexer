import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV1043 from '../matrixEnjinV1043'

export const lpFee = {
    /**
     *  The fraction of every swap that the liquidity providers take as a fee.
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.LPFee', matrixEnjinV1043.Permill),
}

export const poolSetupFee = {
    /**
     *  A one-time fee to setup the pool.
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.PoolSetupFee', sts.bigint()),
}

export const poolSetupFeeAsset = {
    /**
     *  Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`].
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.PoolSetupFeeAsset', matrixEnjinV1043.AssetId),
}

export const liquidityWithdrawalFee = {
    /**
     *  A fee to withdraw the liquidity.
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.LiquidityWithdrawalFee', matrixEnjinV1043.Permill),
}

export const mintMinLiquidity = {
    /**
     *  The minimum LP token amount that could be minted. Ameliorates rounding errors.
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.MintMinLiquidity', sts.bigint()),
}

export const maxSwapPathLength = {
    /**
     *  The max number of hops in a swap.
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.MaxSwapPathLength', sts.number()),
}

export const palletId = {
    /**
     *  The pallet's id, used for deriving its sovereign account ID.
     */
    matrixEnjinV1043: new ConstantType('AssetConversion.PalletId', matrixEnjinV1043.PalletId),
}
