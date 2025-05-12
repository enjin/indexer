'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.batch = void 0
var support_1 = require('../support')
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
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var matrixV1022 = require('../matrixV1022')
exports.batch = {
    name: 'MatrixUtility.batch',
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV603: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV603.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV1000: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV1000.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV1003: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV1003.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV1004.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV1005.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV1012.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixEnjinV1022.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV604: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV604.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1000: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1000.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1003: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1003.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixV1004: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1004.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixV1005: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1005.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1010: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1010.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1011: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1011.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1012: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1012.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1020: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1020.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     *
     * May be called from any origin except [`None`].
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     *
     * # Errors
     *
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixV1022: new support_1.CallType(
        'MatrixUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV1022.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
}
