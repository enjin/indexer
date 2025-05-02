'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxScheduledPerBlock = exports.maximumWeight = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.maximumWeight = {
    /**
     *  The maximum weight that may be scheduled per block for any dispatchables.
     */
    matrixEnjinV603: new support_1.ConstantType('Scheduler.MaximumWeight', matrixEnjinV603.Weight),
}
exports.maxScheduledPerBlock = {
    /**
     *  The maximum number of scheduled calls in the queue for a single block.
     *
     *  NOTE:
     *  + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
     *  higher limit under `runtime-benchmarks` feature.
     */
    matrixEnjinV603: new support_1.ConstantType('Scheduler.MaxScheduledPerBlock', support_1.sts.number()),
}
