import assert from 'node:assert/strict'
import test from 'node:test'

import { Attribute, Collection, EntitySocials, Metadata, Token, TokenGroup, TokenGroupToken } from '~/model'
import config from '~/util/config'
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

type ResourceKind = 'collection' | 'token' | 'token group'

function applyResourceMetadata(
    kind: ResourceKind,
    externalMetadata: Record<string, unknown> | null,
    attributes: Attribute[] = []
): Metadata {
    const metadataService = new MetadataService()

    if (kind === 'token') {
        return metadataService.applyTokenMetadata(new Token({ id: '1-1', attributes }), externalMetadata)
    }

    const resource =
        kind === 'collection' ? new Collection({ id: '1', attributes }) : new TokenGroup({ id: '10', attributes })

    return metadataService.applyMetadata(resource, externalMetadata)
}

const resourceKinds: ResourceKind[] = ['collection', 'token', 'token group']
const externalUrlCases: { label: string; json: Record<string, unknown> | null; expected?: string }[] = [
    {
        label: 'standard external_url',
        json: { external_url: 'https://example.test/standard' },
        expected: 'https://example.test/standard',
    },
    {
        label: 'legacy externalUrl',
        json: { externalUrl: 'https://example.test/legacy' },
        expected: 'https://example.test/legacy',
    },
    {
        label: 'standard URL takes precedence over legacy URL',
        json: { external_url: 'https://example.test/standard', externalUrl: 'https://example.test/legacy' },
        expected: 'https://example.test/standard',
    },
    {
        label: 'null standard URL falls back to legacy URL',
        json: { external_url: null, externalUrl: 'https://example.test/legacy' },
        expected: 'https://example.test/legacy',
    },
    {
        label: 'empty standard URL does not fall back to legacy URL',
        json: { external_url: '', externalUrl: 'https://example.test/legacy' },
    },
    { label: 'missing URL', json: {} },
    { label: 'empty URL', json: { external_url: '' } },
    { label: 'null URL', json: { external_url: null } },
    { label: 'missing JSON metadata', json: null },
]

for (const { label, json, expected } of externalUrlCases) {
    void test(`parses ${label} consistently for collections, tokens and token groups`, () => {
        for (const kind of resourceKinds) {
            assert.equal(applyResourceMetadata(kind, json).externalUrl, expected, kind)
        }
    })
}

void test('ignores on-chain external_url attributes instead of overriding JSON metadata', () => {
    for (const kind of resourceKinds) {
        const attributes = [attribute('external_url', 'https://example.test/on-chain')]

        assert.equal(applyResourceMetadata(kind, null, attributes).externalUrl, undefined, kind)
        assert.equal(
            applyResourceMetadata(kind, { external_url: 'https://example.test/json' }, attributes).externalUrl,
            'https://example.test/json',
            kind
        )
    }
})

void test('prefers token JSON external_url and inherits a missing URL from the primary group then collection', () => {
    const metadataService = new MetadataService()
    const collection = new Collection({
        id: '1',
        metadata: new Metadata({ externalUrl: 'https://example.test/collection' }),
    })
    const secondaryGroup = new TokenGroup({
        id: '11',
        metadata: new Metadata({ externalUrl: 'https://example.test/secondary' }),
    })
    const cases = [
        {
            externalMetadata: { external_url: 'https://example.test/token' },
            primaryUrl: 'https://example.test/primary',
            expected: 'https://example.test/token',
        },
        {
            externalMetadata: {},
            primaryUrl: 'https://example.test/primary',
            expected: 'https://example.test/primary',
        },
        { externalMetadata: {}, primaryUrl: undefined, expected: 'https://example.test/collection' },
    ]

    for (const { externalMetadata, primaryUrl, expected } of cases) {
        const primaryGroup = new TokenGroup({
            id: '10',
            metadata: new Metadata({ externalUrl: primaryUrl }),
        })
        const token = new Token({
            id: '1-1',
            attributes: [],
            collection,
            tokenGroupTokens: [
                new TokenGroupToken({ tokenGroup: secondaryGroup, position: 1 }),
                new TokenGroupToken({ tokenGroup: primaryGroup, position: 0 }),
            ],
        })

        assert.equal(metadataService.applyTokenMetadata(token, externalMetadata).externalUrl, expected)
    }
})

void test('excludes both JSON URL spellings when external_url metadata support is disabled', () => {
    const originalSupportedProps = config.metadataSupportedProps

    try {
        config.metadataSupportedProps = originalSupportedProps.filter((prop) => prop !== 'external_url')

        for (const kind of resourceKinds) {
            for (const json of [
                { external_url: 'https://example.test/standard' },
                { externalUrl: 'https://example.test/legacy' },
            ]) {
                assert.equal(applyResourceMetadata(kind, json).externalUrl, undefined, kind)
            }
        }
    } finally {
        config.metadataSupportedProps = originalSupportedProps
    }
})
