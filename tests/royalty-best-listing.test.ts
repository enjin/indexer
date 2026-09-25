import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Account, Collection, Listing, MarketPolicy, RoyaltyBeneficiary, Token } from '~/model'

const testRequire = createRequire(__filename)
const originalModules = new Map<string, NodeJS.Module | undefined>()
const dispatchedTokenIds: string[] = []

function stubModule(name: string, exports: unknown): void {
    const path = testRequire.resolve(name)
    originalModules.set(path, testRequire.cache[path])
    const module = new Module(path)
    module.loaded = true
    module.exports = exports
    testRequire.cache[path] = module
}

stubModule('~/queue', {
    QueueUtils: {
        dispatchComputeTokenBestListing: (id: string) => {
            dispatchedTokenIds.push(id)
            return Promise.resolve()
        },
    },
})
stubModule('~/util/entities', {
    getOrCreateAccount: (_ctx: unknown, id: string) => Promise.resolve(new Account({ id, address: id })),
})
stubModule('~/pallet/index', {
    multiTokens: {
        events: {
            collectionMutated: () => ({
                collectionId: 3846n,
                mutation: {
                    royalty: {
                        __kind: 'SomeMutation',
                        value: { beneficiaries: [{ beneficiary: 'new-beneficiary', percentage: 500_000_000 }] },
                    },
                },
            }),
            collectionMutatedEventModel: () => ({}),
        },
    },
})

let listingsForRefresh: Listing[] = []
const savedListings: Listing[] = []
stubModule('~/contexts', {
    connectionManager: () =>
        Promise.resolve({
            find: () => Promise.resolve(listingsForRefresh),
            save: (listing: Listing) => {
                savedListings.push(listing)
                return Promise.resolve()
            },
        }),
})
stubModule('~/util/rpc', {
    __esModule: true,
    default: {
        getInstance: () =>
            Promise.resolve({
                ensureConnected: () => Promise.resolve(),
                api: {
                    query: {
                        marketplace: {
                            listings: () =>
                                Promise.resolve({ toJSON: () => ({ minReceived: '90', price: '100', amount: '1' }) }),
                        },
                    },
                },
            }),
    },
})

const { collectionMutated } = testRequire(
    '~/pallet/multi-tokens/processors/collection-mutated'
) as typeof import('~/pallet/multi-tokens/processors/collection-mutated')
const { refreshListings } = testRequire(
    '~/worker/jobs/listings/refresh-listings'
) as typeof import('~/worker/jobs/listings/refresh-listings')

after(() => {
    for (const [path, original] of originalModules) {
        testRequire.cache[path] = original
    }
})

function listing(id: string, token: Token, collection: Collection): Listing {
    token.collection = collection
    return new Listing({
        id,
        makeAssetId: token,
        seller: new Account({ id: 'seller', address: 'seller' }),
        isActive: true,
    })
}

void test('collection royalty changes invalidate each affected token once after saving listings', async () => {
    dispatchedTokenIds.length = 0
    const operations: string[] = []
    const collection = new Collection({
        id: '3846',
        marketPolicy: new MarketPolicy({
            beneficiaries: [new RoyaltyBeneficiary({ accountId: 'old-beneficiary', percentage: 100_000_000 })],
        }),
    })
    const firstToken = new Token({ id: '3846-73' })
    const secondToken = new Token({ id: '3846-84' })
    const listings = [
        listing('listing-1', firstToken, collection),
        listing('listing-2', firstToken, collection),
        listing('listing-3', secondToken, collection),
    ]
    const ctx = {
        store: {
            findOne: () => Promise.resolve(collection),
            find: () => Promise.resolve(listings),
            save: (value: unknown) => {
                if (Array.isArray(value)) operations.push('saved listings')
                return Promise.resolve()
            },
        },
    }

    await collectionMutated(ctx as never, {} as never, { id: 'event-1' } as never, false)

    assert(listings.every((item) => item.hasRoyaltyIncreased === true))
    assert.deepEqual(operations, ['saved listings'])
    assert.deepEqual(dispatchedTokenIds, ['3846-73', '3846-84'])
})

void test('listing refresh invalidates the token when royalty makes an active listing ineligible', async () => {
    dispatchedTokenIds.length = 0
    savedListings.length = 0
    const collection = new Collection({
        id: '3846',
        marketPolicy: new MarketPolicy({
            beneficiaries: [new RoyaltyBeneficiary({ accountId: 'beneficiary', percentage: 500_000_000 })],
        }),
    })
    const active = listing('listing-1', new Token({ id: '3846-73' }), collection)
    const inactive = listing('listing-2', new Token({ id: '3846-84' }), collection)
    inactive.isActive = false
    listingsForRefresh = [active, inactive]
    const job = { updateProgress: async () => {}, log: async () => {} }

    await refreshListings(job as never, [active.id, inactive.id])

    assert.equal(active.hasRoyaltyIncreased, true)
    assert.deepEqual(savedListings, [active])
    assert.deepEqual(dispatchedTokenIds, ['3846-73'])
})
