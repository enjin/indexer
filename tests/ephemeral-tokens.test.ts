import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, CallItem, EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Attribute,
    Bid,
    Collection,
    CounterOffer,
    Listing,
    ListingSale,
    ListingStatus,
    ListingType,
    PoolMember,
    RoyaltyCurrency,
    Token,
    TokenAccount,
    TokenGroupToken,
    TokenLoan,
    TokenRarity,
    TraitToken,
    UserInfusion,
    WhitelistedAccount,
} from '~/model'
import { decodeTokenStorageValue, getMixedToken } from '~/pallet/multi-tokens/storage/token-values'
import {
    ephemeralTokenDestroyed,
    ephemeralTokenDestroyedEventModel,
} from '~/pallet/multi-tokens/events/ephemeral-token-destroyed'
import {
    ephemeralCleanupFailed,
    ephemeralCleanupFailedEventModel,
} from '~/pallet/multi-tokens/events/ephemeral-cleanup-failed'
import { listingCancelledEventModel } from '~/pallet/marketplace/events/listing-cancelled'
import { FinalizedTokenStorageReader } from '~/worker/jobs/tokens/token-storage-reader'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = {
    QueueUtils: {
        dispatchComputeAccountStats: () => Promise.resolve(),
        dispatchComputeStats: () => Promise.resolve(),
        dispatchComputeTokenBestListing: () => Promise.resolve(),
    },
}
testRequire.cache[queueModulePath] = queueModule

const { mint } = testRequire('~/pallet/multi-tokens/calls/mint') as typeof import('~/pallet/multi-tokens/calls/mint')
const { batchMint } = testRequire(
    '~/pallet/multi-tokens/calls/batch-mint'
) as typeof import('~/pallet/multi-tokens/calls/batch-mint')
const { forceMint } = testRequire(
    '~/pallet/multi-tokens/calls/force-mint'
) as typeof import('~/pallet/multi-tokens/calls/force-mint')
const { tokenDestroyed } = testRequire(
    '~/pallet/multi-tokens/processors/token-destroyed'
) as typeof import('~/pallet/multi-tokens/processors/token-destroyed')
const { tokenCreated } = testRequire(
    '~/pallet/multi-tokens/processors/token-created'
) as typeof import('~/pallet/multi-tokens/processors/token-created')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function matrixV1040Runtime(call?: (method: string, params?: unknown[]) => Promise<unknown>): Runtime {
    const metadata = fs
        .readFileSync('typegen/canary-matrixchain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === 1040)

    assert(metadata)
    return new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata,
        undefined,
        call ? { call } : undefined
    )
}

function tokenValue() {
    return {
        supply: 1n,
        cap: { __kind: 'Supply', value: 1n },
        freezeState: undefined,
        requiresDeposit: true,
        creationDeposit: { depositor: undefined, amount: 0n },
        ownerDeposit: 0n,
        totalTokenAccountDeposit: 0n,
        attributeCount: 0,
        accountCount: 1,
        marketBehavior: undefined,
        listingForbidden: false,
        metadata: { decimalCount: 0, name: '0x746f6b656e', symbol: '0x544b4e', foreign: undefined },
        infusion: 0n,
        anyoneCanInfuse: false,
        groups: [],
        ephemeralExpiration: 77,
        isLendable: false,
        lending: { lender: `0x${'11'.repeat(32)}`, expiration: 88 },
        mintRateLimit: undefined,
    }
}

function encodedTokens() {
    const runtime = matrixV1040Runtime()
    const type = runtime.description.storage.MultiTokens.items.Tokens.value
    const current = runtime.scaleCodec.encodeToHex(type, tokenValue())
    const definition = runtime.description.types[type]
    assert.equal(definition.kind, TypeKind.Composite)

    const types = runtime.description.types.slice() as Type[]
    types[type] = { ...definition, fields: definition.fields.slice(0, -4) }
    const legacyValue = tokenValue() as Record<string, unknown>
    delete legacyValue.ephemeralExpiration
    delete legacyValue.isLendable
    delete legacyValue.lending
    delete legacyValue.mintRateLimit
    const legacy = new Codec(types).encodeToHex(type, legacyValue)

    return { current, legacy }
}

function eventItem(runtime: Runtime, name: string, args: unknown, id = '10-2'): EventItem {
    return { id, name, args, block: { _runtime: runtime } } as EventItem
}

