import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const queryCounter =  {
    /**
     *  The latest available query index.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.QueryCounter', 'Default', [], sts.bigint()) as QueryCounterMatrixEnjinV603,
}

/**
 *  The latest available query index.
 */
export interface QueryCounterMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const queries =  {
    /**
     *  The ongoing queries.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.Queries', 'Optional', [sts.bigint()], matrixEnjinV603.QueryStatus) as QueriesMatrixEnjinV603,
    /**
     *  The ongoing queries.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.Queries', 'Optional', [sts.bigint()], matrixEnjinV1012.QueryStatus) as QueriesMatrixEnjinV1012,
    /**
     *  The ongoing queries.
     */
    v500: new StorageType('PolkadotXcm.Queries', 'Optional', [sts.bigint()], v500.QueryStatus) as QueriesV500,
    /**
     *  The ongoing queries.
     */
    v1010: new StorageType('PolkadotXcm.Queries', 'Optional', [sts.bigint()], v1010.QueryStatus) as QueriesV1010,
}

/**
 *  The ongoing queries.
 */
export interface QueriesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(matrixEnjinV603.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV603.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (matrixEnjinV603.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (matrixEnjinV603.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (matrixEnjinV603.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (matrixEnjinV603.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(matrixEnjinV1012.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV1012.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (matrixEnjinV1012.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (matrixEnjinV1012.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (matrixEnjinV1012.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (matrixEnjinV1012.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v500.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v500.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v500.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v500.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v500.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v500.QueryStatus | undefined)][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v1010.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v1010.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v1010.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v1010.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v1010.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v1010.QueryStatus | undefined)][]>
}

export const assetTraps =  {
    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.AssetTraps', 'Default', [matrixEnjinV603.H256], sts.number()) as AssetTrapsMatrixEnjinV603,
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface AssetTrapsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: matrixEnjinV603.H256): Promise<(number | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (number | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (number | undefined)][]>
}

export const safeXcmVersion =  {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.SafeXcmVersion', 'Optional', [], sts.number()) as SafeXcmVersionMatrixEnjinV603,
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface SafeXcmVersionMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const supportedVersion =  {
    /**
     *  The Latest versions that we know various locations support.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.SupportedVersion', 'Optional', [sts.number(), matrixEnjinV603.VersionedMultiLocation], sts.number()) as SupportedVersionMatrixEnjinV603,
    /**
     *  The Latest versions that we know various locations support.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.SupportedVersion', 'Optional', [sts.number(), matrixEnjinV1012.VersionedLocation], sts.number()) as SupportedVersionMatrixEnjinV1012,
    /**
     *  The Latest versions that we know various locations support.
     */
    v500: new StorageType('PolkadotXcm.SupportedVersion', 'Optional', [sts.number(), v500.VersionedMultiLocation], sts.number()) as SupportedVersionV500,
    /**
     *  The Latest versions that we know various locations support.
     */
    v1010: new StorageType('PolkadotXcm.SupportedVersion', 'Optional', [sts.number(), v1010.VersionedLocation], sts.number()) as SupportedVersionV1010,
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (number | undefined)][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV1012.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: (number | undefined)][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v500.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v500.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v500.VersionedMultiLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<[k: [number, v500.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: (number | undefined)][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v1010.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v1010.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1010.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1010.VersionedLocation): AsyncIterable<[number, v1010.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1010.VersionedLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1010.VersionedLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<[k: [number, v1010.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v1010.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v1010.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v1010.VersionedLocation): AsyncIterable<[k: [number, v1010.VersionedLocation], v: (number | undefined)][]>
}

export const versionNotifiers =  {
    /**
     *  All locations that we have requested version notifications from.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.VersionNotifiers', 'Optional', [sts.number(), matrixEnjinV603.VersionedMultiLocation], sts.bigint()) as VersionNotifiersMatrixEnjinV603,
    /**
     *  All locations that we have requested version notifications from.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.VersionNotifiers', 'Optional', [sts.number(), matrixEnjinV1012.VersionedLocation], sts.bigint()) as VersionNotifiersMatrixEnjinV1012,
    /**
     *  All locations that we have requested version notifications from.
     */
    v500: new StorageType('PolkadotXcm.VersionNotifiers', 'Optional', [sts.number(), v500.VersionedMultiLocation], sts.bigint()) as VersionNotifiersV500,
    /**
     *  All locations that we have requested version notifications from.
     */
    v1010: new StorageType('PolkadotXcm.VersionNotifiers', 'Optional', [sts.number(), v1010.VersionedLocation], sts.bigint()) as VersionNotifiersV1010,
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: (bigint | undefined)][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV1012.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: (bigint | undefined)][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v500.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v500.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v500.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<[k: [number, v500.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: (bigint | undefined)][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v1010.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v1010.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1010.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1010.VersionedLocation): AsyncIterable<[number, v1010.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1010.VersionedLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1010.VersionedLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<[k: [number, v1010.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v1010.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v1010.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v1010.VersionedLocation): AsyncIterable<[k: [number, v1010.VersionedLocation], v: (bigint | undefined)][]>
}

export const versionNotifyTargets =  {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.VersionNotifyTargets', 'Optional', [sts.number(), matrixEnjinV603.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), matrixEnjinV603.Weight, sts.number()])) as VersionNotifyTargetsMatrixEnjinV603,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.VersionNotifyTargets', 'Optional', [sts.number(), matrixEnjinV1012.VersionedLocation], sts.tuple(() => [sts.bigint(), matrixEnjinV1012.Weight, sts.number()])) as VersionNotifyTargetsMatrixEnjinV1012,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v500: new StorageType('PolkadotXcm.VersionNotifyTargets', 'Optional', [sts.number(), v500.VersionedMultiLocation], sts.tuple(() => [sts.bigint(), v500.Weight, sts.number()])) as VersionNotifyTargetsV500,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v1010: new StorageType('PolkadotXcm.VersionNotifyTargets', 'Optional', [sts.number(), v1010.VersionedLocation], sts.tuple(() => [sts.bigint(), v1010.Weight, sts.number()])) as VersionNotifyTargetsV1010,
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<([bigint, matrixEnjinV603.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<([bigint, matrixEnjinV603.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: ([bigint, matrixEnjinV603.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: ([bigint, matrixEnjinV603.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: ([bigint, matrixEnjinV603.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: ([bigint, matrixEnjinV603.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: ([bigint, matrixEnjinV603.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: ([bigint, matrixEnjinV603.Weight, number] | undefined)][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<([bigint, matrixEnjinV1012.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV1012.VersionedLocation][]): Promise<([bigint, matrixEnjinV1012.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): AsyncIterable<[number, matrixEnjinV1012.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: ([bigint, matrixEnjinV1012.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: ([bigint, matrixEnjinV1012.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): Promise<[k: [number, matrixEnjinV1012.VersionedLocation], v: ([bigint, matrixEnjinV1012.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: ([bigint, matrixEnjinV1012.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: ([bigint, matrixEnjinV1012.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.VersionedLocation): AsyncIterable<[k: [number, matrixEnjinV1012.VersionedLocation], v: ([bigint, matrixEnjinV1012.Weight, number] | undefined)][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<([bigint, v500.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, v500.VersionedMultiLocation][]): Promise<([bigint, v500.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v500.VersionedMultiLocation], v: ([bigint, v500.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v500.VersionedMultiLocation], v: ([bigint, v500.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v500.VersionedMultiLocation): Promise<[k: [number, v500.VersionedMultiLocation], v: ([bigint, v500.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: ([bigint, v500.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: ([bigint, v500.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: ([bigint, v500.Weight, number] | undefined)][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<([bigint, v1010.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, v1010.VersionedLocation][]): Promise<([bigint, v1010.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v1010.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1010.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1010.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1010.VersionedLocation): AsyncIterable<[number, v1010.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1010.VersionedLocation], v: ([bigint, v1010.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1010.VersionedLocation], v: ([bigint, v1010.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v1010.VersionedLocation): Promise<[k: [number, v1010.VersionedLocation], v: ([bigint, v1010.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v1010.VersionedLocation], v: ([bigint, v1010.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v1010.VersionedLocation], v: ([bigint, v1010.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v1010.VersionedLocation): AsyncIterable<[k: [number, v1010.VersionedLocation], v: ([bigint, v1010.Weight, number] | undefined)][]>
}

export const versionDiscoveryQueue =  {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [matrixEnjinV603.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueMatrixEnjinV603,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [matrixEnjinV1012.VersionedLocation, sts.number()]))) as VersionDiscoveryQueueMatrixEnjinV1012,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v500: new StorageType('PolkadotXcm.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v500.VersionedMultiLocation, sts.number()]))) as VersionDiscoveryQueueV500,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v1010: new StorageType('PolkadotXcm.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [v1010.VersionedLocation, sts.number()]))) as VersionDiscoveryQueueV1010,
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV603.VersionedMultiLocation, number][]
    get(block: Block): Promise<([matrixEnjinV603.VersionedMultiLocation, number][] | undefined)>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1012.VersionedLocation, number][]
    get(block: Block): Promise<([matrixEnjinV1012.VersionedLocation, number][] | undefined)>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v500.VersionedMultiLocation, number][]
    get(block: Block): Promise<([v500.VersionedMultiLocation, number][] | undefined)>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1010.VersionedLocation, number][]
    get(block: Block): Promise<([v1010.VersionedLocation, number][] | undefined)>
}

export const currentMigration =  {
    /**
     *  The current migration's stage, if any.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.CurrentMigration', 'Optional', [], matrixEnjinV603.VersionMigrationStage) as CurrentMigrationMatrixEnjinV603,
}

/**
 *  The current migration's stage, if any.
 */
export interface CurrentMigrationMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.VersionMigrationStage | undefined)>
}

export const remoteLockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.RemoteLockedFungibles', 'Optional', [sts.number(), matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], matrixEnjinV603.RemoteLockedFungibleRecord) as RemoteLockedFungiblesMatrixEnjinV603,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.RemoteLockedFungibles', 'Optional', [sts.number(), matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], matrixEnjinV1012.RemoteLockedFungibleRecord) as RemoteLockedFungiblesMatrixEnjinV1012,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v500: new StorageType('PolkadotXcm.RemoteLockedFungibles', 'Optional', [sts.number(), v500.AccountId32, v500.VersionedAssetId], v500.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV500,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v604: new StorageType('PolkadotXcm.RemoteLockedFungibles', 'Optional', [sts.number(), v604.AccountId32, v604.VersionedAssetId], v604.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV604,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v1010: new StorageType('PolkadotXcm.RemoteLockedFungibles', 'Optional', [sts.number(), v1010.AccountId32, v1010.VersionedAssetId], v1010.RemoteLockedFungibleRecord) as RemoteLockedFungiblesV1010,
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV603.AccountId32, key3: matrixEnjinV603.VersionedAssetId): Promise<(matrixEnjinV603.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]): Promise<(matrixEnjinV603.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV603.AccountId32): Promise<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV603.AccountId32, key3: matrixEnjinV603.VersionedAssetId): Promise<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.AccountId32): AsyncIterable<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.AccountId32, key3: matrixEnjinV603.VersionedAssetId): AsyncIterable<[number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV603.AccountId32): Promise<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV603.AccountId32, key3: matrixEnjinV603.VersionedAssetId): Promise<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.AccountId32): AsyncIterable<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV603.AccountId32, key3: matrixEnjinV603.VersionedAssetId): AsyncIterable<[k: [number, matrixEnjinV603.AccountId32, matrixEnjinV603.VersionedAssetId], v: (matrixEnjinV603.RemoteLockedFungibleRecord | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV1012.AccountId32, key3: matrixEnjinV1012.VersionedAssetId): Promise<(matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]): Promise<(matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV1012.AccountId32): Promise<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: matrixEnjinV1012.AccountId32, key3: matrixEnjinV1012.VersionedAssetId): Promise<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.AccountId32): AsyncIterable<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.AccountId32, key3: matrixEnjinV1012.VersionedAssetId): AsyncIterable<[number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV1012.AccountId32): Promise<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: matrixEnjinV1012.AccountId32, key3: matrixEnjinV1012.VersionedAssetId): Promise<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.AccountId32): AsyncIterable<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: matrixEnjinV1012.AccountId32, key3: matrixEnjinV1012.VersionedAssetId): AsyncIterable<[k: [number, matrixEnjinV1012.AccountId32, matrixEnjinV1012.VersionedAssetId], v: (matrixEnjinV1012.RemoteLockedFungibleRecord | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v500.AccountId32, key3: v500.VersionedAssetId): Promise<(v500.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, v500.AccountId32, v500.VersionedAssetId][]): Promise<(v500.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v500.AccountId32): Promise<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v500.AccountId32, key3: v500.VersionedAssetId): Promise<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v500.AccountId32): AsyncIterable<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v500.AccountId32, key3: v500.VersionedAssetId): AsyncIterable<[number, v500.AccountId32, v500.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v500.AccountId32): Promise<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v500.AccountId32, key3: v500.VersionedAssetId): Promise<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v500.AccountId32): AsyncIterable<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v500.AccountId32, key3: v500.VersionedAssetId): AsyncIterable<[k: [number, v500.AccountId32, v500.VersionedAssetId], v: (v500.RemoteLockedFungibleRecord | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV604  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v604.AccountId32, key3: v604.VersionedAssetId): Promise<(v604.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, v604.AccountId32, v604.VersionedAssetId][]): Promise<(v604.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v604.AccountId32): Promise<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v604.AccountId32, key3: v604.VersionedAssetId): Promise<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v604.AccountId32): AsyncIterable<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v604.AccountId32, key3: v604.VersionedAssetId): AsyncIterable<[number, v604.AccountId32, v604.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v604.AccountId32): Promise<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v604.AccountId32, key3: v604.VersionedAssetId): Promise<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v604.AccountId32): AsyncIterable<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v604.AccountId32, key3: v604.VersionedAssetId): AsyncIterable<[k: [number, v604.AccountId32, v604.VersionedAssetId], v: (v604.RemoteLockedFungibleRecord | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1010.AccountId32, key3: v1010.VersionedAssetId): Promise<(v1010.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, v1010.AccountId32, v1010.VersionedAssetId][]): Promise<(v1010.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v1010.AccountId32): Promise<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: v1010.AccountId32, key3: v1010.VersionedAssetId): Promise<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1010.AccountId32): AsyncIterable<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1010.AccountId32, key3: v1010.VersionedAssetId): AsyncIterable<[number, v1010.AccountId32, v1010.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v1010.AccountId32): Promise<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: v1010.AccountId32, key3: v1010.VersionedAssetId): Promise<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v1010.AccountId32): AsyncIterable<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v1010.AccountId32, key3: v1010.VersionedAssetId): AsyncIterable<[k: [number, v1010.AccountId32, v1010.VersionedAssetId], v: (v1010.RemoteLockedFungibleRecord | undefined)][]>
}

export const lockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.LockedFungibles', 'Optional', [matrixEnjinV603.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), matrixEnjinV603.VersionedMultiLocation]))) as LockedFungiblesMatrixEnjinV603,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    matrixEnjinV1012: new StorageType('PolkadotXcm.LockedFungibles', 'Optional', [matrixEnjinV1012.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), matrixEnjinV1012.VersionedLocation]))) as LockedFungiblesMatrixEnjinV1012,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v500: new StorageType('PolkadotXcm.LockedFungibles', 'Optional', [v500.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), v500.VersionedMultiLocation]))) as LockedFungiblesV500,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v1010: new StorageType('PolkadotXcm.LockedFungibles', 'Optional', [v1010.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), v1010.VersionedLocation]))) as LockedFungiblesV1010,
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: ([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: ([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: ([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: ([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<([bigint, matrixEnjinV1012.VersionedLocation][] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1012.AccountId32[]): Promise<([bigint, matrixEnjinV1012.VersionedLocation][] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AccountId32, v: ([bigint, matrixEnjinV1012.VersionedLocation][] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1012.AccountId32): Promise<[k: matrixEnjinV1012.AccountId32, v: ([bigint, matrixEnjinV1012.VersionedLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: ([bigint, matrixEnjinV1012.VersionedLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: ([bigint, matrixEnjinV1012.VersionedLocation][] | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v500.AccountId32): Promise<([bigint, v500.VersionedMultiLocation][] | undefined)>
    getMany(block: Block, keys: v500.AccountId32[]): Promise<([bigint, v500.VersionedMultiLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v500.AccountId32[]>
    getKeys(block: Block, key: v500.AccountId32): Promise<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<v500.AccountId32[]>
    getPairs(block: Block): Promise<[k: v500.AccountId32, v: ([bigint, v500.VersionedMultiLocation][] | undefined)][]>
    getPairs(block: Block, key: v500.AccountId32): Promise<[k: v500.AccountId32, v: ([bigint, v500.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.AccountId32, v: ([bigint, v500.VersionedMultiLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<[k: v500.AccountId32, v: ([bigint, v500.VersionedMultiLocation][] | undefined)][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.AccountId32): Promise<([bigint, v1010.VersionedLocation][] | undefined)>
    getMany(block: Block, keys: v1010.AccountId32[]): Promise<([bigint, v1010.VersionedLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v1010.AccountId32[]>
    getKeys(block: Block, key: v1010.AccountId32): Promise<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<v1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1010.AccountId32, v: ([bigint, v1010.VersionedLocation][] | undefined)][]>
    getPairs(block: Block, key: v1010.AccountId32): Promise<[k: v1010.AccountId32, v: ([bigint, v1010.VersionedLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AccountId32, v: ([bigint, v1010.VersionedLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<[k: v1010.AccountId32, v: ([bigint, v1010.VersionedLocation][] | undefined)][]>
}

export const xcmExecutionSuspended =  {
    /**
     *  Global suspension state of the XCM executor.
     */
    matrixEnjinV603: new StorageType('PolkadotXcm.XcmExecutionSuspended', 'Default', [], sts.boolean()) as XcmExecutionSuspendedMatrixEnjinV603,
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmExecutionSuspendedMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
