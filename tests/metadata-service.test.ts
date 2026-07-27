import assert from 'node:assert/strict'
import test from 'node:test'

import { Attribute, Collection, EntitySocials, Metadata, Token, TokenGroup, TokenGroupToken } from '~/model'
import { MetadataService } from '~/util/metadata-service'

function attribute(key: string, value: string): Attribute {
    return new Attribute({ key, value })
}

void test('updates token metadata fields and applies on-chain attributes after external metadata', () => {
    const metadataService = new MetadataService()
    const token = new Token({
        id: '1-1',
        attributes: [attribute('name', 'On-chain name'), attribute('description', 'On-chain description')],
        tokenGroupTokens: [],
    })
    const beforeUpdate = new Date()

    const metadata = metadataService.applyTokenMetadata(token, {
        name: 'External name',
        description: 'External description',
    })

    assert.equal(token.name, 'On-chain name')
    assert.equal(metadata.name, 'On-chain name')
    assert.equal(metadata.description, 'On-chain description')
    assert.ok(metadata.lastUpdated)
    assert.ok(metadata.lastUpdated >= beforeUpdate)
    assert.equal(token.metadata, metadata)
})

void test('fills missing token metadata from the primary token group and then the collection', () => {
    const metadataService = new MetadataService()
    const collection = new Collection({
        id: '1',
        metadata: new Metadata({
            description: 'Collection description',
            fallbackImage: 'https://collection/image.png',
        }),
    })
    const secondaryTokenGroup = new TokenGroup({
        id: '11',
        metadata: new Metadata({
            description: 'Secondary group description',
        }),
    })
    const primaryTokenGroup = new TokenGroup({
        id: '10',
        metadata: new Metadata({
            description: 'Primary group description',
        }),
    })
    const token = new Token({
        id: '1-1',
        attributes: [],
        collection,
        tokenGroupTokens: [
            new TokenGroupToken({ tokenGroup: secondaryTokenGroup, position: 1 }),
            new TokenGroupToken({ tokenGroup: primaryTokenGroup, position: 0 }),
        ],
    })

    const metadata = metadataService.applyTokenMetadata(token, { name: 'Token name' })

    assert.equal(metadata.name, 'Token name')
    assert.equal(metadata.description, 'Primary group description')
    assert.equal(metadata.fallbackImage, 'https://collection/image.png')
})

void test('stores socials only on collection metadata', () => {
    const metadataService = new MetadataService()
    const collection = new Collection({
        id: '1',
        attributes: [attribute('discord', 'collection-discord')],
    })
    const tokenGroup = new TokenGroup({
        id: '10',
        attributes: [attribute('discord', 'group-discord')],
        metadata: new Metadata({
            socials: new EntitySocials({ twitter: 'group-twitter' }),
        }),
    })
    const token = new Token({
        id: '1-1',
        attributes: [attribute('discord', 'token-discord')],
        collection,
        tokenGroupTokens: [new TokenGroupToken({ tokenGroup, position: 0 })],
    })

    const collectionMetadata = metadataService.applyMetadata(collection, null)
    const tokenMetadata = metadataService.applyTokenMetadata(token, null)

    assert.equal(collectionMetadata.socials?.discord, 'collection-discord')
    assert.equal(tokenMetadata.socials, undefined)
})
