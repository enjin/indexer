import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const migrationMaxKeys = {
    /**
     *  Maximum number of accounts that can be migrated at once
     */
    matrixEnjinV603: new ConstantType('MultiTokensMigration.MigrationMaxKeys', sts.number()),
}

export const multiTokensMigrationPalletsToPause = {
    /**
     *  List of extrinsics to pause during multi block migration (this pallet is excluded)
     */
    matrixEnjinV603: new ConstantType(
        'MultiTokensMigration.MultiTokensMigrationPalletsToPause',
        sts.array(() => matrixEnjinV603.ExtrinsicInfo)
    ),
}
