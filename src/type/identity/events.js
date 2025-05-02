'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.danglingUsernameRemoved =
    exports.primaryUsernameSet =
    exports.preapprovalExpired =
    exports.usernameQueued =
    exports.usernameSet =
    exports.authorityRemoved =
    exports.authorityAdded =
    exports.subIdentityRevoked =
    exports.subIdentityRemoved =
    exports.subIdentityAdded =
    exports.registrarAdded =
    exports.judgementGiven =
    exports.judgementUnrequested =
    exports.judgementRequested =
    exports.identityKilled =
    exports.identityCleared =
    exports.identitySet =
        void 0
var support_1 = require('../support')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.identitySet = {
    name: 'Identity.IdentitySet',
    /**
     * A name was set or reset (which will remove all judgements).
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.IdentitySet',
        support_1.sts.struct({
            who: matrixEnjinV1000.AccountId32,
        })
    ),
}
exports.identityCleared = {
    name: 'Identity.IdentityCleared',
    /**
     * A name was cleared, and the given balance returned.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.IdentityCleared',
        support_1.sts.struct({
            who: matrixEnjinV1000.AccountId32,
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.identityKilled = {
    name: 'Identity.IdentityKilled',
    /**
     * A name was removed and the given balance slashed.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.IdentityKilled',
        support_1.sts.struct({
            who: matrixEnjinV1000.AccountId32,
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.judgementRequested = {
    name: 'Identity.JudgementRequested',
    /**
     * A judgement was asked from a registrar.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.JudgementRequested',
        support_1.sts.struct({
            who: matrixEnjinV1000.AccountId32,
            registrarIndex: support_1.sts.number(),
        })
    ),
}
exports.judgementUnrequested = {
    name: 'Identity.JudgementUnrequested',
    /**
     * A judgement request was retracted.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.JudgementUnrequested',
        support_1.sts.struct({
            who: matrixEnjinV1000.AccountId32,
            registrarIndex: support_1.sts.number(),
        })
    ),
}
exports.judgementGiven = {
    name: 'Identity.JudgementGiven',
    /**
     * A judgement was given by a registrar.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.JudgementGiven',
        support_1.sts.struct({
            target: matrixEnjinV1000.AccountId32,
            registrarIndex: support_1.sts.number(),
        })
    ),
}
exports.registrarAdded = {
    name: 'Identity.RegistrarAdded',
    /**
     * A registrar was added.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.RegistrarAdded',
        support_1.sts.struct({
            registrarIndex: support_1.sts.number(),
        })
    ),
}
exports.subIdentityAdded = {
    name: 'Identity.SubIdentityAdded',
    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.SubIdentityAdded',
        support_1.sts.struct({
            sub: matrixEnjinV1000.AccountId32,
            main: matrixEnjinV1000.AccountId32,
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.subIdentityRemoved = {
    name: 'Identity.SubIdentityRemoved',
    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.SubIdentityRemoved',
        support_1.sts.struct({
            sub: matrixEnjinV1000.AccountId32,
            main: matrixEnjinV1000.AccountId32,
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.subIdentityRevoked = {
    name: 'Identity.SubIdentityRevoked',
    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    matrixEnjinV1000: new support_1.EventType(
        'Identity.SubIdentityRevoked',
        support_1.sts.struct({
            sub: matrixEnjinV1000.AccountId32,
            main: matrixEnjinV1000.AccountId32,
            deposit: support_1.sts.bigint(),
        })
    ),
}
exports.authorityAdded = {
    name: 'Identity.AuthorityAdded',
    /**
     * A username authority was added.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.AuthorityAdded',
        support_1.sts.struct({
            authority: matrixEnjinV1012.AccountId32,
        })
    ),
}
exports.authorityRemoved = {
    name: 'Identity.AuthorityRemoved',
    /**
     * A username authority was removed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.AuthorityRemoved',
        support_1.sts.struct({
            authority: matrixEnjinV1012.AccountId32,
        })
    ),
}
exports.usernameSet = {
    name: 'Identity.UsernameSet',
    /**
     * A username was set for `who`.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.UsernameSet',
        support_1.sts.struct({
            who: matrixEnjinV1012.AccountId32,
            username: support_1.sts.bytes(),
        })
    ),
}
exports.usernameQueued = {
    name: 'Identity.UsernameQueued',
    /**
     * A username was queued, but `who` must accept it prior to `expiration`.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.UsernameQueued',
        support_1.sts.struct({
            who: matrixEnjinV1012.AccountId32,
            username: support_1.sts.bytes(),
            expiration: support_1.sts.number(),
        })
    ),
}
exports.preapprovalExpired = {
    name: 'Identity.PreapprovalExpired',
    /**
     * A queued username passed its expiration without being claimed and was removed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.PreapprovalExpired',
        support_1.sts.struct({
            whose: matrixEnjinV1012.AccountId32,
        })
    ),
}
exports.primaryUsernameSet = {
    name: 'Identity.PrimaryUsernameSet',
    /**
     * A username was set as a primary and can be looked up from `who`.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.PrimaryUsernameSet',
        support_1.sts.struct({
            who: matrixEnjinV1012.AccountId32,
            username: support_1.sts.bytes(),
        })
    ),
}
exports.danglingUsernameRemoved = {
    name: 'Identity.DanglingUsernameRemoved',
    /**
     * A dangling username (as in, a username corresponding to an account that has removed its
     * identity) has been removed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Identity.DanglingUsernameRemoved',
        support_1.sts.struct({
            who: matrixEnjinV1012.AccountId32,
            username: support_1.sts.bytes(),
        })
    ),
}
