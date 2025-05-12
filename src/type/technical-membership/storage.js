'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.prime = exports.members = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.members = {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    matrixEnjinV603: new support_1.StorageType(
        'TechnicalMembership.Members',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.AccountId32
        })
    ),
}
exports.prime = {
    /**
     *  The current prime member, if one exists.
     */
    matrixEnjinV603: new support_1.StorageType(
        'TechnicalMembership.Prime',
        'Optional',
        [],
        matrixEnjinV603.AccountId32
    ),
}
