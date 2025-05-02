'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.resumeExtrinsic = exports.pauseExtrinsic = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
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
exports.pauseExtrinsic = {
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
    matrixEnjinV603: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV603.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1000: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1000.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1003: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1003.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1004.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1005.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1012: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1012.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1022: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1022.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV500: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV500.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV600: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV600.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV601: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV601.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV602: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV602.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV604: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV604.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1000: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1000.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1003: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1003.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixV1004: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1004.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    matrixV1005: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1005.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1010: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1010.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1011: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1011.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1012: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1012.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1020: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1020.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1022: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: matrixV1022.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV100: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV100.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV101: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV101.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV110: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV110.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV120: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV120.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1021: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV1021.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1022: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV1022.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1023: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV1023.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    enjinV1026: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV1026.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1032: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV1032.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1050: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: enjinV1050.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v102: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v102.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v103: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v103.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v104: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v104.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v105: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v105.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v106: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v106.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v110: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v110.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v120: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v120.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1021: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1021.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1022: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1022.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1023: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1023.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::pause_extrinsic`].
     */
    v1026: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1026.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1030: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1030.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1031: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1031.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1032: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1032.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
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
    v1050: new support_1.CallType(
        'ExtrinsicPause.pause_extrinsic',
        support_1.sts.struct({
            call: v1050.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
}
exports.resumeExtrinsic = {
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
    matrixEnjinV603: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV603.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1000: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1000.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1003: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1003.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1004.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1005.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1012: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1012.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixEnjinV1022: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixEnjinV1022.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV500: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV500.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV600: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV600.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV601: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV601.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV602: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV602.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV604: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV604.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1000: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1000.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1003: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1003.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixV1004: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1004.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    matrixV1005: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1005.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1010: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1010.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1011: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1011.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1012: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1012.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1020: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1020.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    matrixV1022: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: matrixV1022.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV100: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV100.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV101: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV101.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV110: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV110.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV120: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV120.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1021: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV1021.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1022: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV1022.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1023: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV1023.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    enjinV1026: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV1026.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1032: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV1032.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    enjinV1050: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: enjinV1050.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v102: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v102.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v103: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v103.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v104: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v104.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v105: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v105.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v106: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v106.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v110: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v110.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v120: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v120.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1021: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1021.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1022: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1022.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1023: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1023.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::resume_extrinsic`].
     */
    v1026: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1026.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1030: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1030.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1031: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1031.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1032: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1032.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
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
    v1050: new support_1.CallType(
        'ExtrinsicPause.resume_extrinsic',
        support_1.sts.struct({
            call: v1050.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        })
    ),
}
