import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, CommonContext, EventItem } from '~/contexts'
import {
    Event,
    GovernanceActivity,
    GovernanceDelegation,
    GovernanceEventData,
    GovernanceFellowshipMember,
    GovernanceReferendum,
    GovernanceVote,
} from '~/model'
import { indexedEvent, processEvent } from '~/pallet/governance/processors'
import { storage } from '~/type'

type MetadataLine = { specName: string; specVersion: number; metadata: string }

function runtime(file: string, version: number): Runtime {
    const row = fs
        .readFileSync(file, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === version)
    assert(row)
    return new Runtime(
        { specName: row.specName, specVersion: row.specVersion, implName: '', implVersion: 0 },
        row.metadata
    )
}

function fixture(preimage?: string, memberRank?: number) {
    const rows = new Map<string, unknown>()
    const state = {
        __kind: 'Ongoing',
        value: {
            track: 1,
            proposal: { __kind: 'Lookup', hash: `0x${'ab'.repeat(32)}`, len: 12 },
            submitted: 100,
            submissionDeposit: { who: `0x${'11'.repeat(32)}`, amount: 100n },
            decisionDeposit: undefined,
            tally: { ayes: 10n, nays: 5n, support: 8n },
        },
    }
    const chainRuntime = {
        checkStorageType: (name: string) =>
            name === 'Referenda.ReferendumInfoFor' ||
            (preimage !== undefined && name === 'Preimage.PreimageFor') ||
            (memberRank !== undefined && name === 'FellowshipCollective.Members'),
        getStorage: (_hash: string, name: string) =>
            Promise.resolve(
                name === 'Preimage.PreimageFor'
                    ? preimage
                    : name === 'FellowshipCollective.Members'
                      ? { rank: memberRank }
                      : state
            ),
    }
    const block = { height: 100, hash: '0x01', timestamp: 1_000, _runtime: chainRuntime } as unknown as Block
    const store = {
        findOneBy: (model: { name: string }, where: { id: string }) =>
            Promise.resolve(rows.get(`${model.name}:${where.id}`)),
        find: (model: { name: string }) =>
            Promise.resolve(
                [...rows.entries()].filter(([key]) => key.startsWith(`${model.name}:`)).map(([, value]) => value)
            ),
        save: (entity: { constructor: { name: string }; id: string }) => {
            rows.set(`${entity.constructor.name}:${entity.id}`, entity)
            return Promise.resolve(entity)
        },
    }
    const ctx = { store } as unknown as CommonContext
    const event = (id: string, name: string, args: unknown, callArgs?: unknown) =>
        ({ id, name, args, call: callArgs ? { args: callArgs } : undefined, extrinsic: { id: '100-1' } }) as EventItem
    const get = (model: { name: string }, id: string) => rows.get(`${model.name}:${id}`)
    return { ctx, block, state, event, get }
}

void test('governance processor persists a storage-backed referendum and historical activity', async () => {
    const { ctx, block, event, get } = fixture()
    await processEvent(
        ctx,
        block,
        event('100-1-1', 'Referenda.Submitted', {
            index: 7,
            track: 1,
            proposal: { __kind: 'Lookup', hash: `0x${'ab'.repeat(32)}`, len: 12 },
        })
    )

    const referendum = get(GovernanceReferendum, 'Referenda:7') as GovernanceReferendum | undefined
    assert(referendum)
    assert.equal(referendum.status, 'Ongoing')
    assert.equal(referendum.tallyAyes, 10n)
    assert.equal(referendum.proposalPreimageStatus, 'Unresolved')
    assert.deepEqual(referendum.submissionDeposit, { who: `0x${'11'.repeat(32)}`, amount: '100' })
    assert.equal((get(GovernanceActivity, '100-1-1') as GovernanceActivity | undefined)?.referendumId, 'Referenda:7')
})

void test('governance events appear in the standard Event query with decoded payloads', async () => {
    const { ctx, block, event, get } = fixture()
    const activity = await processEvent(ctx, block, event('100-1-1', 'Referenda.Submitted', { index: 7, track: 1 }))
    const indexed = indexedEvent(activity)

    assert(indexed instanceof Event)
    assert.equal(indexed.name, 'ReferendaSubmitted')
    assert.equal(indexed.extrinsic?.id, '100-1')
    assert(indexed.data instanceof GovernanceEventData)
    assert.equal(indexed.data.referendumId, 'Referenda:7')
    assert.deepEqual(indexed.data.args, { index: 7, track: 1 })

    assert.equal(get(GovernanceActivity, '100-1-1'), activity)
    assert.equal(indexedEvent(activity, false).extrinsic, null)
})

void test('proposal preimages and terminal referendum changes remain queryable', async () => {
    const bytes = `0x${'01'.repeat(12)}`
    const { ctx, block, state, event, get } = fixture(bytes)
    await processEvent(ctx, block, event('100-1-1', 'Referenda.Submitted', { index: 7, track: 1 }))
    await processEvent(
        ctx,
        block,
        event('100-1-2', 'Referenda.MetadataSet', { index: 7, hash: `0x${'cd'.repeat(32)}` })
    )
    state.__kind = 'Approved'
    await processEvent(ctx, block, event('100-1-3', 'Referenda.Approved', { index: 7 }))
    await processEvent(ctx, block, event('100-1-4', 'Referenda.DecisionDepositRefunded', { index: 7 }))

    const referendum = get(GovernanceReferendum, 'Referenda:7') as GovernanceReferendum | undefined
    assert(referendum)
    assert.equal(referendum.status, 'Approved')
    assert.equal(referendum.proposalPreimageStatus, 'Resolved')
    assert.equal(referendum.proposalPreimage, bytes)
    assert.equal(referendum.metadataHash, `0x${'cd'.repeat(32)}`)
    assert.equal(referendum.decisionDeposit, null)
})

