'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.removeKey = exports.sudoAs = exports.setKey = exports.sudoUncheckedWeight = exports.sudo = void 0
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
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixV601 = require('../matrixV601')
var matrixV602 = require('../matrixV602')
var matrixV1000 = require('../matrixV1000')
var matrixV1003 = require('../matrixV1003')
var matrixV1004 = require('../matrixV1004')
var matrixV1005 = require('../matrixV1005')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixV1012 = require('../matrixV1012')
var matrixV1020 = require('../matrixV1020')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var matrixV1022 = require('../matrixV1022')
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
exports.sudo = {
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
    matrixV500: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    matrixV600: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    matrixV601: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    matrixV602: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    matrixV1000: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    matrixV1003: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    matrixV1004: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    matrixV1005: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1005.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1010: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1010.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1011: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1011.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1012: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1012.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1020: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1020.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    matrixV1022: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: matrixV1022.Call,
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
    enjinV100: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    enjinV101: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    enjinV110: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    enjinV120: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    enjinV1021: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    enjinV1022: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    enjinV1023: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    enjinV1026: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: enjinV1026.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    enjinV1032: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: enjinV1032.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    enjinV1050: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v100: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v101: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v102: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v103: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v104: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v105: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v106: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v110: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v120: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v1021: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v1022: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
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
    v1023: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo`].
     */
    v1026: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: v1026.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1030: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: v1030.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1031: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: v1031.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1032: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: v1032.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     */
    v1050: new support_1.CallType(
        'Sudo.sudo',
        support_1.sts.struct({
            call: v1050.Call,
        })
    ),
}
exports.sudoUncheckedWeight = {
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
    matrixV500: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV600: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV601: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV602: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1000: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1003: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
            call: matrixV1003.Call,
            weight: matrixV1003.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    matrixV1004: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
            call: matrixV1004.Call,
            weight: matrixV1004.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    matrixV1005: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1010: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1011: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1012: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1020: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    matrixV1022: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
     *
     * ## Complexity
     * - O(1).
     */
    enjinV100: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV101: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV110: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV120: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV1021: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV1022: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV1023: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
            call: enjinV1023.Call,
            weight: enjinV1023.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    enjinV1026: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV1032: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    enjinV1050: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v100: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v101: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v102: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v103: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v104: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v105: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v106: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v110: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v120: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1021: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1022: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1023: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
            call: v1023.Call,
            weight: v1023.Weight,
        })
    ),
    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    v1026: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1030: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1031: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1032: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
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
    v1050: new support_1.CallType(
        'Sudo.sudo_unchecked_weight',
        support_1.sts.struct({
            call: v1050.Call,
            weight: v1050.Weight,
        })
    ),
}
exports.setKey = {
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
    matrixV500: new support_1.CallType(
        'Sudo.set_key',
        support_1.sts.struct({
            new: matrixV500.MultiAddress,
        })
    ),
}
exports.sudoAs = {
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
    matrixV500: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV600: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV601: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV602: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1000: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1003: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
            who: matrixV1003.MultiAddress,
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    matrixV1004: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
            who: matrixV1004.MultiAddress,
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    matrixV1005: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1010: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1011: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1012: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1020: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    matrixV1022: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
            who: matrixV1022.MultiAddress,
            call: matrixV1022.Call,
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
    enjinV100: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV101: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV110: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV120: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV1021: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV1022: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV1023: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
            who: enjinV1023.MultiAddress,
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    enjinV1026: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV1032: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    enjinV1050: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v100: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v101: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v102: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v103: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v104: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v105: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v106: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v110: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v120: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1021: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1022: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1023: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
            who: v1023.MultiAddress,
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::sudo_as`].
     */
    v1026: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1030: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1031: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1032: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
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
    v1050: new support_1.CallType(
        'Sudo.sudo_as',
        support_1.sts.struct({
            who: v1050.MultiAddress,
            call: v1050.Call,
        })
    ),
}
exports.removeKey = {
    name: 'Sudo.remove_key',
    /**
     * Permanently removes the sudo key.
     *
     * **This cannot be un-done.**
     */
    matrixV1010: new support_1.CallType('Sudo.remove_key', support_1.sts.unit()),
}
