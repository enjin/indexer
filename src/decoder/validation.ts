import { isHex } from '@polkadot/util'
import type {
    DecodeRequest,
    VerifyMessageItem,
    VerifyMessageRequestBody,
    DecodeSignedExtrinsicRequestBody,
} from './types'
import { NETWORKS } from './types'
import { resolveNetwork } from './core'
import type { EncodeRequest } from '../encoder/types'

export function validateDecodeRequest(body: unknown): { valid: true; data: DecodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    const hasExtrinsic = req.extrinsic !== undefined
    const hasExtrinsics = req.extrinsics !== undefined
    const hasEvents = req.events !== undefined

    if (!hasExtrinsic && !hasExtrinsics && !hasEvents) {
        return { valid: false, error: 'Missing "extrinsic", "extrinsics", or "events" field' }
    }

    if (hasExtrinsic) {
        if (typeof req.extrinsic !== 'string') {
            return { valid: false, error: '"extrinsic" must be a string' }
        }
        if (!isHex(req.extrinsic)) {
            return { valid: false, error: 'Extrinsic must be a valid hex string (0x followed by hex characters)' }
        }
    }

    if (hasExtrinsics) {
        if (!Array.isArray(req.extrinsics)) {
            return { valid: false, error: '"extrinsics" must be an array' }
        }
        if (req.extrinsics.some((e: unknown) => typeof e !== 'string' || !isHex(e))) {
            return { valid: false, error: 'All extrinsics must be valid hex strings' }
        }
    }

    if (hasEvents) {
        if (typeof req.events !== 'string') {
            return { valid: false, error: '"events" must be a hex string' }
        }
        if (!isHex(req.events)) {
            return { valid: false, error: 'Events must be a valid hex string' }
        }
    }

    if (req.network !== undefined) {
        if (typeof req.network !== 'string') {
            return { valid: false, error: 'Invalid "network" field (must be string)' }
        }
        if (!resolveNetwork(req.network)) {
            return {
                valid: false,
                error: `Invalid network. Must be one of: ${NETWORKS.join(', ')}, canary`,
            }
        }
    }

    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return {
        valid: true,
        data: {
            extrinsic: req.extrinsic as string | undefined,
            extrinsics: req.extrinsics as string[] | undefined,
            events: req.events as string | undefined,
            network: req.network,
            spec_version: req.spec_version,
        },
    }
}

export function validateEncodeRequest(body: unknown): { valid: true; data: EncodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    if (req.call === undefined) {
        return { valid: false, error: 'Missing "call" field' }
    }

    if (!req.call || typeof req.call !== 'object' || Array.isArray(req.call)) {
        return { valid: false, error: '"call" must be an object' }
    }

    const call = req.call as Record<string, unknown>

    if (typeof call.pallet !== 'string' || !call.pallet) {
        return { valid: false, error: '"call.pallet" must be a non-empty string' }
    }

    if (typeof call.name !== 'string' || !call.name) {
        return { valid: false, error: '"call.name" must be a non-empty string' }
    }

    if (call.args !== undefined && (typeof call.args !== 'object' || Array.isArray(call.args))) {
        return { valid: false, error: '"call.args" must be an object' }
    }

    if (req.network !== undefined) {
        if (typeof req.network !== 'string') {
            return { valid: false, error: 'Invalid "network" field (must be string)' }
        }
        if (!resolveNetwork(req.network)) {
            return {
                valid: false,
                error: `Invalid network. Must be one of: ${NETWORKS.join(', ')}, canary`,
            }
        }
    }

    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return {
        valid: true,
        data: {
            call: {
                pallet: call.pallet,
                name: call.name,
                args: call.args as Record<string, unknown> | undefined,
            },
            network: req.network,
            spec_version: req.spec_version,
        },
    }
}

export function validateHashRequest(body: unknown): { valid: true; data: string } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>
    if (req.data === undefined) {
        return { valid: false, error: 'Missing "data" field' }
    }
    if (typeof req.data !== 'string') {
        return { valid: false, error: '"data" must be a string' }
    }
    return { valid: true, data: req.data }
}

export function validateVerifyMessageRequest(
    body: unknown
): { valid: true; data: VerifyMessageItem[] } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Partial<VerifyMessageRequestBody>

    if (!Array.isArray(req.inputs) || req.inputs.length === 0) {
        return { valid: false, error: '"inputs" must be a non-empty array' }
    }

    for (const [index, item] of req.inputs.entries()) {
        if (!item || typeof item !== 'object') {
            return { valid: false, error: `"inputs[${index}]" must be an object` }
        }

        const { message, signature, publicKey } = item as VerifyMessageItem

        if (typeof message !== 'string' || !message) {
            return { valid: false, error: `"inputs[${index}].message" must be a non-empty string` }
        }

        if (typeof signature !== 'string' || !signature) {
            return { valid: false, error: `"inputs[${index}].signature" must be a non-empty string` }
        }

        if (typeof publicKey !== 'string' || !publicKey) {
            return { valid: false, error: `"inputs[${index}].publicKey" must be a non-empty string` }
        }
    }

    return { valid: true, data: req.inputs }
}

export function validateDecodeSignedExtrinsicsRequest(
    body: unknown
): { valid: true; data: DecodeSignedExtrinsicRequestBody } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as DecodeSignedExtrinsicRequestBody

    if (!Array.isArray(req.inputs) || req.inputs.length === 0) {
        return { valid: false, error: '"inputs" must be a non-empty array' }
    }

    for (const [index, hex] of req.inputs.entries()) {
        if (typeof hex !== 'string' || !hex || !isHex(hex)) {
            return {
                valid: false,
                error: `"inputs[${index}]" must be a non-empty hex string`,
            }
        }
    }

    if (req.network !== undefined) {
        if (typeof req.network !== 'string') {
            return { valid: false, error: 'Invalid "network" field (must be string)' }
        }
        if (!resolveNetwork(req.network)) {
            return {
                valid: false,
                error: `Invalid network. Must be one of: ${NETWORKS.join(', ')}, canary`,
            }
        }
    }

    if (req.spec_version !== undefined && typeof req.spec_version !== 'number') {
        return { valid: false, error: 'Invalid "spec_version" field (must be number)' }
    }

    return { valid: true, data: req }
}

