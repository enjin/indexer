import { blake2AsHex } from '@polkadot/util-crypto'
import { Src } from '@subsquid/scale-codec'
import { getRuntimeCached } from './metadata'
import type { DecodeRequest, DecodeResponse, Network, DecodedEventRecord } from './types'
import { NETWORK_ALIASES } from './types'
import { transformExtrinsic, transformEvent } from './compatibility'

export function bigIntReplacer(_key: string, value: unknown): unknown {
    if (typeof value === 'bigint') {
        return value.toString()
    }
    return value
}

const DEFAULT_NETWORK: Network = 'enjin-matrixchain'

const LATEST_SPEC_VERSIONS: Record<Network, number> = {
    'enjin-relaychain': 1050,
    'enjin-matrixchain': 1022,
    'canary-relaychain': 1060,
    'canary-matrixchain': 1030,
}

function getLatestSpecVersion(network: Network): number {
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

export async function decode(requestData: DecodeRequest): Promise<unknown> {
    const { extrinsic, extrinsics, events, network: networkInput, spec_version } = requestData

    const resolved = networkInput ? resolveNetwork(networkInput) : null
    if (networkInput && !resolved) {
        throw new Error(`Invalid network: ${networkInput}`)
    }
    const network = resolved || DEFAULT_NETWORK
    const specVersion = spec_version ?? getLatestSpecVersion(network)

    if (extrinsic) {
        return decodeExtrinsic(extrinsic, network, specVersion)
    }

    if (extrinsics && extrinsics.length > 0) {
        return decodeExtrinsics(extrinsics, network, specVersion)
    }

    if (events) {
        return decodeEvents(events, network, specVersion)
    }

    throw new Error('Invalid request: no extrinsic, extrinsics, or events provided')
}
