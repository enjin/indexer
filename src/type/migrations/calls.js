'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.clearHistoric = exports.forceOnboardMbms = exports.forceSetActiveCursor = exports.forceSetCursor = void 0
var support_1 = require('../support')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.forceSetCursor = {
    name: 'Migrations.force_set_cursor',
    /**
     * Allows root to set a cursor to forcefully start, stop or forward the migration process.
     *
     * Should normally not be needed and is only in place as emergency measure. Note that
     * restarting the migration process in this manner will not call the
     * [`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Migrations.force_set_cursor',
        support_1.sts.struct({
            cursor: support_1.sts.option(function () {
                return matrixEnjinV1012.MigrationCursor
            }),
        })
    ),
}
exports.forceSetActiveCursor = {
    name: 'Migrations.force_set_active_cursor',
    /**
     * Allows root to set an active cursor to forcefully start/forward the migration process.
     *
     * This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
     * `started_at` value to the next block number. Otherwise this would not be possible, since
     * `force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
     * indicates that the current block number plus one should be used.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Migrations.force_set_active_cursor',
        support_1.sts.struct({
            index: support_1.sts.number(),
            innerCursor: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            startedAt: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.forceOnboardMbms = {
    name: 'Migrations.force_onboard_mbms',
    /**
     * Forces the onboarding of the migrations.
     *
     * This process happens automatically on a runtime upgrade. It is in place as an emergency
     * measurement. The cursor needs to be `None` for this to succeed.
     */
    matrixEnjinV1012: new support_1.CallType('Migrations.force_onboard_mbms', support_1.sts.unit()),
}
exports.clearHistoric = {
    name: 'Migrations.clear_historic',
    /**
     * Clears the `Historic` set.
     *
     * `map_cursor` must be set to the last value that was returned by the
     * `HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
     * way that will result in a sensible weight.
     */
    matrixEnjinV1012: new support_1.CallType(
        'Migrations.clear_historic',
        support_1.sts.struct({
            selector: matrixEnjinV1012.HistoricCleanupSelector,
        })
    ),
}
