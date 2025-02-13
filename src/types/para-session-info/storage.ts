import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v104 from '../v104'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const assignmentKeysUnsafe = {
    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    enjinV100: new StorageType(
        'ParaSessionInfo.AssignmentKeysUnsafe',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as AssignmentKeysUnsafeEnjinV100,
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface AssignmentKeysUnsafeEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const earliestStoredSession = {
    /**
     *  The earliest session for which previous session info is stored.
     */
    enjinV100: new StorageType(
        'ParaSessionInfo.EarliestStoredSession',
        'Default',
        [],
        sts.number()
    ) as EarliestStoredSessionEnjinV100,
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface EarliestStoredSessionEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const sessions = {
    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    enjinV100: new StorageType(
        'ParaSessionInfo.Sessions',
        'Optional',
        [sts.number()],
        enjinV100.V4SessionInfo
    ) as SessionsEnjinV100,
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface SessionsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.V4SessionInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.V4SessionInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.V4SessionInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.V4SessionInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.V4SessionInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.V4SessionInfo | undefined][]>
}

export const accountKeys = {
    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    enjinV100: new StorageType(
        'ParaSessionInfo.AccountKeys',
        'Optional',
        [sts.number()],
        sts.array(() => enjinV100.AccountId32)
    ) as AccountKeysEnjinV100,
}

/**
 *  The validator account keys of the validators actively participating in parachain consensus.
 */
export interface AccountKeysEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.AccountId32[] | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.AccountId32[] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.AccountId32[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.AccountId32[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.AccountId32[] | undefined][]>
}

export const sessionExecutorParams = {
    /**
     *  Executor parameter set for a given session index
     */
    enjinV100: new StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [sts.number()],
        sts.array(() => enjinV100.V4ExecutorParam)
    ) as SessionExecutorParamsEnjinV100,
    /**
     *  Executor parameter set for a given session index
     */
    enjinV1032: new StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [sts.number()],
        sts.array(() => enjinV1032.V6ExecutorParam)
    ) as SessionExecutorParamsEnjinV1032,
    /**
     *  Executor parameter set for a given session index
     */
    v104: new StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [sts.number()],
        sts.array(() => v104.V4ExecutorParam)
    ) as SessionExecutorParamsV104,
    /**
     *  Executor parameter set for a given session index
     */
    v1030: new StorageType(
        'ParaSessionInfo.SessionExecutorParams',
        'Optional',
        [sts.number()],
        sts.array(() => v1030.V6ExecutorParam)
    ) as SessionExecutorParamsV1030,
}

/**
 *  Executor parameter set for a given session index
 */
export interface SessionExecutorParamsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.V4ExecutorParam[] | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.V4ExecutorParam[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.V4ExecutorParam[] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.V4ExecutorParam[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV100.V4ExecutorParam[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.V4ExecutorParam[] | undefined][]>
}

/**
 *  Executor parameter set for a given session index
 */
export interface SessionExecutorParamsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1032.V6ExecutorParam[] | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1032.V6ExecutorParam[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1032.V6ExecutorParam[] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1032.V6ExecutorParam[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV1032.V6ExecutorParam[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1032.V6ExecutorParam[] | undefined][]>
}

/**
 *  Executor parameter set for a given session index
 */
export interface SessionExecutorParamsV104 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v104.V4ExecutorParam[] | undefined>
    getMany(block: Block, keys: number[]): Promise<(v104.V4ExecutorParam[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v104.V4ExecutorParam[] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v104.V4ExecutorParam[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v104.V4ExecutorParam[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v104.V4ExecutorParam[] | undefined][]>
}

/**
 *  Executor parameter set for a given session index
 */
export interface SessionExecutorParamsV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1030.V6ExecutorParam[] | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1030.V6ExecutorParam[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1030.V6ExecutorParam[] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1030.V6ExecutorParam[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1030.V6ExecutorParam[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1030.V6ExecutorParam[] | undefined][]>
}
