import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV101 from '../enjinV101'
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
import * as matrixV1023 from '../matrixV1023'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as v1030 from '../v1030'
import * as matrixV1030 from '../matrixV1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const pauseExtrinsic = {
    name: 'ExtrinsicPause.pause_extrinsic',
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV603: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV603.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV1000: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1000.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV1003: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1003.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixEnjinV1004: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1004.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixEnjinV1005: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1005.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV1012: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1012.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV1022: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1022.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV500: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV500.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV600: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV600.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV601: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV601.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV602: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV602.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV604: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV604.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1000: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1000.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1003: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1003.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixV1004: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1004.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixV1005: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1005.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1010: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1010.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1011: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1011.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1012: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1012.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1020: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1020.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1022: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1022.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1023: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1023.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV100: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV100.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV101: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV101.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV110: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV110.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV120: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV120.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV1021: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV1021.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV1022: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV1022.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV1023: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV1023.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    enjinV1026: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV1026.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV1032: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV1032.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    enjinV1050: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: enjinV1050.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v102: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v102.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v103: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v103.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v104: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v104.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v105: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v105.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v106: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v106.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v110: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v110.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v120: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v120.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1021: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1021.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1022: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1022.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1023: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1023.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    v1026: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1026.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1030: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1030.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1031: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1031.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1032: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1032.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1050: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1050.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixV1030: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixV1030.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1060: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1060.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
}

export const resumeExtrinsic = {
    name: 'ExtrinsicPause.resume_extrinsic',
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV603: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV603.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV1000: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1000.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV1003: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1003.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixEnjinV1004: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1004.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixEnjinV1005: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1005.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV1012: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1012.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV1022: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1022.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV500: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV500.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV600: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV600.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV601: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV601.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV602: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV602.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV604: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV604.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1000: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1000.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1003: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1003.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixV1004: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1004.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixV1005: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1005.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1010: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1010.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1011: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1011.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1012: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1012.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1020: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1020.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1022: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1022.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1023: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1023.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV100: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV100.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV101: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV101.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV110: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV110.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV120: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV120.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV1021: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV1021.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV1022: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV1022.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV1023: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV1023.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    enjinV1026: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV1026.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV1032: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV1032.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    enjinV1050: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: enjinV1050.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v102: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v102.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v103: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v103.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v104: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v104.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v105: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v105.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v106: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v106.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v110: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v110.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v120: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v120.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1021: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1021.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1022: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1022.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1023: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1023.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    v1026: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1026.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1030: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1030.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1031: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1031.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1032: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1032.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1050: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1050.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixV1030: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixV1030.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     *
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     *
     * # Errors
     *
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1060: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1060.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
}
