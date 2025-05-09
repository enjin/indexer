'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pendingUsernames =
    exports.accountOfUsername =
    exports.usernameAuthorities =
    exports.registrars =
    exports.subsOf =
    exports.superOf =
    exports.identityOf =
        void 0
var support_1 = require('../support')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.identityOf = {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixEnjinV1000.AccountId32],
        matrixEnjinV1000.Registration
    ),
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        support_1.sts.tuple(function () {
            return [
                matrixEnjinV1012.Registration,
                support_1.sts.option(function () {
                    return support_1.sts.bytes()
                }),
            ]
        })
    ),
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixV1000: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixV1000.AccountId32],
        matrixV1000.Registration
    ),
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixV1010: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixV1010.AccountId32],
        support_1.sts.tuple(function () {
            return [
                matrixV1010.Registration,
                support_1.sts.option(function () {
                    return support_1.sts.bytes()
                }),
            ]
        })
    ),
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    enjinV110: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [enjinV110.AccountId32],
        enjinV110.Registration
    ),
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    enjinV1032: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [enjinV1032.AccountId32],
        support_1.sts.tuple(function () {
            return [
                enjinV1032.Registration,
                support_1.sts.option(function () {
                    return support_1.sts.bytes()
                }),
            ]
        })
    ),
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v110: new support_1.StorageType('Identity.IdentityOf', 'Optional', [v110.AccountId32], v110.Registration),
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v1030: new support_1.StorageType(
        'Identity.IdentityOf',
        'Optional',
        [v1030.AccountId32],
        support_1.sts.tuple(function () {
            return [
                v1030.Registration,
                support_1.sts.option(function () {
                    return support_1.sts.bytes()
                }),
            ]
        })
    ),
}
exports.superOf = {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'Identity.SuperOf',
        'Optional',
        [matrixEnjinV1000.AccountId32],
        support_1.sts.tuple(function () {
            return [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data]
        })
    ),
}
exports.subsOf = {
    /**
     *  Alternative "sub" identities of this account.
     *
     *  The first item is the deposit, the second is a vector of the accounts.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'Identity.SubsOf',
        'Default',
        [matrixEnjinV1000.AccountId32],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.bigint(),
                support_1.sts.array(function () {
                    return matrixEnjinV1000.AccountId32
                }),
            ]
        })
    ),
}
exports.registrars = {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     *
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    matrixEnjinV1000: new support_1.StorageType(
        'Identity.Registrars',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return matrixEnjinV1000.RegistrarInfo
            })
        })
    ),
}
exports.usernameAuthorities = {
    /**
     *  A map of the accounts who are authorized to grant usernames.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Identity.UsernameAuthorities',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.AuthorityProperties
    ),
}
exports.accountOfUsername = {
    /**
     *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
     *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
     *
     *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
     *  primary username.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Identity.AccountOfUsername',
        'Optional',
        [support_1.sts.bytes()],
        matrixEnjinV1012.AccountId32
    ),
}
exports.pendingUsernames = {
    /**
     *  Usernames that an authority has granted, but that the account controller has not confirmed
     *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
     *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
     *  [`Call::accept_username`].
     *
     *  First tuple item is the account and second is the acceptance deadline.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Identity.PendingUsernames',
        'Optional',
        [support_1.sts.bytes()],
        support_1.sts.tuple(function () {
            return [matrixEnjinV1012.AccountId32, support_1.sts.number()]
        })
    ),
}
