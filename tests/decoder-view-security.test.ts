import assert from 'node:assert/strict'
import test from 'node:test'
import type { DecodedCall } from '@subsquid/substrate-runtime'
import { decode } from '~/codec/decoder/core'
import { getRuntimeCached } from '~/codec/metadata'
import { buildTransactionView } from '~/codec/decoder/view'
import { UnsafeTransactionViewError } from '~/codec/decoder/view/errors'
import type { TransactionView } from '~/codec/decoder/view'
import DecoderRpc from '~/codec/rpc'

const network = 'canary-matrixchain'
const spec_version = 1041
const account = (byte: string) => `0x${byte.repeat(32)}`
const address = (byte: string) => ({ __kind: 'Id', value: account(byte) })
const remark = { __kind: 'System', value: { __kind: 'remark', remark: '0x' } }

async function encode(call: Record<string, unknown>): Promise<string> {
    const runtime = await getRuntimeCached(network, spec_version)
    const native = runtime.jsonCodec.decode(runtime.description.call, call)
    return '0x' + Buffer.from(runtime.encodeCall(native as DecodedCall)).toString('hex')
}

async function view(call: Record<string, unknown>): Promise<TransactionView> {
    const result = await decode({ call: await encode(call), network, spec_version, readable: true })
    return (result as { view: TransactionView }).view
}

function teleport(byte: string, safe: boolean): Record<string, unknown> {
    return {
        __kind: 'PolkadotXcm',
        value: {
            __kind: 'limited_teleport_assets',
            dest: { __kind: 'V5', value: { parents: 1, interior: { __kind: 'Here' } } },
            beneficiary: {
                __kind: 'V5',
                value: {
                    parents: 0,
                    interior: { __kind: 'X1', value: [{ __kind: 'AccountId32', id: account(byte) }] },
                },
            },
            assets: {
                __kind: 'V5',
                value: safe
                    ? [{ id: { parents: 1, interior: { __kind: 'Here' } }, fun: { __kind: 'Fungible', value: '42' } }]
                    : [],
            },
            feeAssetItem: 0,
            weightLimit: { __kind: 'Unlimited' },
        },
    }
}

function proxied(call: Record<string, unknown>, depth: number): Record<string, unknown> {
    for (let i = 0; i < depth; i++) {
        call = { __kind: 'Proxy', value: { __kind: 'proxy', real: address('11'), call } }
    }
    return call
}

void test('actual SCALE wrappers fail closed after sixteen while raw decoding stays available', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('Readable wrapper rejection must not contact RPC')
    })
    assert.equal((await view(proxied(remark, 16))).title, 'System: Remark')
    for (const inner of [remark, teleport('22', false)]) {
        const call = await encode(proxied(inner, 17))
        assert.ok(await decode({ call, network, spec_version }))
        await assert.rejects(decode({ call, network, spec_version, readable: true }), UnsafeTransactionViewError)
        await assert.rejects(decode({ call, network, readable: true }), UnsafeTransactionViewError)
        await assert.rejects(
            view({ __kind: 'Utility', value: { __kind: 'batch', calls: [proxied(inner, 17)] } }),
            UnsafeTransactionViewError
        )
    }
    assert.equal(rpc.mock.callCount(), 0)
})

void test('whole-view traversal bounds nested batches, total parameters, and cycles before rendering', () => {
    let call: Record<string, unknown> = { System: { remark: {} } }
    for (let i = 0; i < 45; i++) call = { Utility: { batch: { calls: [call] } } }
    assert.throws(() => buildTransactionView(call, network), UnsafeTransactionViewError)
    assert.throws(
        () =>
            buildTransactionView({ System: { remark: { values: Array.from({ length: 10_001 }, () => 0) } } }, network),
        UnsafeTransactionViewError
    )
    const cycle: Record<string, unknown> = {}
    cycle.self = cycle
    assert.throws(() => buildTransactionView({ System: { remark: cycle } }, network), UnsafeTransactionViewError)
})

