'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.slotDuration = void 0
var support_1 = require('../support')
exports.slotDuration = {
    /**
     *  The slot duration Aura should run with, expressed in milliseconds.
     *  The effective value of this type should not change while the chain is running.
     *
     *  For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
     */
    matrixEnjinV1022: new support_1.ConstantType('Aura.SlotDuration', support_1.sts.bigint()),
}
