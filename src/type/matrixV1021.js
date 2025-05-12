'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.LastUpdatedKeyStatus = exports.CollectionDepositUpdateStatus = void 0
var support_1 = require('./support')
exports.CollectionDepositUpdateStatus = support_1.sts.struct(function () {
    return {
        collectionId: support_1.sts.bigint(),
        lastUpdatedTokenKey: exports.LastUpdatedKeyStatus,
        lastUpdatedAttributeKey: exports.LastUpdatedKeyStatus,
        calculatedDeposit: support_1.sts.bigint(),
    }
})
exports.LastUpdatedKeyStatus = support_1.sts.closedEnum(function () {
    return {
        Finished: support_1.sts.unit(),
        InProgress: support_1.sts.bytes(),
        NotStarted: support_1.sts.unit(),
    }
})
