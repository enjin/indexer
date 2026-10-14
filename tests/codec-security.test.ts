import assert from 'node:assert/strict'
import fs from 'node:fs'
import { once } from 'node:events'
import type { AddressInfo } from 'node:net'
import test from 'node:test'
import express from 'express'
import { Src, TypeKind } from '@subsquid/scale-codec'
import { resolveNetwork } from '~/codec/decoder/core'
import { BoundedScaleCodec } from '~/codec/decoder/scale'
import { CodecLimitError, MAX_CODEC_BATCH_ITEMS } from '~/codec/limits'
import {
    clearRuntimeCache,
    getRpcRuntime,
    getRuntimeCached,
    RPC_LOOKUP_COOLDOWN_MS,
    withRuntime,
} from '~/codec/metadata'
import { createRequestGate } from '~/codec/request-gate'
import DecoderRpc, { getRpcEndpoint } from '~/codec/rpc'
import type { Network } from '~/codec/types'
import {
    validateDecodeRequest,
    validateDecodeSignedExtrinsicsRequest,
    validateDryRunRequest,
    validateEncodeRequest,
    validateVerifyMessageRequest,
} from '~/codec/validation'

const remark = { pallet: 'System', name: 'remark', args: { remark: '0x' } }

void test('prototype network names cannot reach metadata or RPC through any validator', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('Untrusted network must not reach RPC')
    })
    for (const network of ['constructor', '__proto__', 'toString', 'hasOwnProperty', '../enjin-matrixchain']) {
        assert.equal(resolveNetwork(network), null)
        assert.equal(validateDecodeRequest({ call: '0x00', network }).valid, false)
        assert.equal(validateEncodeRequest({ call: remark, network }).valid, false)
        assert.equal(validateDecodeSignedExtrinsicsRequest({ inputs: ['0x00'], network }).valid, false)
        assert.equal(
            validateDryRunRequest({ inputs: [{ publicKey: `0x${'11'.repeat(32)}`, encodedData: '0x00' }], network })
                .valid,
            false
        )
        assert.throws(() => getRpcEndpoint(network as Network), /Invalid codec network/)
        await assert.rejects(getRpcRuntime(network as Network), /Invalid codec network/)
        await assert.rejects(getRuntimeCached(network as Network, 1031), /Invalid codec network/)
    }
    assert.equal(resolveNetwork('canary'), 'canary-matrixchain')
    assert.equal(rpc.mock.callCount(), 0)
})

void test('HTTP validation bounds batches and rejects unsafe encoder input before runtime lookup', () => {
    const oversized = Array(MAX_CODEC_BATCH_ITEMS + 1).fill('0x00')
    assert.equal(validateDecodeRequest({ calls: oversized }).valid, false)
    assert.equal(validateDecodeRequest({ extrinsics: oversized }).valid, false)
    assert.equal(validateDecodeSignedExtrinsicsRequest({ inputs: oversized }).valid, false)
    assert.equal(validateEncodeRequest({ calls: oversized.map(() => remark) }).valid, false)
    assert.equal(
        validateVerifyMessageRequest({
            inputs: oversized.map(() => ({ message: 'm', signature: 's', publicKey: 'p' })),
        }).valid,
        false
    )
    assert.equal(validateVerifyMessageRequest({ inputs: [null] }).valid, false)
    assert.equal(
        validateEncodeRequest({ call: { ...remark, args: { __kind: 'remark_with_event', remark: '0x' } } }).valid,
        false
    )
    assert.equal(validateEncodeRequest({ call: { ...remark, args: { value: 2 ** 53 } } }).valid, false)
    assert.equal(validateEncodeRequest({ call: { ...remark, args: { value: '9007199254740993' } } }).valid, true)
    assert.equal(
        validateDecodeSignedExtrinsicsRequest({ inputs: Array(MAX_CODEC_BATCH_ITEMS).fill('0x00') }).valid,
        true
    )
})

void test('SCALE allocation and recursion limits apply before hostile collections are decoded', async (t) => {
    const codec = new BoundedScaleCodec([
        { kind: TypeKind.Tuple, tuple: [] },
        { kind: TypeKind.Sequence, type: 0 },
        { kind: TypeKind.Variant, variants: [{ index: 0, name: 'Recursive', fields: [{ type: 2 }] }] },
    ])
    // Compact 10,001 followed by zero-byte unit values must fail before allocation/iteration.
    assert.throws(() => codec.decode(1, new Src('0x459c')), CodecLimitError)
    assert.throws(() => codec.decode(2, new Src(`0x${'00'.repeat(130)}`)), CodecLimitError)
    assert.deepEqual(codec.decode(1, new Src('0x08')), [null, null])
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('Resource-limit failures must not trigger RPC')
    })
    await assert.rejects(
        withRuntime('enjin-matrixchain', undefined, () => codec.decode(1, new Src('0x459c'))),
        CodecLimitError
    )
    assert.equal(rpc.mock.callCount(), 0)
})

