import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1023 from '../matrixV1023'

export const migrated = {
    name: 'StateTrieMigration.Migrated',
    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    matrixV1023: new EventType(
        'StateTrieMigration.Migrated',
        sts.struct({
            top: sts.number(),
            child: sts.number(),
            compute: matrixV1023.MigrationCompute,
        })
    ),
}

export const slashed = {
    name: 'StateTrieMigration.Slashed',
    /**
     * Some account got slashed by the given amount.
     */
    matrixV1023: new EventType(
        'StateTrieMigration.Slashed',
        sts.struct({
            who: matrixV1023.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const autoMigrationFinished = {
    name: 'StateTrieMigration.AutoMigrationFinished',
    /**
     * The auto migration task finished.
     */
    matrixV1023: new EventType('StateTrieMigration.AutoMigrationFinished', sts.unit()),
}

export const halted = {
    name: 'StateTrieMigration.Halted',
    /**
     * Migration got halted due to an error or miss-configuration.
     */
    matrixV1023: new EventType(
        'StateTrieMigration.Halted',
        sts.struct({
            error: matrixV1023.Error,
        })
    ),
}
