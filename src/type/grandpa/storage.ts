import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1032 from '../enjinV1032'

export const state = {
    /**
     *  State of the current authority set.
     */
    enjinV100: new StorageType('Grandpa.State', 'Default', [], enjinV100.StoredState) as StateEnjinV100,
}

/**
 *  State of the current authority set.
 */
export interface StateEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.StoredState
    get(block: Block): Promise<enjinV100.StoredState | undefined>
}

export const pendingChange = {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    enjinV100: new StorageType(
        'Grandpa.PendingChange',
        'Optional',
        [],
        enjinV100.StoredPendingChange
    ) as PendingChangeEnjinV100,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV100.StoredPendingChange | undefined>
}

export const nextForced = {
    /**
     *  next block number where we can force a change.
     */
    enjinV100: new StorageType('Grandpa.NextForced', 'Optional', [], sts.number()) as NextForcedEnjinV100,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const stalled = {
    /**
     *  `true` if we are currently stalled.
     */
    enjinV100: new StorageType(
        'Grandpa.Stalled',
        'Optional',
        [],
        sts.tuple(() => [sts.number(), sts.number()])
    ) as StalledEnjinV100,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<[number, number] | undefined>
}

export const currentSetId = {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    enjinV100: new StorageType('Grandpa.CurrentSetId', 'Default', [], sts.bigint()) as CurrentSetIdEnjinV100,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const setIdSession = {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     *
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     *
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    enjinV100: new StorageType(
        'Grandpa.SetIdSession',
        'Optional',
        [sts.bigint()],
        sts.number()
    ) as SetIdSessionEnjinV100,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 *
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 *
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface SetIdSessionEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<number | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: number | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: number | undefined][]>
}

export const authorities = {
    /**
     *  The current list of authorities.
     */
    enjinV1032: new StorageType(
        'Grandpa.Authorities',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV1032.Public, sts.bigint()]))
    ) as AuthoritiesEnjinV1032,
}

/**
 *  The current list of authorities.
 */
export interface AuthoritiesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV1032.Public, bigint][]
    get(block: Block): Promise<[enjinV1032.Public, bigint][] | undefined>
}
