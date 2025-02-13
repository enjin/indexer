import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const lastPrunedSession = {
    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    enjinV100: new StorageType(
        'ParasDisputes.LastPrunedSession',
        'Optional',
        [],
        sts.number()
    ) as LastPrunedSessionEnjinV100,
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface LastPrunedSessionEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const disputes = {
    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    enjinV100: new StorageType(
        'ParasDisputes.Disputes',
        'Optional',
        [sts.number(), enjinV100.CandidateHash],
        enjinV100.V4DisputeState
    ) as DisputesEnjinV100,
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface DisputesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<enjinV100.V4DisputeState | undefined>
    getMany(block: Block, keys: [number, enjinV100.CandidateHash][]): Promise<(enjinV100.V4DisputeState | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4DisputeState | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4DisputeState | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): Promise<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4DisputeState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4DisputeState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4DisputeState | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4DisputeState | undefined][]>
}

export const backersOnDisputes = {
    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    enjinV100: new StorageType(
        'ParasDisputes.BackersOnDisputes',
        'Optional',
        [sts.number(), enjinV100.CandidateHash],
        sts.array(() => enjinV100.V4ValidatorIndex)
    ) as BackersOnDisputesEnjinV100,
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface BackersOnDisputesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<enjinV100.V4ValidatorIndex[] | undefined>
    getMany(
        block: Block,
        keys: [number, enjinV100.CandidateHash][]
    ): Promise<(enjinV100.V4ValidatorIndex[] | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4ValidatorIndex[] | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4ValidatorIndex[] | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): Promise<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4ValidatorIndex[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4ValidatorIndex[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4ValidatorIndex[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: enjinV100.V4ValidatorIndex[] | undefined][]>
}

export const included = {
    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    enjinV100: new StorageType(
        'ParasDisputes.Included',
        'Optional',
        [sts.number(), enjinV100.CandidateHash],
        sts.number()
    ) as IncludedEnjinV100,
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface IncludedEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<number | undefined>
    getMany(block: Block, keys: [number, enjinV100.CandidateHash][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.CandidateHash], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.CandidateHash], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): Promise<[k: [number, enjinV100.CandidateHash], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.CandidateHash
    ): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: number | undefined][]>
}

export const frozen = {
    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    enjinV100: new StorageType(
        'ParasDisputes.Frozen',
        'Default',
        [],
        sts.option(() => sts.number())
    ) as FrozenEnjinV100,
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface FrozenEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number | undefined
    get(block: Block): Promise<number | undefined>
}
