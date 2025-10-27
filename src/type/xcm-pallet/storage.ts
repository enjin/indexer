import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v105 from '../v105'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1060 from '../v1060'

export const queryCounter = {
    /**
     *  The latest available query index.
     */
    enjinV100: new StorageType('XcmPallet.QueryCounter', 'Default', [], sts.bigint()) as QueryCounterEnjinV100,
}

/**
 *  The latest available query index.
 */
export interface QueryCounterEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const queries = {
    /**
     *  The ongoing queries.
     */
    enjinV100: new StorageType(
        'XcmPallet.Queries',
        'Optional',
        [sts.bigint()],
        enjinV100.QueryStatus
    ) as QueriesEnjinV100,
    /**
     *  The ongoing queries.
     */
    enjinV1032: new StorageType(
        'XcmPallet.Queries',
        'Optional',
        [sts.bigint()],
        enjinV1032.QueryStatus
    ) as QueriesEnjinV1032,
    /**
     *  The ongoing queries.
     */
    v100: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v100.QueryStatus) as QueriesV100,
    /**
     *  The ongoing queries.
     */
    v1030: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v1030.QueryStatus) as QueriesV1030,
    /**
     *  The ongoing queries.
     */
    v1060: new StorageType('XcmPallet.Queries', 'Optional', [sts.bigint()], v1060.QueryStatus) as QueriesV1060,
}

/**
 *  The ongoing queries.
 */
export interface QueriesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV100.QueryStatus | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV100.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV100.QueryStatus | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV100.QueryStatus | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV100.QueryStatus | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV100.QueryStatus | undefined][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV1032.QueryStatus | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV1032.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV1032.QueryStatus | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV1032.QueryStatus | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV1032.QueryStatus | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV1032.QueryStatus | undefined][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v100.QueryStatus | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v100.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v100.QueryStatus | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v100.QueryStatus | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v100.QueryStatus | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v100.QueryStatus | undefined][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v1030.QueryStatus | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v1030.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v1030.QueryStatus | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v1030.QueryStatus | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v1030.QueryStatus | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v1030.QueryStatus | undefined][]>
}

/**
 *  The ongoing queries.
 */
export interface QueriesV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v1060.QueryStatus | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v1060.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v1060.QueryStatus | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v1060.QueryStatus | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v1060.QueryStatus | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v1060.QueryStatus | undefined][]>
}

