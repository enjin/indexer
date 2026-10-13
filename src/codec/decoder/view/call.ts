import type { CallParts, TextField, TransactionView } from './types'

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

const WRAPPER_CALLS = new Set([
    'FuelTanks::dispatch',
    'FuelTanks::dispatch_and_touch',
    'Proxy::proxy',
    'Proxy::proxy_announced',
])
const MAX_WRAPPER_DEPTH = 16

export function unwrapDispatchCall(call: CallParts): { call: CallParts; wrappers: CallParts[] } {
    let current = call
    const wrappers: CallParts[] = []

    for (let depth = 0; depth < MAX_WRAPPER_DEPTH; depth++) {
        if (!WRAPPER_CALLS.has(getCallId(current))) return { call: current, wrappers }

        const parsed = parseCallData(getArg(current.params, 'call'))
        if (!parsed) return { call: current, wrappers }
        wrappers.push(current)
        current = parsed
    }

    return { call: current, wrappers }
}

export function getDispatchCall(call: CallParts): CallParts {
    return unwrapDispatchCall(call).call
}

function proxyAccount(value: unknown): unknown {
    if (!isRecord(value)) return value
    if ('Id' in value) return value.Id
    if (value.__kind === 'Id' && 'value' in value) return value.value
    return value
}

export function withWrapperContext(view: TransactionView, wrappers: CallParts[]): TransactionView {
    const fields: TextField[] = []

    for (const wrapper of wrappers) {
        if (wrapper.pallet !== 'Proxy') continue

        const real = getArg(wrapper.params, 'real')
        const proxyType = getArg(wrapper.params, 'force_proxy_type')
        const delegate = getArg(wrapper.params, 'delegate')
        if (real !== undefined)
            fields.push({ type: 'text', title: 'Proxy Real', value: displayValue(proxyAccount(real)) })
        if (proxyType !== undefined) {
            fields.push({ type: 'text', title: 'Proxy Type', value: displayValue(proxyType) })
        }
        if (delegate !== undefined) {
            fields.push({ type: 'text', title: 'Proxy Delegate', value: displayValue(proxyAccount(delegate)) })
        }
    }

    if (!fields.length) return view

    const networkIndex = view.fields.findIndex((field) => field.type === 'text' && field.title === 'Network')
    if (networkIndex === -1) return { ...view, fields: [...fields, ...view.fields] }

    return {
        ...view,
        fields: [...view.fields.slice(0, networkIndex + 1), ...fields, ...view.fields.slice(networkIndex + 1)],
    }
}

export function getBatchedCalls(call: CallParts): CallParts[] {
    const calls = getArg(call.params, 'calls', [])
    if (!Array.isArray(calls)) return []
    return calls.map((c) => parseCallData(c)).filter((c): c is CallParts => c !== null)
}
