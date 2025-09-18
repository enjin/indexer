import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV1023 from '../matrixV1023'

export const controlAutoMigration = {
    name: 'StateTrieMigration.control_auto_migration',
    /**
     * Control the automatic migration.
     *
     * The dispatch origin of this call must be [`Config::ControlOrigin`].
     */
    matrixV1023: new CallType(
        'StateTrieMigration.control_auto_migration',
        sts.struct({
            maybeConfig: sts.option(() => matrixV1023.MigrationLimits),
        })
    ),
}

export const continueMigrate = {
    name: 'StateTrieMigration.continue_migrate',
    /**
     * Continue the migration for the given `limits`.
     *
     * The dispatch origin of this call can be any signed account.
     *
     * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
     * Upon successful execution, the transaction fee is returned.
     *
     * The (potentially over-estimated) of the byte length of all the data read must be
     * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
     * that executing the current `MigrationTask` with the given `limits` will not exceed
     * `real_size_upper` bytes of read data.
     *
     * The `witness_task` is merely a helper to prevent the caller from being slashed or
     * generally trigger a migration that they do not intend. This parameter is just a message
     * from caller, saying that they believed `witness_task` was the last state of the
     * migration, and they only wish for their transaction to do anything, if this assumption
     * holds. In case `witness_task` does not match, the transaction fails.
     *
     * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
     * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
     * `size` limit can always be overwritten.
     */
    matrixV1023: new CallType(
        'StateTrieMigration.continue_migrate',
        sts.struct({
            limits: matrixV1023.MigrationLimits,
            realSizeUpper: sts.number(),
            witnessTask: matrixV1023.MigrationTask,
        })
    ),
}

export const migrateCustomTop = {
    name: 'StateTrieMigration.migrate_custom_top',
    /**
     * Migrate the list of top keys by iterating each of them one by one.
     *
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    matrixV1023: new CallType(
        'StateTrieMigration.migrate_custom_top',
        sts.struct({
            keys: sts.array(() => sts.bytes()),
            witnessSize: sts.number(),
        })
    ),
}

export const migrateCustomChild = {
    name: 'StateTrieMigration.migrate_custom_child',
    /**
     * Migrate the list of child keys by iterating each of them one by one.
     *
     * All of the given child keys must be present under one `child_root`.
     *
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    matrixV1023: new CallType(
        'StateTrieMigration.migrate_custom_child',
        sts.struct({
            root: sts.bytes(),
            childKeys: sts.array(() => sts.bytes()),
            totalSize: sts.number(),
        })
    ),
}

export const setSignedMaxLimits = {
    name: 'StateTrieMigration.set_signed_max_limits',
    /**
     * Set the maximum limit of the signed migration.
     */
    matrixV1023: new CallType(
        'StateTrieMigration.set_signed_max_limits',
        sts.struct({
            limits: matrixV1023.MigrationLimits,
        })
    ),
}

export const forceSetProgress = {
    name: 'StateTrieMigration.force_set_progress',
    /**
     * Forcefully set the progress the running migration.
     *
     * This is only useful in one case: the next key to migrate is too big to be migrated with
     * a signed account, in a parachain context, and we simply want to skip it. A reasonable
     * example of this would be `:code:`, which is both very expensive to migrate, and commonly
     * used, so probably it is already migrated.
     *
     * In case you mess things up, you can also, in principle, use this to reset the migration
     * process.
     */
    matrixV1023: new CallType(
        'StateTrieMigration.force_set_progress',
        sts.struct({
            progressTop: matrixV1023.Progress,
            progressChild: matrixV1023.Progress,
        })
    ),
}
