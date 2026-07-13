import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import type { ViewBuilderFn } from '../types'

export const buildTransferBalanceView: ViewBuilderFn = ({ call, network, coinId }) => {
    const value = displayValue(getArg(call.params, 'value', '0'))
    return TransactionViewBuilder.create('Transfer ENJ')
        .withNetwork(network)
        .withCoin('Amount', value, coinId)
        .build()
}