function callItem(runtime: Runtime, name: string, args: unknown): CallItem {
    return { id: '10-1', name, args, success: true, block: { _runtime: runtime } } as CallItem
}

function createParams(tokenId = '9') {
    return {
        __kind: 'CreateToken',
        tokenId,
        initialSupply: '1',
        accountDepositCount: undefined,
        cap: { __kind: 'Supply', value: '1' },
        behavior: undefined,
        listingForbidden: false,
        freezeState: undefined,
        attributes: [],
        infusion: '0',
        anyoneCanInfuse: false,
        metadata: { name: '0x746f6b656e', symbol: '0x544b4e', decimalCount: 0 },
        privilegedParams: undefined,
        groups: [],
        ephemeralExpiration: 77,
        isLendable: false,
        mintRateLimit: undefined,
    }
}

void test('token storage decoder accepts strict current and pre-v6 layouts', () => {
    const runtime = matrixV1040Runtime()
    const { current, legacy } = encodedTokens()
    const currentToken = decodeTokenStorageValue(runtime, current)
    const legacyToken = decodeTokenStorageValue(runtime, legacy)

    assert.equal(currentToken.ephemeralExpiration, 77n)
    assert.equal(currentToken.isLendable, false)
    assert.equal(currentToken.lending?.expiration, 88n)
    assert.equal(legacyToken.ephemeralExpiration, undefined)
    assert.equal(legacyToken.isLendable, false)
    assert.equal(legacyToken.lending, undefined)
})

void test('token storage decoder rejects malformed or ambiguous trailing bytes', () => {
    const runtime = matrixV1040Runtime()
    const { current, legacy } = encodedTokens()

    assert.throws(() => decodeTokenStorageValue(runtime, `${current}ff`), /either current or strict pre-v6 token/)
    assert.throws(() => decodeTokenStorageValue(runtime, `${legacy}ff`), /either current or strict pre-v6 token/)
    assert.throws(() => decodeTokenStorageValue(runtime, '0xdeadbeef'), /either current or strict pre-v6 token/)
})

void test('mixed token point reads preserve token zero and pin the block hash', async () => {
    const { legacy } = encodedTokens()
    const runtime = matrixV1040Runtime((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert.equal(params?.[1], '0x01')
        return Promise.resolve(legacy)
    })

    const token = await getMixedToken({ _runtime: runtime, hash: '0x01' } as Block, [0n, 0n])
    assert(token)
    assert.equal(token.supply, 1n)
    assert.equal(token.isLendable, false)
})

void test('mixed token point reads treat null and empty storage values as missing', async () => {
    for (const value of [null, '0x']) {
        const runtime = matrixV1040Runtime((method, params) => {
            assert.equal(method, 'state_getStorageAt')
            assert.equal(params?.[1], '0x01')
            return Promise.resolve(value)
        })

        const token = await getMixedToken({ _runtime: runtime, hash: '0x01' } as Block, [7n, 9n])
        assert.equal(token, undefined)
    }
})

void test('finalized token storage reader treats null and empty storage values as missing', async () => {
    const runtime = matrixV1040Runtime()

    for (const value of [null, { toHex: () => '0x' }]) {
        const api = {
            rpc: {
                state: {
                    getStorage: (key: string, blockHash: string) => {
                        assert.equal(key, runtime.encodeStorageKey('MultiTokens.Tokens', 7n, 9n))
                        assert.equal(blockHash, '0x01')
                        return Promise.resolve(value)
                    },
                },
            },
        }
        const reader = Reflect.construct(FinalizedTokenStorageReader, [
            api,
            '0x01',
            1,
            runtime,
        ]) as FinalizedTokenStorageReader

        assert.equal(await reader.token(7n, 9n), undefined)
    }
})

