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
const { backfillLoanExtensionActivity } = testRequire(
    '~/worker/jobs/tokens/backfill-loan-extension-activity'
) as typeof import('~/worker/jobs/tokens/backfill-loan-extension-activity')
after(() => {
    testRequire.cache[contextsPath] = originalContexts
})

function job(data: Parameters<typeof backfillLoanExtensionActivity>[0]['data'] = {}) {
    const messages: string[] = []
    return {
        data,
        log: (message: string) => {
            messages.push(message)
            return Promise.resolve(0)
        },
        updateProgress: () => Promise.resolve(),
        messages,
    }
}

void test('backfill refuses invalid batch sizes before opening a database connection', async () => {
    for (const batchSize of [0, -1, 0.5, NaN, Infinity, 2001]) {
        await assert.rejects(backfillLoanExtensionActivity(job({ batchSize })), /batchSize/)
    }
})

void test('backfill completes without writes when no loan extension events exist', async () => {
    const current = job()
    let queries = 0
    const manager = {
        query: () => {
            queries++
            return Promise.resolve([{ id: null }])
        },
    } as never
    await backfillLoanExtensionActivity(current, manager)
    assert.equal(queries, 1)
    assert.match(current.messages[0], /No loan extension events/)
})

void test(
    'PostgreSQL backfill preserves loan cycles, missing token history, dry runs, and idempotency',
    {
        skip: !process.env.LOAN_ACTIVITY_TEST_SOCKET,
    },
    async () => {
        const client = new Client({
            host: process.env.LOAN_ACTIVITY_TEST_SOCKET,
            port: 55441,
            database: 'postgres',
            user: process.env.USER,
        })
        await client.connect()
        const schema = `loan_activity_test_${process.pid}`
        try {
            await client.query(`CREATE SCHEMA ${schema}`)
            await client.query(`SET search_path TO ${schema}`)
            await client.query(`
            CREATE TABLE account (id text PRIMARY KEY);
            CREATE TABLE collection (id text PRIMARY KEY);
            CREATE TABLE token (id text PRIMARY KEY, collection_id text REFERENCES collection(id));
            CREATE TABLE event (id text PRIMARY KEY, name text NOT NULL, token_id text, collection_id text, data jsonb, block_number int);
            CREATE TABLE chain_info (block_number int, finalized boolean);
            INSERT INTO chain_info VALUES (7, true), (100, false);
            CREATE TABLE account_token_event (id text PRIMARY KEY, event_id text REFERENCES event(id),
                token_id text REFERENCES token(id), collection_id text REFERENCES collection(id),
                from_id text REFERENCES account(id), to_id text REFERENCES account(id));
            INSERT INTO account VALUES ('old-lender'), ('old-borrower'), ('new-lender'), ('new-borrower');
            INSERT INTO collection VALUES ('7');
            INSERT INTO token VALUES ('7-9', '7');
            INSERT INTO event (id, name, token_id, collection_id, data) VALUES
                ('0000', 'MultiTokensTokenLent', '7-10', '7', '{"lender":"old-lender","borrower":"old-borrower"}'),
                ('0001', 'MultiTokensTokenLent', '7-9', '7', '{"lender":"old-lender","borrower":"old-borrower"}'),
                ('0002', 'MultiTokensLoanExtended', '7-9', '7', '{}'),
                ('0003', 'MultiTokensTokenReturned', '7-9', '7', '{}'),
                ('0004', 'MultiTokensTokenLent', '7-9', '7', '{"lender":"new-lender","borrower":"new-borrower"}'),
                ('0005', 'MultiTokensLoanExtended', '7-9', '7', '{}'),
                ('0006', 'MultiTokensLoanExtended', '7-10', '7', '{}'),
                ('0007', 'MultiTokensLoanExtended', '99-1', '99', '{}'),
                ('0009', 'MultiTokensTransferred', '7-9', '7', '{}'),
                ('0100', 'MultiTokensLoanExtended', '7-9', '7', '{}');
            INSERT INTO account_token_event VALUES
                ('0005', '0005', '7-9', '7', 'old-lender', NULL),
                ('0009', '0009', '7-9', '7', 'old-lender', 'old-borrower');
        `)
            const manager = {
                query: async (sql: string, values?: unknown[]) => (await client.query(sql, values)).rows,
            } as never
            const dryRun = job({ dryRun: true, batchSize: 1 })
            await backfillLoanExtensionActivity(dryRun, manager)
            assert.equal(
                (await client.query('SELECT COUNT(*)::int AS count FROM account_token_event')).rows[0].count,
                2
            )
            assert.match(dryRun.messages.at(-1) ?? '', /4 scanned, 0 written, 1 unresolved/)

            const bounded = job({ batchSize: 1, throughId: '0005' })
            await backfillLoanExtensionActivity(bounded, manager)
            assert.match(bounded.messages.at(-1) ?? '', /2 scanned, 2 written, 0 unresolved/)
            const remaining = job({ afterId: '0005', batchSize: 1 })
            await backfillLoanExtensionActivity(remaining, manager)
            const rows = (await client.query('SELECT * FROM account_token_event ORDER BY id')).rows
            assert.equal(rows.length, 5)
            assert.equal(
                rows.some((row) => row.id === '0100'),
                false,
                'unfinalized events must not be backfilled'
            )
            assert.deepEqual(
                rows.filter((row) => ['0002', '0005'].includes(row.id)).map((row) => [row.id, row.from_id, row.to_id]),
                [
                    ['0002', 'old-lender', 'old-borrower'],
                    ['0005', 'new-lender', 'new-borrower'],
                ]
            )
            assert.equal(rows.find((row) => row.id === '0006').token_id, null)
            assert.equal(rows.find((row) => row.id === '0006').collection_id, '7')
            assert.equal(rows.find((row) => row.id === '0007').from_id, null)
            assert.equal(rows.find((row) => row.id === '0007').collection_id, null)
            assert.equal(rows.find((row) => row.id === '0009').to_id, 'old-borrower')
            const repeated = job({ batchSize: 2 })
            await backfillLoanExtensionActivity(repeated, manager)
            assert.match(repeated.messages.at(-1) ?? '', /4 scanned, 0 written, 1 unresolved/)
        } finally {
            await client.query(`DROP SCHEMA IF EXISTS ${schema} CASCADE`)
            await client.end()
        }
    }
)
