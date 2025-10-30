import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1030 from '../matrixV1030'
import * as v1060 from '../v1060'

export const validators = {
    /**
     *  The current set of validators.
     */
    matrixEnjinV603: new StorageType(
        'Session.Validators',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.AccountId32)
    ) as ValidatorsMatrixEnjinV603,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountId32[]
    get(block: Block): Promise<matrixEnjinV603.AccountId32[] | undefined>
}

export const currentIndex = {
    /**
     *  Current index of the session.
     */
    matrixEnjinV603: new StorageType(
        'Session.CurrentIndex',
        'Default',
        [],
        sts.number()
    ) as CurrentIndexMatrixEnjinV603,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const queuedChanged = {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    matrixEnjinV603: new StorageType(
        'Session.QueuedChanged',
        'Default',
        [],
        sts.boolean()
    ) as QueuedChangedMatrixEnjinV603,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const queuedKeys = {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    matrixEnjinV603: new StorageType(
        'Session.QueuedKeys',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys]))
    ) as QueuedKeysMatrixEnjinV603,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    matrixV1030: new StorageType(
        'Session.QueuedKeys',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [matrixV1030.AccountId32, matrixV1030.SessionKeys]))
    ) as QueuedKeysMatrixV1030,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    enjinV100: new StorageType(
        'Session.QueuedKeys',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV100.AccountId32, enjinV100.SessionKeys]))
    ) as QueuedKeysEnjinV100,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v1060: new StorageType(
        'Session.QueuedKeys',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [v1060.AccountId32, v1060.SessionKeys]))
    ) as QueuedKeysV1060,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys][]
    get(block: Block): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys][] | undefined>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixV1030.AccountId32, matrixV1030.SessionKeys][]
    get(block: Block): Promise<[matrixV1030.AccountId32, matrixV1030.SessionKeys][] | undefined>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV100.AccountId32, enjinV100.SessionKeys][]
    get(block: Block): Promise<[enjinV100.AccountId32, enjinV100.SessionKeys][] | undefined>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1060.AccountId32, v1060.SessionKeys][]
    get(block: Block): Promise<[v1060.AccountId32, v1060.SessionKeys][] | undefined>
}

export const disabledValidators = {
    /**
     *  Indices of disabled validators.
     *
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    matrixEnjinV603: new StorageType(
        'Session.DisabledValidators',
        'Default',
        [],
        sts.array(() => sts.number())
    ) as DisabledValidatorsMatrixEnjinV603,
    /**
     *  Indices of disabled validators.
     *
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    matrixV1030: new StorageType(
        'Session.DisabledValidators',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), matrixV1030.OffenceSeverity]))
    ) as DisabledValidatorsMatrixV1030,
    /**
     *  Indices of disabled validators.
     *
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    enjinV100: new StorageType(
        'Session.DisabledValidators',
        'Default',
        [],
        sts.array(() => sts.number())
    ) as DisabledValidatorsEnjinV100,
    /**
     *  Indices of disabled validators.
     *
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    v1060: new StorageType(
        'Session.DisabledValidators',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), v1060.OffenceSeverity]))
    ) as DisabledValidatorsV1060,
}

/**
 *  Indices of disabled validators.
 *
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<number[] | undefined>
}

/**
 *  Indices of disabled validators.
 *
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, matrixV1030.OffenceSeverity][]
    get(block: Block): Promise<[number, matrixV1030.OffenceSeverity][] | undefined>
}

/**
 *  Indices of disabled validators.
 *
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<number[] | undefined>
}

/**
 *  Indices of disabled validators.
 *
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1060.OffenceSeverity][]
    get(block: Block): Promise<[number, v1060.OffenceSeverity][] | undefined>
}

export const nextKeys = {
    /**
     *  The next session keys for a validator.
     */
    matrixEnjinV603: new StorageType(
        'Session.NextKeys',
        'Optional',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.SessionKeys
    ) as NextKeysMatrixEnjinV603,
    /**
     *  The next session keys for a validator.
     */
    matrixV1030: new StorageType(
        'Session.NextKeys',
        'Optional',
        [matrixV1030.AccountId32],
        matrixV1030.SessionKeys
    ) as NextKeysMatrixV1030,
    /**
     *  The next session keys for a validator.
     */
    enjinV100: new StorageType(
        'Session.NextKeys',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.SessionKeys
    ) as NextKeysEnjinV100,
    /**
     *  The next session keys for a validator.
     */
    v1060: new StorageType('Session.NextKeys', 'Optional', [v1060.AccountId32], v1060.SessionKeys) as NextKeysV1060,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.SessionKeys | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.SessionKeys | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.SessionKeys | undefined][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.AccountId32): Promise<matrixV1030.SessionKeys | undefined>
    getMany(block: Block, keys: matrixV1030.AccountId32[]): Promise<(matrixV1030.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.AccountId32[]>
    getKeys(block: Block, key: matrixV1030.AccountId32): Promise<matrixV1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.AccountId32): AsyncIterable<matrixV1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1030.AccountId32, v: matrixV1030.SessionKeys | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.AccountId32
    ): Promise<[k: matrixV1030.AccountId32, v: matrixV1030.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.AccountId32, v: matrixV1030.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.AccountId32
    ): AsyncIterable<[k: matrixV1030.AccountId32, v: matrixV1030.SessionKeys | undefined][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.SessionKeys | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.SessionKeys | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.SessionKeys | undefined][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1060.AccountId32): Promise<v1060.SessionKeys | undefined>
    getMany(block: Block, keys: v1060.AccountId32[]): Promise<(v1060.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v1060.AccountId32[]>
    getKeys(block: Block, key: v1060.AccountId32): Promise<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.AccountId32): AsyncIterable<v1060.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1060.AccountId32, v: v1060.SessionKeys | undefined][]>
    getPairs(block: Block, key: v1060.AccountId32): Promise<[k: v1060.AccountId32, v: v1060.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.AccountId32, v: v1060.SessionKeys | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.AccountId32
    ): AsyncIterable<[k: v1060.AccountId32, v: v1060.SessionKeys | undefined][]>
}

export const keyOwner = {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    matrixEnjinV603: new StorageType(
        'Session.KeyOwner',
        'Optional',
        [sts.tuple(() => [matrixEnjinV603.KeyTypeId, sts.bytes()])],
        matrixEnjinV603.AccountId32
    ) as KeyOwnerMatrixEnjinV603,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): Promise<matrixEnjinV603.AccountId32 | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV603.KeyTypeId, Bytes][]
    ): Promise<(matrixEnjinV603.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): Promise<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [matrixEnjinV603.KeyTypeId, Bytes]
    ): AsyncIterable<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: matrixEnjinV603.AccountId32 | undefined][]>
    getPairs(
        block: Block,
        key: [matrixEnjinV603.KeyTypeId, Bytes]
    ): Promise<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: matrixEnjinV603.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: matrixEnjinV603.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [matrixEnjinV603.KeyTypeId, Bytes]
    ): AsyncIterable<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: matrixEnjinV603.AccountId32 | undefined][]>
}
