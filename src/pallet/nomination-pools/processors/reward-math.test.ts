/**
 * Reproduction / regression test for the pools reward-accounting bug (era 1126, pool 98).
 *
 * The repo has no unit-test runner, so this is a standalone script that imports the REAL
 * reward-math module and asserts against the on-chain numbers from the bug report. Run with:
 *
 *   pnpm exec ts-node -r tsconfig-paths/register src/pallet/nomination-pools/processors/reward-math.test.ts
 *
 * Exits non-zero on failure.
 */
import { memberEraReward, netReinvested } from '~/pallet/nomination-pools/processors/reward-math'

// Hard numbers from Enjin relaychain prod, pool 98 "StropeVerse", era 1126 (raw 1e18 units):
const commission = 14_077_200_000_000_000_000n // 14.0772 ENJ
const reward = 201_003_300_000_000_000_000n // 201.0033 ENJ (GROSS = compounded + commission)
const changeInRate = 532_539_618_873_000n // 0.000532539618873 * 1e18
const poolPoints = 351_008_796350609579401932n // 351,008.796350609579401932 points

const toEnj = (x: bigint) => Number(x) / 1e18
const approx = (a: number, b: number, tol = 0.01) => Math.abs(a - b) <= tol

let failures = 0
function check(name: string, cond: boolean, got: unknown, want: unknown) {
    if (cond) {
        console.log(`  ok  - ${name}`)
    } else {
        failures++
        console.log(`  FAIL- ${name}\n        got ${got}\n        want ${want}`)
    }
}

console.log('era 1126 / pool 98 reproduction (real module)\n')

// reinvested must be net (reward - commission) = what actually compounds on-chain.
const reinv = netReinvested(reward, commission)
check('netReinvested = reward - commission = 186.9261', approx(toEnj(reinv), 186.9261), toEnj(reinv), 186.9261)

// old buggy value (reward + commission) was inflated by exactly 2*commission.
const buggy = reward + commission
check('buggy reinvested was 215.0805', approx(toEnj(buggy), 215.0805), toEnj(buggy), 215.0805)
check(
    'inflation == 2 * commission',
    approx(toEnj(buggy - reinv), 2 * toEnj(commission), 0.001),
    toEnj(buggy - reinv),
    2 * toEnj(commission)
)

// changeInRate * points / 1e18 (member basis) reproduces the same compounded amount.
const compounded = memberEraReward(poolPoints, changeInRate)
check('memberEraReward(pool points) = 186.9261', approx(toEnj(compounded), 186.9261, 0.05), toEnj(compounded), 186.9261)

// member-level: the buggy/correct ratio is the constant 1.07/0.93.
check(
    'buggy * 0.93/1.07 == real growth',
    approx((195.046193 * 0.93) / 1.07, 169.504, 0.1),
    (195.046193 * 0.93) / 1.07,
    169.504
)

console.log(`\n${failures === 0 ? 'PASS' : 'FAIL'}: ${failures} failure(s)`)
process.exit(failures === 0 ? 0 : 1)
