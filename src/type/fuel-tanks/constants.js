'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.levy =
    exports.levyScale =
    exports.reserveIdentifier =
    exports.accountCreationDeposit =
    exports.tankCreationDeposit =
    exports.maxPermittedExtrinsicLength =
    exports.maxExtrinsicNameLength =
    exports.maxFuelTankNameLength =
    exports.maxBatchAccounts =
    exports.maxUserHistorySize =
    exports.maxFreezeQueueLength =
    exports.maxCallSize =
    exports.maxWhitelistedCollections =
    exports.maxCallFilters =
    exports.maxAccountRuleDataLength =
    exports.maxRulesPerSet =
    exports.maxRuleSets =
    exports.maxWhitelistedCallers =
    exports.salt =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.salt = {
    /**
     *  The salt used for address generation
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.Salt', support_1.sts.bytes()),
}
exports.maxWhitelistedCallers = {
    /**
     *  The maximum number of whitelisted callers per fuel tank
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxWhitelistedCallers', support_1.sts.number()),
}
exports.maxRuleSets = {
    /**
     *  The maximum number of rule sets per fuel tank
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxRuleSets', support_1.sts.number()),
}
exports.maxRulesPerSet = {
    /**
     *  Maximum number of rules in a ruleset
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxRulesPerSet', support_1.sts.number()),
}
exports.maxAccountRuleDataLength = {
    /**
     *  Max length of data a rule can store per account
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxAccountRuleDataLength', support_1.sts.number()),
}
exports.maxCallFilters = {
    /**
     *  The maximum number of permitted calls
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxCallFilters', support_1.sts.number()),
}
exports.maxWhitelistedCollections = {
    /**
     *  Maximum number of whitelisted collections for a fuel tank
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxWhitelistedCollections', support_1.sts.number()),
}
exports.maxCallSize = {
    /**
     *  The maximum number of rule sets per fuel tank
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxCallSize', support_1.sts.number()),
}
exports.maxFreezeQueueLength = {
    /**
     *  The maximum number of fuel tank freeze state mutations that can be queued
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxFreezeQueueLength', support_1.sts.number()),
}
exports.maxUserHistorySize = {
    /**
     *  The maximum number of user history that can be stored
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxUserHistorySize', support_1.sts.number()),
}
exports.maxBatchAccounts = {
    /**
     *  The maximum number of accounts for batch operations
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxBatchAccounts', support_1.sts.number()),
}
exports.maxFuelTankNameLength = {
    /**
     *  The maximum length for fuel tank name
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxFuelTankNameLength', support_1.sts.number()),
}
exports.maxExtrinsicNameLength = {
    /**
     *  The maximum length for extrinsics for PermittedExtrinsic rule
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxExtrinsicNameLength', support_1.sts.number()),
}
exports.maxPermittedExtrinsicLength = {
    /**
     *  The maximum number of extrinsics to allow for PermittedExtrinsic rule
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.MaxPermittedExtrinsicLength', support_1.sts.number()),
}
exports.tankCreationDeposit = {
    /**
     *  Deposit for creating a new fuel tank
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.TankCreationDeposit', support_1.sts.bigint()),
}
exports.accountCreationDeposit = {
    /**
     *  Deposit for creating an account
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.AccountCreationDeposit', support_1.sts.bigint()),
}
exports.reserveIdentifier = {
    /**
     *  The identifier used for currency reserves
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.ReserveIdentifier', support_1.sts.bytes()),
}
exports.levyScale = {
    /**
     *  value of a unit of the independant variable in EFI for the levy discount according to
     *  f(x) = (1/2)^x. Cannot be 0.
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.LevyScale', support_1.sts.number()),
}
exports.levy = {
    /**
     *  The Levy applied to all transactions in Matrix.
     */
    matrixEnjinV603: new support_1.ConstantType('FuelTanks.Levy', matrixEnjinV603.Perbill),
}
