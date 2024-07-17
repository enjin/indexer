import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const concreteFungibleBalances =  {
    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    v1010: new StorageType('UnknownTokens.ConcreteFungibleBalances', 'Default', [v1010.V4Location, v1010.V4Location], sts.bigint()) as ConcreteFungibleBalancesV1010,
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface ConcreteFungibleBalancesV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v1010.V4Location, key2: v1010.V4Location): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v1010.V4Location, v1010.V4Location][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v1010.V4Location, v1010.V4Location][]>
    getKeys(block: Block, key1: v1010.V4Location): Promise<[v1010.V4Location, v1010.V4Location][]>
    getKeys(block: Block, key1: v1010.V4Location, key2: v1010.V4Location): Promise<[v1010.V4Location, v1010.V4Location][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1010.V4Location, v1010.V4Location][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.V4Location): AsyncIterable<[v1010.V4Location, v1010.V4Location][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.V4Location, key2: v1010.V4Location): AsyncIterable<[v1010.V4Location, v1010.V4Location][]>
    getPairs(block: Block): Promise<[k: [v1010.V4Location, v1010.V4Location], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v1010.V4Location): Promise<[k: [v1010.V4Location, v1010.V4Location], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v1010.V4Location, key2: v1010.V4Location): Promise<[k: [v1010.V4Location, v1010.V4Location], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1010.V4Location, v1010.V4Location], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.V4Location): AsyncIterable<[k: [v1010.V4Location, v1010.V4Location], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.V4Location, key2: v1010.V4Location): AsyncIterable<[k: [v1010.V4Location, v1010.V4Location], v: (bigint | undefined)][]>
}

export const abstractFungibleBalances =  {
    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    v1010: new StorageType('UnknownTokens.AbstractFungibleBalances', 'Default', [v1010.V4Location, sts.bytes()], sts.bigint()) as AbstractFungibleBalancesV1010,
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface AbstractFungibleBalancesV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v1010.V4Location, key2: Bytes): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v1010.V4Location, Bytes][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v1010.V4Location, Bytes][]>
    getKeys(block: Block, key1: v1010.V4Location): Promise<[v1010.V4Location, Bytes][]>
    getKeys(block: Block, key1: v1010.V4Location, key2: Bytes): Promise<[v1010.V4Location, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1010.V4Location, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.V4Location): AsyncIterable<[v1010.V4Location, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.V4Location, key2: Bytes): AsyncIterable<[v1010.V4Location, Bytes][]>
    getPairs(block: Block): Promise<[k: [v1010.V4Location, Bytes], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v1010.V4Location): Promise<[k: [v1010.V4Location, Bytes], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v1010.V4Location, key2: Bytes): Promise<[k: [v1010.V4Location, Bytes], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1010.V4Location, Bytes], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.V4Location): AsyncIterable<[k: [v1010.V4Location, Bytes], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.V4Location, key2: Bytes): AsyncIterable<[k: [v1010.V4Location, Bytes], v: (bigint | undefined)][]>
}
