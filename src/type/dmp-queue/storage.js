'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.migrationStatus =
    exports.counterForOverweight =
    exports.overweight =
    exports.pages =
    exports.pageIndex =
    exports.configuration =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.configuration = {
    /**
     *  The configuration.
     */
    matrixEnjinV603: new support_1.StorageType('DmpQueue.Configuration', 'Default', [], matrixEnjinV603.ConfigData),
}
exports.pageIndex = {
    /**
     *  The page index.
     */
    matrixEnjinV603: new support_1.StorageType('DmpQueue.PageIndex', 'Default', [], matrixEnjinV603.PageIndexData),
}
exports.pages = {
    /**
     *  The queue pages.
     */
    matrixEnjinV603: new support_1.StorageType(
        'DmpQueue.Pages',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.bytes()]
            })
        })
    ),
}
exports.overweight = {
    /**
     *  The overweight messages.
     */
    matrixEnjinV603: new support_1.StorageType(
        'DmpQueue.Overweight',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.bytes()]
        })
    ),
}
exports.counterForOverweight = {
    /**
     * Counter for the related counted storage map
     */
    matrixEnjinV603: new support_1.StorageType('DmpQueue.CounterForOverweight', 'Default', [], support_1.sts.number()),
}
exports.migrationStatus = {
    /**
     *  The migration state of this pallet.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'DmpQueue.MigrationStatus',
        'Default',
        [],
        matrixEnjinV1012.MigrationState
    ),
}
