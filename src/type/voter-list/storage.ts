import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v1070 from '../v1070'

export const listNodes = {
    /**
     *  A single node, within some bag.
     *
     *  Nodes store links forward and back within their respective bags.
     */
    enjinV100: new StorageType(
        'VoterList.ListNodes',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.Node
    ) as ListNodesEnjinV100,
}

/**
 *  A single node, within some bag.
 *
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.Node | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.Node | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.Node | undefined][]>
}

export const counterForListNodes = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType(
        'VoterList.CounterForListNodes',
        'Default',
        [],
        sts.number()
    ) as CounterForListNodesEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const listBags = {
    /**
     *  A bag stored in storage.
     *
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    enjinV100: new StorageType('VoterList.ListBags', 'Optional', [sts.bigint()], enjinV100.Bag) as ListBagsEnjinV100,
}

/**
 *  A bag stored in storage.
 *
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV100.Bag | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV100.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV100.Bag | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV100.Bag | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV100.Bag | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV100.Bag | undefined][]>
}

export const lock = {
    /**
     *  Lock all updates to this pallet.
     *
     *  If any nodes needs updating, removal or addition due to a temporary lock, the
     *  [`Call::rebag`] can be used.
     */
    enjinV1062: new StorageType('VoterList.Lock', 'Optional', [], sts.unit()) as LockEnjinV1062,
}

/**
 *  Lock all updates to this pallet.
 *
 *  If any nodes needs updating, removal or addition due to a temporary lock, the
 *  [`Call::rebag`] can be used.
 */
export interface LockEnjinV1062 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<null | undefined>
}

export const nextNodeAutoRebagged = {
    /**
     *  Pointer that remembers the next node that will be auto-rebagged.
     *  When `None`, the next scan will start from the list head again.
     */
    v1070: new StorageType(
        'VoterList.NextNodeAutoRebagged',
        'Optional',
        [],
        v1070.AccountId32
    ) as NextNodeAutoRebaggedV1070,
}

/**
 *  Pointer that remembers the next node that will be auto-rebagged.
 *  When `None`, the next scan will start from the list head again.
 */
export interface NextNodeAutoRebaggedV1070 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v1070.AccountId32 | undefined>
}

export const pendingRebag = {
    /**
     *  Accounts that failed to be inserted into the bags-list due to locking.
     *  These accounts will be processed with priority in `on_idle` or via `rebag` extrinsic.
     *
     *  Note: This storage is intentionally unbounded. The following factors make bounding
     *  unnecessary:
     *  1. The storage usage is temporary - accounts are processed and removed in `on_idle`
     *  2. The pallet is only locked during snapshot generation, which is weight-limited
     *  3. Processing happens at multiple accounts per block, clearing even large backlogs quickly
     *  4. An artificial limit could be exhausted by an attacker, preventing legitimate
     *     auto-rebagging from putting accounts in the correct position
     *
     *  We don't store the score here - it's always fetched from `ScoreProvider` when processing,
     *  ensuring we use the most up-to-date score (accounts may have been slashed, rewarded, etc.
     *  while waiting in the queue).
     */
    v1070: new StorageType('VoterList.PendingRebag', 'Optional', [v1070.AccountId32], sts.unit()) as PendingRebagV1070,
}

/**
 *  Accounts that failed to be inserted into the bags-list due to locking.
 *  These accounts will be processed with priority in `on_idle` or via `rebag` extrinsic.
 *
 *  Note: This storage is intentionally unbounded. The following factors make bounding
 *  unnecessary:
 *  1. The storage usage is temporary - accounts are processed and removed in `on_idle`
 *  2. The pallet is only locked during snapshot generation, which is weight-limited
 *  3. Processing happens at multiple accounts per block, clearing even large backlogs quickly
 *  4. An artificial limit could be exhausted by an attacker, preventing legitimate
 *     auto-rebagging from putting accounts in the correct position
 *
 *  We don't store the score here - it's always fetched from `ScoreProvider` when processing,
 *  ensuring we use the most up-to-date score (accounts may have been slashed, rewarded, etc.
 *  while waiting in the queue).
 */
export interface PendingRebagV1070 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1070.AccountId32): Promise<null | undefined>
    getMany(block: Block, keys: v1070.AccountId32[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<v1070.AccountId32[]>
    getKeys(block: Block, key: v1070.AccountId32): Promise<v1070.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1070.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1070.AccountId32): AsyncIterable<v1070.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1070.AccountId32, v: null | undefined][]>
    getPairs(block: Block, key: v1070.AccountId32): Promise<[k: v1070.AccountId32, v: null | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1070.AccountId32, v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1070.AccountId32
    ): AsyncIterable<[k: v1070.AccountId32, v: null | undefined][]>
}

export const counterForPendingRebag = {
    /**
     * Counter for the related counted storage map
     */
    v1070: new StorageType(
        'VoterList.CounterForPendingRebag',
        'Default',
        [],
        sts.number()
    ) as CounterForPendingRebagV1070,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForPendingRebagV1070 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}
