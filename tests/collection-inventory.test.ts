import assert from 'node:assert/strict'
import test from 'node:test'
import type { EntityManager } from 'typeorm'
import { TokenListingFilterInput } from '~/server-extension/accounts-tokens-connection'
import {
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
