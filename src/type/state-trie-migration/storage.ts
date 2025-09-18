import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1023 from '../matrixV1023'

export const migrationProcess = {
    /**
     *  Migration progress.
     *
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    matrixV1023: new StorageType(
        'StateTrieMigration.MigrationProcess',
        'Default',
        [],
        matrixV1023.MigrationTask
    ) as MigrationProcessMatrixV1023,
}

/**
 *  Migration progress.
 *
 *  This stores the snapshot of the last migrated keys. It can be set into motion and move
 *  forward by any of the means provided by this pallet.
 */
export interface MigrationProcessMatrixV1023 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1023.MigrationTask
    get(block: Block): Promise<matrixV1023.MigrationTask | undefined>
}

export const autoLimits = {
    /**
     *  The limits that are imposed on automatic migrations.
     *
     *  If set to None, then no automatic migration happens.
     */
    matrixV1023: new StorageType(
        'StateTrieMigration.AutoLimits',
        'Default',
        [],
        sts.option(() => matrixV1023.MigrationLimits)
    ) as AutoLimitsMatrixV1023,
}

/**
 *  The limits that are imposed on automatic migrations.
 *
 *  If set to None, then no automatic migration happens.
 */
export interface AutoLimitsMatrixV1023 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1023.MigrationLimits | undefined
    get(block: Block): Promise<(matrixV1023.MigrationLimits | undefined) | undefined>
}

export const signedMigrationMaxLimits = {
    /**
     *  The maximum limits that the signed migration could use.
     *
     *  If not set, no signed submission is allowed.
     */
    matrixV1023: new StorageType(
        'StateTrieMigration.SignedMigrationMaxLimits',
        'Optional',
        [],
        matrixV1023.MigrationLimits
    ) as SignedMigrationMaxLimitsMatrixV1023,
}

/**
 *  The maximum limits that the signed migration could use.
 *
 *  If not set, no signed submission is allowed.
 */
export interface SignedMigrationMaxLimitsMatrixV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV1023.MigrationLimits | undefined>
}
