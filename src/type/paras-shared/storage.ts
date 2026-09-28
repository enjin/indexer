import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1060 from '../v1060'
import * as enjinV1062 from '../enjinV1062'
import * as v1080 from '../v1080'

export const currentSessionIndex = {
    /**
     *  The current session index.
     */
    enjinV100: new StorageType(
        'ParasShared.CurrentSessionIndex',
        'Default',
        [],
        sts.number()
    ) as CurrentSessionIndexEnjinV100,
}

/**
 *  The current session index.
 */
export interface CurrentSessionIndexEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const activeValidatorIndices = {
    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    enjinV100: new StorageType(
        'ParasShared.ActiveValidatorIndices',
        'Default',
        [],
        sts.array(() => enjinV100.V4ValidatorIndex)
    ) as ActiveValidatorIndicesEnjinV100,
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ActiveValidatorIndicesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.V4ValidatorIndex[]
    get(block: Block): Promise<enjinV100.V4ValidatorIndex[] | undefined>
}

export const activeValidatorKeys = {
    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    enjinV100: new StorageType(
        'ParasShared.ActiveValidatorKeys',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as ActiveValidatorKeysEnjinV100,
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ActiveValidatorKeysEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const allowedRelayParents = {
    /**
     *  All allowed relay-parents.
     */
    enjinV1032: new StorageType(
        'ParasShared.AllowedRelayParents',
        'Default',
        [],
        enjinV1032.AllowedRelayParentsTracker
    ) as AllowedRelayParentsEnjinV1032,
    /**
     *  All allowed relay-parents.
     */
    enjinV1062: new StorageType(
        'ParasShared.AllowedRelayParents',
        'Default',
        [],
        enjinV1062.AllowedRelayParentsTracker
    ) as AllowedRelayParentsEnjinV1062,
    /**
     *  All allowed relay-parents.
     */
    v1030: new StorageType(
        'ParasShared.AllowedRelayParents',
        'Default',
        [],
        v1030.AllowedRelayParentsTracker
    ) as AllowedRelayParentsV1030,
    /**
     *  All allowed relay-parents.
     */
    v1060: new StorageType(
        'ParasShared.AllowedRelayParents',
        'Default',
        [],
        v1060.AllowedRelayParentsTracker
    ) as AllowedRelayParentsV1060,
    /**
     *  All allowed relay parents, keyed by (session_index, relay_parent_hash).
     */
    v1080: new StorageType(
        'ParasShared.AllowedRelayParents',
        'Optional',
        [sts.number(), v1080.H256],
        v1080.RelayParentInfo
    ) as AllowedRelayParentsV1080,
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.AllowedRelayParentsTracker
    get(block: Block): Promise<enjinV1032.AllowedRelayParentsTracker | undefined>
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1062.AllowedRelayParentsTracker
    get(block: Block): Promise<enjinV1062.AllowedRelayParentsTracker | undefined>
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.AllowedRelayParentsTracker
    get(block: Block): Promise<v1030.AllowedRelayParentsTracker | undefined>
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1060.AllowedRelayParentsTracker
    get(block: Block): Promise<v1060.AllowedRelayParentsTracker | undefined>
}

/**
 *  All allowed relay parents, keyed by (session_index, relay_parent_hash).
 */
export interface AllowedRelayParentsV1080 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v1080.H256): Promise<v1080.RelayParentInfo | undefined>
    getMany(block: Block, keys: [number, v1080.H256][]): Promise<(v1080.RelayParentInfo | undefined)[]>
    getKeys(block: Block): Promise<[number, v1080.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v1080.H256][]>
    getKeys(block: Block, key1: number, key2: v1080.H256): Promise<[number, v1080.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v1080.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v1080.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v1080.H256): AsyncIterable<[number, v1080.H256][]>
    getPairs(block: Block): Promise<[k: [number, v1080.H256], v: v1080.RelayParentInfo | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v1080.H256], v: v1080.RelayParentInfo | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: v1080.H256
    ): Promise<[k: [number, v1080.H256], v: v1080.RelayParentInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, v1080.H256], v: v1080.RelayParentInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, v1080.H256], v: v1080.RelayParentInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: v1080.H256
    ): AsyncIterable<[k: [number, v1080.H256], v: v1080.RelayParentInfo | undefined][]>
}

export const allowedSchedulingParents = {
    /**
     *  All allowed scheduling parents.
     */
    v1080: new StorageType(
        'ParasShared.AllowedSchedulingParents',
        'Default',
        [],
        v1080.AllowedSchedulingParentsTracker
    ) as AllowedSchedulingParentsV1080,
}

/**
 *  All allowed scheduling parents.
 */
export interface AllowedSchedulingParentsV1080 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1080.AllowedSchedulingParentsTracker
    get(block: Block): Promise<v1080.AllowedSchedulingParentsTracker | undefined>
}

export const oldestRelayParentSession = {
    /**
     *  The oldest session index for which we still have relay parent entries in
     *  `AllowedRelayParents`. Used to efficiently prune all expired sessions
     *  when `max_relay_parent_session_age` decreases.
     */
    v1080: new StorageType(
        'ParasShared.OldestRelayParentSession',
        'Default',
        [],
        sts.number()
    ) as OldestRelayParentSessionV1080,
}

/**
 *  The oldest session index for which we still have relay parent entries in
 *  `AllowedRelayParents`. Used to efficiently prune all expired sessions
 *  when `max_relay_parent_session_age` decreases.
 */
export interface OldestRelayParentSessionV1080 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const minimumRelayParentNumber = {
    /**
     *  The minimum relay parent block number for each session that has entries in
     *  `AllowedRelayParents`. This is the block number of the first relay parent
     *  added to each session.
     */
    v1080: new StorageType(
        'ParasShared.MinimumRelayParentNumber',
        'Optional',
        [sts.number()],
        sts.number()
    ) as MinimumRelayParentNumberV1080,
}

/**
 *  The minimum relay parent block number for each session that has entries in
 *  `AllowedRelayParents`. This is the block number of the first relay parent
 *  added to each session.
 */
export interface MinimumRelayParentNumberV1080 {
    is(block: RuntimeCtx): boolean
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
