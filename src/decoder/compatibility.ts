/**
 * Compatibility layer to transform new decoder output to match platform-decoder format
 *
 * Example transformation (Timestamp.set extrinsic: 0x280503000ba0440c289a01):
 *
 * Input (Subsquid format):
 * ```json
 * {
 *   "version": 5,
 *   "call": {
 *     "__kind": "Timestamp",
 *     "value": { "__kind": "set", "now": 1761608484000 }
 *   }
 * }
 * ```
 *
 * Output (platform-decoder format):
 * ```json
 * {
 *   "hash": "b065b06f...",
 *   "version": 5,
 *   "extrinsic_length": 11,
 *   "calls": {
 *     "Timestamp": {
 *       "set": { "now": "1761608484000" }
 *     }
 *   }
 * }
 * ```
 *
 * Key transformations:
 * - `__kind` variants → nested objects
 * - camelCase → snake_case
 * - hex strings → byte arrays
 * - undefined → null (for optional fields)
 */

import type { DecodedEvent, Extrinsic, Runtime } from '@subsquid/substrate-runtime'
import { decodeHex, isHex } from '@subsquid/util-internal-hex'

// Type definitions for runtime-specific structures
interface KindVariant<T = unknown> {
    __kind: string
    value?: T
}

interface SignedExtensionsData {
    checkMortality?: unknown
    checkNonce?: number
    chargeTransactionPayment?: string
    checkMetadataHash?: { mode?: { __kind: string } }
}

interface TypeVariant {
    name: string
    fields?: Array<{ type: number; name?: string; typeName?: string }>
}

interface RuntimeType {
    variants?: TypeVariant[]
}

// =============================================
// Utility functions
// =============================================

const strip0x = (s: string): string => (s.startsWith('0x') ? s.slice(2) : s)

const toBytes = (hex: string): number[] => Array.from(decodeHex(hex))

const isRecord = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)

const hasKind = (v: unknown): v is { __kind: string } & Record<string, unknown> =>
    isRecord(v) && typeof v.__kind === 'string'

const toSnakeCaseKey = (s: string): string => s.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)

/**
 * Recursively transforms data structure to snake_case keys and converts:
 * - undefined/null → null
 * - hex strings → byte arrays
 * - __kind variants → { [kind]: value } format
 */
const toSnakeCaseDeep = (value: unknown): unknown => {
    if (value === null || value === undefined) return null

    // Convert hex values to byte arrays
    if (isHex(value)) return toBytes(value)
    if (hasKind(value) && isHex(value.value)) return toBytes(value.value)

    if (Array.isArray(value)) {
        return value.map(toSnakeCaseDeep)
    }

    if (hasKind(value)) {
        const { __kind, ...rest } = value
        const restEntries = Object.entries(rest)

        // If __kind with a single 'value' field, unwrap it based on value type
        // Example: { __kind: "Id", value: "0x1234" } → { Id: [18, 52] }
        //          { __kind: "Some", value: 42 } → { Some: 42 }
        //          { __kind: "None", value: null } → { None: null }
        if (restEntries.length === 1 && 'value' in rest) {
            const unwrappedValue = toSnakeCaseDeep(rest.value)
            // If value is null/undefined or the unwrapped value is null, return { [__kind]: null }
            if (rest.value === null || rest.value === undefined || unwrappedValue === null) {
                return { [__kind]: null }
            }
            return { [__kind]: unwrappedValue }
        }

        // If only __kind with no other fields, return { [__kind]: null }
        // Example: { __kind: "Immortal" } → { Immortal: null }
        //          { __kind: "Free" } → { Free: null }
        if (restEntries.length === 0) {
            return { [__kind]: null }
        }

        // Otherwise transform all fields
        const transformed: Record<string, unknown> = {}
        for (const [k, v] of restEntries) {
            transformed[toSnakeCaseKey(k)] = toSnakeCaseDeep(v)
        }
        return { [__kind]: transformed }
    }

    // Plain objects without __kind: transform keys to snake_case recursively
    // Example: { collectionId: 123, tokenId: 456 } → { collection_id: 123, token_id: 456 }
    //          { checkMortality: {...}, checkNonce: 5 } → { check_mortality: {...}, check_nonce: 5 }
    if (isRecord(value)) {
        const transformed: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(value)) {
            transformed[toSnakeCaseKey(k)] = toSnakeCaseDeep(v)
        }
        return transformed
    }

    return value
}

const asEvent = (pallet: string, name: string, args: unknown) => ({ [pallet]: { [name]: args } })

const kindHexToBytes = (input: unknown): { [k: string]: number[] } => {
    const typed = input as KindVariant<string>
    if (!typed.__kind || !typed.value) return {}
    return { [typed.__kind]: toBytes(typed.value) }
}

/**
 * Parses era/mortality data from extrinsic signature.
 * Mortal extrinsics have limited validity period, immortal ones never expire.
 */
function parseEra(checkMortality: unknown): {
    period: number
    phase: number
} | null {
    const mortality = checkMortality as KindVariant<number>
    if (mortality.__kind === 'Immortal') {
        return null
    }

    // Mortal era format: MortalN where N is the encoded value
    const match = mortality.__kind.match(/^Mortal(\d+)$/)
    if (!match || mortality.value === undefined) {
        return null
    }

    const encoded = parseInt(match[1])
    const phase = mortality.value

    // Calculate period from encoded value using bit shift
    // Period is 2^encoded (e.g., Mortal6 with phase 42 → period: 64, phase: 42)
    // Note: Substrate encodes mortality as an exponent, not the actual period
    const period = 1 << encoded

    return { period, phase }
}

