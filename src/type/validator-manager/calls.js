'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deregisterValidators = exports.registerValidators = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.registerValidators = {
    name: 'ValidatorManager.register_validators',
    /**
     * Add new validators to the set.
     *
     * The new validators will be active from current session + 2.
     */
    enjinV100: new support_1.CallType(
        'ValidatorManager.register_validators',
        support_1.sts.struct({
            validators: support_1.sts.array(function () {
                return enjinV100.AccountId32
            }),
        })
    ),
}
exports.deregisterValidators = {
    name: 'ValidatorManager.deregister_validators',
    /**
     * Remove validators from the set.
     *
     * The removed validators will be deactivated from current session + 2.
     */
    enjinV100: new support_1.CallType(
        'ValidatorManager.deregister_validators',
        support_1.sts.struct({
            validators: support_1.sts.array(function () {
                return enjinV100.AccountId32
            }),
        })
    ),
}
