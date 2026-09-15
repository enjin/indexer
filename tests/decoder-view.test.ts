import assert from 'node:assert/strict'
import test from 'node:test'
import { decode } from '~/decoder/core'
import { TransactionViewBuilder } from '~/decoder/view/builder'
import { buildTransactionView } from '~/decoder/view'

const NETWORK = 'enjin-matrixchain'

const TRANSFER_ALL_CALL = '0x0a040090f6f0f77bfa00f9e8026b8ca242bf3e1bb2407052fb531d4d721ec4af51e66f00'
const CREATE_TOKEN_WITH_INFUSION_CALL =
    '0x280400d4a2a84e8e512c405cfdc37204aa7cbf7aece6abb938e2dbf45cf72e367b0b183a8902000018910100000000000013000064a7b3b6e00d000000000000000000'
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

void test('decodes a transfer-all call into a specific transaction view', async () => {
    const view = await decodeView(TRANSFER_ALL_CALL)

    assert.deepEqual(view, {
        title: 'Transfer All ENJ',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            { type: 'text', title: 'Amount', value: 'All transferable balance' },
            { type: 'text', title: 'Keep Alive', value: 'No' },
        ],
    })
})

void test('includes the per-token infusion in a create-token transaction view', async () => {
    const view = await decodeView(CREATE_TOKEN_WITH_INFUSION_CALL)

    assert.deepEqual(view, {
        title: 'Create NFT',
        fields: [
            { type: 'asset', value: '41550-6' },
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            { type: 'text', title: 'Amount', value: '100' },
            { type: 'coin', title: 'Infusion per token', coinId: 'enjin', value: '1000000000000000000' },
        ],
    })
})

