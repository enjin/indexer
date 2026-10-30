import assert from 'node:assert/strict'
import test from 'node:test'
import type { EntityManager } from 'typeorm'
import { TokenListingFilterInput } from '~/server-extension/accounts-tokens-connection'
import { encodeCursor } from '~/server-extension/helpers'
import {
    buildCursorCondition,
    CollectionInventoryOrderByInput,
    CollectionInventoryOrderInput,
    CollectionInventoryResolver,
} from '~/server-extension/collection-inventory'

void test('collection inventory filters offers before pagination and returns the owner listing price', async () => {
    const accountId = `0x${'11'.repeat(32)}`
    const queries: { sql: string; params: unknown[] }[] = []
    const token = {
        id: '123-1',
        tokenId: 1n,
        supply: 1n,
        isFrozen: false,
        metadata: {},
        nonFungible: true,
        createdAt: new Date('2026-01-01T00:00:00Z'),
        collection: { id: '123', collectionId: 123n, metadata: {}, attributes: [] },
        attributes: [],
    }
    const builder = {
        leftJoinAndSelect: () => builder,
        addSelect: () => builder,
        where: () => builder,
        getMany: () => Promise.resolve([token]),
    }
    const manager = {
        getRepository: () => ({ createQueryBuilder: () => builder }),
        query: (sql: string, params: unknown[]) => {
            queries.push({ sql, params })
            if (sql.includes('LIMIT 2')) {
                return Promise.resolve([
                    {
                        id: token.id,
                        sort_priority: 1,
                        created_at: token.createdAt,
                        token_name: 'Token',
                        best_listing_price: null,
                    },
                ])
            }
            if (sql.includes('SELECT COUNT(*) AS count')) return Promise.resolve([{ count: '1' }])
            if (sql.includes('SELECT DISTINCT ON (make_asset_id_id)')) {
                return Promise.resolve([{ token_id: token.id, price: '1000000000000000000' }])
            }
            if (sql.includes('COALESCE(SUM(balance)')) {
                return Promise.resolve([{ token_id: token.id, balance: '1', reserved_balance: '0' }])
            }
            throw new Error('Unexpected SQL query')
        },
    } as unknown as EntityManager

    const resolver = new CollectionInventoryResolver(() => Promise.resolve(manager))
    const args = {
        accountIds: [accountId],
        collectionId: '123',
        first: 1,
        orderBy: CollectionInventoryOrderByInput.DATE,
        order: CollectionInventoryOrderInput.DESC,
        listingFilter: TokenListingFilterInput.HAS_OFFER,
    } as Parameters<CollectionInventoryResolver['collectionInventory']>[0]
    const result = await resolver.collectionInventory(args)

    assert.equal(result.totalCount, 1)
    assert.equal(result.edges.length, 1)
    const item = result.edges[0].node as { listedPrice?: bigint }
    assert.equal(item.listedPrice, 1000000000000000000n)

    const [pageQuery, countQuery, priceQuery] = queries
    for (const query of [pageQuery, countQuery]) {
        assert.match(query.sql, /EXISTS \(SELECT 1 FROM listing offer WHERE offer\.take_asset_id_id = token\.id/)
        assert.match(query.sql, /offer\.type = 'Offer' AND offer\.is_active = true/)
    }
    assert.match(priceQuery.sql, /SELECT DISTINCT ON \(make_asset_id_id\)/)
    assert.match(priceQuery.sql, /take_asset_id_id = '0-0'/)
    assert.match(priceQuery.sql, /ORDER BY make_asset_id_id, price ASC, id ASC/)
    assert.deepEqual(priceQuery.params, [[token.id], [accountId]])
})

const pageQueryFor = async (after: string, order: CollectionInventoryOrderInput) => {
    const queries: { sql: string; params: unknown[] }[] = []
    const manager = {
        query: (sql: string, params: unknown[]) => {
            queries.push({ sql, params })
            return Promise.resolve(sql.includes('SELECT COUNT(*) AS count') ? [{ count: '0' }] : [])
        },
    } as unknown as EntityManager

    const resolver = new CollectionInventoryResolver(() => Promise.resolve(manager))
    await resolver.collectionInventory({
        accountIds: [`0x${'11'.repeat(32)}`],
        collectionId: '123',
        first: 2,
        after,
        orderBy: CollectionInventoryOrderByInput.BEST_LISTING_HIGHEST_PRICE,
        order,
        listingFilter: TokenListingFilterInput.ALL,
    })

    return queries[0]
}

const placeholders = (sql: string) => new Set([...sql.matchAll(/\$(\d+)/g)].map((match) => Number(match[1])))

for (const order of [CollectionInventoryOrderInput.ASC, CollectionInventoryOrderInput.DESC]) {
    for (const orderValue of ['', null, '400000000000000000']) {
        void test(`collection inventory binds every cursor parameter (${order}, orderValue ${JSON.stringify(orderValue)})`, async () => {
            // '' is what earlier releases put in the cursor of an item whose sort value is NULL
            const after = encodeCursor('123-1', orderValue)
            const { sql, params } = await pageQueryFor(after, order)

            assert.deepEqual(
                placeholders(sql),
                new Set(params.map((_, index) => index + 1)),
                'every $n placeholder needs a parameter and every parameter needs a placeholder'
            )
        })
    }
}

void test('collection inventory keeps paging into NULL sort values and from groups into tokens', () => {
    const asc = CollectionInventoryOrderInput.ASC
    const desc = CollectionInventoryOrderInput.DESC

    // A non-NULL ASC cursor must still reach the NULLs Postgres sorts last
    assert.match(buildCursorCondition('price', asc, { id: '123-1', orderValue: '5' }, 3).sql, /price IS NULL/)
    // A NULL ASC cursor must only continue within the NULLs, not restart at the first value
    assert.doesNotMatch(buildCursorCondition('price', asc, { id: '123-1', orderValue: null }, 3).sql, /IS NOT NULL/)
    // Ties break on id ASC in the ORDER BY whatever the sort direction
    assert.match(buildCursorCondition('price', desc, { id: '123-1', orderValue: '5' }, 3).sql, /id > \$4/)
    // Groups (bare ids) sort before tokens, so a group cursor keeps every token in range
    assert.deepEqual(buildCursorCondition('price', asc, { id: '7', orderValue: '5' }, 3).params, [0, '7', '5'])
    assert.deepEqual(buildCursorCondition('price', asc, { id: '123-1', orderValue: '5' }, 3).params, [1, '123-1', '5'])
})
