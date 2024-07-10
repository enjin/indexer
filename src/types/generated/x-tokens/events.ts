import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

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
    matrixEnjinV1010: new EventType(
        'XTokens.TransferredAssets',
        sts.struct({
            sender: matrixEnjinV1010.AccountId32,
            assets: sts.array(() => matrixEnjinV1010.V4Asset),
            fee: matrixEnjinV1010.V4Asset,
            dest: matrixEnjinV1010.V4Location,
        })
    ),
}
