import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const paraIdAffinity = {
    /**
     *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
     *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
     *  `ParaId` on two or more `CoreIndex`es.
     */
    enjinV1062: new StorageType(
        'OnDemandAssignmentProvider.ParaIdAffinity',
        'Optional',
        [enjinV1062.Id],
        enjinV1062.CoreAffinityCount
    ) as ParaIdAffinityEnjinV1062,
}

/**
 *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
 *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
 *  `ParaId` on two or more `CoreIndex`es.
 */
export interface ParaIdAffinityEnjinV1062 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1062.Id): Promise<enjinV1062.CoreAffinityCount | undefined>
    getMany(block: Block, keys: enjinV1062.Id[]): Promise<(enjinV1062.CoreAffinityCount | undefined)[]>
    getKeys(block: Block): Promise<enjinV1062.Id[]>
    getKeys(block: Block, key: enjinV1062.Id): Promise<enjinV1062.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1062.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1062.Id): AsyncIterable<enjinV1062.Id[]>
    getPairs(block: Block): Promise<[k: enjinV1062.Id, v: enjinV1062.CoreAffinityCount | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1062.Id
    ): Promise<[k: enjinV1062.Id, v: enjinV1062.CoreAffinityCount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1062.Id, v: enjinV1062.CoreAffinityCount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1062.Id
    ): AsyncIterable<[k: enjinV1062.Id, v: enjinV1062.CoreAffinityCount | undefined][]>
}

export const queueStatus = {
    /**
     *  Overall status of queue (both free + affinity entries)
     */
    enjinV1062: new StorageType(
        'OnDemandAssignmentProvider.QueueStatus',
        'Default',
        [],
        enjinV1062.QueueStatusType
    ) as QueueStatusEnjinV1062,
}

/**
 *  Overall status of queue (both free + affinity entries)
 */
export interface QueueStatusEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1062.QueueStatusType
    get(block: Block): Promise<enjinV1062.QueueStatusType | undefined>
}

export const freeEntries = {
    /**
     *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
     */
    enjinV1062: new StorageType(
        'OnDemandAssignmentProvider.FreeEntries',
        'Default',
        [],
        sts.array(() => enjinV1062.EnqueuedOrder)
    ) as FreeEntriesEnjinV1062,
}

/**
 *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
 */
export interface FreeEntriesEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1062.EnqueuedOrder[]
    get(block: Block): Promise<enjinV1062.EnqueuedOrder[] | undefined>
}

export const affinityEntries = {
    /**
     *  Queue entries that are currently bound to a particular core due to core affinity.
     */
    enjinV1062: new StorageType(
        'OnDemandAssignmentProvider.AffinityEntries',
        'Default',
        [enjinV1062.V8CoreIndex],
        sts.array(() => enjinV1062.EnqueuedOrder)
    ) as AffinityEntriesEnjinV1062,
}

/**
 *  Queue entries that are currently bound to a particular core due to core affinity.
 */
export interface AffinityEntriesEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1062.EnqueuedOrder[]
    get(block: Block, key: enjinV1062.V8CoreIndex): Promise<enjinV1062.EnqueuedOrder[] | undefined>
    getMany(block: Block, keys: enjinV1062.V8CoreIndex[]): Promise<(enjinV1062.EnqueuedOrder[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV1062.V8CoreIndex[]>
    getKeys(block: Block, key: enjinV1062.V8CoreIndex): Promise<enjinV1062.V8CoreIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1062.V8CoreIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1062.V8CoreIndex): AsyncIterable<enjinV1062.V8CoreIndex[]>
    getPairs(block: Block): Promise<[k: enjinV1062.V8CoreIndex, v: enjinV1062.EnqueuedOrder[] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1062.V8CoreIndex
    ): Promise<[k: enjinV1062.V8CoreIndex, v: enjinV1062.EnqueuedOrder[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1062.V8CoreIndex, v: enjinV1062.EnqueuedOrder[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1062.V8CoreIndex
    ): AsyncIterable<[k: enjinV1062.V8CoreIndex, v: enjinV1062.EnqueuedOrder[] | undefined][]>
}

export const revenue = {
    /**
     *  Keeps track of accumulated revenue from on demand order sales.
     */
    enjinV1062: new StorageType(
        'OnDemandAssignmentProvider.Revenue',
        'Default',
        [],
        sts.array(() => sts.bigint())
    ) as RevenueEnjinV1062,
}

/**
 *  Keeps track of accumulated revenue from on demand order sales.
 */
export interface RevenueEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint[]
    get(block: Block): Promise<bigint[] | undefined>
}

export const credits = {
    /**
     *  Keeps track of credits owned by each account.
     */
    enjinV1062: new StorageType(
        'OnDemandAssignmentProvider.Credits',
        'Default',
        [enjinV1062.AccountId32],
        sts.bigint()
    ) as CreditsEnjinV1062,
}

/**
 *  Keeps track of credits owned by each account.
 */
export interface CreditsEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: enjinV1062.AccountId32): Promise<bigint | undefined>
    getMany(block: Block, keys: enjinV1062.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<enjinV1062.AccountId32[]>
    getKeys(block: Block, key: enjinV1062.AccountId32): Promise<enjinV1062.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1062.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1062.AccountId32): AsyncIterable<enjinV1062.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1062.AccountId32, v: bigint | undefined][]>
    getPairs(block: Block, key: enjinV1062.AccountId32): Promise<[k: enjinV1062.AccountId32, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV1062.AccountId32, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1062.AccountId32
    ): AsyncIterable<[k: enjinV1062.AccountId32, v: bigint | undefined][]>
}
