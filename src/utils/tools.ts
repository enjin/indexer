import * as ss58 from '@subsquid/ss58'
import { decode } from '@subsquid/ss58'
import { stringToHex } from '@polkadot/util'
import { HexString } from '@polkadot/util/types'
import config from './config'

export function specToChain(specName: string): string {
    switch (specName) {
        case 'matrix-enjin':
            return 'matrix-enjin'
        default:
            return 'enjin'
    }
}

export function isMainnet(): boolean {
    return ['enjin-relay', 'enjin-matrix'].includes(config.chainName)
}

export function isRelay(): boolean {
    return ['enjin-relay', 'canary-relay'].includes(config.chainName)
}

export function isValidAddress(address: string): boolean {
    try {
        const decoded = ss58.decode(address)
        ss58.encode(decoded)

        return true
    } catch {
        return false
    }
}

export function encodeAddress(id: Uint8Array | string) {
    return ss58.codec(config.prefix).encode(id)
}

export function decodeAddress(id: string): HexString {
    return <`0x${string}`>decode(id).bytes
}

// eslint-disable-next-line no-control-regex
const regex2 = /\u0000/ // null byte unicode
const regex = /\/\/u0000/ // null string unicode

export function safeString(s: string): string {
    if (regex.test(s) || regex2.test(s)) {
        return stringToHex(s)
    }
    return s
}

export function safeJsonObject(data: Record<string, unknown>): Record<string, unknown> {
    return JSON.parse(JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value)))
}

export function safeJsonString(data: Record<string, unknown>): string {
    return JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
}
