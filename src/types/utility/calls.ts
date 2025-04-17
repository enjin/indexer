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
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'
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
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const batch = {
    name: 'Utility.batch',
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixEnjinV603: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV603.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixEnjinV1000: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1000.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixEnjinV1003: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1003.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixEnjinV1004: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1004.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixEnjinV1005: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1005.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixEnjinV1012: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1012.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixEnjinV1022: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV500: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV500.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV600: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV600.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV601: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV601.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV602: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV602.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV604: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV604.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1000: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1000.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1003: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1003.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixV1004: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1004.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    matrixV1005: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1005.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1010: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1010.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1011: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1011.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1012: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1012.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1020: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1020.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    matrixV1022: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => matrixV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV100: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV100.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV101: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV101.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV110: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV120: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV120.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV1021: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV1021.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV1022: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV1023: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV1023.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    enjinV1026: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV1026.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV1032: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV1032.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    enjinV1050: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => enjinV1050.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v100: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v100.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v101: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v101.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v102: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v102.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v103: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v103.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v104: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v104.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v105: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v105.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v106: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v106.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v110: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v120: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v120.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1021: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1021.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1022: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1023: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1023.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1026: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1026.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1030: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1030.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1031: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1031.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1032: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1032.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     *
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1050: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1050.Call),
        })
    ),
}

export const asDerivative = {
    name: 'Utility.as_derivative',
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixEnjinV603: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixEnjinV1000: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixEnjinV1003: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    matrixEnjinV1004: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    matrixEnjinV1005: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixEnjinV1012: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixEnjinV1022: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV500: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV600: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV601: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV602: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV604: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1000: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1003: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    matrixV1004: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    matrixV1005: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1010: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1011: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1012: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1020: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    matrixV1022: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV100: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV101: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV110: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV120: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1021: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1022: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1023: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    enjinV1026: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1032: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    enjinV1050: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v100: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v101: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v102: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v103: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v104: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v105: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v106: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v110: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v120: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1021: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1022: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1023: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1026: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1030: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1031: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1032: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     *
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     *
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     *
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     * The dispatch origin for this call must be _Signed_.
     */
    v1050: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1050.Call,
        })
    ),
}

export const batchAll = {
    name: 'Utility.batch_all',
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV603: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV603.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1000: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1000.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1003: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1003.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    matrixEnjinV1004: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1004.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    matrixEnjinV1005: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1005.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1012: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1012.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1022: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    matrixV500: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV500.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    matrixV600: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV600.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    matrixV601: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV601.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV602: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV602.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV604: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV604.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1000: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1000.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1003: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1003.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    matrixV1004: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1004.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    matrixV1005: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1005.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1010: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1010.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1011: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1011.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1012: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1012.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1020: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1020.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1022: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => matrixV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV100: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV100.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV101: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV101.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV110: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV120: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV120.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1021: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV1021.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1022: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1023: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV1023.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    enjinV1026: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV1026.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1032: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV1032.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1050: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => enjinV1050.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v100: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v100.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v101: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v101.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v102: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v102.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v103: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v103.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v104: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v104.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v105: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v105.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v106: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v106.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v110: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v120: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v120.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1021: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1021.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1022: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1023: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1023.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1026: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1026.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1030: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1030.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1031: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1031.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1032: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1032.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1050: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1050.Call),
        })
    ),
}

export const dispatchAs = {
    name: 'Utility.dispatch_as',
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV603.OriginCaller,
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV1000: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV1000.OriginCaller,
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV1003: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV1003.OriginCaller,
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    matrixEnjinV1004: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV1004.OriginCaller,
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    matrixEnjinV1005: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV1005.OriginCaller,
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV1012: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV1012.OriginCaller,
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV1022: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixEnjinV1022.OriginCaller,
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    matrixV500: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV500.OriginCaller,
            call: matrixV500.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    matrixV600: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV600.OriginCaller,
            call: matrixV600.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    matrixV601: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV601.OriginCaller,
            call: matrixV601.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV602: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV602.OriginCaller,
            call: matrixV602.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV604: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV604.OriginCaller,
            call: matrixV604.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1000: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1000.OriginCaller,
            call: matrixV1000.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1003: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1003.OriginCaller,
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    matrixV1004: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1004.OriginCaller,
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    matrixV1005: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1005.OriginCaller,
            call: matrixV1005.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1010: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1010.OriginCaller,
            call: matrixV1010.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1011: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1011.OriginCaller,
            call: matrixV1011.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1012: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1012.OriginCaller,
            call: matrixV1012.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1020: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1020.OriginCaller,
            call: matrixV1020.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    matrixV1022: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: matrixV1022.OriginCaller,
            call: matrixV1022.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV100: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV100.OriginCaller,
            call: enjinV100.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV101: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV101.OriginCaller,
            call: enjinV101.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV110: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV110.OriginCaller,
            call: enjinV110.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV120: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV120.OriginCaller,
            call: enjinV120.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1021: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV1021.OriginCaller,
            call: enjinV1021.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1022: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV1022.OriginCaller,
            call: enjinV1022.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1023: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV1023.OriginCaller,
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    enjinV1026: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV1026.OriginCaller,
            call: enjinV1026.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1032: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV1032.OriginCaller,
            call: enjinV1032.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    enjinV1050: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: enjinV1050.OriginCaller,
            call: enjinV1050.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v100: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v100.OriginCaller,
            call: v100.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v101: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v101.OriginCaller,
            call: v101.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v102: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v102.OriginCaller,
            call: v102.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v103: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v103.OriginCaller,
            call: v103.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v104: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v104.OriginCaller,
            call: v104.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v105: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v105.OriginCaller,
            call: v105.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v106: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v106.OriginCaller,
            call: v106.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v110: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v110.OriginCaller,
            call: v110.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v120: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v120.OriginCaller,
            call: v120.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1021: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1021.OriginCaller,
            call: v1021.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1022: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1022.OriginCaller,
            call: v1022.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1023: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1023.OriginCaller,
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1026: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1026.OriginCaller,
            call: v1026.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1030: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1030.OriginCaller,
            call: v1030.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1031: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1031.OriginCaller,
            call: v1031.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1032: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1032.OriginCaller,
            call: v1032.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     *
     * The dispatch origin for this call must be _Root_.
     *
     * ## Complexity
     * - O(1).
     */
    v1050: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1050.OriginCaller,
            call: v1050.Call,
        })
    ),
}

