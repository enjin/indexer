import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'

export const concreteFungibleBalances = {
    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     *
     *  double_map: who, asset_id => u128
     */
    matrixEnjinV1012: new StorageType(
        'UnknownTokens.ConcreteFungibleBalances',
        'Default',
        [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location],
        sts.bigint()
    ) as ConcreteFungibleBalancesMatrixEnjinV1012,
    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     *
     *  double_map: who, asset_id => u128
     */
    matrixV1030: new StorageType(
        'UnknownTokens.ConcreteFungibleBalances',
        'Default',
        [matrixV1030.V5Location, matrixV1030.V5Location],
        sts.bigint()
    ) as ConcreteFungibleBalancesMatrixV1030,
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 *
 *  double_map: who, asset_id => u128
 */
export interface ConcreteFungibleBalancesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: matrixEnjinV1012.V4Location, key2: matrixEnjinV1012.V4Location): Promise<bigint | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]
    ): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): Promise<[matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: matrixEnjinV1012.V4Location
    ): Promise<[matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): AsyncIterable<[matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: matrixEnjinV1012.V4Location
    ): AsyncIterable<[matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): Promise<[k: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: matrixEnjinV1012.V4Location
    ): Promise<[k: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): AsyncIterable<[k: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: matrixEnjinV1012.V4Location
    ): AsyncIterable<[k: [matrixEnjinV1012.V4Location, matrixEnjinV1012.V4Location], v: bigint | undefined][]>
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 *
 *  double_map: who, asset_id => u128
 */
export interface ConcreteFungibleBalancesMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: matrixV1030.V5Location, key2: matrixV1030.V5Location): Promise<bigint | undefined>
    getMany(block: Block, keys: [matrixV1030.V5Location, matrixV1030.V5Location][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1030.V5Location, matrixV1030.V5Location][]>
    getKeys(block: Block, key1: matrixV1030.V5Location): Promise<[matrixV1030.V5Location, matrixV1030.V5Location][]>
    getKeys(
        block: Block,
        key1: matrixV1030.V5Location,
        key2: matrixV1030.V5Location
    ): Promise<[matrixV1030.V5Location, matrixV1030.V5Location][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1030.V5Location, matrixV1030.V5Location][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location
    ): AsyncIterable<[matrixV1030.V5Location, matrixV1030.V5Location][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location,
        key2: matrixV1030.V5Location
    ): AsyncIterable<[matrixV1030.V5Location, matrixV1030.V5Location][]>
    getPairs(block: Block): Promise<[k: [matrixV1030.V5Location, matrixV1030.V5Location], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.V5Location
    ): Promise<[k: [matrixV1030.V5Location, matrixV1030.V5Location], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.V5Location,
        key2: matrixV1030.V5Location
    ): Promise<[k: [matrixV1030.V5Location, matrixV1030.V5Location], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1030.V5Location, matrixV1030.V5Location], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location
    ): AsyncIterable<[k: [matrixV1030.V5Location, matrixV1030.V5Location], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location,
        key2: matrixV1030.V5Location
    ): AsyncIterable<[k: [matrixV1030.V5Location, matrixV1030.V5Location], v: bigint | undefined][]>
}

export const abstractFungibleBalances = {
    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     *
     *  double_map: who, asset_id => u128
     */
    matrixEnjinV1012: new StorageType(
        'UnknownTokens.AbstractFungibleBalances',
        'Default',
        [matrixEnjinV1012.V4Location, sts.bytes()],
        sts.bigint()
    ) as AbstractFungibleBalancesMatrixEnjinV1012,
    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     *
     *  double_map: who, asset_id => u128
     */
    matrixV1030: new StorageType(
        'UnknownTokens.AbstractFungibleBalances',
        'Default',
        [matrixV1030.V5Location, sts.bytes()],
        sts.bigint()
    ) as AbstractFungibleBalancesMatrixV1030,
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 *
 *  double_map: who, asset_id => u128
 */
export interface AbstractFungibleBalancesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: matrixEnjinV1012.V4Location, key2: Bytes): Promise<bigint | undefined>
    getMany(block: Block, keys: [matrixEnjinV1012.V4Location, Bytes][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.V4Location, Bytes][]>
    getKeys(block: Block, key1: matrixEnjinV1012.V4Location): Promise<[matrixEnjinV1012.V4Location, Bytes][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: Bytes
    ): Promise<[matrixEnjinV1012.V4Location, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1012.V4Location, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): AsyncIterable<[matrixEnjinV1012.V4Location, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: Bytes
    ): AsyncIterable<[matrixEnjinV1012.V4Location, Bytes][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1012.V4Location, Bytes], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): Promise<[k: [matrixEnjinV1012.V4Location, Bytes], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: Bytes
    ): Promise<[k: [matrixEnjinV1012.V4Location, Bytes], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixEnjinV1012.V4Location, Bytes], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location
    ): AsyncIterable<[k: [matrixEnjinV1012.V4Location, Bytes], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.V4Location,
        key2: Bytes
    ): AsyncIterable<[k: [matrixEnjinV1012.V4Location, Bytes], v: bigint | undefined][]>
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 *
 *  double_map: who, asset_id => u128
 */
export interface AbstractFungibleBalancesMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: matrixV1030.V5Location, key2: Bytes): Promise<bigint | undefined>
    getMany(block: Block, keys: [matrixV1030.V5Location, Bytes][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1030.V5Location, Bytes][]>
    getKeys(block: Block, key1: matrixV1030.V5Location): Promise<[matrixV1030.V5Location, Bytes][]>
    getKeys(block: Block, key1: matrixV1030.V5Location, key2: Bytes): Promise<[matrixV1030.V5Location, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1030.V5Location, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location
    ): AsyncIterable<[matrixV1030.V5Location, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location,
        key2: Bytes
    ): AsyncIterable<[matrixV1030.V5Location, Bytes][]>
    getPairs(block: Block): Promise<[k: [matrixV1030.V5Location, Bytes], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.V5Location
    ): Promise<[k: [matrixV1030.V5Location, Bytes], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.V5Location,
        key2: Bytes
    ): Promise<[k: [matrixV1030.V5Location, Bytes], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1030.V5Location, Bytes], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location
    ): AsyncIterable<[k: [matrixV1030.V5Location, Bytes], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.V5Location,
        key2: Bytes
    ): AsyncIterable<[k: [matrixV1030.V5Location, Bytes], v: bigint | undefined][]>
}
