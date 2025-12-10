import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'
import * as matrixEnjinV1031 from '../matrixEnjinV1031'

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
    /**
     * Transferred `Asset` with fee.
     */
    matrixEnjinV1031: new EventType(
        'XTokens.TransferredAssets',
        sts.struct({
            sender: matrixEnjinV1031.AccountId32,
            assets: sts.array(() => matrixEnjinV1031.V5Asset),
            fee: matrixEnjinV1031.V5Asset,
            dest: matrixEnjinV1031.V5Location,
        })
    ),
    /**
     * Transferred `Asset` with fee.
     */
    matrixV1010: new EventType(
        'XTokens.TransferredAssets',
        sts.struct({
            sender: matrixV1010.AccountId32,
            assets: sts.array(() => matrixV1010.V4Asset),
            fee: matrixV1010.V4Asset,
            dest: matrixV1010.V4Location,
        })
    ),
    /**
     * Transferred `Asset` with fee.
     */
    matrixV1030: new EventType(
        'XTokens.TransferredAssets',
        sts.struct({
            sender: matrixV1030.AccountId32,
            assets: sts.array(() => matrixV1030.V5Asset),
            fee: matrixV1030.V5Asset,
            dest: matrixV1030.V5Location,
        })
    ),
}
