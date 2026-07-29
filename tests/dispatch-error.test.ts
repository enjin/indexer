import assert from 'node:assert/strict'
import test from 'node:test'
import { getRuntimeCached } from '~/decoder/metadata'
import { readableDispatchError } from '~/util/dispatch-error'
import { deriveItemIndex } from '~/pallet/utility/processors/item-failed'
import { EventItem } from '~/contexts'

const runtime = () => getRuntimeCached('enjin-matrixchain', 1031)

void test('readableDispatchError resolves Module errors from runtime metadata', async () => {
    assert.equal(
        readableDispatchError({ __kind: 'Module', value: { index: 40, error: '0x04000000' } }, await runtime()),
        'MultiTokens.NoPermission'
    )
    assert.equal(
        readableDispatchError({ __kind: 'Module', value: { index: 54, error: '0x01000000' } }, await runtime()),
        'FuelTanks.FuelTankAlreadyExists'
    )
    assert.equal(
        readableDispatchError({ __kind: 'Module', value: { index: 40, error: '0x12000000' } }, await runtime()),
        'MultiTokens.DepositReserveFailed'
    )
})

void test('readableDispatchError accepts a numeric Module error index', async () => {
    assert.equal(
        readableDispatchError({ __kind: 'Module', value: { index: 40, error: 5 } }, await runtime()),
        'MultiTokens.BalanceLow'
    )
})

void test('readableDispatchError falls back to a raw Module description when unresolvable', async () => {
    assert.equal(
        readableDispatchError({ __kind: 'Module', value: { index: 250, error: '0x00000000' } }, await runtime()),
        'Module(index=250, error=0x00000000)'
    )
})

void test('readableDispatchError renders one-level variant kinds', async () => {
    assert.equal(
        readableDispatchError({ __kind: 'Token', value: { __kind: 'FundsUnavailable' } }, await runtime()),
        'Token.FundsUnavailable'
    )
    assert.equal(
        readableDispatchError({ __kind: 'Arithmetic', value: { __kind: 'Overflow' } }, await runtime()),
        'Arithmetic.Overflow'
    )
})

void test('readableDispatchError renders value-less kinds as the kind alone', async () => {
    assert.equal(readableDispatchError({ __kind: 'BadOrigin' }, await runtime()), 'BadOrigin')
})

void test('readableDispatchError never loses unrecognized input', async () => {
    assert.equal(readableDispatchError(null, await runtime()), null)
    assert.equal(readableDispatchError(undefined, await runtime()), null)
    assert.equal(readableDispatchError('already readable', await runtime()), 'already readable')
    assert.equal(readableDispatchError({ unexpected: true }, await runtime()), '{"unexpected":true}')
})

function eventItem(index: number, siblings?: { name: string; index: number }[]): EventItem {
    return {
        index,
        extrinsic: siblings ? { events: siblings } : undefined,
    } as unknown as EventItem
}

void test('deriveItemIndex counts only preceding sibling item events', () => {
    const siblings = [
        { name: 'Utility.ItemCompleted', index: 2 },
        { name: 'MultiTokens.Transferred', index: 3 },
        { name: 'Utility.ItemCompleted', index: 4 },
        { name: 'Utility.ItemFailed', index: 5 },
        { name: 'Utility.ItemCompleted', index: 6 },
    ]

    assert.equal(deriveItemIndex(eventItem(5, siblings)), 2)
})

void test('deriveItemIndex is zero for the first item and null without extrinsic context', () => {
    assert.equal(deriveItemIndex(eventItem(2, [{ name: 'Utility.ItemFailed', index: 2 }])), 0)
    assert.equal(deriveItemIndex(eventItem(2)), null)
})
