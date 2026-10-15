import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, CommonContext } from '~/contexts'
import {
    GovernanceDelegation,
    GovernanceFellowshipMember,
    GovernanceReferendum,
    GovernanceTrack,
    GovernanceTreasuryItem,
    GovernanceVote,
    GovernanceWhitelistedCall,
} from '~/model'
import { snapshotGovernance } from '~/pallet/governance/processors/snapshot'
import { constants, storage } from '~/type'
import { validateImportGovernanceStateData } from '~/worker/jobs/validators/import-governance-state'

const voter = `0x${'11'.repeat(32)}`
const target = `0x${'22'.repeat(32)}`
const member = `0x${'33'.repeat(32)}`
const whitelisted = `0x${'44'.repeat(32)}`

function fixture(relay: boolean) {
    const rows = new Map<string, { id: string; updatedAtBlock: number }>()
    const state = new Map<string, [unknown, unknown][]>([
        [
            'Referenda.ReferendumInfoFor',
            [
                [
                    7,
                    {
                        __kind: 'Ongoing',
                        value: {
                            track: 1,
                            proposal: { __kind: 'Inline' },
                            tally: { ayes: 10n, nays: 0n, support: 5n },
                            deciding: { confirming: 101 },
                        },
                    },
                ],
            ],
        ],
        [
            'ConvictionVoting.VotingFor',
            [
                [
                    [voter, 1, { __kind: 'SEnj', tokenId: 42n }],
                    { __kind: 'Casting', value: { votes: [[7, { __kind: 'Standard', vote: 0x81 }]] } },
                ],
                [
                    [member, 1],
                    { __kind: 'Delegating', value: { target, balance: 100n, conviction: { __kind: 'Locked1x' } } },
                ],
            ],
        ],
        [
            'FellowshipReferenda.ReferendumInfoFor',
            [[2, { __kind: 'Ongoing', value: { track: 1, proposal: { __kind: 'Inline' }, tally: {} } }]],
        ],
        ['FellowshipCollective.Members', [[member, { rank: 3 }]]],
        ['FellowshipCollective.Voting', [[[2, member], { __kind: 'Aye', value: 3 }]]],
        ['Treasury.Proposals', [[4, { proposer: voter, value: 50n }]]],
        ['Treasury.Spends', [[5, { amount: 20n, status: { __kind: 'Pending' } }]]],
        ['Whitelist.WhitelistedCall', [[whitelisted, null]]],
    ])
    const runtime = {
        checkConstantType: () => true,
        getConstant: (name: string) =>
            name === 'ConvictionVoting.VoteLockingPeriod'
                ? 100800
                : [
                      [
                          1,
                          {
                              name: name === 'Referenda.Tracks' ? 'Root\0\0' : 'Fellowship\0',
                              maxDeciding: 1,
                              decisionDeposit: 10n,
                              preparePeriod: 1,
                              decisionPeriod: 2,
                              confirmPeriod: 3,
                              minEnactmentPeriod: 4,
                              minApproval: { __kind: 'LinearDecreasing', floor: 1n },
                              minSupport: { __kind: 'LinearDecreasing', floor: 2n },
                          },
                      ],
                  ],
        checkStorageType: (name: string) => state.has(name) || name.endsWith('.MetadataOf'),
        getStorage: (_hash: string, name: string, key: number) =>
            Promise.resolve(
                name.endsWith('.MetadataOf')
                    ? name === 'Referenda.MetadataOf'
                        ? whitelisted
                        : undefined
                    : state.get(name)?.find(([entryKey]) => entryKey === key)?.[1]
            ),
        getStoragePairsPaged: async function* (_pageSize: number, _hash: string, name: string) {
            yield await Promise.resolve(state.get(name) ?? [])
        },
    }
    const block = { height: 100, hash: '0x01', _runtime: runtime } as unknown as Block
    const store = {
        findOneBy: (model: { name: string }, where: { id: string }) =>
            Promise.resolve(rows.get(`${model.name}:${where.id}`)),
        save: (row: { constructor: { name: string }; id: string; updatedAtBlock: number }) => {
            rows.set(`${row.constructor.name}:${row.id}`, row)
            return Promise.resolve(row)
        },
    }
    const ctx = { store } as unknown as CommonContext
    const get = <T>(model: new (...args: never[]) => T, id: string): T | undefined =>
        rows.get(`${model.name}:${id}`) as T | undefined
    return { ctx, block, rows, get, relay }
}