void test('v1040 direct, batch and force mint wrappers retain ephemeral fields', () => {
    const runtime = matrixV1040Runtime()
    const account = `0x${'22'.repeat(32)}`
    const direct = mint(
        callItem(runtime, 'MultiTokens.mint', {
            recipient: { __kind: 'Id', value: account },
            collectionId: '7',
            params: createParams(),
        })
    )
    const batch = batchMint(
        callItem(runtime, 'MultiTokens.batch_mint', {
            collectionId: '7',
            recipients: [{ accountId: account, params: createParams('10') }],
        })
    )
    const force = forceMint(
        callItem(runtime, 'MultiTokens.force_mint', {
            caller: undefined,
            recipient: { __kind: 'Id', value: account },
            collectionId: '7',
            params: {
                __kind: 'CreateOrMint',
                value: { ...createParams('11'), amount: '1', __kind: undefined },
            },
            depositor: undefined,
        })
    )

    assert.equal(direct.params.__kind === 'CreateToken' && direct.params.ephemeralExpiration, 77)
    assert.equal(batch.recipients[0].params.__kind === 'CreateToken' && batch.recipients[0].params.isLendable, false)
    assert.equal(force.params.__kind === 'CreateOrMint' && force.params.value.ephemeralExpiration, 77)
})

void test('token creation stores the event initial supply separately from live supply', async () => {
    const runtime = matrixV1040Runtime()
    const account = `0x${'22'.repeat(32)}`
    const collection = new Collection({ id: '7', attributes: [] })
    const saved: Token[] = []
    const item = eventItem(runtime, 'MultiTokens.TokenCreated', {
        collectionId: '7',
        tokenId: '9',
        issuer: { __kind: 'Signed', value: account },
        initialSupply: '3',
    })
    item.call = callItem(runtime, 'MultiTokens.mint', {
        recipient: { __kind: 'Id', value: account },
        collectionId: '7',
        params: { ...createParams(), initialSupply: '3' },
    })
    const ctx = {
        store: {
            findOne: (entity: unknown) => Promise.resolve(entity === Collection ? collection : undefined),
            save: (token: Token) => Promise.resolve(saved.push(token)),
        },
    } as never

    await tokenCreated(ctx, { _runtime: runtime, height: 10, timestamp: 0 } as Block, item, false)

    assert.equal(saved.length, 1)
    assert.equal(saved[0].supply, 0n)
    assert.equal(saved[0].creationSupply, 3n)
    assert.equal(saved[0].isLendable, false)
})

void test('ephemeral events retain scalar identity and support hook events without extrinsics', () => {
    const runtime = matrixV1040Runtime()
    const destroyedItem = eventItem(runtime, 'MultiTokens.EphemeralTokenDestroyed', {
        collectionId: '7',
        tokenId: '9',
        expiration: 77,
    })
    const failureItem = eventItem(runtime, 'MultiTokens.EphemeralCleanupFailed', {
        collectionId: '7',
        tokenId: '9',
        expiration: 77,
        error: { __kind: 'BadOrigin' },
    })
    const destroyed = ephemeralTokenDestroyed(destroyedItem)
    const failed = ephemeralCleanupFailed(failureItem)
    const destroyedModel = ephemeralTokenDestroyedEventModel(destroyedItem, 80, destroyed)
    const failedModel = ephemeralCleanupFailedEventModel(
        failureItem,
        { _runtime: runtime, height: 80 } as Block,
        failed
    )

    assert.equal(destroyedModel.extrinsic, null)
    assert.equal(destroyedModel.tokenId, '7-9')
    assert.equal(destroyedModel.data.expirationBlock, 77n)
    assert.equal(destroyedModel.data.observedBlock, 80n)
    assert.equal(failedModel.extrinsic, null)
    assert.equal(failedModel.data.error, 'BadOrigin')
})

void test('missing marketplace cancellation preserves listing identity without guessing an offer', () => {
    const [event] = listingCancelledEventModel(
        { id: '10-2', name: 'Marketplace.ListingCancelled' } as EventItem,
        '0xdeadbeef'
    )

    assert.equal(event.data.isTypeOf, 'MarketplaceListingCancelled')
    assert.equal(event.data.listing, '0xdeadbeef')
    assert.equal(event.listing, undefined)
})

