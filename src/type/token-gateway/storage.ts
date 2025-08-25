import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const supportedAssets = {
    /**
     *  Assets supported by this instance of token gateway
     *  A map of the local asset id to the token gateway asset id
     */
    matrixV1030: new StorageType(
        'TokenGateway.SupportedAssets',
        'Optional',
        [matrixV1030.AssetId],
        matrixV1030.H256
    ) as SupportedAssetsMatrixV1030,
}

/**
 *  Assets supported by this instance of token gateway
 *  A map of the local asset id to the token gateway asset id
 */
export interface SupportedAssetsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.AssetId): Promise<matrixV1030.H256 | undefined>
    getMany(block: Block, keys: matrixV1030.AssetId[]): Promise<(matrixV1030.H256 | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.AssetId[]>
    getKeys(block: Block, key: matrixV1030.AssetId): Promise<matrixV1030.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.AssetId): AsyncIterable<matrixV1030.AssetId[]>
    getPairs(block: Block): Promise<[k: matrixV1030.AssetId, v: matrixV1030.H256 | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.AssetId
    ): Promise<[k: matrixV1030.AssetId, v: matrixV1030.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.AssetId, v: matrixV1030.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.AssetId
    ): AsyncIterable<[k: matrixV1030.AssetId, v: matrixV1030.H256 | undefined][]>
}

export const nativeAssets = {
    /**
     *  Assets that originate from this chain
     */
    matrixV1030: new StorageType(
        'TokenGateway.NativeAssets',
        'Default',
        [matrixV1030.AssetId],
        sts.boolean()
    ) as NativeAssetsMatrixV1030,
}

/**
 *  Assets that originate from this chain
 */
export interface NativeAssetsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: matrixV1030.AssetId): Promise<boolean | undefined>
    getMany(block: Block, keys: matrixV1030.AssetId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.AssetId[]>
    getKeys(block: Block, key: matrixV1030.AssetId): Promise<matrixV1030.AssetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.AssetId[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.AssetId): AsyncIterable<matrixV1030.AssetId[]>
    getPairs(block: Block): Promise<[k: matrixV1030.AssetId, v: boolean | undefined][]>
    getPairs(block: Block, key: matrixV1030.AssetId): Promise<[k: matrixV1030.AssetId, v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV1030.AssetId, v: boolean | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.AssetId
    ): AsyncIterable<[k: matrixV1030.AssetId, v: boolean | undefined][]>
}

export const localAssets = {
    /**
     *  Assets supported by this instance of token gateway
     *  A map of the token gateway asset id to the local asset id
     */
    matrixV1030: new StorageType(
        'TokenGateway.LocalAssets',
        'Optional',
        [matrixV1030.H256],
        matrixV1030.AssetId
    ) as LocalAssetsMatrixV1030,
}

/**
 *  Assets supported by this instance of token gateway
 *  A map of the token gateway asset id to the local asset id
 */
export interface LocalAssetsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.H256): Promise<matrixV1030.AssetId | undefined>
    getMany(block: Block, keys: matrixV1030.H256[]): Promise<(matrixV1030.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.H256[]>
    getKeys(block: Block, key: matrixV1030.H256): Promise<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.H256): AsyncIterable<matrixV1030.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1030.H256, v: matrixV1030.AssetId | undefined][]>
    getPairs(block: Block, key: matrixV1030.H256): Promise<[k: matrixV1030.H256, v: matrixV1030.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.H256, v: matrixV1030.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.H256
    ): AsyncIterable<[k: matrixV1030.H256, v: matrixV1030.AssetId | undefined][]>
}

export const precisions = {
    /**
     *  The decimals used by the EVM counterpart of this asset
     */
    matrixV1030: new StorageType(
        'TokenGateway.Precisions',
        'Optional',
        [matrixV1030.AssetId, matrixV1030.StateMachine],
        sts.number()
    ) as PrecisionsMatrixV1030,
}

/**
 *  The decimals used by the EVM counterpart of this asset
 */
export interface PrecisionsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixV1030.AssetId, key2: matrixV1030.StateMachine): Promise<number | undefined>
    getMany(block: Block, keys: [matrixV1030.AssetId, matrixV1030.StateMachine][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1030.AssetId, matrixV1030.StateMachine][]>
    getKeys(block: Block, key1: matrixV1030.AssetId): Promise<[matrixV1030.AssetId, matrixV1030.StateMachine][]>
    getKeys(
        block: Block,
        key1: matrixV1030.AssetId,
        key2: matrixV1030.StateMachine
    ): Promise<[matrixV1030.AssetId, matrixV1030.StateMachine][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1030.AssetId, matrixV1030.StateMachine][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AssetId
    ): AsyncIterable<[matrixV1030.AssetId, matrixV1030.StateMachine][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AssetId,
        key2: matrixV1030.StateMachine
    ): AsyncIterable<[matrixV1030.AssetId, matrixV1030.StateMachine][]>
    getPairs(block: Block): Promise<[k: [matrixV1030.AssetId, matrixV1030.StateMachine], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.AssetId
    ): Promise<[k: [matrixV1030.AssetId, matrixV1030.StateMachine], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.AssetId,
        key2: matrixV1030.StateMachine
    ): Promise<[k: [matrixV1030.AssetId, matrixV1030.StateMachine], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1030.AssetId, matrixV1030.StateMachine], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AssetId
    ): AsyncIterable<[k: [matrixV1030.AssetId, matrixV1030.StateMachine], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AssetId,
        key2: matrixV1030.StateMachine
    ): AsyncIterable<[k: [matrixV1030.AssetId, matrixV1030.StateMachine], v: number | undefined][]>
}

export const tokenGatewayAddresses = {
    /**
     *  The token gateway adresses on different chains
     */
    matrixV1030: new StorageType(
        'TokenGateway.TokenGatewayAddresses',
        'Optional',
        [matrixV1030.StateMachine],
        sts.bytes()
    ) as TokenGatewayAddressesMatrixV1030,
}

/**
 *  The token gateway adresses on different chains
 */
export interface TokenGatewayAddressesMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.StateMachine): Promise<Bytes | undefined>
    getMany(block: Block, keys: matrixV1030.StateMachine[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.StateMachine[]>
    getKeys(block: Block, key: matrixV1030.StateMachine): Promise<matrixV1030.StateMachine[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.StateMachine[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachine
    ): AsyncIterable<matrixV1030.StateMachine[]>
    getPairs(block: Block): Promise<[k: matrixV1030.StateMachine, v: Bytes | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.StateMachine
    ): Promise<[k: matrixV1030.StateMachine, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV1030.StateMachine, v: Bytes | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachine
    ): AsyncIterable<[k: matrixV1030.StateMachine, v: Bytes | undefined][]>
}
