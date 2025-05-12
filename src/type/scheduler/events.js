'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.retryFailed =
    exports.retryCancelled =
    exports.retrySet =
    exports.permanentlyOverweight =
    exports.periodicFailed =
    exports.callUnavailable =
    exports.dispatched =
    exports.canceled =
    exports.scheduled =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
exports.scheduled = {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    matrixEnjinV603: new support_1.EventType(
        'Scheduler.Scheduled',
        support_1.sts.struct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        })
    ),
}
exports.canceled = {
    name: 'Scheduler.Canceled',
    /**
     * Canceled some task.
     */
    matrixEnjinV603: new support_1.EventType(
        'Scheduler.Canceled',
        support_1.sts.struct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        })
    ),
}
exports.dispatched = {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    matrixEnjinV603: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixEnjinV603.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    matrixV500: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV500.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    matrixV602: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV602.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    matrixV604: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixV604.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    enjinV100: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV100.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    enjinV101: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return enjinV101.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    v100: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v100.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    v104: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v104.DispatchError
                }
            ),
        })
    ),
    /**
     * Dispatched some task.
     */
    v105: new support_1.EventType(
        'Scheduler.Dispatched',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return v105.DispatchError
                }
            ),
        })
    ),
}
exports.callUnavailable = {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    matrixEnjinV603: new support_1.EventType(
        'Scheduler.CallUnavailable',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
exports.periodicFailed = {
    name: 'Scheduler.PeriodicFailed',
    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    matrixEnjinV603: new support_1.EventType(
        'Scheduler.PeriodicFailed',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
exports.permanentlyOverweight = {
    name: 'Scheduler.PermanentlyOverweight',
    /**
     * The given task can never be executed since it is overweight.
     */
    matrixEnjinV603: new support_1.EventType(
        'Scheduler.PermanentlyOverweight',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
exports.retrySet = {
    name: 'Scheduler.RetrySet',
    /**
     * Set a retry configuration for some task.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Scheduler.RetrySet',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            period: support_1.sts.number(),
            retries: support_1.sts.number(),
        })
    ),
}
exports.retryCancelled = {
    name: 'Scheduler.RetryCancelled',
    /**
     * Cancel a retry configuration for some task.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Scheduler.RetryCancelled',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
exports.retryFailed = {
    name: 'Scheduler.RetryFailed',
    /**
     * The given task was unable to be retried since the agenda is full at that block or there
     * was not enough weight to reschedule it.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Scheduler.RetryFailed',
        support_1.sts.struct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