void test('manual governance state import validates the configured chain', () => {
    const target = { chainName: 'canary-matrixchain', genesisHash: `0x${'ab'.repeat(32)}` }
    assert.doesNotThrow(() => {
        validateImportGovernanceStateData({ ...target }, target)
    })
    assert.throws(() => {
        validateImportGovernanceStateData({ ...target, chainName: 'enjin-relaychain' }, target)
    }, /target/)
    assert.throws(() => {
        validateImportGovernanceStateData({ ...target, genesisHash: `0x${'cd'.repeat(32)}` }, target)
    }, /target/)
})

void test('current governance storage readers match the latest metadata for every chain profile', () => {
    for (const chainName of ['enjin-matrixchain', 'canary-matrixchain', 'enjin-relaychain', 'canary-relaychain']) {
        const rows = fs
            .readFileSync(`typegen/${chainName}.jsonl`, 'utf8')
            .trim()
            .split('\n')
            .map((line) => JSON.parse(line) as { specName: string; specVersion: number; metadata: string })
        const row = rows[rows.length - 1]
        const block = {
            _runtime: new Runtime(
                { specName: row.specName, specVersion: row.specVersion, implName: '', implVersion: 0 },
                row.metadata
            ),
        }
        const common = [
            storage.referenda.referendumInfoFor,
            storage.convictionVoting.votingFor,
            storage.whitelist.whitelistedCall,
            storage.fellowshipReferenda.referendumInfoFor,
            storage.fellowshipCollective.members,
            storage.fellowshipCollective.voting,
        ]
        const relay = [storage.treasury.proposals, storage.treasury.spends]
        for (const variants of [...common, ...(chainName.includes('relaychain') ? relay : [])]) {
            assert(
                Object.values(variants).some((reader) => reader.is(block)),
                `${chainName} has an unsupported storage reader`
            )
        }
        for (const variants of [
            constants.referenda.tracks,
            constants.fellowshipReferenda.tracks,
            constants.convictionVoting.voteLockingPeriod,
        ]) {
            assert(
                Object.values(variants).some((reader) => reader.is(block)),
                `${chainName} has an unsupported constant`
            )
        }
    }
})

void test('Matrixchain snapshot imports current RPC governance storage without creating history', async () => {
    const { ctx, block, get } = fixture(false)
    const counts = await snapshotGovernance(ctx, block, false)

    assert.deepEqual(counts, {
        tracks: 2,
        referenda: 1,
        conviction: { votes: 1, delegations: 1 },
        fellowshipReferenda: 1,
        fellowship: { members: 1, votes: 1 },
        treasury: 0,
        whitelist: 1,
        terminalHistory: { recovered: 0, unavailable: 0 },
    })
    assert.equal(get(GovernanceReferendum, '7')?.tallyAyes, 10n)
    assert.equal(get(GovernanceReferendum, '7')?.status, 'Confirming')
    assert.equal(get(GovernanceReferendum, '7')?.metadataHash, whitelisted)
    assert.equal(get(GovernanceReferendum, '7')?.governanceTrack?.id, '1-rnd')
    assert.equal(get(GovernanceTrack, '1-rnd')?.name, 'Root')
    assert.equal(get(GovernanceVote, `7-${voter}-SEnj-42`)?.active, true)
    assert.equal(get(GovernanceVote, `7-${voter}-SEnj-42`)?.currency, 'SEnj-42')
    assert.equal(get(GovernanceVote, `7-${voter}-SEnj-42`)?.referendum?.id, '7')
    assert.equal(get(GovernanceVote, `7-${voter}-SEnj-42`)?.voteModifier, 1)
    assert.equal(
        get(GovernanceVote, `FellowshipReferenda:2:${member}:Fellowship`)?.referendum?.id,
        'FellowshipReferenda:2'
    )
    assert.equal(get(GovernanceDelegation, `${member}:1:Enj`)?.balance, 100n)
    assert.equal(get(GovernanceFellowshipMember, member)?.rank, 3)
    assert.equal(get(GovernanceWhitelistedCall, whitelisted)?.active, true)
})

void test('snapshot preserves state indexed from a newer block', async () => {
    const { ctx, block, get } = fixture(true)
    const id = `7-${voter}-SEnj-42`
    const newer = new GovernanceVote({
        id,
        referendumId: '7',
        accountId: voter,
        currency: 'SEnj-42',
        active: false,
        updatedAtBlock: 200,
    })
    await ctx.store.save(newer)
    const counts = await snapshotGovernance(ctx, block, true)

    assert.equal(get(GovernanceVote, id), newer)
    assert.equal(counts.fellowshipReferenda, 1)
    assert.deepEqual(counts.fellowship, { members: 1, votes: 1 })
    assert.equal(get(GovernanceFellowshipMember, member)?.rank, 3)
    assert.equal(get(GovernanceTreasuryItem, 'Proposal:4')?.status, 'Open')
    assert.equal(get(GovernanceTreasuryItem, 'Spend:5')?.status, 'Pending')
})
