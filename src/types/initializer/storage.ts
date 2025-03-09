import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const hasInitialized =  {
    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    enjinV100: new StorageType('Initializer.HasInitialized', 'Optional', [], sts.unit()) as HasInitializedEnjinV100,
}

/**
 *  Whether the parachains modules have been initialized within this block.
 * 
 *  Semantically a `bool`, but this guarantees it should never hit the trie,
 *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
 * 
 *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
 *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
 *  the semantics of this variable.
 */
export interface HasInitializedEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(null | undefined)>
}

export const bufferedSessionChanges =  {
    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    enjinV100: new StorageType('Initializer.BufferedSessionChanges', 'Default', [], sts.array(() => enjinV100.BufferedSessionChange)) as BufferedSessionChangesEnjinV100,
}

/**
 *  Buffered session changes along with the block number at which they should be applied.
 * 
 *  Typically this will be empty or one element long. Apart from that this item never hits
 *  the storage.
 * 
 *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
 *  upgrade boundaries or if governance intervenes.
 */
export interface BufferedSessionChangesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.BufferedSessionChange[]
    get(block: Block): Promise<(enjinV100.BufferedSessionChange[] | undefined)>
}
