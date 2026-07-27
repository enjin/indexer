import { TransactionViewBuilder } from '../builder'
import { getBatchedCalls, getCallId, getDispatchCall } from '../call'
import type { CallParts, ViewBuilderFn } from '../types'
import { getBuilderForCall } from '../factory'

const FILL_LISTING = 'Marketplace::fill_listing'
const BUY_OFFER = 'StakeExchange::buy'

export const buildBatchView: ViewBuilderFn = ({ call, network, coinId }) => {
    const batched = getBatchedCalls(call).map(getDispatchCall)
    const title = resolveBatchTitle(batched)

    const builder = TransactionViewBuilder.create(title).withNetwork(network)

    for (const inner of batched) {
        const view = getBuilderForCall(inner)({ call: inner, network, coinId })
        builder.withCall(view)
    }

    return builder.build()
}

function resolveBatchTitle(batched: CallParts[]): string {
    if (batched.length > 0 && batched.every((c) => getCallId(c) === FILL_LISTING)) {
        return 'Buy NFTs'
    }
    if (batched.length > 0 && batched.every((c) => getCallId(c) === BUY_OFFER)) {
        return 'Release Stake'
    }
    return 'Batch Transaction'
}
