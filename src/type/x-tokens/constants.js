'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.rateLimiterId = exports.baseXcmWeight = exports.selfLocation = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.selfLocation = {
    /**
     *  Self chain location.
     */
    matrixEnjinV603: new support_1.ConstantType('XTokens.SelfLocation', matrixEnjinV603.V3MultiLocation),
    /**
     *  Self chain location.
     */
    matrixEnjinV1012: new support_1.ConstantType('XTokens.SelfLocation', matrixEnjinV1012.V4Location),
    /**
     *  Self chain location.
     */
    matrixV500: new support_1.ConstantType('XTokens.SelfLocation', matrixV500.V3MultiLocation),
    /**
     *  Self chain location.
     */
    matrixV1010: new support_1.ConstantType('XTokens.SelfLocation', matrixV1010.V4Location),
}
exports.baseXcmWeight = {
    /**
     *  Base XCM weight.
     *
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    matrixEnjinV603: new support_1.ConstantType('XTokens.BaseXcmWeight', matrixEnjinV603.Weight),
}
exports.rateLimiterId = {
    /**
     *  The id of the RateLimiter.
     */
    matrixEnjinV1012: new support_1.ConstantType('XTokens.RateLimiterId', support_1.sts.unit()),
}
