'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pvfCheckRejected =
    exports.pvfCheckAccepted =
    exports.pvfCheckStarted =
    exports.actionQueued =
    exports.newHeadNoted =
    exports.codeUpgradeScheduled =
    exports.currentHeadUpdated =
    exports.currentCodeUpdated =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.currentCodeUpdated = {
    name: 'Paras.CurrentCodeUpdated',
    /**
     * Current code has been updated for a Para. `para_id`
     */
    enjinV100: new support_1.EventType('Paras.CurrentCodeUpdated', enjinV100.Id),
}
exports.currentHeadUpdated = {
    name: 'Paras.CurrentHeadUpdated',
    /**
     * Current head has been updated for a Para. `para_id`
     */
    enjinV100: new support_1.EventType('Paras.CurrentHeadUpdated', enjinV100.Id),
}
exports.codeUpgradeScheduled = {
    name: 'Paras.CodeUpgradeScheduled',
    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    enjinV100: new support_1.EventType('Paras.CodeUpgradeScheduled', enjinV100.Id),
}
exports.newHeadNoted = {
    name: 'Paras.NewHeadNoted',
    /**
     * A new head has been noted for a Para. `para_id`
     */
    enjinV100: new support_1.EventType('Paras.NewHeadNoted', enjinV100.Id),
}
exports.actionQueued = {
    name: 'Paras.ActionQueued',
    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    enjinV100: new support_1.EventType(
        'Paras.ActionQueued',
        support_1.sts.tuple([enjinV100.Id, support_1.sts.number()])
    ),
}
exports.pvfCheckStarted = {
    name: 'Paras.PvfCheckStarted',
    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    enjinV100: new support_1.EventType(
        'Paras.PvfCheckStarted',
        support_1.sts.tuple([enjinV100.ValidationCodeHash, enjinV100.Id])
    ),
}
exports.pvfCheckAccepted = {
    name: 'Paras.PvfCheckAccepted',
    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    enjinV100: new support_1.EventType(
        'Paras.PvfCheckAccepted',
        support_1.sts.tuple([enjinV100.ValidationCodeHash, enjinV100.Id])
    ),
}
exports.pvfCheckRejected = {
    name: 'Paras.PvfCheckRejected',
    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    enjinV100: new support_1.EventType(
        'Paras.PvfCheckRejected',
        support_1.sts.tuple([enjinV100.ValidationCodeHash, enjinV100.Id])
    ),
}
