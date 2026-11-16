import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1043 from '../matrixEnjinV1043'

export const pools = {
    /**
     *  Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
     *  created rather than people sending tokens directly to a pool's public account.
     */
    matrixEnjinV1043: new StorageType(
        'AssetConversion.Pools',
        'Optional',
        [sts.tuple(() => [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId])],
        matrixEnjinV1043.PoolInfo
    ) as PoolsMatrixEnjinV1043,
}

/**
 *  Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
 *  created rather than people sending tokens directly to a pool's public account.
 */
export interface PoolsMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]
    ): Promise<matrixEnjinV1043.PoolInfo | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId][]
    ): Promise<(matrixEnjinV1043.PoolInfo | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId][]>
    getKeys(
        block: Block,
        key: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]
    ): Promise<[matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]
    ): AsyncIterable<[matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId], v: matrixEnjinV1043.PoolInfo | undefined][]>
    getPairs(
        block: Block,
        key: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]
    ): Promise<[k: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId], v: matrixEnjinV1043.PoolInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId], v: matrixEnjinV1043.PoolInfo | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId]
    ): AsyncIterable<
        [k: [matrixEnjinV1043.AssetId, matrixEnjinV1043.AssetId], v: matrixEnjinV1043.PoolInfo | undefined][]
    >
}

export const nextPoolAssetId = {
    /**
     *  Stores the `PoolAssetId` that is going to be used for the next lp token.
     *  This gets incremented whenever a new lp pool is created.
     */
    matrixEnjinV1043: new StorageType(
        'AssetConversion.NextPoolAssetId',
        'Optional',
        [],
        matrixEnjinV1043.LpTokenId
    ) as NextPoolAssetIdMatrixEnjinV1043,
}

/**
 *  Stores the `PoolAssetId` that is going to be used for the next lp token.
 *  This gets incremented whenever a new lp pool is created.
 */
export interface NextPoolAssetIdMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1043.LpTokenId | undefined>
}
