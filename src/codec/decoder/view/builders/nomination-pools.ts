import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import { NOMINATION_POOL_CREATE_DEPOSIT } from '../constants'
import type { ViewBuilderFn } from '../types'

export const buildCreatePoolView: ViewBuilderFn = ({ call, network, coinId }) => {
    const amount = displayValue(getArg(call.params, 'amount'))
    return TransactionViewBuilder.create('Create Nomination Pool')
        .withNetwork(network)
        .when(amount, (b) => b.withCoin('Amount', amount, coinId))
        .withCoin('Pool Creation Deposit', NOMINATION_POOL_CREATE_DEPOSIT, coinId)
        .build()
}

export const buildBondView: ViewBuilderFn = ({ call, network, coinId }) => {
    const amount = displayValue(getArg(call.params, 'amount.Amount') ?? getArg(call.params, 'amount'))
    const poolId = displayValue(getArg(call.params, 'pool_id'))
    return TransactionViewBuilder.create('Stake ENJ')
        .when(poolId, (b) => b.withResource('pool', poolId))
        .withNetwork(network)
        .when(amount, (b) => b.withCoin('Amount', amount, coinId))
        .build()
}

export const buildUnbondView: ViewBuilderFn = ({ call, network }) => {
    const poolId = displayValue(getArg(call.params, 'pool_id'))
    const points = displayValue(getArg(call.params, 'unbonding_points'))
    return TransactionViewBuilder.create('Unbond Stake')
        .when(poolId, (b) => b.withResource('pool', poolId))
        .withNetwork(network)
        .when(points, (b) => b.withText('Unbonding points', points))
        .build()
}

export const buildWithdrawUnbondedView: ViewBuilderFn = ({ call, network }) => {
    const poolId = displayValue(getArg(call.params, 'pool_id'))
    return TransactionViewBuilder.create('Claim Unstaked ENJ')
        .when(poolId, (b) => b.withResource('pool', poolId))
        .withNetwork(network)
        .build()
}

export const buildNominatePoolView: ViewBuilderFn = ({ call, network }) => {
    const poolId = displayValue(getArg(call.params, 'pool_id'))
    const validators = getArg(call.params, 'validators', [])
    const count = Array.isArray(validators) ? validators.length : 0
    return TransactionViewBuilder.create('Nominate Validators')
        .when(poolId, (b) => b.withResource('pool', poolId))
        .withNetwork(network)
        .withText('Validators', String(count))
        .build()
}

export const buildMutatePoolView: ViewBuilderFn = ({ call, network }) => {
    const poolId = displayValue(getArg(call.params, 'pool_id'))
    return TransactionViewBuilder.create('Edit Nomination Pool')
        .when(poolId, (b) => b.withResource('pool', poolId))
        .withNetwork(network)
        .build()
}

export const buildDestroyPoolView: ViewBuilderFn = ({ call, network }) => {
    const poolId = displayValue(getArg(call.params, 'pool_id'))
    return TransactionViewBuilder.create('Destroy Nomination Pool')
        .when(poolId, (b) => b.withResource('pool', poolId))
        .withNetwork(network)
        .build()
}
