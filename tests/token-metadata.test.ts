import 'reflect-metadata'
import assert from 'node:assert/strict'
import test from 'node:test'
import {
    isFreshMetadata,
    metadataUpdateRows,
    MetadataServiceClient,
    resolveTokenUri,
} from '~/server-extension/token-metadata'

void test('substitutes every token ID placeholder in a metadata URI', () => {
    assert.equal(
        resolveTokenUri('https://metadata.example/{id}/image/{id}', '2000-1'),
        'https://metadata.example/2000-1/image/2000-1'
    )
})

void test('treats metadata as fresh for six hours', () => {
    const now = Date.parse('2026-07-29T12:00:00.000Z')

    assert.equal(isFreshMetadata({ lastUpdated: '2026-07-29T06:00:00.001Z' }, now), true)
    assert.equal(isFreshMetadata({ lastUpdated: '2026-07-29T06:00:00.000Z' }, now), true)
    assert.equal(isFreshMetadata({ lastUpdated: '2026-07-29T05:59:59.999Z' }, now), false)
    assert.equal(isFreshMetadata({ lastUpdated: 'invalid' }, now), false)
    assert.equal(isFreshMetadata(null, now), false)
})

void test('extracts rows from TypeORM update returning results', () => {
    const row = { storedMetadata: { name: 'Token One' } }

    assert.deepEqual(metadataUpdateRows([[row], 1]), [row])
    assert.deepEqual(metadataUpdateRows([row]), [row])
    assert.deepEqual(metadataUpdateRows([[], 0]), [])
})

void test('normalizes the Enjin metadata service response', async () => {
    const requests: Array<{
        url: string
        body: {
            variables: {
                urls: string[]
                language?: string
            }
        }
    }> = []
    const client = new MetadataServiceClient(
        {
            serviceUrl: 'https://metadata.example',
            language: 'en',
            timeoutMs: 1000,
            maxResponseBytes: 100_000,
        },
        (input, init) => {
            assert.equal(typeof init?.body, 'string')
            requests.push({
                url: typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url,
                body: JSON.parse(init.body) as {
                    variables: {
                        urls: string[]
                        language?: string
                    }
                },
            })

            return Promise.resolve(
                new Response(
                    JSON.stringify({
                        data: {
                            metadata: [
                                {
                                    metadata: {
                                        name: 'Token One',
                                        description: 'Description',
                                        keywords: ['one', 'two'],
                                        fallbackImage: { url: 'https://cdn.example/fallback.png' },
                                        bannerImage: { url: 'https://cdn.example/banner.png' },
                                        media: [{ url: 'https://cdn.example/model.glb', type: 'model/gltf-binary' }],
                                        attributes: [{ name: 'rarity', value: 'legendary' }],
                                    },
                                },
                            ],
                        },
                    }),
                    {
                        status: 200,
                        headers: { 'content-type': 'application/json' },
                    }
                )
            )
        }
    )

    const resolved = await client.resolve(['https://origin.example/2000-1'])
    const metadata = resolved.get('https://origin.example/2000-1')

    assert.equal(requests.length, 1)
    assert.equal(requests[0].url, 'https://metadata.example/graphql')
    assert.deepEqual(requests[0].body.variables, {
        urls: ['https://origin.example/2000-1'],
        language: 'en',
    })
    assert.equal(metadata?.name, 'Token One')
    assert.equal(metadata.fallbackImage, 'https://cdn.example/fallback.png')
    assert.equal(metadata.media?.[0].url, 'https://cdn.example/model.glb')
    assert.equal(metadata.originUrl, 'https://origin.example/2000-1')
})

void test('rejects malformed metadata service result counts', async () => {
    const client = new MetadataServiceClient(
        {
            serviceUrl: 'https://metadata.example/graphql',
            timeoutMs: 1000,
            maxResponseBytes: 100_000,
        },
        () =>
            Promise.resolve(
                new Response(JSON.stringify({ data: { metadata: [] } }), {
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                })
            )
    )

    await assert.rejects(() => client.resolve(['https://origin.example/2000-1']), /unexpected result count/)
})
