import assert from 'node:assert/strict'
import test from 'node:test'

import {
    memberEraReward,
    mergeCommissionPayment,
    netReinvested,
    poolRateChange,
} from '~/pallet/nomination-pools/processors/reward-math'

const commission = 14_077_200_000_000_000_000n
const reward = 201_003_300_000_000_000_000n
const changeInRate = 532_539_618_873_000n
const poolPoints = 351_008_796350609579401932n

const toEnj = (value: bigint) => Number(value) / 1e18

void test('calculates pool 98 rewards without double-counting commission', () => {
    const reinvested = netReinvested(reward, commission)
    const buggyReinvested = reward + commission
    const compounded = memberEraReward(poolPoints, changeInRate)

    assert.ok(Math.abs(toEnj(reinvested) - 186.9261) <= 0.01)
    assert.ok(Math.abs(toEnj(buggyReinvested) - 215.0805) <= 0.01)
    assert.ok(Math.abs(toEnj(buggyReinvested - reinvested) - 2 * toEnj(commission)) <= 0.001)
    assert.ok(Math.abs(toEnj(compounded) - 186.9261) <= 0.05)
    assert.ok(Math.abs((195.046193 * 0.93) / 1.07 - 169.504) <= 0.1)
})

void test('ignores the current reward when multiple validators pay the same pool era', () => {
    const currentRewardId = '22-1153'
    const currentRate = 1_557_858_664_020_839_697n
    const previousRate = 1_557_037_201_700_622_891n

    const rateChange = poolRateChange(currentRate, currentRewardId, [
        { id: currentRewardId, rate: currentRate },
        { id: '22-1152', rate: previousRate },
    ])

    assert.equal(rateChange, 821_462_320_216_806n)
})

void test('preserves the commission beneficiary when a later validator payout has no commission', () => {
    const existing = {
        beneficiary: '0xbeneficiary',
        amount: 10n,
    }

    assert.deepEqual(mergeCommissionPayment(existing, undefined), existing)
    assert.deepEqual(mergeCommissionPayment(undefined, existing), existing)
    assert.deepEqual(mergeCommissionPayment(existing, { beneficiary: '0xnew', amount: 5n }), {
        beneficiary: '0xnew',
        amount: 15n,
    })
})

void test('restores pool 2 member rewards when reinvested is non-zero but the stored rate change was zero', () => {
    const points = 2_917_563_480_226_045_756n
    const latestRate = 1_833_288_460_213_394_522n
    const previousRate = 1_832_298_203_765_691_427n
    const previousPreviousRate = 1_831_277_753_555_124_795n
    const latestPayouts = [
        8_240_360_032_951_646_161_408n,
        6_976_659_748_815_891_574_465n,
        5_899_479_371_080_530_241_847n,
    ]
    const previousPayouts = [
        7_973_562_996_974_919_974_270n,
        7_079_366_367_377_234_800_242n,
        6_707_429_840_513_790_957_706n,
    ]

    const latestRateChange = poolRateChange(latestRate, '2-1156', [{ id: '2-1155', rate: previousRate }])
    const previousRateChange = poolRateChange(previousRate, '2-1155', [{ id: '2-1154', rate: previousPreviousRate }])
    const latestReinvested = latestPayouts.reduce((total, payout) => total + netReinvested(payout, 0n), 0n)
    const previousReinvested = previousPayouts.reduce((total, payout) => total + netReinvested(payout, 0n), 0n)

    assert.equal(latestReinvested, 21_116_499_152_848_067_977_720n)
    assert.equal(previousReinvested, 21_760_359_204_865_945_732_218n)
    assert.equal(latestRateChange, 990_256_447_703_095n)
    assert.equal(previousRateChange, 1_020_450_210_566_632n)
    assert.equal(memberEraReward(points, latestRateChange), 2_889_136_047_876_923n)
    assert.equal(memberEraReward(points, previousRateChange), 2_977_228_267_738_184n)
})
