'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.dispatchWhitelistedCallWithPreimage =
    exports.dispatchWhitelistedCall =
    exports.removeWhitelistedCall =
    exports.whitelistCall =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v101 = require('../v101')
var v102 = require('../v102')
var v103 = require('../v103')
var v104 = require('../v104')
var v105 = require('../v105')
var v106 = require('../v106')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var enjinV1022 = require('../enjinV1022')
var v1022 = require('../v1022')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
var v1030 = require('../v1030')
var v1031 = require('../v1031')
var enjinV1032 = require('../enjinV1032')
var v1032 = require('../v1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.whitelistCall = {
    name: 'Whitelist.whitelist_call',
    enjinV100: new support_1.CallType(
        'Whitelist.whitelist_call',
        support_1.sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}
exports.removeWhitelistedCall = {
    name: 'Whitelist.remove_whitelisted_call',
    enjinV100: new support_1.CallType(
        'Whitelist.remove_whitelisted_call',
        support_1.sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}
exports.dispatchWhitelistedCall = {
    name: 'Whitelist.dispatch_whitelisted_call',
    enjinV100: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call',
        support_1.sts.struct({
            callHash: enjinV100.H256,
            callEncodedLen: support_1.sts.number(),
            callWeightWitness: enjinV100.Weight,
        })
    ),
}
exports.dispatchWhitelistedCallWithPreimage = {
    name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
    enjinV100: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV100.Call,
        })
    ),
    enjinV101: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV101.Call,
        })
    ),
    enjinV110: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV110.Call,
        })
    ),
    enjinV120: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV120.Call,
        })
    ),
    enjinV1021: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV1021.Call,
        })
    ),
    enjinV1022: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV1022.Call,
        })
    ),
    enjinV1023: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    enjinV1026: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV1026.Call,
        })
    ),
    enjinV1032: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV1032.Call,
        })
    ),
    enjinV1050: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: enjinV1050.Call,
        })
    ),
    v100: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v100.Call,
        })
    ),
    v101: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v101.Call,
        })
    ),
    v102: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v102.Call,
        })
    ),
    v103: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v103.Call,
        })
    ),
    v104: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v104.Call,
        })
    ),
    v105: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v105.Call,
        })
    ),
    v106: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v106.Call,
        })
    ),
    v110: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v110.Call,
        })
    ),
    v120: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v120.Call,
        })
    ),
    v1021: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1021.Call,
        })
    ),
    v1022: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1022.Call,
        })
    ),
    v1023: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1026: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1026.Call,
        })
    ),
    v1030: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1030.Call,
        })
    ),
    v1031: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1031.Call,
        })
    ),
    v1032: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1032.Call,
        })
    ),
    v1050: new support_1.CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        support_1.sts.struct({
            call: v1050.Call,
        })
    ),
}
