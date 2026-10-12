import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const pools = {
    /**
     *  Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
     *  created rather than people sending tokens directly to a pool's public account.
     */
    matrixEnjinV1041: new StorageType(
        'AssetConversion.Pools',
        'Optional',
        [sts.tuple(() => [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId])],
        matrixEnjinV1041.PoolInfo
    ) as PoolsMatrixEnjinV1041,
}

/**
 *  Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
 *  created rather than people sending tokens directly to a pool's public account.
 */
export interface PoolsMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId]
    ): Promise<matrixEnjinV1041.PoolInfo | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId][]
    ): Promise<(matrixEnjinV1041.PoolInfo | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId][]>
    getKeys(
        block: Block,
        key: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId]
    ): Promise<[matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId]
    ): AsyncIterable<[matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId], v: matrixEnjinV1041.PoolInfo | undefined][]>
    getPairs(
        block: Block,
        key: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId]
    ): Promise<[k: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId], v: matrixEnjinV1041.PoolInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId], v: matrixEnjinV1041.PoolInfo | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId]
    ): AsyncIterable<
        [k: [matrixEnjinV1041.AssetId, matrixEnjinV1041.AssetId], v: matrixEnjinV1041.PoolInfo | undefined][]
    >
}

export const nextPoolAssetId = {
    /**
     *  Stores the `PoolAssetId` that is going to be used for the next lp token.
     *  This gets incremented whenever a new lp pool is created.
     */
    matrixEnjinV1041: new StorageType(
        'AssetConversion.NextPoolAssetId',
        'Optional',
        [],
        matrixEnjinV1041.LpTokenId
    ) as NextPoolAssetIdMatrixEnjinV1041,
}

/**
 *  Stores the `PoolAssetId` that is going to be used for the next lp token.
 *  This gets incremented whenever a new lp pool is created.
 */
export interface NextPoolAssetIdMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1041.LpTokenId | undefined>
}
