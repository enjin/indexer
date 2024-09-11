import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const transferToParachain =  {
    name: 'MatrixXcm.transfer_to_parachain',
    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    matrixEnjinV603: new CallType(
        'MatrixXcm.transfer_to_parachain',
        sts.struct({
            paraId: matrixEnjinV603.ParachainId,
            beneficiary: matrixEnjinV603.Account,
            amount: sts.bigint(),
            destWeight: sts.option(() => sts.bigint()),
        })
    ),
}

export const transferAssetToParachain =  {
    name: 'MatrixXcm.transfer_asset_to_parachain',
    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    matrixEnjinV603: new CallType(
        'MatrixXcm.transfer_asset_to_parachain',
        sts.struct({
            paraId: matrixEnjinV603.ParachainId,
            beneficiary: matrixEnjinV603.Account,
            currencyId: matrixEnjinV603.AssetId,
            amount: sts.bigint(),
            destWeight: sts.option(() => sts.bigint()),
        })
    ),
}

export const transferAssetWithFee =  {
    name: 'MatrixXcm.transfer_asset_with_fee',
    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    matrixEnjinV603: new CallType(
        'MatrixXcm.transfer_asset_with_fee',
        sts.struct({
            assetPair: matrixEnjinV603.CurrencyIdAmountPair,
            feePair: matrixEnjinV603.CurrencyIdAmountPair,
            paraId: matrixEnjinV603.ParachainId,
            beneficiary: matrixEnjinV603.Account,
            destWeight: sts.option(() => sts.bigint()),
        })
    ),
}

export const forceSetMinimumWeight =  {
    name: 'MatrixXcm.force_set_minimum_weight',
    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    matrixEnjinV603: new CallType(
        'MatrixXcm.force_set_minimum_weight',
        sts.struct({
            xcmCall: matrixEnjinV603.XcmOperation,
            xcmWeightFeeMisc: matrixEnjinV603.MinimumWeightFeePair,
        })
    ),
    /**
     * Used by governance/sudo in order to set the minimum weight for an [XcmOperation](https://s3.ap-southeast-1.amazonaws.com/docs.rust.dev.efinity.io/efinity_pallet_xcm/enum.XcmOperation.html).
     * Primarily used for chains like Statemint when transferring multiple assets as a way to determine the correct fee for the fee-payment asset. Emits the [`MinimumWeightUpdated`](https://s3.ap-southeast-1.amazonaws.com/docs.rust.dev.efinity.io/efinity_pallet_xcm/pallet/enum.Event.html#variant.MinimumWeightUpdated) event.
     */
    matrixEnjinV1012: new CallType(
        'MatrixXcm.force_set_minimum_weight',
        sts.struct({
            xcmCall: matrixEnjinV1012.XcmOperation,
            xcmWeightFeeMisc: matrixEnjinV1012.MinimumWeightFeePair,
        })
    ),
    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    v604: new CallType(
        'MatrixXcm.force_set_minimum_weight',
        sts.struct({
            xcmCall: v604.XcmOperation,
            xcmWeightFeeMisc: v604.MinimumWeightFeePair,
        })
    ),
    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    v1010: new CallType(
        'MatrixXcm.force_set_minimum_weight',
        sts.struct({
            xcmCall: v1010.XcmOperation,
            xcmWeightFeeMisc: v1010.MinimumWeightFeePair,
        })
    ),
}
