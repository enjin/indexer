import { getRuntimeCached } from '../decoder/metadata'
import { resolveNetwork } from '../decoder/core'
import type { Network } from '../decoder/types'
import type { DecodedCall } from '@subsquid/substrate-runtime'
import type { EncodeCallInput, EncodeRequest, EncodeResponse } from './types'

const DEFAULT_NETWORK: Network = 'enjin-matrixchain'

const LATEST_SPEC_VERSIONS: Record<Network, number> = {
    'enjin-relaychain': 1062,
    'enjin-matrixchain': 1031,
    'canary-relaychain': 1062,
    'canary-matrixchain': 1031,
}

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
    const encoded = runtime.encodeCall(callData as unknown as DecodedCall)
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