void test('Relaychain vote events without a poll index use the linked call and retain currency', async () => {
    const { ctx, block, state, event, get } = fixture()
    state.value.tally.ayes = 20n
    const voter = `0x${'22'.repeat(32)}`
    await processEvent(
        ctx,
        block,
        event(
            '100-1-2',
            'ConvictionVoting.Voted',
            { who: voter, vote: { __kind: 'Standard' } },
            {
                pollIndex: 7,
                currency: { __kind: 'SEnj', tokenId: '42' },
            }
        )
    )

    const vote = get(GovernanceVote, `Referenda:7:${voter}:SEnj:42`) as GovernanceVote | undefined
    assert(vote)
    assert.equal(vote.active, true)
    assert.equal(vote.currency, 'SEnj:42')
    assert.equal(vote.referendumRecord?.id, 'Referenda:7')
    assert.equal((get(GovernanceReferendum, 'Referenda:7') as GovernanceReferendum | undefined)?.tallyAyes, 20n)
})

void test('delegation refreshes current referendum tally and creates current delegation state', async () => {
    const { ctx, block, state, event, get } = fixture()
    await processEvent(ctx, block, event('100-1-1', 'Referenda.Submitted', { index: 7, track: 1 }))
    state.value.tally.ayes = 30n
    const voter = `0x${'33'.repeat(32)}`
    await processEvent(
        ctx,
        block,
        event('100-1-3', 'ConvictionVoting.Delegated', [voter, `0x${'44'.repeat(32)}`, 1], {
            class: 1,
            balance: '1000',
        })
    )

    assert.equal((get(GovernanceReferendum, 'Referenda:7') as GovernanceReferendum | undefined)?.tallyAyes, 30n)
    const delegation = get(GovernanceDelegation, `${voter}:1:Enj`) as GovernanceDelegation | undefined
    assert(delegation)
    assert.equal(delegation.active, true)
    assert.equal(delegation.balance, 1000n)
})

void test('legacy Relaychain undelegation with a bare account clears current delegation', async () => {
    const { ctx, block, event, get } = fixture()
    const voter = `0x${'66'.repeat(32)}`
    await processEvent(
        ctx,
        block,
        event('100-1-6', 'ConvictionVoting.Delegated', [voter, `0x${'77'.repeat(32)}`], { class: 1 })
    )
    await processEvent(ctx, block, event('100-1-7', 'ConvictionVoting.Undelegated', voter, { class: 1 }))

    const delegation = get(GovernanceDelegation, `${voter}:1:Enj`) as GovernanceDelegation | undefined
    assert(delegation)
    assert.equal(delegation.active, false)
    assert.equal((get(GovernanceActivity, '100-1-7') as GovernanceActivity | undefined)?.accountId, voter)
})

void test('historical replay does not replace newer referendum state', async () => {
    const { ctx, block, state, event, get } = fixture()
    await processEvent(ctx, block, event('100-1-1', 'Referenda.Submitted', { index: 7, track: 1 }))
    block.height = 101
    state.value.tally.ayes = 50n
    await processEvent(ctx, block, event('101-1-1', 'Referenda.DecisionStarted', { index: 7 }))
    block.height = 100
    state.value.tally.ayes = 10n
    await processEvent(ctx, block, event('100-1-2', 'Referenda.MetadataSet', { index: 7, hash: '0xaa' }))

    const referendum = get(GovernanceReferendum, 'Referenda:7') as GovernanceReferendum | undefined
    assert(referendum)
    assert.equal(referendum.updatedAtBlock, 101)
    assert.equal(referendum.tallyAyes, 50n)
    assert.equal(get(GovernanceActivity, '100-1-2') !== undefined, true)
})

void test('fellowship rank changes update current membership', async () => {
    const { ctx, block, event, get } = fixture(undefined, 3)
    const memberId = `0x${'55'.repeat(32)}`
    await processEvent(ctx, block, event('100-1-5', 'FellowshipCollective.RankChanged', { who: memberId, rank: 3 }))

    const member = get(GovernanceFellowshipMember, memberId) as GovernanceFellowshipMember | undefined
    assert(member)
    assert.equal(member.active, true)
    assert.equal(member.rank, 3)
})

for (const [file, version] of [
    ['typegen/canary-matrixchain.jsonl', 1040],
    ['typegen/canary-matrixchain.jsonl', 1041],
    ['typegen/enjin-relaychain.jsonl', 1070],
    ['typegen/canary-relaychain.jsonl', 1080],
] as const) {
    void test(`generated referendum storage reader supports ${file} v${version}`, () => {
        const block = { _runtime: runtime(file, version) } as Block
        assert(Object.values(storage.referenda.referendumInfoFor).some((reader) => reader.is(block)))
    })
}