void test('actual balance transfers distinguish recipients and account preservation', async () => {
    const transfer = (byte: string, method = 'transfer_keep_alive') => ({
        __kind: 'Balances',
        value: { __kind: method, dest: address(byte), value: '1000000000000000000' },
    })
    const first = await view(transfer('11'))
    const second = await view(transfer('22'))
    assert.notDeepEqual(first, second)
    assert.ok(
        first.fields.some(
            (field) => field.type === 'text' && field.title === 'Destination' && field.value === account('11')
        )
    )
    assert.ok(
        first.fields.some((field) => field.type === 'text' && field.title === 'Keep Alive' && field.value === 'Yes')
    )
    const allowDeath = await view(transfer('11', 'transfer_allow_death'))
    assert.ok(
        allowDeath.fields.some((field) => field.type === 'text' && field.title === 'Keep Alive' && field.value === 'No')
    )
})

void test('actual safe teleports include destination and distinguish beneficiaries', async () => {
    const first = await view(teleport('11', true))
    const second = await view(teleport('22', true))
    assert.notDeepEqual(first, second)
    assert.ok(first.fields.some((field) => field.type === 'text' && field.title === 'Destination'))
    assert.ok(first.fields.some((field) => field.type === 'text' && field.title === 'Beneficiary'))
    assert.ok(first.fields.some((field) => field.type === 'coin' && field.value === '42'))
})

void test('actual fuel-tank dispatches retain tank, automatic rule selection, and all settings', async () => {
    const dispatch = (byte: string) => ({
        __kind: 'FuelTanks',
        value: {
            __kind: 'dispatch',
            tankId: address(byte),
            call: remark,
            settings: { useNoneOrigin: true, paysRemainingFee: false, createAccount: true },
        },
    })
    const first = await view(dispatch('11'))
    assert.notDeepEqual(first, await view(dispatch('22')))
    assert.ok(
        first.fields.some(
            (field) => field.type === 'text' && field.title === 'Fuel Tank' && field.value === account('11')
        )
    )
    assert.ok(
        first.fields.some(
            (field) => field.type === 'text' && field.title === 'Fuel Tank Rule Set' && field.value === 'Automatic'
        )
    )
    assert.ok(
        first.fields.some(
            (field) =>
                field.type === 'text' &&
                field.title === 'Fuel Tank Settings' &&
                field.value.includes('"use_none_origin":true') &&
                field.value.includes('"pays_remaining_fee":false') &&
                field.value.includes('"create_account":true')
        )
    )
})

void test('actual NFT transfers and approvals show operator source, recipient and allowance lifetime', async () => {
    const transfer = await view({
        __kind: 'MultiTokens',
        value: {
            __kind: 'transfer',
            recipient: address('22'),
            collectionId: '10',
            params: {
                __kind: 'Operator',
                tokenId: '20',
                source: account('11'),
                amount: '5',
                operatorPaysDeposit: false,
            },
        },
    })
    assert.ok(
        transfer.fields.some(
            (field) => field.type === 'text' && field.title === 'Recipient' && field.value === account('22')
        )
    )
    assert.ok(
        transfer.fields.some(
            (field) => field.type === 'text' && field.title === 'Source' && field.value === account('11')
        )
    )
    assert.ok(transfer.fields.some((field) => field.type === 'asset' && field.value === '10-20'))
    assert.ok(
        transfer.fields.some(
            (field) => field.type === 'text' && field.title === 'Operator Pays Deposit' && field.value === 'No'
        )
    )
    const approval = await view({
        __kind: 'MultiTokens',
        value: {
            __kind: 'approve_token',
            collectionId: '10',
            tokenId: '20',
            operator: account('22'),
            amount: '5',
            currentAmount: '1',
        },
    })
    assert.ok(
        approval.fields.some(
            (field) => field.type === 'text' && field.title === 'Operator' && field.value === account('22')
        )
    )
    assert.ok(
        approval.fields.some(
            (field) => field.type === 'text' && field.title === 'Expiration' && field.value === 'No expiration'
        )
    )
    assert.ok(
        approval.fields.some(
            (field) => field.type === 'text' && field.title === 'Previous Allowance' && field.value === '1'
        )
    )
})
