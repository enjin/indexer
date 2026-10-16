import assert from 'node:assert/strict'
import test from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { dispatchFeeShares, fuelTankDispatchError } from '~/pallet/fuel-tanks/dispatch-fee'

const tank = `0x${'aa'.repeat(32)}`
const caller = `0x${'bb'.repeat(32)}`
const other = `0x${'cc'.repeat(32)}`

void test('the tank share sums every withdrawal from the tank instead of keeping the last one', () => {
    const shares = dispatchFeeShares(
        [
            { who: tank, amount: 7n },
            { who: other, amount: 100n },
            { who: tank, amount: 5n },
        ],
        tank,
        caller,
        false,
        0n
    )

    assert.deepEqual(shares, { tank: 12n, caller: 0n })
})

void test('pays_remaining_fee counts the caller withdrawal CheckFuelTank makes before the tank pays', () => {
    const withdrawals = [
        { who: caller, amount: 3n },
        { who: tank, amount: 9n },
        // ChargeTransactionPayment: the tip, already in the extrinsic fee
        { who: caller, amount: 1n },
    ]

    assert.deepEqual(dispatchFeeShares(withdrawals, tank, caller, true, 1n), { tank: 9n, caller: 3n })
    // Without pays_remaining_fee the caller is never charged by the tank extension.
    assert.deepEqual(dispatchFeeShares(withdrawals, tank, caller, false, 1n), { tank: 9n, caller: 0n })
    assert.deepEqual(dispatchFeeShares(withdrawals, tank, caller, null, 1n), { tank: 9n, caller: 0n })
})

void test('a caller withdrawal after the tank paid is the tip, not a fee share', () => {
    const shares = dispatchFeeShares(
        [
            { who: tank, amount: 9n },
            { who: caller, amount: 1n },
        ],
        tank,
        caller,
        true,
        1n
    )

    assert.deepEqual(shares, { tank: 9n, caller: 0n })
})

void test('a caller covering the whole fee leaves the tank share at zero', () => {
    assert.deepEqual(dispatchFeeShares([{ who: caller, amount: 12n }], tank, caller, true, 0n), {
        tank: 0n,
        caller: 12n,
    })
    assert.deepEqual(dispatchFeeShares([], tank, caller, true, 0n), { tank: 0n, caller: 0n })
})

void test('the tip of a zero-fee pays_remaining_fee dispatch is not counted again as the caller share', () => {
    // Only ChargeTransactionPayment withdrew (the tip), which the extrinsic fee already includes.
    assert.deepEqual(dispatchFeeShares([{ who: caller, amount: 1n }], tank, caller, true, 1n), { tank: 0n, caller: 0n })
    // The caller covered the whole fee, then paid the tip.
    assert.deepEqual(
        dispatchFeeShares(
            [
                { who: caller, amount: 12n },
                { who: caller, amount: 1n },
            ],
            tank,
            caller,
            true,
            1n
        ),
        { tank: 0n, caller: 12n }
    )
    // Tip only, followed by a caller withdrawal of the inner call that is not the tip.
    assert.deepEqual(
        dispatchFeeShares(
            [
                { who: caller, amount: 1n },
                { who: caller, amount: 50n },
            ],
            tank,
            caller,
            true,
            1n
        ),
        { tank: 0n, caller: 0n }
    )
})

void test('the inner error of a fuel-tank dispatch comes from DispatchFailed of the same extrinsic', () => {
    const runtime = { metadata: { __kind: 'V13' } } as unknown as Runtime
    const failed = {
        name: 'FuelTanks.DispatchFailed',
        args: { error: { __kind: 'BadOrigin' } },
        extrinsic: { id: 'x-1' },
    }

    assert.equal(fuelTankDispatchError([failed], 'x-1', runtime), 'BadOrigin')
    assert.equal(fuelTankDispatchError([failed], 'x-2', runtime), null)
    assert.equal(fuelTankDispatchError([{ ...failed, name: 'FuelTanks.CallDispatched' }], 'x-1', runtime), null)
})
