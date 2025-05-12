'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.currentSlot = exports.authorities = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.authorities = {
    /**
     *  The current authority set.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Aura.Authorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1012.Public
        })
    ),
}
exports.currentSlot = {
    /**
     *  The current slot of this block.
     *
     *  This will be set in `on_initialize`.
     */
    matrixEnjinV1012: new support_1.StorageType('Aura.CurrentSlot', 'Default', [], matrixEnjinV1012.Slot),
}
