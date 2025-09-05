import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v105 from '../v105'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1060 from '../v1060'

export const referendumCount = {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    enjinV100: new StorageType('Referenda.ReferendumCount', 'Default', [], sts.number()) as ReferendumCountEnjinV100,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const referendumInfoFor = {
    /**
     *  Information concerning any given referendum.
     */
    enjinV100: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        enjinV100.ReferendumInfo
    ) as ReferendumInfoForEnjinV100,
    /**
     *  Information concerning any given referendum.
     */
    enjinV101: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        enjinV101.ReferendumInfo
    ) as ReferendumInfoForEnjinV101,
    /**
     *  Information concerning any given referendum.
     */
    enjinV1032: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        enjinV1032.ReferendumInfo
    ) as ReferendumInfoForEnjinV1032,
    /**
     *  Information concerning any given referendum.
     */
    v100: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v100.ReferendumInfo
    ) as ReferendumInfoForV100,
    /**
     *  Information concerning any given referendum.
     */
    v105: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v105.ReferendumInfo
    ) as ReferendumInfoForV105,
    /**
     *  Information concerning any given referendum.
     */
    v1030: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v1030.ReferendumInfo
    ) as ReferendumInfoForV1030,
    /**
     *  Information concerning any given referendum.
     */
    v1060: new StorageType(
        'Referenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v1060.ReferendumInfo
    ) as ReferendumInfoForV1060,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.ReferendumInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.ReferendumInfo | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV101.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV101.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV101.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV101.ReferendumInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV101.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV101.ReferendumInfo | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1032.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1032.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1032.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1032.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV1032.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1032.ReferendumInfo | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v100.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(v100.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v100.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v100.ReferendumInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v100.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v100.ReferendumInfo | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV105 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v105.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(v105.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v105.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v105.ReferendumInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v105.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v105.ReferendumInfo | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1030.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1030.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1030.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1030.ReferendumInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1030.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1030.ReferendumInfo | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1060.ReferendumInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1060.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1060.ReferendumInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1060.ReferendumInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1060.ReferendumInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1060.ReferendumInfo | undefined][]>
}

export const trackQueue = {
    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     *
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    enjinV100: new StorageType(
        'Referenda.TrackQueue',
        'Default',
        [sts.number()],
        sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))
    ) as TrackQueueEnjinV100,
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 *
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface TrackQueueEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key: number): Promise<[number, bigint][] | undefined>
    getMany(block: Block, keys: number[]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: [number, bigint][] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: [number, bigint][] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: [number, bigint][] | undefined][]>
}

export const decidingCount = {
    /**
     *  The number of referenda being decided currently.
     */
    enjinV100: new StorageType(
        'Referenda.DecidingCount',
        'Default',
        [sts.number()],
        sts.number()
    ) as DecidingCountEnjinV100,
}

/**
 *  The number of referenda being decided currently.
 */
export interface DecidingCountEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: number): Promise<number | undefined>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: number | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: number | undefined][]>
}

export const metadataOf = {
    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     *
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    enjinV100: new StorageType(
        'Referenda.MetadataOf',
        'Optional',
        [sts.number()],
        enjinV100.H256
    ) as MetadataOfEnjinV100,
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 *
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface MetadataOfEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.H256 | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.H256 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.H256 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.H256 | undefined][]>
}
