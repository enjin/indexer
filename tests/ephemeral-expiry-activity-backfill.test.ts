import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Client } from 'pg'

const testRequire = createRequire(__filename)
const contextsPath = testRequire.resolve('~/contexts')
const originalContexts = testRequire.cache[contextsPath]
const contextsModule = new Module(contextsPath)
contextsModule.loaded = true
contextsModule.exports = { connectionManager: () => assert.fail('tests must supply an isolated manager') }
testRequire.cache[contextsPath] = contextsModule
const { backfillEphemeralExpiryActivity } = testRequire(
    '~/worker/jobs/tokens/backfill-ephemeral-expiry-activity'
) as typeof import('~/worker/jobs/tokens/backfill-ephemeral-expiry-activity')
after(() => {
    testRequire.cache[contextsPath] = originalContexts
})

const fromBlock = 13_550_470
const archivedBurn = '0013550470-344b9-000005'

function job(overrides: Partial<Parameters<typeof backfillEphemeralExpiryActivity>[0]['data']> = {}) {
    const messages: string[] = []
    return {
        data: { fromBlock, toBlock: fromBlock, ...overrides },
        log: (message: string) => {
            messages.push(message)
            return Promise.resolve(0)
        },
        updateProgress: () => Promise.resolve(),
        messages,
    }
}

void test('ephemeral activity backfill validates the repair range before opening a database connection', async () => {
    for (const data of [{ fromBlock: -1 }, { toBlock: fromBlock - 1 }, { toBlock: 2_147_483_648 }, { batchSize: 0 }]) {
        await assert.rejects(backfillEphemeralExpiryActivity(job(data)), /range|batchSize/)
    }
})

