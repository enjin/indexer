import { TransactionViewBuilder } from '../builder'
import type { ViewBuilderFn } from '../types'

export const buildGenericView: ViewBuilderFn = ({ network }) => {
    return TransactionViewBuilder.create('Transaction Request').withNetwork(network).build()
}
