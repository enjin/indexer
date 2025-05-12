'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.selfParaId = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.selfParaId = {
    /**
     *  Returns the parachain ID we are running with.
     */
    matrixEnjinV1012: new support_1.ConstantType('ParachainSystem.SelfParaId', matrixEnjinV1012.Id),
}
