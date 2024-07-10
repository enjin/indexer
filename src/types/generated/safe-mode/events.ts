import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const entered =  {
    name: 'SafeMode.Entered',
    /**
     * The safe-mode was entered until inclusively this block.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.Entered',
        sts.struct({
            until: sts.number(),
        })
    ),
}

export const extended =  {
    name: 'SafeMode.Extended',
    /**
     * The safe-mode was extended until inclusively this block.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.Extended',
        sts.struct({
            until: sts.number(),
        })
    ),
}

export const exited =  {
    name: 'SafeMode.Exited',
    /**
     * Exited the safe-mode for a specific reason.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.Exited',
        sts.struct({
            reason: matrixEnjinV1010.ExitReason,
        })
    ),
}

export const depositPlaced =  {
    name: 'SafeMode.DepositPlaced',
    /**
     * An account reserved funds for either entering or extending the safe-mode.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.DepositPlaced',
        sts.struct({
            account: matrixEnjinV1010.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const depositReleased =  {
    name: 'SafeMode.DepositReleased',
    /**
     * An account had a reserve released that was reserved.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.DepositReleased',
        sts.struct({
            account: matrixEnjinV1010.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const depositSlashed =  {
    name: 'SafeMode.DepositSlashed',
    /**
     * An account had reserve slashed that was reserved.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.DepositSlashed',
        sts.struct({
            account: matrixEnjinV1010.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const cannotDeposit =  {
    name: 'SafeMode.CannotDeposit',
    /**
     * Could not hold funds for entering or extending the safe-mode.
     * 
     * This error comes from the underlying `Currency`.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.CannotDeposit',
        sts.unit()
    ),
}

export const cannotRelease =  {
    name: 'SafeMode.CannotRelease',
    /**
     * Could not release funds for entering or extending the safe-mode.
     * 
     * This error comes from the underlying `Currency`.
     */
    matrixEnjinV1010: new EventType(
        'SafeMode.CannotRelease',
        sts.unit()
    ),
}
