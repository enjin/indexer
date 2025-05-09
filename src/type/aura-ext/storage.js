'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.slotInfo = exports.authorities = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.authorities = {
    /**
     *  Serves as cache for the authorities.
     *
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will
     *  always be updated to the latest AuRa authorities in `on_finalize`.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'AuraExt.Authorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1012.Public
        })
    ),
}
exports.slotInfo = {
    /**
     *  Current slot paired with a number of authored blocks.
     *
     *  Updated on each block initialization.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'AuraExt.SlotInfo',
        'Optional',
        [],
        support_1.sts.tuple(function () {
            return [matrixEnjinV1012.Slot, support_1.sts.number()]
        })
    ),
}
