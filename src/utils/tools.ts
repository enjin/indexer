import * as ss58 from '@subsquid/ss58'
import { decodeAddress, encodeAddress } from '@polkadot/keyring'
import { hexToU8a, isHex, stringToHex } from '@polkadot/util'
import config from '../config'

export function isMainnet(): boolean {
    return config.chainName === 'enjin-matrix'
}

export function isValidAddress(address: string): boolean {
    try {
        encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address))
        return true
    } catch {
        return false
    }
}

export function encodeId(id: Uint8Array | string) {
    return ss58.codec(config.prefix).encode(id)
}

export function decodeId(id: string) {
    return ss58.codec(config.prefix).decode(id)
}

export interface ItemBase {
    id: string
    timestamp: Date | null | undefined
    blockNumber: bigint | null | undefined
    extrinsicHash: string | null | undefined
}

export function isAddressSS58(address: Uint8Array): boolean {
    switch (address.length) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 32:
        case 33:
            return true
        default:
            return false
    }
}

const regex = /\/\/u0000/ // null string unicode

// eslint-disable-next-line no-control-regex
const regex2 = /\u0000/ // null byte unicode

export function safeString(s: string): string {
    if (regex.test(s) || regex2.test(s)) {
        return stringToHex(s)
    }
    return s
}

export function safeJson(data: Record<string, unknown>): Record<string, unknown> {
    return JSON.parse(JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value)))
}

export function safeJsonString(data: Record<string, unknown>): string {
    return JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
}
