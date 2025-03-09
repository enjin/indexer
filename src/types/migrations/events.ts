import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const upgradeStarted =  {
    name: 'Migrations.UpgradeStarted',
    /**
     * A Runtime upgrade started.
     * 
     * Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.UpgradeStarted',
        sts.struct({
            /**
             * The number of migrations that this upgrade contains.
             * 
             * This can be used to design a progress indicator in combination with counting the
             * `MigrationCompleted` and `MigrationSkipped` events.
             */
            migrations: sts.number(),
        })
    ),
}

export const upgradeCompleted =  {
    name: 'Migrations.UpgradeCompleted',
    /**
     * The current runtime upgrade completed.
     * 
     * This implies that all of its migrations completed successfully as well.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.UpgradeCompleted',
        sts.unit()
    ),
}

export const upgradeFailed =  {
    name: 'Migrations.UpgradeFailed',
    /**
     * Runtime upgrade failed.
     * 
     * This is very bad and will require governance intervention.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.UpgradeFailed',
        sts.unit()
    ),
}

export const migrationSkipped =  {
    name: 'Migrations.MigrationSkipped',
    /**
     * A migration was skipped since it was already executed in the past.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.MigrationSkipped',
        sts.struct({
            /**
             * The index of the skipped migration within the [`Config::Migrations`] list.
             */
            index: sts.number(),
        })
    ),
}

export const migrationAdvanced =  {
    name: 'Migrations.MigrationAdvanced',
    /**
     * A migration progressed.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.MigrationAdvanced',
        sts.struct({
            /**
             * The index of the migration within the [`Config::Migrations`] list.
             */
            index: sts.number(),
            /**
             * The number of blocks that this migration took so far.
             */
            took: sts.number(),
        })
    ),
}

export const migrationCompleted =  {
    name: 'Migrations.MigrationCompleted',
    /**
     * A Migration completed.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.MigrationCompleted',
        sts.struct({
            /**
             * The index of the migration within the [`Config::Migrations`] list.
             */
            index: sts.number(),
            /**
             * The number of blocks that this migration took so far.
             */
            took: sts.number(),
        })
    ),
}

export const migrationFailed =  {
    name: 'Migrations.MigrationFailed',
    /**
     * A Migration failed.
     * 
     * This implies that the whole upgrade failed and governance intervention is required.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.MigrationFailed',
        sts.struct({
            /**
             * The index of the migration within the [`Config::Migrations`] list.
             */
            index: sts.number(),
            /**
             * The number of blocks that this migration took so far.
             */
            took: sts.number(),
        })
    ),
}

export const historicCleared =  {
    name: 'Migrations.HistoricCleared',
    /**
     * The set of historical migrations has been cleared.
     */
    matrixEnjinV1012: new EventType(
        'Migrations.HistoricCleared',
        sts.struct({
            /**
             * Should be passed to `clear_historic` in a successive call.
             */
            nextCursor: sts.option(() => sts.bytes()),
        })
    ),
}
