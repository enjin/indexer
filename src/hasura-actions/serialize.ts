export function serializeSquidResult(value: unknown): unknown {
    return JSON.parse(
        JSON.stringify(value, (_key, v) => {
            if (typeof v === 'bigint') {
                return v.toString()
            }
            if (v instanceof Date) {
                return v.toISOString()
            }
            if (Buffer.isBuffer(v)) {
                return v.toString('hex')
            }
            return v
        })
    )
}
