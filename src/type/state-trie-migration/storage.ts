import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1031 from '../matrixEnjinV1031'

export const migrationProcess = {
    /**
     *  Migration progress.
     *
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    matrixEnjinV1031: new StorageType(
        'StateTrieMigration.MigrationProcess',
        'Default',
        [],
        matrixEnjinV1031.MigrationTask
    ) as MigrationProcessMatrixEnjinV1031,
}

/**
 *  Migration progress.
 *
 *  This stores the snapshot of the last migrated keys. It can be set into motion and move
 *  forward by any of the means provided by this pallet.
 */
export interface MigrationProcessMatrixEnjinV1031 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1031.MigrationTask
    get(block: Block): Promise<matrixEnjinV1031.MigrationTask | undefined>
}

export const autoLimits = {
    /**
     *  The limits that are imposed on automatic migrations.
     *
     *  If set to None, then no automatic migration happens.
     */
    matrixEnjinV1031: new StorageType(
        'StateTrieMigration.AutoLimits',
        'Default',
        [],
        sts.option(() => matrixEnjinV1031.MigrationLimits)
    ) as AutoLimitsMatrixEnjinV1031,
}

/**
 *  The limits that are imposed on automatic migrations.
 *
 *  If set to None, then no automatic migration happens.
 */
export interface AutoLimitsMatrixEnjinV1031 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1031.MigrationLimits | undefined
    get(block: Block): Promise<(matrixEnjinV1031.MigrationLimits | undefined) | undefined>
}

export const signedMigrationMaxLimits = {
    /**
     *  The maximum limits that the signed migration could use.
     *
     *  If not set, no signed submission is allowed.
     */
    matrixEnjinV1031: new StorageType(
        'StateTrieMigration.SignedMigrationMaxLimits',
        'Optional',
        [],
        matrixEnjinV1031.MigrationLimits
    ) as SignedMigrationMaxLimitsMatrixEnjinV1031,
}

/**
 *  The maximum limits that the signed migration could use.
 *
 *  If not set, no signed submission is allowed.
 */
export interface SignedMigrationMaxLimitsMatrixEnjinV1031 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1031.MigrationLimits | undefined>
}
