import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV1031 from '../matrixEnjinV1031'

export const migrated = {
    name: 'StateTrieMigration.Migrated',
    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    matrixEnjinV1031: new EventType(
        'StateTrieMigration.Migrated',
        sts.struct({
            top: sts.number(),
            child: sts.number(),
            compute: matrixEnjinV1031.MigrationCompute,
        })
    ),
}

export const slashed = {
    name: 'StateTrieMigration.Slashed',
    /**
     * Some account got slashed by the given amount.
     */
    matrixEnjinV1031: new EventType(
        'StateTrieMigration.Slashed',
        sts.struct({
            who: matrixEnjinV1031.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const autoMigrationFinished = {
    name: 'StateTrieMigration.AutoMigrationFinished',
    /**
     * The auto migration task finished.
     */
    matrixEnjinV1031: new EventType('StateTrieMigration.AutoMigrationFinished', sts.unit()),
}

export const halted = {
    name: 'StateTrieMigration.Halted',
    /**
     * Migration got halted due to an error or miss-configuration.
     */
    matrixEnjinV1031: new EventType(
        'StateTrieMigration.Halted',
        sts.struct({
            error: matrixEnjinV1031.Error,
        })
    ),
}
