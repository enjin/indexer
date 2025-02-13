import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const rootHash = {
    /**
     *  Latest MMR Root hash.
     */
    enjinV100: new StorageType('Mmr.RootHash', 'Default', [], enjinV100.H256) as RootHashEnjinV100,
}

/**
 *  Latest MMR Root hash.
 */
export interface RootHashEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.H256
    get(block: Block): Promise<enjinV100.H256 | undefined>
}

export const numberOfLeaves = {
    /**
     *  Current size of the MMR (number of leaves).
     */
    enjinV100: new StorageType('Mmr.NumberOfLeaves', 'Default', [], sts.bigint()) as NumberOfLeavesEnjinV100,
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface NumberOfLeavesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const nodes = {
    /**
     *  Hashes of the nodes in the MMR.
     *
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    enjinV100: new StorageType('Mmr.Nodes', 'Optional', [sts.bigint()], enjinV100.H256) as NodesEnjinV100,
}

/**
 *  Hashes of the nodes in the MMR.
 *
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface NodesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV100.H256 | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV100.H256 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV100.H256 | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV100.H256 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV100.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV100.H256 | undefined][]>
}
