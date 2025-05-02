'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.releaseDelay =
    exports.extendDepositAmount =
    exports.enterDepositAmount =
    exports.extendDuration =
    exports.enterDuration =
        void 0
var support_1 = require('../support')
exports.enterDuration = {
    /**
     *  For how many blocks the safe-mode will be entered by [`Pallet::enter`].
     */
    matrixEnjinV1012: new support_1.ConstantType('SafeMode.EnterDuration', support_1.sts.number()),
}
exports.extendDuration = {
    /**
     *  For how many blocks the safe-mode can be extended by each [`Pallet::extend`] call.
     *
     *  This does not impose a hard limit as the safe-mode can be extended multiple times.
     */
    matrixEnjinV1012: new support_1.ConstantType('SafeMode.ExtendDuration', support_1.sts.number()),
}
exports.enterDepositAmount = {
    /**
     *  The amount that will be reserved upon calling [`Pallet::enter`].
     *
     *  `None` disallows permissionlessly enabling the safe-mode and is a sane default.
     */
    matrixEnjinV1012: new support_1.ConstantType(
        'SafeMode.EnterDepositAmount',
        support_1.sts.option(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.extendDepositAmount = {
    /**
     *  The amount that will be reserved upon calling [`Pallet::extend`].
     *
     *  `None` disallows permissionlessly extending the safe-mode and is a sane default.
     */
    matrixEnjinV1012: new support_1.ConstantType(
        'SafeMode.ExtendDepositAmount',
        support_1.sts.option(function () {
            return support_1.sts.bigint()
        })
    ),
}
exports.releaseDelay = {
    /**
     *  The minimal duration a deposit will remain reserved after safe-mode is entered or
     *  extended, unless [`Pallet::force_release_deposit`] is successfully called sooner.
     *
     *  Every deposit is tied to a specific activation or extension, thus each deposit can be
     *  released independently after the delay for it has passed.
     *
     *  `None` disallows permissionlessly releasing the safe-mode deposits and is a sane
     *  default.
     */
    matrixEnjinV1012: new support_1.ConstantType(
        'SafeMode.ReleaseDelay',
        support_1.sts.option(function () {
            return support_1.sts.number()
        })
    ),
}
