'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.enactAuthorizedUpgrade =
    exports.authorizeUpgrade =
    exports.sudoSendUpwardMessage =
    exports.setValidationData =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.setValidationData = {
    name: 'ParachainSystem.set_validation_data',
    /**
     * Set the current validation data.
     *
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     *
     * The dispatch origin for this call must be `Inherent`
     *
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    matrixEnjinV603: new support_1.CallType(
        'ParachainSystem.set_validation_data',
        support_1.sts.struct({
            data: matrixEnjinV603.ParachainInherentData,
        })
    ),
}
exports.sudoSendUpwardMessage = {
    name: 'ParachainSystem.sudo_send_upward_message',
    matrixEnjinV603: new support_1.CallType(
        'ParachainSystem.sudo_send_upward_message',
        support_1.sts.struct({
            message: support_1.sts.bytes(),
        })
    ),
}
exports.authorizeUpgrade = {
    name: 'ParachainSystem.authorize_upgrade',
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     *
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     *
     * This call requires Root origin.
     */
    matrixEnjinV603: new support_1.CallType(
        'ParachainSystem.authorize_upgrade',
        support_1.sts.struct({
            codeHash: matrixEnjinV603.H256,
            checkVersion: support_1.sts.boolean(),
        })
    ),
    matrixV500: new support_1.CallType(
        'ParachainSystem.authorize_upgrade',
        support_1.sts.struct({
            codeHash: matrixV500.H256,
        })
    ),
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     *
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     *
     * This call requires Root origin.
     */
    matrixV602: new support_1.CallType(
        'ParachainSystem.authorize_upgrade',
        support_1.sts.struct({
            codeHash: matrixV602.H256,
            checkVersion: support_1.sts.boolean(),
        })
    ),
}
exports.enactAuthorizedUpgrade = {
    name: 'ParachainSystem.enact_authorized_upgrade',
    /**
     * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
     *
     * If the authorization required a version check, this call will ensure the spec name
     * remains unchanged and that the spec version has increased.
     *
     * Note that this function will not apply the new `code`, but only attempt to schedule the
     * upgrade with the Relay Chain.
     *
     * All origins are allowed.
     */
    matrixEnjinV603: new support_1.CallType(
        'ParachainSystem.enact_authorized_upgrade',
        support_1.sts.struct({
            code: support_1.sts.bytes(),
        })
    ),
}
