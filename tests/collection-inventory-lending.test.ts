import assert from 'node:assert/strict'
import path from 'node:path'
import test from 'node:test'
import { DataSource, Table } from 'typeorm'
import { SnakeNamingStrategy } from '@subsquid/typeorm-config/lib/namingStrategy'
import {
    Account,
    Attribute,
    Balance,
    Collection,
    CollectionFlags,
    Listing,
    Token,
    TokenAccount,
    TokenGroup,
    TokenGroupToken,
    TokenLoan,
} from '~/model'
import { TokenListingFilterInput } from '~/server-extension/accounts-tokens-connection'
import {
    CollectionInventoryOrderByInput,
    CollectionInventoryOrderInput,
    CollectionInventoryResolver,
} from '~/server-extension/collection-inventory'

const lenderId = `0x${'11'.repeat(32)}`
const borrowerId = `0x${'22'.repeat(32)}`
const unrelatedId = `0x${'33'.repeat(32)}`
const createdAt = new Date('2026-01-01T00:00:00Z')
const tables = [Account, Collection, Token, TokenAccount, TokenGroup, TokenGroupToken, TokenLoan, Attribute, Listing]

type InventoryArgs = Parameters<CollectionInventoryResolver['collectionInventory']>[0]
type InventoryToken = {
    id: string
    balance: bigint
    loan?: { expiration: bigint; lender: { address: string }; borrower: { address: string } }
}
type InventoryGroup = { id: string; ownedCount: number; tokens: InventoryToken[] }

