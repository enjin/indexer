'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.authorities =
    exports.setIdSession =
    exports.currentSetId =
    exports.stalled =
    exports.nextForced =
    exports.pendingChange =
    exports.state =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.state = {
    /**
     *  State of the current authority set.
     */
    enjinV100: new support_1.StorageType('Grandpa.State', 'Default', [], enjinV100.StoredState),
}
exports.pendingChange = {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    enjinV100: new support_1.StorageType('Grandpa.PendingChange', 'Optional', [], enjinV100.StoredPendingChange),
}
exports.nextForced = {
    /**
     *  next block number where we can force a change.
     */
    enjinV100: new support_1.StorageType('Grandpa.NextForced', 'Optional', [], support_1.sts.number()),
}
exports.stalled = {
    /**
     *  `true` if we are currently stalled.
     */
    enjinV100: new support_1.StorageType(
        'Grandpa.Stalled',
        'Optional',
        [],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
exports.currentSetId = {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    enjinV100: new support_1.StorageType('Grandpa.CurrentSetId', 'Default', [], support_1.sts.bigint()),
}
exports.setIdSession = {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     *
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     *
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    enjinV100: new support_1.StorageType(
        'Grandpa.SetIdSession',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.number()
    ),
}
exports.authorities = {
    /**
     *  The current list of authorities.
     */
    enjinV1032: new support_1.StorageType(
        'Grandpa.Authorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV1032.Public, support_1.sts.bigint()]
            })
        })
    ),
}
