import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const pools = {
    /**
     *  Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
     *  created rather than people sending tokens directly to a pool's public account.
     */
    matrixV1030: new StorageType(
        'AssetConversion.Pools',
        'Optional',
        [sts.tuple(() => [matrixV1030.AssetId, matrixV1030.AssetId])],
        matrixV1030.PoolInfo
    ) as PoolsMatrixV1030,
}

/**
 *  Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
 *  created rather than people sending tokens directly to a pool's public account.
 */
export interface PoolsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [matrixV1030.AssetId, matrixV1030.AssetId]): Promise<matrixV1030.PoolInfo | undefined>
    getMany(
        block: Block,
        keys: [matrixV1030.AssetId, matrixV1030.AssetId][]
    ): Promise<(matrixV1030.PoolInfo | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1030.AssetId, matrixV1030.AssetId][]>
    getKeys(
        block: Block,
        key: [matrixV1030.AssetId, matrixV1030.AssetId]
    ): Promise<[matrixV1030.AssetId, matrixV1030.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1030.AssetId, matrixV1030.AssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [matrixV1030.AssetId, matrixV1030.AssetId]
    ): AsyncIterable<[matrixV1030.AssetId, matrixV1030.AssetId][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV1030.AssetId, matrixV1030.AssetId], v: matrixV1030.PoolInfo | undefined][]>
    getPairs(
        block: Block,
        key: [matrixV1030.AssetId, matrixV1030.AssetId]
    ): Promise<[k: [matrixV1030.AssetId, matrixV1030.AssetId], v: matrixV1030.PoolInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1030.AssetId, matrixV1030.AssetId], v: matrixV1030.PoolInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [matrixV1030.AssetId, matrixV1030.AssetId]
    ): AsyncIterable<[k: [matrixV1030.AssetId, matrixV1030.AssetId], v: matrixV1030.PoolInfo | undefined][]>
}

export const nextPoolAssetId = {
    /**
     *  Stores the `PoolAssetId` that is going to be used for the next lp token.
     *  This gets incremented whenever a new lp pool is created.
     */
    matrixV1030: new StorageType(
        'AssetConversion.NextPoolAssetId',
        'Optional',
        [],
        matrixV1030.LpTokenId
    ) as NextPoolAssetIdMatrixV1030,
}

/**
 *  Stores the `PoolAssetId` that is going to be used for the next lp token.
 *  This gets incremented whenever a new lp pool is created.
 */
export interface NextPoolAssetIdMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV1030.LpTokenId | undefined>
}
