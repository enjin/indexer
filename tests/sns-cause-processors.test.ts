import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import { Account, Collection, Token, TokenAccount } from '~/model'
import { SnsEvent } from '~/util/sns'
import { rememberBlockEvents } from '~/util/sns-cause'

// The processors pull in the job queue; stub it so the run exits and no Redis is needed.
const testRequire = createRequire(__filename)
const stubbed = new Map<string, NodeJS.Module | undefined>()
function stubModule(specifier: string, exports: unknown): void {
    const modulePath = testRequire.resolve(specifier)
    assert.equal(testRequire.cache[modulePath], undefined, `${specifier} loaded before the test stub was installed`)
    const module = new Module(modulePath)
    module.loaded = true
    module.exports = exports
    stubbed.set(modulePath, testRequire.cache[modulePath])
    testRequire.cache[modulePath] = module
}
const noop = () => Promise.resolve()
const queueUtils = {
    dispatchComputeAccountStats: noop,
    dispatchComputeStats: noop,
    dispatchComputeTraits: noop,
    dispatchComputeTokenBestListing: noop,
}
stubModule('~/queue/queue-utils', queueUtils)
stubModule('~/queue', { QueueUtils: queueUtils })

const { burned } = testRequire(
    '~/pallet/multi-tokens/processors/burned'
) as typeof import('~/pallet/multi-tokens/processors/burned')
const { transferred } = testRequire(
    '~/pallet/multi-tokens/processors/transferred'
) as typeof import('~/pallet/multi-tokens/processors/transferred')
const { ephemeralTokenDestroyed } = testRequire(
    '~/pallet/multi-tokens/processors/ephemeral-token-destroyed'
) as typeof import('~/pallet/multi-tokens/processors/ephemeral-token-destroyed')

after(() => {
    for (const [modulePath, original] of stubbed) testRequire.cache[modulePath] = original
})

type MetadataLine = { specName: string; specVersion: number; metadata: string }

