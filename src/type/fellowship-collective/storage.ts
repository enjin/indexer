import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1040 from '../matrixV1040'

export const memberCount = {
    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    matrixV1040: new StorageType(
        'FellowshipCollective.MemberCount',
        'Default',
        [sts.number()],
        sts.number()
    ) as MemberCountMatrixV1040,
}

/**
 *  The number of members in the collective who have at least the rank according to the index
 *  of the vec.
 */
export interface MemberCountMatrixV1040 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
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

export const members = {
    /**
     *  The current members of the collective.
     */
    matrixV1040: new StorageType(
        'FellowshipCollective.Members',
        'Optional',
        [matrixV1040.AccountId32],
        matrixV1040.MemberRecord
    ) as MembersMatrixV1040,
}

/**
 *  The current members of the collective.
 */
export interface MembersMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1040.AccountId32): Promise<matrixV1040.MemberRecord | undefined>
    getMany(block: Block, keys: matrixV1040.AccountId32[]): Promise<(matrixV1040.MemberRecord | undefined)[]>
    getKeys(block: Block): Promise<matrixV1040.AccountId32[]>
    getKeys(block: Block, key: matrixV1040.AccountId32): Promise<matrixV1040.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1040.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1040.AccountId32): AsyncIterable<matrixV1040.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1040.AccountId32, v: matrixV1040.MemberRecord | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1040.AccountId32
    ): Promise<[k: matrixV1040.AccountId32, v: matrixV1040.MemberRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1040.AccountId32, v: matrixV1040.MemberRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1040.AccountId32
    ): AsyncIterable<[k: matrixV1040.AccountId32, v: matrixV1040.MemberRecord | undefined][]>
}

export const idToIndex = {
    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    matrixV1040: new StorageType(
        'FellowshipCollective.IdToIndex',
        'Optional',
        [sts.number(), matrixV1040.AccountId32],
        sts.number()
    ) as IdToIndexMatrixV1040,
}

/**
 *  The index of each ranks's member into the group of members who have at least that rank.
 */
export interface IdToIndexMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixV1040.AccountId32): Promise<number | undefined>
    getMany(block: Block, keys: [number, matrixV1040.AccountId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixV1040.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixV1040.AccountId32][]>
    getKeys(block: Block, key1: number, key2: matrixV1040.AccountId32): Promise<[number, matrixV1040.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixV1040.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixV1040.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixV1040.AccountId32
    ): AsyncIterable<[number, matrixV1040.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, matrixV1040.AccountId32], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixV1040.AccountId32], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: matrixV1040.AccountId32
    ): Promise<[k: [number, matrixV1040.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, matrixV1040.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, matrixV1040.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixV1040.AccountId32
    ): AsyncIterable<[k: [number, matrixV1040.AccountId32], v: number | undefined][]>
}

export const indexToId = {
    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    matrixV1040: new StorageType(
        'FellowshipCollective.IndexToId',
        'Optional',
        [sts.number(), sts.number()],
        matrixV1040.AccountId32
    ) as IndexToIdMatrixV1040,
}

/**
 *  The members in the collective by index. All indices in the range `0..MemberCount` will
 *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
export interface IndexToIdMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<matrixV1040.AccountId32 | undefined>
    getMany(block: Block, keys: [number, number][]): Promise<(matrixV1040.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: matrixV1040.AccountId32 | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: matrixV1040.AccountId32 | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: number
    ): Promise<[k: [number, number], v: matrixV1040.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, number], v: matrixV1040.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, number], v: matrixV1040.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: number
    ): AsyncIterable<[k: [number, number], v: matrixV1040.AccountId32 | undefined][]>
}

export const voting = {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    matrixV1040: new StorageType(
        'FellowshipCollective.Voting',
        'Optional',
        [sts.number(), matrixV1040.AccountId32],
        matrixV1040.VoteRecord
    ) as VotingMatrixV1040,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixV1040.AccountId32): Promise<matrixV1040.VoteRecord | undefined>
    getMany(block: Block, keys: [number, matrixV1040.AccountId32][]): Promise<(matrixV1040.VoteRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixV1040.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixV1040.AccountId32][]>
    getKeys(block: Block, key1: number, key2: matrixV1040.AccountId32): Promise<[number, matrixV1040.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixV1040.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixV1040.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixV1040.AccountId32
    ): AsyncIterable<[number, matrixV1040.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, matrixV1040.AccountId32], v: matrixV1040.VoteRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, matrixV1040.AccountId32], v: matrixV1040.VoteRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: matrixV1040.AccountId32
    ): Promise<[k: [number, matrixV1040.AccountId32], v: matrixV1040.VoteRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, matrixV1040.AccountId32], v: matrixV1040.VoteRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, matrixV1040.AccountId32], v: matrixV1040.VoteRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixV1040.AccountId32
    ): AsyncIterable<[k: [number, matrixV1040.AccountId32], v: matrixV1040.VoteRecord | undefined][]>
}

export const votingCleanup = {
    matrixV1040: new StorageType(
        'FellowshipCollective.VotingCleanup',
        'Optional',
        [sts.number()],
        sts.bytes()
    ) as VotingCleanupMatrixV1040,
}

export interface VotingCleanupMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<Bytes | undefined>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: Bytes | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: Bytes | undefined][]>
}
