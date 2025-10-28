// Network constants
export const NETWORKS = [
    'enjin-matrixchain',
    'canary-matrixchain',
    'enjin-relaychain',
    'canary-relaychain',
] as const

export type Network = (typeof NETWORKS)[number]

// Network alias mapping (e.g., "canary" -> "canary-matrixchain")
export const NETWORK_ALIASES: Record<string, Network> = {
    canary: 'canary-matrixchain',
}

export interface DecodeRequest {
    extrinsic?: string
    extrinsics?: string[]
    events?: string[]
    network?: string
    spec_version?: number
}

export interface DecodeResponse {
    version: number
    signature?: {
        address: unknown
        signature: unknown
        signedExtensions: unknown
    }
    call: unknown
    hash: string
    extrinsic_hash: string
}

export interface EventDecodeResponse {
    name: string
    args: unknown
}

export interface ErrorResponse {
    error: string
}
