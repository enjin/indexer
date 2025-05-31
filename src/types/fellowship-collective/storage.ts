import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const memberCount =  {
    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    enjinV100: new StorageType('FellowshipCollective.MemberCount', 'Default', [sts.number()], sts.number()) as MemberCountEnjinV100,
}

/**
 *  The number of members in the collective who have at least the rank according to the index
 *  of the vec.
 */
export interface MemberCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: number): Promise<(number | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number | undefined)][]>
}

export const members =  {
    /**
     *  The current members of the collective.
     */
    enjinV100: new StorageType('FellowshipCollective.Members', 'Optional', [enjinV100.AccountId32], enjinV100.MemberRecord) as MembersEnjinV100,
}

/**
 *  The current members of the collective.
 */
export interface MembersEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<(enjinV100.MemberRecord | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.MemberRecord | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: (enjinV100.MemberRecord | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: (enjinV100.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.MemberRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: (enjinV100.MemberRecord | undefined)][]>
}

export const idToIndex =  {
    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    enjinV100: new StorageType('FellowshipCollective.IdToIndex', 'Optional', [sts.number(), enjinV100.AccountId32], sts.number()) as IdToIndexEnjinV100,
}

/**
 *  The index of each ranks's member into the group of members who have at least that rank.
 */
export interface IdToIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (number | undefined)][]>
}

export const indexToId =  {
    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    enjinV100: new StorageType('FellowshipCollective.IndexToId', 'Optional', [sts.number(), sts.number()], enjinV100.AccountId32) as IndexToIdEnjinV100,
}

/**
 *  The members in the collective by index. All indices in the range `0..MemberCount` will
 *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
export interface IndexToIdEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(enjinV100.AccountId32 | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(enjinV100.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (enjinV100.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (enjinV100.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (enjinV100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (enjinV100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (enjinV100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (enjinV100.AccountId32 | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    enjinV100: new StorageType('FellowshipCollective.Voting', 'Optional', [sts.number(), enjinV100.AccountId32], enjinV100.VoteRecord) as VotingEnjinV100,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<(enjinV100.VoteRecord | undefined)>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(enjinV100.VoteRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.VoteRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.VoteRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[k: [number, enjinV100.AccountId32], v: (enjinV100.VoteRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.VoteRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.VoteRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.AccountId32): AsyncIterable<[k: [number, enjinV100.AccountId32], v: (enjinV100.VoteRecord | undefined)][]>
}

export const votingCleanup =  {
    enjinV100: new StorageType('FellowshipCollective.VotingCleanup', 'Optional', [sts.number()], sts.bytes()) as VotingCleanupEnjinV100,
}

export interface VotingCleanupEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}