void test('all Platform transaction-view backlog calls have dedicated views', () => {
    const account = { Id: [1, 2, 3, 4] }
    const calls: Array<{
        pallet: string
        method: string
        params: Record<string, unknown>
        title: string
    }> = [
        {
            pallet: 'Balances',
            method: 'transfer_allow_death',
            params: { dest: account, value: '100' },
            title: 'Transfer ENJ',
        },
        {
            pallet: 'MultiTokens',
            method: 'accept_collection_transfer',
            params: { collection_id: '10' },
            title: 'Accept Collection Transfer',
        },
        {
            pallet: 'MultiTokens',
            method: 'batch_infuse',
            params: { collection_id: '10', infusions: [{ token_id: '20', amount: '100' }] },
            title: 'Infuse Tokens',
        },
        {
            pallet: 'MultiTokens',
            method: 'cancel_collection_transfer',
            params: { collection_id: '10' },
            title: 'Cancel Collection Transfer',
        },
        {
            pallet: 'MultiTokens',
            method: 'create_token_group',
            params: { collection_id: '10' },
            title: 'Create Token Group',
        },
        {
            pallet: 'MultiTokens',
            method: 'destroy_token_group',
            params: { token_group_id: '30' },
            title: 'Destroy Token Group',
        },
        {
            pallet: 'MultiTokens',
            method: 'add_token_to_group',
            params: { collection_id: '10', token_id: '20', token_group_id: '30' },
            title: 'Add Token to Group',
        },
        {
            pallet: 'MultiTokens',
            method: 'remove_token_from_group',
            params: { collection_id: '10', token_id: '20', token_group_id: '30' },
            title: 'Remove Token from Group',
        },
        {
            pallet: 'MultiTokens',
            method: 'set_token_groups',
            params: { collection_id: '10', token_id: '20', token_groups: ['30', '31'] },
            title: 'Set Token Groups',
        },
        {
            pallet: 'MultiTokens',
            method: 'set_token_group_attribute',
            params: { token_group_id: '30', key: [107, 101, 121], value: [118, 97, 108, 117, 101] },
            title: 'Set Token Group Attribute',
        },
        {
            pallet: 'MultiTokens',
            method: 'remove_token_group_attribute',
            params: { token_group_id: '30', key: [107, 101, 121] },
            title: 'Remove Token Group Attribute',
        },
        {
            pallet: 'MultiTokens',
            method: 'approve_token',
            params: { collection_id: '10', token_id: '20', operator: [1, 2], amount: '5' },
            title: 'Approve Token',
        },
        {
            pallet: 'MultiTokens',
            method: 'destroy_collection',
            params: { collection_id: '10' },
            title: 'Destroy Collection',
        },
        {
            pallet: 'MultiTokens',
            method: 'freeze',
            params: { info: { collection_id: '10', freeze_type: { Token: { token_id: '20' } } } },
            title: 'Freeze Token',
        },
        {
            pallet: 'MultiTokens',
            method: 'mutate_collection',
            params: { collection_id: '10', mutation: { owner: [1, 2] } },
            title: 'Edit Collection',
        },
        {
            pallet: 'MultiTokens',
            method: 'mutate_token',
            params: { collection_id: '10', token_id: '20', mutation: { listing_forbidden: true } },
            title: 'Edit Token',
        },
        {
            pallet: 'MultiTokens',
            method: 'remove_all_attributes',
            params: { collection_id: '10', token_id: '20', attribute_count: 2 },
            title: 'Remove All NFT Attributes',
        },
        {
            pallet: 'MultiTokens',
            method: 'remove_attribute',
            params: { collection_id: '10', token_id: null, key: [107, 101, 121] },
            title: 'Remove Collection Attribute',
        },
        {
            pallet: 'MultiTokens',
            method: 'set_royalty',
            params: { collection_id: '10', token_id: '20', descriptor: { percentage: 50000000 } },
            title: 'Set Royalty',
        },
        {
            pallet: 'MultiTokens',
            method: 'thaw',
            params: { info: { collection_id: '10', thaw_type: { Token: { token_id: '20' } } } },
            title: 'Thaw Token',
        },
        {
            pallet: 'MultiTokens',
            method: 'unapprove_collection',
            params: { collection_id: '10', operator: [1, 2] },
            title: 'Revoke Collection Approval',
        },
        {
            pallet: 'MultiTokens',
            method: 'unapprove_token',
            params: { collection_id: '10', token_id: '20', operator: [1, 2] },
            title: 'Revoke Token Approval',
        },
        {
            pallet: 'Marketplace',
            method: 'set_protocol_fee',
            params: { protocol_fee: 25000000 },
            title: 'Set Marketplace Protocol Fee',
        },
        {
            pallet: 'Marketplace',
            method: 'add_whitelisted_accounts',
            params: { listing_id: '0x1234', accounts: [{ account_id: account, allowance: '2' }] },
            title: 'Add Whitelisted Accounts',
        },
        {
            pallet: 'Marketplace',
            method: 'remove_whitelisted_accounts',
            params: { listing_id: '0x1234', account_ids: [account] },
            title: 'Remove Whitelisted Accounts',
        },
        {
            pallet: 'Marketplace',
            method: 'place_counter_offer',
            params: { listing_id: '0x1234', price: '100' },
            title: 'Place Counter Offer',
        },
        {
            pallet: 'Marketplace',
            method: 'answer_counter_offer',
            params: {
                listing_id: '0x1234',
                creator: account,
                response: { Counter: '120' },
                current_price: '100',
            },
            title: 'Answer Counter Offer',
        },
        {
            pallet: 'FuelTanks',
            method: 'add_account',
            params: { tank_id: account, user_id: account },
            title: 'Add Account to Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'batch_add_account',
            params: { tank_id: account, user_ids: [account, account] },
            title: 'Add Accounts to Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'batch_remove_account',
            params: { tank_id: account, user_ids: [account, account] },
            title: 'Remove Accounts from Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'create_fuel_tank',
            params: { descriptor: { name: [84, 97, 110, 107], coverage_policy: 'Fees' } },
            title: 'Create Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'destroy_fuel_tank',
            params: { tank_id: account },
            title: 'Destroy Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'force_set_consumption',
            params: { tank_id: account, rule_set_id: 1, consumption: { total_consumed: '100' } },
            title: 'Set Fuel Consumption',
        },
        {
            pallet: 'FuelTanks',
            method: 'insert_rule_set',
            params: { tank_id: account, rule_set_id: 1, rule_set: { rules: [], require_account: true } },
            title: 'Add Fuel Tank Rule Set',
        },
        {
            pallet: 'FuelTanks',
            method: 'mutate_freeze_state',
            params: { tank_id: account, is_frozen: false },
            title: 'Unfreeze Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'mutate_fuel_tank',
            params: { tank_id: account, mutation: { coverage_policy: 'Fees' } },
            title: 'Edit Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'remove_account',
            params: { tank_id: account, user_id: account },
            title: 'Remove Account from Fuel Tank',
        },
        {
            pallet: 'FuelTanks',
            method: 'remove_account_rule_data',
            params: { tank_id: account, user_id: account, rule_set_id: 1, rule_kind: 'UserFuelBudget' },
            title: 'Remove Fuel Tank Account Rule Data',
        },
        {
            pallet: 'FuelTanks',
            method: 'remove_rule_set',
            params: { tank_id: account, rule_set_id: 1 },
            title: 'Remove Fuel Tank Rule Set',
        },
        {
            pallet: 'FuelTanks',
            method: 'remove_expired_account',
            params: { tank_id: account, user_id: account },
            title: 'Remove Expired Fuel Tank Account',
        },
    ]

    assert.equal(calls.length, 40)
    for (const { pallet, method, params, title } of calls) {
        const view = buildTransactionView({ [pallet]: { [method]: params } }, NETWORK)
        assert.equal(view.title, title, `${pallet}.${method}`)
        assert.notEqual(view.title, 'Transaction Request', `${pallet}.${method}`)
        assert.ok(view.fields.some((field) => field.type === 'text' && field.title === 'Network'))
    }
})

