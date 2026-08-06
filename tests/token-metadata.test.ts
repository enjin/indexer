import 'reflect-metadata'
import assert from 'node:assert/strict'
import test from 'node:test'
import {
    EntityMetadata,
    inheritEntityMetadata,
    isFreshMetadata,
    metadataUpdateRows,
    MetadataUriClient,
    resolveTokenUri,
} from '~/server-extension/token-metadata'

void test('inherits missing token metadata through group and collection precedence', () => {
    const tokenMetadata = new EntityMetadata({
        name: 'Token name',
        attributes: {
            tokenOnly: { value: 'token' },
        },
    })
    const groupMetadata = new EntityMetadata({
        description: '',
        fallbackImage: 'https://group.example/fallback.png',
        attributes: {
            shared: { value: 'group' },
        },
    })
    const collectionMetadata = new EntityMetadata({
        description: 'Collection description',
        fallbackImage: 'https://collection.example/fallback.png',
        attributes: {
            shared: { value: 'collection' },
            collectionOnly: { value: 'collection' },
        },
    })

    inheritEntityMetadata(tokenMetadata, groupMetadata)
    inheritEntityMetadata(tokenMetadata, collectionMetadata)

    assert.equal(tokenMetadata.name, 'Token name')
    assert.equal(tokenMetadata.description, 'Collection description')
    assert.equal(tokenMetadata.fallbackImage, 'https://group.example/fallback.png')
    assert.deepEqual(tokenMetadata.attributes, {
        shared: { value: 'group' },
        collectionOnly: { value: 'collection' },
        tokenOnly: { value: 'token' },
    })
})

void test('does not overwrite an existing token description', () => {
    const tokenMetadata = new EntityMetadata({ description: 'Token description' })
    const collectionMetadata = new EntityMetadata({ description: 'Collection description' })

    inheritEntityMetadata(tokenMetadata, collectionMetadata)

    assert.equal(tokenMetadata.description, 'Token description')
})

void test('substitutes every token ID placeholder in a metadata URI', () => {
    assert.equal(
        resolveTokenUri('https://metadata.example/{id}/image/{id}', '2000-1'),
        'https://metadata.example/2000-1/image/2000-1'
    )
})

void test('treats metadata as fresh for six hours', () => {
    const now = Date.parse('2026-07-29T12:00:00.000Z')

    assert.equal(
        isFreshMetadata(
            {
                lastUpdated: '2026-07-29T06:00:00.001Z',
                originUrl: 'https://origin.example/2000-1',
            },
            'https://origin.example/2000-1',
            now
        ),
        true
    )
    assert.equal(
        isFreshMetadata(
            {
                lastUpdated: '2026-07-29T06:00:00.000Z',
                originUrl: 'https://origin.example/2000-1',
            },
            'https://origin.example/2000-1',
            now
        ),
        true
    )
    assert.equal(
        isFreshMetadata(
            {
                lastUpdated: '2026-07-29T05:59:59.999Z',
                originUrl: 'https://origin.example/2000-1',
            },
            'https://origin.example/2000-1',
            now
        ),
        false
    )
    assert.equal(isFreshMetadata({ lastUpdated: 'invalid' }, 'https://origin.example/2000-1', now), false)
    assert.equal(isFreshMetadata(null, null, now), false)
    assert.equal(isFreshMetadata(null, 'https://origin.example/2000-1', now), false)
})

void test('extracts rows from TypeORM update returning results', () => {
    const row = { storedMetadata: { name: 'Token One' } }

    assert.deepEqual(metadataUpdateRows([[row], 1]), [row])
    assert.deepEqual(metadataUpdateRows([row]), [row])
    assert.deepEqual(metadataUpdateRows([[], 0]), [])
})

void test('fetches and normalizes metadata directly from its URI', async () => {
    const requests: Array<{
        url: string
        method?: string
        redirect?: RequestRedirect
    }> = []
    const validatedUrls: string[] = []
    const client = new MetadataUriClient(
        {
            timeoutMs: 1000,
            maxResponseBytes: 100_000,
        },
        (input, init) => {
            requests.push({
                url: typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url,
                method: init?.method,
                redirect: init?.redirect,
            })

            return Promise.resolve(
                new Response(
                    JSON.stringify({
                        name: 'Token One',
                        description: 'Description',
                        keywords: ['one', 'two'],
                        fallback_image: 'https://cdn.example/fallback.png',
                        banner_image: { url: 'https://cdn.example/banner.png' },
                        media: [{ url: 'https://cdn.example/model.glb', type: 'model/gltf-binary' }],
                        attributes: [{ name: 'rarity', value: 'legendary' }],
                    }),
                    {
                        status: 200,
                        headers: { 'content-type': 'application/json' },
                    }
                )
            )
        },
        (url) => {
            validatedUrls.push(url)
            return Promise.resolve()
        }
    )

    const resolved = await client.resolve(['https://origin.example/2000-1'])
    const metadata = resolved.get('https://origin.example/2000-1')

    assert.equal(requests.length, 1)
    assert.deepEqual(requests[0], {
        url: 'https://origin.example/2000-1',
        method: 'GET',
        redirect: 'manual',
    })
    assert.deepEqual(validatedUrls, ['https://origin.example/2000-1'])
    assert.equal(metadata?.name, 'Token One')
    assert.equal(metadata.fallbackImage, 'https://cdn.example/fallback.png')
    assert.equal(metadata.media?.[0].url, 'https://cdn.example/model.glb')
    assert.equal(metadata.originUrl, 'https://origin.example/2000-1')
})

void test('validates every direct metadata redirect', async () => {
    const validatedUrls: string[] = []
    const client = new MetadataUriClient(
        {
            timeoutMs: 1000,
            maxResponseBytes: 100_000,
        },
        (input) => {
            const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url
            if (url === 'https://origin.example/2000-1') {
                return Promise.resolve(
                    new Response(null, {
                        status: 302,
                        headers: { location: 'https://cdn.example/2000-1.json' },
                    })
                )
            }

            return Promise.resolve(
                new Response(JSON.stringify({ name: 'Token One' }), {
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                })
            )
        },
        (url) => {
            validatedUrls.push(url)
            return Promise.resolve()
        }
    )

    const resolved = await client.resolve(['https://origin.example/2000-1'])

    assert.equal(resolved.get('https://origin.example/2000-1')?.name, 'Token One')
    assert.deepEqual(validatedUrls, ['https://origin.example/2000-1', 'https://cdn.example/2000-1.json'])
})