export const forceBatch = {
    name: 'Utility.force_batch',
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV603: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV603.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1000: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1000.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1003: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1003.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    matrixEnjinV1004: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1004.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    matrixEnjinV1005: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1005.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1012: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1012.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixEnjinV1022: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    matrixV500: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV500.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    matrixV600: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV600.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    matrixV601: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV601.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV602: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV602.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV604: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV604.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1000: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1000.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1003: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1003.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    matrixV1004: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1004.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    matrixV1005: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1005.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1010: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1010.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1011: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1011.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1012: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1012.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1020: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1020.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    matrixV1022: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => matrixV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV100: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV100.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV101: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV101.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV110: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV120: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV120.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1021: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV1021.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1022: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1023: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV1023.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    enjinV1026: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV1026.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1032: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV1032.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    enjinV1050: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => enjinV1050.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v100: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v100.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v101: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v101.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v102: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v102.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v103: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v103.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v104: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v104.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v105: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v105.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v106: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v106.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v110: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v120: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v120.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1021: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1021.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1022: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1022.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1023: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1023.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1026: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1026.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1030: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1030.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1031: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1031.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1032: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1032.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     *
     * May be called from any origin except `None`.
     *
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1050: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1050.Call),
        })
    ),
}

export const withWeight = {
    name: 'Utility.with_weight',
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixEnjinV603: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV603.Call,
            weight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixEnjinV1000: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV1000.Call,
            weight: matrixEnjinV1000.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixEnjinV1003: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV1003.Call,
            weight: matrixEnjinV1003.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    matrixEnjinV1004: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV1004.Call,
            weight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    matrixEnjinV1005: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV1005.Call,
            weight: matrixEnjinV1005.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixEnjinV1012: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV1012.Call,
            weight: matrixEnjinV1012.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixEnjinV1022: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixEnjinV1022.Call,
            weight: matrixEnjinV1022.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV500: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV500.Call,
            weight: matrixV500.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV600: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV600.Call,
            weight: matrixV600.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV601: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV601.Call,
            weight: matrixV601.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV602: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV602.Call,
            weight: matrixV602.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV604: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV604.Call,
            weight: matrixV604.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1000: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1000.Call,
            weight: matrixV1000.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1003: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1003.Call,
            weight: matrixV1003.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    matrixV1004: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1004.Call,
            weight: matrixV1004.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    matrixV1005: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1005.Call,
            weight: matrixV1005.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1010: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1010.Call,
            weight: matrixV1010.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1011: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1011.Call,
            weight: matrixV1011.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1012: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1012.Call,
            weight: matrixV1012.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1020: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1020.Call,
            weight: matrixV1020.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    matrixV1022: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: matrixV1022.Call,
            weight: matrixV1022.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV100: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV100.Call,
            weight: enjinV100.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV101: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV101.Call,
            weight: enjinV101.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV110: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV110.Call,
            weight: enjinV110.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV120: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV120.Call,
            weight: enjinV120.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV1021: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV1021.Call,
            weight: enjinV1021.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV1022: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV1022.Call,
            weight: enjinV1022.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV1023: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV1023.Call,
            weight: enjinV1023.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    enjinV1026: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV1026.Call,
            weight: enjinV1026.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV1032: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV1032.Call,
            weight: enjinV1032.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    enjinV1050: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: enjinV1050.Call,
            weight: enjinV1050.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v100: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v100.Call,
            weight: v100.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v101: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v101.Call,
            weight: v101.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v102: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v102.Call,
            weight: v102.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v103: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v103.Call,
            weight: v103.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v104: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v104.Call,
            weight: v104.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v105: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v105.Call,
            weight: v105.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v106: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v106.Call,
            weight: v106.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v110: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v110.Call,
            weight: v110.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v120: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v120.Call,
            weight: v120.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1021: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1021.Call,
            weight: v1021.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1022: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1022.Call,
            weight: v1022.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1023: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1023.Call,
            weight: v1023.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1026: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1026.Call,
            weight: v1026.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1030: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1030.Call,
            weight: v1030.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1031: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1031.Call,
            weight: v1031.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1032: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1032.Call,
            weight: v1032.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     *
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     *
     * The dispatch origin for this call must be _Root_.
     */
    v1050: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1050.Call,
            weight: v1050.Weight,
        })
    ),
}
