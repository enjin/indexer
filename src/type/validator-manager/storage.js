'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.validatorsToAdd = exports.validatorsToRetire = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.validatorsToRetire = {
    /**
     *  Validators that should be retired, because their Parachain was deregistered.
     */
    enjinV100: new support_1.StorageType(
        'ValidatorManager.ValidatorsToRetire',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.AccountId32
        })
    ),
}
exports.validatorsToAdd = {
    /**
     *  Validators that should be added.
     */
    enjinV100: new support_1.StorageType(
        'ValidatorManager.ValidatorsToAdd',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.AccountId32
        })
    ),
}
