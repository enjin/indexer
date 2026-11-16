import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1043 from '../matrixEnjinV1043'

export const memberCount = {
    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    matrixEnjinV1043: new StorageType(
        'FellowshipCollective.MemberCount',
        'Default',
        [sts.number()],
        sts.number()
    ) as MemberCountMatrixEnjinV1043,
}

/**
 *  The number of members in the collective who have at least the rank according to the index
 *  of the vec.
 */
export interface MemberCountMatrixEnjinV1043 {
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
    matrixEnjinV1043: new StorageType(
        'FellowshipCollective.Members',
        'Optional',
        [matrixEnjinV1043.AccountId32],
        matrixEnjinV1043.MemberRecord
    ) as MembersMatrixEnjinV1043,
}

/**
 *  The current members of the collective.
 */
export interface MembersMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1043.AccountId32): Promise<matrixEnjinV1043.MemberRecord | undefined>
    getMany(block: Block, keys: matrixEnjinV1043.AccountId32[]): Promise<(matrixEnjinV1043.MemberRecord | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1043.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1043.AccountId32): Promise<matrixEnjinV1043.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1043.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1043.AccountId32
    ): AsyncIterable<matrixEnjinV1043.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1043.AccountId32, v: matrixEnjinV1043.MemberRecord | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1043.AccountId32
    ): Promise<[k: matrixEnjinV1043.AccountId32, v: matrixEnjinV1043.MemberRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1043.AccountId32, v: matrixEnjinV1043.MemberRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1043.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1043.AccountId32, v: matrixEnjinV1043.MemberRecord | undefined][]>
}

export const idToIndex = {
    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    matrixEnjinV1043: new StorageType(
        'FellowshipCollective.IdToIndex',
        'Optional',
        [sts.number(), matrixEnjinV1043.AccountId32],
        sts.number()
    ) as IdToIndexMatrixEnjinV1043,
}

/**
 *  The index of each ranks's member into the group of members who have at least that rank.
 */
export interface IdToIndexMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: matrixEnjinV1043.AccountId32): Promise<number | undefined>
    getMany(block: Block, keys: [number, matrixEnjinV1043.AccountId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV1043.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV1043.AccountId32][]>
    getKeys(
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): Promise<[number, matrixEnjinV1043.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV1043.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV1043.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): AsyncIterable<[number, matrixEnjinV1043.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, matrixEnjinV1043.AccountId32], v: number | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, matrixEnjinV1043.AccountId32], v: number | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): Promise<[k: [number, matrixEnjinV1043.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, matrixEnjinV1043.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, matrixEnjinV1043.AccountId32], v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): AsyncIterable<[k: [number, matrixEnjinV1043.AccountId32], v: number | undefined][]>
}

export const indexToId = {
    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    matrixEnjinV1043: new StorageType(
        'FellowshipCollective.IndexToId',
        'Optional',
        [sts.number(), sts.number()],
        matrixEnjinV1043.AccountId32
    ) as IndexToIdMatrixEnjinV1043,
}

/**
 *  The members in the collective by index. All indices in the range `0..MemberCount` will
 *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
export interface IndexToIdMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<matrixEnjinV1043.AccountId32 | undefined>
    getMany(block: Block, keys: [number, number][]): Promise<(matrixEnjinV1043.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: matrixEnjinV1043.AccountId32 | undefined][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: matrixEnjinV1043.AccountId32 | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: number
    ): Promise<[k: [number, number], v: matrixEnjinV1043.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, number], v: matrixEnjinV1043.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, number], v: matrixEnjinV1043.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: number
    ): AsyncIterable<[k: [number, number], v: matrixEnjinV1043.AccountId32 | undefined][]>
}

export const voting = {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    matrixEnjinV1043: new StorageType(
        'FellowshipCollective.Voting',
        'Optional',
        [sts.number(), matrixEnjinV1043.AccountId32],
        matrixEnjinV1043.VoteRecord
    ) as VotingMatrixEnjinV1043,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): Promise<matrixEnjinV1043.VoteRecord | undefined>
    getMany(
        block: Block,
        keys: [number, matrixEnjinV1043.AccountId32][]
    ): Promise<(matrixEnjinV1043.VoteRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, matrixEnjinV1043.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, matrixEnjinV1043.AccountId32][]>
    getKeys(
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): Promise<[number, matrixEnjinV1043.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, matrixEnjinV1043.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, matrixEnjinV1043.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): AsyncIterable<[number, matrixEnjinV1043.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [number, matrixEnjinV1043.AccountId32], v: matrixEnjinV1043.VoteRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, matrixEnjinV1043.AccountId32], v: matrixEnjinV1043.VoteRecord | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): Promise<[k: [number, matrixEnjinV1043.AccountId32], v: matrixEnjinV1043.VoteRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, matrixEnjinV1043.AccountId32], v: matrixEnjinV1043.VoteRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, matrixEnjinV1043.AccountId32], v: matrixEnjinV1043.VoteRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: matrixEnjinV1043.AccountId32
    ): AsyncIterable<[k: [number, matrixEnjinV1043.AccountId32], v: matrixEnjinV1043.VoteRecord | undefined][]>
}

export const votingCleanup = {
    matrixEnjinV1043: new StorageType(
        'FellowshipCollective.VotingCleanup',
        'Optional',
        [sts.number()],
        sts.bytes()
    ) as VotingCleanupMatrixEnjinV1043,
}

export interface VotingCleanupMatrixEnjinV1043 {
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
