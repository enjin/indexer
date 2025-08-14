import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'
import * as matrixV1023 from '../matrixV1023'
import * as v1030 from '../v1030'
import * as matrixV1030 from '../matrixV1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const proxy = {
    name: 'Proxy.proxy',
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixEnjinV1012.MultiAddress,
            forceProxyType: sts.option(() => matrixEnjinV1012.ProxyType),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixEnjinV1022: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixEnjinV1022.MultiAddress,
            forceProxyType: sts.option(() => matrixEnjinV1022.ProxyType),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1010: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1010.MultiAddress,
            forceProxyType: sts.option(() => matrixV1010.ProxyType),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1011: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1011.MultiAddress,
            forceProxyType: sts.option(() => matrixV1011.ProxyType),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1012: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1012.MultiAddress,
            forceProxyType: sts.option(() => matrixV1012.ProxyType),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1020: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1020.MultiAddress,
            forceProxyType: sts.option(() => matrixV1020.ProxyType),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1022: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1022.MultiAddress,
            forceProxyType: sts.option(() => matrixV1022.ProxyType),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1023: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1023.MultiAddress,
            forceProxyType: sts.option(() => matrixV1023.ProxyType),
            call: matrixV1023.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    enjinV1032: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: enjinV1032.MultiAddress,
            forceProxyType: sts.option(() => enjinV1032.ProxyType),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    enjinV1050: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: enjinV1050.MultiAddress,
            forceProxyType: sts.option(() => enjinV1050.ProxyType),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1030: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1030.MultiAddress,
            forceProxyType: sts.option(() => v1030.ProxyType),
            call: v1030.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1031: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1031.MultiAddress,
            forceProxyType: sts.option(() => v1031.ProxyType),
            call: v1031.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1032: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1032.MultiAddress,
            forceProxyType: sts.option(() => v1032.ProxyType),
            call: v1032.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1050: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1050.MultiAddress,
            forceProxyType: sts.option(() => v1050.ProxyType),
            call: v1050.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1030: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixV1030.MultiAddress,
            forceProxyType: sts.option(() => matrixV1030.ProxyType),
            call: matrixV1030.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1060: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1060.MultiAddress,
            forceProxyType: sts.option(() => v1060.ProxyType),
            call: v1060.Call,
        })
    ),
}

