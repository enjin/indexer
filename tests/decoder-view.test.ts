import assert from 'node:assert/strict'
import test from 'node:test'
import { decode } from '~/decoder/core'
import { TransactionViewBuilder } from '~/decoder/view/builder'
import { buildTransactionView } from '~/decoder/view'

const NETWORK = 'enjin-matrixchain'

const TRANSFER_AND_MELT_BATCH_CALL =
    '0x09020c2806003c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a8288099524000414280595241c0c0028059524140400'
const BATCH_MINT_CALL =
    '0x280d95240c3c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a8288090104143c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a828809011c0c3c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a828809011404'
const BATCH_ALL_MINT_CALL =
    '0x090204280d95240c3c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a8288090104143c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a828809011c0c3c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a828809011404'
const BATCH_ALL_TRANSFER_CALL =
    '0x090204280c95240c3c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a8288090004143c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a828809001c0c3c5058b4984860f4a2ff5624eb688dbdb9d4ba28712b2bfcb8a1f7a73a828809001404'

async function decodeView(call: string): Promise<{ title: string; fields: unknown[] }> {
    const decoded = await decode({ call, network: NETWORK, readable: true })
    assert.ok(decoded && typeof decoded === 'object' && 'view' in decoded)
    return (decoded as { view: { title: string; fields: unknown[] } }).view
}

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

void test('batch mint includes the amount for each minted token', () => {
    const view = buildTransactionView(
        {
            MultiTokens: {
                batch_mint: {
                    collection_id: '2341',
                    recipients: [
                        { params: { Mint: { token_id: '1', amount: '5' } } },
                        { params: { Mint: { token_id: '7', amount: '3' } } },
                        { params: { Mint: { token_id: '5', amount: '1' } } },
                    ],
                },
            },
        },
        'enjin-matrixchain'
    )

    assert.deepEqual(view.fields.slice(1), [
        { type: 'asset', value: '2341-1' },
        { type: 'text', title: 'Amount', value: '5' },
        { type: 'asset', value: '2341-7' },
        { type: 'text', title: 'Amount', value: '3' },
        { type: 'asset', value: '2341-5' },
        { type: 'text', title: 'Amount', value: '1' },
    ])
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

void test('batch mint call subtitle is the total minted amount', () => {
    const view = buildTransactionView(
        {
            Utility: {
                batch_all: {
                    calls: [
                        {
                            MultiTokens: {
                                batch_mint: {
                                    collection_id: '2341',
                                    recipients: [
                                        { params: { Mint: { token_id: '1', amount: '5' } } },
                                        { params: { Mint: { token_id: '7', amount: '3' } } },
                                        { params: { Mint: { token_id: '5', amount: '1' } } },
                                    ],
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
        title: 'Mint NFTs',
        subtitle: 'x 9',
        fields: [
            { type: 'asset', value: '2341-1' },
            { type: 'text', title: 'Amount', value: '5' },
            { type: 'asset', value: '2341-7' },
            { type: 'text', title: 'Amount', value: '3' },
            { type: 'asset', value: '2341-5' },
            { type: 'text', title: 'Amount', value: '1' },
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
                    { type: 'text', title: 'Amount', value: '1' },
                    { type: 'asset', value: '121008-32' },
                    { type: 'text', title: 'Amount', value: '1' },
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

void test('nested call subtitles contain one operation for one returned field', () => {
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

void test('nested single token calls show their operation amounts', () => {
    const view = buildTransactionView(
        {
            Utility: {
                batch_all: {
                    calls: [
                        {
                            MultiTokens: {
                                transfer: {
                                    collection_id: '2341',
                                    params: { Simple: { token_id: '1', amount: '5' } },
                                },
                            },
                        },
                        {
                            MultiTokens: {
                                burn: {
                                    collection_id: '2341',
                                    params: { token_id: '7', amount: '3', remove_token_storage: false },
                                },
                            },
                        },
                    ],
                },
            },
        },
        'enjin-matrixchain'
    )

    const subtitles = view.fields.slice(1).map((field) => (field.type === 'item' ? field.subtitle : null))
    assert.deepEqual(subtitles, ['x 5', 'x 3'])
})

void test('nested call subtitles contain a zero count when no fields are returned', () => {
    const nested = TransactionViewBuilder.create('Add Stake').build()
    const view = TransactionViewBuilder.create('Batch Transaction')
        .withCall(nested, { pallet: 'Example', method: 'call', params: {} })
        .build()

    assert.deepEqual(view.fields, [{ type: 'item', title: 'Add Stake', subtitle: 'x 0', fields: [] }])
})

void test('decodes the original transfer and melt batch with their operation amounts', async () => {
    const view = await decodeView(TRANSFER_AND_MELT_BATCH_CALL)

    assert.deepEqual(
        view.fields.slice(1).map((field) => (field as { subtitle: string }).subtitle),
        ['x 5', 'x 3', 'x 1']
    )
})

void test('decodes batch mint amounts and their total', async () => {
    const view = await decodeView(BATCH_MINT_CALL)

    assert.deepEqual(view.fields.slice(1), [
        { type: 'asset', value: '2341-1' },
        { type: 'text', title: 'Amount', value: '5' },
        { type: 'asset', value: '2341-7' },
        { type: 'text', title: 'Amount', value: '3' },
        { type: 'asset', value: '2341-5' },
        { type: 'text', title: 'Amount', value: '1' },
    ])
})

void test('decodes batch-all batch mint with the total minted amount', async () => {
    const view = await decodeView(BATCH_ALL_MINT_CALL)

    assert.deepEqual(view.fields[1], {
        type: 'item',
        title: 'Mint NFTs',
        subtitle: 'x 9',
        fields: [
            { type: 'asset', value: '2341-1' },
            { type: 'text', title: 'Amount', value: '5' },
            { type: 'asset', value: '2341-7' },
            { type: 'text', title: 'Amount', value: '3' },
            { type: 'asset', value: '2341-5' },
            { type: 'text', title: 'Amount', value: '1' },
        ],
    })
})

void test('decodes batch-all batch transfer with transfer amounts and their total', async () => {
    const view = await decodeView(BATCH_ALL_TRANSFER_CALL)

    assert.deepEqual(view.fields[1], {
        type: 'item',
        title: 'Transfer Item',
        subtitle: 'x 9',
        fields: [
            { type: 'asset', value: '2341-1' },
            { type: 'text', title: 'Amount', value: '5' },
            { type: 'asset', value: '2341-7' },
            { type: 'text', title: 'Amount', value: '3' },
            { type: 'asset', value: '2341-5' },
            { type: 'text', title: 'Amount', value: '1' },
        ],
    })
})
