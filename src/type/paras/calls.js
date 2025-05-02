'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.forceSetMostRecentContext =
    exports.includePvfCheckStatement =
    exports.pokeUnusedValidationCode =
    exports.addTrustedValidationCode =
    exports.forceQueueAction =
    exports.forceNoteNewHead =
    exports.forceScheduleCodeUpgrade =
    exports.forceSetCurrentHead =
    exports.forceSetCurrentCode =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1032 = require('../enjinV1032')
exports.forceSetCurrentCode = {
    name: 'Paras.force_set_current_code',
    /**
     * Set the storage for the parachain validation code immediately.
     */
    enjinV100: new support_1.CallType(
        'Paras.force_set_current_code',
        support_1.sts.struct({
            para: enjinV100.Id,
            newCode: enjinV100.ValidationCode,
        })
    ),
}
exports.forceSetCurrentHead = {
    name: 'Paras.force_set_current_head',
    /**
     * Set the storage for the current parachain head data immediately.
     */
    enjinV100: new support_1.CallType(
        'Paras.force_set_current_head',
        support_1.sts.struct({
            para: enjinV100.Id,
            newHead: enjinV100.HeadData,
        })
    ),
}
exports.forceScheduleCodeUpgrade = {
    name: 'Paras.force_schedule_code_upgrade',
    /**
     * Schedule an upgrade as if it was scheduled in the given relay parent block.
     */
    enjinV100: new support_1.CallType(
        'Paras.force_schedule_code_upgrade',
        support_1.sts.struct({
            para: enjinV100.Id,
            newCode: enjinV100.ValidationCode,
            relayParentNumber: support_1.sts.number(),
        })
    ),
}
exports.forceNoteNewHead = {
    name: 'Paras.force_note_new_head',
    /**
     * Note a new block head for para within the context of the current block.
     */
    enjinV100: new support_1.CallType(
        'Paras.force_note_new_head',
        support_1.sts.struct({
            para: enjinV100.Id,
            newHead: enjinV100.HeadData,
        })
    ),
}
exports.forceQueueAction = {
    name: 'Paras.force_queue_action',
    /**
     * Put a parachain directly into the next session's action queue.
     * We can't queue it any sooner than this without going into the
     * initializer...
     */
    enjinV100: new support_1.CallType(
        'Paras.force_queue_action',
        support_1.sts.struct({
            para: enjinV100.Id,
        })
    ),
}
exports.addTrustedValidationCode = {
    name: 'Paras.add_trusted_validation_code',
    /**
     * Adds the validation code to the storage.
     *
     * The code will not be added if it is already present. Additionally, if PVF pre-checking
     * is running for that code, it will be instantly accepted.
     *
     * Otherwise, the code will be added into the storage. Note that the code will be added
     * into storage with reference count 0. This is to account the fact that there are no users
     * for this code yet. The caller will have to make sure that this code eventually gets
     * used by some parachain or removed from the storage to avoid storage leaks. For the latter
     * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
     *
     * This function is mainly meant to be used for upgrading parachains that do not follow
     * the go-ahead signal while the PVF pre-checking feature is enabled.
     */
    enjinV100: new support_1.CallType(
        'Paras.add_trusted_validation_code',
        support_1.sts.struct({
            validationCode: enjinV100.ValidationCode,
        })
    ),
}
exports.pokeUnusedValidationCode = {
    name: 'Paras.poke_unused_validation_code',
    /**
     * Remove the validation code from the storage iff the reference count is 0.
     *
     * This is better than removing the storage directly, because it will not remove the code
     * that was suddenly got used by some parachain while this dispatchable was pending
     * dispatching.
     */
    enjinV100: new support_1.CallType(
        'Paras.poke_unused_validation_code',
        support_1.sts.struct({
            validationCodeHash: enjinV100.ValidationCodeHash,
        })
    ),
}
exports.includePvfCheckStatement = {
    name: 'Paras.include_pvf_check_statement',
    /**
     * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
     * enacts the results if that was the last vote before achieving the supermajority.
     */
    enjinV100: new support_1.CallType(
        'Paras.include_pvf_check_statement',
        support_1.sts.struct({
            stmt: enjinV100.V4PvfCheckStatement,
            signature: support_1.sts.bytes(),
        })
    ),
}
exports.forceSetMostRecentContext = {
    name: 'Paras.force_set_most_recent_context',
    /**
     * Set the storage for the current parachain head data immediately.
     */
    enjinV1032: new support_1.CallType(
        'Paras.force_set_most_recent_context',
        support_1.sts.struct({
            para: enjinV1032.Id,
            context: support_1.sts.number(),
        })
    ),
}
