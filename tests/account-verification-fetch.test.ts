import assert from 'node:assert/strict'
import test from 'node:test'
import axios from 'axios'

import { fetchAccountsDetail } from '~/util/marketplace'

void test('account details request verifiedEnjin independently of profile verification', async (t) => {
    const queries: string[] = []
    const post = t.mock.method(axios, 'post', (_url, body) => {
        queries.push((body as { query: string }).query)
        return Promise.resolve({
            data: {
                data: {
                    result: [
                        {
                            publicKey: '0x1234',
                            username: 'enjin',
                            image: null,
                            verified: false,
                            verifiedEnjin: true,
                            verifiedDate: null,
                        },
                    ],
                },
            },
        })
    })

    const result = await fetchAccountsDetail(['0x1234'])

    assert.equal(post.mock.callCount(), 1)
    assert.match(queries[0], /verifiedEnjin/)
    assert.deepEqual(result, [
        {
            publicKey: '0x1234',
            username: 'enjin',
            image: null,
            verifiedAt: null,
            verifiedEnjin: true,
        },
    ])
})
