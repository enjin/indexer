import { Runtime } from '@subsquid/substrate-runtime'

interface VariantValue {
    __kind: string
    value?: unknown
}

interface ModuleErrorValue {
    index: number
    error: unknown
}

function isVariantValue(value: unknown): value is VariantValue {
    return (
        typeof value === 'object' &&
        value !== null &&
        '__kind' in value &&
        typeof (value as VariantValue).__kind === 'string'
    )
}

function isModuleErrorValue(value: unknown): value is ModuleErrorValue {
    return (
        typeof value === 'object' &&
        value !== null &&
        'index' in value &&
        typeof (value as ModuleErrorValue).index === 'number'
    )
}

// The error payload of `DispatchError::Module` is a 4-byte SCALE array whose first byte is the
// error variant index ("0x01000000" -> 1); runtimes older than metadata V14 emitted a plain number.
function moduleErrorVariantIndex(error: unknown): number | null {
    if (typeof error === 'number') {
        return error
    }

    if (typeof error === 'string' && /^0x[0-9a-fA-F]{2,}$/.test(error)) {
        return parseInt(error.slice(2, 4), 16)
    }

    return null
}

function moduleErrorName(runtime: Runtime, module: ModuleErrorValue): string | null {
    const { metadata } = runtime
    if (metadata.__kind !== 'V14') {
        return null
    }

    const pallet = metadata.value.pallets.find((p) => p.index === module.index)
    if (!pallet) {
        return null
    }

    const variantIndex = moduleErrorVariantIndex(module.error)
    if (variantIndex === null || !pallet.errors) {
        return null
    }

    const errorType = metadata.value.lookup.types.find((t) => t.id === pallet.errors?.type)
    if (!errorType || errorType.type.def.__kind !== 'Variant') {
        return null
    }

    const variant = errorType.type.def.value.variants.find((v) => v.index === variantIndex)

    return variant ? `${pallet.name}.${variant.name}` : null
}

/**
 * Render the decoded `DispatchError` of a failed extrinsic (or failed batch item) as a
 * human-readable string instead of its raw JSON shape:
 *
 * - `Module {index, error}` -> `"MultiTokens.NoPermission"` (pallet + error variant resolved
 *   from the runtime metadata of the block's spec version; falls back to
 *   `"Module(index=40, error=0x04000000)"` when the metadata cannot resolve it)
 * - one-level variants -> `"Token.FundsUnavailable"`, `"Arithmetic.Overflow"`
 * - value-less kinds -> `"BadOrigin"`, `"CannotLookup"`, ...
 * - anything unrecognized -> its JSON representation, so no information is ever lost
 *
 * Returns null only for a null/undefined input.
 */
export function readableDispatchError(error: unknown, runtime: Runtime): string | null {
    if (error === null || error === undefined) {
        return null
    }

    if (typeof error === 'string') {
        return error
    }

    if (!isVariantValue(error)) {
        return JSON.stringify(error)
    }

    const { __kind: kind, value } = error

    if (kind === 'Module' && isModuleErrorValue(value)) {
        return (
            moduleErrorName(runtime, value) ??
            `Module(index=${value.index}, error=${typeof value.error === 'string' ? value.error : JSON.stringify(value.error)})`
        )
    }

    if (isVariantValue(value)) {
        return `${kind}.${value.__kind}`
    }

    if (value === null || value === undefined) {
        return kind
    }

    return `${kind}.${typeof value === 'string' ? value : JSON.stringify(value)}`
}
