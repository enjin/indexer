'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.forceSetMinimumWeight =
    exports.transferAssetWithFee =
    exports.transferAssetToParachain =
    exports.transferToParachain =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
exports.transferToParachain = {
    name: 'EfinityXcm.transfer_to_parachain',
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
    matrixV500: new support_1.CallType(
        'EfinityXcm.transfer_to_parachain',
        support_1.sts.struct({
            paraId: matrixV500.ParachainId,
            beneficiary: matrixV500.Account,
            amount: support_1.sts.bigint(),
            destWeight: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.transferAssetToParachain = {
    name: 'EfinityXcm.transfer_asset_to_parachain',
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
    matrixV500: new support_1.CallType(
        'EfinityXcm.transfer_asset_to_parachain',
        support_1.sts.struct({
            paraId: matrixV500.ParachainId,
            beneficiary: matrixV500.Account,
            currencyId: matrixV500.AssetId,
            amount: support_1.sts.bigint(),
            destWeight: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.transferAssetWithFee = {
    name: 'EfinityXcm.transfer_asset_with_fee',
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
    matrixV500: new support_1.CallType(
        'EfinityXcm.transfer_asset_with_fee',
        support_1.sts.struct({
            assetPair: matrixV500.CurrencyIdAmountPair,
            feePair: matrixV500.CurrencyIdAmountPair,
            paraId: matrixV500.ParachainId,
            beneficiary: matrixV500.Account,
            destWeight: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.forceSetMinimumWeight = {
    name: 'EfinityXcm.force_set_minimum_weight',
    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    matrixV500: new support_1.CallType(
        'EfinityXcm.force_set_minimum_weight',
        support_1.sts.struct({
            xcmCall: matrixV500.XcmOperation,
            xcmWeightFeeMisc: matrixV500.MinimumWeightFeePair,
        })
    ),
}
