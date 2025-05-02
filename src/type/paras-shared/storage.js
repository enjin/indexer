'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.allowedRelayParents =
    exports.activeValidatorKeys =
    exports.activeValidatorIndices =
    exports.currentSessionIndex =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.currentSessionIndex = {
    /**
     *  The current session index.
     */
    enjinV100: new support_1.StorageType('ParasShared.CurrentSessionIndex', 'Default', [], support_1.sts.number()),
}
exports.activeValidatorIndices = {
    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    enjinV100: new support_1.StorageType(
        'ParasShared.ActiveValidatorIndices',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.V4ValidatorIndex
        })
    ),
}
exports.activeValidatorKeys = {
    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    enjinV100: new support_1.StorageType(
        'ParasShared.ActiveValidatorKeys',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.allowedRelayParents = {
    /**
     *  All allowed relay-parents.
     */
    enjinV1032: new support_1.StorageType(
        'ParasShared.AllowedRelayParents',
        'Default',
        [],
        enjinV1032.AllowedRelayParentsTracker
    ),
}
