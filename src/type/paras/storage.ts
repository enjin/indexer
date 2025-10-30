import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const pvfActiveVoteMap = {
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    enjinV100: new StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [enjinV100.ValidationCodeHash],
        enjinV100.PvfCheckActiveVoteState
    ) as PvfActiveVoteMapEnjinV100,
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    enjinV1032: new StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [enjinV1032.ValidationCodeHash],
        enjinV1032.PvfCheckActiveVoteState
    ) as PvfActiveVoteMapEnjinV1032,
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    enjinV1050: new StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [enjinV1050.ValidationCodeHash],
        enjinV1050.PvfCheckActiveVoteState
    ) as PvfActiveVoteMapEnjinV1050,
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v100: new StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [v100.ValidationCodeHash],
        v100.PvfCheckActiveVoteState
    ) as PvfActiveVoteMapV100,
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1030: new StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [v1030.ValidationCodeHash],
        v1030.PvfCheckActiveVoteState
    ) as PvfActiveVoteMapV1030,
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1050: new StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [v1050.ValidationCodeHash],
        v1050.PvfCheckActiveVoteState
    ) as PvfActiveVoteMapV1050,
}

/**
 *  All currently active PVF pre-checking votes.
 *
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.ValidationCodeHash): Promise<enjinV100.PvfCheckActiveVoteState | undefined>
    getMany(
        block: Block,
        keys: enjinV100.ValidationCodeHash[]
    ): Promise<(enjinV100.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.ValidationCodeHash[]>
    getKeys(block: Block, key: enjinV100.ValidationCodeHash): Promise<enjinV100.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): AsyncIterable<enjinV100.ValidationCodeHash[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV100.ValidationCodeHash, v: enjinV100.PvfCheckActiveVoteState | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): Promise<[k: enjinV100.ValidationCodeHash, v: enjinV100.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.ValidationCodeHash, v: enjinV100.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): AsyncIterable<[k: enjinV100.ValidationCodeHash, v: enjinV100.PvfCheckActiveVoteState | undefined][]>
}

/**
 *  All currently active PVF pre-checking votes.
 *
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.ValidationCodeHash): Promise<enjinV1032.PvfCheckActiveVoteState | undefined>
    getMany(
        block: Block,
        keys: enjinV1032.ValidationCodeHash[]
    ): Promise<(enjinV1032.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.ValidationCodeHash[]>
    getKeys(block: Block, key: enjinV1032.ValidationCodeHash): Promise<enjinV1032.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.ValidationCodeHash
    ): AsyncIterable<enjinV1032.ValidationCodeHash[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV1032.ValidationCodeHash, v: enjinV1032.PvfCheckActiveVoteState | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1032.ValidationCodeHash
    ): Promise<[k: enjinV1032.ValidationCodeHash, v: enjinV1032.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.ValidationCodeHash, v: enjinV1032.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.ValidationCodeHash
    ): AsyncIterable<[k: enjinV1032.ValidationCodeHash, v: enjinV1032.PvfCheckActiveVoteState | undefined][]>
}

/**
 *  All currently active PVF pre-checking votes.
 *
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1050.ValidationCodeHash): Promise<enjinV1050.PvfCheckActiveVoteState | undefined>
    getMany(
        block: Block,
        keys: enjinV1050.ValidationCodeHash[]
    ): Promise<(enjinV1050.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<enjinV1050.ValidationCodeHash[]>
    getKeys(block: Block, key: enjinV1050.ValidationCodeHash): Promise<enjinV1050.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1050.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV1050.ValidationCodeHash
    ): AsyncIterable<enjinV1050.ValidationCodeHash[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV1050.ValidationCodeHash, v: enjinV1050.PvfCheckActiveVoteState | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1050.ValidationCodeHash
    ): Promise<[k: enjinV1050.ValidationCodeHash, v: enjinV1050.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1050.ValidationCodeHash, v: enjinV1050.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1050.ValidationCodeHash
    ): AsyncIterable<[k: enjinV1050.ValidationCodeHash, v: enjinV1050.PvfCheckActiveVoteState | undefined][]>
}

/**
 *  All currently active PVF pre-checking votes.
 *
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v100.ValidationCodeHash): Promise<v100.PvfCheckActiveVoteState | undefined>
    getMany(block: Block, keys: v100.ValidationCodeHash[]): Promise<(v100.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v100.ValidationCodeHash[]>
    getKeys(block: Block, key: v100.ValidationCodeHash): Promise<v100.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.ValidationCodeHash): AsyncIterable<v100.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v100.ValidationCodeHash, v: v100.PvfCheckActiveVoteState | undefined][]>
    getPairs(
        block: Block,
        key: v100.ValidationCodeHash
    ): Promise<[k: v100.ValidationCodeHash, v: v100.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v100.ValidationCodeHash, v: v100.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v100.ValidationCodeHash
    ): AsyncIterable<[k: v100.ValidationCodeHash, v: v100.PvfCheckActiveVoteState | undefined][]>
}

/**
 *  All currently active PVF pre-checking votes.
 *
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.ValidationCodeHash): Promise<v1030.PvfCheckActiveVoteState | undefined>
    getMany(block: Block, keys: v1030.ValidationCodeHash[]): Promise<(v1030.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v1030.ValidationCodeHash[]>
    getKeys(block: Block, key: v1030.ValidationCodeHash): Promise<v1030.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: v1030.ValidationCodeHash
    ): AsyncIterable<v1030.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v1030.ValidationCodeHash, v: v1030.PvfCheckActiveVoteState | undefined][]>
    getPairs(
        block: Block,
        key: v1030.ValidationCodeHash
    ): Promise<[k: v1030.ValidationCodeHash, v: v1030.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1030.ValidationCodeHash, v: v1030.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.ValidationCodeHash
    ): AsyncIterable<[k: v1030.ValidationCodeHash, v: v1030.PvfCheckActiveVoteState | undefined][]>
}

/**
 *  All currently active PVF pre-checking votes.
 *
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.ValidationCodeHash): Promise<v1050.PvfCheckActiveVoteState | undefined>
    getMany(block: Block, keys: v1050.ValidationCodeHash[]): Promise<(v1050.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v1050.ValidationCodeHash[]>
    getKeys(block: Block, key: v1050.ValidationCodeHash): Promise<v1050.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1050.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: v1050.ValidationCodeHash
    ): AsyncIterable<v1050.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v1050.ValidationCodeHash, v: v1050.PvfCheckActiveVoteState | undefined][]>
    getPairs(
        block: Block,
        key: v1050.ValidationCodeHash
    ): Promise<[k: v1050.ValidationCodeHash, v: v1050.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1050.ValidationCodeHash, v: v1050.PvfCheckActiveVoteState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1050.ValidationCodeHash
    ): AsyncIterable<[k: v1050.ValidationCodeHash, v: v1050.PvfCheckActiveVoteState | undefined][]>
}

export const pvfActiveVoteList = {
    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    enjinV100: new StorageType(
        'Paras.PvfActiveVoteList',
        'Default',
        [],
        sts.array(() => enjinV100.ValidationCodeHash)
    ) as PvfActiveVoteListEnjinV100,
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface PvfActiveVoteListEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.ValidationCodeHash[]
    get(block: Block): Promise<enjinV100.ValidationCodeHash[] | undefined>
}

export const parachains = {
    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     *
     *  Consider using the [`ParachainsCache`] type of modifying.
     */
    enjinV100: new StorageType(
        'Paras.Parachains',
        'Default',
        [],
        sts.array(() => enjinV100.Id)
    ) as ParachainsEnjinV100,
}

