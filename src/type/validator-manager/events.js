'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.validatorsDeregistered = exports.validatorsRegistered = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.validatorsRegistered = {
    name: 'ValidatorManager.ValidatorsRegistered',
    /**
     * New validators were added to the set.
     */
    enjinV100: new support_1.EventType(
        'ValidatorManager.ValidatorsRegistered',
        support_1.sts.array(function () {
            return enjinV100.AccountId32
        })
    ),
}
exports.validatorsDeregistered = {
    name: 'ValidatorManager.ValidatorsDeregistered',
    /**
     * Validators were removed from the set.
     */
    enjinV100: new support_1.EventType(
        'ValidatorManager.ValidatorsDeregistered',
        support_1.sts.array(function () {
            return enjinV100.AccountId32
        })
    ),
}
