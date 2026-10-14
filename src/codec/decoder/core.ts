import { hexToU8a } from '@polkadot/util'
import { blake2AsHex } from '@polkadot/util-crypto'
import { Src } from '@subsquid/scale-codec'
import { getRuntimeCached, withRuntime, getRpcRuntime, rememberRuntime } from '~/codec/metadata'
import type { Runtime, Extrinsic } from '@subsquid/substrate-runtime'
import type {
    DecodeRequest,
    DecodeResponse,
    Network,
    DecodedEventRecord,
    DecodedSignedExtrinsicInput,
    DecodedSignedExtrinsicResult,
} from '~/codec/types'
import { NETWORK_ALIASES } from '~/codec/types'
import { transformCall, transformExtrinsic, transformEvent } from './compatibility'
import { buildTransactionView } from './view'
import { getBoundedScaleCodec } from './scale'
import { CodecLimitError, MAX_SCALE_SEQUENCE_ITEMS } from '~/codec/limits'

export function bigIntReplacer(_key: string, value: unknown): unknown {
    if (typeof value === 'bigint') {
        return value.toString()
    }
    return value
}

export const DEFAULT_NETWORK: Network = 'enjin-matrixchain'

export function resolveNetwork(networkInput: string): Network | null {
    if (Object.prototype.hasOwnProperty.call(NETWORK_ALIASES, networkInput)) {
        return NETWORK_ALIASES[networkInput]
    }
    return null
}

function decodeExtrinsicWithRuntime(extrinsic: string, runtime: Runtime): Extrinsic {
    const envelope = new Src(extrinsic)
    const length = envelope.compactLength()
    const src = new Src(envelope.bytes(length))
    envelope.assertEOF()
    const meta = src.u8()
    const version = meta & 0b01111111
    if (version !== 4 && version !== 5) throw new Error('Unsupported extrinsic version')
    const preamble = meta & 0b11000000
    let signature: Extrinsic['signature']
    if (preamble === 128 && version === 4) {
        signature = getBoundedScaleCodec(runtime).decode(runtime.description.signature, src)
    } else if (preamble !== 0) {
        throw new Error('Unsupported extrinsic preamble')
    }
    const call = getBoundedScaleCodec(runtime).decode(runtime.description.call, src)
    src.assertEOF()
    return { version, signature, call }
}

function transformDecodedExtrinsic(extrinsic: string, runtime: Runtime): unknown {
    const decoded = decodeExtrinsicWithRuntime(extrinsic, runtime)
    const hash = blake2AsHex(extrinsic, 256)
    const extrinsicLength = (extrinsic.startsWith('0x') ? extrinsic.length - 2 : extrinsic.length) / 2
    const response: DecodeResponse = {
        version: decoded.version,
        signature: decoded.signature,
        call: decoded.call,
        hash,
        extrinsic_hash: hash,
    }
    return transformExtrinsic(response, extrinsicLength)
}

export async function decodeExtrinsic(extrinsic: string, network: Network, specVersion?: number): Promise<unknown> {
    return withRuntime(network, specVersion, (runtime) => transformDecodedExtrinsic(extrinsic, runtime))
}

export async function decodeExtrinsics(
    extrinsics: string[],
    network: Network,
    specVersion?: number
): Promise<unknown[]> {
    return withRuntime(network, specVersion, (runtime) =>
        extrinsics.map((extrinsic) => transformDecodedExtrinsic(extrinsic, runtime))
    )
}

export async function decodeEvents(
    events: string,
    network: Network,
    specVersion?: number
): Promise<DecodedEventRecord[]> {
    return withRuntime(network, specVersion, (runtime) => decodeEventsWithRuntime(events, runtime))
}

function decodeEventsWithRuntime(events: string, runtime: Runtime): DecodedEventRecord[] {
    const hexString = events.startsWith('0x') ? events.slice(2) : events
    const bytes = new Uint8Array(Buffer.from(hexString, 'hex'))
    const src = new Src(bytes)
    const length = src.compactLength()
    if (length > MAX_SCALE_SEQUENCE_ITEMS) throw new CodecLimitError('Event sequence exceeds the item limit')

    const results: DecodedEventRecord[] = []

    for (let i = 0; i < length; i++) {
        const phaseVariant = src.u8()
        const phase: { [key: string]: number | null } = {}

        if (phaseVariant === 0) {
            phase.ApplyExtrinsic = src.u32()
        } else if (phaseVariant === 1) {
            phase.Finalization = null
        } else if (phaseVariant === 2) {
            phase.Initialization = null
        } else {
            throw new Error('Invalid event phase')
        }

        const decodedEvent = getBoundedScaleCodec(runtime).decode(runtime.description.event, src)

        const topicsLength = src.compactLength()
        if (topicsLength > MAX_SCALE_SEQUENCE_ITEMS) throw new CodecLimitError('Event topics exceed the item limit')
        const topics: string[] = []
        for (let j = 0; j < topicsLength; j++) {
            const hash = src.bytes(32)
            topics.push('0x' + Buffer.from(hash).toString('hex'))
        }

        results.push({
            phase,
            event: transformEvent(runtime, decodedEvent),
            topics,
        })
    }

    src.assertEOF()
    return results
}

export async function decodeCall(call: string, network: Network, specVersion?: number): Promise<unknown> {
    return withRuntime(network, specVersion, (runtime) => decodeCallWithRuntime(call, runtime))
}