/**
 *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
 *
 *  Consider using the [`ParachainsCache`] type of modifying.
 */
export interface ParachainsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block): Promise<enjinV100.Id[] | undefined>
}

export const paraLifecycles = {
    /**
     *  The current lifecycle of a all known Para IDs.
     */
    enjinV100: new StorageType(
        'Paras.ParaLifecycles',
        'Optional',
        [enjinV100.Id],
        enjinV100.ParaLifecycle
    ) as ParaLifecyclesEnjinV100,
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParaLifecyclesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.ParaLifecycle | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ParaLifecycle | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.ParaLifecycle | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.ParaLifecycle | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParaLifecycle | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParaLifecycle | undefined][]>
}

export const heads = {
    /**
     *  The head-data of every registered para.
     */
    enjinV100: new StorageType('Paras.Heads', 'Optional', [enjinV100.Id], enjinV100.HeadData) as HeadsEnjinV100,
}

/**
 *  The head-data of every registered para.
 */
export interface HeadsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.HeadData | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.HeadData | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.HeadData | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.HeadData | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: enjinV100.HeadData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.HeadData | undefined][]>
}

export const currentCodeHash = {
    /**
     *  The validation code hash of every live para.
     *
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    enjinV100: new StorageType(
        'Paras.CurrentCodeHash',
        'Optional',
        [enjinV100.Id],
        enjinV100.ValidationCodeHash
    ) as CurrentCodeHashEnjinV100,
}

/**
 *  The validation code hash of every live para.
 *
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface CurrentCodeHashEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.ValidationCodeHash | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ValidationCodeHash | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
}

export const pastCodeHash = {
    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     *
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    enjinV100: new StorageType(
        'Paras.PastCodeHash',
        'Optional',
        [sts.tuple(() => [enjinV100.Id, sts.number()])],
        enjinV100.ValidationCodeHash
    ) as PastCodeHashEnjinV100,
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 *
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface PastCodeHashEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [enjinV100.Id, number]): Promise<enjinV100.ValidationCodeHash | undefined>
    getMany(block: Block, keys: [enjinV100.Id, number][]): Promise<(enjinV100.ValidationCodeHash | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.Id, number][]>
    getKeys(block: Block, key: [enjinV100.Id, number]): Promise<[enjinV100.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [enjinV100.Id, number]): AsyncIterable<[enjinV100.Id, number][]>
    getPairs(block: Block): Promise<[k: [enjinV100.Id, number], v: enjinV100.ValidationCodeHash | undefined][]>
    getPairs(
        block: Block,
        key: [enjinV100.Id, number]
    ): Promise<[k: [enjinV100.Id, number], v: enjinV100.ValidationCodeHash | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV100.Id, number], v: enjinV100.ValidationCodeHash | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [enjinV100.Id, number]
    ): AsyncIterable<[k: [enjinV100.Id, number], v: enjinV100.ValidationCodeHash | undefined][]>
}

export const pastCodeMeta = {
    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for approval checkers.
     */
    enjinV100: new StorageType(
        'Paras.PastCodeMeta',
        'Default',
        [enjinV100.Id],
        enjinV100.ParaPastCodeMeta
    ) as PastCodeMetaEnjinV100,
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for approval checkers.
 */
export interface PastCodeMetaEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.ParaPastCodeMeta
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.ParaPastCodeMeta | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ParaPastCodeMeta | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.ParaPastCodeMeta | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.ParaPastCodeMeta | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParaPastCodeMeta | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParaPastCodeMeta | undefined][]>
}

