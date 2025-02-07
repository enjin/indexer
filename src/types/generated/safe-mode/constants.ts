import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const enterDuration =  {
    /**
     *  For how many blocks the safe-mode will be entered by [`Pallet::enter`].
     */
    matrixEnjinV1012: new ConstantType(
        'SafeMode.EnterDuration',
        sts.number()
    ),
}

export const extendDuration =  {
    /**
     *  For how many blocks the safe-mode can be extended by each [`Pallet::extend`] call.
     * 
     *  This does not impose a hard limit as the safe-mode can be extended multiple times.
     */
    matrixEnjinV1012: new ConstantType(
        'SafeMode.ExtendDuration',
        sts.number()
    ),
}

export const enterDepositAmount =  {
    /**
     *  The amount that will be reserved upon calling [`Pallet::enter`].
     * 
     *  `None` disallows permissionlessly enabling the safe-mode and is a sane default.
     */
    matrixEnjinV1012: new ConstantType(
        'SafeMode.EnterDepositAmount',
        sts.option(() => sts.bigint())
    ),
}

export const extendDepositAmount =  {
    /**
     *  The amount that will be reserved upon calling [`Pallet::extend`].
     * 
     *  `None` disallows permissionlessly extending the safe-mode and is a sane default.
     */
    matrixEnjinV1012: new ConstantType(
        'SafeMode.ExtendDepositAmount',
        sts.option(() => sts.bigint())
    ),
}

export const releaseDelay =  {
    /**
     *  The minimal duration a deposit will remain reserved after safe-mode is entered or
     *  extended, unless [`Pallet::force_release_deposit`] is successfully called sooner.
     * 
     *  Every deposit is tied to a specific activation or extension, thus each deposit can be
     *  released independently after the delay for it has passed.
     * 
     *  `None` disallows permissionlessly releasing the safe-mode deposits and is a sane
     *  default.
     */
    matrixEnjinV1012: new ConstantType(
        'SafeMode.ReleaseDelay',
        sts.option(() => sts.number())
    ),
}
