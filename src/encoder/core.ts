import { getRuntimeCached } from '../decoder/metadata'
import { DEFAULT_NETWORK, LATEST_SPEC_VERSIONS, resolveNetwork } from '../decoder/core'
import type { Network } from '../decoder/types'
import type { EncodeCallInput, EncodeRequest, EncodeResponse } from './types'

function getLatestSpecVersion(network: Network): number {
    return LATEST_SPEC_VERSIONS[network]
}

function toKindFormat(input: EncodeCallInput): Record<string, unknown> {
    return {
        __kind: input.pallet,
        value: {
            __kind: input.name,
            ...(input.args ?? {}),
        },
    }
}

export async function encodeCall(input: EncodeCallInput, network: Network, specVersion: number): Promise<string> {
    const runtime = await getRuntimeCached(network, specVersion)
    const callData = toKindFormat(input)
    // Use jsonCodec to decode the call from JSON-compatible types (number/string) into
    // native SCALE types (bigint for U128/U64, etc.) before binary encoding.
    const callTi = runtime.description.call
    const decoded = runtime.jsonCodec.decode(callTi, callData)
    const encoded = runtime.scaleCodec.encodeToBinary(callTi, decoded)
    return '0x' + Buffer.from(encoded).toString('hex')
}

export async function encode(requestData: EncodeRequest): Promise<EncodeResponse> {
    const { call, network: networkInput, spec_version } = requestData

    const resolved = networkInput ? resolveNetwork(networkInput) : null
    if (networkInput && !resolved) {
        throw new Error(`Invalid network: ${networkInput}`)
    }
    const network = resolved ?? DEFAULT_NETWORK
    const specVersion = spec_version ?? getLatestSpecVersion(network)

    if (call) {
        const encoded = await encodeCall(call, network, specVersion)
        return { encoded, network, spec_version: specVersion }
    }

    throw new Error('Invalid request: no call provided')
}
