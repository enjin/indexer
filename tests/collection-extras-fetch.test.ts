import assert from 'node:assert/strict'
import test from 'node:test'
import axios from 'axios'

import { fetchCollectionsExtra } from '~/util/marketplace'

const collectionExtra = {
    collectionId: '1',
    hidden: false,
    hiddenForLegalReasons: false,
    category: null,
    featured: false,
    marketplaceDisabled: false,
    verifiedAt: null,
}

void test('collection extras include verifiedEnjin when NFT.io exposes it', async (t) => {
    const post = t.mock.method(axios, 'post', () =>
        Promise.resolve({
            data: { data: { result: [{ ...collectionExtra, verifiedEnjin: true }] } },
        })
    )

    const result = await fetchCollectionsExtra(['1'])

    assert.equal(post.mock.callCount(), 1)
    assert.equal(result[0].verifiedEnjin, true)
})

void test('collection extras retry the legacy query when verifiedEnjin is unavailable', async (t) => {
    const queries: string[] = []
    t.mock.method(axios, 'post', (_url, body) => {
        queries.push((body as { query: string }).query)
        return Promise.resolve(
            queries.length === 1
                ? { data: { errors: [{ message: 'Cannot query field "verifiedEnjin" on type "CollectionExtras".' }] } }
                : { data: { data: { result: [collectionExtra] } } }
        )
    })

    const result = await fetchCollectionsExtra(['1'])

    assert.equal(queries.length, 2)
    assert.match(queries[0], /verifiedEnjin/)
    assert.doesNotMatch(queries[1], /verifiedEnjin/)
    assert.equal(result[0].verifiedEnjin, undefined)
})
