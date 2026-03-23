import { hexToU8a } from '@polkadot/util'
import { blake2AsHex } from '@polkadot/util-crypto'
import { Src } from '@subsquid/scale-codec'
import { getRuntimeCached } from './metadata'
import type {
    DecodeRequest,
    DecodeResponse,
    Network,
    DecodedEventRecord,
    DecodedSignedExtrinsicInput,
    DecodedSignedExtrinsicResult,
} from './types'
import { NETWORK_ALIASES } from './types'
import { transformCall, transformExtrinsic, transformEvent } from './compatibility'

export function bigIntReplacer(_key: string, value: unknown): unknown {
    if (typeof value === 'bigint') {
        return value.toString()
    }
    return value
}

export const DEFAULT_NETWORK: Network = 'enjin-matrixchain'

const LATEST_SPEC_VERSIONS: Record<Network, number> = {
    'enjin-relaychain': 1062,
    'enjin-matrixchain': 1031,
    'canary-relaychain': 1062,
    'canary-matrixchain': 1031,
}

export function getLatestSpecVersion(network: Network): number {
    return LATEST_SPEC_VERSIONS[network]
}

export function resolveNetwork(networkInput: string): Network | null {
    if (networkInput in NETWORK_ALIASES) {
        return NETWORK_ALIASES[networkInput]
    }
    return null
}

export async function decodeExtrinsic(extrinsic: string, network: Network, specVersion: number): Promise<unknown> {
    const runtime = await getRuntimeCached(network, specVersion)
    const decoded = runtime.decodeExtrinsic(extrinsic)

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

export async function decodeExtrinsics(
    extrinsics: string[],
    network: Network,
    specVersion: number
): Promise<unknown[]> {
    const runtime = await getRuntimeCached(network, specVersion)

    return extrinsics.map((ext) => {
        const decoded = runtime.decodeExtrinsic(ext)
        const hash = blake2AsHex(ext, 256)
        const extrinsicLength = (ext.startsWith('0x') ? ext.length - 2 : ext.length) / 2

        const response = {
            version: decoded.version,
            signature: decoded.signature,
            call: decoded.call,
            hash,
            extrinsic_hash: hash,
        }

        return transformExtrinsic(response, extrinsicLength)
    })
}

export async function decodeEvents(
    events: string,
    network: Network,
    specVersion: number
): Promise<DecodedEventRecord[]> {
    const runtime = await getRuntimeCached(network, specVersion)

    const hexString = events.startsWith('0x') ? events.slice(2) : events
    const bytes = new Uint8Array(Buffer.from(hexString, 'hex'))
    const src = new Src(bytes)
    const length = src.compact()

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
        }

        const decodedEvent = runtime.scaleCodec.decode(runtime.description.event, src)

        const topicsLength = src.compact()
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

    return results
}

export async function decodeCall(call: string, network: Network, specVersion: number): Promise<unknown> {
    const runtime = await getRuntimeCached(network, specVersion)

    const hexString = call.startsWith('0x') ? call.slice(2) : call
    const bytes = new Uint8Array(Buffer.from(hexString, 'hex'))
    const src = new Src(bytes)

    const decodedCall = runtime.scaleCodec.decode(runtime.description.call, src)
    return { calls: transformCall(decodedCall, runtime) }
}

export async function decodeSignedExtrinsicsRaw(
    items: DecodedSignedExtrinsicInput[],
    network: Network,
    specVersion: number
): Promise<DecodedSignedExtrinsicResult[]> {
    const runtime = await getRuntimeCached(network, specVersion)

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
            const decoded = runtime.decodeExtrinsic(item.signedExtrinsic)

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

export async function decode(requestData: DecodeRequest): Promise<unknown> {
    const { call, extrinsic, extrinsics, events, network: networkInput, spec_version } = requestData

    const resolved = networkInput ? resolveNetwork(networkInput) : null
    if (networkInput && !resolved) {
        throw new Error(`Invalid network: ${networkInput}`)
    }
    const network = resolved || DEFAULT_NETWORK
    const specVersion = spec_version ?? getLatestSpecVersion(network)

    if (call) {
        return decodeCall(call, network, specVersion)
    }

    if (extrinsic) {
        return decodeExtrinsic(extrinsic, network, specVersion)
    }

    if (extrinsics && extrinsics.length > 0) {
        return decodeExtrinsics(extrinsics, network, specVersion)
    }

    if (events) {
        return decodeEvents(events, network, specVersion)
    }

    throw new Error('Invalid request: no call, extrinsic, extrinsics, or events provided')
}
