'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.forceApprove = void 0
var support_1 = require('../support')
exports.forceApprove = {
    name: 'Initializer.force_approve',
    /**
     * Issue a signal to the consensus engine to forcibly act as though all parachain
     * blocks in all relay chain blocks up to and including the given number in the current
     * chain are valid and should be finalized.
     */
    enjinV100: new support_1.CallType(
        'Initializer.force_approve',
        support_1.sts.struct({
            upTo: support_1.sts.number(),
        })
    ),
}