void test('new Platform views expose their decoded domain details', () => {
    const batchInfuse = buildTransactionView(
        {
            MultiTokens: {
                batch_infuse: {
                    collection_id: '10',
                    infusions: [
                        { token_id: '20', amount: '100' },
                        { token_id: '21', amount: '200' },
                    ],
                },
            },
        },
        NETWORK
    )
    assert.deepEqual(batchInfuse.fields, [
        { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
        { type: 'asset', value: '10-20' },
        { type: 'coin', title: 'Infuse Amount', coinId: 'enjin', value: '100' },
        { type: 'asset', value: '10-21' },
        { type: 'coin', title: 'Infuse Amount', coinId: 'enjin', value: '200' },
    ])

    const answerCounterOffer = buildTransactionView(
        {
            Marketplace: {
                answer_counter_offer: {
                    listing_id: '0x1234',
                    creator: { Id: [1, 2, 3, 4] },
                    response: { Counter: '120' },
                    current_price: '100',
                },
            },
        },
        NETWORK
    )
    assert.deepEqual(answerCounterOffer.fields, [
        { type: 'listing', value: '0x1234' },
        { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
        { type: 'text', title: 'Creator', value: '0x01020304' },
        { type: 'text', title: 'Response', value: 'Counter' },
        { type: 'coin', title: 'Current Price', coinId: 'enjin', value: '100' },
        { type: 'coin', title: 'Counter Price', coinId: 'enjin', value: '120' },
    ])
})

void test('unwraps Platform proxy and fuel tank wrappers recursively', () => {
    const view = buildTransactionView(
        {
            FuelTanks: {
                dispatch: {
                    tank_id: { Id: [9, 9, 9, 9] },
                    call: {
                        Proxy: {
                            proxy: {
                                real: { Id: [1, 2, 3, 4] },
                                call: {
                                    MultiTokens: {
                                        cancel_collection_transfer: { collection_id: '10' },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        NETWORK
    )

    assert.deepEqual(view, {
        title: 'Cancel Collection Transfer',
        fields: [
            { type: 'collection', value: '10' },
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
        ],
    })
})

void test('force batch has a readable continue-on-error view and unwraps proxied items', () => {
    const view = buildTransactionView(
        {
            Proxy: {
                proxy: {
                    real: { Id: [1, 2, 3, 4] },
                    call: {
                        Utility: {
                            force_batch: {
                                calls: [
                                    {
                                        Proxy: {
                                            proxy: {
                                                real: { Id: [1, 2, 3, 4] },
                                                call: {
                                                    MultiTokens: {
                                                        create_token_group: { collection_id: '10' },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    {
                                        Balances: {
                                            transfer_keep_alive: {
                                                dest: { Id: [5, 6, 7, 8] },
                                                value: '100',
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                },
            },
        },
        NETWORK
    )

    assert.equal(view.title, 'Batch Transaction')
    assert.deepEqual(view.fields, [
        { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
        { type: 'text', title: 'Execution', value: 'Continue on error' },
        {
            type: 'item',
            title: 'Create Token Group',
            subtitle: 'x 1',
            fields: [{ type: 'collection', value: '10' }],
        },
        {
            type: 'item',
            title: 'Transfer ENJ',
            subtitle: 'x 1',
            fields: [{ type: 'coin', title: 'Amount', coinId: 'enjin', value: '100' }],
        },
    ])
})

void test('malformed wrappers stop unwrapping and retain a call-specific fallback', () => {
    const view = buildTransactionView({ Proxy: { proxy: { real: { Id: [1, 2, 3, 4] } } } }, NETWORK)
    assert.deepEqual(view, {
        title: 'Proxy: Proxy',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            { type: 'text', title: 'Real · ID', value: '0x01020304' },
        ],
    })
})

void test('generic views identify unsupported calls and render all decoded parameters', () => {
    const view = buildTransactionView(
        {
            System: {
                remark_with_event: {
                    remark: [104, 105],
                    audit: {
                        requested_by: { Id: [1, 2, 3, 4] },
                        retries: 2n,
                    },
                    tags: ['alpha', 'beta'],
                    optional: null,
                    empty: [],
                },
            },
        },
        NETWORK
    )

    assert.deepEqual(view, {
        title: 'System: Remark With Event',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            { type: 'text', title: 'Remark', value: '0x6869' },
            { type: 'text', title: 'Audit · Requested By · ID', value: '0x01020304' },
            { type: 'text', title: 'Audit · Retries', value: '2' },
            { type: 'text', title: 'Tags · #1', value: 'alpha' },
            { type: 'text', title: 'Tags · #2', value: 'beta' },
            { type: 'text', title: 'Optional', value: 'None' },
            { type: 'text', title: 'Empty', value: '[]' },
        ],
    })
})

void test('generic views remain specific when a decoded call has no parameters', () => {
    assert.deepEqual(buildTransactionView({ System: { remark: {} } }, NETWORK), {
        title: 'System: Remark',
        fields: [{ type: 'text', title: 'Network', value: 'Enjin Matrixchain' }],
    })
})

void test('batches retain call-specific generic views for unsupported nested calls', () => {
    assert.deepEqual(
        buildTransactionView(
            {
                Utility: {
                    batch: {
                        calls: [{ System: { remark: { remark: [104, 105] } } }],
                    },
                },
            },
            NETWORK
        ),
        {
            title: 'Batch Transaction',
            fields: [
                { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
                {
                    type: 'item',
                    title: 'System: Remark',
                    subtitle: 'x 1',
                    fields: [{ type: 'text', title: 'Remark', value: '0x6869' }],
                },
            ],
        }
    )
})

void test('generic views use the transaction request title only when no call can be decoded', () => {
    assert.deepEqual(buildTransactionView(undefined, NETWORK), {
        title: 'Transaction Request',
        fields: [{ type: 'text', title: 'Network', value: 'Enjin Matrixchain' }],
    })
})

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

void test('matching offer preview distinguishes limits, maker pricing, and conditional remainder deposit', () => {
    const view = buildTransactionView(
        {
            Marketplace: {
                create_listing_and_match: {
                    descriptor: {
                        make_asset_id: { collection_id: '0', token_id: '0' },
                        take_asset_id: { collection_id: '7', token_id: '9' },
                        amount: '100',
                        price: '12',
                        start_block: null,
                    },
                    match_limit: '3',
                },
            },
        },
        NETWORK
    )

    assert.equal(view.title, 'Buy or Place Offer')
    assert.deepEqual(view.fields, [
        { type: 'asset', value: '7-9' },
        { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
        { type: 'text', title: 'Amount', value: '100' },
        { type: 'coin', title: 'Limit Price', coinId: 'enjin', value: '12' },
        { type: 'text', title: 'Match Limit', value: '3' },
        {
            type: 'text',
            title: 'Matching',
            value: 'Executes on chain at resting maker prices; fills are not guaranteed',
        },
        { type: 'text', title: 'Remainder', value: 'Rests only if unmatched and book capacity permits' },
        { type: 'coin', title: 'Conditional Listing Deposit', coinId: 'enjin', value: '507225000000000000' },
        { type: 'coin', title: 'Maximum Offer Total', coinId: 'enjin', value: '1200' },
    ])
})

void test('scheduled matching preview explains that matching is deferred and None uses the chain maximum', () => {
    const view = buildTransactionView(
        {
            Marketplace: {
                create_listing_and_match: {
                    descriptor: {
                        make_asset_id: { collection_id: '7', token_id: '9' },
                        take_asset_id: { collection_id: '0', token_id: '0' },
                        amount: '5',
                        price: '10',
                        start_block: '500',
                    },
                    match_limit: null,
                },
            },
        },
        NETWORK
    )

    assert.equal(view.title, 'Sell or List Asset')
    assert.deepEqual(
        view.fields.filter((field) => field.type === 'text').map((field) => [field.title, field.value]),
        [
            ['Network', 'Enjin Matrixchain'],
            ['Amount', '5'],
            ['Match Limit', 'Chain maximum'],
            ['Start Block', '500'],
            ['Matching', 'Scheduled orders do not match immediately'],
            ['Remainder', 'Rests only if unmatched and book capacity permits'],
        ]
    )
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
            { type: 'text', title: 'Execution', value: 'Stop on error' },
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

void test('matrix utility batches expose continue-on-failure execution', () => {
    const view = buildTransactionView(
        {
            MatrixUtility: {
                batch: {
                    calls: [{ System: { remark: { remark: [104, 105] } } }],
                    continue_on_failure: true,
                },
            },
        },
        NETWORK
    )

    assert.deepEqual(view, {
        title: 'Batch Transaction',
        fields: [
            { type: 'text', title: 'Network', value: 'Enjin Matrixchain' },
            { type: 'text', title: 'Execution', value: 'Continue on error' },
            {
                type: 'item',
                title: 'System: Remark',
                subtitle: 'x 1',
                fields: [{ type: 'text', title: 'Remark', value: '0x6869' }],
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

    assert.deepEqual(view.fields[3], {
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