void test('unknown historical versions share a single metadata index instead of rescanning per request', async (t) => {
    clearRuntimeCache()
    t.after(clearRuntimeCache)
    const open = fs.createReadStream
    let reads = 0
    t.mock.method(fs, 'createReadStream', (...args: Parameters<typeof open>) => {
        reads++
        return open(...args)
    })
    await Promise.all(
        [987654, 987655, 987656].map((version) => assert.rejects(getRuntimeCached('enjin-matrixchain', version)))
    )
    assert.equal(reads, 1)
    assert.equal((await getRuntimeCached('enjin-matrixchain', 1031)).specVersion, 1031)
    assert.equal(reads, 1)
})

void test('RPC lookup failures are cooled down, then retried after the deadline', async (t) => {
    clearRuntimeCache()
    t.after(clearRuntimeCache)
    let now = Date.now()
    t.mock.method(Date, 'now', () => now)
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => Promise.reject(new Error('offline')))
    await assert.rejects(getRpcRuntime('enjin-matrixchain'), /offline/)
    await assert.rejects(getRpcRuntime('enjin-matrixchain'), /offline/)
    assert.equal(rpc.mock.callCount(), 1)
    now += RPC_LOOKUP_COOLDOWN_MS + 1
    await assert.rejects(getRpcRuntime('enjin-matrixchain'), /offline/)
    assert.equal(rpc.mock.callCount(), 2)
    assert.equal((await getRuntimeCached('enjin-matrixchain', 1031)).specVersion, 1031)
})

void test('request admission bounds work even when the client aborts, and leaves health available', async (t) => {
    const app = express()
    app.use(createRequestGate(1, 10, 1000))
    let finish!: () => void
    let started!: () => void
    const entered = new Promise<void>((resolve) => {
        started = resolve
    })
    app.post('/hold', async (_req, res) => {
        res.locals.codecWorking = true
        started()
        await new Promise<void>((resolve) => {
            finish = resolve
        })
        res.end()
        res.locals.codecRelease()
    })
    app.post('/quick', (_req, res) => {
        res.json({ ok: true })
    })
    app.get('/health', (_req, res) => {
        res.json({ healthy: true })
    })
    const listener = app.listen(0, '127.0.0.1')
    await once(listener, 'listening')
    t.after(
        () =>
            new Promise<void>((resolve) => {
                listener.close(() => {
                    resolve()
                })
            })
    )
    const url = `http://127.0.0.1:${(listener.address() as AddressInfo).port}`
    const controller = new AbortController()
    const held = fetch(`${url}/hold`, { method: 'POST', signal: controller.signal }).catch(() => undefined)
    await entered
    const overloaded = await fetch(`${url}/quick`, { method: 'POST' })
    assert.equal(overloaded.status, 429)
    assert.equal(overloaded.headers.get('retry-after'), '1')
    assert.equal((await fetch(`${url}/health`)).status, 200)
    controller.abort()
    await held
    assert.equal((await fetch(`${url}/quick`, { method: 'POST' })).status, 429)
    finish()
    await new Promise<void>((resolve) => setImmediate(resolve))
    assert.equal((await fetch(`${url}/quick`, { method: 'POST' })).status, 200)
})

void test('request rate limits refill without timers or per-client state', async (t) => {
    let now = Date.now()
    t.mock.method(Date, 'now', () => now)
    const app = express()
    app.use(createRequestGate(1, 2, 1))
    app.post('/', (_req, res) => {
        res.end()
    })
    const listener = app.listen(0, '127.0.0.1')
    await once(listener, 'listening')
    t.after(
        () =>
            new Promise<void>((resolve) => {
                listener.close(() => {
                    resolve()
                })
            })
    )
    const url = `http://127.0.0.1:${(listener.address() as AddressInfo).port}/`
    assert.equal((await fetch(url, { method: 'POST' })).status, 200)
    assert.equal((await fetch(url, { method: 'POST' })).status, 200)
    assert.equal((await fetch(url, { method: 'POST' })).status, 429)
    now += 1000
    assert.equal((await fetch(url, { method: 'POST' })).status, 200)
})