/**
 * Transforms signed extension metadata from extrinsic signature.
 * Extracts era, nonce, tip, and metadata hash validation mode.
 */
function transformSignedExtensions(signedExtensions: unknown): {
    era: { period: number; phase: number } | null
    nonce: number
    tip: string
    metadata_hash: string
} {
    const extensions = signedExtensions as SignedExtensionsData
    const era = extensions.checkMortality ? parseEra(extensions.checkMortality) : null

    return {
        era: era || { period: 0, phase: 0 },
        nonce: extensions.checkNonce ?? 0,
        tip: extensions.chargeTransactionPayment ?? '0',
        metadata_hash: extensions.checkMetadataHash?.mode?.__kind ?? 'Disabled',
    }
}

/**
 * Transforms call data to platform-decoder format: { PalletName: { call_name: params } }
 * Uses Object.getOwnPropertyNames to preserve undefined fields (converted to null).
 */
function transformCall(call: unknown): Record<string, unknown> {
    if (!hasKind(call)) return {}
    const { __kind: palletName, value } = call

    // Nested call structure with both pallet and call name
    // Example: { __kind: "Timestamp", value: { __kind: "set", now: 123 } }
    //       → { Timestamp: { set: { now: 123 } } }
    if (value && typeof value === 'object' && '__kind' in value) {
        const kindedValue = value as { __kind: string } & Record<string, unknown>
        const { __kind: callName, ...params } = kindedValue
        const transformedParams: Record<string, unknown> = {}
        for (const k of Object.getOwnPropertyNames(params)) {
            if (k === '__kind') continue
            const v = params[k]
            transformedParams[toSnakeCaseKey(k)] = toSnakeCaseDeep(v)
        }
        return { [palletName]: { [callName]: transformedParams } }
    }

    return { [palletName]: (value ?? {}) as Record<string, unknown> }
}

/**
 * Transforms blockchain event to platform-decoder format: { Pallet: { EventName: args } }
 * Uses runtime metadata to determine if event has named or positional arguments.
 */
export function transformEvent(runtime: Runtime, decodedEvent: DecodedEvent): unknown {
    const palletName = decodedEvent.__kind
    const eventValue = decodedEvent.value

    if (typeof eventValue !== 'object' || !('__kind' in eventValue)) {
        return {
            [palletName]: eventValue,
        }
    }

    const eventName = eventValue.__kind
    const eventData = eventValue
    const eventParams: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(eventData)) {
        if (key !== '__kind') {
            eventParams[key] = value
        }
    }

    const eventTypeIndex = runtime.description.event
    const eventType = runtime.description.types[eventTypeIndex] as RuntimeType

    const palletVariant = eventType.variants?.find((v) => v.name === palletName)
    if (!palletVariant || !palletVariant.fields || palletVariant.fields.length === 0) {
        const result: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(eventParams)) {
            result[key] = toSnakeCaseDeep(value)
        }
        return asEvent(palletName, eventName, result)
    }

    const palletEventsTypeIndex = palletVariant.fields[0].type
    const palletEventsType = runtime.description.types[palletEventsTypeIndex] as RuntimeType

    const specificEvent = palletEventsType.variants?.find((v) => v.name === eventName)
    if (!specificEvent || !specificEvent.fields) {
        const result: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(eventParams)) {
            result[key] = toSnakeCaseDeep(value)
        }
        return asEvent(palletName, eventName, result)
    }

    // Determine if the event uses named fields (returns an object) or positional fields (returns an array)
    const types = specificEvent.fields.filter((f) => f.typeName).map((f) => f.typeName)
    const hasDuplicateTypes = new Set(types).size !== types.length

    if (hasDuplicateTypes) {
        // Positional arguments: build array ordered by metadata field sequence
        const transformedArgs: unknown[] = []
        const paramValues = Object.values(eventParams)

        for (let i = 0; i < specificEvent.fields.length; i++) {
            const value = paramValues[i]
            transformedArgs.push(toSnakeCaseDeep(value))
        }

        return asEvent(palletName, eventName, transformedArgs)
    } else {
        // Named arguments: build object with keys from metadata
        const transformedArgs: Record<string, unknown> = {}
        for (const field of specificEvent.fields) {
            const fieldName = field.name
            if (!fieldName) continue

            const value = eventParams[fieldName]

            // Use typeName as key if available, otherwise use snake_cased fieldName
            // Example: field with typeName "T::AccountId" → key: "T::AccountId"
            //          field with name "collectionId" → key: "collection_id"
            const key = field.typeName || toSnakeCaseKey(fieldName)

            transformedArgs[key] = toSnakeCaseDeep(value)
        }

        return asEvent(palletName, eventName, transformedArgs)
    }
}

/**
 * Transforms blockchain extrinsic to platform-decoder format.
 * Converts signature data (address, signature, extensions) and call data.
 */
export function transformExtrinsic(
    decoded: Extrinsic & { hash: string; extrinsic_hash: string },
    extrinsicLength?: number
): unknown {
    const result: Record<string, unknown> = {
        hash: strip0x(decoded.hash),
        version: decoded.version,
    }

    if (extrinsicLength !== undefined) {
        result.extrinsic_length = extrinsicLength
    }

    if (decoded.signature) {
        result.signature = {
            address: kindHexToBytes(decoded.signature.address),
            signature: kindHexToBytes(decoded.signature.signature),
            signedExtensions: transformSignedExtensions(decoded.signature.signedExtensions),
        }
    }

    result.calls = transformCall(decoded.call)
    result.extrinsic_hash = strip0x(decoded.extrinsic_hash)

    return result
}
