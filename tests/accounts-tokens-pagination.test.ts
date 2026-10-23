import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import test from 'node:test'
import type { EntityManager } from 'typeorm'
import { Token } from '~/model'
import {
    AccountsTokensConnectionResolver,
    AccountsTokensOrderByInput,
    AccountsTokensOrderInput,
    TokenListingFilterInput,
} from '~/server-extension/accounts-tokens-connection'
import { decodeCursor, encodeCursor } from '~/server-extension/helpers'

// Exercise the resolver's generated predicates, ordering and emitted cursors against real SQL.
// SQLite supports the same NULLS LAST / comparison semantics needed by these fixtures.
class PaginationQuery {
    private predicate = ''
    private parameters: Record<string, string> = {}
    private sort = 'token.name'
    private order = 'ASC'
    private take = 100
    private tokenIds?: string[]

    constructor(
        private db: DatabaseSync,
        private isToken: boolean
    ) {}

    createQueryBuilder() {
        return this
    }
    innerJoin() {
        return this
    }
    innerJoinAndSelect() {
        return this
    }
    leftJoinAndSelect() {
        return this
    }
    where(_sql: unknown, parameters?: { tokenIds: string[] }) {
        this.tokenIds = parameters?.tokenIds
        return this
    }
    setParameter() {
        return this
    }
    clone() {
        return new PaginationQuery(this.db, this.isToken)
    }
    andWhere(sql: string, parameters: Record<string, string>) {
        this.predicate = sql
        this.parameters = parameters
        return this
    }
    select() {
        return this
    }
    addSelect() {
        return this
    }
    orderBy(sort: string, order: string) {
        this.sort = sort
        this.order = order
        return this
    }
    addOrderBy() {
        return this
    }
    limit(take: number) {
        this.take = take
        return this
    }
    getCount() {
        const row = this.db.prepare('SELECT COUNT(*) AS count FROM token').get()
        assert.ok(row)
        return row.count
    }
    private rows() {
        const statement = this.db.prepare(
            `SELECT token.id AS token_id, ${this.sort} AS order_value FROM token
             JOIN collection ON collection.id = token.collectionId
             ${this.predicate ? `WHERE ${this.predicate}` : ''}
             ORDER BY ${this.sort} ${this.order} NULLS LAST, token.id ${this.order} NULLS LAST
             LIMIT ${this.take}`
        )
        return statement.all(this.parameters)
    }
    getRawMany() {
        return this.rows()
    }
    getMany() {
        if (!this.isToken) return []
        return this.rows()
            .filter((row) => this.tokenIds?.includes(String(row.token_id)))
            .map((row) => ({
                id: String(row.token_id),
                tokenId: 1n,
                supply: 1n,
                isFrozen: false,
                nonFungible: true,
                createdAt: new Date('2026-01-01T00:00:00.000Z'),
                collection: { id: '1', collectionId: 1n },
            }))
    }
}

function fixture(allNull: boolean) {
    const db = new DatabaseSync(':memory:')
    db.exec(`CREATE TABLE collection (id TEXT, name TEXT);
        CREATE TABLE token (id TEXT, name TEXT, collectionId TEXT, bestListingPrice INTEGER, createdAt TEXT);`)
    const names = allNull ? [null, null, null, null] : ['Alpha', null, '', 'Alpha', null, '', 'Zulu']
    const prices = allNull ? [null, null, null, null] : [20, null, 0, 20, null, 0, 10]
    for (const [index, name] of names.entries()) {
        const id = String(index + 1)
        db.prepare('INSERT INTO collection VALUES (?, ?)').run(id, name)
        db.prepare('INSERT INTO token VALUES (?, ?, ?, ?, ?)').run(
            id,
            name,
            id,
            prices[index],
            `2026-01-0${(index % 3) + 1}T00:00:00.000Z`
        )
    }
    const manager = {
        getRepository: (model: unknown) => new PaginationQuery(db, model === Token),
    } as unknown as EntityManager
    return { db, resolver: new AccountsTokensConnectionResolver(() => Promise.resolve(manager)) }
}

for (const allNull of [false, true]) {
    for (const order of Object.values(AccountsTokensOrderInput)) {
        for (const orderBy of Object.values(AccountsTokensOrderByInput)) {
            void test(`accounts token traversal: ${allNull ? 'all NULL' : 'mixed/ties/empty/zero'} ${orderBy} ${order}`, async () => {
                const { db, resolver } = fixture(allNull)
                try {
                    const expected = db
                        .prepare(
                            `SELECT token.id FROM token JOIN collection ON collection.id = token.collectionId
                             ORDER BY ${orderBy} ${order} NULLS LAST, token.id ${order} NULLS LAST`
                        )
                        .all()
                        .map((row) => row.id)
                    for (const first of [1, 2, 3, 20]) {
                        const seen: string[] = []
                        let after: string | undefined
                        do {
                            const page = await resolver.accountsTokensConnection({
                                accountIds: ['alice'],
                                first,
                                after,
                                orderBy,
                                order,
                                listingFilter: TokenListingFilterInput.ALL,
                            })
                            assert.equal(page.totalCount, expected.length)
                            assert.equal(page.pageInfo.hasPreviousPage, !!after)
                            assert.equal(page.pageInfo.startCursor, page.edges[0]?.cursor ?? '')
                            assert.equal(page.pageInfo.endCursor, page.edges.at(-1)?.cursor ?? '')
                            for (const edge of page.edges) {
                                assert.ok(!seen.includes(edge.node.id), `duplicate ${edge.node.id}`)
                                seen.push(edge.node.id)
                                const stored = db
                                    .prepare(
                                        `SELECT ${orderBy} AS value FROM token
                                         JOIN collection ON collection.id = token.collectionId WHERE token.id = ?`
                                    )
                                    .get(edge.node.id)
                                assert.ok(stored)
                                assert.equal(decodeCursor(edge.cursor).orderValue, stored.value?.toString() ?? null)
                            }
                            assert.equal(page.pageInfo.hasNextPage, seen.length < expected.length)
                            if (!page.pageInfo.hasNextPage) break
                            assert.ok(page.edges.length > 0)
                            after = page.pageInfo.endCursor
                        } while (seen.length <= expected.length)
                        assert.deepEqual(seen, expected)
                    }
                } finally {
                    db.close()
                }
            })
        }
    }
}

void test('shared cursors preserve empty strings, NULL, zero, dates and large numeric strings', () => {
    for (const value of ['', null, '0', '900719925474099312345']) {
        assert.deepEqual(decodeCursor(encodeCursor('1', value)), { id: '1', orderValue: value })
    }
    assert.equal(decodeCursor(encodeCursor('1', 0)).orderValue, '0')
    const date = new Date('2026-01-01T00:00:00.000Z')
    assert.equal(decodeCursor(encodeCursor('1', date)).orderValue, date.toISOString())
})
