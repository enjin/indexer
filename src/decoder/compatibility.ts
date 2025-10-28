/**
 * Compatibility layer to transform new decoder output to match platform-decoder format
 */

import type { Runtime, Extrinsic, DecodedEvent } from '@subsquid/substrate-runtime'
import { decodeHex, isHex } from '@subsquid/util-internal-hex'

// Type definitions for runtime-specific structures
interface AddressOrSignature {
    __kind: string
    value: string
}

interface MortalityVariant {
    __kind: string
    value?: number
}

interface SignedExtensionsData {
    checkMortality?: unknown
    checkNonce?: number
    chargeTransactionPayment?: string
    checkMetadataHash?: { mode?: { __kind: string } }
}

interface CallData {
    __kind: string
    value?: unknown
}

interface TypeVariant {
    name: string
    fields?: Array<{ type: number; name?: string; typeName?: string }>
}

interface RuntimeType {
    variants?: TypeVariant[]
}

// Utility functions
const strip0x = (s: string): string => (s.startsWith('0x') ? s.slice(2) : s)

const toBytes = (hex: string): number[] => Array.from(decodeHex(hex))

const isRecord = (v: unknown): v is Record<string, unknown> =>
    !!v && typeof v === 'object' && !Array.isArray(v)

const hasKind = (v: unknown): v is { __kind: string } & Record<string, unknown> =>
    isRecord(v) && typeof v.__kind === 'string'

const toSnakeCaseKey = (s: string): string => s.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)

const toSnakeCaseShallow = (obj: unknown): unknown => {
    if (!isRecord(obj)) return obj
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj)) {
        out[k === '__kind' ? k : toSnakeCaseKey(k)] = v
    }
    return out
}

const asEvent = (pallet: string, name: string, args: unknown) => ({ [pallet]: { [name]: args } })

const kindHexToBytes = (input: unknown): { [k: string]: number[] } => {
    const typed = input as AddressOrSignature
    if (!typed.__kind || !typed.value) return {}
    return { [typed.__kind]: toBytes(typed.value) }
}

function parseEra(checkMortality: unknown): {
    period: number
    phase: number
} | null {
    const mortality = checkMortality as MortalityVariant
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

    // Calculate period from encoded value
    // Period is 2^encoded
    const period = 1 << encoded

    return { period, phase }
}

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

function transformCall(call: unknown): Record<string, unknown> {
    if (!hasKind(call)) return {}
    const { __kind: palletName, value } = call

    if (value && typeof value === 'object' && '__kind' in value) {
        const kindedValue = value as { __kind: string } & Record<string, unknown>
        const { __kind: callName, ...params } = kindedValue
        return { [palletName]: { [callName]: toSnakeCaseShallow(params) } }
    }

    return { [palletName]: (value ?? {}) as Record<string, unknown> }
}

function accountIdToByteArray(value: unknown): unknown {
    if (isHex(value)) return toBytes(value)
    if (value && typeof value === 'object' && '__kind' in value) {
        const kindedValue = value as { __kind: string; value?: unknown }
        if (isHex(kindedValue.value)) return toBytes(kindedValue.value)
    }
    return value
}

function transformArgumentValue(typeName: string, value: unknown): unknown {
    if (/(^|[^A-Za-z])(AccountId|AccountId32|AccountId20|H160|H256)([^A-Za-z]|$)/.test(typeName)) {
        return accountIdToByteArray(value)
    }

    if (value === null || value === undefined) {
        return value
    }

    if (Array.isArray(value)) {
        return value.map((v) => transformArgumentValue(typeName, v))
    }

    if (typeof value === 'object' && '__kind' in value) {
        const variant = value as CallData & Record<string, unknown>
        const kindVal = variant.__kind
        const rest = Object.entries(variant).filter(([k]) => k !== '__kind')

        if (rest.length === 0) {
            return kindVal
        }

        const transformed: Record<string, unknown> = {}
        for (const [k, v] of rest) {
            transformed[k] = transformArgumentValue(typeName, v)
        }

        if ('value' in transformed && Object.keys(transformed).length === 1) {
            return transformArgumentValue(typeName, transformed.value)
        }

        return transformed
    }

    if (typeof value === 'object') {
        const transformed: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(value)) {
            transformed[k] = transformArgumentValue(typeName, v)
        }
        return transformed
    }

    return value
}

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
            result[key] = transformArgumentValue('', value)
        }
        return asEvent(palletName, eventName, result)
    }

    const palletEventsTypeIndex = palletVariant.fields[0].type
    const palletEventsType = runtime.description.types[palletEventsTypeIndex] as RuntimeType

    const specificEvent = palletEventsType.variants?.find((v) => v.name === eventName)
    if (!specificEvent || !specificEvent.fields) {
        const result: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(eventParams)) {
            result[key] = transformArgumentValue('', value)
        }
        return asEvent(palletName, eventName, result)
    }

    const isNamed = specificEvent.fields.some((f: { name?: string }) => f.name !== undefined)

    if (isNamed) {
        const transformedArgs: Record<string, unknown> = {}
        for (const field of specificEvent.fields) {
            const fieldName = field.name
            if (!fieldName) continue

            const typeName = field.typeName || ''
            const value = eventParams[fieldName]
            const key = toSnakeCaseKey(fieldName)

            transformedArgs[key] = transformArgumentValue(typeName, value)
        }

        return asEvent(palletName, eventName, transformedArgs)
    } else {
        const transformedArgs: unknown[] = []
        const paramValues = Object.values(eventParams)

        for (let i = 0; i < specificEvent.fields.length; i++) {
            const field = specificEvent.fields[i]
            const typeName = field.typeName || ''
            const value = paramValues[i]

            transformedArgs.push(transformArgumentValue(typeName, value))
        }

        return asEvent(palletName, eventName, transformedArgs)
    }
}

export function transformExtrinsic(decoded: Extrinsic & { hash: string; extrinsic_hash: string }): unknown {
    const result: Record<string, unknown> = {
        hash: strip0x(decoded.hash),
        version: decoded.version,
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
