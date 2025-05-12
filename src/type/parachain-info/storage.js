'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.parachainId = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.parachainId = {
    matrixEnjinV603: new support_1.StorageType('ParachainInfo.ParachainId', 'Default', [], matrixEnjinV603.Id),
}
