import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const enter =  {
    name: 'ParaInherent.enter',
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    enjinV100: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: enjinV100.V4InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    enjinV1032: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: enjinV1032.V6InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v100: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v100.V2InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v1030: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v1030.V6InherentData,
        })
    ),
}
