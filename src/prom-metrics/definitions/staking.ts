import api from 'prom-client'
import register from '../registry'
import Rpc from '../../util/rpc'
import { connectionManager } from '../../contexts'
import { BN } from '@polkadot/util'

export const indexer_staking_staked_total = new api.Gauge({
    name: 'indexer_staking_staked_total',
    labelNames: ['staking'],
    help: 'The total number of ENJ staked.',
    registers: [register],
})

export const indexer_staking_staked_pct = new api.Gauge({
    name: 'indexer_staking_staked_pct',
    labelNames: ['staking'],
    help: 'The percentage of ENJ staked.',
    registers: [register],
})

export const indexer_staking_pools_total = new api.Gauge({
    name: 'indexer_staking_pools_total',
    labelNames: ['staking'],
    help: 'The total number of nomination pools.',
    registers: [register],
})

export const indexer_staking_pool_stake_avg = new api.Gauge({
    name: 'indexer_staking_pool_stake_avg',
    labelNames: ['staking'],
    help: 'The average amount of ENJ staked in each pool.',
    registers: [register],
})

export const indexer_staking_unique_stakers_total = new api.Gauge({
    name: 'indexer_staking_unique_stakers_total',
    labelNames: ['staking'],
    help: 'The total number of unique stakers.',
    registers: [register],
})

export const indexer_staking_account_pools_avg = new api.Gauge({
    name: 'indexer_staking_account_pools_avg',
    labelNames: ['staking'],
    help: 'The average number of pools each staker is in.',
    registers: [register],
})

export const indexer_staking_pool_accounts_avg = new api.Gauge({
    name: 'indexer_staking_pool_accounts_avg',
    labelNames: ['staking'],
    help: 'The average number of accounts in each pool.',
    registers: [register],
})

export const indexer_staking_account_stake_avg = new api.Gauge({
    name: 'indexer_staking_account_stake_avg',
    labelNames: ['staking'],
    help: 'The average number of ENJ staked per account.',
    registers: [register],
})

export const indexer_staking_validators_total = new api.Gauge({
    name: 'indexer_staking_validators_total',
    labelNames: ['staking'],
    help: 'The total number of validators.',
    registers: [register],
})

export const indexer_staking_active_validators_total = new api.Gauge({
    name: 'indexer_staking_active_validators_total',
    labelNames: ['staking'],
    help: 'The total number of active validators.',
    registers: [register],
})

export const indexer_staking_unbonding_accounts_total = new api.Gauge({
    name: 'indexer_staking_unbonding_accounts_total',
    labelNames: ['staking'],
    help: 'The total number of accounts in the unbonding state.',
    registers: [register],
})

export const indexer_staking_unbonding_amount_total = new api.Gauge({
    name: 'indexer_staking_unbonding_amount_total',
    labelNames: ['staking'],
    help: 'The total number of ENJ currently awaiting to be unbonded.',
    registers: [register],
})

export const indexer_staking_exchange_offers_total = new api.Gauge({
    name: 'indexer_staking_exchange_offers_total',
    labelNames: ['staking'],
    help: 'The total number of staking exchange offers that have been created.',
    registers: [register],
})

export const indexer_staking_exchange_amount_total = new api.Gauge({
    name: 'indexer_staking_exchange_amount_total',
    labelNames: ['staking'],
    help: 'The total amount of ENJ offered through the staking exchange (lifetime).',
    registers: [register],
})

export const indexer_staking_active_exchange_offers_total = new api.Gauge({
    name: 'indexer_staking_active_exchange_offers_total',
    labelNames: ['staking'],
    help: 'The total number of active staking exchange offers (currently unfulfilled).',
    registers: [register],
})

export const indexer_staking_active_exchange_amount_total = new api.Gauge({
    name: 'indexer_staking_active_exchange_amount_total',
    labelNames: ['staking'],
    help: 'The total amount of ENJ currently on offer in the staking exchange.',
    registers: [register],
})

export const indexer_staking_fulfilled_exchange_offers_total = new api.Gauge({
    name: 'indexer_staking_fulfilled_exchange_offers_total',
    labelNames: ['staking'],
    help: 'The total number of staking exchange offers that have been fulfilled.',
    registers: [register],
})