function runtimeFor(network: string, version: number): Runtime {
    const line = fs
        .readFileSync(`typegen/${network}.jsonl`, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((row) => JSON.parse(row) as MetadataLine)
        .find((row) => row.specVersion === version)
    assert(line)
    return new Runtime(
        { specName: line.specName, specVersion: line.specVersion, implName: '', implVersion: 0 },
        line.metadata
    )
}

const runtime = runtimeFor('canary-matrixchain', 1042)
const block = { _runtime: runtime, height: 500, hash: '0x01', timestamp: 1_000 } as Block
const holder = `0x${'11'.repeat(32)}`
const lender = `0x${'22'.repeat(32)}`

function eventItem(id: string, name: string, args: unknown, extrinsic?: string): EventItem {
    return {
        id,
        name,
        args,
        block: { _runtime: runtime },
        extrinsic: extrinsic ? { id: extrinsic } : undefined,
    } as EventItem
}

function fixtures() {
    const accounts = new Map<string, Account>()
    const savedTokenAccounts: TokenAccount[] = []
    const token = new Token({
        id: '10-20',
        tokenId: 20n,
        collection: new Collection({ id: '10', collectionId: 10n }),
        supply: 1n,
        infusion: 0n,
        ephemeralExpiration: 500n,
    })
    const ctx = {
        store: {
            findOne: (entity: unknown, options: { where: { id: string } }) => {
                if (entity === Token) return Promise.resolve(token)
                if (entity === TokenAccount) {
                    return Promise.resolve(new TokenAccount({ id: options.where.id, balance: 1n, totalBalance: 1n }))
                }
                return Promise.resolve(undefined)
            },
            findOneBy: (entity: unknown, where: { id: string }) =>
                Promise.resolve(entity === Account ? accounts.get(where.id) : undefined),
            find: () => Promise.resolve([]),
            save: (entity: unknown) => {
                if (entity instanceof Account) accounts.set(entity.id, entity)
                if (entity instanceof TokenAccount) savedTokenAccounts.push(entity)
                return Promise.resolve(entity)
            },
            insert: (entity: unknown) => Promise.resolve(entity),
        },
        log: { error: () => undefined, warn: () => undefined },
    } as never
    return { ctx, token, savedTokenAccounts }
}

function snsOf(result: readonly unknown[] | undefined): SnsEvent | undefined {
    assert(result)
    return result[result.length - 1] as SnsEvent | undefined
}

const burnedArgs = { collectionId: '10', tokenId: '20', accountId: holder, amount: '1' }
const expiryArgs = { collectionId: '10', tokenId: '20', expiration: 500 }

void test('a burn of an expired ephemeral token is published as Burned with cause ephemeralExpiry', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('500-1', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('500-2', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [burnedItem, expiryItem])

    const sns = snsOf(await burned(ctx, block, burnedItem, false))

    assert(sns)
    assert.equal(sns.name, 'MultiTokens.Burned')
    assert.equal(sns.body.cause, 'ephemeralExpiry')
    assert.equal(sns.body.expiration, 500)
    assert.equal(sns.body.account, holder)
    assert.equal(sns.body.extrinsic, undefined)
})

void test('the EphemeralTokenDestroyed event itself is persisted but not published', () => {
    const result = ephemeralTokenDestroyed(
        {} as never,
        block,
        eventItem('500-2', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    )

    assert(!Array.isArray(result))
    assert.equal(result?.name, 'MultiTokensEphemeralTokenDestroyed')
})

void test('a burn with no expiry in its block is published with cause burn', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('500-1', 'MultiTokens.Burned', burnedArgs, '500-0')
    const otherToken = eventItem('500-2', 'MultiTokens.EphemeralTokenDestroyed', { ...expiryArgs, tokenId: '21' })
    rememberBlockEvents(block.hash, [burnedItem, otherToken])

    const sns = snsOf(await burned(ctx, block, burnedItem, false))

    assert(sns)
    assert.equal(sns.body.cause, 'burn')
    assert.equal(sns.body.expiration, undefined)
    assert.equal(sns.body.extrinsic, '500-0')
})

const transferArgs = { collectionId: '10', tokenId: '20', operator: holder, from: holder, to: lender, amount: '1' }
const returnedArgs = { collectionId: '10', tokenId: '20', lender, borrower: holder }

void test('a transfer that returns a loan is published as Transferred with cause loanReturn', async () => {
    const { ctx } = fixtures()
    const returnedItem = eventItem('500-1', 'MultiTokens.TokenReturned', returnedArgs)
    const transferItem = eventItem('500-2', 'MultiTokens.Transferred', transferArgs)
    rememberBlockEvents(block.hash, [returnedItem, transferItem])

    const sns = snsOf(await transferred(ctx, block, transferItem, false))

    assert(sns)
    assert.equal(sns.name, 'MultiTokens.Transferred')
    assert.equal(sns.body.cause, 'loanReturn')
    assert.equal(sns.body.lender, lender)
    assert.equal(sns.body.borrower, holder)
    assert.equal(sns.body.from, holder)
    assert.equal(sns.body.to, lender)
})

void test('a transfer with no return in its block is published with cause transfer', async () => {
    const { ctx } = fixtures()
    const transferItem = eventItem('500-2', 'MultiTokens.Transferred', transferArgs, '500-0')
    rememberBlockEvents(block.hash, [transferItem])

    const sns = snsOf(await transferred(ctx, block, transferItem, false))

    assert(sns)
    assert.equal(sns.body.cause, 'transfer')
    assert.equal(sns.body.lender, undefined)
    assert.equal(sns.body.borrower, undefined)
})

const loanStartArgs = { collectionId: '10', tokenId: '20', lender: holder, borrower: lender, expiration: 600 }

void test('the exact transfer for a loan start carries loanStart across nested calls without changing balances or history', async () => {
    const { ctx, savedTokenAccounts } = fixtures()
    const transferItem = {
        ...eventItem('500-1', 'MultiTokens.Transferred', transferArgs, '500-0'),
        call: { id: '500-0-0' },
    } as EventItem
    const lentItem = {
        ...eventItem('500-2', 'MultiTokens.TokenLent', loanStartArgs, '500-0'),
        call: { id: '500-0' },
    } as EventItem
    rememberBlockEvents(block.hash, [transferItem, lentItem])

    const result = await transferred(ctx, block, transferItem, false)
    const sns = snsOf(result)

    assert(sns)
    assert.equal(sns.name, 'MultiTokens.Transferred')
    assert.equal(sns.body.cause, 'loanStart')
    assert.equal(sns.body.lender, holder)
    assert.equal(sns.body.borrower, lender)
    assert.equal(sns.body.amount, 1)
    assert.equal(sns.body.extrinsic, '500-0')
    assert(result)
    assert.equal(result[0]?.id, transferItem.id)
    assert.equal(result[1]?.id, transferItem.id)
    assert.equal(savedTokenAccounts.length, 2)
    assert.equal(savedTokenAccounts[0].balance, 0n)
    assert.equal(savedTokenAccounts[0].totalBalance, 0n)
    assert.equal(savedTokenAccounts[1].balance, 2n)
    assert.equal(savedTokenAccounts[1].totalBalance, 2n)
})

const unrelatedLoanStarts: {
    label: string
    transfer?: Partial<typeof transferArgs>
    loan?: Partial<typeof loanStartArgs>
    extrinsic?: 'different' | 'missing' | 'empty'
    before?: boolean
}[] = [
    { label: 'another extrinsic', extrinsic: 'different' },
    { label: 'no extrinsic', extrinsic: 'missing' },
    { label: 'empty extrinsic IDs', extrinsic: 'empty' },
    { label: 'another collection', loan: { collectionId: '11' } },
    { label: 'another token', loan: { tokenId: '21' } },
    { label: 'another lender', loan: { lender: `0x${'33'.repeat(32)}` } },
    { label: 'another borrower', loan: { borrower: `0x${'44'.repeat(32)}` } },
    { label: 'an amount greater than one', transfer: { amount: '2' } },
    { label: 'a zero amount', transfer: { amount: '0' } },
    { label: 'a preceding TokenLent', before: true },
]

for (const scenario of unrelatedLoanStarts) {
    void test(`a transfer stays ordinary when TokenLent has ${scenario.label}`, async () => {
        const { ctx } = fixtures()
        const transferItem = eventItem(
            '500-1',
            'MultiTokens.Transferred',
            { ...transferArgs, ...scenario.transfer },
            '500-0'
        )
        const lentItem = eventItem('500-2', 'MultiTokens.TokenLent', { ...loanStartArgs, ...scenario.loan }, '500-0')
        if (scenario.extrinsic === 'different') lentItem.extrinsic = { id: '500-9' } as EventItem['extrinsic']
        if (scenario.extrinsic === 'missing') {
            transferItem.extrinsic = undefined
            lentItem.extrinsic = undefined
        }
        if (scenario.extrinsic === 'empty') {
            transferItem.extrinsic = { id: '' } as EventItem['extrinsic']
            lentItem.extrinsic = { id: '' } as EventItem['extrinsic']
        }
        rememberBlockEvents(block.hash, scenario.before ? [lentItem, transferItem] : [transferItem, lentItem])

        const sns = snsOf(await transferred(ctx, block, transferItem, false))

        assert(sns)
        assert.equal(sns.body.cause, 'transfer')
        assert.equal(sns.body.lender, undefined)
        assert.equal(sns.body.borrower, undefined)
    })
}

void test('only the nearest matching transfer is tagged in an A-to-B, B-to-A, lend-A-to-B batch', async () => {
    const ordinary = eventItem('500-1', 'MultiTokens.Transferred', transferArgs, '500-0')
    const back = eventItem('500-2', 'MultiTokens.Transferred', { ...transferArgs, from: lender, to: holder }, '500-0')
    const loanTransfer = eventItem('500-3', 'MultiTokens.Transferred', transferArgs, '500-0')
    const lent = eventItem('500-5', 'MultiTokens.TokenLent', loanStartArgs, '500-0')
    rememberBlockEvents(block.hash, [
        ordinary,
        back,
        loanTransfer,
        eventItem('500-4', 'System.ExtrinsicSuccess', {}, '500-0'),
        lent,
    ])

    // Process out of order and repeat the loan transfer: pairing cannot depend on which processor ran first.
    for (const [item, cause] of [
        [loanTransfer, 'loanStart'],
        [ordinary, 'transfer'],
        [back, 'transfer'],
        [loanTransfer, 'loanStart'],
    ] as const) {
        const { ctx } = fixtures()
        const sns = snsOf(await transferred(ctx, block, item, false))
        assert.equal(sns?.body.cause, cause)
    }
})

void test('multiple loans in one extrinsic each tag their own preceding transfer once', async () => {
    const firstTransfer = eventItem('500-1', 'MultiTokens.Transferred', transferArgs, '500-0')
    const firstLoan = eventItem('500-2', 'MultiTokens.TokenLent', loanStartArgs, '500-0')
    const returned = eventItem(
        '500-3',
        'MultiTokens.TokenReturned',
        { ...returnedArgs, lender: holder, borrower: lender },
        '500-0'
    )
    const returnTransfer = eventItem(
        '500-4',
        'MultiTokens.Transferred',
        { ...transferArgs, from: lender, to: holder },
        '500-0'
    )
    const ordinary = eventItem('500-5', 'MultiTokens.Transferred', transferArgs, '500-0')
    const ordinaryBack = eventItem(
        '500-6',
        'MultiTokens.Transferred',
        { ...transferArgs, from: lender, to: holder },
        '500-0'
    )
    const secondTransfer = eventItem('500-7', 'MultiTokens.Transferred', transferArgs, '500-0')
    const secondLoan = eventItem('500-8', 'MultiTokens.TokenLent', { ...loanStartArgs, expiration: 700 }, '500-0')
    rememberBlockEvents(block.hash, [
        firstTransfer,
        firstLoan,
        returned,
        returnTransfer,
        ordinary,
        ordinaryBack,
        secondTransfer,
        secondLoan,
    ])

    for (const [item, cause] of [
        [secondTransfer, 'loanStart'],
        [ordinary, 'transfer'],
        [firstTransfer, 'loanStart'],
        [returnTransfer, 'loanReturn'],
    ] as const) {
        const { ctx } = fixtures()
        const sns = snsOf(await transferred(ctx, block, item, false))
        assert.equal(sns?.body.cause, cause)
    }
})

void test('an unrelated prior return in another extrinsic cannot preempt an exact loan-start transfer', async () => {
    const { ctx } = fixtures()
    const returned = eventItem('500-1', 'MultiTokens.TokenReturned', returnedArgs, '500-9')
    const transferItem = eventItem('500-2', 'MultiTokens.Transferred', transferArgs, '500-0')
    const lentItem = eventItem('500-3', 'MultiTokens.TokenLent', loanStartArgs, '500-0')
    rememberBlockEvents(block.hash, [returned, transferItem, lentItem])

    const sns = snsOf(await transferred(ctx, block, transferItem, false))

    assert(sns)
    assert.equal(sns.body.cause, 'loanStart')
    assert.equal(sns.body.lender, holder)
    assert.equal(sns.body.borrower, lender)
})

void test('historical transfer replay keeps activity and suppresses loan-start SNS and balance writes', async () => {
    const { ctx, savedTokenAccounts } = fixtures()
    const transferItem = eventItem('500-1', 'MultiTokens.Transferred', transferArgs, '500-0')
    const lentItem = eventItem('500-2', 'MultiTokens.TokenLent', loanStartArgs, '500-0')
    rememberBlockEvents(block.hash, [transferItem, lentItem])

    const result = await transferred(ctx, block, transferItem, true)

    assert(result)
    assert.equal(snsOf(result), undefined)
    assert.equal(result[0]?.id, transferItem.id)
    assert.equal(result[1]?.id, transferItem.id)
    assert.equal(savedTokenAccounts.length, 0)
})

void test('a fill from create_listing_and_match carries cause match with the taker and side', () => {
    const { listingFilledSnsEvent } = testRequire(
        '~/pallet/marketplace/processors/listing-filled-sns'
    ) as typeof import('~/pallet/marketplace/processors/listing-filled-sns')
    const { Listing, ListingType, FixedPriceData, FixedPriceState } = testRequire('~/model') as typeof import('~/model')
    const { token } = fixtures()
    const currency = new Token({ id: '0-0', tokenId: 0n, collection: new Collection({ id: '0', collectionId: 0n }) })
    const listing = new Listing({
        id: 'aa'.repeat(32),
        type: ListingType.FixedPrice,
        seller: new Account({ id: holder }),
        makeAssetId: token,
        takeAssetId: currency,
        amount: 1n,
        price: 10n,
        highestPrice: 10n,
        data: new FixedPriceData({ listingType: ListingType.FixedPrice }),
        state: new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 1n, amountRemaining: 0n }),
    })
    const fill = {
        listingId: `0x${listing.id}`,
        buyer: lender,
        price: 10n,
        amountFilled: 1n,
        amountRemaining: 0n,
        protocolFee: 0n,
        royalty: 0n,
    }

    const matched = listingFilledSnsEvent(
        eventItem('500-3', 'Marketplace.ListingFilled', {}, '500-0'),
        fill,
        listing,
        token,
        currency,
        {
            taker: lender,
            side: { __kind: 'Bid' },
            assetId: { collectionId: 10n, tokenId: 20n },
            currencyId: { collectionId: 0n, tokenId: 0n },
            amountMatched: 3n,
            ordersExamined: 2,
            remainderListingId: `0x${'bb'.repeat(32)}`,
            unrestedAmount: 1n,
        }
    )
    assert.equal(matched.body.cause, 'match')
    assert.deepEqual(matched.body.taker, { id: lender })
    assert.equal(matched.body.side, 'Bid')
    // the OrderMatched summary nft-io reads (NFTIO-4382) travels on each fill of the match
    assert.equal(matched.body.amountMatched, 3n)
    assert.equal(matched.body.ordersExamined, 2)
    assert.equal(matched.body.remainderListingId, 'bb'.repeat(32))
    assert.equal(matched.body.unrestedAmount, 1n)

    const plain = listingFilledSnsEvent(
        eventItem('500-3', 'Marketplace.ListingFilled', {}, '500-0'),
        fill,
        listing,
        token,
        currency
    )
    assert.equal(plain.body.cause, 'fill')
    assert.equal(plain.body.taker, undefined)
    assert.equal(plain.body.side, undefined)
    assert.equal(plain.body.amountMatched, undefined)
})