export const pastCodePruning = {
    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    enjinV100: new StorageType(
        'Paras.PastCodePruning',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV100.Id, sts.number()]))
    ) as PastCodePruningEnjinV100,
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
 *  Note that this is the actual height of the included block, not the expected height at which the
 *  code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
 *  from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface PastCodePruningEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV100.Id, number][]
    get(block: Block): Promise<[enjinV100.Id, number][] | undefined>
}

export const futureCodeUpgrades = {
    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    enjinV100: new StorageType(
        'Paras.FutureCodeUpgrades',
        'Optional',
        [enjinV100.Id],
        sts.number()
    ) as FutureCodeUpgradesEnjinV100,
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface FutureCodeUpgradesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<number | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: number | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: number | undefined][]>
}

export const futureCodeHash = {
    /**
     *  The actual future code hash of a para.
     *
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    enjinV100: new StorageType(
        'Paras.FutureCodeHash',
        'Optional',
        [enjinV100.Id],
        enjinV100.ValidationCodeHash
    ) as FutureCodeHashEnjinV100,
}

/**
 *  The actual future code hash of a para.
 *
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface FutureCodeHashEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.ValidationCodeHash | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ValidationCodeHash | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ValidationCodeHash | undefined][]>
}

export const upgradeGoAheadSignal = {
    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     *
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     *
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    enjinV100: new StorageType(
        'Paras.UpgradeGoAheadSignal',
        'Optional',
        [enjinV100.Id],
        enjinV100.V4UpgradeGoAhead
    ) as UpgradeGoAheadSignalEnjinV100,
}

/**
 *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
 *
 *  This value is absent when there are no upgrades scheduled or during the time the relay chain
 *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
 *  can switch its upgrade function. As soon as the parachain's block is included, the value
 *  gets reset to `None`.
 *
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface UpgradeGoAheadSignalEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.V4UpgradeGoAhead | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.V4UpgradeGoAhead | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.V4UpgradeGoAhead | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.V4UpgradeGoAhead | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.V4UpgradeGoAhead | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.V4UpgradeGoAhead | undefined][]>
}

export const upgradeRestrictionSignal = {
    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     *
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     *
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    enjinV100: new StorageType(
        'Paras.UpgradeRestrictionSignal',
        'Optional',
        [enjinV100.Id],
        enjinV100.V4UpgradeRestriction
    ) as UpgradeRestrictionSignalEnjinV100,
}

/**
 *  This is used by the relay-chain to communicate that there are restrictions for performing
 *  an upgrade for this parachain.
 *
 *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
 *  potential use case is when we want to perform some maintenance (such as storage migration)
 *  we could restrict upgrades to make the process simpler.
 *
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface UpgradeRestrictionSignalEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.V4UpgradeRestriction | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.V4UpgradeRestriction | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.V4UpgradeRestriction | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.Id
    ): Promise<[k: enjinV100.Id, v: enjinV100.V4UpgradeRestriction | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.V4UpgradeRestriction | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.V4UpgradeRestriction | undefined][]>
}

export const upgradeCooldowns = {
    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     *
     *  Ordered ascending by block number.
     */
    enjinV100: new StorageType(
        'Paras.UpgradeCooldowns',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV100.Id, sts.number()]))
    ) as UpgradeCooldownsEnjinV100,
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 *
 *  Ordered ascending by block number.
 */
