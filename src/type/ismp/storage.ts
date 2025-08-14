import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const stateCommitments = {
    /**
     *  Holds a map of state machine heights to their verified state commitments. These state
     *  commitments end up here after they are successfully verified by a `ConsensusClient`
     */
    matrixV1030: new StorageType(
        'Ismp.StateCommitments',
        'Optional',
        [matrixV1030.StateMachineHeight],
        matrixV1030.StateCommitment
    ) as StateCommitmentsMatrixV1030,
}

/**
 *  Holds a map of state machine heights to their verified state commitments. These state
 *  commitments end up here after they are successfully verified by a `ConsensusClient`
 */
export interface StateCommitmentsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.StateMachineHeight): Promise<matrixV1030.StateCommitment | undefined>
    getMany(block: Block, keys: matrixV1030.StateMachineHeight[]): Promise<(matrixV1030.StateCommitment | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.StateMachineHeight[]>
    getKeys(block: Block, key: matrixV1030.StateMachineHeight): Promise<matrixV1030.StateMachineHeight[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.StateMachineHeight[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineHeight
    ): AsyncIterable<matrixV1030.StateMachineHeight[]>
    getPairs(block: Block): Promise<[k: matrixV1030.StateMachineHeight, v: matrixV1030.StateCommitment | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.StateMachineHeight
    ): Promise<[k: matrixV1030.StateMachineHeight, v: matrixV1030.StateCommitment | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.StateMachineHeight, v: matrixV1030.StateCommitment | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineHeight
    ): AsyncIterable<[k: matrixV1030.StateMachineHeight, v: matrixV1030.StateCommitment | undefined][]>
}

export const consensusStates = {
    /**
     *  Holds a map of consensus state identifiers to their consensus state.
     */
    matrixV1030: new StorageType(
        'Ismp.ConsensusStates',
        'Optional',
        [sts.bytes()],
        sts.bytes()
    ) as ConsensusStatesMatrixV1030,
}

/**
 *  Holds a map of consensus state identifiers to their consensus state.
 */
export interface ConsensusStatesMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<Bytes | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: Bytes | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: Bytes | undefined][]>
}

export const consensusStateClient = {
    /**
     *  A mapping of consensus state identifier to it's associated consensus client identifier
     */
    matrixV1030: new StorageType(
        'Ismp.ConsensusStateClient',
        'Optional',
        [sts.bytes()],
        sts.bytes()
    ) as ConsensusStateClientMatrixV1030,
}

/**
 *  A mapping of consensus state identifier to it's associated consensus client identifier
 */
export interface ConsensusStateClientMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<Bytes | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: Bytes | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: Bytes | undefined][]>
}

export const unbondingPeriod = {
    /**
     *  A mapping of consensus state identifiers to their unbonding periods
     */
    matrixV1030: new StorageType(
        'Ismp.UnbondingPeriod',
        'Optional',
        [sts.bytes()],
        sts.bigint()
    ) as UnbondingPeriodMatrixV1030,
}

/**
 *  A mapping of consensus state identifiers to their unbonding periods
 */
export interface UnbondingPeriodMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<bigint | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: bigint | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: bigint | undefined][]>
}

export const challengePeriod = {
    /**
     *  A mapping of state machine Ids to their challenge periods
     */
    matrixV1030: new StorageType(
        'Ismp.ChallengePeriod',
        'Optional',
        [matrixV1030.StateMachineId],
        sts.bigint()
    ) as ChallengePeriodMatrixV1030,
}

/**
 *  A mapping of state machine Ids to their challenge periods
 */
export interface ChallengePeriodMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.StateMachineId): Promise<bigint | undefined>
    getMany(block: Block, keys: matrixV1030.StateMachineId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.StateMachineId[]>
    getKeys(block: Block, key: matrixV1030.StateMachineId): Promise<matrixV1030.StateMachineId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.StateMachineId[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineId
    ): AsyncIterable<matrixV1030.StateMachineId[]>
    getPairs(block: Block): Promise<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.StateMachineId
    ): Promise<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineId
    ): AsyncIterable<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
}

export const frozenConsensusClients = {
    /**
     *  Holds a map of consensus clients frozen due to byzantine
     *  behaviour
     */
    matrixV1030: new StorageType(
        'Ismp.FrozenConsensusClients',
        'Default',
        [sts.bytes()],
        sts.boolean()
    ) as FrozenConsensusClientsMatrixV1030,
}

/**
 *  Holds a map of consensus clients frozen due to byzantine
 *  behaviour
 */
export interface FrozenConsensusClientsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: Bytes): Promise<boolean | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: boolean | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: boolean | undefined][]>
}

