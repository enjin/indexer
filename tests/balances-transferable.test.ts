import assert from 'node:assert/strict'
import test from 'node:test'
import { legacyTransferableBalance, transferableBalance } from '~/pallet/balances/transferable'

void test('holds count towards freezes: only the frozen amount above reserved is untouchable', () => {
    // frozen 30 is fully covered by 50 on hold, so the whole free balance can move
    assert.equal(transferableBalance(100n, 50n, 30n), 100n)
    // 80 frozen, 50 of it already covered by holds
    assert.equal(transferableBalance(100n, 50n, 80n), 70n)
    assert.equal(transferableBalance(100n, 0n, 40n), 60n)
    assert.equal(transferableBalance(100n, 0n, 0n), 100n)
})

void test('transferable never goes negative', () => {
    assert.equal(transferableBalance(10n, 0n, 40n), 0n)
    assert.equal(legacyTransferableBalance(10n, 40n), 0n)
})

void test('pre-holds account data subtracts miscFrozen from free', () => {
    assert.equal(legacyTransferableBalance(100n, 40n), 60n)
})
