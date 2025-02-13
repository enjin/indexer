import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const listNodes = {
    /**
     *  A single node, within some bag.
     *
     *  Nodes store links forward and back within their respective bags.
     */
    enjinV100: new StorageType(
        'VoterList.ListNodes',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.Node
    ) as ListNodesEnjinV100,
}

/**
 *  A single node, within some bag.
 *
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.Node | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.Node | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
}

export const counterForListNodes = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType(
        'VoterList.CounterForListNodes',
        'Default',
        [],
        sts.number()
    ) as CounterForListNodesEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const listBags = {
    /**
     *  A bag stored in storage.
     *
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    enjinV100: new StorageType('VoterList.ListBags', 'Optional', [sts.bigint()], enjinV100.Bag) as ListBagsEnjinV100,
}

/**
 *  A bag stored in storage.
 *
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV100.Bag | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV100.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV100.Bag | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV100.Bag | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV100.Bag | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV100.Bag | undefined][]>
}
