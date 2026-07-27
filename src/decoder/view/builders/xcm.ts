import { TransactionViewBuilder } from '../builder'
import { displayValue, getArg } from '../call'
import type { ViewBuilderFn } from '../types'

export const buildTeleportView: ViewBuilderFn = ({ call, network, coinId }) => {
    const amount =
        getArg(call.params, 'assets.V3.0.fun.Fungible') ??
        getArg(call.params, 'assets.V4.0.fun.Fungible') ??
        getArg(call.params, 'assets.V2.0.fun.Fungible')

    const builder = TransactionViewBuilder.create('Teleport ENJ').withNetwork(network)
    if (amount !== undefined && amount !== null) {
        builder.withCoin('Amount', displayValue(amount), coinId)
    }
    return builder.build()
}
