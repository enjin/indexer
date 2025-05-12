'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.bypassConsistencyCheck = exports.pendingConfigs = exports.activeConfig = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v104 = require('../v104')
var v105 = require('../v105')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.activeConfig = {
    /**
     *  The active configuration for the current session.
     */
    enjinV100: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], enjinV100.HostConfiguration),
    /**
     *  The active configuration for the current session.
     */
    enjinV101: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], enjinV101.HostConfiguration),
    /**
     *  The active configuration for the current session.
     */
    enjinV1032: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], enjinV1032.HostConfiguration),
    /**
     *  The active configuration for the current session.
     */
    v100: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], v100.HostConfiguration),
    /**
     *  The active configuration for the current session.
     */
    v104: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], v104.HostConfiguration),
    /**
     *  The active configuration for the current session.
     */
    v105: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], v105.HostConfiguration),
    /**
     *  The active configuration for the current session.
     */
    v1030: new support_1.StorageType('Configuration.ActiveConfig', 'Default', [], v1030.HostConfiguration),
}
exports.pendingConfigs = {
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    enjinV100: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), enjinV100.HostConfiguration]
            })
        })
    ),
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    enjinV101: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), enjinV101.HostConfiguration]
            })
        })
    ),
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    enjinV1032: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), enjinV1032.HostConfiguration]
            })
        })
    ),
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v100: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), v100.HostConfiguration]
            })
        })
    ),
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v104: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), v104.HostConfiguration]
            })
        })
    ),
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v105: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), v105.HostConfiguration]
            })
        })
    ),
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v1030: new support_1.StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), v1030.HostConfiguration]
            })
        })
    ),
}
exports.bypassConsistencyCheck = {
    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    enjinV100: new support_1.StorageType(
        'Configuration.BypassConsistencyCheck',
        'Default',
        [],
        support_1.sts.boolean()
    ),
}
