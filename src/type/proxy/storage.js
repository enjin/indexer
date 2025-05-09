'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.announcements = exports.proxies = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var v1030 = require('../v1030')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.proxies = {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Proxy.Proxies',
        'Default',
        [matrixEnjinV1012.AccountId32],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.array(function () {
                    return matrixEnjinV1012.ProxyDefinition
                }),
                support_1.sts.bigint(),
            ]
        })
    ),
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    enjinV1050: new support_1.StorageType(
        'Proxy.Proxies',
        'Default',
        [enjinV1050.AccountId32],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.array(function () {
                    return enjinV1050.ProxyDefinition
                }),
                support_1.sts.bigint(),
            ]
        })
    ),
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v1030: new support_1.StorageType(
        'Proxy.Proxies',
        'Default',
        [v1030.AccountId32],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.array(function () {
                    return v1030.ProxyDefinition
                }),
                support_1.sts.bigint(),
            ]
        })
    ),
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v1050: new support_1.StorageType(
        'Proxy.Proxies',
        'Default',
        [v1050.AccountId32],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.array(function () {
                    return v1050.ProxyDefinition
                }),
                support_1.sts.bigint(),
            ]
        })
    ),
}
exports.announcements = {
    /**
     *  The announcements made by the proxy (key).
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Proxy.Announcements',
        'Default',
        [matrixEnjinV1012.AccountId32],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.array(function () {
                    return matrixEnjinV1012.Announcement
                }),
                support_1.sts.bigint(),
            ]
        })
    ),
}
