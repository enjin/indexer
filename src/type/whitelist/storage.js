'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.whitelistedCall = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.whitelistedCall = {
    enjinV100: new support_1.StorageType(
        'Whitelist.WhitelistedCall',
        'Optional',
        [enjinV100.H256],
        support_1.sts.unit()
    ),
}