export const indexer_staking_fulfilled_exchange_amount_total = new api.Gauge({
    name: 'indexer_staking_fulfilled_exchange_amount_total',
    labelNames: ['staking'],
    help: 'The total amount of ENJ that has been exchanged through the stake exchange.',
    registers: [register],
})

export default async () => {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    if (!api.query.staking || !api.query.balances) {
        return
    }

    const activeEra = await api.query.staking.activeEra()

    const [totalIssuance, stakedTotal] = await Promise.all([
        api.query.balances.totalIssuance(),
        api.query.staking.erasTotalStake(activeEra.unwrapOrDefault().index),
    ])

    const stakedPct =
        new BN(stakedTotal.toString()).div(new BN(10).pow(new BN(16))).toNumber() /
        new BN(totalIssuance.toString()).div(new BN(10).pow(new BN(18))).toNumber()

    const [
        poolsTotal,
        stakeAvg,
        uniqueStakers,
        accountPoolsAvg,
        poolAccountsAvg,
        accountStakeAvg,
        //
        validatorsTotal,
        activeValidatorsTotal,
        unbondingAccountsTotal,
        unbondingAmountTotal,
        //
        exchangeOffersTotal,
        exchangeAmountTotal,
        activeExchangefferTotal,
    ] = await Promise.all([
        em.query(`SELECT COUNT(*) FROM nomination_pool`),
        em.query(`SELECT COALESCE(AVG((balance->>'active')::numeric),0) / POW(10,18) as avg FROM nomination_pool`),
        em.query(`SELECT COUNT(DISTINCT "account_id") as count FROM pool_member`),
        em.query(
            `SELECT COALESCE(AVG(count),0) as avg FROM (SELECT COUNT(*) as count FROM pool_member GROUP BY "pool_member") as avg`
        ),
        em.query(
            `SELECT COALESCE(AVG(count),0) as avg FROM (SELECT COUNT(*) as count FROM pool_member GROUP BY "pool_id") as avg`
        ),
        em.query(`SELECT COALESCE(AVG(bonded),0) / POW(10,18) as avg FROM pool_member`),
        //
        api.query.staking.counterForValidators(),
        api.query.staking.validatorCount(),
        em.query(`SELECT COUNT(*) as count FROM pool_member WHERE unbonding_eras IS NOT NULL`),

        em.query(
            `SELECT COALESCE(SUM((era->>'balance')::numeric), 0) / POW(10,18) as sum FROM pool_member np, LATERAL jsonb_array_elements(np.unbonding_eras) era WHERE np.unbonding_eras IS NOT NULL`
        ),
        //
        em.query(`SELECT COUNT(*) as count FROM stake_exchange_offer`),
        em.query(`SELECT COALESCE(SUM(total),0) / POW(10,18) as sum FROM stake_exchange_offer`),
        em.query(`SELECT COUNT(*) as count FROM stake_exchange_offer WHERE state = 'Active'`),
    ])

    indexer_staking_staked_total.set(new BN(stakedTotal.toString()).div(new BN(10).pow(new BN(18))).toNumber())
    indexer_staking_staked_pct.set(stakedPct)
    indexer_staking_pools_total.set(Number(poolsTotal[0].count))
    indexer_staking_pool_stake_avg.set(Number(stakeAvg[0].avg))
    indexer_staking_unique_stakers_total.set(Number(uniqueStakers[0].count))
    indexer_staking_account_pools_avg.set(Number(accountPoolsAvg[0].avg))
    indexer_staking_pool_accounts_avg.set(Number(poolAccountsAvg[0].avg))
    indexer_staking_account_stake_avg.set(Number(accountStakeAvg[0].avg))
    indexer_staking_validators_total.set(validatorsTotal.toNumber())
    indexer_staking_active_validators_total.set(activeValidatorsTotal.toNumber())
    indexer_staking_unbonding_accounts_total.set(Number(unbondingAccountsTotal[0].count))
    indexer_staking_unbonding_amount_total.set(Number(unbondingAmountTotal[0].sum))
    indexer_staking_exchange_offers_total.set(Number(exchangeOffersTotal[0].count))
    indexer_staking_exchange_amount_total.set(Number(exchangeAmountTotal[0].sum))
    indexer_staking_active_exchange_offers_total.set(Number(activeExchangefferTotal[0].count))
}
