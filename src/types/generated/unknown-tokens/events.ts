import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const deposited =  {
    name: 'UnknownTokens.Deposited',
    /**
     * Deposit success.
     */
    matrixEnjinV603: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: matrixEnjinV603.V3MultiAsset,
            who: matrixEnjinV603.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    matrixEnjinV1012: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: matrixEnjinV1012.V4Asset,
            who: matrixEnjinV1012.V4Location,
        })
    ),
    /**
     * Deposit success.
     */
    v500: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v500.V3MultiAsset,
            who: v500.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v1010: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v1010.V4Asset,
            who: v1010.V4Location,
        })
    ),
}

export const withdrawn =  {
    name: 'UnknownTokens.Withdrawn',
    /**
     * Withdraw success.
     */
    matrixEnjinV603: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: matrixEnjinV603.V3MultiAsset,
            who: matrixEnjinV603.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    matrixEnjinV1012: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: matrixEnjinV1012.V4Asset,
            who: matrixEnjinV1012.V4Location,
        })
    ),
    /**
     * Withdraw success.
     */
    v500: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v500.V3MultiAsset,
            who: v500.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v1010: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v1010.V4Asset,
            who: v1010.V4Location,
        })
    ),
}
