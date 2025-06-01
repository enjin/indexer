import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const relayDispatchQueues =  {
    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    enjinV100: new StorageType('Ump.RelayDispatchQueues', 'Default', [enjinV100.Id], sts.array(() => sts.bytes())) as RelayDispatchQueuesEnjinV100,
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface RelayDispatchQueuesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block, key: enjinV100.Id): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (Bytes[] | undefined)][]>
}

export const relayDispatchQueueSize =  {
    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    enjinV100: new StorageType('Ump.RelayDispatchQueueSize', 'Default', [enjinV100.Id], sts.tuple(() => [sts.number(), sts.number()])) as RelayDispatchQueueSizeEnjinV100,
}

/**
 *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
 * 
 *  First item in the tuple is the count of messages and second
 *  is the total length (in bytes) of the message payloads.
 * 
 *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
 *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
 *  loading the whole message queue if only the total size and count are required.
 * 
 *  Invariant:
 *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
 */
export interface RelayDispatchQueueSizeEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block, key: enjinV100.Id): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: ([number, number] | undefined)][]>
}

export const needsDispatch =  {
    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    enjinV100: new StorageType('Ump.NeedsDispatch', 'Default', [], sts.array(() => enjinV100.Id)) as NeedsDispatchEnjinV100,
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface NeedsDispatchEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block): Promise<(enjinV100.Id[] | undefined)>
}

export const nextDispatchRoundStartWith =  {
    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    enjinV100: new StorageType('Ump.NextDispatchRoundStartWith', 'Optional', [], enjinV100.Id) as NextDispatchRoundStartWithEnjinV100,
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface NextDispatchRoundStartWithEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.Id | undefined)>
}

export const overweight =  {
    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    enjinV100: new StorageType('Ump.Overweight', 'Optional', [sts.bigint()], sts.tuple(() => [enjinV100.Id, sts.bytes()])) as OverweightEnjinV100,
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These messages stay there until manually dispatched.
 */
export interface OverweightEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([enjinV100.Id, Bytes] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([enjinV100.Id, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([enjinV100.Id, Bytes] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([enjinV100.Id, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([enjinV100.Id, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([enjinV100.Id, Bytes] | undefined)][]>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType('Ump.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const overweightCount =  {
    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    enjinV100: new StorageType('Ump.OverweightCount', 'Default', [], sts.bigint()) as OverweightCountEnjinV100,
}

/**
 *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
 *  index).
 */
export interface OverweightCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
