'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mutateFreezeState =
    exports.forceBatchAddAccount =
    exports.forceCreateFuelTank =
    exports.destroyFuelTank =
    exports.forceSetConsumption =
    exports.batchRemoveAccount =
    exports.batchAddAccount =
    exports.removeRuleSet =
    exports.insertRuleSet =
    exports.scheduleMutateFreezeState =
    exports.dispatchAndTouch =
    exports.dispatch =
    exports.removeAccountRuleData =
    exports.removeAccount =
    exports.addAccount =
    exports.mutateFuelTank =
    exports.createFuelTank =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v103 = require('../v103')
var v104 = require('../v104')
var v105 = require('../v105')
var v106 = require('../v106')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixV601 = require('../matrixV601')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixEnjinV1003 = require('../matrixEnjinV1003')
var matrixV1003 = require('../matrixV1003')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
var matrixEnjinV1005 = require('../matrixEnjinV1005')
var matrixV1005 = require('../matrixV1005')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1012 = require('../matrixV1012')
var matrixV1020 = require('../matrixV1020')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var matrixV1022 = require('../matrixV1022')
var enjinV1022 = require('../enjinV1022')
var v1022 = require('../v1022')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
var v1030 = require('../v1030')
var v1031 = require('../v1031')
var enjinV1032 = require('../enjinV1032')
var v1032 = require('../v1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.createFuelTank = {
    name: 'FuelTanks.create_fuel_tank',
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV603.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV1000.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV1003: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV1005.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV1012.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV1022: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixEnjinV1022.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV500: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV500.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV600: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV600.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV601: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV601.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV602: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV602.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV604: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV604.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1000: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1000.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1003: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixV1004: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixV1005: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1005.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1010.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1011: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1011.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1012: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1012.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1020: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1020.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixV1022: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: matrixV1022.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV100: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV100.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV101: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV101.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV110: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV110.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV120: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV120.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV1021: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV1021.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV1022: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV1022.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV1023: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    enjinV1026: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV1026.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV1032.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    enjinV1050: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: enjinV1050.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v102: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v102.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v103: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v103.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v104: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v104.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v105: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v105.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v106: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v106.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v110: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v110.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v120: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v120.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1021: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1021.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1022: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1022.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1023: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    v1026: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1026.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1030: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1030.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1031: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1031.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1032: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1032.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a `descriptor`.
     *
     * Generates a discrete `AccountId` for the fuel tank based on passed in parameters, it
     * takes a storage deposit and emits `FuelTankCreated` event in the success case.
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1050: new support_1.CallType(
        'FuelTanks.create_fuel_tank',
        support_1.sts.struct({
            descriptor: v1050.FuelTankDescriptor,
        })
    ),
}
exports.mutateFuelTank = {
    name: 'FuelTanks.mutate_fuel_tank',
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            mutation: matrixEnjinV603.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * Caller must be the owner of the fuel tank, and the tank must be frozen.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank is not frozen
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            mutation: matrixEnjinV1012.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    matrixV500: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: matrixV500.MultiAddress,
            mutation: matrixV500.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: matrixV1010.MultiAddress,
            mutation: matrixV1010.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    enjinV100: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: enjinV100.MultiAddress,
            mutation: enjinV100.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * Caller must be the owner of the fuel tank, and the tank must be frozen.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank is not frozen
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: enjinV1032.MultiAddress,
            mutation: enjinV1032.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    v102: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: v102.MultiAddress,
            mutation: v102.DefaultTankMutation,
        })
    ),
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    v1030: new support_1.CallType(
        'FuelTanks.mutate_fuel_tank',
        support_1.sts.struct({
            tankId: v1030.MultiAddress,
            mutation: v1030.DefaultTankMutation,
        })
    ),
}
exports.addAccount = {
    name: 'FuelTanks.add_account',
    /**
     * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
     * required to dispatch calls. A deposit is required, and may be paid by
     * the user or the fuel tank, depending on the settings.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.add_account',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.removeAccount = {
    name: 'FuelTanks.remove_account',
    /**
     * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
     * are returned.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.remove_account',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.removeAccountRuleData = {
    name: 'FuelTanks.remove_account_rule_data',
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixEnjinV603.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            userId: matrixEnjinV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixEnjinV1000.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            userId: matrixEnjinV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixEnjinV1012.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixV500: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixV500.MultiAddress,
            userId: matrixV500.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixV500.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixV1000: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixV1000.MultiAddress,
            userId: matrixV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixV1000.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixV1010.MultiAddress,
            userId: matrixV1010.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixV1010.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixV1012: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: matrixV1012.MultiAddress,
            userId: matrixV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: matrixV1012.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    enjinV100: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: enjinV100.MultiAddress,
            userId: enjinV100.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: enjinV100.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    enjinV1021: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: enjinV1021.MultiAddress,
            userId: enjinV1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: enjinV1021.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: enjinV1032.MultiAddress,
            userId: enjinV1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: enjinV1032.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    v102: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: v102.MultiAddress,
            userId: v102.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: v102.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    v1021: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: v1021.MultiAddress,
            userId: v1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: v1021.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    v1030: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: v1030.MultiAddress,
            userId: v1030.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: v1030.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     *
     * ### Errors
     *
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    v1032: new support_1.CallType(
        'FuelTanks.remove_account_rule_data',
        support_1.sts.struct({
            tankId: v1032.MultiAddress,
            userId: v1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: v1032.DispatchRuleKind,
        })
    ),
}
exports.dispatch = {
    name: 'FuelTanks.dispatch',
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV603.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV603.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1000.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1000.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV1003: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV1003.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1003.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1003.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV1004.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1004.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1004.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV1005.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1005.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1005.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1012.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1012.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV1022: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixEnjinV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1022.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1022.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV500: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV500.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV500.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV600: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV600.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV600.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV601: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV601.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV601.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV602: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV602.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV602.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV604: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV604.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV604.Call,
            settings: support_1.sts.option(function () {
                return matrixV604.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1000: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1000.Call,
            settings: support_1.sts.option(function () {
                return matrixV1000.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1003: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1003.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1003.Call,
            settings: support_1.sts.option(function () {
                return matrixV1003.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixV1004: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1004.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1004.Call,
            settings: support_1.sts.option(function () {
                return matrixV1004.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixV1005: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1005.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1005.Call,
            settings: support_1.sts.option(function () {
                return matrixV1005.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1010.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1010.Call,
            settings: support_1.sts.option(function () {
                return matrixV1010.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1011: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1011.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1011.Call,
            settings: support_1.sts.option(function () {
                return matrixV1011.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1012: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1012.Call,
            settings: support_1.sts.option(function () {
                return matrixV1012.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1020: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1020.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1020.Call,
            settings: support_1.sts.option(function () {
                return matrixV1020.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixV1022: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: matrixV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1022.Call,
            settings: support_1.sts.option(function () {
                return matrixV1022.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV100: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV100.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV100.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV101: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV101.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV101.Call,
            settings: support_1.sts.option(function () {
                return enjinV101.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV110: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV110.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV110.Call,
            settings: support_1.sts.option(function () {
                return enjinV110.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV120: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV120.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV120.Call,
            settings: support_1.sts.option(function () {
                return enjinV120.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV1021: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1021.Call,
            settings: support_1.sts.option(function () {
                return enjinV1021.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV1022: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1022.Call,
            settings: support_1.sts.option(function () {
                return enjinV1022.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV1023: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV1023.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1023.Call,
            settings: support_1.sts.option(function () {
                return enjinV1023.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    enjinV1026: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV1026.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1026.Call,
            settings: support_1.sts.option(function () {
                return enjinV1026.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1032.Call,
            settings: support_1.sts.option(function () {
                return enjinV1032.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    enjinV1050: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: enjinV1050.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1050.Call,
            settings: support_1.sts.option(function () {
                return enjinV1050.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v102: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v102.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v102.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v103: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v103.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v103.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v104: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v104.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v104.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v105: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v105.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v105.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v106: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v106.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v106.Call,
            settings: support_1.sts.option(function () {
                return v106.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v110: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v110.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v110.Call,
            settings: support_1.sts.option(function () {
                return v110.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v120: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v120.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v120.Call,
            settings: support_1.sts.option(function () {
                return v120.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1021: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1021.Call,
            settings: support_1.sts.option(function () {
                return v1021.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1022: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1022.Call,
            settings: support_1.sts.option(function () {
                return v1022.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1023: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1023.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1023.Call,
            settings: support_1.sts.option(function () {
                return v1023.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    v1026: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1026.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1026.Call,
            settings: support_1.sts.option(function () {
                return v1026.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1030: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1030.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1030.Call,
            settings: support_1.sts.option(function () {
                return v1030.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1031: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1031.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1031.Call,
            settings: support_1.sts.option(function () {
                return v1031.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1032: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1032.Call,
            settings: support_1.sts.option(function () {
                return v1032.DispatchSettings
            }),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1050: new support_1.CallType(
        'FuelTanks.dispatch',
        support_1.sts.struct({
            tankId: v1050.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1050.Call,
            settings: support_1.sts.option(function () {
                return v1050.DispatchSettings
            }),
        })
    ),
}
exports.dispatchAndTouch = {
    name: 'FuelTanks.dispatch_and_touch',
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV603.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV603.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1000.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1000.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV1003: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV1003.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1003.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1003.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV1004.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1004.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1004.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV1005.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1005.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1005.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1012.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1012.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV1022: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixEnjinV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixEnjinV1022.Call,
            settings: support_1.sts.option(function () {
                return matrixEnjinV1022.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV500: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV500.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV500.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV600: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV600.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV600.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV601: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV601.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV601.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV602: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV602.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV602.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV604: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV604.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV604.Call,
            settings: support_1.sts.option(function () {
                return matrixV604.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1000: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1000.Call,
            settings: support_1.sts.option(function () {
                return matrixV1000.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1003: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1003.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1003.Call,
            settings: support_1.sts.option(function () {
                return matrixV1003.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixV1004: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1004.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1004.Call,
            settings: support_1.sts.option(function () {
                return matrixV1004.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixV1005: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1005.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1005.Call,
            settings: support_1.sts.option(function () {
                return matrixV1005.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1010.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1010.Call,
            settings: support_1.sts.option(function () {
                return matrixV1010.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1011: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1011.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1011.Call,
            settings: support_1.sts.option(function () {
                return matrixV1011.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1012: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1012.Call,
            settings: support_1.sts.option(function () {
                return matrixV1012.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1020: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1020.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1020.Call,
            settings: support_1.sts.option(function () {
                return matrixV1020.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixV1022: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: matrixV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: matrixV1022.Call,
            settings: support_1.sts.option(function () {
                return matrixV1022.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV100: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV100.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV100.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV101: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV101.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV101.Call,
            settings: support_1.sts.option(function () {
                return enjinV101.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV110: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV110.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV110.Call,
            settings: support_1.sts.option(function () {
                return enjinV110.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV120: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV120.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV120.Call,
            settings: support_1.sts.option(function () {
                return enjinV120.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV1021: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1021.Call,
            settings: support_1.sts.option(function () {
                return enjinV1021.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV1022: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1022.Call,
            settings: support_1.sts.option(function () {
                return enjinV1022.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV1023: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV1023.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1023.Call,
            settings: support_1.sts.option(function () {
                return enjinV1023.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    enjinV1026: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV1026.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1026.Call,
            settings: support_1.sts.option(function () {
                return enjinV1026.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1032.Call,
            settings: support_1.sts.option(function () {
                return enjinV1032.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    enjinV1050: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: enjinV1050.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: enjinV1050.Call,
            settings: support_1.sts.option(function () {
                return enjinV1050.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v102: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v102.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v102.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v103: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v103.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v103.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v104: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v104.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v104.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v105: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v105.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v105.Call,
            paysRemainingFee: support_1.sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v106: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v106.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v106.Call,
            settings: support_1.sts.option(function () {
                return v106.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v110: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v110.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v110.Call,
            settings: support_1.sts.option(function () {
                return v110.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v120: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v120.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v120.Call,
            settings: support_1.sts.option(function () {
                return v120.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1021: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1021.Call,
            settings: support_1.sts.option(function () {
                return v1021.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1022: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1022.Call,
            settings: support_1.sts.option(function () {
                return v1022.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1023: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1023.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1023.Call,
            settings: support_1.sts.option(function () {
                return v1023.DispatchSettings
            }),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    v1026: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1026.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1026.Call,
            settings: support_1.sts.option(function () {
                return v1026.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1030: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1030.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1030.Call,
            settings: support_1.sts.option(function () {
                return v1030.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1031: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1031.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1031.Call,
            settings: support_1.sts.option(function () {
                return v1031.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1032: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1032.Call,
            settings: support_1.sts.option(function () {
                return v1032.DispatchSettings
            }),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     *
     * # Errors
     *
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1050: new support_1.CallType(
        'FuelTanks.dispatch_and_touch',
        support_1.sts.struct({
            tankId: v1050.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: v1050.Call,
            settings: support_1.sts.option(function () {
                return v1050.DispatchSettings
            }),
        })
    ),
}
exports.scheduleMutateFreezeState = {
    name: 'FuelTanks.schedule_mutate_freeze_state',
    /**
     * Schedule mutating of `is_frozen` state that determines if fuel tank or rule set can be
     * used
     *
     * Additional 1 read and 1 write are added to account for `on_finalize` storage operations
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     * - [`Error::FreezeQueueFull`] if the queue is full
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.schedule_mutate_freeze_state',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
        })
    ),
}
exports.insertRuleSet = {
    name: 'FuelTanks.insert_rule_set',
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixEnjinV603.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixEnjinV1000.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV1003: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV1003.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixEnjinV1003.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV1004.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixEnjinV1004.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV1005.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixEnjinV1005.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixEnjinV1012.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV1022: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixEnjinV1022.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV500: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV500.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV500.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV600: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV600.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV600.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV601: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV601.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV601.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV602: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV602.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV602.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV604: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV604.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV604.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1000: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1000.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV1000.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1003: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1003.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV1003.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixV1004: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1004.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV1004.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixV1005: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1005.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return matrixV1005.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1010.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixV1010.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1011: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1011.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixV1011.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1012: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1012.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixV1012.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1020: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1020.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixV1020.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1022: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: matrixV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: matrixV1022.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV100: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV100.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV100.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV101: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV101.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV101.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV110: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV110.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV110.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV120: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV120.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV120.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV1021: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV1021.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV1022: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV1022.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV1023: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV1023.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV1023.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    enjinV1026: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV1026.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return enjinV1026.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: enjinV1032.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    enjinV1050: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: enjinV1050.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: enjinV1050.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v102: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v102.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v102.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v103: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v103.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v103.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v104: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v104.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v104.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v105: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v105.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v105.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v106: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v106.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v106.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v110: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v110.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v110.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v120: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v120.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v120.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1021: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1021.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v1021.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1022: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1022.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v1022.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1023: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1023.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v1023.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    v1026: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1026.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return v1026.DispatchRuleDescriptor
            }),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1030: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1030.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: v1030.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1031: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1031.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: v1031.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1032: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1032.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: v1032.RuleSetDescriptor,
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     *
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1050: new support_1.CallType(
        'FuelTanks.insert_rule_set',
        support_1.sts.struct({
            tankId: v1050.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleSet: v1050.RuleSetDescriptor,
        })
    ),
}
exports.removeRuleSet = {
    name: 'FuelTanks.remove_rule_set',
    /**
     * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
     * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
     * data first. This is only callable by the fuel tank's owner.
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.remove_rule_set',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: support_1.sts.number(),
        })
    ),
}
exports.batchAddAccount = {
    name: 'FuelTanks.batch_add_account',
    /**
     * Similar to add_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.batch_add_account',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userIds: support_1.sts.array(function () {
                return matrixEnjinV603.MultiAddress
            }),
        })
    ),
}
exports.batchRemoveAccount = {
    name: 'FuelTanks.batch_remove_account',
    /**
     * Similar to remove_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.batch_remove_account',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userIds: support_1.sts.array(function () {
                return matrixEnjinV603.MultiAddress
            }),
        })
    ),
}
exports.forceSetConsumption = {
    name: 'FuelTanks.force_set_consumption',
    /**
     * Force set the fuel tank consumption
     * If `user_id` is [`Some`], it sets the consumption for that account.
     * If it is [`None`], it sets the consumption on the fuel tank directly.
     *
     * # Errors
     *
     * - [`Error::AccountNotFound`] if `user_id` is `Some` and account does not exist
     * - [`Error::FuelTankNotFound`] if tank_id does not exist
     * - [`Error::NoPermission`] if caller is not ForceOrigin or fuel tank owner
     * - [`Error::InvalidRuleSet`] if `rule_set_id` does not exist
     * - [`Error::MissingRequiredRule`] if `rule_set_id` does not have the required role
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.force_set_consumption',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: support_1.sts.option(function () {
                return matrixEnjinV603.MultiAddress
            }),
            ruleSetId: support_1.sts.number(),
            consumption: matrixEnjinV603.Consumption,
        })
    ),
}
exports.destroyFuelTank = {
    name: 'FuelTanks.destroy_fuel_tank',
    /**
     * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
     * Only callable by owner
     * The fuel tank must be frozen
     * Can only be destroyed if all accounts are removed
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if tank_id does not exist
     * - [`Error::NoPermission`] if caller is not owner
     * - [`Error::DestroyUnfrozenTank`] if tank is not frozen
     * - [`Error::DestroyWithExistingAccounts`] if there are still accounts on the tank
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.destroy_fuel_tank',
        support_1.sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.forceCreateFuelTank = {
    name: 'FuelTanks.force_create_fuel_tank',
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV603.MultiAddress,
            descriptor: matrixEnjinV603.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV1000.MultiAddress,
            descriptor: matrixEnjinV1000.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV1003: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV1003.MultiAddress,
            descriptor: matrixEnjinV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV1004.MultiAddress,
            descriptor: matrixEnjinV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV1005.MultiAddress,
            descriptor: matrixEnjinV1005.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV1012: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV1012.MultiAddress,
            descriptor: matrixEnjinV1012.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV1022: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixEnjinV1022.MultiAddress,
            descriptor: matrixEnjinV1022.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV604: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV604.MultiAddress,
            descriptor: matrixV604.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1000: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1000.MultiAddress,
            descriptor: matrixV1000.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1003: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1003.MultiAddress,
            descriptor: matrixV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixV1004: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1004.MultiAddress,
            descriptor: matrixV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixV1005: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1005.MultiAddress,
            descriptor: matrixV1005.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1010: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1010.MultiAddress,
            descriptor: matrixV1010.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1011: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1011.MultiAddress,
            descriptor: matrixV1011.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1012: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1012.MultiAddress,
            descriptor: matrixV1012.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1020: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1020.MultiAddress,
            descriptor: matrixV1020.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixV1022: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: matrixV1022.MultiAddress,
            descriptor: matrixV1022.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV101: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV101.MultiAddress,
            descriptor: enjinV101.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV110: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV110.MultiAddress,
            descriptor: enjinV110.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV120: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV120.MultiAddress,
            descriptor: enjinV120.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV1021: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV1021.MultiAddress,
            descriptor: enjinV1021.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV1022: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV1022.MultiAddress,
            descriptor: enjinV1022.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV1023: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV1023.MultiAddress,
            descriptor: enjinV1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    enjinV1026: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV1026.MultiAddress,
            descriptor: enjinV1026.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV1032: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV1032.MultiAddress,
            descriptor: enjinV1032.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV1050: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: enjinV1050.MultiAddress,
            descriptor: enjinV1050.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v105: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v105.MultiAddress,
            descriptor: v105.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v106: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v106.MultiAddress,
            descriptor: v106.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v110: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v110.MultiAddress,
            descriptor: v110.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v120: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v120.MultiAddress,
            descriptor: v120.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1021: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1021.MultiAddress,
            descriptor: v1021.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1022: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1022.MultiAddress,
            descriptor: v1022.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1023: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1023.MultiAddress,
            descriptor: v1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    v1026: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1026.MultiAddress,
            descriptor: v1026.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1030: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1030.MultiAddress,
            descriptor: v1030.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1031: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1031.MultiAddress,
            descriptor: v1031.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1032: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1032.MultiAddress,
            descriptor: v1032.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1050: new support_1.CallType(
        'FuelTanks.force_create_fuel_tank',
        support_1.sts.struct({
            owner: v1050.MultiAddress,
            descriptor: v1050.FuelTankDescriptor,
        })
    ),
}
exports.forceBatchAddAccount = {
    name: 'FuelTanks.force_batch_add_account',
    /**
     * Sets the account storage for give tank_id and account
     */
    matrixEnjinV603: new support_1.CallType(
        'FuelTanks.force_batch_add_account',
        support_1.sts.struct({
            owner: matrixEnjinV603.MultiAddress,
            tankId: matrixEnjinV603.MultiAddress,
            userIds: support_1.sts.array(function () {
                return matrixEnjinV603.MultiAddress
            }),
        })
    ),
}
exports.mutateFreezeState = {
    name: 'FuelTanks.mutate_freeze_state',
    /**
     * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     */
    matrixEnjinV1000: new support_1.CallType(
        'FuelTanks.mutate_freeze_state',
        support_1.sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
        })
    ),
}
