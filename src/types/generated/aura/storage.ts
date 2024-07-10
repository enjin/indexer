import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const authorities =  {
    /**
     *  The current authority set.
     */
    matrixEnjinV1010: new StorageType('Aura.Authorities', 'Default', [], sts.array(() => matrixEnjinV1010.Public)) as AuthoritiesMatrixEnjinV1010,
}

/**
 *  The current authority set.
 */
export interface AuthoritiesMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1010.Public[]
    get(block: Block): Promise<(matrixEnjinV1010.Public[] | undefined)>
}

export const currentSlot =  {
    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    matrixEnjinV1010: new StorageType('Aura.CurrentSlot', 'Default', [], matrixEnjinV1010.Slot) as CurrentSlotMatrixEnjinV1010,
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface CurrentSlotMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1010.Slot
    get(block: Block): Promise<(matrixEnjinV1010.Slot | undefined)>
}
