'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.purgeKeys = exports.setKeys = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.setKeys = {
    name: 'Session.set_keys',
    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     *
     * The dispatch origin of this function must be signed.
     *
     * ## Complexity
     * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
     *   fixed.
     */
    matrixEnjinV603: new support_1.CallType(
        'Session.set_keys',
        support_1.sts.struct({
            keys: matrixEnjinV603.SessionKeys,
            proof: support_1.sts.bytes(),
        })
    ),
    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     *
     * The dispatch origin of this function must be signed.
     *
     * ## Complexity
     * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
     *   fixed.
     */
    enjinV100: new support_1.CallType(
        'Session.set_keys',
        support_1.sts.struct({
            keys: enjinV100.SessionKeys,
            proof: support_1.sts.bytes(),
        })
    ),
}
exports.purgeKeys = {
    name: 'Session.purge_keys',
    /**
     * Removes any session key(s) of the function caller.
     *
     * This doesn't take effect until the next session.
     *
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     *
     * ## Complexity
     * - `O(1)` in number of key types. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     */
    matrixEnjinV603: new support_1.CallType('Session.purge_keys', support_1.sts.unit()),
}
