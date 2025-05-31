import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
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
    matrixV500: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: matrixV500.V3MultiAsset,
            who: matrixV500.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    matrixV1010: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: matrixV1010.V4Asset,
            who: matrixV1010.V4Location,
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
    matrixV500: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: matrixV500.V3MultiAsset,
            who: matrixV500.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    matrixV1010: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: matrixV1010.V4Asset,
            who: matrixV1010.V4Location,
        })
    ),
}
