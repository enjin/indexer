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
import type { CompositeType, VariantType } from '@subsquid/substrate-runtime/lib/metadata'
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
 * Checks if a type is a "pure unit enum" - an enum where ALL variants are unit variants.
 * If ANY variant in the enum has associated data fields, the entire enum is considered "complex"
 * and all its variants should return as objects (even empty ones as { variant: null }).
 */
function isPureUnitEnum(runtime: Runtime | undefined, typeIndex: number | undefined): boolean {
    if (!runtime || typeIndex === undefined) return false

    const type = runtime.description.types[typeIndex] as VariantType | undefined
    
    // Check if it's a VariantType (enum) with variants
    if (type && Array.isArray(type.variants)) {
        // If ANY variant has fields, it's a complex enum
        return !type.variants.some((v) => v?.fields?.length > 0)
    }
    
    return true
}

const toSnakeCaseDeep = (
    value: unknown,
    runtime?: Runtime,
    typeIndex?: number
): unknown => {
    if (value === null || value === undefined) return null

    // Convert hex values to byte arrays
    if (isHex(value)) return toBytes(value)

    if (Array.isArray(value)) {
        return value.map((v) => toSnakeCaseDeep(v, runtime, typeIndex))
    }

    if (hasKind(value)) {
        const { __kind, ...rest } = value
        const restEntries = Object.entries(rest)

        if (restEntries.length === 1 && 'value' in rest) {
            const unwrappedValue = toSnakeCaseDeep(rest.value, runtime, typeIndex)
            if (rest.value === null || rest.value === undefined || unwrappedValue === null) {
                return { [__kind]: null }
            }
            return { [__kind]: unwrappedValue }
        }

        // Pure unit variants (from pure unit enum) → return as string
        // Complex variants with no current data → return as { [kind]: null }
        if (restEntries.length === 0) {
            const isPureUnit = isPureUnitEnum(runtime, typeIndex)
            return isPureUnit ? __kind : { [__kind]: null }
        }

        const transformed: Record<string, unknown> = {}
        for (const [k, v] of restEntries) {
            transformed[toSnakeCaseKey(k)] = toSnakeCaseDeep(v, runtime, typeIndex)
        }
        return { [__kind]: transformed }
    }

    if (isRecord(value)) {
        const transformed: Record<string, unknown> = {}
        
        // If we have a struct type index, try to look up field types from metadata
        let fieldTypeMap: Record<string, number> = {}
        if (runtime && typeIndex !== undefined) {
            const type = runtime.description.types[typeIndex] as CompositeType | undefined
            
            // Only CompositeType has fields
            if (type && Array.isArray(type.fields)) {
                fieldTypeMap = Object.fromEntries(
                    type.fields
                        .filter((f) => f?.name && f.type !== undefined)
                        .map((f) => [f.name!, f.type])
                )
            }
        }
        
        for (const [k, v] of Object.entries(value)) {
            const snakeCaseKey = toSnakeCaseKey(k)
            const fieldTypeIndex = fieldTypeMap[k]
            transformed[snakeCaseKey] = toSnakeCaseDeep(v, runtime, fieldTypeIndex)
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
    // Step 1: Extract pallet name from top-level __kind
    // Example: { __kind: "MultiTokens", value: {...} } → palletName = "MultiTokens"
    const palletName = decodedEvent.__kind
    const eventValue = decodedEvent.value

    // Step 2: Handle events without structured data (rare edge case)
    // If value is not an object with __kind, return as-is wrapped in pallet name
    // Example: { __kind: "System", value: "someValue" } → { System: "someValue" }
    if (typeof eventValue !== 'object' || !('__kind' in eventValue)) {
        return {
            [palletName]: eventValue,
        }
    }

    // Step 3: Extract event name and parameters from nested __kind structure
    // Example: { __kind: "CollectionCreated", collectionId: "0x1234", owner: "0xabcd" }
    //       → eventName = "CollectionCreated"
    //       → eventParams = { collectionId: "0x1234", owner: "0xabcd" }
    const eventName = eventValue.__kind
    const eventData = eventValue
    const eventParams: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(eventData)) {
        if (key !== '__kind') {
            eventParams[key] = value
        }
    }

    // Step 4: Query runtime metadata to find the event type definition
    // The runtime metadata contains type information for all pallets and their events
    const eventTypeIndex = runtime.description.event
    const eventType = runtime.description.types[eventTypeIndex] as VariantType | undefined

    // Step 5: Find the specific pallet variant in the event type definition
    // Each pallet has its own variant in the global event enum
    const palletVariant = eventType?.variants?.find((v) => v.name === palletName)
    if (!palletVariant || !palletVariant.fields || palletVariant.fields.length === 0) {
        // Fallback: If pallet metadata is missing, transform params to snake_case and return
        // This handles cases where metadata may be incomplete or outdated
        const result: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(eventParams)) {
            result[key] = toSnakeCaseDeep(value, runtime)
        }
        return asEvent(palletName, eventName, result)
    }

    // Step 6: Navigate to the pallet's event type definition
    // The pallet variant contains a field pointing to the pallet's event enum type
    const palletEventsTypeIndex = palletVariant.fields[0].type
    const palletEventsType = runtime.description.types[palletEventsTypeIndex] as VariantType | undefined

    // Step 7: Find the specific event variant within the pallet's events
    // This gives us the field definitions for this particular event
    const specificEvent = palletEventsType?.variants?.find((v) => v.name === eventName)
    if (!specificEvent || !specificEvent.fields) {
        // Fallback: If event metadata is missing, transform params to snake_case and return
        // This handles new events that may not be in the metadata yet
        const result: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(eventParams)) {
            result[key] = toSnakeCaseDeep(value, runtime)
        }
        return asEvent(palletName, eventName, result)
    }

    // Step 8: Determine output format based on field metadata
    // Check if typeNames contain duplicates to decide between positional array or named object
    // Example with duplicates: [T::AccountId, T::AccountId, Balance] → use array format
    // Example without duplicates: [T::AccountId, CollectionId, TokenId] → use object format
    const types = specificEvent.fields.filter((f) => f.typeName).map((f) => f.typeName)
    const hasDuplicateTypes = new Set(types).size !== types.length

    if (hasDuplicateTypes) {
        // Format 1: Positional arguments (array)
        // Used when field types are ambiguous (duplicates) - order matters, names don't
        // Example: [accountId1_bytes, accountId2_bytes, amount]
        const transformedArgs: unknown[] = []
        const paramValues = Object.values(eventParams)

        for (let i = 0; i < specificEvent.fields.length; i++) {
            const value = paramValues[i]
            const fieldTypeIndex = specificEvent.fields[i].type
            transformedArgs.push(toSnakeCaseDeep(value, runtime, fieldTypeIndex))
        }

        return asEvent(palletName, eventName, transformedArgs)
    } else {
        // Format 2: Named arguments (object)
        // Used when field types are unique - names provide clarity
        // Example: { "T::AccountId": accountId_bytes, "CollectionId": collection_id_bytes }
        const transformedArgs: Record<string, unknown> = {}
        for (const field of specificEvent.fields) {
            const fieldName = field.name
            if (!fieldName) continue

            const value = eventParams[fieldName]

            // Prefer typeName from metadata for semantic clarity, fall back to snake_cased field name
            // typeName examples: "T::AccountId", "CollectionId", "Balance"
            // field name examples: "who", "collectionId", "amount"
            const key = field.typeName || toSnakeCaseKey(fieldName)
            transformedArgs[key] = toSnakeCaseDeep(value, runtime, field.type)
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
