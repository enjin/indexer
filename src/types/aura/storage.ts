import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const authorities =  {
    /**
     *  The current authority set.
     */
    matrixEnjinV1012: new StorageType('Aura.Authorities', 'Default', [], sts.array(() => matrixEnjinV1012.Public)) as AuthoritiesMatrixEnjinV1012,
}

/**
 *  The current authority set.
 */
export interface AuthoritiesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.Public[]
    get(block: Block): Promise<(matrixEnjinV1012.Public[] | undefined)>
}

export const currentSlot =  {
    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    matrixEnjinV1012: new StorageType('Aura.CurrentSlot', 'Default', [], matrixEnjinV1012.Slot) as CurrentSlotMatrixEnjinV1012,
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface CurrentSlotMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.Slot
    get(block: Block): Promise<(matrixEnjinV1012.Slot | undefined)>
}
