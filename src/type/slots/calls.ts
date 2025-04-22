import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const forceLease = {
    name: 'Slots.force_lease',
    /**
     * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
     * independently of any other on-chain mechanism to use it.
     *
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    enjinV100: new CallType(
        'Slots.force_lease',
        sts.struct({
            para: enjinV100.Id,
            leaser: enjinV100.AccountId32,
            amount: sts.bigint(),
            periodBegin: sts.number(),
            periodCount: sts.number(),
        })
    ),
}

export const clearAllLeases = {
    name: 'Slots.clear_all_leases',
    /**
     * Clear all leases for a Para Id, refunding any deposits back to the original owners.
     *
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    enjinV100: new CallType(
        'Slots.clear_all_leases',
        sts.struct({
            para: enjinV100.Id,
        })
    ),
}

export const triggerOnboard = {
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
    enjinV100: new CallType(
        'Slots.trigger_onboard',
        sts.struct({
            para: enjinV100.Id,
        })
    ),
}
