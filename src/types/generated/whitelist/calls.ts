import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v101 from '../v101'
import * as v102 from '../v102'
import * as v103 from '../v103'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as v106 from '../v106'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as enjinV1022 from '../enjinV1022'
import * as v1022 from '../v1022'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as v1050 from '../v1050'

export const whitelistCall =  {
    name: 'Whitelist.whitelist_call',
    enjinV100: new CallType(
        'Whitelist.whitelist_call',
        sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}

export const removeWhitelistedCall =  {
    name: 'Whitelist.remove_whitelisted_call',
    enjinV100: new CallType(
        'Whitelist.remove_whitelisted_call',
        sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}

export const dispatchWhitelistedCall =  {
    name: 'Whitelist.dispatch_whitelisted_call',
    enjinV100: new CallType(
        'Whitelist.dispatch_whitelisted_call',
        sts.struct({
            callHash: enjinV100.H256,
            callEncodedLen: sts.number(),
            callWeightWitness: enjinV100.Weight,
        })
    ),
}

export const dispatchWhitelistedCallWithPreimage =  {
    name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
    enjinV100: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV100.Call,
        })
    ),
    enjinV101: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV101.Call,
        })
    ),
    enjinV110: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV110.Call,
        })
    ),
    enjinV120: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV120.Call,
        })
    ),
    enjinV1021: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV1021.Call,
        })
    ),
    enjinV1022: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV1022.Call,
        })
    ),
    enjinV1023: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    enjinV1026: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV1026.Call,
        })
    ),
    enjinV1032: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: enjinV1032.Call,
        })
    ),
    v100: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v100.Call,
        })
    ),
    v101: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v101.Call,
        })
    ),
    v102: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v102.Call,
        })
    ),
    v103: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v103.Call,
        })
    ),
    v104: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v104.Call,
        })
    ),
    v105: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v105.Call,
        })
    ),
    v106: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v106.Call,
        })
    ),
    v110: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v110.Call,
        })
    ),
    v120: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v120.Call,
        })
    ),
    v1021: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1021.Call,
        })
    ),
    v1022: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1022.Call,
        })
    ),
    v1023: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1026: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1026.Call,
        })
    ),
    v1030: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1030.Call,
        })
    ),
    v1031: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1031.Call,
        })
    ),
    v1032: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1032.Call,
        })
    ),
    v1050: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1050.Call,
        })
    ),
}
