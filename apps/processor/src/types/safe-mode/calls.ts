import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const enter =  {
    name: 'SafeMode.enter',
    /**
     * Enter safe-mode permissionlessly for [`Config::EnterDuration`] blocks.
     * 
     * Reserves [`Config::EnterDepositAmount`] from the caller's account.
     * Emits an [`Event::Entered`] event on success.
     * Errors with [`Error::Entered`] if the safe-mode is already entered.
     * Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.enter',
        sts.unit()
    ),
}

export const forceEnter =  {
    name: 'SafeMode.force_enter',
    /**
     * Enter safe-mode by force for a per-origin configured number of blocks.
     * 
     * Emits an [`Event::Entered`] event on success.
     * Errors with [`Error::Entered`] if the safe-mode is already entered.
     * 
     * Can only be called by the [`Config::ForceEnterOrigin`] origin.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.force_enter',
        sts.unit()
    ),
}

export const extend =  {
    name: 'SafeMode.extend',
    /**
     * Extend the safe-mode permissionlessly for [`Config::ExtendDuration`] blocks.
     * 
     * This accumulates on top of the current remaining duration.
     * Reserves [`Config::ExtendDepositAmount`] from the caller's account.
     * Emits an [`Event::Extended`] event on success.
     * Errors with [`Error::Exited`] if the safe-mode is entered.
     * Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
     * 
     * This may be called by any signed origin with [`Config::ExtendDepositAmount`] free
     * currency to reserve. This call can be disabled for all origins by configuring
     * [`Config::ExtendDepositAmount`] to `None`.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.extend',
        sts.unit()
    ),
}

export const forceExtend =  {
    name: 'SafeMode.force_extend',
    /**
     * Extend the safe-mode by force for a per-origin configured number of blocks.
     * 
     * Emits an [`Event::Extended`] event on success.
     * Errors with [`Error::Exited`] if the safe-mode is inactive.
     * 
     * Can only be called by the [`Config::ForceExtendOrigin`] origin.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.force_extend',
        sts.unit()
    ),
}

export const forceExit =  {
    name: 'SafeMode.force_exit',
    /**
     * Exit safe-mode by force.
     * 
     * Emits an [`Event::Exited`] with [`ExitReason::Force`] event on success.
     * Errors with [`Error::Exited`] if the safe-mode is inactive.
     * 
     * Note: `safe-mode` will be automatically deactivated by [`Pallet::on_initialize`] hook
     * after the block height is greater than the [`EnteredUntil`] storage item.
     * Emits an [`Event::Exited`] with [`ExitReason::Timeout`] event when deactivated in the
     * hook.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.force_exit',
        sts.unit()
    ),
}

export const forceSlashDeposit =  {
    name: 'SafeMode.force_slash_deposit',
    /**
     * Slash a deposit for an account that entered or extended safe-mode at a given
     * historical block.
     * 
     * This can only be called while safe-mode is entered.
     * 
     * Emits a [`Event::DepositSlashed`] event on success.
     * Errors with [`Error::Entered`] if safe-mode is entered.
     * 
     * Can only be called by the [`Config::ForceDepositOrigin`] origin.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.force_slash_deposit',
        sts.struct({
            account: matrixEnjinV1012.AccountId32,
            block: sts.number(),
        })
    ),
}

export const releaseDeposit =  {
    name: 'SafeMode.release_deposit',
    /**
     * Permissionlessly release a deposit for an account that entered safe-mode at a
     * given historical block.
     * 
     * The call can be completely disabled by setting [`Config::ReleaseDelay`] to `None`.
     * This cannot be called while safe-mode is entered and not until
     * [`Config::ReleaseDelay`] blocks have passed since safe-mode was entered.
     * 
     * Emits a [`Event::DepositReleased`] event on success.
     * Errors with [`Error::Entered`] if the safe-mode is entered.
     * Errors with [`Error::CannotReleaseYet`] if [`Config::ReleaseDelay`] block have not
     * passed since safe-mode was entered. Errors with [`Error::NoDeposit`] if the payee has no
     * reserved currency at the block specified.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.release_deposit',
        sts.struct({
            account: matrixEnjinV1012.AccountId32,
            block: sts.number(),
        })
    ),
}

export const forceReleaseDeposit =  {
    name: 'SafeMode.force_release_deposit',
    /**
     * Force to release a deposit for an account that entered safe-mode at a given
     * historical block.
     * 
     * This can be called while safe-mode is still entered.
     * 
     * Emits a [`Event::DepositReleased`] event on success.
     * Errors with [`Error::Entered`] if safe-mode is entered.
     * Errors with [`Error::NoDeposit`] if the payee has no reserved currency at the
     * specified block.
     * 
     * Can only be called by the [`Config::ForceDepositOrigin`] origin.
     */
    matrixEnjinV1012: new CallType(
        'SafeMode.force_release_deposit',
        sts.struct({
            account: matrixEnjinV1012.AccountId32,
            block: sts.number(),
        })
    ),
}
