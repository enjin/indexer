import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     * A proxy was executed correctly, with the given.
     */
    matrixEnjinV1010: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => matrixEnjinV1010.DispatchError),
        })
    ),
}

export const pureCreated =  {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    matrixEnjinV1010: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: matrixEnjinV1010.AccountId32,
            who: matrixEnjinV1010.AccountId32,
            proxyType: matrixEnjinV1010.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     * An announcement was placed to make a call in the future.
     */
    matrixEnjinV1010: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: matrixEnjinV1010.AccountId32,
            proxy: matrixEnjinV1010.AccountId32,
            callHash: matrixEnjinV1010.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added.
     */
    matrixEnjinV1010: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: matrixEnjinV1010.AccountId32,
            delegatee: matrixEnjinV1010.AccountId32,
            proxyType: matrixEnjinV1010.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    matrixEnjinV1010: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: matrixEnjinV1010.AccountId32,
            delegatee: matrixEnjinV1010.AccountId32,
            proxyType: matrixEnjinV1010.ProxyType,
            delay: sts.number(),
        })
    ),
}