export const addProxy = {
    name: 'Proxy.add_proxy',
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: matrixEnjinV1012.MultiAddress,
            proxyType: matrixEnjinV1012.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    enjinV1050: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: enjinV1050.MultiAddress,
            proxyType: enjinV1050.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    v1030: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v1030.MultiAddress,
            proxyType: v1030.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    v1050: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v1050.MultiAddress,
            proxyType: v1050.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    matrixV1030: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: matrixV1030.MultiAddress,
            proxyType: matrixV1030.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    v1060: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v1060.MultiAddress,
            proxyType: v1060.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxy = {
    name: 'Proxy.remove_proxy',
    /**
     * Unregister a proxy account for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: matrixEnjinV1012.MultiAddress,
            proxyType: matrixEnjinV1012.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    enjinV1050: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: enjinV1050.MultiAddress,
            proxyType: enjinV1050.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    v1030: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v1030.MultiAddress,
            proxyType: v1030.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    v1050: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v1050.MultiAddress,
            proxyType: v1050.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    matrixV1030: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: matrixV1030.MultiAddress,
            proxyType: matrixV1030.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    v1060: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v1060.MultiAddress,
            proxyType: v1060.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxies = {
    name: 'Proxy.remove_proxies',
    /**
     * Unregister all proxy accounts for the sender.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * WARNING: This may be called on accounts created by `pure`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     */
    matrixEnjinV1012: new CallType('Proxy.remove_proxies', sts.unit()),
}

export const createPure = {
    name: 'Proxy.create_pure',
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     * Requires a `Signed` origin.
     *
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     *
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     *
     * Fails if there are insufficient funds to pay for deposit.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: matrixEnjinV1012.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     * Requires a `Signed` origin.
     *
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     *
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     *
     * Fails if there are insufficient funds to pay for deposit.
     */
    enjinV1050: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: enjinV1050.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     * Requires a `Signed` origin.
     *
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     *
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     *
     * Fails if there are insufficient funds to pay for deposit.
     */
    v1030: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v1030.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     * Requires a `Signed` origin.
     *
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     *
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     *
     * Fails if there are insufficient funds to pay for deposit.
     */
    v1050: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v1050.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     * Requires a `Signed` origin.
     *
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     *
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     *
     * Fails if there are insufficient funds to pay for deposit.
     */
    matrixV1030: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: matrixV1030.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     * Requires a `Signed` origin.
     *
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     *
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     *
     * Fails if there are insufficient funds to pay for deposit.
     */
    v1060: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v1060.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killPure = {
    name: 'Proxy.kill_pure',
    /**
     * Removes a previously spawned pure proxy.
     *
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     *
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     *
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: matrixEnjinV1012.MultiAddress,
            proxyType: matrixEnjinV1012.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     *
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     *
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     *
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    enjinV1050: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: enjinV1050.MultiAddress,
            proxyType: enjinV1050.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     *
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     *
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     *
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v1030: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v1030.MultiAddress,
            proxyType: v1030.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     *
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     *
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     *
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v1050: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v1050.MultiAddress,
            proxyType: v1050.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     *
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     *
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     *
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    matrixV1030: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: matrixV1030.MultiAddress,
            proxyType: matrixV1030.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     *
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     *
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     *
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v1060: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v1060.MultiAddress,
            proxyType: v1060.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}

export const announce = {
    name: 'Proxy.announce',
    /**
     * Publish the hash of a proxy-call that will be made in the future.
     *
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     *
     * No more than `MaxPending` announcements may be made at any one time.
     *
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     *
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.announce',
        sts.struct({
            real: matrixEnjinV1012.MultiAddress,
            callHash: matrixEnjinV1012.H256,
        })
    ),
}

export const removeAnnouncement = {
    name: 'Proxy.remove_announcement',
    /**
     * Remove a given announcement.
     *
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: matrixEnjinV1012.MultiAddress,
            callHash: matrixEnjinV1012.H256,
        })
    ),
}

export const rejectAnnouncement = {
    name: 'Proxy.reject_announcement',
    /**
     * Remove the given announcement of a delegate.
     *
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: matrixEnjinV1012.MultiAddress,
            callHash: matrixEnjinV1012.H256,
        })
    ),
}

export const proxyAnnounced = {
    name: 'Proxy.proxy_announced',
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixEnjinV1012: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixEnjinV1012.MultiAddress,
            real: matrixEnjinV1012.MultiAddress,
            forceProxyType: sts.option(() => matrixEnjinV1012.ProxyType),
            call: matrixEnjinV1012.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixEnjinV1022: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixEnjinV1022.MultiAddress,
            real: matrixEnjinV1022.MultiAddress,
            forceProxyType: sts.option(() => matrixEnjinV1022.ProxyType),
            call: matrixEnjinV1022.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1010: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1010.MultiAddress,
            real: matrixV1010.MultiAddress,
            forceProxyType: sts.option(() => matrixV1010.ProxyType),
            call: matrixV1010.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1011: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1011.MultiAddress,
            real: matrixV1011.MultiAddress,
            forceProxyType: sts.option(() => matrixV1011.ProxyType),
            call: matrixV1011.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1012: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1012.MultiAddress,
            real: matrixV1012.MultiAddress,
            forceProxyType: sts.option(() => matrixV1012.ProxyType),
            call: matrixV1012.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1020: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1020.MultiAddress,
            real: matrixV1020.MultiAddress,
            forceProxyType: sts.option(() => matrixV1020.ProxyType),
            call: matrixV1020.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1022: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1022.MultiAddress,
            real: matrixV1022.MultiAddress,
            forceProxyType: sts.option(() => matrixV1022.ProxyType),
            call: matrixV1022.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1023: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1023.MultiAddress,
            real: matrixV1023.MultiAddress,
            forceProxyType: sts.option(() => matrixV1023.ProxyType),
            call: matrixV1023.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    enjinV1032: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: enjinV1032.MultiAddress,
            real: enjinV1032.MultiAddress,
            forceProxyType: sts.option(() => enjinV1032.ProxyType),
            call: enjinV1032.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    enjinV1050: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: enjinV1050.MultiAddress,
            real: enjinV1050.MultiAddress,
            forceProxyType: sts.option(() => enjinV1050.ProxyType),
            call: enjinV1050.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1030: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1030.MultiAddress,
            real: v1030.MultiAddress,
            forceProxyType: sts.option(() => v1030.ProxyType),
            call: v1030.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1031: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1031.MultiAddress,
            real: v1031.MultiAddress,
            forceProxyType: sts.option(() => v1031.ProxyType),
            call: v1031.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1032: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1032.MultiAddress,
            real: v1032.MultiAddress,
            forceProxyType: sts.option(() => v1032.ProxyType),
            call: v1032.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1050: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1050.MultiAddress,
            real: v1050.MultiAddress,
            forceProxyType: sts.option(() => v1050.ProxyType),
            call: v1050.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixV1030: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixV1030.MultiAddress,
            real: matrixV1030.MultiAddress,
            forceProxyType: sts.option(() => matrixV1030.ProxyType),
            call: matrixV1030.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     *
     * Removes any corresponding announcement(s).
     *
     * The dispatch origin for this call must be _Signed_.
     *
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1060: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1060.MultiAddress,
            real: v1060.MultiAddress,
            forceProxyType: sts.option(() => v1060.ProxyType),
            call: v1060.Call,
        })
    ),
}
