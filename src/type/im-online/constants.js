'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.unsignedPriority = void 0
var support_1 = require('../support')
exports.unsignedPriority = {
    /**
     *  A configuration for base priority of unsigned transactions.
     *
     *  This is exposed so that it can be tuned for particular runtime, when
     *  multiple pallets send unsigned transactions.
     */
    enjinV100: new support_1.ConstantType('ImOnline.UnsignedPriority', support_1.sts.bigint()),
}
