'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ensureUpdated =
    exports.unrequestPreimage =
    exports.requestPreimage =
    exports.unnotePreimage =
    exports.notePreimage =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.notePreimage = {
    name: 'Preimage.note_preimage',
    /**
     * Register a preimage on-chain.
     *
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    matrixEnjinV603: new support_1.CallType(
        'Preimage.note_preimage',
        support_1.sts.struct({
            bytes: support_1.sts.bytes(),
        })
    ),
}
exports.unnotePreimage = {
    name: 'Preimage.unnote_preimage',
    /**
     * Clear an unrequested preimage from the runtime storage.
     *
     * If `len` is provided, then it will be a much cheaper operation.
     *
     * - `hash`: The hash of the preimage to be removed from the store.
     * - `len`: The length of the preimage of `hash`.
     */
    matrixEnjinV603: new support_1.CallType(
        'Preimage.unnote_preimage',
        support_1.sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.requestPreimage = {
    name: 'Preimage.request_preimage',
    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     *
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    matrixEnjinV603: new support_1.CallType(
        'Preimage.request_preimage',
        support_1.sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.unrequestPreimage = {
    name: 'Preimage.unrequest_preimage',
    /**
     * Clear a previously made request for a preimage.
     *
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    matrixEnjinV603: new support_1.CallType(
        'Preimage.unrequest_preimage',
        support_1.sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
exports.ensureUpdated = {
    name: 'Preimage.ensure_updated',
    /**
     * Ensure that the a bulk of pre-images is upgraded.
     *
     * The caller pays no fee if at least 90% of pre-images were successfully updated.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Preimage.ensure_updated',
        support_1.sts.struct({
            hashes: support_1.sts.array(function () {
                return matrixEnjinV1012.H256
            }),
        })
    ),
}
