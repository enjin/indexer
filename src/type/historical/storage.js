'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.storedRange = exports.historicalSessions = void 0
var support_1 = require('../support')
var enjinV1032 = require('../enjinV1032')
exports.historicalSessions = {
    /**
     *  Mapping from historical session indices to session-data root hash and validator count.
     */
    enjinV1032: new support_1.StorageType(
        'Historical.HistoricalSessions',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.tuple(function () {
            return [enjinV1032.H256, support_1.sts.number()]
        })
    ),
}
exports.storedRange = {
    /**
     *  The range of historical sessions we store. [first, last)
     */
    enjinV1032: new support_1.StorageType(
        'Historical.StoredRange',
        'Optional',
        [],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
