'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxProposalWeight = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.maxProposalWeight = {
    /**
     *  The maximum weight of a dispatch call that can be proposed and executed.
     */
    matrixEnjinV603: new support_1.ConstantType('Council.MaxProposalWeight', matrixEnjinV603.Weight),
}
