'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.upwardMessageSent =
    exports.downwardMessagesProcessed =
    exports.downwardMessagesReceived =
    exports.upgradeAuthorized =
    exports.validationFunctionDiscarded =
    exports.validationFunctionApplied =
    exports.validationFunctionStored =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.validationFunctionStored = {
    name: 'ParachainSystem.ValidationFunctionStored',
    /**
     * The validation function has been scheduled to apply.
     */
    matrixEnjinV603: new support_1.EventType('ParachainSystem.ValidationFunctionStored', support_1.sts.unit()),
}
exports.validationFunctionApplied = {
    name: 'ParachainSystem.ValidationFunctionApplied',
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    matrixEnjinV603: new support_1.EventType(
        'ParachainSystem.ValidationFunctionApplied',
        support_1.sts.struct({
            relayChainBlockNum: support_1.sts.number(),
        })
    ),
}
exports.validationFunctionDiscarded = {
    name: 'ParachainSystem.ValidationFunctionDiscarded',
    /**
     * The relay-chain aborted the upgrade process.
     */
    matrixEnjinV603: new support_1.EventType('ParachainSystem.ValidationFunctionDiscarded', support_1.sts.unit()),
}
exports.upgradeAuthorized = {
    name: 'ParachainSystem.UpgradeAuthorized',
    /**
     * An upgrade has been authorized.
     */
    matrixEnjinV603: new support_1.EventType(
        'ParachainSystem.UpgradeAuthorized',
        support_1.sts.struct({
            codeHash: matrixEnjinV603.H256,
        })
    ),
}
exports.downwardMessagesReceived = {
    name: 'ParachainSystem.DownwardMessagesReceived',
    /**
     * Some downward messages have been received and will be processed.
     */
    matrixEnjinV603: new support_1.EventType(
        'ParachainSystem.DownwardMessagesReceived',
        support_1.sts.struct({
            count: support_1.sts.number(),
        })
    ),
}
exports.downwardMessagesProcessed = {
    name: 'ParachainSystem.DownwardMessagesProcessed',
    /**
     * Downward messages were processed using the given weight.
     */
    matrixEnjinV603: new support_1.EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        support_1.sts.struct({
            weightUsed: matrixEnjinV603.Weight,
            dmqHead: matrixEnjinV603.H256,
        })
    ),
}
exports.upwardMessageSent = {
    name: 'ParachainSystem.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    matrixEnjinV603: new support_1.EventType(
        'ParachainSystem.UpwardMessageSent',
        support_1.sts.struct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