void test(
    'ephemeral activity backfill repairs the Canary archive fixture and skips uncertain pairs',
    { skip: !process.env.EPHEMERAL_ACTIVITY_TEST_SOCKET },
    async () => {
        const client = new Client({
            host: process.env.EPHEMERAL_ACTIVITY_TEST_SOCKET,
            port: 55447,
            database: 'postgres',
            user: process.env.USER,
        })
        await client.connect()
        const schema = `ephemeral_expiry_activity_test_${process.pid}`
        let schemaCreated = false
        try {
            await client.query(`CREATE SCHEMA ${schema}`)
            schemaCreated = true
            await client.query(`SET search_path TO ${schema}`)
            await client.query(`
                CREATE TABLE account (id text PRIMARY KEY);
                CREATE TABLE collection (id text PRIMARY KEY);
                CREATE TABLE token (id text PRIMARY KEY, metadata jsonb);
                CREATE TABLE event (
                    id text PRIMARY KEY, name text NOT NULL, token_id text, collection_id text,
                    data jsonb, block_number int, extrinsic_id text
                );
                CREATE TABLE chain_info (block_number int, block_hash text, finalized boolean);
                CREATE TABLE account_token_event (
                    id text PRIMARY KEY, event_id text REFERENCES event(id), token_id text REFERENCES token(id),
                    collection_id text REFERENCES collection(id), from_id text REFERENCES account(id), to_id text
                );
                INSERT INTO chain_info VALUES
                    (13550469, '0x01234a', true), (13550470, '0x344b9a', true),
                    (13550470, '0x54321a', false), (13550470, '0x99999a', true), (13550470, '0x99999b', false);
                INSERT INTO account VALUES ('historical-holder');
                INSERT INTO collection VALUES ('124650');
                INSERT INTO token VALUES ('124650-3', '{"name":"Reused token"}');
            `)

            async function put(
                id: string,
                token: string,
                data: Record<string, unknown>,
                extrinsic: string | null = null,
                blockNumber: number | null = null
            ) {
                const name = String(data.isTypeOf)
                await client.query('INSERT INTO event VALUES ($1, $2, $3, $4, $5, $6, $7)', [
                    id,
                    name,
                    `124650-${token}`,
                    '124650',
                    { collectionId: '124650', tokenId: token, ...data },
                    blockNumber,
                    extrinsic,
                ])
            }

            const burn = {
                isTypeOf: 'MultiTokensBurned',
                amount: '1',
                account: 'historical-holder',
                cause: null,
                expirationBlock: null,
            }
            const destroyed = { isTypeOf: 'MultiTokensEphemeralTokenDestroyed', expirationBlock: String(fromBlock) }

            await put('0013550470-344b9-000001', '3', burn, 'signed-burn')
            await put(archivedBurn, '3', { ...burn, tokenMetadata: null })
            await put('0013550470-344b9-000006', '3', destroyed)
            await put('0013550470-344b9-000010', '4', { ...burn, tokenMetadata: { name: 'Archived name' } })
            await put('0013550470-344b9-000011', '4', destroyed)
            await put('0013550470-344b9-000020', '5', burn)
            await put('0013550470-344b9-000021', '5', burn)
            await put('0013550470-344b9-000022', '5', destroyed)
            await put('0013550470-344b9-000030', '6', { ...burn, cause: 'burn' })
            await put('0013550470-344b9-000031', '6', destroyed)
            await put('0013550470-344b9-000040', '7', { ...burn, account: 'missing-holder' })
            await put('0013550470-344b9-000041', '7', destroyed)
            await put('0013550470-344b9-000050', '8', burn, 'manual-cleanup', fromBlock)
            await put(
                '0013550470-344b9-000051',
                '8',
                { ...destroyed, expirationBlock: String(fromBlock - 6) },
                'manual-cleanup',
                fromBlock
            )
            await put('0013550470-344b9-000060', '10', burn)
            await put('0013550470-344b9-000061', '10', destroyed)
            await put('0013550470-344b9-000062', '10', destroyed)
            await put('0013550470-344b9-000070', '11', burn)
            await put('0013550470-344b9-000071', '11', { ...destroyed, expirationBlock: String(fromBlock + 1) })
            await put('0013550470-54321-000005', '3', burn)
            await put('0013550470-54321-000006', '3', destroyed)
            await put('0013550470-99999-000005', '9', burn)
            await put('0013550470-99999-000006', '9', destroyed)
            await put('0013550469-01234-000005', '3', burn)
            await put('0013550469-01234-000006', '3', { ...destroyed, expirationBlock: String(fromBlock - 1) })

            const manager = {
                query: async <T>(sql: string, values?: unknown[]): Promise<T> =>
                    (await client.query(sql, values)).rows as T,
            }
            const dryRun = job({ batchSize: 1 })
            await client.query('BEGIN READ ONLY')
            try {
                await backfillEphemeralExpiryActivity(dryRun, manager)
            } finally {
                await client.query('ROLLBACK')
            }
            assert.match(dryRun.messages.at(-1) ?? '', /dry run.*4 burns to update.*3 activity rows to restore/)
            assert.equal((await client.query('SELECT * FROM account_token_event')).rowCount, 0)
            assert.equal(
                (await client.query('SELECT data FROM event WHERE id = $1', [archivedBurn])).rows[0].data.cause,
                null
            )

            const write = job({ dryRun: false, batchSize: 2 })
            await backfillEphemeralExpiryActivity(write, manager)
            assert.match(write.messages.at(-1) ?? '', /4 burns updated.*3 activity rows restored/)
            const { rows: actual } = await client.query(`
                SELECT id, data ->> 'cause' AS cause, data ->> 'expirationBlock' AS expiry,
                    data #>> '{tokenMetadata,name}' AS name
                FROM event WHERE name = 'MultiTokensBurned' ORDER BY id
            `)
            assert.deepEqual(
                actual.filter(({ cause }) => cause === 'ephemeralExpiry'),
                [
                    { id: archivedBurn, cause: 'ephemeralExpiry', expiry: String(fromBlock), name: null },
                    {
                        id: '0013550470-344b9-000010',
                        cause: 'ephemeralExpiry',
                        expiry: String(fromBlock),
                        name: 'Archived name',
                    },
                    { id: '0013550470-344b9-000040', cause: 'ephemeralExpiry', expiry: String(fromBlock), name: null },
                    {
                        id: '0013550470-344b9-000050',
                        cause: 'ephemeralExpiry',
                        expiry: String(fromBlock - 6),
                        name: null,
                    },
                ]
            )
            assert.equal(actual.find(({ id }) => id === '0013550470-344b9-000030').cause, 'burn')
            const { rows: activities } = await client.query(
                'SELECT id, event_id, token_id, collection_id, from_id FROM account_token_event ORDER BY id'
            )
            assert.deepEqual(
                activities,
                [archivedBurn, '0013550470-344b9-000010', '0013550470-344b9-000050'].map((id) => ({
                    id,
                    event_id: id,
                    token_id: null,
                    collection_id: '124650',
                    from_id: 'historical-holder',
                }))
            )

            const again = job({ dryRun: false })
            await backfillEphemeralExpiryActivity(again, manager)
            assert.match(again.messages.at(-1) ?? '', /0 burns updated.*0 activity rows restored/)
        } finally {
            try {
                if (schemaCreated) await client.query(`DROP SCHEMA ${schema} CASCADE`)
            } finally {
                await client.end()
            }
        }
    }
)
