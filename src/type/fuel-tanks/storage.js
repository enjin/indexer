'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.freezeQueue = exports.accounts = exports.tanks = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v102 = require('../v102')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1012 = require('../matrixV1012')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var v1032 = require('../v1032')
exports.tanks = {
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV603: new support_1.StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.FuelTank
    ),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV1000: new support_1.StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixEnjinV1000.AccountId32],
        matrixEnjinV1000.FuelTank
    ),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV1012: new support_1.StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.FuelTank
    ),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV500: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [matrixV500.AccountId32], matrixV500.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1000: new support_1.StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1000.AccountId32],
        matrixV1000.FuelTank
    ),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1010: new support_1.StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1010.AccountId32],
        matrixV1010.FuelTank
    ),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1012: new support_1.StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1012.AccountId32],
        matrixV1012.FuelTank
    ),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    enjinV100: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [enjinV100.AccountId32], enjinV100.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    enjinV1021: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [enjinV1021.AccountId32], enjinV1021.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    enjinV1032: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [enjinV1032.AccountId32], enjinV1032.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v102: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [v102.AccountId32], v102.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1021: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [v1021.AccountId32], v1021.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1030: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [v1030.AccountId32], v1030.FuelTank),
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1032: new support_1.StorageType('FuelTanks.Tanks', 'Optional', [v1032.AccountId32], v1032.FuelTank),
}
exports.accounts = {
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV603: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32],
        matrixEnjinV603.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV1000: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32],
        matrixEnjinV1000.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV1012: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV500: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV500.AccountId32, matrixV500.AccountId32],
        matrixV500.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1000: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1000.AccountId32, matrixV1000.AccountId32],
        matrixV1000.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1010: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1010.AccountId32, matrixV1010.AccountId32],
        matrixV1010.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1012: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1012.AccountId32, matrixV1012.AccountId32],
        matrixV1012.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    enjinV100: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [enjinV100.AccountId32, enjinV100.AccountId32],
        enjinV100.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    enjinV1021: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [enjinV1021.AccountId32, enjinV1021.AccountId32],
        enjinV1021.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    enjinV1032: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [enjinV1032.AccountId32, enjinV1032.AccountId32],
        enjinV1032.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v102: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v102.AccountId32, v102.AccountId32],
        v102.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1021: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v1021.AccountId32, v1021.AccountId32],
        v1021.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1030: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v1030.AccountId32, v1030.AccountId32],
        v1030.UserAccount
    ),
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1032: new support_1.StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v1032.AccountId32, v1032.AccountId32],
        v1032.UserAccount
    ),
}
exports.freezeQueue = {
    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    matrixEnjinV603: new support_1.StorageType(
        'FuelTanks.FreezeQueue',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.FreezeQueueItem
        })
    ),
}
