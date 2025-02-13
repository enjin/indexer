import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const salt = {
    /**
     *  The salt used for address generation
     */
    matrixEnjinV603: new ConstantType('FuelTanks.Salt', sts.bytes()),
}

export const maxWhitelistedCallers = {
    /**
     *  The maximum number of whitelisted callers per fuel tank
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxWhitelistedCallers', sts.number()),
}

export const maxRuleSets = {
    /**
     *  The maximum number of rule sets per fuel tank
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxRuleSets', sts.number()),
}

export const maxRulesPerSet = {
    /**
     *  Maximum number of rules in a ruleset
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxRulesPerSet', sts.number()),
}

export const maxAccountRuleDataLength = {
    /**
     *  Max length of data a rule can store per account
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxAccountRuleDataLength', sts.number()),
}

export const maxCallFilters = {
    /**
     *  The maximum number of permitted calls
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxCallFilters', sts.number()),
}

export const maxWhitelistedCollections = {
    /**
     *  Maximum number of whitelisted collections for a fuel tank
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxWhitelistedCollections', sts.number()),
}

export const maxCallSize = {
    /**
     *  The maximum number of rule sets per fuel tank
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxCallSize', sts.number()),
}

export const maxFreezeQueueLength = {
    /**
     *  The maximum number of fuel tank freeze state mutations that can be queued
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxFreezeQueueLength', sts.number()),
}

export const maxUserHistorySize = {
    /**
     *  The maximum number of user history that can be stored
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxUserHistorySize', sts.number()),
}

export const maxBatchAccounts = {
    /**
     *  The maximum number of accounts for batch operations
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxBatchAccounts', sts.number()),
}

export const maxFuelTankNameLength = {
    /**
     *  The maximum length for fuel tank name
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxFuelTankNameLength', sts.number()),
}

export const maxExtrinsicNameLength = {
    /**
     *  The maximum length for extrinsics for PermittedExtrinsic rule
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxExtrinsicNameLength', sts.number()),
}

export const maxPermittedExtrinsicLength = {
    /**
     *  The maximum number of extrinsics to allow for PermittedExtrinsic rule
     */
    matrixEnjinV603: new ConstantType('FuelTanks.MaxPermittedExtrinsicLength', sts.number()),
}

export const tankCreationDeposit = {
    /**
     *  Deposit for creating a new fuel tank
     */
    matrixEnjinV603: new ConstantType('FuelTanks.TankCreationDeposit', sts.bigint()),
}

export const accountCreationDeposit = {
    /**
     *  Deposit for creating an account
     */
    matrixEnjinV603: new ConstantType('FuelTanks.AccountCreationDeposit', sts.bigint()),
}

export const reserveIdentifier = {
    /**
     *  The identifier used for currency reserves
     */
    matrixEnjinV603: new ConstantType('FuelTanks.ReserveIdentifier', sts.bytes()),
}

export const levyScale = {
    /**
     *  value of a unit of the independant variable in EFI for the levy discount according to
     *  f(x) = (1/2)^x. Cannot be 0.
     */
    matrixEnjinV603: new ConstantType('FuelTanks.LevyScale', sts.number()),
}

export const levy = {
    /**
     *  The Levy applied to all transactions in Matrix.
     */
    matrixEnjinV603: new ConstantType('FuelTanks.Levy', matrixEnjinV603.Perbill),
}
