import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     * A proxy was executed correctly, with the given.
     */
    v1010: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v1010.DispatchError),
        })
    ),
}

export const pureCreated =  {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v1010: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: v1010.AccountId32,
            who: v1010.AccountId32,
            proxyType: v1010.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     * An announcement was placed to make a call in the future.
     */
    v1010: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: v1010.AccountId32,
            proxy: v1010.AccountId32,
            callHash: v1010.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added.
     */
    v1010: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v1010.AccountId32,
            delegatee: v1010.AccountId32,
            proxyType: v1010.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    v1010: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: v1010.AccountId32,
            delegatee: v1010.AccountId32,
            proxyType: v1010.ProxyType,
            delay: sts.number(),
        })
    ),
}