export const latestStateMachineHeight = {
    /**
     *  The latest verified height for a state machine
     */
    matrixV1030: new StorageType(
        'Ismp.LatestStateMachineHeight',
        'Optional',
        [matrixV1030.StateMachineId],
        sts.bigint()
    ) as LatestStateMachineHeightMatrixV1030,
}

/**
 *  The latest verified height for a state machine
 */
export interface LatestStateMachineHeightMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.StateMachineId): Promise<bigint | undefined>
    getMany(block: Block, keys: matrixV1030.StateMachineId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.StateMachineId[]>
    getKeys(block: Block, key: matrixV1030.StateMachineId): Promise<matrixV1030.StateMachineId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.StateMachineId[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineId
    ): AsyncIterable<matrixV1030.StateMachineId[]>
    getPairs(block: Block): Promise<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.StateMachineId
    ): Promise<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineId
    ): AsyncIterable<[k: matrixV1030.StateMachineId, v: bigint | undefined][]>
}

export const consensusClientUpdateTime = {
    /**
     *  Holds the timestamp at which a consensus client was recently updated.
     *  Used in ensuring that the configured challenge period elapses.
     */
    matrixV1030: new StorageType(
        'Ismp.ConsensusClientUpdateTime',
        'Optional',
        [sts.bytes()],
        sts.bigint()
    ) as ConsensusClientUpdateTimeMatrixV1030,
}

/**
 *  Holds the timestamp at which a consensus client was recently updated.
 *  Used in ensuring that the configured challenge period elapses.
 */
export interface ConsensusClientUpdateTimeMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<bigint | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: bigint | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: bigint | undefined][]>
}

export const stateMachineUpdateTime = {
    /**
     *  Holds the timestamp at which a state machine height was updated.
     *  Used in ensuring that the configured challenge period elapses.
     */
    matrixV1030: new StorageType(
        'Ismp.StateMachineUpdateTime',
        'Optional',
        [matrixV1030.StateMachineHeight],
        sts.bigint()
    ) as StateMachineUpdateTimeMatrixV1030,
}

/**
 *  Holds the timestamp at which a state machine height was updated.
 *  Used in ensuring that the configured challenge period elapses.
 */
export interface StateMachineUpdateTimeMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.StateMachineHeight): Promise<bigint | undefined>
    getMany(block: Block, keys: matrixV1030.StateMachineHeight[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.StateMachineHeight[]>
    getKeys(block: Block, key: matrixV1030.StateMachineHeight): Promise<matrixV1030.StateMachineHeight[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.StateMachineHeight[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineHeight
    ): AsyncIterable<matrixV1030.StateMachineHeight[]>
    getPairs(block: Block): Promise<[k: matrixV1030.StateMachineHeight, v: bigint | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.StateMachineHeight
    ): Promise<[k: matrixV1030.StateMachineHeight, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.StateMachineHeight, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachineHeight
    ): AsyncIterable<[k: matrixV1030.StateMachineHeight, v: bigint | undefined][]>
}

export const responded = {
    /**
     *  Tracks requests that have been responded to
     *  The key is the request commitment
     */
    matrixV1030: new StorageType(
        'Ismp.Responded',
        'Default',
        [matrixV1030.H256],
        sts.boolean()
    ) as RespondedMatrixV1030,
}

/**
 *  Tracks requests that have been responded to
 *  The key is the request commitment
 */
export interface RespondedMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: matrixV1030.H256): Promise<boolean | undefined>
    getMany(block: Block, keys: matrixV1030.H256[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.H256[]>
    getKeys(block: Block, key: matrixV1030.H256): Promise<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.H256): AsyncIterable<matrixV1030.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1030.H256, v: boolean | undefined][]>
    getPairs(block: Block, key: matrixV1030.H256): Promise<[k: matrixV1030.H256, v: boolean | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV1030.H256, v: boolean | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.H256
    ): AsyncIterable<[k: matrixV1030.H256, v: boolean | undefined][]>
}

export const nonce = {
    /**
     *  Latest nonce for messages sent from this chain
     */
    matrixV1030: new StorageType('Ismp.Nonce', 'Default', [], sts.bigint()) as NonceMatrixV1030,
}

/**
 *  Latest nonce for messages sent from this chain
 */
export interface NonceMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const childTrieRoot = {
    /**
     *  The child trie root of messages
     */
    matrixV1030: new StorageType('Ismp.ChildTrieRoot', 'Default', [], matrixV1030.H256) as ChildTrieRootMatrixV1030,
}

/**
 *  The child trie root of messages
 */
export interface ChildTrieRootMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1030.H256
    get(block: Block): Promise<matrixV1030.H256 | undefined>
}
