'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.enter = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.enter = {
    name: 'ParaInherent.enter',
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    enjinV100: new support_1.CallType(
        'ParaInherent.enter',
        support_1.sts.struct({
            data: enjinV100.V4InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    enjinV1032: new support_1.CallType(
        'ParaInherent.enter',
        support_1.sts.struct({
            data: enjinV1032.V6InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v100: new support_1.CallType(
        'ParaInherent.enter',
        support_1.sts.struct({
            data: v100.V2InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v1030: new support_1.CallType(
        'ParaInherent.enter',
        support_1.sts.struct({
            data: v1030.V6InherentData,
        })
    ),
}
