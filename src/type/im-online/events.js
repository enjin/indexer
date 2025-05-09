'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.someOffline = exports.allGood = exports.heartbeatReceived = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.heartbeatReceived = {
    name: 'ImOnline.HeartbeatReceived',
    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    enjinV100: new support_1.EventType(
        'ImOnline.HeartbeatReceived',
        support_1.sts.struct({
            authorityId: support_1.sts.bytes(),
        })
    ),
}
exports.allGood = {
    name: 'ImOnline.AllGood',
    /**
     * At the end of the session, no offence was committed.
     */
    enjinV100: new support_1.EventType('ImOnline.AllGood', support_1.sts.unit()),
}
exports.someOffline = {
    name: 'ImOnline.SomeOffline',
    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    enjinV100: new support_1.EventType(
        'ImOnline.SomeOffline',
        support_1.sts.struct({
            offline: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [enjinV100.AccountId32, enjinV100.Exposure]
                })
            }),
        })
    ),
}
