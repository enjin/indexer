import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Account, Validator } from '~/model'

const testRequire = createRequire(__filename)
const originalModules = new Map<string, NodeJS.Module | undefined>()

function stubModule(name: string, exports: unknown): void {
    const path = testRequire.resolve(name)
    originalModules.set(path, testRequire.cache[path])
    const module = new Module(path)
    module.loaded = true
    module.exports = exports
    testRequire.cache[path] = module
}

const ACTIVE_STASH = 'active-stash'
const CHILLED_STASH = 'chilled-stash'

// Chain state: only the active stash is present in `staking.validators`.
// Querying a chilled stash returns the default `ValidatorPrefs` (commission 0, blocked false).
const chainPrefs = new Map<string, { commission: number; blocked: boolean }>([
    [ACTIVE_STASH, { commission: 50_000_000, blocked: true }],
])

let storedValidators: Validator[] = []
const savedValidators: Validator[][] = []

stubModule('~/contexts', {
    connectionManager: () =>
        Promise.resolve({
            getRepository: () => ({
                createQueryBuilder: () => ({
                    leftJoinAndSelect() {
                        return this
                    },
                    getMany: () => Promise.resolve(storedValidators),
                }),
            }),
            save: (validators: Validator[]) => {
                savedValidators.push(validators)
                return Promise.resolve(validators)
            },
        }),
})

const stakingValidators = (stash: string) =>
    Promise.resolve({ toJSON: () => chainPrefs.get(stash) ?? { commission: 0, blocked: false } })
stakingValidators.entries = () =>
    Promise.resolve([...chainPrefs.keys()].map((stash) => [{ args: [{ toString: () => stash }] }, {}]))

stubModule('~/util/rpc', {
    __esModule: true,
    default: {
        getInstance: () =>
            Promise.resolve({
                api: {
                    derive: {
                        staking: {
                            electedInfo: () =>
                                Promise.resolve({
                                    info: [
                                        {
                                            accountId: { toString: () => ACTIVE_STASH },
                                            exposureMeta: { unwrap: () => ({ total: { toString: () => '1234' } }) },
                                        },
                                    ],
                                }),
                        },
                    },
                    query: { staking: { validators: stakingValidators } },
                },
            }),
    },
})

const { syncActiveValidators } = testRequire(
    '~/worker/jobs/validators/sync-active-validators'
) as typeof import('~/worker/jobs/validators/sync-active-validators')

after(() => {
    for (const [path, original] of originalModules) {
        testRequire.cache[path] = original
    }
})

function validator(stash: string, commission: number): Validator {
    return new Validator({
        id: stash,
        account: new Account({ id: stash, address: stash }),
        commission,
        blocked: false,
        isActive: true,
        bonded: 0n,
    })
}

void test('sync-active-validators reconciles commission with chain state', async () => {
    storedValidators = [validator(ACTIVE_STASH, 10_000_000), validator(CHILLED_STASH, 30_000_000)]
    savedValidators.length = 0
    const logs: string[] = []

    await syncActiveValidators({ log: (line: string) => logs.push(line) } as never)

    assert.equal(savedValidators.length, 1)
    const [active, chilled] = savedValidators[0]

    // Stale 1% is overwritten with the 5% returned by `staking.validators(stash)`.
    assert.equal(active.commission, 50_000_000)
    assert.equal(active.blocked, true)
    assert.equal(active.isActive, true)
    assert.equal(active.bonded, 1234n)

    // A chilled stash is not in `staking.validators`; the default struct (commission 0)
    // must not reset the last known commission.
    assert.equal(chilled.commission, 30_000_000)
    assert.equal(chilled.blocked, false)
    assert.equal(chilled.isActive, false)
    assert.equal(chilled.bonded, 0n)

    assert.deepEqual(logs, ['Synced 2 validators'])
})