// Optional real-SQL coverage, following EVENT_TIMESTAMP_TEST_DB_URL: every table lives in a fresh
// schema, which is removed even on failure. This never reads the application's configured database.
void test(
    'collection inventory includes active loans before grouping and pagination',
    {
        skip: !process.env.COLLECTION_INVENTORY_TEST_DB_URL,
    },
    async (t) => {
        const ds = new DataSource({
            type: 'postgres',
            url: process.env.COLLECTION_INVENTORY_TEST_DB_URL,
            entities: [path.resolve(__dirname, '../src/model/index.ts')],
            namingStrategy: new SnakeNamingStrategy(),
        })
        await ds.initialize()
        const runner = ds.createQueryRunner()
        await runner.connect()
        const schema = `collection_inventory_${process.pid}`
        try {
            await runner.query(`CREATE SCHEMA "${schema}"`)
            await runner.query(`SET search_path TO "${schema}"`)
            // Real entity columns and indexes; foreign keys to unrelated domain tables are unnecessary.
            for (const entity of tables) {
                await runner.createTable(Table.create(ds.getMetadata(entity), ds.driver))
            }
            const manager = runner.manager
            const resolver = new CollectionInventoryResolver(() => Promise.resolve(manager))
            const inventory = (accountIds: string[], options: Partial<InventoryArgs> = {}) =>
                resolver.collectionInventory({
                    accountIds,
                    collectionId: '123',
                    first: 20,
                    orderBy: CollectionInventoryOrderByInput.DATE,
                    order: CollectionInventoryOrderInput.DESC,
                    listingFilter: TokenListingFilterInput.ALL,
                    ...options,
                })
            const ids = (result: Awaited<ReturnType<typeof inventory>>) =>
                result.edges.map((edge) => (edge.node as { id: string }).id)
            const balance = new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                frozen: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            })
            await manager.save(
                [lenderId, borrowerId, unrelatedId].map(
                    (id) =>
                        new Account({
                            id,
                            address: id,
                            nonce: 0,
                            balance,
                            verified: false,
                            verifiedEnjin: false,
                        })
                )
            )
            const flags = new CollectionFlags({
                hiddenForLegalReasons: false,
                featured: false,
                marketplaceDisabled: false,
                verifiedEnjin: false,
            })
            const [collection, otherCollection] = await manager.save(
                ['123', '456'].map(
                    (id) =>
                        new Collection({
                            id,
                            collectionId: BigInt(id),
                            owner: { id: lenderId } as Account,
                            attributeCount: 0,
                            totalDeposit: 0n,
                            name: `Collection ${id}`,
                            createdAt,
                            flags,
                            hidden: false,
                        })
                )
            )
            const token = (id: string, name: string, day: number, tokenCollection = collection) =>
                new Token({
                    id,
                    tokenId: BigInt(id.split('-')[1]),
                    supply: 1n,
                    isFrozen: false,
                    listingForbidden: false,
                    minimumBalance: 1n,
                    mintDeposit: 0n,
                    attributeCount: 0,
                    accountDepositCount: 0,
                    anyoneCanInfuse: false,
                    infusion: 0n,
                    isLendable: true,
                    collection: tokenCollection,
                    name,
                    nonFungible: true,
                    hidden: false,
                    createdAt: new Date(Date.UTC(2026, 0, day)),
                })
            const [lent, owned, borrowedOwner, otherLent] = await manager.save([
                token('123-1', 'Lent Alpha', 1),
                token('123-2', 'Owned Beta', 2),
                token('123-3', 'Borrower Gamma', 3),
                token('456-1', 'Other Lent', 4, otherCollection),
            ])
            const holdings: [Token, string][] = [
                [lent, borrowerId],
                [owned, lenderId],
                [borrowedOwner, borrowerId],
                [otherLent, borrowerId],
            ]
            await manager.save(
                holdings.map(
                    ([heldToken, accountId]) =>
                        new TokenAccount({
                            id: `${heldToken.id}-${accountId}`,
                            token: heldToken,
                            collection: heldToken.collection,
                            account: { id: accountId } as Account,
                            balance: 1n,
                            totalBalance: 1n,
                            reservedBalance: 0n,
                            lockedBalance: 0n,
                            isFrozen: false,
                            createdAt,
                            updatedAt: createdAt,
                        })
                )
            )
            await manager.save(
                [lent, otherLent].map(
                    (loanToken) =>
                        new TokenLoan({
                            id: loanToken.id,
                            token: loanToken,
                            lender: { id: lenderId } as Account,
                            borrower: { id: borrowerId } as Account,
                            expiration: 9007199254740993n,
                            createdAt,
                            updatedAt: createdAt,
                        })
                )
            )

            await t.test(
                'lender sees a loan without a token account, with zero physical balance and exact loan data',
                async () => {
                    const result = await inventory([lenderId])
                    assert.deepEqual(ids(result), ['123-2', '123-1'])
                    assert.equal(result.totalCount, 2)
                    const item = result.edges[1].node as InventoryToken
                    assert.equal(item.balance, 0n)
                    assert.equal(item.loan?.expiration, 9007199254740993n)
                    assert.equal(item.loan.lender.address, lenderId)
                    assert.equal(item.loan.borrower.address, borrowerId)
                }
            )
            await t.test(
                'borrower retains physical holdings; unrelated wallets and other collections are excluded',
                async () => {
                    const borrowed = await inventory([borrowerId])
                    assert.deepEqual(ids(borrowed), ['123-3', '123-1'])
                    assert.equal(borrowed.totalCount, 2)
                    assert.equal((borrowed.edges[1].node as InventoryToken).balance, 1n)
                    assert.deepEqual(ids(await inventory([unrelatedId])), [])
                }
            )
            await t.test('lender and borrower together produce each token exactly once', async () => {
                const result = await inventory([lenderId, borrowerId])
                assert.deepEqual(ids(result), ['123-3', '123-2', '123-1'])
                assert.equal(result.totalCount, 3)
                assert.equal((result.edges[2].node as InventoryToken).balance, 1n)
            })
            await t.test('search and keyset pages include lent tokens with correct totals', async () => {
                const searched = await inventory([lenderId], { query: 'Lent' })
                assert.deepEqual(ids(searched), ['123-1'])
                assert.equal(searched.totalCount, 1)
                const first = await inventory([lenderId], { first: 1 })
                assert.deepEqual(ids(first), ['123-2'])
                assert.equal(first.pageInfo.hasNextPage, true)
                assert.equal(first.totalCount, 2)
                const second = await inventory([lenderId], { first: 1, after: first.pageInfo.endCursor })
                assert.deepEqual(ids(second), ['123-1'])
                assert.equal(second.pageInfo.hasNextPage, false)
                assert.equal(second.totalCount, 2)
            })
            await t.test('groups count and preview lent tokens without duplicate memberships', async (groupTest) => {
                groupTest.after(async () => {
                    await manager.delete(TokenGroupToken, ['7-123-1', '7-123-2'])
                    await manager.delete(TokenGroup, '7')
                })
                const group = await manager.save(new TokenGroup({ id: '7', collection, createdAt }))
                await manager.save(
                    [lent, owned].map(
                        (groupToken, position) =>
                            new TokenGroupToken({
                                id: `7-${groupToken.id}`,
                                token: groupToken,
                                tokenGroup: group,
                                position,
                            })
                    )
                )
                const lenderGroup = await inventory([lenderId])
                assert.deepEqual(ids(lenderGroup), ['7'])
                assert.equal(lenderGroup.totalCount, 1)
                const item = lenderGroup.edges[0].node as InventoryGroup
                assert.equal(item.ownedCount, 2)
                assert.deepEqual(
                    item.tokens.map((preview) => preview.id),
                    ['123-1', '123-2']
                )
                assert.equal(item.tokens[0].loan?.lender.address, lenderId)
                const both = await inventory([lenderId, borrowerId])
                assert.deepEqual(ids(both), ['7', '123-3'])
                assert.equal(both.totalCount, 2)
                assert.equal((both.edges[0].node as InventoryGroup).ownedCount, 2)
                assert.deepEqual(
                    (both.edges[0].node as InventoryGroup).tokens.map((preview) => preview.id),
                    ['123-1', '123-2']
                )
                const first = await inventory([lenderId, borrowerId], { first: 1 })
                assert.deepEqual(ids(first), ['7'])
                assert.equal(first.pageInfo.hasNextPage, true)
                const second = await inventory([lenderId, borrowerId], { first: 1, after: first.pageInfo.endCursor })
                assert.deepEqual(ids(second), ['123-3'])
                assert.equal(second.totalCount, 2)
                assert.equal(second.pageInfo.hasNextPage, false)
            })
            await t.test('group search preserves the full owned count and bounded previews', async (groupTest) => {
                const extraIds = ['123-4', '123-5', '123-6']
                groupTest.after(async () => {
                    await manager.delete(TokenGroupToken, { tokenGroup: { id: '8' } })
                    await manager.delete(TokenGroup, '8')
                    await manager.delete(TokenAccount, { token: { id: '123-4' } })
                    await manager.delete(TokenAccount, { token: { id: '123-5' } })
                    await manager.delete(TokenAccount, { token: { id: '123-6' } })
                    await manager.delete(Token, extraIds)
                    await manager.update(Token, owned.id, { name: 'Owned Beta' })
                })
                await manager.update(Token, owned.id, { name: 'Owned Alpha' })
                const extras = await manager.save([
                    token('123-4', 'Beta', 4),
                    token('123-5', 'Gamma', 5),
                    token('123-6', 'Delta', 6),
                ])
                await manager.save(
                    extras.map(
                        (heldToken) =>
                            new TokenAccount({
                                id: `${heldToken.id}-${lenderId}`,
                                token: heldToken,
                                collection,
                                account: { id: lenderId } as Account,
                                balance: 1n,
                                totalBalance: 1n,
                                reservedBalance: 0n,
                                lockedBalance: 0n,
                                isFrozen: false,
                                createdAt,
                                updatedAt: createdAt,
                            })
                    )
                )
                const group = await manager.save(new TokenGroup({ id: '8', collection, createdAt }))
                const memberships = (tokens: Token[]) =>
                    tokens.map(
                        (groupToken, position) =>
                            new TokenGroupToken({
                                id: `8-${groupToken.id}`,
                                token: groupToken,
                                tokenGroup: group,
                                position,
                            })
                    )
                await manager.save(memberships([lent, owned, extras[0]]))
                await groupTest.test('two search matches retain all three owned members', async () => {
                    const result = await inventory([lenderId], { query: 'Alpha' })
                    assert.deepEqual(ids(result), ['8'])
                    assert.equal(result.totalCount, 1)
                    const item = result.edges[0].node as InventoryGroup
                    assert.equal(item.ownedCount, 3)
                    assert.deepEqual(
                        item.tokens.map((preview) => preview.id),
                        ['123-1', '123-2', '123-4']
                    )
                })
                await manager.save(memberships(extras.slice(1)))
                await groupTest.test('five owned members remain counted while previews stop at four', async () => {
                    const result = await inventory([lenderId], { query: 'Alpha' })
                    assert.deepEqual(ids(result), ['8'])
                    const item = result.edges[0].node as InventoryGroup
                    assert.equal(item.ownedCount, 5)
                    assert.deepEqual(
                        item.tokens.map((preview) => preview.id),
                        ['123-1', '123-2', '123-4', '123-5']
                    )
                    assert.equal(item.tokens[0].loan?.lender.address, lenderId)
                })
            })
            await t.test(
                'cleared loan stops lender inclusion and a returned balance preserves normal ownership',
                async () => {
                    await manager.delete(TokenLoan, lent.id)
                    assert.deepEqual(ids(await inventory([lenderId])), ['123-2'])
                    assert.deepEqual(ids(await inventory([borrowerId])), ['123-3', '123-1'])
                    await manager.update(TokenAccount, { token: { id: lent.id } }, { account: { id: lenderId } })
                    const returned = await inventory([lenderId])
                    assert.deepEqual(ids(returned), ['123-2', '123-1'])
                    assert.equal((returned.edges[1].node as InventoryToken).loan, null)
                    assert.equal((returned.edges[1].node as InventoryToken).balance, 1n)
                    assert.deepEqual(ids(await inventory([borrowerId])), ['123-3'])
                }
            )
        } finally {
            await runner.query(`DROP SCHEMA "${schema}" CASCADE`)
            await runner.release()
            await ds.destroy()
        }
    }
)
