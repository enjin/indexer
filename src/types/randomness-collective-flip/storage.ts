import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    enjinV100: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => enjinV100.H256)) as RandomMaterialEnjinV100,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.H256[]
    get(block: Block): Promise<(enjinV100.H256[] | undefined)>
}
