import { Runtime } from '@subsquid/substrate-runtime'
import { readableDispatchError } from '~/util/dispatch-error'

const DISPATCH_FAILED_EVENT = 'FuelTanks.DispatchFailed'

export type FeeWithdrawal = {
    who: string
    amount: bigint
}

export type DispatchFeeShares = {
    tank: bigint
    caller: bigint
}

/**
 * Splits the fee of a fuel-tank dispatch from the extrinsic's `Balances.Withdraw` events, in event order.
 *
 * `CheckFuelTank::prepare` charges the inner call's fee before anything else in the extrinsic withdraws:
 * first the caller's share when the dispatch `pays_remaining_fee` (only if non-zero), then the tank's
 * share. `ChargeTransactionPayment` runs after it and, the outer dispatch being `Pays::No`, withdraws
 * only the tip, which the extrinsic's own `fee` already covers.
 *
 * - tank: every withdrawal from the tank in the extrinsic, summed.
 * - caller: the extrinsic's first withdrawal, when it is the caller's and the dispatch pays the remaining
 *   fee; a later caller withdrawal is the tip or the inner call itself.
 */
export function dispatchFeeShares(
    withdrawals: FeeWithdrawal[],
    tankId: string,
    callerId: string,
    paysRemainingFee: boolean | null | undefined
): DispatchFeeShares {
    const tank = withdrawals.reduce((sum, w) => (w.who === tankId ? sum + w.amount : sum), 0n)
    const [first] = withdrawals as (FeeWithdrawal | undefined)[]
    const caller = paysRemainingFee === true && first?.who === callerId && callerId !== tankId ? first.amount : 0n

    return { tank, caller }
}

/**
 * Error of the call wrapped by a fuel-tank dispatch in extrinsic `extrinsicId`. The dispatch itself
 * succeeds (the tank pays the fee) and reports the inner failure only through `FuelTanks.DispatchFailed`.
 */
export function fuelTankDispatchError(
    events: { name: string; args?: unknown; extrinsic?: { id: string } }[],
    extrinsicId: string,
    runtime: Runtime
): string | null {
    const failed = events.find((e) => e.name === DISPATCH_FAILED_EVENT && e.extrinsic?.id === extrinsicId)
    return failed ? readableDispatchError((failed.args as { error?: unknown } | undefined)?.error, runtime) : null
}
