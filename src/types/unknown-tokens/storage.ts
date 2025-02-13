import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

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
