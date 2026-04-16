import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as v1070 from '../v1070'

export const setCurrentHead = {
    name: 'Recovery.set_current_head',
    /**
     * Force-set the current head data for a stale parachain.
     *
     * This extrinsic can only be called by the manager of the parachain,
     * and only if the parachain is stale (hasn't been updated for at least
     * the configured threshold number of blocks).
     *
     * ## Parameters
     * - `origin`: Must be signed by the parachain manager
     * - `para_id`: The ID of the parachain to update
     * - `new_head`: The new head data for the parachain
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     *
     * ## Events
     * - `CurrentHeadForced`: Emitted when head data is successfully updated
     */
    v1070: new CallType(
        'Recovery.set_current_head',
        sts.struct({
            paraId: v1070.Id,
            newHead: sts.bytes(),
        })
    ),
}

export const setCurrentCode = {
    name: 'Recovery.set_current_code',
    /**
     * Force-set the validation code for a stale parachain.
     *
     * This extrinsic can only be called by the manager of the parachain,
     * and only if the parachain is stale (hasn't been updated for at least
     * the configured threshold number of blocks).
     *
     * ## Parameters
     * - `origin`: Must be signed by the parachain manager
     * - `para_id`: The ID of the parachain to update
     * - `new_code`: The new validation code (WASM) for the parachain
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     *
     * ## Events
     * - `CurrentCodeForced`: Emitted when validation code is successfully updated
     */
    v1070: new CallType(
        'Recovery.set_current_code',
        sts.struct({
            paraId: v1070.Id,
            newCode: sts.bytes(),
        })
    ),
}

export const setStaleThreshold = {
    name: 'Recovery.set_stale_threshold',
    /**
     * Update the stale block threshold.
     *
     * This extrinsic updates the number of blocks after which a parachain
     * is considered stale. This can only be called by the configured `ForceOrigin`,
     * which is typically root or a governance mechanism.
     *
     * ## Parameters
     * - `origin`: Must be the configured `ForceOrigin` (typically root)
     * - `threshold`: The new threshold value in number of blocks
     *
     * ## Events
     * - `StaleBlockThresholdUpdated`: Emitted when threshold is updated
     */
    v1070: new CallType(
        'Recovery.set_stale_threshold',
        sts.struct({
            threshold: sts.number(),
        })
    ),
}

export const setFutureCodeHash = {
    name: 'Recovery.set_future_code_hash',
    /**
     * Set the future code hash for a stale parachain.
     *
     * This extrinsic allows the parachain manager to set the future code hash
     * for a stale parachain. This is useful for coordinating code upgrades when
     * a parachain is unable to submit the upgrade itself.
     *
     * This can only be called by the manager of the parachain, and only if the
     * parachain is stale.
     *
     * ## Parameters
     * - `origin`: Must be signed by the parachain manager
     * - `para_id`: The ID of the parachain to update
     * - `code_hash`: The validation code hash to set as the future code
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     *
     * ## Events
     * - `FutureCodeHashSet`: Emitted when future code hash is successfully set
     */
    v1070: new CallType(
        'Recovery.set_future_code_hash',
        sts.struct({
            paraId: v1070.Id,
            codeHash: sts.option(() => v1070.ValidationCodeHash),
        })
    ),
}

export const setFutureCodeUpgrade = {
    name: 'Recovery.set_future_code_upgrade',
    /**
     * Set the future code upgrade block for a stale parachain.
     *
     * This extrinsic allows the parachain manager to schedule when a code upgrade
     * will take effect for a stale parachain. This is used in conjunction with
     * `set_future_code_hash` to coordinate the upgrade process.
     *
     * This can only be called by the manager of the parachain, and only if the
     * parachain is stale.
     *
     * ## Parameters
     * - `origin`: Must be signed by the parachain manager
     * - `para_id`: The ID of the parachain to update
     * - `upgrade_block`: The block number when the upgrade should occur
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     *
     * ## Events
     * - `FutureCodeUpgradeSet`: Emitted when upgrade block is successfully set
     */
    v1070: new CallType(
        'Recovery.set_future_code_upgrade',
        sts.struct({
            paraId: v1070.Id,
            upgradeBlock: sts.option(() => sts.number()),
        })
    ),
}

export const setUpgradeGoAheadSignal = {
    name: 'Recovery.set_upgrade_go_ahead_signal',
    /**
     * Set the upgrade go-ahead signal for a stale parachain.
     *
     * This extrinsic allows the parachain manager to signal whether the relay chain
     * should allow a pending code upgrade to proceed. The signal is stored in the
     * paras pallet's `UpgradeGoAheadSignal` storage.
     *
     * This can only be called by the manager of the parachain, and only if the
     * parachain is stale. Since `UpgradeGoAheadSignal` is private, this uses
     * `set_storage` to write the value directly.
     *
     * ## Parameters
     * - `origin`: Must be signed by the parachain manager
     * - `para_id`: The ID of the parachain to update
     * - `signal`: Raw encoded UpgradeGoAhead value (0x00 = GoAhead, 0x01 = Abort)
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     * - `InvalidUpgradeSignal`: The signal value is not valid (must be 0x00 or 0x01)
     *
     * ## Events
     * - `UpgradeGoAheadSignalSet`: Emitted when signal is successfully set
     */
    v1070: new CallType(
        'Recovery.set_upgrade_go_ahead_signal',
        sts.struct({
            paraId: v1070.Id,
            value: sts.option(() => v1070.UpgradeGoAhead),
        })
    ),
}

export const setCode = {
    name: 'Recovery.set_code',
    /**
     * Calls `set_code`. Requires `ForceOrigin`.
     */
    v1070: new CallType(
        'Recovery.set_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const forceChill = {
    name: 'Recovery.force_chill',
    /**
     * Forces a validator to chill. Requires `ForceOrigin`.
     */
    v1070: new CallType(
        'Recovery.force_chill',
        sts.struct({
            target: v1070.AccountId32,
        })
    ),
}

export const forceNewEra = {
    name: 'Recovery.force_new_era',
    /**
     * Force sets the era. Requires `ForceOrigin`.
     */
    v1070: new CallType('Recovery.force_new_era', sts.unit()),
}
