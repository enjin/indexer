import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV101 from '../enjinV101'
import * as v102 from '../v102'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'

export const fuelTankCreated =  {
    name: 'FuelTanks.FuelTankCreated',
    /**
     * A new [`FuelTank`] was created.
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FuelTankCreated',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owns the [`FuelTank`]
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The name of the [`FuelTank`]
             */
            name: sts.bytes(),
            /**
             * The account id of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const fuelTankMutated =  {
    name: 'FuelTanks.FuelTankMutated',
    /**
     * A [`FuelTank`] was mutated
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    matrixEnjinV1012: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    matrixV500: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    matrixV1010: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    enjinV100: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    enjinV1032: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    v102: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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
    v1030: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
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

export const fuelTankDestroyed =  {
    name: 'FuelTanks.FuelTankDestroyed',
    /**
     * A [`FuelTank`] was destroyed
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FuelTankDestroyed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const callDispatched =  {
    name: 'FuelTanks.CallDispatched',
    /**
     * A call was dispatched through a [`FuelTank`].
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.CallDispatched',
        sts.struct({
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

export const accountAdded =  {
    name: 'FuelTanks.AccountAdded',
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixEnjinV1000: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixV500: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixV1000: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    enjinV100: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    enjinV1021: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    v102: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    v1021: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
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
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: sts.bigint(),
        })
    ),
}

export const accountRemoved =  {
    name: 'FuelTanks.AccountRemoved',
    /**
     * An account was removed from a [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.AccountRemoved',
        sts.struct({
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

export const accountRuleDataRemoved =  {
    name: 'FuelTanks.AccountRuleDataRemoved',
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    matrixEnjinV1000: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    matrixEnjinV1012: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    matrixV500: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    matrixV1000: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    matrixV1010: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    matrixV1012: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    enjinV100: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    enjinV1021: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    enjinV1032: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    v102: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    v1021: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    v1030: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
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
    v1032: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
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
            ruleSetId: sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v1032.DispatchRuleKind,
        })
    ),
}

export const ruleSetInserted =  {
    name: 'FuelTanks.RuleSetInserted',
    /**
     * A new rule set was added to [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.RuleSetInserted',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was added
             */
            ruleSetId: sts.number(),
        })
    ),
}

export const ruleSetRemoved =  {
    name: 'FuelTanks.RuleSetRemoved',
    /**
     * A rule set was removed from [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.RuleSetRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: sts.number(),
        })
    ),
}

export const mutateFreezeStateScheduled =  {
    name: 'FuelTanks.MutateFreezeStateScheduled',
    /**
     * The freeze state mutation for fuel tank or its rule set was scheduled
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.MutateFreezeStateScheduled',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
        })
    ),
}

export const freezeStateMutated =  {
    name: 'FuelTanks.FreezeStateMutated',
    /**
     * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FreezeStateMutated',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
        })
    ),
}

export const scheduleMutateFreezeStateFailed =  {
    name: 'FuelTanks.ScheduleMutateFreezeStateFailed',
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixV500: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV500.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: matrixV500.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixV602: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV602.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: matrixV602.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixV604: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixV604.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: matrixV604.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    enjinV100: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV100.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: enjinV100.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    enjinV101: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: enjinV101.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: enjinV101.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v102: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v102.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: v102.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v104: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v104.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: v104.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v105: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v105.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: v105.DispatchError,
        })
    ),
}

export const dispatchFailed =  {
    name: 'FuelTanks.DispatchFailed',
    /**
     * The dispatch of a call has failed
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    matrixV500: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    matrixV602: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    matrixV604: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    enjinV100: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    enjinV101: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    v102: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    v104: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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
    v105: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
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

export const consumptionSet =  {
    name: 'FuelTanks.ConsumptionSet',
    /**
     * The consumption for an account was set for a rule set on a [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.ConsumptionSet',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible user [`AccountId`](frame_system::Config::AccountId) whose consumption
             * was set
             */
            userId: sts.option(() => matrixEnjinV603.AccountId32),
            /**
             * The [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.number(),
            /**
             * The new [`Consumption`](crate::Consumption)
             */
            consumption: matrixEnjinV603.Consumption,
        })
    ),
}

export const migrationStep =  {
    name: 'FuelTanks.MigrationStep',
    /**
     * The migration step has completed
     */
    matrixEnjinV1012: new EventType(
        'FuelTanks.MigrationStep',
        sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: sts.number(),
            /**
             * The migration phase
             */
            phase: sts.number(),
        })
    ),
}
