'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pausedExtrinsics = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.pausedExtrinsics = {
    /**
     *  Paused extrinsics map
     *
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ExtrinsicPause.PausedExtrinsics',
        'Optional',
        [matrixEnjinV603.ExtrinsicInfo],
        support_1.sts.unit()
    ),
}
