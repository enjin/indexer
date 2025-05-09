'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.minimumPeriod = void 0
var support_1 = require('../support')
exports.minimumPeriod = {
    /**
     *  The minimum period between blocks. Beware that this is different to the *expected*
     *  period that the block production apparatus provides. Your chosen consensus system will
     *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
     *  double this period on default settings.
     */
    matrixEnjinV603: new support_1.ConstantType('Timestamp.MinimumPeriod', support_1.sts.bigint()),
}
