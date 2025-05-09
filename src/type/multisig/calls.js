'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.cancelAsMulti = exports.approveAsMulti = exports.asMulti = exports.asMultiThreshold1 = void 0
var support_1 = require('../support')
var enjinV101 = require('../enjinV101')
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
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixEnjinV1003 = require('../matrixEnjinV1003')
var matrixV1003 = require('../matrixV1003')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
var matrixEnjinV1005 = require('../matrixEnjinV1005')
var matrixV1005 = require('../matrixV1005')
var matrixV1010 = require('../matrixV1010')
var matrixV1011 = require('../matrixV1011')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1012 = require('../matrixV1012')
var matrixV1020 = require('../matrixV1020')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
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
exports.asMultiThreshold1 = {
    name: 'Multisig.as_multi_threshold_1',
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixEnjinV603: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1000.AccountId32
            }),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixEnjinV1003: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1003.AccountId32
            }),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1004.AccountId32
            }),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1005.AccountId32
            }),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1012.AccountId32
            }),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixEnjinV1022: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1022.AccountId32
            }),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    matrixV500: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV500.AccountId32
            }),
            call: matrixV500.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    matrixV600: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV600.AccountId32
            }),
            call: matrixV600.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    matrixV601: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV601.AccountId32
            }),
            call: matrixV601.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV602: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV602.AccountId32
            }),
            call: matrixV602.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV604: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV604.AccountId32
            }),
            call: matrixV604.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1000: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1000.AccountId32
            }),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1003: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1003.AccountId32
            }),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    matrixV1004: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1004.AccountId32
            }),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    matrixV1005: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1005.AccountId32
            }),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1010: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1010.AccountId32
            }),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1011: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1011.AccountId32
            }),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1012: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1012.AccountId32
            }),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1020: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1020.AccountId32
            }),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    matrixV1022: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return matrixV1022.AccountId32
            }),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV101: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV101.AccountId32
            }),
            call: enjinV101.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV110: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV110.AccountId32
            }),
            call: enjinV110.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV120: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV120.AccountId32
            }),
            call: enjinV120.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV1021: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV1021.AccountId32
            }),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV1022: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV1022.AccountId32
            }),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV1023: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV1023.AccountId32
            }),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    enjinV1026: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV1026.AccountId32
            }),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV1032: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV1032.AccountId32
            }),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    enjinV1050: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return enjinV1050.AccountId32
            }),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v105: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v105.AccountId32
            }),
            call: v105.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v106: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v106.AccountId32
            }),
            call: v106.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v110: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v110.AccountId32
            }),
            call: v110.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v120: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v120.AccountId32
            }),
            call: v120.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1021: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1021.AccountId32
            }),
            call: v1021.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1022: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1022.AccountId32
            }),
            call: v1022.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1023: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1023.AccountId32
            }),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    v1026: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1026.AccountId32
            }),
            call: v1026.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1030: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1030.AccountId32
            }),
            call: v1030.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1031: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1031.AccountId32
            }),
            call: v1031.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1032: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1032.AccountId32
            }),
            call: v1032.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     *
     * Result is equivalent to the dispatched result.
     *
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1050: new support_1.CallType(
        'Multisig.as_multi_threshold_1',
        support_1.sts.struct({
            otherSignatories: support_1.sts.array(function () {
                return v1050.AccountId32
            }),
            call: v1050.Call,
        })
    ),
}
exports.asMulti = {
    name: 'Multisig.as_multi',
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixEnjinV603: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV603.Timepoint
            }),
            call: matrixEnjinV603.Call,
            maxWeight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1000.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV1000.Timepoint
            }),
            call: matrixEnjinV1000.Call,
            maxWeight: matrixEnjinV1000.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixEnjinV1003: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1003.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV1003.Timepoint
            }),
            call: matrixEnjinV1003.Call,
            maxWeight: matrixEnjinV1003.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1004.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV1004.Timepoint
            }),
            call: matrixEnjinV1004.Call,
            maxWeight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1005.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV1005.Timepoint
            }),
            call: matrixEnjinV1005.Call,
            maxWeight: matrixEnjinV1005.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1012.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV1012.Timepoint
            }),
            call: matrixEnjinV1012.Call,
            maxWeight: matrixEnjinV1012.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixEnjinV1022: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV1022.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV1022.Timepoint
            }),
            call: matrixEnjinV1022.Call,
            maxWeight: matrixEnjinV1022.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    matrixV500: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV500.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV500.Timepoint
            }),
            call: matrixV500.Call,
            maxWeight: matrixV500.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    matrixV600: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV600.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV600.Timepoint
            }),
            call: matrixV600.Call,
            maxWeight: matrixV600.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    matrixV601: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV601.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV601.Timepoint
            }),
            call: matrixV601.Call,
            maxWeight: matrixV601.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV602: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV602.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV602.Timepoint
            }),
            call: matrixV602.Call,
            maxWeight: matrixV602.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV604: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV604.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV604.Timepoint
            }),
            call: matrixV604.Call,
            maxWeight: matrixV604.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1000: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1000.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1000.Timepoint
            }),
            call: matrixV1000.Call,
            maxWeight: matrixV1000.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1003: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1003.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1003.Timepoint
            }),
            call: matrixV1003.Call,
            maxWeight: matrixV1003.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    matrixV1004: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1004.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1004.Timepoint
            }),
            call: matrixV1004.Call,
            maxWeight: matrixV1004.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    matrixV1005: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1005.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1005.Timepoint
            }),
            call: matrixV1005.Call,
            maxWeight: matrixV1005.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1010: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1010.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1010.Timepoint
            }),
            call: matrixV1010.Call,
            maxWeight: matrixV1010.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1011: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1011.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1011.Timepoint
            }),
            call: matrixV1011.Call,
            maxWeight: matrixV1011.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1012: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1012.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1012.Timepoint
            }),
            call: matrixV1012.Call,
            maxWeight: matrixV1012.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1020: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1020.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1020.Timepoint
            }),
            call: matrixV1020.Call,
            maxWeight: matrixV1020.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixV1022: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixV1022.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixV1022.Timepoint
            }),
            call: matrixV1022.Call,
            maxWeight: matrixV1022.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV101: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV101.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV101.Timepoint
            }),
            call: enjinV101.Call,
            maxWeight: enjinV101.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV110: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV110.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV110.Timepoint
            }),
            call: enjinV110.Call,
            maxWeight: enjinV110.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV120: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV120.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV120.Timepoint
            }),
            call: enjinV120.Call,
            maxWeight: enjinV120.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV1021: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV1021.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV1021.Timepoint
            }),
            call: enjinV1021.Call,
            maxWeight: enjinV1021.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV1022: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV1022.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV1022.Timepoint
            }),
            call: enjinV1022.Call,
            maxWeight: enjinV1022.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV1023: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV1023.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV1023.Timepoint
            }),
            call: enjinV1023.Call,
            maxWeight: enjinV1023.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    enjinV1026: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV1026.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV1026.Timepoint
            }),
            call: enjinV1026.Call,
            maxWeight: enjinV1026.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV1032: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV1032.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV1032.Timepoint
            }),
            call: enjinV1032.Call,
            maxWeight: enjinV1032.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    enjinV1050: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return enjinV1050.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return enjinV1050.Timepoint
            }),
            call: enjinV1050.Call,
            maxWeight: enjinV1050.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v105: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v105.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v105.Timepoint
            }),
            call: v105.Call,
            maxWeight: v105.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v106: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v106.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v106.Timepoint
            }),
            call: v106.Call,
            maxWeight: v106.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v110: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v110.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v110.Timepoint
            }),
            call: v110.Call,
            maxWeight: v110.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v120: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v120.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v120.Timepoint
            }),
            call: v120.Call,
            maxWeight: v120.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1021: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1021.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1021.Timepoint
            }),
            call: v1021.Call,
            maxWeight: v1021.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1022: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1022.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1022.Timepoint
            }),
            call: v1022.Call,
            maxWeight: v1022.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1023: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1023.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1023.Timepoint
            }),
            call: v1023.Call,
            maxWeight: v1023.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    v1026: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1026.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1026.Timepoint
            }),
            call: v1026.Call,
            maxWeight: v1026.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1030: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1030.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1030.Timepoint
            }),
            call: v1030.Call,
            maxWeight: v1030.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1031: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1031.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1031.Timepoint
            }),
            call: v1031.Call,
            maxWeight: v1031.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1032: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1032.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1032.Timepoint
            }),
            call: v1032.Call,
            maxWeight: v1032.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * If there are enough, then dispatch the call.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     *
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     *
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     *
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1050: new support_1.CallType(
        'Multisig.as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return v1050.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return v1050.Timepoint
            }),
            call: v1050.Call,
            maxWeight: v1050.Weight,
        })
    ),
}
exports.approveAsMulti = {
    name: 'Multisig.approve_as_multi',
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     *
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     *
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     *
     * ## Complexity
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    matrixEnjinV603: new support_1.CallType(
        'Multisig.approve_as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return matrixEnjinV603.Timepoint
            }),
            callHash: support_1.sts.bytes(),
            maxWeight: matrixEnjinV603.Weight,
        })
    ),
}
exports.cancelAsMulti = {
    name: 'Multisig.cancel_as_multi',
    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     *
     * ## Complexity
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     */
    matrixEnjinV603: new support_1.CallType(
        'Multisig.cancel_as_multi',
        support_1.sts.struct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
            timepoint: matrixEnjinV603.Timepoint,
            callHash: support_1.sts.bytes(),
        })
    ),
}
