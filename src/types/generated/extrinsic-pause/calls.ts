import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as v601 from '../v601'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as v1003 from '../v1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as v1004 from '../v1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as v1005 from '../v1005'
import * as v1010 from '../v1010'
import * as v1011 from '../v1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1012 from '../v1012'
import * as v1020 from '../v1020'

export const pauseExtrinsic =  {
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
    v500: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v500.Call,
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
    v600: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v600.Call,
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
    v601: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v601.Call,
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
    v602: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v602.Call,
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
    v604: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v604.Call,
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
    v1000: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1000.Call,
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
    v1003: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1003.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    v1004: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1004.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    v1005: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1005.Call,
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
    v1010: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1010.Call,
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
    v1011: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1011.Call,
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
    v1012: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1012.Call,
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
    v1020: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1020.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
}

export const resumeExtrinsic =  {
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
    v500: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v500.Call,
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
    v600: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v600.Call,
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
    v601: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v601.Call,
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
    v602: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v602.Call,
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
    v604: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v604.Call,
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
    v1000: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1000.Call,
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
    v1003: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1003.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    v1004: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1004.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    v1005: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1005.Call,
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
    v1010: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1010.Call,
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
    v1011: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1011.Call,
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
    v1012: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1012.Call,
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
    v1020: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1020.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
}
