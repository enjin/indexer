import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
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
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixV601 from '../matrixV601'
import * as matrixV602 from '../matrixV602'
import * as matrixV1000 from '../matrixV1000'
import * as matrixV1003 from '../matrixV1003'
import * as matrixV1004 from '../matrixV1004'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as matrixV1022 from '../matrixV1022'
import * as enjinV1022 from '../enjinV1022'
import * as v1022 from '../v1022'
import * as matrixV1023 from '../matrixV1023'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as matrixV1030 from '../matrixV1030'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const sudo = {
    name: 'Sudo.sudo',
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    matrixV500: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV500.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    matrixV600: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV600.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    matrixV601: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV601.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV602: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV602.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1000: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1000.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1003: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    matrixV1004: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    matrixV1005: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1005.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1010: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1010.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1011: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1011.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1012: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1012.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1020: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1020.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1022: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1022.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1023: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1023.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1030: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: matrixV1030.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV100: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV100.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV101: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV101.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV110: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV110.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV120: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV120.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1021: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV1021.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1022: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV1022.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1023: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    enjinV1026: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV1026.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    enjinV1032: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV1032.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    enjinV1050: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: enjinV1050.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v100: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v100.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v101: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v101.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v102: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v102.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v103: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v103.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v104: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v104.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v105: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v105.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v106: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v106.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v110: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v110.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v120: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v120.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1021: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1021.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1022: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1022.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1023: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    v1026: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1026.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1030: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1030.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1031: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1031.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1032: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1032.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1050: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1050.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1060: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1060.Call,
        })
    ),
}

export const sudoUncheckedWeight = {
    name: 'Sudo.sudo_unchecked_weight',
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    matrixV500: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV500.Call,
            weight: matrixV500.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    matrixV600: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV600.Call,
            weight: matrixV600.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    matrixV601: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV601.Call,
            weight: matrixV601.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV602: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV602.Call,
            weight: matrixV602.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1000: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1000.Call,
            weight: matrixV1000.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1003: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1003.Call,
            weight: matrixV1003.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    matrixV1004: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1004.Call,
            weight: matrixV1004.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    matrixV1005: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1005.Call,
            weight: matrixV1005.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1010: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1010.Call,
            weight: matrixV1010.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1011: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1011.Call,
            weight: matrixV1011.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1012: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1012.Call,
            weight: matrixV1012.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1020: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1020.Call,
            weight: matrixV1020.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1022: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1022.Call,
            weight: matrixV1022.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1023: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1023.Call,
            weight: matrixV1023.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1030: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: matrixV1030.Call,
            weight: matrixV1030.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV100: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV100.Call,
            weight: enjinV100.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV101: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV101.Call,
            weight: enjinV101.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV110: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV110.Call,
            weight: enjinV110.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV120: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV120.Call,
            weight: enjinV120.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1021: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV1021.Call,
            weight: enjinV1021.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1022: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV1022.Call,
            weight: enjinV1022.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1023: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV1023.Call,
            weight: enjinV1023.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    enjinV1026: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV1026.Call,
            weight: enjinV1026.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1032: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV1032.Call,
            weight: enjinV1032.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1050: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: enjinV1050.Call,
            weight: enjinV1050.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    v100: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v100.Call,
            weight: v100.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    v101: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v101.Call,
            weight: v101.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    v102: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v102.Call,
            weight: v102.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    v103: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v103.Call,
            weight: v103.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v104: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v104.Call,
            weight: v104.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v105: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v105.Call,
            weight: v105.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v106: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v106.Call,
            weight: v106.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v110: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v110.Call,
            weight: v110.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v120: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v120.Call,
            weight: v120.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1021: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1021.Call,
            weight: v1021.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1022: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1022.Call,
            weight: v1022.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1023: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1023.Call,
            weight: v1023.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    v1026: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1026.Call,
            weight: v1026.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1030: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1030.Call,
            weight: v1030.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1031: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1031.Call,
            weight: v1031.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1032: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1032.Call,
            weight: v1032.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1050: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1050.Call,
            weight: v1050.Weight,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1060: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1060.Call,
            weight: v1060.Weight,
        })
    ),
}

export const setKey = {
    name: 'Sudo.set_key',
    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    matrixV500: new CallType(
        'Sudo.set_key',
        sts.struct({
            new: matrixV500.MultiAddress,
        })
    ),
}

export const sudoAs = {
    name: 'Sudo.sudo_as',
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    matrixV500: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV500.MultiAddress,
            call: matrixV500.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    matrixV600: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV600.MultiAddress,
            call: matrixV600.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    matrixV601: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV601.MultiAddress,
            call: matrixV601.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV602: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV602.MultiAddress,
            call: matrixV602.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1000: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1000.MultiAddress,
            call: matrixV1000.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1003: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1003.MultiAddress,
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    matrixV1004: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1004.MultiAddress,
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    matrixV1005: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1005.MultiAddress,
            call: matrixV1005.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1010: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1010.MultiAddress,
            call: matrixV1010.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1011: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1011.MultiAddress,
            call: matrixV1011.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1012: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1012.MultiAddress,
            call: matrixV1012.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1020: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1020.MultiAddress,
            call: matrixV1020.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1022: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1022.MultiAddress,
            call: matrixV1022.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1023: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1023.MultiAddress,
            call: matrixV1023.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1030: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: matrixV1030.MultiAddress,
            call: matrixV1030.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV100: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV100.MultiAddress,
            call: enjinV100.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV101: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV101.MultiAddress,
            call: enjinV101.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV110: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV110.MultiAddress,
            call: enjinV110.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV120: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV120.MultiAddress,
            call: enjinV120.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1021: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV1021.MultiAddress,
            call: enjinV1021.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1022: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV1022.MultiAddress,
            call: enjinV1022.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1023: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV1023.MultiAddress,
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    enjinV1026: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV1026.MultiAddress,
            call: enjinV1026.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1032: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV1032.MultiAddress,
            call: enjinV1032.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1050: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: enjinV1050.MultiAddress,
            call: enjinV1050.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v100: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v100.MultiAddress,
            call: v100.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v101: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v101.MultiAddress,
            call: v101.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v102: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v102.MultiAddress,
            call: v102.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    v103: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v103.MultiAddress,
            call: v103.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v104: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v104.MultiAddress,
            call: v104.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v105: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v105.MultiAddress,
            call: v105.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v106: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v106.MultiAddress,
            call: v106.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v110: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v110.MultiAddress,
            call: v110.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v120: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v120.MultiAddress,
            call: v120.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1021: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1021.MultiAddress,
            call: v1021.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1022: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1022.MultiAddress,
            call: v1022.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * ## Complexity
     * - O(1).
     */
    v1023: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1023.MultiAddress,
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    v1026: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1026.MultiAddress,
            call: v1026.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1030: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1030.MultiAddress,
            call: v1030.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1031: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1031.MultiAddress,
            call: v1031.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1032: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1032.MultiAddress,
            call: v1032.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1050: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1050.MultiAddress,
            call: v1050.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1060: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1060.MultiAddress,
            call: v1060.Call,
        })
    ),
}

export const removeKey = {
    name: 'Sudo.remove_key',
    /**
     * Permanently removes the sudo key.
     *
     * **This cannot be un-done.**
     */
    matrixV1010: new CallType('Sudo.remove_key', sts.unit()),
}
