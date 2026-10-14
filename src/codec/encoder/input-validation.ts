import { TypeKind, type Field, type Ti, type Type } from '@subsquid/scale-codec'
import type { EncodeCallInput } from './types'

const MAX_INPUT_DEPTH = 64
const MAX_INPUT_ITEMS = 10_000

export class EncoderInputError extends Error {}

interface InputBudget {
    items: number
}

function inspectInput(value: unknown, path: string, depth: number, budget: InputBudget): void {
    if (depth > MAX_INPUT_DEPTH || ++budget.items > MAX_INPUT_ITEMS) {
        throw new EncoderInputError('Encode input exceeds the depth or item limit')
    }
    if (typeof value === 'number' && !Number.isSafeInteger(value)) {
        throw new EncoderInputError(`"${path}" must be a safe integer; use a decimal string for large integers`)
    }
    if (value && typeof value === 'object') {
        for (const [key, item] of Object.entries(value)) {
            inspectInput(item, `${path}.${key}`, depth + 1, budget)
        }
    }
}

function inspectCall(input: EncodeCallInput, label: string, budget: InputBudget): void {
    const args: unknown = input.args
    if (args !== undefined) {
        if (args === null || typeof args !== 'object' || Array.isArray(args)) {
            throw new EncoderInputError(`"${label}.args" must be an object`)
        }
        if (Object.prototype.hasOwnProperty.call(args, '__kind')) {
            throw new EncoderInputError(`"${label}.args.__kind" is reserved; use "${label}.name" to select the call`)
        }
    }
    inspectInput(args, `${label}.args`, 0, budget)
}

export function assertEncodeCallInput(input: EncodeCallInput, label = 'call'): void {
    inspectCall(input, label, { items: 0 })
}

export function assertEncodeCallInputs(inputs: EncodeCallInput[]): void {
    const budget = { items: 0 }
    for (const [index, input] of inputs.entries()) inspectCall(input, `calls[${index}]`, budget)
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function checkKeys(value: Record<string, unknown>, allowed: string[], path: string): void {
    for (const key of Object.keys(value)) {
        if (!allowed.includes(key)) throw new Error(`Unknown encode argument "${path}.${key}"`)
    }
}

/** Check the same metadata shapes consumed by JsonCodec, without dropping unrecognized fields. */
export function assertMetadataArguments(types: Type[], type: Ti, value: unknown, path = 'call'): void {
    const def = types[type]
    function fields(items: Field[], input: unknown, label: string, variant = false): void {
        if (items.length > 0 && items[0].name !== undefined) {
            if (!isRecord(input)) return // JsonCodec reports missing or malformed required fields.
            checkKeys(input, [...items.map((field) => field.name as string), ...(variant ? ['__kind'] : [])], label)
            for (const field of items) {
                const name = field.name as string
                assertMetadataArguments(types, field.type, input[name], `${label}.${name}`)
            }
        } else {
            if (!Array.isArray(input)) return
            for (const [index, field] of items.entries()) {
                assertMetadataArguments(types, field.type, input[index], `${label}[${index}]`)
            }
        }
    }
    switch (def.kind) {
        case TypeKind.Composite:
            fields(def.fields, value, path)
            break
        case TypeKind.Variant: {
            if (!isRecord(value)) return
            const variant = def.variants.find((item) => item.name === value.__kind)
            if (!variant) return // JsonCodec rejects an unknown variant.
            if (variant.fields.length === 0) {
                checkKeys(value, ['__kind'], path)
            } else if (variant.fields[0].name === undefined) {
                checkKeys(value, ['__kind', 'value'], path)
                if (variant.fields.length === 1) {
                    assertMetadataArguments(types, variant.fields[0].type, value.value, `${path}.value`)
                } else {
                    fields(variant.fields, value.value, `${path}.value`)
                }
            } else {
                fields(variant.fields, value, path, true)
            }
            break
        }
        case TypeKind.Option:
            if (value !== undefined && value !== null) assertMetadataArguments(types, def.type, value, path)
            break
        case TypeKind.Tuple:
            if (Array.isArray(value)) {
                for (const [index, item] of def.tuple.entries()) {
                    assertMetadataArguments(types, item, value[index], `${path}[${index}]`)
                }
            }
            break
        case TypeKind.Array:
        case TypeKind.Sequence:
            if (Array.isArray(value)) {
                for (const [index, item] of value.entries()) {
                    assertMetadataArguments(types, def.type, item, `${path}[${index}]`)
                }
            }
            break
        default:
            break
    }
}
