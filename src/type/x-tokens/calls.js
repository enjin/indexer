'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.transferMultiassets =
    exports.transferMulticurrencies =
    exports.transferMultiassetWithFee =
    exports.transferWithFee =
    exports.transferMultiasset =
    exports.transfer =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.transfer = {
    name: 'XTokens.transfer',
    /**
     * Transfer native currencies.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new support_1.CallType(
        'XTokens.transfer',
        support_1.sts.struct({
            currencyId: matrixEnjinV603.AssetId,
            amount: support_1.sts.bigint(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
    /**
     * Transfer native currencies.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV1012: new support_1.CallType(
        'XTokens.transfer',
        support_1.sts.struct({
            currencyId: matrixEnjinV1012.AssetId,
            amount: support_1.sts.bigint(),
            dest: matrixEnjinV1012.VersionedLocation,
            destWeightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer native currencies.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV500: new support_1.CallType(
        'XTokens.transfer',
        support_1.sts.struct({
            currencyId: matrixV500.AssetId,
            amount: support_1.sts.bigint(),
            dest: matrixV500.VersionedMultiLocation,
            destWeightLimit: matrixV500.V3WeightLimit,
        })
    ),
    /**
     * Transfer native currencies.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV1010: new support_1.CallType(
        'XTokens.transfer',
        support_1.sts.struct({
            currencyId: matrixV1010.AssetId,
            amount: support_1.sts.bigint(),
            dest: matrixV1010.VersionedLocation,
            destWeightLimit: matrixV1010.V3WeightLimit,
        })
    ),
}
exports.transferMultiasset = {
    name: 'XTokens.transfer_multiasset',
    /**
     * Transfer `MultiAsset`.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new support_1.CallType(
        'XTokens.transfer_multiasset',
        support_1.sts.struct({
            asset: matrixEnjinV603.VersionedMultiAsset,
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
    /**
     * Transfer `Asset`.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV1012: new support_1.CallType(
        'XTokens.transfer_multiasset',
        support_1.sts.struct({
            asset: matrixEnjinV1012.VersionedAsset,
            dest: matrixEnjinV1012.VersionedLocation,
            destWeightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer `MultiAsset`.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV500: new support_1.CallType(
        'XTokens.transfer_multiasset',
        support_1.sts.struct({
            asset: matrixV500.VersionedMultiAsset,
            dest: matrixV500.VersionedMultiLocation,
            destWeightLimit: matrixV500.V3WeightLimit,
        })
    ),
    /**
     * Transfer `Asset`.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV1010: new support_1.CallType(
        'XTokens.transfer_multiasset',
        support_1.sts.struct({
            asset: matrixV1010.VersionedAsset,
            dest: matrixV1010.VersionedLocation,
            destWeightLimit: matrixV1010.V3WeightLimit,
        })
    ),
}
exports.transferWithFee = {
    name: 'XTokens.transfer_with_fee',
    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new support_1.CallType(
        'XTokens.transfer_with_fee',
        support_1.sts.struct({
            currencyId: matrixEnjinV603.AssetId,
            amount: support_1.sts.bigint(),
            fee: support_1.sts.bigint(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV1012: new support_1.CallType(
        'XTokens.transfer_with_fee',
        support_1.sts.struct({
            currencyId: matrixEnjinV1012.AssetId,
            amount: support_1.sts.bigint(),
            fee: support_1.sts.bigint(),
            dest: matrixEnjinV1012.VersionedLocation,
            destWeightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV500: new support_1.CallType(
        'XTokens.transfer_with_fee',
        support_1.sts.struct({
            currencyId: matrixV500.AssetId,
            amount: support_1.sts.bigint(),
            fee: support_1.sts.bigint(),
            dest: matrixV500.VersionedMultiLocation,
            destWeightLimit: matrixV500.V3WeightLimit,
        })
    ),
    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV1010: new support_1.CallType(
        'XTokens.transfer_with_fee',
        support_1.sts.struct({
            currencyId: matrixV1010.AssetId,
            amount: support_1.sts.bigint(),
            fee: support_1.sts.bigint(),
            dest: matrixV1010.VersionedLocation,
            destWeightLimit: matrixV1010.V3WeightLimit,
        })
    ),
}
exports.transferMultiassetWithFee = {
    name: 'XTokens.transfer_multiasset_with_fee',
    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new support_1.CallType(
        'XTokens.transfer_multiasset_with_fee',
        support_1.sts.struct({
            asset: matrixEnjinV603.VersionedMultiAsset,
            fee: matrixEnjinV603.VersionedMultiAsset,
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
    /**
     * Transfer `Asset` specifying the fee and amount as separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the Asset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `Location` id.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV1012: new support_1.CallType(
        'XTokens.transfer_multiasset_with_fee',
        support_1.sts.struct({
            asset: matrixEnjinV1012.VersionedAsset,
            fee: matrixEnjinV1012.VersionedAsset,
            dest: matrixEnjinV1012.VersionedLocation,
            destWeightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV500: new support_1.CallType(
        'XTokens.transfer_multiasset_with_fee',
        support_1.sts.struct({
            asset: matrixV500.VersionedMultiAsset,
            fee: matrixV500.VersionedMultiAsset,
            dest: matrixV500.VersionedMultiLocation,
            destWeightLimit: matrixV500.V3WeightLimit,
        })
    ),
    /**
     * Transfer `Asset` specifying the fee and amount as separate.
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee` is the Asset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `Location` id.
     *
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV1010: new support_1.CallType(
        'XTokens.transfer_multiasset_with_fee',
        support_1.sts.struct({
            asset: matrixV1010.VersionedAsset,
            fee: matrixV1010.VersionedAsset,
            dest: matrixV1010.VersionedLocation,
            destWeightLimit: matrixV1010.V3WeightLimit,
        })
    ),
}
exports.transferMulticurrencies = {
    name: 'XTokens.transfer_multicurrencies',
    /**
     * Transfer several currencies specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new support_1.CallType(
        'XTokens.transfer_multicurrencies',
        support_1.sts.struct({
            currencies: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [matrixEnjinV603.AssetId, support_1.sts.bigint()]
                })
            }),
            feeItem: support_1.sts.number(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
    /**
     * Transfer several currencies specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV1012: new support_1.CallType(
        'XTokens.transfer_multicurrencies',
        support_1.sts.struct({
            currencies: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [matrixEnjinV1012.AssetId, support_1.sts.bigint()]
                })
            }),
            feeItem: support_1.sts.number(),
            dest: matrixEnjinV1012.VersionedLocation,
            destWeightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer several currencies specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV500: new support_1.CallType(
        'XTokens.transfer_multicurrencies',
        support_1.sts.struct({
            currencies: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [matrixV500.AssetId, support_1.sts.bigint()]
                })
            }),
            feeItem: support_1.sts.number(),
            dest: matrixV500.VersionedMultiLocation,
            destWeightLimit: matrixV500.V3WeightLimit,
        })
    ),
    /**
     * Transfer several currencies specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV1010: new support_1.CallType(
        'XTokens.transfer_multicurrencies',
        support_1.sts.struct({
            currencies: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [matrixV1010.AssetId, support_1.sts.bigint()]
                })
            }),
            feeItem: support_1.sts.number(),
            dest: matrixV1010.VersionedLocation,
            destWeightLimit: matrixV1010.V3WeightLimit,
        })
    ),
}
exports.transferMultiassets = {
    name: 'XTokens.transfer_multiassets',
    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new support_1.CallType(
        'XTokens.transfer_multiassets',
        support_1.sts.struct({
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeItem: support_1.sts.number(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
    /**
     * Transfer several `Asset` specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the Assets that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV1012: new support_1.CallType(
        'XTokens.transfer_multiassets',
        support_1.sts.struct({
            assets: matrixEnjinV1012.VersionedAssets,
            feeItem: support_1.sts.number(),
            dest: matrixEnjinV1012.VersionedLocation,
            destWeightLimit: matrixEnjinV1012.V3WeightLimit,
        })
    ),
    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV500: new support_1.CallType(
        'XTokens.transfer_multiassets',
        support_1.sts.struct({
            assets: matrixV500.VersionedMultiAssets,
            feeItem: support_1.sts.number(),
            dest: matrixV500.VersionedMultiLocation,
            destWeightLimit: matrixV500.V3WeightLimit,
        })
    ),
    /**
     * Transfer several `Asset` specifying the item to be used as fee
     *
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     *
     * `fee_item` is index of the Assets that we want to use for
     * payment
     *
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixV1010: new support_1.CallType(
        'XTokens.transfer_multiassets',
        support_1.sts.struct({
            assets: matrixV1010.VersionedAssets,
            feeItem: support_1.sts.number(),
            dest: matrixV1010.VersionedLocation,
            destWeightLimit: matrixV1010.V3WeightLimit,
        })
    ),
}
