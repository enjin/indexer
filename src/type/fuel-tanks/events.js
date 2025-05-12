'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.migrationStep =
    exports.consumptionSet =
    exports.dispatchFailed =
    exports.scheduleMutateFreezeStateFailed =
    exports.freezeStateMutated =
    exports.mutateFreezeStateScheduled =
    exports.ruleSetRemoved =
    exports.ruleSetInserted =
    exports.accountRuleDataRemoved =
    exports.accountRemoved =
    exports.accountAdded =
    exports.callDispatched =
    exports.fuelTankDestroyed =
    exports.fuelTankMutated =
    exports.fuelTankCreated =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v104 = require('../v104')
var v105 = require('../v105')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
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
exports.fuelTankCreated = {
    name: 'FuelTanks.FuelTankCreated',
    /**
     * A new [`FuelTank`] was created.
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.FuelTankCreated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owns the [`FuelTank`]
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The name of the [`FuelTank`]
             */
            name: support_1.sts.bytes(),
            /**
             * The account id of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.fuelTankMutated = {
    name: 'FuelTanks.FuelTankMutated',
    /**
     * A [`FuelTank`] was mutated
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: matrixEnjinV603.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    matrixEnjinV1012: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV1012.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: matrixEnjinV1012.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    matrixV500: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV500.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: matrixV500.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    matrixV1010: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV1010.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: matrixV1010.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    enjinV100: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV100.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: enjinV100.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    enjinV1032: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV1032.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: enjinV1032.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    v102: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v102.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: v102.DefaultTankMutation,
        })
    ),
    /**
     * A [`FuelTank`] was mutated
     */
    v1030: new support_1.EventType(
        'FuelTanks.FuelTankMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1030.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: v1030.DefaultTankMutation,
        })
    ),
}
exports.fuelTankDestroyed = {
    name: 'FuelTanks.FuelTankDestroyed',
    /**
     * A [`FuelTank`] was destroyed
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.FuelTankDestroyed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.callDispatched = {
    name: 'FuelTanks.CallDispatched',
    /**
     * A call was dispatched through a [`FuelTank`].
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.CallDispatched',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.accountAdded = {
    name: 'FuelTanks.AccountAdded',
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: matrixEnjinV603.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixEnjinV1000: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: matrixEnjinV1000.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixV500: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV500.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: matrixV500.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixV1000: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: matrixV1000.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    enjinV100: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV100.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: enjinV100.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    enjinV1021: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV1021.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: enjinV1021.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    v102: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v102.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: v102.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    v1021: new support_1.EventType(
        'FuelTanks.AccountAdded',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1021.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: v1021.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: support_1.sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: support_1.sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: support_1.sts.bigint(),
        })
    ),
}
exports.accountRemoved = {
    name: 'FuelTanks.AccountRemoved',
    /**
     * An account was removed from a [`FuelTank`]
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.AccountRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.accountRuleDataRemoved = {
    name: 'FuelTanks.AccountRuleDataRemoved',
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixEnjinV603.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixEnjinV1000: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV1000.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixEnjinV1000.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixEnjinV1012: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV1012.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV1012.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixEnjinV1012.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixV500: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV500.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixV500.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixV500.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixV1000: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixV1000.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixV1000.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixV1010: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV1010.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixV1010.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixV1010.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixV1012: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV1012.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixV1012.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixV1012.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    enjinV100: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV100.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: enjinV100.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: enjinV100.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    enjinV1021: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV1021.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: enjinV1021.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: enjinV1021.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    enjinV1032: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV1032.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: enjinV1032.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: enjinV1032.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    v102: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v102.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: v102.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v102.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    v1021: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1021.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: v1021.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v1021.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    v1030: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1030.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: v1030.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v1030.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    v1032: new support_1.EventType(
        'FuelTanks.AccountRuleDataRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1032.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: v1032.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v1032.DispatchRuleKind,
        })
    ),
}
exports.ruleSetInserted = {
    name: 'FuelTanks.RuleSetInserted',
    /**
     * A new rule set was added to [`FuelTank`]
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.RuleSetInserted',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was added
             */
            ruleSetId: support_1.sts.number(),
        })
    ),
}
exports.ruleSetRemoved = {
    name: 'FuelTanks.RuleSetRemoved',
    /**
     * A rule set was removed from [`FuelTank`]
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.RuleSetRemoved',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: support_1.sts.number(),
        })
    ),
}
exports.mutateFreezeStateScheduled = {
    name: 'FuelTanks.MutateFreezeStateScheduled',
    /**
     * The freeze state mutation for fuel tank or its rule set was scheduled
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.MutateFreezeStateScheduled',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
        })
    ),
}
exports.freezeStateMutated = {
    name: 'FuelTanks.FreezeStateMutated',
    /**
     * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.FreezeStateMutated',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
        })
    ),
}
exports.scheduleMutateFreezeStateFailed = {
    name: 'FuelTanks.ScheduleMutateFreezeStateFailed',
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixV500: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV500.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixV602: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV602.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixV604: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV604.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    enjinV100: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV100.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    enjinV101: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV101.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v102: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v102.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: v102.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v104: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v104.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: v104.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v105: new support_1.EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v105.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            /**
             * The new `is_frozen` state
             */
            isFrozen: support_1.sts.boolean(),
            /**
             * The error
             */
            error: v105.DispatchError,
        })
    ),
}
exports.dispatchFailed = {
    name: 'FuelTanks.DispatchFailed',
    /**
     * The dispatch of a call has failed
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixEnjinV603.AccountId32,
            /**
             * The error
             */
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    matrixV500: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV500.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixV500.AccountId32,
            /**
             * The error
             */
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    matrixV602: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV602.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixV602.AccountId32,
            /**
             * The error
             */
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    matrixV604: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV604.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixV604.AccountId32,
            /**
             * The error
             */
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    enjinV100: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV100.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: enjinV100.AccountId32,
            /**
             * The error
             */
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    enjinV101: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV101.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: enjinV101.AccountId32,
            /**
             * The error
             */
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    v102: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v102.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: v102.AccountId32,
            /**
             * The error
             */
            error: v102.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    v104: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v104.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: v104.AccountId32,
            /**
             * The error
             */
            error: v104.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    v105: new support_1.EventType(
        'FuelTanks.DispatchFailed',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v105.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: v105.AccountId32,
            /**
             * The error
             */
            error: v105.DispatchError,
        })
    ),
}
exports.consumptionSet = {
    name: 'FuelTanks.ConsumptionSet',
    /**
     * The consumption for an account was set for a rule set on a [`FuelTank`]
     */
    matrixEnjinV603: new support_1.EventType(
        'FuelTanks.ConsumptionSet',
        support_1.sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible user [`AccountId`](frame_system::Config::AccountId) whose consumption
             * was set
             */
            userId: support_1.sts.option(function () {
                return matrixEnjinV603.AccountId32
            }),
            /**
             * The [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: support_1.sts.number(),
            /**
             * The new [`Consumption`](crate::Consumption)
             */
            consumption: matrixEnjinV603.Consumption,
        })
    ),
}
exports.migrationStep = {
    name: 'FuelTanks.MigrationStep',
    /**
     * The migration step has completed
     */
    matrixEnjinV1012: new support_1.EventType(
        'FuelTanks.MigrationStep',
        support_1.sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: support_1.sts.number(),
            /**
             * The migration phase
             */
            phase: support_1.sts.number(),
        })
    ),
}
