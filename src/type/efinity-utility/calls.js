'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.batch = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixV601 = require('../matrixV601')
var matrixV602 = require('../matrixV602')
exports.batch = {
    name: 'EfinityUtility.batch',
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
    matrixV500: new support_1.CallType(
        'EfinityUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV500.Call
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
    matrixV600: new support_1.CallType(
        'EfinityUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV600.Call
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
    matrixV601: new support_1.CallType(
        'EfinityUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV601.Call
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
    matrixV602: new support_1.CallType(
        'EfinityUtility.batch',
        support_1.sts.struct({
            calls: support_1.sts.array(function () {
                return matrixV602.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        })
    ),
}
