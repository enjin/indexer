import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV101 from '../enjinV101'
import * as v102 from '../v102'
import * as v103 from '../v103'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as v106 from '../v106'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixV601 from '../matrixV601'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as matrixV1003 from '../matrixV1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'
import * as enjinV1022 from '../enjinV1022'
import * as v1022 from '../v1022'
import * as matrixV1023 from '../matrixV1023'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const createFuelTank = {
    name: 'FuelTanks.create_fuel_tank',
    /**
     * Creates a fuel tank, given a descriptor
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1000: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1003: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixEnjinV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixEnjinV1004: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixEnjinV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixEnjinV1005: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1022: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV500: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV600: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV601: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV602: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV604: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1000: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1003: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixV1004: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    matrixV1005: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1010: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1011: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1012: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1020: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    matrixV1022: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixV1022.FuelTankDescriptor,
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
    matrixV1023: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixV1023.FuelTankDescriptor,
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
    enjinV100: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV101: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV110: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV120: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV1021: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV1022: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV1023: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: enjinV1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    enjinV1026: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV1032: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    enjinV1050: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v102: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v103: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v104: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v105: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v106: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v110: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v120: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1021: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1022: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1023: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::create_fuel_tank`].
     */
    v1026: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1030: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1031: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1032: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
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
    v1050: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v1050.FuelTankDescriptor,
        })
    ),
}

export const mutateFuelTank = {
    name: 'FuelTanks.mutate_fuel_tank',
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     *
     * # Errors
     *
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    matrixV500: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    matrixV1010: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    enjinV100: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    enjinV1032: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    v102: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
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
    v1030: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
            tankId: v1030.MultiAddress,
            mutation: v1030.DefaultTankMutation,
        })
    ),
}

export const addAccount = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.add_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const removeAccount = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.remove_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const removeAccountRuleData = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixEnjinV1000: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            userId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            userId: matrixEnjinV1012.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV500: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixV500.MultiAddress,
            userId: matrixV500.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1000: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixV1000.MultiAddress,
            userId: matrixV1000.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1010: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixV1010.MultiAddress,
            userId: matrixV1010.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1012: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixV1012.MultiAddress,
            userId: matrixV1012.MultiAddress,
            ruleSetId: sts.number(),
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
    enjinV100: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: enjinV100.MultiAddress,
            userId: enjinV100.MultiAddress,
            ruleSetId: sts.number(),
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
    enjinV1021: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: enjinV1021.MultiAddress,
            userId: enjinV1021.MultiAddress,
            ruleSetId: sts.number(),
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
    enjinV1032: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: enjinV1032.MultiAddress,
            userId: enjinV1032.MultiAddress,
            ruleSetId: sts.number(),
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
    v102: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: v102.MultiAddress,
            userId: v102.MultiAddress,
            ruleSetId: sts.number(),
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
    v1021: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: v1021.MultiAddress,
            userId: v1021.MultiAddress,
            ruleSetId: sts.number(),
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
    v1030: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: v1030.MultiAddress,
            userId: v1030.MultiAddress,
            ruleSetId: sts.number(),
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
    v1032: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: v1032.MultiAddress,
            userId: v1032.MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: v1032.DispatchRuleKind,
        })
    ),
}

