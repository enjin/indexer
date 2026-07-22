import assert from 'node:assert/strict'
import test from 'node:test'

import { memberEraReward, netReinvested } from '~/pallet/nomination-pools/processors/reward-math'

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
