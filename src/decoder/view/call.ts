import type { CallParts } from './types'

const isRecord = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)

export function parseCallData(calls: unknown): CallParts | null {
    if (!isRecord(calls)) return null
    const pallet = Object.keys(calls)[0]
    if (!pallet) return null
    const palletValue = calls[pallet]
    if (!isRecord(palletValue)) {
        return { pallet, method: '', params: {} }
    }
    const method = Object.keys(palletValue)[0]
    if (!method) return { pallet, method: '', params: {} }
    const params = palletValue[method]
    return {
        pallet,
        method,
        params: isRecord(params) ? params : {},
    }
}

export function getCallId(call: CallParts): string {
    return `${call.pallet}::${call.method}`
}

export function getArg(params: Record<string, unknown>, path: string, defaultValue?: unknown): unknown {
    const parts = path.split('.')
    let current: unknown = params
    for (const part of parts) {
        if (current === null || current === undefined) return defaultValue
        if (Array.isArray(current)) {
            const index = Number(part)
            if (!Number.isInteger(index) || index < 0 || index >= current.length) return defaultValue
            current = current[index]
            continue
        }
        if (!isRecord(current) || !(part in current)) return defaultValue
        current = current[part]
    }
    return current === undefined ? defaultValue : current
}

export function displayValue(value: unknown): string {
    const stringify = (v: unknown): string => {
        try {
            return JSON.stringify(v, (_k, val) => (typeof val === 'bigint' ? val.toString() : val))
        } catch {
            return String(v)
        }
    }

    if (value === null || value === undefined) return ''

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return String(value)
    }
    if (typeof value === 'bigint') return value.toString()
    if (Array.isArray(value)) {
        if (value.length > 0 && value.every((v): v is number => typeof v === 'number')) {
            return '0x' + Buffer.from(value).toString('hex')
        }
        return stringify(value)
    }
    if (isRecord(value)) return stringify(value)
    return stringify(value)
}

const FUEL_TANK_CALLS = new Set(['FuelTanks::dispatch', 'FuelTanks::dispatch_and_touch'])

export function getDispatchCall(call: CallParts): CallParts {
    if (!FUEL_TANK_CALLS.has(getCallId(call))) return call
    const inner = getArg(call.params, 'call')
    const parsed = parseCallData(inner)
    return parsed ?? call
}

export function getBatchedCalls(call: CallParts): CallParts[] {
    const calls = getArg(call.params, 'calls', [])
    if (!Array.isArray(calls)) return []
    return calls.map((c) => parseCallData(c)).filter((c): c is CallParts => c !== null)
}
