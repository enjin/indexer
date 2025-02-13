import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const transferredMultiAssets = {
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

export const transferredAssets = {
    name: 'XTokens.TransferredAssets',
    /**
     * Transferred `Asset` with fee.
     */
    matrixEnjinV1012: new EventType(
        'XTokens.TransferredAssets',
        sts.struct({
            sender: matrixEnjinV1012.AccountId32,
            assets: sts.array(() => matrixEnjinV1012.V4Asset),
            fee: matrixEnjinV1012.V4Asset,
            dest: matrixEnjinV1012.V4Location,
        })
    ),
}
