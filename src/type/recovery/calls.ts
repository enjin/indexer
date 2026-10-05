import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV1070 from '../enjinV1070'
import * as v1080 from '../v1080'

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
    enjinV1070: new CallType(
        'Recovery.set_current_head',
        sts.struct({
            paraId: enjinV1070.Id,
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
    enjinV1070: new CallType(
        'Recovery.set_current_code',
        sts.struct({
            paraId: enjinV1070.Id,
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
    enjinV1070: new CallType(
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
    enjinV1070: new CallType(
        'Recovery.set_future_code_hash',
        sts.struct({
            paraId: enjinV1070.Id,
            codeHash: sts.option(() => enjinV1070.ValidationCodeHash),
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
    enjinV1070: new CallType(
        'Recovery.set_future_code_upgrade',
        sts.struct({
            paraId: enjinV1070.Id,
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
    enjinV1070: new CallType(
        'Recovery.set_upgrade_go_ahead_signal',
        sts.struct({
            paraId: enjinV1070.Id,
            value: sts.option(() => enjinV1070.UpgradeGoAhead),
        })
    ),
}

export const setCode = {
    name: 'Recovery.set_code',
    /**
     * Calls `set_code`. Requires `ForceOrigin`.
     */
    enjinV1070: new CallType(
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
    enjinV1070: new CallType(
        'Recovery.force_chill',
        sts.struct({
            target: enjinV1070.AccountId32,
        })
    ),
}

export const forceNewEra = {
    name: 'Recovery.force_new_era',
    /**
     * Force sets the era. Requires `ForceOrigin`.
     */
    enjinV1070: new CallType('Recovery.force_new_era', sts.unit()),
}

export const scheduleCodeUpgrade = {
    name: 'Recovery.schedule_code_upgrade',
    /**
     * Schedule a validation code upgrade for a stale parachain.
     *
     * This lets the parachain manager push a code upgrade for a parachain that is unable to
     * submit one itself. It can only be called by the manager of the parachain, and only if
     * the parachain is stale.
     *
     * This delegates to [`polkadot_runtime_parachains::schedule_code_upgrade`] — the public,
     * **fallible** helper over `paras::schedule_code_upgrade_external` — rather than writing
     * `paras` storage directly. That is what keeps `paras`' invariants intact:
     *
     * - the new code is **reference counted** (`increase_code_ref` via the PVF check), so the
     *   blob cannot later be pruned out from under another parachain that shares it;
     * - the code goes through **PVF pre-checking** before it can become current;
     * - `can_upgrade_validation_code` is enforced (`CannotUpgradeCode`), so an upgrade cannot
     *   be started while one is already pending, and the `validation_upgrade_cooldown` holds;
     * - the code size is checked against both bounds (`InvalidCode`).
     *
     * Note the deliberate choice of this helper over `paras::force_schedule_code_upgrade`: the
     * latter is root-only upstream because it takes the relay parent block as a parameter and
     * skips every check above, silently discarding the upgrade instead of returning an error.
     * Here the upgrade block is derived by `paras` as `now + validation_upgrade_delay`, so a
     * signed caller cannot choose it.
     *
     * The upgrade block is recorded by `paras` itself once pre-checking passes — it is
     * deliberately not settable here, since an upgrade block for code that has not been
     * pre-checked is exactly the state this pallet used to be able to create. Under
     * `ApplyAtExpectedBlock` that record is the `FutureCodeUpgradesAt` list, not the
     * `FutureCodeUpgrades` map; the latter is only written by the `SetGoAheadSignal` strategy,
     * which waits for the parachain to acknowledge a signal and so is useless for a para that
     * is already stale.
     *
     * A pending upgrade normally resolves on its own: PVF rejection clears it, and acceptance
     * applies it after `validation_upgrade_delay`. When it gets stuck instead, clear it with
     * [`Self::cancel_code_upgrade`] — note that `set_upgrade_go_ahead_signal` does **not**
     * cancel an upgrade, since that signal is read by the parachain rather than by the relay
     * chain and does not gate application.
     *
     * ## Parameters
     * - `origin`: Must be signed by the parachain manager
     * - `para_id`: The ID of the parachain to upgrade
     * - `new_code`: The new validation code (WASM), bounded at decode time by
     *   [`BoundedValidationCode`] and at dispatch time by
     *   `MIN_CODE_SIZE..=HostConfiguration::max_code_size` inside `paras`
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     * - `paras::Error::CannotUpgradeCode`: An upgrade is already pending, or the para is in
     *   its upgrade cooldown
     * - `paras::Error::InvalidCode`: `new_code` is below `MIN_CODE_SIZE` or above
     *   `max_code_size`
     *
     * ## Events
     * - `CodeUpgradeScheduled`: Emitted when the upgrade is successfully scheduled
     */
    v1080: new CallType(
        'Recovery.schedule_code_upgrade',
        sts.struct({
            paraId: v1080.Id,
            newCode: sts.bytes(),
        })
    ),
}

export const cancelCodeUpgrade = {
    name: 'Recovery.cancel_code_upgrade',
    /**
     * Clear a stuck pending code upgrade for a stale parachain.
     *
     * This is the recovery path from the Matrixchain v1.1.3 incident (2024-10-21), where block
     * production stopped after a runtime upgrade. `paras::force_schedule_code_upgrade`
     * silently did nothing there because `FutureCodeHash` was already set, and recovery
     * ultimately required root `system::kill_storage` on three separate `paras` items — the
     * third of which was missed on the first pass and cost ~20 minutes of extra downtime.
     *
     * This clears all three in one call so none can be missed:
     * - `paras::FutureCodeHash`
     * - `paras::FutureCodeUpgrades`
     * - `paras::UpgradeGoAheadSignal` — the parachain reads this via merkle proof and panics
     *   with "No new validation function found in storage, GoAhead signal is not expected"
     *   when it is set with no matching validation function, which is exactly what a
     *   half-applied upgrade leaves behind.
     *
     * After this, [`Self::schedule_code_upgrade`] can run again (it requires
     * `paras::can_upgrade_validation_code`, which tests both `FutureCodeHash` **and**
     * `UpgradeRestrictionSignal`), and [`Self::set_current_head`] can roll the head back. If a
     * chain ever raises `validation_upgrade_cooldown` enough for the restriction signal to
     * matter here, `paras::remove_upgrade_cooldown` is a signed, manager-callable escape.
     *
     * **Refuses while a PVF pre-check vote for the pending hash is still live**
     * (`UpgradePrecheckInProgress`). This mirrors the guard `paras` applies before
     * offboarding: the vote-enactment paths key only on para id, not on the hash they were
     * started for, so clearing `FutureCodeHash` out from under a live vote desynchronises
     * the two. A later acceptance would apply a *different* blob at the old block — before
     * that blob's own pre-check finished — and a later rejection would delete a subsequently
     * scheduled upgrade and force an `Abort` signal.
     *
     * It deliberately does **not** touch `paras::UpgradeRestrictionSignal`: that enforces
     * `validation_upgrade_cooldown`, upstream charges for early removal via
     * `paras::remove_upgrade_cooldown`, and clearing it here would hand a parachain manager a
     * free cooldown bypass. It expires on its own.
     *
     * ## Known limitations
     * - `paras::decrease_code_ref` is private, so cancelling leaks one `CodeByHashRefs`
     *   reference: the blob is retained rather than pruned. That is the safe direction —
     *   premature pruning is what can brick a parachain that shares the blob.
     * - `paras::FutureCodeUpgradesAt` is private, so an upgrade that already passed
     *   pre-checking and entered the apply-at-block queue cannot be pulled back out.
     *
     * ## Errors
     * - `NotParachainAccount`: Caller is not the manager of the parachain
     * - `ParachainNotStale`: Parachain hasn't been stale long enough
     * - `ParachainNotRegistered`: Parachain doesn't exist
     *
     * ## Events
     * - `CodeUpgradeCancelled`: Emitted when the pending upgrade state is cleared
     */
    v1080: new CallType(
        'Recovery.cancel_code_upgrade',
        sts.struct({
            paraId: v1080.Id,
        })
    ),
}
