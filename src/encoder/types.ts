export type { Network } from '../decoder/types'
export { NETWORKS, NETWORK_ALIASES } from '../decoder/types'

export interface EncodeCallInput {
    pallet: string
    name: string
    args?: Record<string, unknown>
}

export interface EncodeRequest {
    call?: EncodeCallInput
    network?: string
    spec_version?: number
}

export interface EncodeResponse {
    encoded: string
    network: string
    spec_version: number
}

export interface ErrorResponse {
    error: string
}
