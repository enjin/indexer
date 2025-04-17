import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as matrixV1003 from '../matrixV1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'

export const batch =  {
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
    matrixEnjinV603: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV603.Call),
            continueOnFailure: sts.boolean(),
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
    matrixEnjinV1000: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1000.Call),
            continueOnFailure: sts.boolean(),
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
    matrixEnjinV1003: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1003.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixEnjinV1004: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1004.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixEnjinV1005: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1005.Call),
            continueOnFailure: sts.boolean(),
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
    matrixEnjinV1012: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1012.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV604: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV604.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV1000: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1000.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV1003: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1003.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixV1004: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1004.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixV1005: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1005.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV1010: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1010.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV1011: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1011.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV1012: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1012.Call),
            continueOnFailure: sts.boolean(),
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
    matrixV1020: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1020.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
}