export const assetTraps = {
    /**
     *  The existing asset traps.
     *
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    enjinV100: new StorageType(
        'XcmPallet.AssetTraps',
        'Default',
        [enjinV100.H256],
        sts.number()
    ) as AssetTrapsEnjinV100,
}

/**
 *  The existing asset traps.
 *
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface AssetTrapsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: enjinV100.H256): Promise<number | undefined>
    getMany(block: Block, keys: enjinV100.H256[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.H256[]>
    getKeys(block: Block, key: enjinV100.H256): Promise<enjinV100.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.H256): AsyncIterable<enjinV100.H256[]>
    getPairs(block: Block): Promise<[k: enjinV100.H256, v: number | undefined][]>
    getPairs(block: Block, key: enjinV100.H256): Promise<[k: enjinV100.H256, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.H256, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.H256
    ): AsyncIterable<[k: enjinV100.H256, v: number | undefined][]>
}

export const safeXcmVersion = {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    enjinV100: new StorageType('XcmPallet.SafeXcmVersion', 'Optional', [], sts.number()) as SafeXcmVersionEnjinV100,
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface SafeXcmVersionEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const supportedVersion = {
    /**
     *  The Latest versions that we know various locations support.
     */
    enjinV100: new StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [sts.number(), enjinV100.VersionedMultiLocation],
        sts.number()
    ) as SupportedVersionEnjinV100,
    /**
     *  The Latest versions that we know various locations support.
     */
    enjinV1032: new StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [sts.number(), enjinV1032.VersionedLocation],
        sts.number()
    ) as SupportedVersionEnjinV1032,
    /**
     *  The Latest versions that we know various locations support.
     */
    v100: new StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [sts.number(), v100.VersionedMultiLocation],
        sts.number()
    ) as SupportedVersionV100,
    /**
     *  The Latest versions that we know various locations support.
     */
    v1030: new StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [sts.number(), v1030.VersionedLocation],
        sts.number()
    ) as SupportedVersionV1030,
    /**
     *  The Latest versions that we know various locations support.
     */
    v1060: new StorageType(
        'XcmPallet.SupportedVersion',
        'Optional',
        [sts.number(), v1060.VersionedLocation],
        sts.number()
    ) as SupportedVersionV1060,
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.VersionedMultiLocation): Promise<number | undefined>
    getMany(block: Block, keys: [number, enjinV100.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV100.VersionedMultiLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.VersionedMultiLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): AsyncIterable<[k: [number, enjinV100.VersionedMultiLocation], v: number | undefined][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV1032.VersionedLocation): Promise<number | undefined>
    getMany(block: Block, keys: [number, enjinV1032.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, enjinV1032.VersionedLocation], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV1032.VersionedLocation], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[k: [number, enjinV1032.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: number | undefined][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v100.VersionedMultiLocation): Promise<number | undefined>
    getMany(block: Block, keys: [number, v100.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v100.VersionedMultiLocation], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v100.VersionedMultiLocation], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[k: [number, v100.VersionedMultiLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: number | undefined][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1030.VersionedLocation): Promise<number | undefined>
    getMany(block: Block, keys: [number, v1030.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v1030.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1030.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1030.VersionedLocation): Promise<[number, v1030.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1030.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1030.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): AsyncIterable<[number, v1030.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1030.VersionedLocation], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1030.VersionedLocation], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): Promise<[k: [number, v1030.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: number | undefined][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1060.VersionedLocation): Promise<number | undefined>
    getMany(block: Block, keys: [number, v1060.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v1060.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1060.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1060.VersionedLocation): Promise<[number, v1060.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1060.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1060.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): AsyncIterable<[number, v1060.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1060.VersionedLocation], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1060.VersionedLocation], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): Promise<[k: [number, v1060.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: number | undefined][]>
}

export const versionNotifiers = {
    /**
     *  All locations that we have requested version notifications from.
     */
    enjinV100: new StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [sts.number(), enjinV100.VersionedMultiLocation],
        sts.bigint()
    ) as VersionNotifiersEnjinV100,
    /**
     *  All locations that we have requested version notifications from.
     */
    enjinV1032: new StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [sts.number(), enjinV1032.VersionedLocation],
        sts.bigint()
    ) as VersionNotifiersEnjinV1032,
    /**
     *  All locations that we have requested version notifications from.
     */
    v100: new StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [sts.number(), v100.VersionedMultiLocation],
        sts.bigint()
    ) as VersionNotifiersV100,
    /**
     *  All locations that we have requested version notifications from.
     */
    v1030: new StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [sts.number(), v1030.VersionedLocation],
        sts.bigint()
    ) as VersionNotifiersV1030,
    /**
     *  All locations that we have requested version notifications from.
     */
    v1060: new StorageType(
        'XcmPallet.VersionNotifiers',
        'Optional',
        [sts.number(), v1060.VersionedLocation],
        sts.bigint()
    ) as VersionNotifiersV1060,
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.VersionedMultiLocation): Promise<bigint | undefined>
    getMany(block: Block, keys: [number, enjinV100.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): AsyncIterable<[k: [number, enjinV100.VersionedMultiLocation], v: bigint | undefined][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV1032.VersionedLocation): Promise<bigint | undefined>
    getMany(block: Block, keys: [number, enjinV1032.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, enjinV1032.VersionedLocation], v: bigint | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV1032.VersionedLocation], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[k: [number, enjinV1032.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: bigint | undefined][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v100.VersionedMultiLocation): Promise<bigint | undefined>
    getMany(block: Block, keys: [number, v100.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getPairs(block: Block): Promise<[k: [number, v100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[k: [number, v100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: bigint | undefined][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1030.VersionedLocation): Promise<bigint | undefined>
    getMany(block: Block, keys: [number, v1030.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v1030.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1030.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1030.VersionedLocation): Promise<[number, v1030.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1030.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1030.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): AsyncIterable<[number, v1030.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1030.VersionedLocation], v: bigint | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1030.VersionedLocation], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): Promise<[k: [number, v1030.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: bigint | undefined][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1060.VersionedLocation): Promise<bigint | undefined>
    getMany(block: Block, keys: [number, v1060.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v1060.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1060.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1060.VersionedLocation): Promise<[number, v1060.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1060.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1060.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): AsyncIterable<[number, v1060.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, v1060.VersionedLocation], v: bigint | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1060.VersionedLocation], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): Promise<[k: [number, v1060.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: bigint | undefined][]>
}

export const versionNotifyTargets = {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    enjinV100: new StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [sts.number(), enjinV100.VersionedMultiLocation],
        sts.tuple(() => [sts.bigint(), enjinV100.Weight, sts.number()])
    ) as VersionNotifyTargetsEnjinV100,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    enjinV1032: new StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [sts.number(), enjinV1032.VersionedLocation],
        sts.tuple(() => [sts.bigint(), enjinV1032.Weight, sts.number()])
    ) as VersionNotifyTargetsEnjinV1032,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v100: new StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [sts.number(), v100.VersionedMultiLocation],
        sts.tuple(() => [sts.bigint(), v100.Weight, sts.number()])
    ) as VersionNotifyTargetsV100,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v1030: new StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [sts.number(), v1030.VersionedLocation],
        sts.tuple(() => [sts.bigint(), v1030.Weight, sts.number()])
    ) as VersionNotifyTargetsV1030,
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    v1060: new StorageType(
        'XcmPallet.VersionNotifyTargets',
        'Optional',
        [sts.number(), v1060.VersionedLocation],
        sts.tuple(() => [sts.bigint(), v1060.Weight, sts.number()])
    ) as VersionNotifyTargetsV1060,
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[bigint, enjinV100.Weight, number] | undefined>
    getMany(
        block: Block,
        keys: [number, enjinV100.VersionedMultiLocation][]
    ): Promise<([bigint, enjinV100.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): AsyncIterable<[number, enjinV100.VersionedMultiLocation][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: [bigint, enjinV100.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: [bigint, enjinV100.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): Promise<[k: [number, enjinV100.VersionedMultiLocation], v: [bigint, enjinV100.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [number, enjinV100.VersionedMultiLocation], v: [bigint, enjinV100.Weight, number] | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [k: [number, enjinV100.VersionedMultiLocation], v: [bigint, enjinV100.Weight, number] | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.VersionedMultiLocation
    ): AsyncIterable<
        [k: [number, enjinV100.VersionedMultiLocation], v: [bigint, enjinV100.Weight, number] | undefined][]
    >
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[bigint, enjinV1032.Weight, number] | undefined>
    getMany(
        block: Block,
        keys: [number, enjinV1032.VersionedLocation][]
    ): Promise<([bigint, enjinV1032.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): AsyncIterable<[number, enjinV1032.VersionedLocation][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, enjinV1032.VersionedLocation], v: [bigint, enjinV1032.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV1032.VersionedLocation], v: [bigint, enjinV1032.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): Promise<[k: [number, enjinV1032.VersionedLocation], v: [bigint, enjinV1032.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: [bigint, enjinV1032.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: [bigint, enjinV1032.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.VersionedLocation
    ): AsyncIterable<[k: [number, enjinV1032.VersionedLocation], v: [bigint, enjinV1032.Weight, number] | undefined][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV100 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[bigint, v100.Weight, number] | undefined>
    getMany(
        block: Block,
        keys: [number, v100.VersionedMultiLocation][]
    ): Promise<([bigint, v100.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): Promise<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.VersionedMultiLocation
    ): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number] | undefined][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1030.VersionedLocation): Promise<[bigint, v1030.Weight, number] | undefined>
    getMany(
        block: Block,
        keys: [number, v1030.VersionedLocation][]
    ): Promise<([bigint, v1030.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v1030.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1030.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1030.VersionedLocation): Promise<[number, v1030.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1030.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1030.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): AsyncIterable<[number, v1030.VersionedLocation][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, v1030.VersionedLocation], v: [bigint, v1030.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, v1030.VersionedLocation], v: [bigint, v1030.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): Promise<[k: [number, v1030.VersionedLocation], v: [bigint, v1030.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: [bigint, v1030.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: [bigint, v1030.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.VersionedLocation
    ): AsyncIterable<[k: [number, v1030.VersionedLocation], v: [bigint, v1030.Weight, number] | undefined][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1060.VersionedLocation): Promise<[bigint, v1060.Weight, number] | undefined>
    getMany(
        block: Block,
        keys: [number, v1060.VersionedLocation][]
    ): Promise<([bigint, v1060.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, v1060.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, v1060.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: v1060.VersionedLocation): Promise<[number, v1060.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1060.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1060.VersionedLocation][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): AsyncIterable<[number, v1060.VersionedLocation][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, v1060.VersionedLocation], v: [bigint, v1060.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, v1060.VersionedLocation], v: [bigint, v1060.Weight, number] | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): Promise<[k: [number, v1060.VersionedLocation], v: [bigint, v1060.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: [bigint, v1060.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: [bigint, v1060.Weight, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.VersionedLocation
    ): AsyncIterable<[k: [number, v1060.VersionedLocation], v: [bigint, v1060.Weight, number] | undefined][]>
}

export const versionDiscoveryQueue = {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    enjinV100: new StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV100.VersionedMultiLocation, sts.number()]))
    ) as VersionDiscoveryQueueEnjinV100,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    enjinV1032: new StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV1032.VersionedLocation, sts.number()]))
    ) as VersionDiscoveryQueueEnjinV1032,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v100: new StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [v100.VersionedMultiLocation, sts.number()]))
    ) as VersionDiscoveryQueueV100,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v1030: new StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [v1030.VersionedLocation, sts.number()]))
    ) as VersionDiscoveryQueueV1030,
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    v1060: new StorageType(
        'XcmPallet.VersionDiscoveryQueue',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [v1060.VersionedLocation, sts.number()]))
    ) as VersionDiscoveryQueueV1060,
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV100.VersionedMultiLocation, number][]
    get(block: Block): Promise<[enjinV100.VersionedMultiLocation, number][] | undefined>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV1032.VersionedLocation, number][]
    get(block: Block): Promise<[enjinV1032.VersionedLocation, number][] | undefined>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v100.VersionedMultiLocation, number][]
    get(block: Block): Promise<[v100.VersionedMultiLocation, number][] | undefined>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1030.VersionedLocation, number][]
    get(block: Block): Promise<[v1030.VersionedLocation, number][] | undefined>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueueV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1060.VersionedLocation, number][]
    get(block: Block): Promise<[v1060.VersionedLocation, number][] | undefined>
}

