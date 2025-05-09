'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.retries = exports.lookup = exports.agenda = exports.incompleteSince = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v105 = require('../v105')
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.incompleteSince = {
    matrixEnjinV603: new support_1.StorageType('Scheduler.IncompleteSince', 'Optional', [], support_1.sts.number()),
}
exports.agenda = {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return matrixEnjinV603.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return matrixEnjinV1012.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixV500: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return matrixV500.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixV1010: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return matrixV1010.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    enjinV100: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return enjinV100.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    enjinV101: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return enjinV101.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    enjinV1032: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return enjinV1032.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v100: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return v100.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v105: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return v105.Scheduled
            })
        })
    ),
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1030: new support_1.StorageType(
        'Scheduler.Agenda',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.option(function () {
                return v1030.Scheduled
            })
        })
    ),
}
exports.lookup = {
    /**
     *  Lookup from a name to the block number and index of the task.
     *
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Scheduler.Lookup',
        'Optional',
        [support_1.sts.bytes()],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
exports.retries = {
    /**
     *  Retry configurations for items to be executed, indexed by task address.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Scheduler.Retries',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
        ],
        matrixEnjinV1012.RetryConfig
    ),
}
