import { TransactionViewBuilder } from '../builder'
import { displayValue } from '../call'
import type { CallParts, ViewBuilderFn } from '../types'

const MAX_PARAMETER_DEPTH = 8
const ACRONYMS = new Map([
    ['enj', 'ENJ'],
    ['id', 'ID'],
    ['ids', 'IDs'],
    ['ipfs', 'IPFS'],
    ['nft', 'NFT'],
    ['nfts', 'NFTs'],
    ['url', 'URL'],
    ['xcm', 'XCM'],
])

function humanizeIdentifier(identifier: string): string {
    return identifier
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => ACRONYMS.get(word.toLowerCase()) ?? `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(' ')
}

function getGenericTitle(call: CallParts): string {
    const pallet = humanizeIdentifier(call.pallet)
    const method = humanizeIdentifier(call.method)

    if (pallet && method) return `${pallet}: ${method}`
    return method || pallet || 'Transaction Request'
}

function getFieldTitle(path: string[]): string {
    return path.map((part) => (/^\d+$/.test(part) ? `#${part}` : humanizeIdentifier(part))).join(' · ')
}

function addParameter(
    builder: TransactionViewBuilder,
    value: unknown,
    path: string[],
    seen: Set<object>,
    depth = 0
): void {
    const title = getFieldTitle(path)

    if (value === null) {
        builder.withText(title, 'None')
        return
    }
    if (value === undefined) {
        builder.withText(title, 'Not provided')
        return
    }
    if (typeof value !== 'object') {
        builder.withText(title, displayValue(value))
        return
    }
    if (seen.has(value)) {
        builder.withText(title, '[Circular]')
        return
    }
    if (depth >= MAX_PARAMETER_DEPTH) {
        builder.withText(title, displayValue(value))
        return
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            builder.withText(title, '[]')
            return
        }
        if (value.every((item) => typeof item === 'number')) {
            builder.withText(title, displayValue(value))
            return
        }

        seen.add(value)
        value.forEach((item, index) => {
            addParameter(builder, item, [...path, String(index + 1)], seen, depth + 1)
        })
        seen.delete(value)
        return
    }

    const entries = Object.entries(value)
    if (entries.length === 0) {
        builder.withText(title, '{}')
        return
    }

    seen.add(value)
    entries.forEach(([key, item]) => {
        addParameter(builder, item, [...path, key], seen, depth + 1)
    })
    seen.delete(value)
}

export const buildGenericView: ViewBuilderFn = ({ call, network }) => {
    const builder = TransactionViewBuilder.create(getGenericTitle(call)).withNetwork(network)

    Object.entries(call.params).forEach(([key, value]) => {
        addParameter(builder, value, [key], new Set())
    })

    return builder.build()
}
