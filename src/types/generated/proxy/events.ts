import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     * A proxy was executed correctly, with the given.
     */
    matrixEnjinV1012: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => matrixEnjinV1012.DispatchError),
        })
    ),
}

export const pureCreated =  {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    matrixEnjinV1012: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: matrixEnjinV1012.AccountId32,
            who: matrixEnjinV1012.AccountId32,
            proxyType: matrixEnjinV1012.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     * An announcement was placed to make a call in the future.
     */
    matrixEnjinV1012: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: matrixEnjinV1012.AccountId32,
            proxy: matrixEnjinV1012.AccountId32,
            callHash: matrixEnjinV1012.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added.
     */
    matrixEnjinV1012: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: matrixEnjinV1012.AccountId32,
            delegatee: matrixEnjinV1012.AccountId32,
            proxyType: matrixEnjinV1012.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    matrixEnjinV1012: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: matrixEnjinV1012.AccountId32,
            delegatee: matrixEnjinV1012.AccountId32,
            proxyType: matrixEnjinV1012.ProxyType,
            delay: sts.number(),
        })
    ),
}
