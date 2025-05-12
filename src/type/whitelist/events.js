'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.whitelistedCallDispatched = exports.whitelistedCallRemoved = exports.callWhitelisted = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
exports.callWhitelisted = {
    name: 'Whitelist.CallWhitelisted',
    enjinV100: new support_1.EventType(
        'Whitelist.CallWhitelisted',
        support_1.sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}
exports.whitelistedCallRemoved = {
    name: 'Whitelist.WhitelistedCallRemoved',
    enjinV100: new support_1.EventType(
        'Whitelist.WhitelistedCallRemoved',
        support_1.sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}
exports.whitelistedCallDispatched = {
    name: 'Whitelist.WhitelistedCallDispatched',
    enjinV100: new support_1.EventType(
        'Whitelist.WhitelistedCallDispatched',
        support_1.sts.struct({
            callHash: enjinV100.H256,
            result: support_1.sts.result(
                function () {
                    return enjinV100.PostDispatchInfo
                },
                function () {
                    return enjinV100.DispatchErrorWithPostInfo
                }
            ),
        })
    ),
    enjinV101: new support_1.EventType(
        'Whitelist.WhitelistedCallDispatched',
        support_1.sts.struct({
            callHash: enjinV101.H256,
            result: support_1.sts.result(
                function () {
                    return enjinV101.PostDispatchInfo
                },
                function () {
                    return enjinV101.DispatchErrorWithPostInfo
                }
            ),
        })
    ),
    v100: new support_1.EventType(
        'Whitelist.WhitelistedCallDispatched',
        support_1.sts.struct({
            callHash: v100.H256,
            result: support_1.sts.result(
                function () {
                    return v100.PostDispatchInfo
                },
                function () {
                    return v100.DispatchErrorWithPostInfo
                }
            ),
        })
    ),
    v104: new support_1.EventType(
        'Whitelist.WhitelistedCallDispatched',
        support_1.sts.struct({
            callHash: v104.H256,
            result: support_1.sts.result(
                function () {
                    return v104.PostDispatchInfo
                },
                function () {
                    return v104.DispatchErrorWithPostInfo
                }
            ),
        })
    ),
    v105: new support_1.EventType(
        'Whitelist.WhitelistedCallDispatched',
        support_1.sts.struct({
            callHash: v105.H256,
            result: support_1.sts.result(
                function () {
                    return v105.PostDispatchInfo
                },
                function () {
                    return v105.DispatchErrorWithPostInfo
                }
            ),
        })
    ),
}
