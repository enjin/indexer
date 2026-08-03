import assert from 'node:assert/strict'
import test from 'node:test'
import { TransactionViewBuilder } from '~/decoder/view/builder'
import { buildTransactionView } from '~/decoder/view'

const batchMintCall = {
    MultiTokens: {
        batch_mint: {
            collection_id: '121008',
            recipients: [{ params: { CreateToken: { token_id: '501' } } }, { params: { Mint: { token_id: '502' } } }],
        },
    },
}

const batchTransferCall = {
    MultiTokens: {
        batch_transfer: {
            collection_id: '121008',
            recipients: [
                { params: { Simple: { token_id: '21', amount: '1' } } },
                { params: { Simple: { token_id: '32', amount: '1' } } },
            ],
        },
    },
}

const batchSetAttributeCall = {
    MultiTokens: {
        batch_set_attribute: {
            collection_id: '2100',
            token_id: null,
            attributes: [{ key: [107, 101, 121], value: [118, 97, 108, 121, 101] }],
        },
    },
}

void test('batch mint returns one asset field per decoded recipient', () => {
    const view = buildTransactionView(batchMintCall, 'enjin-matrixchain')

    assert.deepEqual(view, {
        title: 'Mint NFTs',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            { type: 'asset', value: '121008-501' },
            { type: 'asset', value: '121008-502' },
        ],
    })
})

void test('batch mint call fields derive their subtitle from the decoded recipients', () => {
    const view = buildTransactionView(
        {
            Utility: {
                batch: {
                    calls: [batchMintCall],
                },
            },
        },
        'enjin-matrixchain'
    )

    assert.deepEqual(view, {
        title: 'Batch Transaction',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            {
                type: 'item',
                title: 'Mint NFTs',
                subtitle: 'x 2',
                fields: [
                    { type: 'asset', value: '121008-501' },
                    { type: 'asset', value: '121008-502' },
                ],
            },
        ],
    })
})

void test('matrix utility batches derive call subtitles from each decoded recipient list', () => {
    const view = buildTransactionView(
        {
            MatrixUtility: {
                batch: {
                    calls: [batchMintCall, batchTransferCall],
                    continue_on_failure: false,
                },
            },
        },
        'enjin-matrixchain'
    )

    assert.deepEqual(view, {
        title: 'Batch Transaction',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            {
                type: 'item',
                title: 'Mint NFTs',
                subtitle: 'x 2',
                fields: [
                    { type: 'asset', value: '121008-501' },
                    { type: 'asset', value: '121008-502' },
                ],
            },
            {
                type: 'item',
                title: 'Transfer Item',
                subtitle: 'x 2',
                fields: [
                    { type: 'asset', value: '121008-21' },
                    { type: 'asset', value: '121008-32' },
                ],
            },
        ],
    })
})

void test('batch set attribute derives its subtitle from decoded attributes', () => {
    const view = buildTransactionView(
        {
            MatrixUtility: {
                batch: {
                    calls: [batchMintCall, batchSetAttributeCall],
                    continue_on_failure: false,
                },
            },
        },
        'enjin-matrixchain'
    )

    assert.deepEqual(view.fields[2], {
        type: 'item',
        title: 'Set Collection Attributes',
        subtitle: 'x 1',
        fields: [
            { type: 'collection', value: '2100' },
            { type: 'text', title: '0x6b6579', value: '0x76616c7965' },
        ],
    })
})

void test('release stake converts its subtitle from base units to ENJ', () => {
    const view = buildTransactionView(
        {
            Utility: {
                batch_all: {
                    calls: [
                        {
                            StakeExchange: {
                                buy: {
                                    offer_id: '5219',
                                    token_id: '0',
                                    amount: '948536817298206600',
                                },
                            },
                        },
                    ],
                },
            },
        },
        'enjin-matrixchain'
    )

    assert.deepEqual(view.fields[1], {
        type: 'item',
        title: 'Release Stake',
        subtitle: '0.9485368172982066',
        fields: [
            { type: 'text', title: 'Offer ID', value: '5219' },
            { type: 'text', title: 'Token ID', value: '0' },
            { type: 'coin', title: 'Amount', coinId: 'enjin', value: '948536817298206600' },
        ],
    })
})

void test('nested call subtitles contain the returned field count', () => {
    const nested = TransactionViewBuilder.create('Mint NFTs')
        .withNetwork('Enjin Matrixchain')
        .withText('Collection', '42')
        .build()

    const view = TransactionViewBuilder.create('Batch Transaction')
        .withCall(nested, { pallet: 'Example', method: 'call', params: {} })
        .build()

    assert.deepEqual(view.fields, [
        {
            type: 'item',
            title: 'Mint NFTs',
            subtitle: 'x 1',
            fields: [{ type: 'text', title: 'Collection', value: '42' }],
        },
    ])
})

void test('nested call subtitles contain a zero count when no fields are returned', () => {
    const nested = TransactionViewBuilder.create('Add Stake').build()
    const view = TransactionViewBuilder.create('Batch Transaction')
        .withCall(nested, { pallet: 'Example', method: 'call', params: {} })
        .build()

    assert.deepEqual(view.fields, [{ type: 'item', title: 'Add Stake', subtitle: 'x 0', fields: [] }])
})
