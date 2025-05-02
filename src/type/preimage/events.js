'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.cleared = exports.requested = exports.noted = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.noted = {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    matrixEnjinV603: new support_1.EventType(
        'Preimage.Noted',
        support_1.sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.requested = {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    matrixEnjinV603: new support_1.EventType(
        'Preimage.Requested',
        support_1.sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.cleared = {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    matrixEnjinV603: new support_1.EventType(
        'Preimage.Cleared',
        support_1.sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
