'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isMainnet = isMainnet
exports.isRelay = isRelay
exports.isValidAddress = isValidAddress
exports.encodeAddress = encodeAddress
exports.decodeAddress = decodeAddress
exports.safeString = safeString
exports.safeJsonObject = safeJsonObject
exports.safeJsonString = safeJsonString
var ss58 = require('@subsquid/ss58')
var ss58_1 = require('@subsquid/ss58')
var util_1 = require('@polkadot/util')
var config_1 = require('./config')
function isMainnet() {
    return ['enjin-relaychain', 'enjin-matrixchain'].includes(config_1.default.chainName)
}
function isRelay() {
    return ['enjin-relaychain', 'canary-relaychain'].includes(config_1.default.chainName)
}
function isValidAddress(address) {
    try {
        var decoded = ss58.decode(address)
        ss58.encode(decoded)
        return true
    } catch (_a) {
        return false
    }
}
function encodeAddress(id) {
    return ss58.codec(config_1.default.prefix).encode(id)
}
function decodeAddress(id) {
    return (0, ss58_1.decode)(id).bytes
}
// eslint-disable-next-line no-control-regex
var regex2 = /\u0000/ // null byte unicode
var regex = /\/\/u0000/ // null string unicode
function safeString(s) {
    if (regex.test(s) || regex2.test(s)) {
        return (0, util_1.stringToHex)(s)
    }
    return s
}
function safeJsonObject(data) {
    return JSON.parse(
        JSON.stringify(data, function (key, value) {
            return typeof value === 'bigint' ? value.toString() : value
        })
    )
}
function safeJsonString(data) {
    return JSON.stringify(data, function (key, value) {
        return typeof value === 'bigint' ? value.toString() : value
    })
}
