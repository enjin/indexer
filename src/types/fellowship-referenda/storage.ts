import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v105 from '../v105'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const referendumCount = {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    enjinV100: new StorageType(
        'FellowshipReferenda.ReferendumCount',
        'Default',
        [],
        sts.number()
    ) as ReferendumCountEnjinV100,
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
        'FellowshipReferenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        enjinV100.Type_940
    ) as ReferendumInfoForEnjinV100,
    /**
     *  Information concerning any given referendum.
     */
    enjinV101: new StorageType(
        'FellowshipReferenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        enjinV101.Type_951
    ) as ReferendumInfoForEnjinV101,
    /**
     *  Information concerning any given referendum.
     */
    enjinV1032: new StorageType(
        'FellowshipReferenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        enjinV1032.Type_1095
    ) as ReferendumInfoForEnjinV1032,
    /**
     *  Information concerning any given referendum.
     */
    v100: new StorageType(
        'FellowshipReferenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v100.Type_780
    ) as ReferendumInfoForV100,
    /**
     *  Information concerning any given referendum.
     */
    v105: new StorageType(
        'FellowshipReferenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v105.Type_935
    ) as ReferendumInfoForV105,
    /**
     *  Information concerning any given referendum.
     */
    v1030: new StorageType(
        'FellowshipReferenda.ReferendumInfoFor',
        'Optional',
        [sts.number()],
        v1030.Type_1093
    ) as ReferendumInfoForV1030,
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.Type_940 | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.Type_940 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.Type_940 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.Type_940 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.Type_940 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.Type_940 | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV101.Type_951 | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV101.Type_951 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV101.Type_951 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV101.Type_951 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV101.Type_951 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV101.Type_951 | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1032.Type_1095 | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1032.Type_1095 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1032.Type_1095 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1032.Type_1095 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV1032.Type_1095 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1032.Type_1095 | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v100.Type_780 | undefined>
    getMany(block: Block, keys: number[]): Promise<(v100.Type_780 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v100.Type_780 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v100.Type_780 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v100.Type_780 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v100.Type_780 | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV105 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v105.Type_935 | undefined>
    getMany(block: Block, keys: number[]): Promise<(v105.Type_935 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v105.Type_935 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v105.Type_935 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v105.Type_935 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v105.Type_935 | undefined][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendumInfoForV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1030.Type_1093 | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1030.Type_1093 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1030.Type_1093 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1030.Type_1093 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1030.Type_1093 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1030.Type_1093 | undefined][]>
}

export const trackQueue = {
    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     *
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    enjinV100: new StorageType(
        'FellowshipReferenda.TrackQueue',
        'Default',
        [sts.number()],
        sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))
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
    getDefault(block: Block): [number, number][]
    get(block: Block, key: number): Promise<[number, number][] | undefined>
    getMany(block: Block, keys: number[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: [number, number][] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: [number, number][] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: [number, number][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: [number, number][] | undefined][]>
}

export const decidingCount = {
    /**
     *  The number of referenda being decided currently.
     */
    enjinV100: new StorageType(
        'FellowshipReferenda.DecidingCount',
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
        'FellowshipReferenda.MetadataOf',
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
