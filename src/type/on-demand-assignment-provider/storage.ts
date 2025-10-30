import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const paraIdAffinity = {
    /**
     *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
     *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
     *  `ParaId` on two or more `CoreIndex`es.
     */
    v1060: new StorageType(
        'OnDemandAssignmentProvider.ParaIdAffinity',
        'Optional',
        [v1060.Id],
        v1060.CoreAffinityCount
    ) as ParaIdAffinityV1060,
}

/**
 *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
 *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
 *  `ParaId` on two or more `CoreIndex`es.
 */
export interface ParaIdAffinityV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1060.Id): Promise<v1060.CoreAffinityCount | undefined>
    getMany(block: Block, keys: v1060.Id[]): Promise<(v1060.CoreAffinityCount | undefined)[]>
    getKeys(block: Block): Promise<v1060.Id[]>
    getKeys(block: Block, key: v1060.Id): Promise<v1060.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.Id): AsyncIterable<v1060.Id[]>
    getPairs(block: Block): Promise<[k: v1060.Id, v: v1060.CoreAffinityCount | undefined][]>
    getPairs(block: Block, key: v1060.Id): Promise<[k: v1060.Id, v: v1060.CoreAffinityCount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.Id, v: v1060.CoreAffinityCount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.Id
    ): AsyncIterable<[k: v1060.Id, v: v1060.CoreAffinityCount | undefined][]>
}

export const queueStatus = {
    /**
     *  Overall status of queue (both free + affinity entries)
     */
    v1060: new StorageType(
        'OnDemandAssignmentProvider.QueueStatus',
        'Default',
        [],
        v1060.QueueStatusType
    ) as QueueStatusV1060,
}

/**
 *  Overall status of queue (both free + affinity entries)
 */
export interface QueueStatusV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1060.QueueStatusType
    get(block: Block): Promise<v1060.QueueStatusType | undefined>
}

export const freeEntries = {
    /**
     *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
     */
    v1060: new StorageType(
        'OnDemandAssignmentProvider.FreeEntries',
        'Default',
        [],
        sts.array(() => v1060.EnqueuedOrder)
    ) as FreeEntriesV1060,
}

/**
 *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
 */
export interface FreeEntriesV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1060.EnqueuedOrder[]
    get(block: Block): Promise<v1060.EnqueuedOrder[] | undefined>
}

export const affinityEntries = {
    /**
     *  Queue entries that are currently bound to a particular core due to core affinity.
     */
    v1060: new StorageType(
        'OnDemandAssignmentProvider.AffinityEntries',
        'Default',
        [v1060.V8CoreIndex],
        sts.array(() => v1060.EnqueuedOrder)
    ) as AffinityEntriesV1060,
}

/**
 *  Queue entries that are currently bound to a particular core due to core affinity.
 */
export interface AffinityEntriesV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1060.EnqueuedOrder[]
    get(block: Block, key: v1060.V8CoreIndex): Promise<v1060.EnqueuedOrder[] | undefined>
    getMany(block: Block, keys: v1060.V8CoreIndex[]): Promise<(v1060.EnqueuedOrder[] | undefined)[]>
    getKeys(block: Block): Promise<v1060.V8CoreIndex[]>
    getKeys(block: Block, key: v1060.V8CoreIndex): Promise<v1060.V8CoreIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.V8CoreIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.V8CoreIndex): AsyncIterable<v1060.V8CoreIndex[]>
    getPairs(block: Block): Promise<[k: v1060.V8CoreIndex, v: v1060.EnqueuedOrder[] | undefined][]>
    getPairs(
        block: Block,
        key: v1060.V8CoreIndex
    ): Promise<[k: v1060.V8CoreIndex, v: v1060.EnqueuedOrder[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.V8CoreIndex, v: v1060.EnqueuedOrder[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.V8CoreIndex
    ): AsyncIterable<[k: v1060.V8CoreIndex, v: v1060.EnqueuedOrder[] | undefined][]>
}

export const revenue = {
    /**
     *  Keeps track of accumulated revenue from on demand order sales.
     */
    v1060: new StorageType(
        'OnDemandAssignmentProvider.Revenue',
        'Default',
        [],
        sts.array(() => sts.bigint())
    ) as RevenueV1060,
}

/**
 *  Keeps track of accumulated revenue from on demand order sales.
 */
export interface RevenueV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint[]
    get(block: Block): Promise<bigint[] | undefined>
}

export const credits = {
    /**
     *  Keeps track of credits owned by each account.
     */
    v1060: new StorageType(
        'OnDemandAssignmentProvider.Credits',
        'Default',
        [v1060.AccountId32],
        sts.bigint()
    ) as CreditsV1060,
}

/**
 *  Keeps track of credits owned by each account.
 */
export interface CreditsV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v1060.AccountId32): Promise<bigint | undefined>
    getMany(block: Block, keys: v1060.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v1060.AccountId32[]>
    getKeys(block: Block, key: v1060.AccountId32): Promise<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.AccountId32): AsyncIterable<v1060.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1060.AccountId32, v: bigint | undefined][]>
    getPairs(block: Block, key: v1060.AccountId32): Promise<[k: v1060.AccountId32, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1060.AccountId32, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.AccountId32
    ): AsyncIterable<[k: v1060.AccountId32, v: bigint | undefined][]>
}
