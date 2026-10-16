import { CallItem, EventItem } from '~/contexts'
import { calls } from '~/type'
import * as mappings from '~/pallet/index'

export type LiquidityMethod = 'add_liquidity' | 'withdraw_liquidity'

type RuntimeCallNode = { __kind?: unknown; value?: unknown }

// Arguments through which wrapper calls carry their inner RuntimeCalls: FuelTanks.dispatch(_and_touch), Utility
// batches, as_derivative, dispatch_as, with_weight and if_else, MatrixUtility.batch, Proxy, Multisig and Sudo.
const NESTED_CALL_ARGS = ['call', 'calls', 'main', 'fallback']
const MAX_DEPTH = 8

function toBigInt(value: unknown): bigint | undefined {
    if (typeof value === 'bigint') return value
    if (typeof value === 'number' || typeof value === 'string') {
        try {
            return BigInt(value)
        } catch {
            return undefined
        }
    }
    return undefined
}

function walkRuntimeCall(node: unknown, method: LiquidityMethod, offerId: bigint, out: bigint[], depth: number): void {
    if (depth > MAX_DEPTH || node === null || typeof node !== 'object') return
    const { __kind: pallet, value } = node as RuntimeCallNode
    if (typeof pallet !== 'string' || value === null || typeof value !== 'object') return

    const args = value as Record<string, unknown>
    if (pallet === 'StakeExchange') {
        if (args.__kind !== method || toBigInt(args.offerId) !== offerId) return
        const amount = toBigInt(args.amount)
        if (amount !== undefined) out.push(amount)
        return
    }

    for (const arg of NESTED_CALL_ARGS) {
        const nested = args[arg]
        if (Array.isArray(nested)) {
            for (const inner of nested) walkRuntimeCall(inner, method, offerId, out, depth + 1)
        } else {
            walkRuntimeCall(nested, method, offerId, out, depth + 1)
        }
    }
}

function decodeDirect(call: CallItem, method: LiquidityMethod) {
    return method === 'add_liquidity'
        ? mappings.stakeExchange.calls.addLiquidity(call)
        : mappings.stakeExchange.calls.withdrawLiquidity(call)
}

/**
 * Returns, in call order, the amounts of every `method` call on `offerId` reachable from the call that emitted a
 * liquidity event.
 *
 * Subsquid expands the wrappers it knows (Utility, Proxy, Multisig, Sudo) into `item.call`, so under those the
 * emitter is the stake-exchange call itself. FuelTanks.dispatch/dispatch_and_touch and MatrixUtility.batch are not
 * expanded, so their inner RuntimeCalls are walked. Any other call, or a version without a decoder, yields an empty
 * list instead of throwing.
 */
export function liquidityCallAmounts(call: CallItem, method: LiquidityMethod, offerId: bigint): bigint[] {
    const out: bigint[] = []
    const direct = method === 'add_liquidity' ? calls.stakeExchange.addLiquidity : calls.stakeExchange.withdrawLiquidity

    try {
        switch (call.name) {
            case direct.name: {
                const decoded = decodeDirect(call, method)
                if (decoded.offerId === offerId) out.push(decoded.amount)
                break
            }
            case calls.fuelTanks.dispatch.name:
            case calls.fuelTanks.dispatchAndTouch.name:
                walkRuntimeCall(mappings.fuelTanks.utils.anyDispatch(call).call, method, offerId, out, 0)
                break
            case calls.matrixUtility.batch.name:
                for (const inner of mappings.matrixUtility.calls.batch(call).calls) {
                    walkRuntimeCall(inner, method, offerId, out, 0)
                }
                break
            default:
                break
        }
    } catch {
        return []
    }

    return out
}

function decodeEventOfferId(event: EventItem, method: LiquidityMethod): bigint | undefined {
    try {
        return method === 'add_liquidity'
            ? mappings.stakeExchange.events.liquidityAdded(event).offerId
            : mappings.stakeExchange.events.liquidityWithdrawn(event).offerId
    } catch {
        return undefined
    }
}

/**
 * Resolves the amount of the liquidity call that emitted `item`, or `undefined` when it cannot be determined
 * unambiguously (an unknown wrapper, a missing decoder, an event without a call, or a wrapper whose candidate calls
 * cannot be paired one-to-one with the events they emitted).
 *
 * Several candidate calls on the same offer are paired with the emitter's events of the same kind in event order,
 * but only when both counts match: under `force_batch` a failed or skipped inner call emits no event, so a count
 * mismatch means positions cannot be trusted and the amount is left unresolved instead of guessed.
 */
export function liquidityAmountFor(item: EventItem, method: LiquidityMethod, offerId: bigint): bigint | undefined {
    if (!item.call) return undefined

    const amounts = liquidityCallAmounts(item.call, method, offerId)
    if (amounts.length === 0) return undefined
    if (amounts.every((amount) => amount === amounts[0])) return amounts[0]

    const siblings = item.call.events
        .filter((event) => event.name === item.name && decodeEventOfferId(event, method) === offerId)
        .sort((a, b) => a.index - b.index)
    const position = siblings.findIndex((event) => event.id === item.id)
    if (position < 0 || siblings.length !== amounts.length) return undefined

    return amounts[position]
}
