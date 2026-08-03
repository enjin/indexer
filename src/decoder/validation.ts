import { isHex } from '@polkadot/util'
import type {
    DecodeRequest,
    VerifyMessageItem,
    VerifyMessageRequestBody,
    DecodeSignedExtrinsicRequestBody,
} from './types'
import { NETWORKS } from './types'
import { resolveNetwork } from './core'
import type { EncodeCallInput, EncodeRequest } from '../encoder/types'

export function validateDecodeRequest(
    body: unknown
): { valid: true; data: DecodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    const hasCall = req.call !== undefined
    const hasCalls = req.calls !== undefined
    const hasExtrinsic = req.extrinsic !== undefined
    const hasExtrinsics = req.extrinsics !== undefined
    const hasEvents = req.events !== undefined

    if (!hasCall && !hasCalls && !hasExtrinsic && !hasExtrinsics && !hasEvents) {
        return { valid: false, error: 'Missing "call", "calls", "extrinsic", "extrinsics", or "events" field' }
    }

    if (hasCall) {
        if (typeof req.call !== 'string') {
            return { valid: false, error: '"call" must be a string' }
        }
        if (!isHex(req.call)) {
            return { valid: false, error: 'Call must be a valid hex string (0x followed by hex characters)' }
        }
    }

    if (hasCalls) {
        if (!Array.isArray(req.calls)) {
            return { valid: false, error: '"calls" must be an array' }
        }
        if (req.calls.some((call: unknown) => typeof call !== 'string' || !isHex(call))) {
            return { valid: false, error: 'All calls must be valid hex strings' }
        }
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

    if (req.readable !== undefined && typeof req.readable !== 'boolean') {
        return { valid: false, error: 'Invalid "readable" field (must be boolean)' }
    }

    return {
        valid: true,
        data: {
            call: req.call as string | undefined,
            calls: req.calls as string[] | undefined,
            extrinsic: req.extrinsic as string | undefined,
            extrinsics: req.extrinsics as string[] | undefined,
            events: req.events as string | undefined,
            network: req.network,
            spec_version: req.spec_version,
            readable: req.readable,
        },
    }
}

function validateEncodeCallInput(
    value: unknown,
    label: string
): { valid: true; data: EncodeCallInput } | { valid: false; error: string } {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return { valid: false, error: `"${label}" must be an object` }
    }

    const call = value as Record<string, unknown>

    if (typeof call.pallet !== 'string' || !call.pallet) {
        return { valid: false, error: `"${label}.pallet" must be a non-empty string` }
    }

    if (typeof call.name !== 'string' || !call.name) {
        return { valid: false, error: `"${label}.name" must be a non-empty string` }
    }

    if (call.args !== undefined && (typeof call.args !== 'object' || Array.isArray(call.args))) {
        return { valid: false, error: `"${label}.args" must be an object` }
    }

    return {
        valid: true,
        data: {
            pallet: call.pallet,
            name: call.name,
            args: call.args as Record<string, unknown> | undefined,
        },
    }
}

export function validateEncodeRequest(
    body: unknown
): { valid: true; data: EncodeRequest } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Request body must be an object' }
    }

    const req = body as Record<string, unknown>

    const hasCall = req.call !== undefined
    const hasCalls = req.calls !== undefined

    if (!hasCall && !hasCalls) {
        return { valid: false, error: 'Missing "call" or "calls" field' }
    }

    let call: EncodeCallInput | undefined
    if (hasCall) {
        const result = validateEncodeCallInput(req.call, 'call')
        if (!result.valid) {
            return result
        }
        call = result.data
    }

    let calls: EncodeCallInput[] | undefined
    if (hasCalls) {
        if (!Array.isArray(req.calls)) {
            return { valid: false, error: '"calls" must be an array' }
        }
        if (req.calls.length === 0) {
            return { valid: false, error: '"calls" must not be empty' }
        }

        calls = []
        for (const [index, item] of req.calls.entries()) {
            const result = validateEncodeCallInput(item, `calls[${index}]`)
            if (!result.valid) {
                return result
            }
            calls.push(result.data)
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
            call,
            calls,
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
        const { message, signature, publicKey } = item

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
