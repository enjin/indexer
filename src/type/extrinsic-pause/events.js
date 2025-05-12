'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.extrinsicResumed = exports.extrinsicPaused = exports.palletResumed = exports.palletPaused = void 0
var support_1 = require('../support')
exports.palletPaused = {
    name: 'ExtrinsicPause.PalletPaused',
    /**
     * All pallet extrinsics are paused.
     */
    matrixEnjinV603: new support_1.EventType(
        'ExtrinsicPause.PalletPaused',
        support_1.sts.struct({
            palletName: support_1.sts.bytes(),
        })
    ),
}
exports.palletResumed = {
    name: 'ExtrinsicPause.PalletResumed',
    /**
     * All pallet extrinsics are resumed.
     */
    matrixEnjinV603: new support_1.EventType(
        'ExtrinsicPause.PalletResumed',
        support_1.sts.struct({
            palletName: support_1.sts.bytes(),
        })
    ),
}
exports.extrinsicPaused = {
    name: 'ExtrinsicPause.ExtrinsicPaused',
    /**
     * Extrinsic is paused.
     */
    matrixEnjinV603: new support_1.EventType(
        'ExtrinsicPause.ExtrinsicPaused',
        support_1.sts.struct({
            palletName: support_1.sts.bytes(),
            extrinsicName: support_1.sts.bytes(),
        })
    ),
}
exports.extrinsicResumed = {
    name: 'ExtrinsicPause.ExtrinsicResumed',
    /**
     * Extrinsic is resumed
     */
    matrixEnjinV603: new support_1.EventType(
        'ExtrinsicPause.ExtrinsicResumed',
        support_1.sts.struct({
            palletName: support_1.sts.bytes(),
            extrinsicName: support_1.sts.bytes(),
        })
    ),
}
