import type { DecodedCall, ExtrinsicSignature } from '@subsquid/substrate-runtime'

// Network constants
export const NETWORKS = ['enjin-matrixchain', 'canary-matrixchain', 'enjin-relaychain', 'canary-relaychain'] as const

export type Network = (typeof NETWORKS)[number]

// Network alias mapping (e.g., "canary" -> "canary-matrixchain")
export const NETWORK_ALIASES: Record<string, Network> = {
    canary: 'canary-matrixchain',
}

export interface DecodeRequest {
    extrinsic?: string
    extrinsics?: string[]
    events?: string // Single hex string containing Vec<EventRecord>
    network?: string
    spec_version?: number
}

export interface DecodeResponse {
    version: number
    signature?: ExtrinsicSignature
    call: DecodedCall
    hash: string
    extrinsic_hash: string
}

export interface EventPhase {
    ApplyExtrinsic?: number
    Finalization?: null
    Initialization?: null
}

export interface DecodedEventRecord {
    phase: EventPhase
    event: unknown
    topics: string[]
}

export interface EventDecodeResponse {
    name: string
    args: unknown
}

export interface ErrorResponse {
    error: string
}
