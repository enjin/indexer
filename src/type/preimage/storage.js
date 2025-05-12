'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.requestStatusFor = exports.preimageFor = exports.statusFor = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.statusFor = {
    /**
     *  The request status of a given hash.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Preimage.StatusFor',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.RequestStatus
    ),
}
exports.preimageFor = {
    matrixEnjinV603: new support_1.StorageType(
        'Preimage.PreimageFor',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [matrixEnjinV603.H256, support_1.sts.number()]
            }),
        ],
        support_1.sts.bytes()
    ),
}
exports.requestStatusFor = {
    /**
     *  The request status of a given hash.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Preimage.RequestStatusFor',
        'Optional',
        [matrixEnjinV1012.H256],
        matrixEnjinV1012.RequestStatus
    ),
}
