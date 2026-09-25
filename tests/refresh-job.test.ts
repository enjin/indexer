import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { once } from 'node:events'
import { existsSync, mkdtempSync, rmSync } from 'node:fs'
import { createRequire, Module } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { setTimeout as delay } from 'node:timers/promises'
import { Queue, Worker } from 'bullmq'
import { addRefreshJob } from '~/queue/refresh-job'

const redisBinary = process.env.INDEXER_TEST_REDIS_BINARY ?? 'redis-server'
const redisAvailable = spawnSync(redisBinary, ['--version'], { stdio: 'ignore' }).status === 0

void test('refresh jobs retain history without suppressing later work', { skip: !redisAvailable }, async (t) => {
    // Never use application Redis configuration: this server has no TCP port,
    // no persistence, and a private socket in a disposable directory.
    const directory = mkdtempSync(join(tmpdir(), 'indexer-refresh-test-'))
    const socket = join(directory, 'redis.sock')
    const redis = spawn(
        redisBinary,
        [
            '--port',
            '0',
            '--unixsocket',
            socket,
            '--unixsocketperm',
            '700',
            '--save',
            '',
            '--appendonly',
            'no',
            '--dir',
            directory,
        ],
        { stdio: 'ignore' }
    )
    const exited = once(redis, 'exit')
    const clients: { close(): Promise<void> }[] = []
    t.after(async () => {
        for (const client of clients) await client.close()
        if (redis.exitCode === null) redis.kill('SIGTERM')
        await exited
        rmSync(directory, { recursive: true, force: true })
    })
    for (let attempts = 0; !existsSync(socket); attempts++) {
        assert.equal(redis.exitCode, null, 'isolated Redis must start')
        assert.ok(attempts < 100, 'isolated Redis socket must appear')
        await delay(20)
    }
    const connection = { path: socket, maxRetriesPerRequest: null }
    const queue = new Queue('refresh-tests', {
        connection,
        defaultJobOptions: { attempts: 1, removeOnComplete: { count: 100 }, removeOnFail: { count: 100 } },
    })
    const replica = new Queue('refresh-tests', { connection })
    const worker = new Worker('refresh-tests', undefined, { connection, autorun: false })
    clients.push(worker, replica, queue)

    await t.test('coalesces concurrent delayed and paused refreshes across producers', async () => {
        await queue.pause()
        const jobs = await Promise.all(
            Array.from({ length: 12 }, (_, index) =>
                addRefreshJob(
                    index % 2 ? queue : replica,
                    'refresh',
                    { id: '7-9' },
                    { jobId: 'tokens.native-metadata.7-9', delay: 6000 }
                )
            )
        )
        assert.equal(new Set(jobs.map((job) => job.id)).size, 1)
        assert.equal(await jobs[0].getState(), 'delayed')
        await jobs[0].promote()
        assert.equal(await jobs[0].getState(), 'waiting')
        const paused = await addRefreshJob(replica, 'refresh', {}, { jobId: 'tokens.native-metadata.7-9' })
        assert.equal(paused.id, jobs[0].id)
        await queue.resume()
        const active = await worker.getNextJob('first', { block: false })
        assert.ok(active)
        await active.moveToCompleted(null, 'first', false)
    })

    await t.test('completed and failed retained jobs permit fresh payloads and retry budgets', async () => {
        const next = await addRefreshJob(
            queue,
            'refresh',
            { revision: 2 },
            {
                jobId: 'tokens.native-metadata.7-9',
                attempts: 2,
            }
        )
        const active = await worker.getNextJob('second', { block: false })
        assert.ok(active)
        assert.equal(active.id, next.id)
        assert.deepEqual(active.data, { revision: 2 })
        assert.equal(active.attemptsMade, 0)
        assert.equal(active.opts.attempts, 2)
        await active.moveToCompleted(null, 'second', false)
        assert.equal((await queue.getCompleted()).length, 2)

        const failed = await addRefreshJob(queue, 'refresh', { revision: 3 }, { jobId: 'pool.1' })
        const failing = await worker.getNextJob('third', { block: false })
        assert.ok(failing)
        await failing.moveToFailed(new Error('test failure'), 'third', false)
        assert.equal(await failed.getState(), 'failed')
        const retry = await addRefreshJob(queue, 'refresh', { revision: 4 }, { jobId: 'pool.1' })
        assert.notEqual(retry.id, failed.id)
        const retrying = await worker.getNextJob('fourth', { block: false })
        assert.ok(retrying)
        assert.deepEqual(retrying.data, { revision: 4 })
        assert.equal(retrying.attemptsMade, 0)
        await retrying.moveToCompleted(null, 'fourth', false)
        assert.equal(await failed.getState(), 'failed')
    })

    await t.test('coalesces active updates into exactly one follow-up with the latest payload', async () => {
        await addRefreshJob(queue, 'refresh', { revision: 1 }, { jobId: 'pool.2' })
        const active = await worker.getNextJob('active', { block: false })
        assert.ok(active)
        for (let revision = 2; revision <= 8; revision++) {
            const result = await addRefreshJob(replica, 'refresh', { revision }, { jobId: 'pool.2' })
            assert.equal(result.id, active.id)
        }
        assert.equal(await queue.getWaitingCount(), 0)
        await active.moveToCompleted(null, 'active', false)
        const followUp = await worker.getNextJob('follow-up', { block: false })
        assert.ok(followUp)
        assert.deepEqual(followUp.data, { revision: 8 })
        await followUp.moveToCompleted(null, 'follow-up', false)
        assert.equal(await queue.getWaitingCount(), 0)
    })

    await t.test('preserves pending and active legacy jobs and bypasses terminal legacy IDs', async () => {
        const legacy = await queue.add('refresh', { id: 'legacy' }, { jobId: 'legacy', delay: 6000 })
        const pending = await addRefreshJob(queue, 'refresh', {}, { jobId: 'legacy' })
        assert.equal(pending.id, legacy.id)
        await legacy.promote()
        const active = await worker.getNextJob('legacy', { block: false })
        assert.ok(active)
        const duplicate = await addRefreshJob(replica, 'refresh', {}, { jobId: 'legacy' })
        assert.equal(duplicate.id, active.id)
        assert.equal(await active.getState(), 'active')
        await active.moveToCompleted(null, 'legacy', false)
        const next = await addRefreshJob(queue, 'refresh', { fresh: true }, { jobId: 'legacy' })
        assert.notEqual(next.id, legacy.id)
        const fresh = await worker.getNextJob('fresh', { block: false })
        assert.ok(fresh)
        await fresh.moveToFailed(new Error('test failure'), 'fresh', false)

        const oldFailure = await queue.add('refresh', {}, { jobId: 'legacy-failed' })
        const failing = await worker.getNextJob('old-failure', { block: false })
        assert.ok(failing)
        await failing.moveToFailed(new Error('test failure'), 'old-failure', false)
        const replacement = await addRefreshJob(queue, 'refresh', {}, { jobId: 'legacy-failed' })
        assert.notEqual(replacement.id, oldFailure.id)
        assert.equal(await oldFailure.getState(), 'failed')
        const final = await worker.getNextJob('final', { block: false })
        assert.ok(final)
        await final.moveToCompleted(null, 'final', false)
    })

    await t.test('native metadata and pool dispatchers execute again after retained completion', async () => {
        const testRequire = createRequire(__filename)
        const originals = new Map<string, NodeJS.Module | undefined>()
        const dispatches: ReturnType<typeof addRefreshJob>[] = []
        const errors: string[] = []
        const overrides = {
            '~/queue': { TokensQueue: queue, NominationPoolsQueue: queue },
            '~/util/hasher': {},
            '~/util/logger': { Logger: { error: (message: string) => errors.push(message) } },
            '~/queue/refresh-job': {
                addRefreshJob: (...args: Parameters<typeof addRefreshJob>) => {
                    const promise = addRefreshJob(...args)
                    dispatches.push(promise)
                    return promise
                },
            },
        }
        const dispatcherPath = testRequire.resolve('~/queue/queue-utils')
        originals.set(dispatcherPath, testRequire.cache[dispatcherPath])
        Reflect.deleteProperty(testRequire.cache, dispatcherPath)
        try {
            for (const [name, exports] of Object.entries(overrides)) {
                const path = testRequire.resolve(name)
                originals.set(path, testRequire.cache[path])
                const module = new Module(path)
                module.loaded = true
                module.exports = exports
                testRequire.cache[path] = module
            }
            const dispatchers = testRequire('~/queue/queue-utils') as typeof import('~/queue/queue-utils')
            for (const dispatch of [dispatchers.dispatchComputeTokenNativeMetadata, dispatchers.dispatchRefreshPool]) {
                const completed: string[] = []
                for (let run = 0; run < 2; run++) {
                    dispatch('123-456')
                    const promise = dispatches.shift()
                    assert.ok(promise)
                    const job = await promise
                    assert.equal(await job.getState(), 'delayed')
                    assert.equal(job.delay, 6000)
                    await job.promote()
                    const active = await worker.getNextJob('dispatcher', { block: false })
                    assert.ok(active)
                    assert.ok(active.id)
                    assert.deepEqual(active.data, { id: '123-456' })
                    await active.moveToCompleted(null, 'dispatcher', false)
                    completed.push(active.id)
                }
                assert.notEqual(completed[0], completed[1])
                for (const id of completed) assert.equal(await queue.getJobState(id), 'completed')
            }
            assert.deepEqual(errors, [])
        } finally {
            for (const [path, original] of originals) {
                if (original) testRequire.cache[path] = original
                else Reflect.deleteProperty(testRequire.cache, path)
            }
        }
    })
})
