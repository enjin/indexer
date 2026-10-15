import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { Block, CommonContext } from '~/contexts'
import { GovernanceReferendum } from '~/model'
import { refreshReferendum } from '~/pallet/governance/processors/event'
import { HistoricalGovernanceStorage } from '~/pallet/governance/processors/historical'

// Enjin Relaychain referendum 13 at block 17,500,010, immediately before its approval.
const historicalHash = '0xa8a46cce120bea652ab20bdbced6eb1660328443efacce2b3cc004ab6a32791d'
const historicalKey =
    '0x0f6738a0ee80c8e74cd2c7417c1e25569613e9bbc07e304aa9a1af9b85898e5a7e19bf46066d74446ee15c8c2715f7030d000000'
const historicalValue =
    '0x00c800680d02690c638bf0eea53a9b138ec553bd4d479c30a72111ce8f74776566f34778c21a2c00000001000000003b7d0901f8b2e50fd94692d9f09d050e8444bc0fb7b70fc6bea7c5e0c29fb2dc4fb7887a008062175ed15800000000000000000001f8b2e50fd94692d9f09d050e8444bc0fb7b70fc6bea7c5e0c29fb2dc4fb7887a0000e8890423c78a000000000000000001477d0901016b070b0100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016b070b016b070b0100000000'
const depositor = '0xf8b2e50fd94692d9f09d050e8444bc0fb7b70fc6bea7c5e0c29fb2dc4fb7887a'
const terminal = {
    __kind: 'Approved',
    value: [
        17500011,
        { who: depositor, amount: 25000000000000000n },
        { who: depositor, amount: 10000000000000000000n },
    ],
}

void test('current-state import recovers terminal referendum fields from the preceding archived block', async () => {
    const calls: string[] = []
    const rpc = {
        call: (method: string, params: unknown[]) => {
            calls.push(method)
            if (method === 'chain_getBlockHash') {
                assert.deepEqual(params, [17500010])
                return Promise.resolve(historicalHash)
            }
            if (method === 'state_getRuntimeVersion') {
                assert.deepEqual(params, [historicalHash])
                return Promise.resolve({ specVersion: 1070 })
            }
            if (method === 'state_getStorageAt') {
                assert.deepEqual(params, [historicalKey, historicalHash])
                return Promise.resolve(historicalValue)
            }
            throw new Error(`Unexpected RPC method: ${method}`)
        },
    }
    const block = {
        height: 17681210,
        hash: `0x${'ab'.repeat(32)}`,
        _runtime: {
            rpc,
            checkConstantType: () => true,
            getConstant: () => [
                [
                    200,
                    {
                        name: 'SmallTipper',
                        maxDeciding: 1,
                        decisionDeposit: 10n,
                        preparePeriod: 1,
                        decisionPeriod: 2,
                        confirmPeriod: 3,
                        minEnactmentPeriod: 4,
                        minApproval: { __kind: 'LinearDecreasing' },
                        minSupport: { __kind: 'LinearDecreasing' },
                    },
                ],
            ],
            checkStorageType: () => true,
            getStorage: (_hash: string, name: string) =>
                Promise.resolve(name === 'Referenda.ReferendumInfoFor' ? terminal : undefined),
        },
    } as unknown as Block
    const history = new HistoricalGovernanceStorage(block, 'enjin-relaychain')
    const ongoing = await history.ongoingBeforeTerminal('Referenda', 13, terminal)
    assert(ongoing?.value)
    assert.equal(ongoing.value.track, 200)
    assert.deepEqual(ongoing.value.tally, { ayes: 0n, nays: 0n, support: 0n })

    let saved: GovernanceReferendum | undefined
    const ctx = {
        store: {
            findOneBy: () => Promise.resolve(undefined),
            find: () => Promise.resolve([]),
            save: (row: GovernanceReferendum) => {
                if (row instanceof GovernanceReferendum) saved = row
                return Promise.resolve(row)
            },
        },
    } as unknown as CommonContext
    await refreshReferendum(ctx, block, 'Referenda', 13, '', {}, ongoing)

    assert(saved)
    assert.equal(saved.status, 'Approved')
    assert.equal(saved.track, 200)
    assert.equal(saved.id, '13')
    assert.equal(saved.governanceTrack?.name, 'SmallTipper')
    assert.equal(saved.endedAtBlock, 17500011)
    assert.equal(saved.tallyAyes, 0n)
    assert.equal(saved.tallyNays, 0n)
    assert.equal(saved.tallySupport, 0n)
    assert.equal(saved.submittedAtBlock, 17399099)
    assert.deepEqual(saved.proposal, {
        __kind: 'Lookup',
        hash: '0x690c638bf0eea53a9b138ec553bd4d479c30a72111ce8f74776566f34778c21a',
        len: 44,
    })
    assert.deepEqual(saved.submissionDeposit, { who: depositor, amount: '25000000000000000' })
    assert.deepEqual(saved.decisionDeposit, { who: depositor, amount: '10000000000000000000' })
    assert.deepEqual(calls, ['chain_getBlockHash', 'state_getRuntimeVersion', 'state_getStorageAt'])
})

void test('terminal import reports an RPC without archived state', async () => {
    const block = {
        height: 17681210,
        _runtime: { rpc: { call: () => Promise.reject(new Error('State already discarded')) } },
    } as unknown as Block
    const history = new HistoricalGovernanceStorage(block, 'enjin-relaychain')
    await assert.rejects(history.ongoingBeforeTerminal('Referenda', 13, terminal), /archival CHAIN_ENDPOINT/)
})

void test('historical import loads metadata from archival RPC when a runtime version is absent locally', async () => {
    const metadata = readFileSync('typegen/enjin-relaychain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as { specVersion: number; metadata: string })
        .find(({ specVersion }) => specVersion === 1070)?.metadata
    assert(metadata)
    const calls: string[] = []
    const rpc = {
        call: (method: string, params: unknown[]) => {
            calls.push(method)
            if (method === 'chain_getBlockHash') return Promise.resolve(historicalHash)
            if (method === 'state_getRuntimeVersion') return Promise.resolve({ specVersion: 1063 })
            if (method === 'state_getMetadata') {
                assert.deepEqual(params, [historicalHash])
                return Promise.resolve(metadata)
            }
            if (method === 'state_getStorageAt') return Promise.resolve(historicalValue)
            throw new Error(`Unexpected RPC method: ${method}`)
        },
    }
    const block = {
        height: 17681210,
        _runtime: { rpc },
    } as unknown as Block
    const ongoing = await new HistoricalGovernanceStorage(block, 'enjin-relaychain').ongoingBeforeTerminal(
        'Referenda',
        13,
        terminal
    )

    assert.equal(ongoing?.value?.track, 200)
    assert.deepEqual(calls, [
        'chain_getBlockHash',
        'state_getRuntimeVersion',
        'state_getMetadata',
        'state_getStorageAt',
    ])
})
