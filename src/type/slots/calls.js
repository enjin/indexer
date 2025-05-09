'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.triggerOnboard = exports.clearAllLeases = exports.forceLease = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.forceLease = {
    name: 'Slots.force_lease',
    /**
     * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
     * independently of any other on-chain mechanism to use it.
     *
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    enjinV100: new support_1.CallType(
        'Slots.force_lease',
        support_1.sts.struct({
            para: enjinV100.Id,
            leaser: enjinV100.AccountId32,
            amount: support_1.sts.bigint(),
            periodBegin: support_1.sts.number(),
            periodCount: support_1.sts.number(),
        })
    ),
}
exports.clearAllLeases = {
    name: 'Slots.clear_all_leases',
    /**
     * Clear all leases for a Para Id, refunding any deposits back to the original owners.
     *
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    enjinV100: new support_1.CallType(
        'Slots.clear_all_leases',
        support_1.sts.struct({
            para: enjinV100.Id,
        })
    ),
}
exports.triggerOnboard = {
    name: 'Slots.trigger_onboard',
    /**
     * Try to onboard a parachain that has a lease for the current lease period.
     *
     * This function can be useful if there was some state issue with a para that should
     * have onboarded, but was unable to. As long as they have a lease period, we can
     * let them onboard from here.
     *
     * Origin must be signed, but can be called by anyone.
     */
    enjinV100: new support_1.CallType(
        'Slots.trigger_onboard',
        support_1.sts.struct({
            para: enjinV100.Id,
        })
    ),
}
