import type { Network } from '../types'
import { getDispatchCall, parseCallData } from './call'
import { getBuilderForCall } from './factory'
import { getNativeCoinId, getNetworkLabel } from './network'
import { buildGenericView } from './builders/generic'
import type { TransactionView } from './types'

/**
 * Build a static TransactionView from platform-decoder `calls` shape.
 * `calls` may be the top-level object `{ Pallet: { method: args } }` or nested under a decode result.
 */
export function buildTransactionView(calls: unknown, network: Network): TransactionView {
    const networkLabel = getNetworkLabel(network)
    const coinId = getNativeCoinId()

    const mainCall = parseCallData(calls)
    if (!mainCall) {
        return buildGenericView({
            call: { pallet: '', method: '', params: {} },
            network: networkLabel,
            coinId,
        })
    }

    const dispatchCall = getDispatchCall(mainCall)
    const builder = getBuilderForCall(dispatchCall)

    return builder({
        call: dispatchCall,
        network: networkLabel,
        coinId,
    })
}

export type { TransactionView } from './types'