export const currentMigration = {
    /**
     *  The current migration's stage, if any.
     */
    enjinV100: new StorageType(
        'XcmPallet.CurrentMigration',
        'Optional',
        [],
        enjinV100.VersionMigrationStage
    ) as CurrentMigrationEnjinV100,
}

/**
 *  The current migration's stage, if any.
 */
export interface CurrentMigrationEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV100.VersionMigrationStage | undefined>
}

export const remoteLockedFungibles = {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    enjinV100: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), enjinV100.AccountId32, enjinV100.VersionedAssetId],
        enjinV100.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesEnjinV100,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    enjinV101: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), enjinV101.AccountId32, enjinV101.VersionedAssetId],
        enjinV101.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesEnjinV101,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    enjinV1032: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
        enjinV1032.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesEnjinV1032,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v100: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), v100.AccountId32, v100.VersionedAssetId],
        v100.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesV100,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v105: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), v105.AccountId32, v105.VersionedAssetId],
        v105.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesV105,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v1030: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), v1030.AccountId32, v1030.VersionedAssetId],
        v1030.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesV1030,
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    v1060: new StorageType(
        'XcmPallet.RemoteLockedFungibles',
        'Optional',
        [sts.number(), v1060.AccountId32, v1060.VersionedAssetId],
        v1060.RemoteLockedFungibleRecord
    ) as RemoteLockedFungiblesV1060,
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32,
        key3: enjinV100.VersionedAssetId
    ): Promise<enjinV100.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]
    ): Promise<(enjinV100.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): Promise<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32,
        key3: enjinV100.VersionedAssetId
    ): Promise<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32,
        key3: enjinV100.VersionedAssetId
    ): AsyncIterable<[number, enjinV100.AccountId32, enjinV100.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number
    ): Promise<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): Promise<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32,
        key3: enjinV100.VersionedAssetId
    ): Promise<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): AsyncIterable<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32,
        key3: enjinV100.VersionedAssetId
    ): AsyncIterable<
        [
            k: [number, enjinV100.AccountId32, enjinV100.VersionedAssetId],
            v: enjinV100.RemoteLockedFungibleRecord | undefined,
        ][]
    >
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32,
        key3: enjinV101.VersionedAssetId
    ): Promise<enjinV101.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]
    ): Promise<(enjinV101.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): Promise<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32,
        key3: enjinV101.VersionedAssetId
    ): Promise<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): AsyncIterable<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32,
        key3: enjinV101.VersionedAssetId
    ): AsyncIterable<[number, enjinV101.AccountId32, enjinV101.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number
    ): Promise<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): Promise<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32,
        key3: enjinV101.VersionedAssetId
    ): Promise<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): AsyncIterable<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32,
        key3: enjinV101.VersionedAssetId
    ): AsyncIterable<
        [
            k: [number, enjinV101.AccountId32, enjinV101.VersionedAssetId],
            v: enjinV101.RemoteLockedFungibleRecord | undefined,
        ][]
    >
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32,
        key3: enjinV1032.VersionedAssetId
    ): Promise<enjinV1032.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]
    ): Promise<(enjinV1032.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32
    ): Promise<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32,
        key3: enjinV1032.VersionedAssetId
    ): Promise<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32
    ): AsyncIterable<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32,
        key3: enjinV1032.VersionedAssetId
    ): AsyncIterable<[number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number
    ): Promise<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32
    ): Promise<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32,
        key3: enjinV1032.VersionedAssetId
    ): Promise<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32
    ): AsyncIterable<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1032.AccountId32,
        key3: enjinV1032.VersionedAssetId
    ): AsyncIterable<
        [
            k: [number, enjinV1032.AccountId32, enjinV1032.VersionedAssetId],
            v: enjinV1032.RemoteLockedFungibleRecord | undefined,
        ][]
    >
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV100 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: v100.AccountId32,
        key3: v100.VersionedAssetId
    ): Promise<v100.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, v100.AccountId32, v100.VersionedAssetId][]
    ): Promise<(v100.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v100.AccountId32
    ): Promise<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v100.AccountId32,
        key3: v100.VersionedAssetId
    ): Promise<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.AccountId32
    ): AsyncIterable<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.AccountId32,
        key3: v100.VersionedAssetId
    ): AsyncIterable<[number, v100.AccountId32, v100.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v100.AccountId32
    ): Promise<[k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v100.AccountId32,
        key3: v100.VersionedAssetId
    ): Promise<[k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.AccountId32
    ): AsyncIterable<
        [k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v100.AccountId32,
        key3: v100.VersionedAssetId
    ): AsyncIterable<
        [k: [number, v100.AccountId32, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord | undefined][]
    >
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV105 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: v105.AccountId32,
        key3: v105.VersionedAssetId
    ): Promise<v105.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, v105.AccountId32, v105.VersionedAssetId][]
    ): Promise<(v105.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v105.AccountId32
    ): Promise<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v105.AccountId32,
        key3: v105.VersionedAssetId
    ): Promise<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v105.AccountId32
    ): AsyncIterable<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v105.AccountId32,
        key3: v105.VersionedAssetId
    ): AsyncIterable<[number, v105.AccountId32, v105.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v105.AccountId32
    ): Promise<[k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v105.AccountId32,
        key3: v105.VersionedAssetId
    ): Promise<[k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v105.AccountId32
    ): AsyncIterable<
        [k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v105.AccountId32,
        key3: v105.VersionedAssetId
    ): AsyncIterable<
        [k: [number, v105.AccountId32, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord | undefined][]
    >
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV1030 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: v1030.AccountId32,
        key3: v1030.VersionedAssetId
    ): Promise<v1030.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, v1030.AccountId32, v1030.VersionedAssetId][]
    ): Promise<(v1030.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v1030.AccountId32
    ): Promise<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v1030.AccountId32,
        key3: v1030.VersionedAssetId
    ): Promise<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.AccountId32
    ): AsyncIterable<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.AccountId32,
        key3: v1030.VersionedAssetId
    ): AsyncIterable<[number, v1030.AccountId32, v1030.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairs(
        block: Block,
        key1: number
    ): Promise<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: v1030.AccountId32
    ): Promise<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: v1030.AccountId32,
        key3: v1030.VersionedAssetId
    ): Promise<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.AccountId32
    ): AsyncIterable<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1030.AccountId32,
        key3: v1030.VersionedAssetId
    ): AsyncIterable<
        [k: [number, v1030.AccountId32, v1030.VersionedAssetId], v: v1030.RemoteLockedFungibleRecord | undefined][]
    >
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesV1060 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: v1060.AccountId32,
        key3: v1060.VersionedAssetId
    ): Promise<v1060.RemoteLockedFungibleRecord | undefined>
    getMany(
        block: Block,
        keys: [number, v1060.AccountId32, v1060.VersionedAssetId][]
    ): Promise<(v1060.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v1060.AccountId32
    ): Promise<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeys(
        block: Block,
        key1: number,
        key2: v1060.AccountId32,
        key3: v1060.VersionedAssetId
    ): Promise<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.AccountId32
    ): AsyncIterable<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.AccountId32,
        key3: v1060.VersionedAssetId
    ): AsyncIterable<[number, v1060.AccountId32, v1060.VersionedAssetId][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairs(
        block: Block,
        key1: number
    ): Promise<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: v1060.AccountId32
    ): Promise<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairs(
        block: Block,
        key1: number,
        key2: v1060.AccountId32,
        key3: v1060.VersionedAssetId
    ): Promise<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.AccountId32
    ): AsyncIterable<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1060.AccountId32,
        key3: v1060.VersionedAssetId
    ): AsyncIterable<
        [k: [number, v1060.AccountId32, v1060.VersionedAssetId], v: v1060.RemoteLockedFungibleRecord | undefined][]
    >
}

