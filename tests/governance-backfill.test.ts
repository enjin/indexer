import assert from 'node:assert/strict'
import test from 'node:test'
import { validateBackfillGovernanceData } from '~/worker/jobs/validators/backfill-governance'

const target = {
    chainName: 'canary-matrixchain',
    genesisHash: `0x${'ab'.repeat(32)}`,
}

void test('governance worker accepts only a bounded range for its configured chain', () => {
    const data = { chainName: target.chainName, genesisHash: target.genesisHash, fromBlock: 100, toBlock: 200 }
    assert.doesNotThrow(() => {
        validateBackfillGovernanceData(data, target)
    })
    assert.throws(() => {
        validateBackfillGovernanceData({ ...data, toBlock: 99 }, target)
    }, /range/)
    assert.throws(() => {
        validateBackfillGovernanceData({ ...data, chainName: 'enjin-relaychain' }, target)
    }, /target/)
    assert.throws(() => {
        validateBackfillGovernanceData({ ...data, genesisHash: `0x${'cd'.repeat(32)}` }, target)
    }, /target/)
})