function decodeCallWithRuntime(call: string, runtime: Awaited<ReturnType<typeof getRuntimeCached>>): unknown {
    const hexString = call.startsWith('0x') ? call.slice(2) : call
    const bytes = new Uint8Array(Buffer.from(hexString, 'hex'))
    const src = new Src(bytes)

    const decodedCall = getBoundedScaleCodec(runtime).decode(runtime.description.call, src)
    src.assertEOF()
    return { calls: transformCall(decodedCall, runtime) }
}

export async function decodeCalls(calls: string[], network: Network, specVersion?: number): Promise<unknown[]> {
    return withRuntime(network, specVersion, (runtime) => calls.map((call) => decodeCallWithRuntime(call, runtime)))
}

export async function decodeSignedExtrinsicsRaw(
    items: DecodedSignedExtrinsicInput[],
    network: Network,
    specVersion?: number
): Promise<DecodedSignedExtrinsicResult[]> {
    let runtime: Runtime
    try {
        runtime = await getRuntimeCached(network, specVersion)
    } catch (error) {
        if (specVersion !== undefined) throw error
        runtime = await getRpcRuntime(network)
        const results = decodeSignedItems(items, runtime)
        if (results.some((item) => item.encodedData !== null)) rememberRuntime(network, runtime)
        return results
    }
    const results = decodeSignedItems(items, runtime)
    const failed = results.flatMap((item, index) => (item.encodedData === null ? [index] : []))
    if (specVersion !== undefined || failed.length === 0) return results
    try {
        const current = await getRpcRuntime(network)
        const retries = decodeSignedItems(
            failed.map((index) => items[index]),
            current
        )
        let recovered = false
        for (const [offset, retry] of retries.entries()) {
            if (retry.encodedData !== null) {
                results[failed[offset]] = retry
                recovered = true
            }
        }
        if (recovered) rememberRuntime(network, current)
    } catch {
        // Preserve the tolerant batch response when RPC or the replacement codec is unavailable.
    }
    return results
}

function decodeSignedItems(items: DecodedSignedExtrinsicInput[], runtime: Runtime): DecodedSignedExtrinsicResult[] {
    const normalizeHex = (value: string): string => {
        const prefixed = value.startsWith('0x') ? value : `0x${value}`
        return prefixed.toLowerCase()
    }

    const extrinsicHash = (signedExtrinsic: string): string => {
        const hex = signedExtrinsic.startsWith('0x') ? signedExtrinsic : `0x${signedExtrinsic}`
        return blake2AsHex(hexToU8a(hex), 256)
    }

    return items.map((item) => {
        const hash = extrinsicHash(item.signedExtrinsic)
        try {
            const decoded = decodeExtrinsicWithRuntime(item.signedExtrinsic, runtime)

            let signer: string | null = null
            let nonce: number | null = null

            if (decoded.signature) {
                const address = decoded.signature.address as { __kind: string; value?: string }
                if (address.value) {
                    signer = normalizeHex(address.value)
                }

                const signedExtensions = decoded.signature.signedExtensions as { checkNonce?: number } | undefined

                if (signedExtensions && typeof signedExtensions.checkNonce === 'number') {
                    nonce = signedExtensions.checkNonce
                }
            }

            const encodedCall = runtime.encodeCall(decoded.call)
            const encodedCallHex = normalizeHex('0x' + Buffer.from(encodedCall).toString('hex'))

            return {
                hash,
                signer,
                nonce,
                encodedData: encodedCallHex,
            }
        } catch {
            return {
                hash,
                signer: null,
                nonce: null,
                encodedData: null,
            }
        }
    })
}

function withReadableView(result: unknown, network: Network): unknown {
    if (result && typeof result === 'object' && !Array.isArray(result)) {
        const record = result as Record<string, unknown>
        return {
            ...record,
            view: buildTransactionView(record.calls, network),
        }
    }
    return {
        view: buildTransactionView(undefined, network),
    }
}

export async function decode(requestData: DecodeRequest): Promise<unknown> {
    const { call, calls, extrinsic, extrinsics, events, network: networkInput, spec_version, readable } = requestData

    const resolved = networkInput ? resolveNetwork(networkInput) : null
    if (networkInput && !resolved) {
        throw new Error(`Invalid network: ${networkInput}`)
    }
    const network = resolved || DEFAULT_NETWORK
    const specVersion = spec_version

    if (call) {
        const result = await decodeCall(call, network, specVersion)
        return readable ? withReadableView(result, network) : result
    }

    if (calls && calls.length > 0) {
        const results = await decodeCalls(calls, network, specVersion)
        if (!readable) return results
        return results.map((item) => withReadableView(item, network))
    }

    if (extrinsic) {
        const result = await decodeExtrinsic(extrinsic, network, specVersion)
        return readable ? withReadableView(result, network) : result
    }

    if (extrinsics && extrinsics.length > 0) {
        const results = await decodeExtrinsics(extrinsics, network, specVersion)
        if (!readable) return results
        return results.map((item) => withReadableView(item, network))
    }

    if (events) {
        // readable is intentionally ignored for events (R4)
        return decodeEvents(events, network, specVersion)
    }

    throw new Error('Invalid request: no call, calls, extrinsic, extrinsics, or events provided')
}
