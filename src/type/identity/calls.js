'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.removeDanglingUsername =
    exports.setPrimaryUsername =
    exports.removeExpiredApproval =
    exports.acceptUsername =
    exports.setUsernameFor =
    exports.removeUsernameAuthority =
    exports.addUsernameAuthority =
    exports.quitSub =
    exports.removeSub =
    exports.renameSub =
    exports.addSub =
    exports.killIdentity =
    exports.provideJudgement =
    exports.setFields =
    exports.setAccountId =
    exports.setFee =
    exports.cancelRequest =
    exports.requestJudgement =
    exports.clearIdentity =
    exports.setSubs =
    exports.setIdentity =
    exports.addRegistrar =
        void 0
var support_1 = require('../support')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.addRegistrar = {
    name: 'Identity.add_registrar',
    /**
     * Add a registrar to the system.
     *
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     *
     * - `account`: the account of the registrar.
     *
     * Emits `RegistrarAdded` if successful.
     *
     * ## Complexity
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.add_registrar',
        support_1.sts.struct({
            account: matrixEnjinV1000.MultiAddress,
        })
    ),
}
exports.setIdentity = {
    name: 'Identity.set_identity',
    /**
     * Set an account's identity information and reserve the appropriate deposit.
     *
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `info`: The identity information.
     *
     * Emits `IdentitySet` if successful.
     *
     * ## Complexity
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.set_identity',
        support_1.sts.struct({
            info: matrixEnjinV1000.IdentityInfo,
        })
    ),
}
exports.setSubs = {
    name: 'Identity.set_subs',
    /**
     * Set the sub-accounts of the sender.
     *
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     *
     * - `subs`: The identity's (new) sub-accounts.
     *
     * ## Complexity
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.set_subs',
        support_1.sts.struct({
            subs: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data]
                })
            }),
        })
    ),
}
exports.clearIdentity = {
    name: 'Identity.clear_identity',
    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     *
     * Payment: All reserved balances on the account are returned.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     *
     * Emits `IdentityCleared` if successful.
     *
     * ## Complexity
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    matrixEnjinV1000: new support_1.CallType('Identity.clear_identity', support_1.sts.unit()),
}
exports.requestJudgement = {
    name: 'Identity.request_judgement',
    /**
     * Request a judgement from a registrar.
     *
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     *
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     *
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     *
     * Emits `JudgementRequested` if successful.
     *
     * ## Complexity
     * - `O(R + X)`.
     *   - where `R` registrar-count (governance-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.request_judgement',
        support_1.sts.struct({
            regIndex: support_1.sts.number(),
            maxFee: support_1.sts.bigint(),
        })
    ),
}
exports.cancelRequest = {
    name: 'Identity.cancel_request',
    /**
     * Cancel a previous request.
     *
     * Payment: A previously reserved deposit is returned on success.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     *
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     *
     * Emits `JudgementUnrequested` if successful.
     *
     * ## Complexity
     * - `O(R + X)`.
     *   - where `R` registrar-count (governance-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.cancel_request',
        support_1.sts.struct({
            regIndex: support_1.sts.number(),
        })
    ),
}
exports.setFee = {
    name: 'Identity.set_fee',
    /**
     * Set the fee required for a judgement to be requested from a registrar.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     *
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     *
     * ## Complexity
     * - `O(R)`.
     *   - where `R` registrar-count (governance-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.set_fee',
        support_1.sts.struct({
            index: support_1.sts.number(),
            fee: support_1.sts.bigint(),
        })
    ),
}
exports.setAccountId = {
    name: 'Identity.set_account_id',
    /**
     * Change the account associated with a registrar.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     *
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     *
     * ## Complexity
     * - `O(R)`.
     *   - where `R` registrar-count (governance-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.set_account_id',
        support_1.sts.struct({
            index: support_1.sts.number(),
            new: matrixEnjinV1000.MultiAddress,
        })
    ),
}
exports.setFields = {
    name: 'Identity.set_fields',
    /**
     * Set the field information for a registrar.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     *
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     *
     * ## Complexity
     * - `O(R)`.
     *   - where `R` registrar-count (governance-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.set_fields',
        support_1.sts.struct({
            index: support_1.sts.number(),
            fields: matrixEnjinV1000.BitFlags,
        })
    ),
}
exports.provideJudgement = {
    name: 'Identity.provide_judgement',
    /**
     * Provide a judgement for an account's identity.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     *
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     *
     * Emits `JudgementGiven` if successful.
     *
     * ## Complexity
     * - `O(R + X)`.
     *   - where `R` registrar-count (governance-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.provide_judgement',
        support_1.sts.struct({
            regIndex: support_1.sts.number(),
            target: matrixEnjinV1000.MultiAddress,
            judgement: matrixEnjinV1000.Judgement,
            identity: matrixEnjinV1000.H256,
        })
    ),
}
exports.killIdentity = {
    name: 'Identity.kill_identity',
    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     *
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     *
     * The dispatch origin for this call must match `T::ForceOrigin`.
     *
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     *
     * Emits `IdentityKilled` if successful.
     *
     * ## Complexity
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.kill_identity',
        support_1.sts.struct({
            target: matrixEnjinV1000.MultiAddress,
        })
    ),
}
exports.addSub = {
    name: 'Identity.add_sub',
    /**
     * Add the given account to the sender's subs.
     *
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.add_sub',
        support_1.sts.struct({
            sub: matrixEnjinV1000.MultiAddress,
            data: matrixEnjinV1000.Data,
        })
    ),
}
exports.renameSub = {
    name: 'Identity.rename_sub',
    /**
     * Alter the associated name of the given sub-account.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.rename_sub',
        support_1.sts.struct({
            sub: matrixEnjinV1000.MultiAddress,
            data: matrixEnjinV1000.Data,
        })
    ),
}
exports.removeSub = {
    name: 'Identity.remove_sub',
    /**
     * Remove the given account from the sender's subs.
     *
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Identity.remove_sub',
        support_1.sts.struct({
            sub: matrixEnjinV1000.MultiAddress,
        })
    ),
}
exports.quitSub = {
    name: 'Identity.quit_sub',
    /**
     * Remove the sender as a sub-account.
     *
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     *
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     *
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    matrixEnjinV1000: new support_1.CallType('Identity.quit_sub', support_1.sts.unit()),
}
exports.addUsernameAuthority = {
    name: 'Identity.add_username_authority',
    /**
     * Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
     *
     * The authority can grant up to `allocation` usernames. To top up their allocation, they
     * should just issue (or request via governance) a new `add_username_authority` call.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.add_username_authority',
        support_1.sts.struct({
            authority: matrixEnjinV1012.MultiAddress,
            suffix: support_1.sts.bytes(),
            allocation: support_1.sts.number(),
        })
    ),
}
exports.removeUsernameAuthority = {
    name: 'Identity.remove_username_authority',
    /**
     * Remove `authority` from the username authorities.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.remove_username_authority',
        support_1.sts.struct({
            authority: matrixEnjinV1012.MultiAddress,
        })
    ),
}
exports.setUsernameFor = {
    name: 'Identity.set_username_for',
    /**
     * Set the username for `who`. Must be called by a username authority.
     *
     * The authority must have an `allocation`. Users can either pre-sign their usernames or
     * accept them later.
     *
     * Usernames must:
     *   - Only contain lowercase ASCII characters or digits.
     *   - When combined with the suffix of the issuing authority be _less than_ the
     *     `MaxUsernameLength`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.set_username_for',
        support_1.sts.struct({
            who: matrixEnjinV1012.MultiAddress,
            username: support_1.sts.bytes(),
            signature: support_1.sts.option(function () {
                return matrixEnjinV1012.MultiSignature
            }),
        })
    ),
}
exports.acceptUsername = {
    name: 'Identity.accept_username',
    /**
     * Accept a given username that an `authority` granted. The call must include the full
     * username, as in `username.suffix`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.accept_username',
        support_1.sts.struct({
            username: support_1.sts.bytes(),
        })
    ),
}
exports.removeExpiredApproval = {
    name: 'Identity.remove_expired_approval',
    /**
     * Remove an expired username approval. The username was approved by an authority but never
     * accepted by the user and must now be beyond its expiration. The call must include the
     * full username, as in `username.suffix`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.remove_expired_approval',
        support_1.sts.struct({
            username: support_1.sts.bytes(),
        })
    ),
}
exports.setPrimaryUsername = {
    name: 'Identity.set_primary_username',
    /**
     * Set a given username as the primary. The username should include the suffix.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.set_primary_username',
        support_1.sts.struct({
            username: support_1.sts.bytes(),
        })
    ),
}
exports.removeDanglingUsername = {
    name: 'Identity.remove_dangling_username',
    /**
     * Remove a username that corresponds to an account with no identity. Exists when a user
     * gets a username but then calls `clear_identity`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Identity.remove_dangling_username',
        support_1.sts.struct({
            username: support_1.sts.bytes(),
        })
    ),
}
