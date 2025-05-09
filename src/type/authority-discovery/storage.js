'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.nextKeys = exports.keys = void 0
var support_1 = require('../support')
exports.keys = {
    /**
     *  Keys of the current authority set.
     */
    enjinV1032: new support_1.StorageType(
        'AuthorityDiscovery.Keys',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.nextKeys = {
    /**
     *  Keys of the next authority set.
     */
    enjinV1032: new support_1.StorageType(
        'AuthorityDiscovery.NextKeys',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
