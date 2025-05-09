'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.serviceOverweight = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.serviceOverweight = {
    name: 'DmpQueue.service_overweight',
    /**
     * Service a single overweight message.
     */
    matrixEnjinV603: new support_1.CallType(
        'DmpQueue.service_overweight',
        support_1.sts.struct({
            index: support_1.sts.bigint(),
            weightLimit: matrixEnjinV603.Weight,
        })
    ),
}
