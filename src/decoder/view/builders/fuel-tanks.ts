import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import type { ViewBuilderFn } from '../types'

function identifier(params: Record<string, unknown>, path: string): string {
    return displayValue(getArg(params, `${path}.Id`) ?? getArg(params, path))
}

function addIdentifier(builder: TransactionViewBuilder, title: string, value: string): TransactionViewBuilder {
    return builder.when(value, (b) => b.withText(title, value))
}

function addTank(builder: TransactionViewBuilder, call: Parameters<ViewBuilderFn>[0]['call']): TransactionViewBuilder {
    return addIdentifier(builder, 'Fuel Tank', identifier(call.params, 'tank_id'))
}

function addAccounts(
    builder: TransactionViewBuilder,
    call: Parameters<ViewBuilderFn>[0]['call']
): TransactionViewBuilder {
    const users = getArg(call.params, 'user_ids', [])
    if (!Array.isArray(users)) return builder

    for (const [index] of users.entries()) {
        addIdentifier(builder, 'Account', identifier(call.params, `user_ids.${index}`))
    }
    return builder
}

export const buildAddFuelTankAccountView: ViewBuilderFn = ({ call, network }) => {
    return addIdentifier(
        addTank(TransactionViewBuilder.create('Add Account to Fuel Tank'), call),
        'Account',
        identifier(call.params, 'user_id')
    )
        .withNetwork(network)
        .build()
}

export const buildBatchAddFuelTankAccountView: ViewBuilderFn = ({ call, network }) => {
    return addAccounts(addTank(TransactionViewBuilder.create('Add Accounts to Fuel Tank'), call), call)
        .withNetwork(network)
        .build()
}

export const buildBatchRemoveFuelTankAccountView: ViewBuilderFn = ({ call, network }) => {
    return addAccounts(addTank(TransactionViewBuilder.create('Remove Accounts from Fuel Tank'), call), call)
        .withNetwork(network)
        .build()
}

export const buildCreateFuelTankView: ViewBuilderFn = ({ call, network }) => {
    const name = displayValue(getArg(call.params, 'descriptor.name'))
    const coveragePolicy = displayValue(getArg(call.params, 'descriptor.coverage_policy'))
    const ruleSets = getArg(call.params, 'descriptor.rule_sets')
    const accountRules = getArg(call.params, 'descriptor.account_rules')
    const ruleSetCount = Array.isArray(ruleSets) ? String(ruleSets.length) : ''
    const accountRuleCount = Array.isArray(accountRules) ? String(accountRules.length) : ''

    return TransactionViewBuilder.create('Create Fuel Tank')
        .withNetwork(network)
        .when(name, (b) => b.withText('Name', name))
        .when(coveragePolicy, (b) => b.withText('Coverage Policy', coveragePolicy))
        .when(ruleSetCount, (b) => b.withText('Rule Sets', ruleSetCount))
        .when(accountRuleCount, (b) => b.withText('Account Rules', accountRuleCount))
        .build()
}

export const buildDestroyFuelTankView: ViewBuilderFn = ({ call, network }) => {
    return addTank(TransactionViewBuilder.create('Destroy Fuel Tank'), call).withNetwork(network).build()
}

export const buildSetFuelTankConsumptionView: ViewBuilderFn = ({ call, network }) => {
    const account = identifier(call.params, 'user_id')
    const ruleSetId = displayValue(getArg(call.params, 'rule_set_id'))
    const totalConsumed = displayValue(getArg(call.params, 'consumption.total_consumed'))
    const lastResetBlock = displayValue(getArg(call.params, 'consumption.last_reset_block'))

    return addIdentifier(addTank(TransactionViewBuilder.create('Set Fuel Consumption'), call), 'Account', account)
        .withNetwork(network)
        .when(ruleSetId, (b) => b.withText('Rule Set ID', ruleSetId))
        .when(totalConsumed, (b) => b.withText('Total Consumed', totalConsumed))
        .when(lastResetBlock, (b) => b.withText('Last Reset Block', lastResetBlock))
        .build()
}

export const buildInsertFuelTankRuleSetView: ViewBuilderFn = ({ call, network }) => {
    const ruleSetId = displayValue(getArg(call.params, 'rule_set_id'))
    const rules = getArg(call.params, 'rule_set.rules')
    const requireAccount = getArg(call.params, 'rule_set.require_account')
    const ruleCount = Array.isArray(rules) ? String(rules.length) : ''

    return addTank(TransactionViewBuilder.create('Add Fuel Tank Rule Set'), call)
        .withNetwork(network)
        .when(ruleSetId, (b) => b.withText('Rule Set ID', ruleSetId))
        .when(ruleCount, (b) => b.withText('Rules', ruleCount))
        .when(typeof requireAccount === 'boolean', (b) => b.withText('Require Account', requireAccount ? 'Yes' : 'No'))
        .build()
}

export const buildMutateFuelTankFreezeStateView: ViewBuilderFn = ({ call, network }) => {
    const frozen = getArg(call.params, 'is_frozen')
    const ruleSetId = displayValue(getArg(call.params, 'rule_set_id'))
    const title = frozen === false ? 'Unfreeze Fuel Tank' : 'Freeze Fuel Tank'

    return addTank(TransactionViewBuilder.create(title), call)
        .withNetwork(network)
        .when(ruleSetId, (b) => b.withText('Rule Set ID', ruleSetId))
        .build()
}

export const buildMutateFuelTankView: ViewBuilderFn = ({ call, network }) => {
    const coveragePolicy = displayValue(getArg(call.params, 'mutation.coverage_policy'))
    const accountRules = getArg(call.params, 'mutation.account_rules')
    const accountManagement = displayValue(getArg(call.params, 'mutation.user_account_management'))
    const accountRuleCount = Array.isArray(accountRules) ? String(accountRules.length) : ''

    return addTank(TransactionViewBuilder.create('Edit Fuel Tank'), call)
        .withNetwork(network)
        .when(coveragePolicy, (b) => b.withText('Coverage Policy', coveragePolicy))
        .when(accountRuleCount, (b) => b.withText('Account Rules', accountRuleCount))
        .when(accountManagement, (b) => b.withText('Account Management', accountManagement))
        .build()
}

export const buildRemoveFuelTankAccountView: ViewBuilderFn = ({ call, network }) => {
    return addIdentifier(
        addTank(TransactionViewBuilder.create('Remove Account from Fuel Tank'), call),
        'Account',
        identifier(call.params, 'user_id')
    )
        .withNetwork(network)
        .build()
}

export const buildRemoveFuelTankAccountRuleDataView: ViewBuilderFn = ({ call, network }) => {
    const ruleSetId = displayValue(getArg(call.params, 'rule_set_id'))
    const ruleKind = displayValue(getArg(call.params, 'rule_kind'))

    return addIdentifier(
        addTank(TransactionViewBuilder.create('Remove Fuel Tank Account Rule Data'), call),
        'Account',
        identifier(call.params, 'user_id')
    )
        .withNetwork(network)
        .when(ruleSetId, (b) => b.withText('Rule Set ID', ruleSetId))
        .when(ruleKind, (b) => b.withText('Rule', ruleKind))
        .build()
}

export const buildRemoveFuelTankRuleSetView: ViewBuilderFn = ({ call, network }) => {
    const ruleSetId = displayValue(getArg(call.params, 'rule_set_id'))
    return addTank(TransactionViewBuilder.create('Remove Fuel Tank Rule Set'), call)
        .withNetwork(network)
        .when(ruleSetId, (b) => b.withText('Rule Set ID', ruleSetId))
        .build()
}