export const lockedFungibles = {
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    enjinV100: new StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [enjinV100.AccountId32],
        sts.array(() => sts.tuple(() => [sts.bigint(), enjinV100.VersionedMultiLocation]))
    ) as LockedFungiblesEnjinV100,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    enjinV1032: new StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [enjinV1032.AccountId32],
        sts.array(() => sts.tuple(() => [sts.bigint(), enjinV1032.VersionedLocation]))
    ) as LockedFungiblesEnjinV1032,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v100: new StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [v100.AccountId32],
        sts.array(() => sts.tuple(() => [sts.bigint(), v100.VersionedMultiLocation]))
    ) as LockedFungiblesV100,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v1030: new StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [v1030.AccountId32],
        sts.array(() => sts.tuple(() => [sts.bigint(), v1030.VersionedLocation]))
    ) as LockedFungiblesV1030,
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    v1060: new StorageType(
        'XcmPallet.LockedFungibles',
        'Optional',
        [v1060.AccountId32],
        sts.array(() => sts.tuple(() => [sts.bigint(), v1060.VersionedLocation]))
    ) as LockedFungiblesV1060,
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<[bigint, enjinV100.VersionedMultiLocation][] | undefined>
    getMany(
        block: Block,
        keys: enjinV100.AccountId32[]
    ): Promise<([bigint, enjinV100.VersionedMultiLocation][] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV100.AccountId32, v: [bigint, enjinV100.VersionedMultiLocation][] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: [bigint, enjinV100.VersionedMultiLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: [bigint, enjinV100.VersionedMultiLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: [bigint, enjinV100.VersionedMultiLocation][] | undefined][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.AccountId32): Promise<[bigint, enjinV1032.VersionedLocation][] | undefined>
    getMany(
        block: Block,
        keys: enjinV1032.AccountId32[]
    ): Promise<([bigint, enjinV1032.VersionedLocation][] | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.AccountId32[]>
    getKeys(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<enjinV1032.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV1032.AccountId32, v: [bigint, enjinV1032.VersionedLocation][] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1032.AccountId32
    ): Promise<[k: enjinV1032.AccountId32, v: [bigint, enjinV1032.VersionedLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: [bigint, enjinV1032.VersionedLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.AccountId32
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: [bigint, enjinV1032.VersionedLocation][] | undefined][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v100.AccountId32): Promise<[bigint, v100.VersionedMultiLocation][] | undefined>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<([bigint, v100.VersionedMultiLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: [bigint, v100.VersionedMultiLocation][] | undefined][]>
    getPairs(
        block: Block,
        key: v100.AccountId32
    ): Promise<[k: v100.AccountId32, v: [bigint, v100.VersionedMultiLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v100.AccountId32, v: [bigint, v100.VersionedMultiLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v100.AccountId32
    ): AsyncIterable<[k: v100.AccountId32, v: [bigint, v100.VersionedMultiLocation][] | undefined][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.AccountId32): Promise<[bigint, v1030.VersionedLocation][] | undefined>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<([bigint, v1030.VersionedLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: [bigint, v1030.VersionedLocation][] | undefined][]>
    getPairs(
        block: Block,
        key: v1030.AccountId32
    ): Promise<[k: v1030.AccountId32, v: [bigint, v1030.VersionedLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1030.AccountId32, v: [bigint, v1030.VersionedLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.AccountId32
    ): AsyncIterable<[k: v1030.AccountId32, v: [bigint, v1030.VersionedLocation][] | undefined][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1060.AccountId32): Promise<[bigint, v1060.VersionedLocation][] | undefined>
    getMany(block: Block, keys: v1060.AccountId32[]): Promise<([bigint, v1060.VersionedLocation][] | undefined)[]>
    getKeys(block: Block): Promise<v1060.AccountId32[]>
    getKeys(block: Block, key: v1060.AccountId32): Promise<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.AccountId32): AsyncIterable<v1060.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1060.AccountId32, v: [bigint, v1060.VersionedLocation][] | undefined][]>
    getPairs(
        block: Block,
        key: v1060.AccountId32
    ): Promise<[k: v1060.AccountId32, v: [bigint, v1060.VersionedLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.AccountId32, v: [bigint, v1060.VersionedLocation][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.AccountId32
    ): AsyncIterable<[k: v1060.AccountId32, v: [bigint, v1060.VersionedLocation][] | undefined][]>
}

export const xcmExecutionSuspended = {
    /**
     *  Global suspension state of the XCM executor.
     */
    enjinV100: new StorageType(
        'XcmPallet.XcmExecutionSuspended',
        'Default',
        [],
        sts.boolean()
    ) as XcmExecutionSuspendedEnjinV100,
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmExecutionSuspendedEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const shouldRecordXcm = {
    /**
     *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
     *  Only one XCM program will be recorded at a time.
     *  This is meant to be used in runtime APIs, and it's advised it stays false
     *  for all other use cases, so as to not degrade regular performance.
     *
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    enjinV1050: new StorageType('XcmPallet.ShouldRecordXcm', 'Default', [], sts.boolean()) as ShouldRecordXcmEnjinV1050,
}

/**
 *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
 *  Only one XCM program will be recorded at a time.
 *  This is meant to be used in runtime APIs, and it's advised it stays false
 *  for all other use cases, so as to not degrade regular performance.
 *
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface ShouldRecordXcmEnjinV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const recordedXcm = {
    /**
     *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
     *  will be stored here.
     *  Runtime APIs can fetch the XCM that was executed by accessing this value.
     *
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    enjinV1050: new StorageType(
        'XcmPallet.RecordedXcm',
        'Optional',
        [],
        sts.array(() => enjinV1050.V4Instruction)
    ) as RecordedXcmEnjinV1050,
    /**
     *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
     *  will be stored here.
     *  Runtime APIs can fetch the XCM that was executed by accessing this value.
     *
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    v1060: new StorageType(
        'XcmPallet.RecordedXcm',
        'Optional',
        [],
        sts.array(() => v1060.V5Instruction)
    ) as RecordedXcmV1060,
}

/**
 *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
 *  will be stored here.
 *  Runtime APIs can fetch the XCM that was executed by accessing this value.
 *
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface RecordedXcmEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV1050.V4Instruction[] | undefined>
}

/**
 *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
 *  will be stored here.
 *  Runtime APIs can fetch the XCM that was executed by accessing this value.
 *
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface RecordedXcmV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v1060.V5Instruction[] | undefined>
}

export const authorizedAliases = {
    /**
     *  Map of authorized aliasers of local origins. Each local location can authorize a list of
     *  other locations to alias into it. Each aliaser is only valid until its inner `expiry`
     *  block number.
     */
    v1060: new StorageType(
        'XcmPallet.AuthorizedAliases',
        'Optional',
        [v1060.VersionedLocation],
        v1060.AuthorizedAliasesEntry
    ) as AuthorizedAliasesV1060,
}

/**
 *  Map of authorized aliasers of local origins. Each local location can authorize a list of
 *  other locations to alias into it. Each aliaser is only valid until its inner `expiry`
 *  block number.
 */
export interface AuthorizedAliasesV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1060.VersionedLocation): Promise<v1060.AuthorizedAliasesEntry | undefined>
    getMany(block: Block, keys: v1060.VersionedLocation[]): Promise<(v1060.AuthorizedAliasesEntry | undefined)[]>
    getKeys(block: Block): Promise<v1060.VersionedLocation[]>
    getKeys(block: Block, key: v1060.VersionedLocation): Promise<v1060.VersionedLocation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.VersionedLocation[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.VersionedLocation): AsyncIterable<v1060.VersionedLocation[]>
    getPairs(block: Block): Promise<[k: v1060.VersionedLocation, v: v1060.AuthorizedAliasesEntry | undefined][]>
    getPairs(
        block: Block,
        key: v1060.VersionedLocation
    ): Promise<[k: v1060.VersionedLocation, v: v1060.AuthorizedAliasesEntry | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.VersionedLocation, v: v1060.AuthorizedAliasesEntry | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.VersionedLocation
    ): AsyncIterable<[k: v1060.VersionedLocation, v: v1060.AuthorizedAliasesEntry | undefined][]>
}
