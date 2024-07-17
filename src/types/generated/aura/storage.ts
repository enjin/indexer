import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const authorities =  {
    /**
     *  The current authority set.
     */
    v1010: new StorageType('Aura.Authorities', 'Default', [], sts.array(() => v1010.Public)) as AuthoritiesV1010,
}

/**
 *  The current authority set.
 */
export interface AuthoritiesV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1010.Public[]
    get(block: Block): Promise<(v1010.Public[] | undefined)>
}

export const currentSlot =  {
    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    v1010: new StorageType('Aura.CurrentSlot', 'Default', [], v1010.Slot) as CurrentSlotV1010,
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface CurrentSlotV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1010.Slot
    get(block: Block): Promise<(v1010.Slot | undefined)>
}
