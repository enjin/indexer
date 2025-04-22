import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const forceSetCursor = {
    name: 'Migrations.force_set_cursor',
    /**
     * Allows root to set a cursor to forcefully start, stop or forward the migration process.
     *
     * Should normally not be needed and is only in place as emergency measure. Note that
     * restarting the migration process in this manner will not call the
     * [`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
     */
    matrixEnjinV1012: new CallType(
        'Migrations.force_set_cursor',
        sts.struct({
            cursor: sts.option(() => matrixEnjinV1012.MigrationCursor),
        })
    ),
}

export const forceSetActiveCursor = {
    name: 'Migrations.force_set_active_cursor',
    /**
     * Allows root to set an active cursor to forcefully start/forward the migration process.
     *
     * This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
     * `started_at` value to the next block number. Otherwise this would not be possible, since
     * `force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
     * indicates that the current block number plus one should be used.
     */
    matrixEnjinV1012: new CallType(
        'Migrations.force_set_active_cursor',
        sts.struct({
            index: sts.number(),
            innerCursor: sts.option(() => sts.bytes()),
            startedAt: sts.option(() => sts.number()),
        })
    ),
}

export const forceOnboardMbms = {
    name: 'Migrations.force_onboard_mbms',
    /**
     * Forces the onboarding of the migrations.
     *
     * This process happens automatically on a runtime upgrade. It is in place as an emergency
     * measurement. The cursor needs to be `None` for this to succeed.
     */
    matrixEnjinV1012: new CallType('Migrations.force_onboard_mbms', sts.unit()),
}

export const clearHistoric = {
    name: 'Migrations.clear_historic',
    /**
     * Clears the `Historic` set.
     *
     * `map_cursor` must be set to the last value that was returned by the
     * `HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
     * way that will result in a sensible weight.
     */
    matrixEnjinV1012: new CallType(
        'Migrations.clear_historic',
        sts.struct({
            selector: matrixEnjinV1012.HistoricCleanupSelector,
        })
    ),
}
