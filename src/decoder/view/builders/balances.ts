import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import type { ViewBuilderFn } from '../types'

export const buildTransferBalanceView: ViewBuilderFn = ({ call, network, coinId }) => {
    const value = displayValue(getArg(call.params, 'value', '0'))
    return TransactionViewBuilder.create('Transfer ENJ').withNetwork(network).withCoin('Amount', value, coinId).build()
}

export const buildTransferAllBalanceView: ViewBuilderFn = ({ call, network }) => {
    const keepAlive = getArg(call.params, 'keep_alive')

    return TransactionViewBuilder.create('Transfer All ENJ')
        .withNetwork(network)
        .withText('Amount', 'All transferable balance')
        .when(typeof keepAlive === 'boolean', (b) => b.withText('Keep Alive', keepAlive ? 'Yes' : 'No'))
        .build()
}