export interface UpgradeCooldownsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV100.Id, number][]
    get(block: Block): Promise<[enjinV100.Id, number][] | undefined>
}

export const upcomingUpgrades = {
    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     *
     *  Ordered ascending by block number.
     */
    enjinV100: new StorageType(
        'Paras.UpcomingUpgrades',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV100.Id, sts.number()]))
    ) as UpcomingUpgradesEnjinV100,
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 *
 *  Ordered ascending by block number.
 */
export interface UpcomingUpgradesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV100.Id, number][]
    get(block: Block): Promise<[enjinV100.Id, number][] | undefined>
}

export const actionsQueue = {
    /**
     *  The actions to perform during the start of a specific session index.
     */
    enjinV100: new StorageType(
        'Paras.ActionsQueue',
        'Default',
        [sts.number()],
        sts.array(() => enjinV100.Id)
    ) as ActionsQueueEnjinV100,
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ActionsQueueEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block, key: number): Promise<enjinV100.Id[] | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.Id[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.Id[] | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.Id[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.Id[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.Id[] | undefined][]>
}

export const upcomingParasGenesis = {
    /**
     *  Upcoming paras instantiation arguments.
     *
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    enjinV100: new StorageType(
        'Paras.UpcomingParasGenesis',
        'Optional',
        [enjinV100.Id],
        enjinV100.ParaGenesisArgs
    ) as UpcomingParasGenesisEnjinV100,
}

/**
 *  Upcoming paras instantiation arguments.
 *
 *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
 *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
 */
export interface UpcomingParasGenesisEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.ParaGenesisArgs | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ParaGenesisArgs | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.ParaGenesisArgs | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: enjinV100.ParaGenesisArgs | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParaGenesisArgs | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParaGenesisArgs | undefined][]>
}

export const codeByHashRefs = {
    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    enjinV100: new StorageType(
        'Paras.CodeByHashRefs',
        'Default',
        [enjinV100.ValidationCodeHash],
        sts.number()
    ) as CodeByHashRefsEnjinV100,
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface CodeByHashRefsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: enjinV100.ValidationCodeHash): Promise<number | undefined>
    getMany(block: Block, keys: enjinV100.ValidationCodeHash[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.ValidationCodeHash[]>
    getKeys(block: Block, key: enjinV100.ValidationCodeHash): Promise<enjinV100.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): AsyncIterable<enjinV100.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: enjinV100.ValidationCodeHash, v: number | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): Promise<[k: enjinV100.ValidationCodeHash, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.ValidationCodeHash, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): AsyncIterable<[k: enjinV100.ValidationCodeHash, v: number | undefined][]>
}

