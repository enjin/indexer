import type { Network } from '../types'
import { getDispatchCall, parseCallData } from './call'
import { getBuilderForCall } from './factory'
import { getNativeCoinId, getNetworkLabel } from './network'
import { buildGenericView } from './builders/generic'
import type { TransactionView } from './types'

/**
 * Build a static TransactionView from platform-decoder `calls` shape.
 *
 * Accepts either the raw `{ Pallet: { method: args } }` shape or a full decode result
 * object containing a `calls` field.
 */
export function buildTransactionView(calls: unknown, network: Network): TransactionView {
    const networkLabel = getNetworkLabel(network)
    const coinId = getNativeCoinId()

    const callData =
        calls && typeof calls === 'object' && !Array.isArray(calls) && 'calls' in (calls as Record<string, unknown>)
            ? (calls as Record<string, unknown>).calls
            : calls
    const mainCall = parseCallData(callData)
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
