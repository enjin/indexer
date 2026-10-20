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

void test('collection extras request and return verifiedEnjin', async (t) => {
    const queries: string[] = []
    const post = t.mock.method(axios, 'post', (_url, body) => {
        queries.push((body as { query: string }).query)
        return Promise.resolve({
            data: { data: { result: [{ ...collectionExtra, verifiedEnjin: true }] } },
        })
    })

    const result = await fetchCollectionsExtra(['1'])

    assert.equal(post.mock.callCount(), 1)
    assert.match(queries[0], /verifiedEnjin/)
    assert.equal(result[0].verifiedEnjin, true)
})

void test('collection extras fail when the required NFT.io field is unavailable', async (t) => {
    const post = t.mock.method(axios, 'post', () =>
        Promise.resolve({
            data: { errors: [{ message: 'Cannot query field "verifiedEnjin" on type "CollectionExtras".' }] },
        })
    )

    await assert.rejects(fetchCollectionsExtra(['1']), /Cannot query field/)
    assert.equal(post.mock.callCount(), 1)
})
