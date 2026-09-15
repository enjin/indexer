import { TransactionViewBuilder } from '../builder'
import { getArg, getBatchedCalls, getCallId, getDispatchCall } from '../call'
import type { CallParts, ViewBuilderFn } from '../types'
import { getBuilderForCall } from '../factory'

const FILL_LISTING = 'Marketplace::fill_listing'
const BUY_OFFER = 'StakeExchange::buy'

export const buildBatchView: ViewBuilderFn = ({ call, network, coinId }) => {
    return buildBatch(call, network, coinId)
}

export const buildForceBatchView: ViewBuilderFn = ({ call, network, coinId }) => {
    return buildBatch(call, network, coinId, 'Continue on error')
}

export const buildMatrixBatchView: ViewBuilderFn = ({ call, network, coinId }) => {
    const continueOnFailure = getArg(call.params, 'continue_on_failure')
    const execution =
        continueOnFailure === true ? 'Continue on error' : continueOnFailure === false ? 'Stop on error' : undefined

    return buildBatch(call, network, coinId, execution)
}

function buildBatch(call: CallParts, network: string, coinId: string, execution?: string) {
    const batched = getBatchedCalls(call).map(getDispatchCall)
    const title = resolveBatchTitle(batched)

    const builder = TransactionViewBuilder.create(title).withNetwork(network)
    if (execution) builder.withText('Execution', execution)

    for (const inner of batched) {
        const view = getBuilderForCall(inner)({ call: inner, network, coinId })
        builder.withCall(view, inner)
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
