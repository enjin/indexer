import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const authorities =  {
    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will
     *  always be updated to the latest AuRa authorities in `on_finalize`.
     */
    v1010: new StorageType('AuraExt.Authorities', 'Default', [], sts.array(() => v1010.Public)) as AuthoritiesV1010,
}

/**
 *  Serves as cache for the authorities.
 * 
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will
 *  always be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuthoritiesV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1010.Public[]
    get(block: Block): Promise<(v1010.Public[] | undefined)>
}

export const slotInfo =  {
    /**
     *  Current slot paired with a number of authored blocks.
     * 
     *  Updated on each block initialization.
     */
    v1010: new StorageType('AuraExt.SlotInfo', 'Optional', [], sts.tuple(() => [v1010.Slot, sts.number()])) as SlotInfoV1010,
}

/**
 *  Current slot paired with a number of authored blocks.
 * 
 *  Updated on each block initialization.
 */
export interface SlotInfoV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1010.Slot, number] | undefined)>
}
