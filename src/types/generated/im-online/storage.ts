import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'

export const heartbeatAfter = {
    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     *
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     *
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    enjinV100: new StorageType('im-online.HeartbeatAfter', 'Default', [], sts.number()) as HeartbeatAfterEnjinV100,
}

/**
 *  The block number after which it's ok to send heartbeats in the current
 *  session.
 *
 *  At the beginning of each session we set this to a value that should fall
 *  roughly in the middle of the session duration. The idea is to first wait for
 *  the validators to produce a block in the current session, so that the
 *  heartbeat later on will not be necessary.
 *
 *  This value will only be used as a fallback if we fail to get a proper session
 *  progress estimate from `NextSessionRotation`, as those estimates should be
 *  more accurate then the value we calculate for `HeartbeatAfter`.
 */
export interface HeartbeatAfterEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const keys = {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    enjinV100: new StorageType(
        'im-online.Keys',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as KeysEnjinV100,
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface KeysEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const receivedHeartbeats = {
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    enjinV100: new StorageType(
        'im-online.ReceivedHeartbeats',
        'Optional',
        [sts.number(), sts.number()],
        enjinV100.WrapperOpaque
    ) as ReceivedHeartbeatsEnjinV100,
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    enjinV1026: new StorageType(
        'im-online.ReceivedHeartbeats',
        'Optional',
        [sts.number(), sts.number()],
        sts.boolean()
    ) as ReceivedHeartbeatsEnjinV1026,
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    v100: new StorageType(
        'im-online.ReceivedHeartbeats',
        'Optional',
        [sts.number(), sts.number()],
        v100.WrapperOpaque
    ) as ReceivedHeartbeatsV100,
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    v1026: new StorageType(
        'im-online.ReceivedHeartbeats',
        'Optional',
        [sts.number(), sts.number()],
        sts.boolean()
    ) as ReceivedHeartbeatsV1026,
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ReceivedHeartbeatsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<enjinV100.WrapperOpaque | undefined>
    getMany(block: Block, keys: [number, number][]): Promise<(enjinV100.WrapperOpaque | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: enjinV100.WrapperOpaque | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: enjinV100.WrapperOpaque | undefined][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: enjinV100.WrapperOpaque | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: enjinV100.WrapperOpaque | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, number], v: enjinV100.WrapperOpaque | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: number
    ): AsyncIterable<[k: [number, number], v: enjinV100.WrapperOpaque | undefined][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
 */
export interface ReceivedHeartbeatsEnjinV1026 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<boolean | undefined>
    getMany(block: Block, keys: [number, number][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: boolean | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: boolean | undefined][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: boolean | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: number
    ): AsyncIterable<[k: [number, number], v: boolean | undefined][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ReceivedHeartbeatsV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<v100.WrapperOpaque | undefined>
    getMany(block: Block, keys: [number, number][]): Promise<(v100.WrapperOpaque | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: v100.WrapperOpaque | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: v100.WrapperOpaque | undefined][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: v100.WrapperOpaque | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: v100.WrapperOpaque | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, number], v: v100.WrapperOpaque | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: number
    ): AsyncIterable<[k: [number, number], v: v100.WrapperOpaque | undefined][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
 */
export interface ReceivedHeartbeatsV1026 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<boolean | undefined>
    getMany(block: Block, keys: [number, number][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: boolean | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: boolean | undefined][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: boolean | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: number
    ): AsyncIterable<[k: [number, number], v: boolean | undefined][]>
}

export const authoredBlocks = {
    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    enjinV100: new StorageType(
        'im-online.AuthoredBlocks',
        'Default',
        [sts.number(), enjinV100.AccountId32],
        sts.number()
    ) as AuthoredBlocksEnjinV100,
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface AuthoredBlocksEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<number | undefined>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): Promise<[k: [number, enjinV100.AccountId32], v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[k: [number, enjinV100.AccountId32], v: number | undefined][]>
}
