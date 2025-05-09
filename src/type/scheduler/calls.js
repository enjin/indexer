'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.cancelRetryNamed =
    exports.cancelRetry =
    exports.setRetryNamed =
    exports.setRetry =
    exports.scheduleNamedAfter =
    exports.scheduleAfter =
    exports.cancelNamed =
    exports.scheduleNamed =
    exports.cancel =
    exports.schedule =
        void 0
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
exports.schedule = {
    name: 'Scheduler.schedule',
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV603: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1003: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixEnjinV1022: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV500: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV600: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV601: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV602: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV604: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1000: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1003: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixV1004: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    matrixV1005: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1010: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1011: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1012: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1020: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    matrixV1022: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV100: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV101: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV110: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV120: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1021: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1022: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1023: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    enjinV1026: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1032: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    enjinV1050: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v100: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v101: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v102: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v103: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v104: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v105: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v106: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v110: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v120: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1021: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1022: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1023: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1026: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1030: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1031: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1032: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v1050: new support_1.CallType(
        'Scheduler.schedule',
        support_1.sts.struct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1050.Call,
        })
    ),
}
exports.cancel = {
    name: 'Scheduler.cancel',
    /**
     * Cancel an anonymously scheduled task.
     */
    matrixEnjinV603: new support_1.CallType(
        'Scheduler.cancel',
        support_1.sts.struct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        })
    ),
}
exports.scheduleNamed = {
    name: 'Scheduler.schedule_named',
    /**
     * Schedule a named task.
     */
    matrixEnjinV603: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1003: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixEnjinV1022: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV500: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV600: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV601: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV602: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV604: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1000: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1003: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixV1004: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    matrixV1005: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1010: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1011: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1012: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1020: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    matrixV1022: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV100: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV101: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV110: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV120: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1021: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1022: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1023: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    enjinV1026: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1032: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    enjinV1050: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v100: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v101: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v102: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v103: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v104: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v105: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v106: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v110: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v120: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1021: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1022: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1023: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1026: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1030: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1031: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1032: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v1050: new support_1.CallType(
        'Scheduler.schedule_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1050.Call,
        })
    ),
}
exports.cancelNamed = {
    name: 'Scheduler.cancel_named',
    /**
     * Cancel a named scheduled task.
     */
    matrixEnjinV603: new support_1.CallType(
        'Scheduler.cancel_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
        })
    ),
}
exports.scheduleAfter = {
    name: 'Scheduler.schedule_after',
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV603: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1003: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixEnjinV1022: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    matrixV500: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    matrixV600: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    matrixV601: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV602: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV604: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1000: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1003: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixV1004: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    matrixV1005: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1010: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1011: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1012: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1020: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    matrixV1022: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV100: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV101: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV110: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV120: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1021: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1022: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1023: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    enjinV1026: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1032: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    enjinV1050: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v100: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v101: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v102: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     *
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v103: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v104: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v105: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v106: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v110: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v120: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1021: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1022: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1023: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1026: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1030: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1031: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1032: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v1050: new support_1.CallType(
        'Scheduler.schedule_after',
        support_1.sts.struct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1050.Call,
        })
    ),
}
exports.scheduleNamedAfter = {
    name: 'Scheduler.schedule_named_after',
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV603: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV603.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1000: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1000.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1003: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixEnjinV1005: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1005.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixEnjinV1022: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    matrixV500: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV500.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    matrixV600: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV600.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    matrixV601: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV601.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV602: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV602.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV604: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV604.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1000: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1000.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1003: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1003.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixV1004: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    matrixV1005: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1005.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1010: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1011: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1012: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1020: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    matrixV1022: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV100: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV100.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV101: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV101.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV110: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV110.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV120: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV120.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1021: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1021.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1022: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1023: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    enjinV1026: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1026.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1032: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    enjinV1050: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v100: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v100.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v101: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v101.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v102: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v102.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     *
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v103: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v103.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v104: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v104.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v105: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v105.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v106: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v106.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v110: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v110.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v120: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v120.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1021: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1021.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1022: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1022.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1023: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1023.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1026: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1026.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1030: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1030.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1031: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1031.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1032: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1032.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v1050: new support_1.CallType(
        'Scheduler.schedule_named_after',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: v1050.Call,
        })
    ),
}
exports.setRetry = {
    name: 'Scheduler.set_retry',
    /**
     * Set a retry configuration for a task so that, in case its scheduled run fails, it will
     * be retried after `period` blocks, for a total amount of `retries` retries or until it
     * succeeds.
     *
     * Tasks which need to be scheduled for a retry are still subject to weight metering and
     * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
     * normally while the task is retrying.
     *
     * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
     * clones of the original task. Their retry configuration will be derived from the
     * original task's configuration, but will have a lower value for `remaining` than the
     * original `total_retries`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.set_retry',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            retries: support_1.sts.number(),
            period: support_1.sts.number(),
        })
    ),
}
exports.setRetryNamed = {
    name: 'Scheduler.set_retry_named',
    /**
     * Set a retry configuration for a named task so that, in case its scheduled run fails, it
     * will be retried after `period` blocks, for a total amount of `retries` retries or until
     * it succeeds.
     *
     * Tasks which need to be scheduled for a retry are still subject to weight metering and
     * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
     * normally while the task is retrying.
     *
     * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
     * clones of the original task. Their retry configuration will be derived from the
     * original task's configuration, but will have a lower value for `remaining` than the
     * original `total_retries`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.set_retry_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
            retries: support_1.sts.number(),
            period: support_1.sts.number(),
        })
    ),
}
exports.cancelRetry = {
    name: 'Scheduler.cancel_retry',
    /**
     * Removes the retry configuration of a task.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.cancel_retry',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
        })
    ),
}
exports.cancelRetryNamed = {
    name: 'Scheduler.cancel_retry_named',
    /**
     * Cancel the retry configuration of a named task.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Scheduler.cancel_retry_named',
        support_1.sts.struct({
            id: support_1.sts.bytes(),
        })
    ),
}
