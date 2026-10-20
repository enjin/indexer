import assert from 'node:assert/strict'
import test from 'node:test'
import { EventItem } from '~/contexts'
import { Account, Collection, Event as EventModel, Listing, Token } from '~/model'
import { listingCreatedEventModel } from '~/pallet/marketplace/events/listing-created'
import { whitelistedAccountsAddedEventModel } from '~/pallet/marketplace/events/whitelisted-accounts-added'
import { whitelistedAccountsRemovedEventModel } from '~/pallet/marketplace/events/whitelisted-accounts-removed'

const listing = new Listing({ id: 'ab'.repeat(32) })
const prefixedListingId = `0x${listing.id}`
const accountId = `0x${'11'.repeat(32)}`

function persistedListingReference(event: EventModel): string | null | undefined {
    // Event.data is a jsonb column; its generated toJSON shape is what GraphQL resolves as a Listing reference.
    const storedData = JSON.parse(JSON.stringify(event.data)) as { listing?: string | null }
    return storedData.listing
}

function assertResolvesListing(event: EventModel) {
    const listings = new Map([[listing.id, listing]])
    assert.equal(listings.get(persistedListingReference(event) ?? ''), listing)
}

void test('whitelist event payloads persist listing references that match Listing.id', () => {
    const item = { id: '13294632-1', extrinsic: { id: '13294632-0' } } as EventItem
    const added = whitelistedAccountsAddedEventModel(item, {
        listingId: prefixedListingId,
        accounts: [{ accountId, allowance: 5n }],
    })
    const removed = whitelistedAccountsRemovedEventModel(item, {
        listingId: prefixedListingId,
        accountIds: [accountId],
    })

    for (const event of [added, removed]) {
        assert.equal(event.id, item.id)
        assertResolvesListing(event)
        assert.deepEqual(JSON.parse(JSON.stringify(event.data)).accounts, [accountId])
    }
})

void test('listing and offer creation payloads normalize prefixed IDs and preserve canonical IDs', () => {
    const account = new Account({ id: accountId })
    const collection = new Collection({ id: '5' })
    const token = new Token({ id: '5-1', collection })
    const relations = { extrinsic: undefined, fromAccount: account, collection, token, toAccount: undefined }

    for (const isOffer of [false, true]) {
        for (const listingId of [prefixedListingId, listing.id]) {
            const [event, accountTokenEvent] = listingCreatedEventModel(
                '13294632-2',
                { collectionId: 5n, tokenId: 1n, listingId, isOffer },
                relations
            )
            assert.equal(event.id, '13294632-2')
            assert.equal(accountTokenEvent.event, event)
            assertResolvesListing(event)
        }
    }
})
