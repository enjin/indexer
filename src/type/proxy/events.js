'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.proxyRemoved = exports.proxyAdded = exports.announced = exports.pureCreated = exports.proxyExecuted = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var v1030 = require('../v1030')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.proxyExecuted = {
    name: 'Proxy.ProxyExecuted',
    /**
     * A proxy was executed correctly, with the given.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Proxy.ProxyExecuted',
        support_1.sts.struct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return matrixEnjinV1012.DispatchError
                }
            ),
        })
    ),
}
exports.pureCreated = {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Proxy.PureCreated',
        support_1.sts.struct({
            pure: matrixEnjinV1012.AccountId32,
            who: matrixEnjinV1012.AccountId32,
            proxyType: matrixEnjinV1012.ProxyType,
            disambiguationIndex: support_1.sts.number(),
        })
    ),
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    enjinV1050: new support_1.EventType(
        'Proxy.PureCreated',
        support_1.sts.struct({
            pure: enjinV1050.AccountId32,
            who: enjinV1050.AccountId32,
            proxyType: enjinV1050.ProxyType,
            disambiguationIndex: support_1.sts.number(),
        })
    ),
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v1030: new support_1.EventType(
        'Proxy.PureCreated',
        support_1.sts.struct({
            pure: v1030.AccountId32,
            who: v1030.AccountId32,
            proxyType: v1030.ProxyType,
            disambiguationIndex: support_1.sts.number(),
        })
    ),
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v1050: new support_1.EventType(
        'Proxy.PureCreated',
        support_1.sts.struct({
            pure: v1050.AccountId32,
            who: v1050.AccountId32,
            proxyType: v1050.ProxyType,
            disambiguationIndex: support_1.sts.number(),
        })
    ),
}
exports.announced = {
    name: 'Proxy.Announced',
    /**
     * An announcement was placed to make a call in the future.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Proxy.Announced',
        support_1.sts.struct({
            real: matrixEnjinV1012.AccountId32,
            proxy: matrixEnjinV1012.AccountId32,
            callHash: matrixEnjinV1012.H256,
        })
    ),
}
exports.proxyAdded = {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Proxy.ProxyAdded',
        support_1.sts.struct({
            delegator: matrixEnjinV1012.AccountId32,
            delegatee: matrixEnjinV1012.AccountId32,
            proxyType: matrixEnjinV1012.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
    /**
     * A proxy was added.
     */
    enjinV1050: new support_1.EventType(
        'Proxy.ProxyAdded',
        support_1.sts.struct({
            delegator: enjinV1050.AccountId32,
            delegatee: enjinV1050.AccountId32,
            proxyType: enjinV1050.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
    /**
     * A proxy was added.
     */
    v1030: new support_1.EventType(
        'Proxy.ProxyAdded',
        support_1.sts.struct({
            delegator: v1030.AccountId32,
            delegatee: v1030.AccountId32,
            proxyType: v1030.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
    /**
     * A proxy was added.
     */
    v1050: new support_1.EventType(
        'Proxy.ProxyAdded',
        support_1.sts.struct({
            delegator: v1050.AccountId32,
            delegatee: v1050.AccountId32,
            proxyType: v1050.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
}
exports.proxyRemoved = {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Proxy.ProxyRemoved',
        support_1.sts.struct({
            delegator: matrixEnjinV1012.AccountId32,
            delegatee: matrixEnjinV1012.AccountId32,
            proxyType: matrixEnjinV1012.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
    /**
     * A proxy was removed.
     */
    enjinV1050: new support_1.EventType(
        'Proxy.ProxyRemoved',
        support_1.sts.struct({
            delegator: enjinV1050.AccountId32,
            delegatee: enjinV1050.AccountId32,
            proxyType: enjinV1050.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
    /**
     * A proxy was removed.
     */
    v1030: new support_1.EventType(
        'Proxy.ProxyRemoved',
        support_1.sts.struct({
            delegator: v1030.AccountId32,
            delegatee: v1030.AccountId32,
            proxyType: v1030.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
    /**
     * A proxy was removed.
     */
    v1050: new support_1.EventType(
        'Proxy.ProxyRemoved',
        support_1.sts.struct({
            delegator: v1050.AccountId32,
            delegatee: v1050.AccountId32,
            proxyType: v1050.ProxyType,
            delay: support_1.sts.number(),
        })
    ),
}
