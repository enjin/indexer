import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const authorities = {
    /**
     *  Serves as cache for the authorities.
     *
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will
     *  always be updated to the latest AuRa authorities in `on_finalize`.
     */
    matrixEnjinV1012: new StorageType(
        'AuraExt.Authorities',
        'Default',
        [],
        sts.array(() => matrixEnjinV1012.Public)
    ) as AuthoritiesMatrixEnjinV1012,
}

/**
 *  Serves as cache for the authorities.
 *
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will
 *  always be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuthoritiesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.Public[]
    get(block: Block): Promise<matrixEnjinV1012.Public[] | undefined>
}

export const slotInfo = {
    /**
     *  Current slot paired with a number of authored blocks.
     *
     *  Updated on each block initialization.
     */
    matrixEnjinV1012: new StorageType(
        'AuraExt.SlotInfo',
        'Optional',
        [],
        sts.tuple(() => [matrixEnjinV1012.Slot, sts.number()])
    ) as SlotInfoMatrixEnjinV1012,
}

/**
 *  Current slot paired with a number of authored blocks.
 *
 *  Updated on each block initialization.
 */
export interface SlotInfoMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<[matrixEnjinV1012.Slot, number] | undefined>
}
