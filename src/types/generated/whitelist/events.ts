import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v104 from '../v104'
import * as v105 from '../v105'

export const callWhitelisted =  {
    name: 'Whitelist.CallWhitelisted',
    enjinV100: new EventType(
        'Whitelist.CallWhitelisted',
        sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}

export const whitelistedCallRemoved =  {
    name: 'Whitelist.WhitelistedCallRemoved',
    enjinV100: new EventType(
        'Whitelist.WhitelistedCallRemoved',
        sts.struct({
            callHash: enjinV100.H256,
        })
    ),
}

export const whitelistedCallDispatched =  {
    name: 'Whitelist.WhitelistedCallDispatched',
    enjinV100: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: enjinV100.H256,
            result: sts.result(() => enjinV100.PostDispatchInfo, () => enjinV100.DispatchErrorWithPostInfo),
        })
    ),
    enjinV101: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: enjinV101.H256,
            result: sts.result(() => enjinV101.PostDispatchInfo, () => enjinV101.DispatchErrorWithPostInfo),
        })
    ),
    v100: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v100.H256,
            result: sts.result(() => v100.PostDispatchInfo, () => v100.DispatchErrorWithPostInfo),
        })
    ),
    v104: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v104.H256,
            result: sts.result(() => v104.PostDispatchInfo, () => v104.DispatchErrorWithPostInfo),
        })
    ),
    v105: new EventType(
        'Whitelist.WhitelistedCallDispatched',
        sts.struct({
            callHash: v105.H256,
            result: sts.result(() => v105.PostDispatchInfo, () => v105.DispatchErrorWithPostInfo),
        })
    ),
}
