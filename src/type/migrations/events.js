'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.historicCleared =
    exports.migrationFailed =
    exports.migrationCompleted =
    exports.migrationAdvanced =
    exports.migrationSkipped =
    exports.upgradeFailed =
    exports.upgradeCompleted =
    exports.upgradeStarted =
        void 0
var support_1 = require('../support')
exports.upgradeStarted = {
    name: 'Migrations.UpgradeStarted',
    /**
     * A Runtime upgrade started.
     *
     * Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Migrations.UpgradeStarted',
        support_1.sts.struct({
            /**
             * The number of migrations that this upgrade contains.
             *
             * This can be used to design a progress indicator in combination with counting the
             * `MigrationCompleted` and `MigrationSkipped` events.
             */
            migrations: support_1.sts.number(),
        })
    ),
}
exports.upgradeCompleted = {
    name: 'Migrations.UpgradeCompleted',
    /**
     * The current runtime upgrade completed.
     *
     * This implies that all of its migrations completed successfully as well.
     */
    matrixEnjinV1012: new support_1.EventType('Migrations.UpgradeCompleted', support_1.sts.unit()),
}
exports.upgradeFailed = {
    name: 'Migrations.UpgradeFailed',
    /**
     * Runtime upgrade failed.
     *
     * This is very bad and will require governance intervention.
     */
    matrixEnjinV1012: new support_1.EventType('Migrations.UpgradeFailed', support_1.sts.unit()),
}
exports.migrationSkipped = {
    name: 'Migrations.MigrationSkipped',
    /**
     * A migration was skipped since it was already executed in the past.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Migrations.MigrationSkipped',
        support_1.sts.struct({
            /**
             * The index of the skipped migration within the [`Config::Migrations`] list.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.migrationAdvanced = {
    name: 'Migrations.MigrationAdvanced',
    /**
     * A migration progressed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Migrations.MigrationAdvanced',
        support_1.sts.struct({
            /**
             * The index of the migration within the [`Config::Migrations`] list.
             */
            index: support_1.sts.number(),
            /**
             * The number of blocks that this migration took so far.
             */
            took: support_1.sts.number(),
        })
    ),
}
exports.migrationCompleted = {
    name: 'Migrations.MigrationCompleted',
    /**
     * A Migration completed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Migrations.MigrationCompleted',
        support_1.sts.struct({
            /**
             * The index of the migration within the [`Config::Migrations`] list.
             */
            index: support_1.sts.number(),
            /**
             * The number of blocks that this migration took so far.
             */
            took: support_1.sts.number(),
        })
    ),
}
exports.migrationFailed = {
    name: 'Migrations.MigrationFailed',
    /**
     * A Migration failed.
     *
     * This implies that the whole upgrade failed and governance intervention is required.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Migrations.MigrationFailed',
        support_1.sts.struct({
            /**
             * The index of the migration within the [`Config::Migrations`] list.
             */
            index: support_1.sts.number(),
            /**
             * The number of blocks that this migration took so far.
             */
            took: support_1.sts.number(),
        })
    ),
}
exports.historicCleared = {
    name: 'Migrations.HistoricCleared',
    /**
     * The set of historical migrations has been cleared.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Migrations.HistoricCleared',
        support_1.sts.struct({
            /**
             * Should be passed to `clear_historic` in a successive call.
             */
            nextCursor: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        })
    ),
}