export const dispatch = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV603.Call,
            settings: sts.option(() => matrixEnjinV603.DispatchSettings),
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
    matrixEnjinV1000: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1000.Call,
            settings: sts.option(() => matrixEnjinV1000.DispatchSettings),
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
    matrixEnjinV1003: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1003.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1003.Call,
            settings: sts.option(() => matrixEnjinV1003.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixEnjinV1004: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1004.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1004.Call,
            settings: sts.option(() => matrixEnjinV1004.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixEnjinV1005: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1005.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1005.Call,
            settings: sts.option(() => matrixEnjinV1005.DispatchSettings),
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1012.Call,
            settings: sts.option(() => matrixEnjinV1012.DispatchSettings),
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
    matrixEnjinV1022: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1022.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1022.Call,
            settings: sts.option(() => matrixEnjinV1022.DispatchSettings),
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
    matrixV500: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV500.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV500.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV600: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV600.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV600.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV601: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV601.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV601.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV602: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV602.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV602.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV604: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV604.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV604.Call,
            settings: sts.option(() => matrixV604.DispatchSettings),
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
    matrixV1000: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1000.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1000.Call,
            settings: sts.option(() => matrixV1000.DispatchSettings),
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
    matrixV1003: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1003.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1003.Call,
            settings: sts.option(() => matrixV1003.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixV1004: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1004.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1004.Call,
            settings: sts.option(() => matrixV1004.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    matrixV1005: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1005.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1005.Call,
            settings: sts.option(() => matrixV1005.DispatchSettings),
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
    matrixV1010: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1010.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1010.Call,
            settings: sts.option(() => matrixV1010.DispatchSettings),
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
    matrixV1011: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1011.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1011.Call,
            settings: sts.option(() => matrixV1011.DispatchSettings),
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
    matrixV1012: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1012.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1012.Call,
            settings: sts.option(() => matrixV1012.DispatchSettings),
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
    matrixV1020: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1020.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1020.Call,
            settings: sts.option(() => matrixV1020.DispatchSettings),
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
    matrixV1022: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1022.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1022.Call,
            settings: sts.option(() => matrixV1022.DispatchSettings),
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
    matrixV1023: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixV1023.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1023.Call,
            settings: sts.option(() => matrixV1023.DispatchSettings),
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
    enjinV100: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV100.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV100.Call,
            paysRemainingFee: sts.boolean(),
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
    enjinV101: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV101.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV101.Call,
            settings: sts.option(() => enjinV101.DispatchSettings),
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
    enjinV110: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV110.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV110.Call,
            settings: sts.option(() => enjinV110.DispatchSettings),
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
    enjinV120: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV120.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV120.Call,
            settings: sts.option(() => enjinV120.DispatchSettings),
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
    enjinV1021: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV1021.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1021.Call,
            settings: sts.option(() => enjinV1021.DispatchSettings),
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
    enjinV1022: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV1022.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1022.Call,
            settings: sts.option(() => enjinV1022.DispatchSettings),
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
    enjinV1023: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV1023.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1023.Call,
            settings: sts.option(() => enjinV1023.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    enjinV1026: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV1026.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1026.Call,
            settings: sts.option(() => enjinV1026.DispatchSettings),
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
    enjinV1032: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV1032.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1032.Call,
            settings: sts.option(() => enjinV1032.DispatchSettings),
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
    enjinV1050: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: enjinV1050.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1050.Call,
            settings: sts.option(() => enjinV1050.DispatchSettings),
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
    v102: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v102.MultiAddress,
            ruleSetId: sts.number(),
            call: v102.Call,
            paysRemainingFee: sts.boolean(),
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
    v103: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v103.MultiAddress,
            ruleSetId: sts.number(),
            call: v103.Call,
            paysRemainingFee: sts.boolean(),
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
    v104: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v104.MultiAddress,
            ruleSetId: sts.number(),
            call: v104.Call,
            paysRemainingFee: sts.boolean(),
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
    v105: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v105.MultiAddress,
            ruleSetId: sts.number(),
            call: v105.Call,
            paysRemainingFee: sts.boolean(),
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
    v106: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v106.MultiAddress,
            ruleSetId: sts.number(),
            call: v106.Call,
            settings: sts.option(() => v106.DispatchSettings),
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
    v110: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v110.MultiAddress,
            ruleSetId: sts.number(),
            call: v110.Call,
            settings: sts.option(() => v110.DispatchSettings),
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
    v120: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v120.MultiAddress,
            ruleSetId: sts.number(),
            call: v120.Call,
            settings: sts.option(() => v120.DispatchSettings),
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
    v1021: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1021.MultiAddress,
            ruleSetId: sts.number(),
            call: v1021.Call,
            settings: sts.option(() => v1021.DispatchSettings),
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
    v1022: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1022.MultiAddress,
            ruleSetId: sts.number(),
            call: v1022.Call,
            settings: sts.option(() => v1022.DispatchSettings),
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
    v1023: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1023.MultiAddress,
            ruleSetId: sts.number(),
            call: v1023.Call,
            settings: sts.option(() => v1023.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch`].
     */
    v1026: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1026.MultiAddress,
            ruleSetId: sts.number(),
            call: v1026.Call,
            settings: sts.option(() => v1026.DispatchSettings),
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
    v1030: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1030.MultiAddress,
            ruleSetId: sts.number(),
            call: v1030.Call,
            settings: sts.option(() => v1030.DispatchSettings),
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
    v1031: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1031.MultiAddress,
            ruleSetId: sts.number(),
            call: v1031.Call,
            settings: sts.option(() => v1031.DispatchSettings),
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
    v1032: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1032.MultiAddress,
            ruleSetId: sts.number(),
            call: v1032.Call,
            settings: sts.option(() => v1032.DispatchSettings),
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
    v1050: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1050.MultiAddress,
            ruleSetId: sts.number(),
            call: v1050.Call,
            settings: sts.option(() => v1050.DispatchSettings),
        })
    ),
}

export const dispatchAndTouch = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV603.Call,
            settings: sts.option(() => matrixEnjinV603.DispatchSettings),
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
    matrixEnjinV1000: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1000.Call,
            settings: sts.option(() => matrixEnjinV1000.DispatchSettings),
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
    matrixEnjinV1003: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1003.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1003.Call,
            settings: sts.option(() => matrixEnjinV1003.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixEnjinV1004: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1004.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1004.Call,
            settings: sts.option(() => matrixEnjinV1004.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixEnjinV1005: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1005.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1005.Call,
            settings: sts.option(() => matrixEnjinV1005.DispatchSettings),
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1012.Call,
            settings: sts.option(() => matrixEnjinV1012.DispatchSettings),
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
    matrixEnjinV1022: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1022.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1022.Call,
            settings: sts.option(() => matrixEnjinV1022.DispatchSettings),
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
    matrixV500: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV500.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV500.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV600: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV600.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV600.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV601: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV601.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV601.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV602: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV602.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV602.Call,
            paysRemainingFee: sts.boolean(),
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
    matrixV604: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV604.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV604.Call,
            settings: sts.option(() => matrixV604.DispatchSettings),
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
    matrixV1000: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1000.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1000.Call,
            settings: sts.option(() => matrixV1000.DispatchSettings),
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
    matrixV1003: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1003.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1003.Call,
            settings: sts.option(() => matrixV1003.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixV1004: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1004.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1004.Call,
            settings: sts.option(() => matrixV1004.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    matrixV1005: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1005.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1005.Call,
            settings: sts.option(() => matrixV1005.DispatchSettings),
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
    matrixV1010: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1010.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1010.Call,
            settings: sts.option(() => matrixV1010.DispatchSettings),
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
    matrixV1011: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1011.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1011.Call,
            settings: sts.option(() => matrixV1011.DispatchSettings),
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
    matrixV1012: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1012.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1012.Call,
            settings: sts.option(() => matrixV1012.DispatchSettings),
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
    matrixV1020: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1020.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1020.Call,
            settings: sts.option(() => matrixV1020.DispatchSettings),
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
    matrixV1022: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1022.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1022.Call,
            settings: sts.option(() => matrixV1022.DispatchSettings),
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
    matrixV1023: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixV1023.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixV1023.Call,
            settings: sts.option(() => matrixV1023.DispatchSettings),
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
    enjinV100: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV100.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV100.Call,
            paysRemainingFee: sts.boolean(),
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
    enjinV101: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV101.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV101.Call,
            settings: sts.option(() => enjinV101.DispatchSettings),
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
    enjinV110: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV110.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV110.Call,
            settings: sts.option(() => enjinV110.DispatchSettings),
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
    enjinV120: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV120.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV120.Call,
            settings: sts.option(() => enjinV120.DispatchSettings),
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
    enjinV1021: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV1021.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1021.Call,
            settings: sts.option(() => enjinV1021.DispatchSettings),
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
    enjinV1022: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV1022.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1022.Call,
            settings: sts.option(() => enjinV1022.DispatchSettings),
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
    enjinV1023: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV1023.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1023.Call,
            settings: sts.option(() => enjinV1023.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    enjinV1026: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV1026.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1026.Call,
            settings: sts.option(() => enjinV1026.DispatchSettings),
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
    enjinV1032: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV1032.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1032.Call,
            settings: sts.option(() => enjinV1032.DispatchSettings),
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
    enjinV1050: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: enjinV1050.MultiAddress,
            ruleSetId: sts.number(),
            call: enjinV1050.Call,
            settings: sts.option(() => enjinV1050.DispatchSettings),
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
    v102: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v102.MultiAddress,
            ruleSetId: sts.number(),
            call: v102.Call,
            paysRemainingFee: sts.boolean(),
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
    v103: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v103.MultiAddress,
            ruleSetId: sts.number(),
            call: v103.Call,
            paysRemainingFee: sts.boolean(),
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
    v104: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v104.MultiAddress,
            ruleSetId: sts.number(),
            call: v104.Call,
            paysRemainingFee: sts.boolean(),
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
    v105: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v105.MultiAddress,
            ruleSetId: sts.number(),
            call: v105.Call,
            paysRemainingFee: sts.boolean(),
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
    v106: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v106.MultiAddress,
            ruleSetId: sts.number(),
            call: v106.Call,
            settings: sts.option(() => v106.DispatchSettings),
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
    v110: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v110.MultiAddress,
            ruleSetId: sts.number(),
            call: v110.Call,
            settings: sts.option(() => v110.DispatchSettings),
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
    v120: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v120.MultiAddress,
            ruleSetId: sts.number(),
            call: v120.Call,
            settings: sts.option(() => v120.DispatchSettings),
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
    v1021: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1021.MultiAddress,
            ruleSetId: sts.number(),
            call: v1021.Call,
            settings: sts.option(() => v1021.DispatchSettings),
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
    v1022: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1022.MultiAddress,
            ruleSetId: sts.number(),
            call: v1022.Call,
            settings: sts.option(() => v1022.DispatchSettings),
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
    v1023: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1023.MultiAddress,
            ruleSetId: sts.number(),
            call: v1023.Call,
            settings: sts.option(() => v1023.DispatchSettings),
        })
    ),
    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    v1026: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1026.MultiAddress,
            ruleSetId: sts.number(),
            call: v1026.Call,
            settings: sts.option(() => v1026.DispatchSettings),
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
    v1030: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1030.MultiAddress,
            ruleSetId: sts.number(),
            call: v1030.Call,
            settings: sts.option(() => v1030.DispatchSettings),
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
    v1031: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1031.MultiAddress,
            ruleSetId: sts.number(),
            call: v1031.Call,
            settings: sts.option(() => v1031.DispatchSettings),
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
    v1032: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1032.MultiAddress,
            ruleSetId: sts.number(),
            call: v1032.Call,
            settings: sts.option(() => v1032.DispatchSettings),
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
    v1050: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1050.MultiAddress,
            ruleSetId: sts.number(),
            call: v1050.Call,
            settings: sts.option(() => v1050.DispatchSettings),
        })
    ),
}

export const scheduleMutateFreezeState = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.schedule_mutate_freeze_state',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        })
    ),
}

export const insertRuleSet = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV603.DispatchRuleDescriptor),
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
    matrixEnjinV1000: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV1000.DispatchRuleDescriptor),
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
    matrixEnjinV1003: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1003.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV1003.DispatchRuleDescriptor),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixEnjinV1004: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1004.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV1004.DispatchRuleDescriptor),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixEnjinV1005: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1005.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV1005.DispatchRuleDescriptor),
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1012.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixEnjinV1022: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1022.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV500: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV500.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV500.DispatchRuleDescriptor),
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
    matrixV600: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV600.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV600.DispatchRuleDescriptor),
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
    matrixV601: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV601.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV601.DispatchRuleDescriptor),
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
    matrixV602: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV602.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV602.DispatchRuleDescriptor),
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
    matrixV604: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV604.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV604.DispatchRuleDescriptor),
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
    matrixV1000: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1000.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV1000.DispatchRuleDescriptor),
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
    matrixV1003: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1003.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV1003.DispatchRuleDescriptor),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixV1004: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1004.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV1004.DispatchRuleDescriptor),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    matrixV1005: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1005.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixV1005.DispatchRuleDescriptor),
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
    matrixV1010: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1010.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1011: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1011.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1012: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1012.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1020: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1020.MultiAddress,
            ruleSetId: sts.number(),
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
    matrixV1022: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1022.MultiAddress,
            ruleSetId: sts.number(),
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
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixV1023: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixV1023.MultiAddress,
            ruleSetId: sts.number(),
            ruleSet: matrixV1023.RuleSetDescriptor,
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
    enjinV100: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV100.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV100.DispatchRuleDescriptor),
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
    enjinV101: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV101.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV101.DispatchRuleDescriptor),
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
    enjinV110: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV110.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV110.DispatchRuleDescriptor),
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
    enjinV120: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV120.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV120.DispatchRuleDescriptor),
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
    enjinV1021: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV1021.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV1021.DispatchRuleDescriptor),
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
    enjinV1022: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV1022.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV1022.DispatchRuleDescriptor),
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
    enjinV1023: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV1023.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV1023.DispatchRuleDescriptor),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    enjinV1026: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV1026.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => enjinV1026.DispatchRuleDescriptor),
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
    enjinV1032: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV1032.MultiAddress,
            ruleSetId: sts.number(),
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
    enjinV1050: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: enjinV1050.MultiAddress,
            ruleSetId: sts.number(),
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
    v102: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v102.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v102.DispatchRuleDescriptor),
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
    v103: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v103.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v103.DispatchRuleDescriptor),
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
    v104: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v104.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v104.DispatchRuleDescriptor),
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
    v105: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v105.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v105.DispatchRuleDescriptor),
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
    v106: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v106.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v106.DispatchRuleDescriptor),
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
    v110: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v110.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v110.DispatchRuleDescriptor),
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
    v120: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v120.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v120.DispatchRuleDescriptor),
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
    v1021: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1021.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v1021.DispatchRuleDescriptor),
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
    v1022: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1022.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v1022.DispatchRuleDescriptor),
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
    v1023: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1023.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v1023.DispatchRuleDescriptor),
        })
    ),
    /**
     * See [`Pallet::insert_rule_set`].
     */
    v1026: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1026.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v1026.DispatchRuleDescriptor),
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
    v1030: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1030.MultiAddress,
            ruleSetId: sts.number(),
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
    v1031: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1031.MultiAddress,
            ruleSetId: sts.number(),
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
    v1032: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1032.MultiAddress,
            ruleSetId: sts.number(),
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
    v1050: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1050.MultiAddress,
            ruleSetId: sts.number(),
            ruleSet: v1050.RuleSetDescriptor,
        })
    ),
}

export const removeRuleSet = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.remove_rule_set',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
        })
    ),
}

export const batchAddAccount = {
    name: 'FuelTanks.batch_add_account',
    /**
     * Similar to add_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.batch_add_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userIds: sts.array(() => matrixEnjinV603.MultiAddress),
        })
    ),
}

export const batchRemoveAccount = {
    name: 'FuelTanks.batch_remove_account',
    /**
     * Similar to remove_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.batch_remove_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userIds: sts.array(() => matrixEnjinV603.MultiAddress),
        })
    ),
}

export const forceSetConsumption = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.force_set_consumption',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: sts.option(() => matrixEnjinV603.MultiAddress),
            ruleSetId: sts.number(),
            consumption: matrixEnjinV603.Consumption,
        })
    ),
}

export const destroyFuelTank = {
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
    matrixEnjinV603: new CallType(
        'FuelTanks.destroy_fuel_tank',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const forceCreateFuelTank = {
    name: 'FuelTanks.force_create_fuel_tank',
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1000: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1003: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixEnjinV1003.MultiAddress,
            descriptor: matrixEnjinV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixEnjinV1004: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixEnjinV1004.MultiAddress,
            descriptor: matrixEnjinV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixEnjinV1005: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1012: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixEnjinV1022: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV604: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1000: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1003: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixV1003.MultiAddress,
            descriptor: matrixV1003.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixV1004: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixV1004.MultiAddress,
            descriptor: matrixV1004.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    matrixV1005: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1010: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1011: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1012: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1020: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1022: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    matrixV1023: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixV1023.MultiAddress,
            descriptor: matrixV1023.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     *
     * # Errors
     *
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    enjinV101: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV110: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV120: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV1021: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV1022: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV1023: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: enjinV1023.MultiAddress,
            descriptor: enjinV1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    enjinV1026: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV1032: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    enjinV1050: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v105: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v106: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v110: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v120: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1021: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1022: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1023: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: v1023.MultiAddress,
            descriptor: v1023.FuelTankDescriptor,
        })
    ),
    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    v1026: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1030: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1031: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1032: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
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
    v1050: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: v1050.MultiAddress,
            descriptor: v1050.FuelTankDescriptor,
        })
    ),
}

export const forceBatchAddAccount = {
    name: 'FuelTanks.force_batch_add_account',
    /**
     * Sets the account storage for give tank_id and account
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.force_batch_add_account',
        sts.struct({
            owner: matrixEnjinV603.MultiAddress,
            tankId: matrixEnjinV603.MultiAddress,
            userIds: sts.array(() => matrixEnjinV603.MultiAddress),
        })
    ),
}

export const mutateFreezeState = {
    name: 'FuelTanks.mutate_freeze_state',
    /**
     * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
     *
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.mutate_freeze_state',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        })
    ),
}
