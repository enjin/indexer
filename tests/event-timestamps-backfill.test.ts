import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import test, { after } from 'node:test'
import { DataSource } from 'typeorm'

const testRequire = createRequire(__filename)
const contextsPath = testRequire.resolve('~/contexts')
const originalContexts = testRequire.cache[contextsPath]
const contextsModule = new Module(contextsPath)
contextsModule.loaded = true
let manager: unknown
contextsModule.exports = { connectionManager: () => Promise.resolve(manager) }
testRequire.cache[contextsPath] = contextsModule
const { backfillEventTimestamps } = testRequire(
    '~/worker/jobs/validators/backfill-event-timestamps'
) as typeof import('~/worker/jobs/validators/backfill-event-timestamps')
after(() => {
    testRequire.cache[contextsPath] = originalContexts
})

type Data = Parameters<typeof backfillEventTimestamps>[0]['data']
const job = (data: Data) =>
    ({
        data,
        log: () => Promise.resolve(1),
        updateProgress: () => Promise.resolve(),
    }) as unknown as Parameters<typeof backfillEventTimestamps>[0]

void test('historical repair rejects missing/unbounded ranges and invalid batch sizes before accessing a database', async () => {
    for (const data of [
        {},
        { fromBlock: -1, toBlock: 1 },
        { fromBlock: 2, toBlock: 1 },
        { fromBlock: 0, toBlock: 100000 },
        { fromBlock: 0, toBlock: 2147483648 },
        { fromBlock: 0, toBlock: 1, batchSize: 0 },
        { fromBlock: 0, toBlock: 1, batchSize: 5001 },
        { fromBlock: 0, toBlock: 1, batchSize: 1.5 },
    ]) {
        await assert.rejects(backfillEventTimestamps(job(data as Data)), /requires an inclusive range/)
    }
})

void test(
    'migration and batched historical repair use exact stored times, preserve existing times, and skip unknown/forked blocks',
    {
        skip: !process.env.EVENT_TIMESTAMP_TEST_DB_URL,
    },
    async () => {
        const ds = new DataSource({ type: 'postgres', url: process.env.EVENT_TIMESTAMP_TEST_DB_URL })
        await ds.initialize()
        const runner = ds.createQueryRunner()
        await runner.connect()
        const schema = `event_timestamps_${process.pid}`
        try {
            await runner.query(`CREATE SCHEMA "${schema}"`)
            await runner.query(`SET search_path TO "${schema}"`)
            await runner.query('CREATE TABLE event (id text PRIMARY KEY, extrinsic_id text)')
            await runner.query('CREATE TABLE extrinsic (id text PRIMARY KEY, created_at timestamptz)')
            await runner.query('CREATE TABLE chain_info (block_number int, block_hash text, timestamp timestamptz)')
            const dir = path.resolve(__dirname, '../db/migrations')
            const filename = readdirSync(dir).find((file) => file.endsWith('-EventCreatedAt.js'))
            assert(filename)
            const Migration = testRequire(path.join(dir, filename))
            const migration = new Migration()
            await migration.up(runner)
            const blockTime = '2026-10-30T12:02:18Z'
            const signedTime = '2026-10-30T11:59:00Z'
            const existingTime = '2026-10-29T10:00:00Z'
            await runner.query(
                `INSERT INTO chain_info VALUES
            (13503916, '0xabcde000', $1),
            (13503918, '0xaaaaa000', $1),
            (13503919, '0xabcde001', $1),
            (13503919, '0xabcde002', $1),
            (13503920, '0xabcde000', $1)`,
                [blockTime]
            )
            await runner.query('INSERT INTO extrinsic VALUES ($1, $2)', ['tx', signedTime])
            await runner.query(
                `INSERT INTO event VALUES
            ('0013503916-abcde-000001', null, null),
            ('0013503916-abcde-000002', null, null),
            ('0013503916-abcde-000003', 'tx', null),
            ('0013503916-abcde-000004', null, $1),
            ('0013503917-abcde-000001', null, null),
            ('0013503918-fffff-000001', null, null),
            ('0013503919-abcde-000001', null, null),
            ('0013503920-abcde-000001', null, null)`,
                [existingTime]
            )
            manager = runner.manager
            const request = job({ fromBlock: 13503916, toBlock: 13503919, batchSize: 2 })
            await backfillEventTimestamps(request)
            const readTimes = async () =>
                (await runner.query('SELECT created_at FROM event ORDER BY id')).map(
                    (row: { created_at: Date | null }) => row.created_at?.toISOString() ?? null
                )
            const expected = [blockTime, blockTime, signedTime, existingTime].map((time) =>
                new Date(time).toISOString()
            )
            assert.deepEqual(await readTimes(), [...expected, null, null, null, null])
            await backfillEventTimestamps(request)
            assert.deepEqual(await readTimes(), [...expected, null, null, null, null])
            // Exercise the same generated GraphQL Event type used in all activity scopes.
            const graphqlRequire = createRequire(testRequire.resolve('@subsquid/graphql-server'))
            const { loadModel } = graphqlRequire('@subsquid/openreader/lib/tools')
            const { getSchemaBuilder } = graphqlRequire('@subsquid/openreader/lib/dialect')
            const { graphql } = graphqlRequire('graphql')
            const { TypeormOpenreaderContext } = graphqlRequire('@subsquid/graphql-server/lib/typeorm')
            const schemaBuilder = await getSchemaBuilder({
                model: loadModel(path.resolve(__dirname, '../schema.graphql')),
            })
            const openreader = new TypeormOpenreaderContext('postgres', {
                transaction: (callback: (em: typeof runner.manager) => Promise<unknown>) => callback(runner.manager),
            })
            try {
                const result = await graphql({
                    schema: schemaBuilder.build(),
                    source: `{ events(where: { id_in: ["0013503916-abcde-000001", "0013503916-abcde-000002"] }) {
                        id createdAt extrinsic { id }
                    } }`,
                    contextValue: { openreader },
                })
                assert.equal(result.errors, undefined)
                assert.equal(result.data.events.length, 2)
                for (const event of result.data.events) {
                    assert.equal(Date.parse(event.createdAt), Date.parse(blockTime))
                    assert.equal(event.extrinsic, null)
                }
            } finally {
                await openreader.close()
            }
            await migration.down(runner)
            const columns = await runner.query(
                `SELECT column_name FROM information_schema.columns
            WHERE table_schema = $1 AND table_name = 'event' AND column_name = 'created_at'`,
                [schema]
            )
            assert.equal(columns.length, 0)
        } finally {
            await runner.query(`DROP SCHEMA "${schema}" CASCADE`)
            await runner.release()
            await ds.destroy()
        }
    }
)
