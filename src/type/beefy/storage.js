'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.genesisBlock =
    exports.setIdSession =
    exports.nextAuthorities =
    exports.validatorSetId =
    exports.authorities =
        void 0
var support_1 = require('../support')
exports.authorities = {
    /**
     *  The current authorities set
     */
    enjinV100: new support_1.StorageType(
        'Beefy.Authorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.validatorSetId = {
    /**
     *  The current validator set id
     */
    enjinV100: new support_1.StorageType('Beefy.ValidatorSetId', 'Default', [], support_1.sts.bigint()),
}
exports.nextAuthorities = {
    /**
     *  Authorities set scheduled to be used with the next session
     */
    enjinV100: new support_1.StorageType(
        'Beefy.NextAuthorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.setIdSession = {
    /**
     *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
     *  members were responsible.
     *
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     *
     *  TWOX-NOTE: `ValidatorSetId` is not under user control.
     */
    enjinV100: new support_1.StorageType(
        'Beefy.SetIdSession',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.number()
    ),
}
exports.genesisBlock = {
    /**
     *  Block number where BEEFY consensus is enabled/started.
     *  If changing this, make sure `Self::ValidatorSetId` is also reset to
     *  `GENESIS_AUTHORITY_SET_ID` in the state of the new block number configured here.
     */
    enjinV100: new support_1.StorageType(
        'Beefy.GenesisBlock',
        'Default',
        [],
        support_1.sts.option(function () {
            return support_1.sts.number()
        })
    ),
}
