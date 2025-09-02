import * as ss58 from '@subsquid/ss58'
import { decode } from '@subsquid/ss58'
import { isHex, stringToHex } from '@polkadot/util'
import { HexString } from '@polkadot/util/types'
import config from '~/util/config'
import { createHash } from 'crypto'

export function isMainnet(): boolean {
    return ['enjin-relaychain', 'enjin-matrixchain'].includes(config.chainName)
}

export function isRelay(): boolean {
    return ['enjin-relaychain', 'canary-relaychain'].includes(config.chainName)
}

export function isValidAddress(address: string): boolean {
    try {
        encodeAddress(isHex(address) ? address : decodeAddress(address))
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

export function getEventCacheKey(data: Record<string, unknown>): string {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { extrinsic, ...rest } = data
    const json = safeJsonString(rest)
    const hash = createHash('md5').update(json).digest('hex')

    return `${config.chainName}.events:${hash}`
}