export const codeByHash = {
    /**
     *  Validation code stored by its hash.
     *
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    enjinV100: new StorageType(
        'Paras.CodeByHash',
        'Optional',
        [enjinV100.ValidationCodeHash],
        enjinV100.ValidationCode
    ) as CodeByHashEnjinV100,
}

/**
 *  Validation code stored by its hash.
 *
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface CodeByHashEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.ValidationCodeHash): Promise<enjinV100.ValidationCode | undefined>
    getMany(block: Block, keys: enjinV100.ValidationCodeHash[]): Promise<(enjinV100.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.ValidationCodeHash[]>
    getKeys(block: Block, key: enjinV100.ValidationCodeHash): Promise<enjinV100.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.ValidationCodeHash[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): AsyncIterable<enjinV100.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: enjinV100.ValidationCodeHash, v: enjinV100.ValidationCode | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): Promise<[k: enjinV100.ValidationCodeHash, v: enjinV100.ValidationCode | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.ValidationCodeHash, v: enjinV100.ValidationCode | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.ValidationCodeHash
    ): AsyncIterable<[k: enjinV100.ValidationCodeHash, v: enjinV100.ValidationCode | undefined][]>
}

export const mostRecentContext = {
    /**
     *  The context (relay-chain block number) of the most recent parachain head.
     */
    enjinV1032: new StorageType(
        'Paras.MostRecentContext',
        'Optional',
        [enjinV1032.Id],
        sts.number()
    ) as MostRecentContextEnjinV1032,
}

/**
 *  The context (relay-chain block number) of the most recent parachain head.
 */
export interface MostRecentContextEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.Id): Promise<number | undefined>
    getMany(block: Block, keys: enjinV1032.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.Id[]>
    getKeys(block: Block, key: enjinV1032.Id): Promise<enjinV1032.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.Id): AsyncIterable<enjinV1032.Id[]>
    getPairs(block: Block): Promise<[k: enjinV1032.Id, v: number | undefined][]>
    getPairs(block: Block, key: enjinV1032.Id): Promise<[k: enjinV1032.Id, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV1032.Id, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.Id
    ): AsyncIterable<[k: enjinV1032.Id, v: number | undefined][]>
}

export const futureCodeUpgradesAt = {
    /**
     *  The list of upcoming future code upgrades.
     *
     *  Each item is a pair of the parachain and the expected block at which the upgrade should be
     *  applied. The upgrade will be applied at the given relay chain block. In contrast to
     *  [`FutureCodeUpgrades`] this code upgrade will be applied regardless the parachain making any
     *  progress or not.
     *
     *  Ordered ascending by block number.
     */
    enjinV1050: new StorageType(
        'Paras.FutureCodeUpgradesAt',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV1050.Id, sts.number()]))
    ) as FutureCodeUpgradesAtEnjinV1050,
}

/**
 *  The list of upcoming future code upgrades.
 *
 *  Each item is a pair of the parachain and the expected block at which the upgrade should be
 *  applied. The upgrade will be applied at the given relay chain block. In contrast to
 *  [`FutureCodeUpgrades`] this code upgrade will be applied regardless the parachain making any
 *  progress or not.
 *
 *  Ordered ascending by block number.
 */
export interface FutureCodeUpgradesAtEnjinV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV1050.Id, number][]
    get(block: Block): Promise<[enjinV1050.Id, number][] | undefined>
}

export const authorizedCodeHash = {
    /**
     *  The code hash authorizations for a para which will expire `expire_at` `BlockNumberFor<T>`.
     */
    v1060: new StorageType(
        'Paras.AuthorizedCodeHash',
        'Optional',
        [v1060.Id],
        v1060.AuthorizedCodeHashAndExpiry
    ) as AuthorizedCodeHashV1060,
}

/**
 *  The code hash authorizations for a para which will expire `expire_at` `BlockNumberFor<T>`.
 */
export interface AuthorizedCodeHashV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1060.Id): Promise<v1060.AuthorizedCodeHashAndExpiry | undefined>
    getMany(block: Block, keys: v1060.Id[]): Promise<(v1060.AuthorizedCodeHashAndExpiry | undefined)[]>
    getKeys(block: Block): Promise<v1060.Id[]>
    getKeys(block: Block, key: v1060.Id): Promise<v1060.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.Id): AsyncIterable<v1060.Id[]>
    getPairs(block: Block): Promise<[k: v1060.Id, v: v1060.AuthorizedCodeHashAndExpiry | undefined][]>
    getPairs(block: Block, key: v1060.Id): Promise<[k: v1060.Id, v: v1060.AuthorizedCodeHashAndExpiry | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.Id, v: v1060.AuthorizedCodeHashAndExpiry | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.Id
    ): AsyncIterable<[k: v1060.Id, v: v1060.AuthorizedCodeHashAndExpiry | undefined][]>
}
