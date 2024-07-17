import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v1010 from '../v1010'

export const transferredMultiAssets =  {
    name: 'XTokens.TransferredMultiAssets',
    /**
     * Transferred `MultiAsset` with fee.
     */
    matrixEnjinV603: new EventType(
        'XTokens.TransferredMultiAssets',
        sts.struct({
            sender: matrixEnjinV603.AccountId32,
            assets: sts.array(() => matrixEnjinV603.V3MultiAsset),
            fee: matrixEnjinV603.V3MultiAsset,
            dest: matrixEnjinV603.V3MultiLocation,
        })
    ),
}

export const transferredAssets =  {
    name: 'XTokens.TransferredAssets',
    /**
     * Transferred `Asset` with fee.
     */
    v1010: new EventType(
        'XTokens.TransferredAssets',
        sts.struct({
            sender: v1010.AccountId32,
            assets: sts.array(() => v1010.V4Asset),
            fee: v1010.V4Asset,
            dest: v1010.V4Location,
        })
    ),
}