void test('token destruction removes fixed-price, auction and offer dependants before the token', async () => {
    const runtime = matrixV1040Runtime()
    const seller = new Account({ id: `0x${'33'.repeat(32)}` })
    const buyer = new Account({ id: `0x${'44'.repeat(32)}` })
    const collection = new Collection({ id: '7' })
    const destroyed = new Token({ id: '7-9', tokenId: 9n, collection })
    const counterpart = new Token({ id: '7-10', tokenId: 10n, collection })
    const fixed = new Listing({
        id: 'fixed',
        type: ListingType.FixedPrice,
        seller,
        makeAssetId: destroyed,
        takeAssetId: counterpart,
    })
    const auction = new Listing({
        id: 'auction',
        type: ListingType.Auction,
        seller,
        makeAssetId: destroyed,
        takeAssetId: counterpart,
    })
    const offer = new Listing({
        id: 'offer',
        type: ListingType.Offer,
        seller,
        makeAssetId: counterpart,
        takeAssetId: destroyed,
    })
    const tokenAccount = new TokenAccount({ id: `${buyer.id}-7-9`, account: buyer })
    const activeLoan = new TokenLoan({ id: destroyed.id, token: destroyed, lender: seller, borrower: buyer })
    const accountEvent = new AccountTokenEvent({ id: '9-1', token: destroyed })
    const bid = new Bid({ id: 'bid', bidder: buyer, listing: auction })
    const sale = new ListingSale({ id: 'sale', buyer, listing: fixed })
    const status = new ListingStatus({ id: 'status', listing: fixed })
    const counterOffer = new CounterOffer({ id: 'counter', account: buyer, listing: offer })
    const whitelist = new WhitelistedAccount({ id: 'whitelist', account: buyer, listing: offer })
    const membership = new TokenGroupToken({ id: 'membership', token: destroyed })
    const poolMember = new PoolMember({ id: 'pool-member', tokenAccount })
    const royalty = new RoyaltyCurrency({ id: 'royalty', token: destroyed })
    const trait = new TraitToken({ id: 'trait', token: destroyed })
    const rarity = new TokenRarity({ id: 'rarity', token: destroyed })
    const attribute = new Attribute({ id: 'attribute', token: destroyed })
    const infusion = new UserInfusion({ id: 'infusion', token: destroyed })
    const removed: unknown[] = []
    const ctx = {
        log: { warn: () => undefined },
        store: {
            findOneBy: (entity: unknown) => {
                if (entity === Token) return Promise.resolve(destroyed)
                if (entity === TokenLoan) return Promise.resolve(activeLoan)
                return Promise.resolve(undefined)
            },
            find: (entity: unknown, options: { where?: Record<string, unknown> }) => {
                if (entity === AccountTokenEvent) return Promise.resolve([accountEvent])
                if (entity === TokenAccount) return Promise.resolve([tokenAccount])
                if (entity === Listing) {
                    return Promise.resolve('makeAssetId' in (options.where ?? {}) ? [fixed, auction] : [offer])
                }
                if (entity === Bid) return Promise.resolve([bid])
                if (entity === ListingSale) return Promise.resolve([sale])
                if (entity === ListingStatus) return Promise.resolve([status])
                if (entity === CounterOffer) return Promise.resolve([counterOffer])
                if (entity === WhitelistedAccount) return Promise.resolve([whitelist])
                if (entity === TokenGroupToken) return Promise.resolve([membership])
                if (entity === PoolMember) return Promise.resolve([poolMember])
                if (entity === RoyaltyCurrency) return Promise.resolve([royalty])
                if (entity === TraitToken) return Promise.resolve([trait])
                if (entity === TokenRarity) return Promise.resolve([rarity])
                if (entity === Attribute) return Promise.resolve([attribute])
                if (entity === UserInfusion) return Promise.resolve([infusion])
                if (entity === Token) return Promise.resolve([])
                return Promise.resolve([])
            },
            save: () => Promise.resolve(undefined),
            remove: (value: unknown) => Promise.resolve(removed.push(value)),
        },
    } as never

    await tokenDestroyed(
        ctx,
        { _runtime: runtime, height: 80 } as Block,
        eventItem(runtime, 'MultiTokens.TokenDestroyed', {
            collectionId: '7',
            tokenId: '9',
            caller: seller.id,
        }),
        false
    )

    assert.equal(accountEvent.token, null)
    assert.equal(poolMember.tokenAccount, null)
    const flattened = removed.flatMap((value) => (Array.isArray(value) ? value : [value]))
    for (const expected of [
        bid,
        counterOffer,
        whitelist,
        sale,
        status,
        fixed,
        auction,
        offer,
        tokenAccount,
        membership,
        royalty,
        trait,
        rarity,
        attribute,
        infusion,
        activeLoan,
        destroyed,
    ]) {
        assert(flattened.includes(expected), `${expected.constructor.name} was not removed`)
    }
    assert(flattened.indexOf(activeLoan) < flattened.indexOf(destroyed))
    assert.equal(flattened.at(-1), destroyed)
})
