'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.multiTokensMigrationPalletsToPause = exports.migrationMaxKeys = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.migrationMaxKeys = {
    /**
     *  Maximum number of accounts that can be migrated at once
     */
    matrixEnjinV603: new support_1.ConstantType('MultiTokensMigration.MigrationMaxKeys', support_1.sts.number()),
}
exports.multiTokensMigrationPalletsToPause = {
    /**
     *  List of extrinsics to pause during multi block migration (this pallet is excluded)
     */
    matrixEnjinV603: new support_1.ConstantType(
        'MultiTokensMigration.MultiTokensMigrationPalletsToPause',
        support_1.sts.array(function () {
            return matrixEnjinV603.ExtrinsicInfo
        })
    ),
}
