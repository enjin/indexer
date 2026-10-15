// Runtime JSON may contain bigints and byte arrays, neither of which JSONB accepts directly.
export function jsonValue(value: unknown): unknown {
    if (typeof value === 'bigint') return value.toString()
    if (value instanceof Uint8Array) return `0x${Buffer.from(value).toString('hex')}`
    if (Array.isArray(value)) return value.map(jsonValue)
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, jsonValue(item)]))
    }
    return value
}
