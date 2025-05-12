'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.cannotRelease =
    exports.cannotDeposit =
    exports.depositSlashed =
    exports.depositReleased =
    exports.depositPlaced =
    exports.exited =
    exports.extended =
    exports.entered =
        void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.entered = {
    name: 'SafeMode.Entered',
    /**
     * The safe-mode was entered until inclusively this block.
     */
    matrixEnjinV1012: new support_1.EventType(
        'SafeMode.Entered',
        support_1.sts.struct({
            until: support_1.sts.number(),
        })
    ),
}
exports.extended = {
    name: 'SafeMode.Extended',
    /**
     * The safe-mode was extended until inclusively this block.
     */
    matrixEnjinV1012: new support_1.EventType(
        'SafeMode.Extended',
        support_1.sts.struct({
            until: support_1.sts.number(),
        })
    ),
}
exports.exited = {
    name: 'SafeMode.Exited',
    /**
     * Exited the safe-mode for a specific reason.
     */
    matrixEnjinV1012: new support_1.EventType(
        'SafeMode.Exited',
        support_1.sts.struct({
            reason: matrixEnjinV1012.ExitReason,
        })
    ),
}
exports.depositPlaced = {
    name: 'SafeMode.DepositPlaced',
    /**
     * An account reserved funds for either entering or extending the safe-mode.
     */
    matrixEnjinV1012: new support_1.EventType(
        'SafeMode.DepositPlaced',
        support_1.sts.struct({
            account: matrixEnjinV1012.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.depositReleased = {
    name: 'SafeMode.DepositReleased',
    /**
     * An account had a reserve released that was reserved.
     */
    matrixEnjinV1012: new support_1.EventType(
        'SafeMode.DepositReleased',
        support_1.sts.struct({
            account: matrixEnjinV1012.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.depositSlashed = {
    name: 'SafeMode.DepositSlashed',
    /**
     * An account had reserve slashed that was reserved.
     */
    matrixEnjinV1012: new support_1.EventType(
        'SafeMode.DepositSlashed',
        support_1.sts.struct({
            account: matrixEnjinV1012.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.cannotDeposit = {
    name: 'SafeMode.CannotDeposit',
    /**
     * Could not hold funds for entering or extending the safe-mode.
     *
     * This error comes from the underlying `Currency`.
     */
    matrixEnjinV1012: new support_1.EventType('SafeMode.CannotDeposit', support_1.sts.unit()),
}
exports.cannotRelease = {
    name: 'SafeMode.CannotRelease',
    /**
     * Could not release funds for entering or extending the safe-mode.
     *
     * This error comes from the underlying `Currency`.
     */
    matrixEnjinV1012: new support_1.EventType('SafeMode.CannotRelease', support_1.sts.unit()),
}
