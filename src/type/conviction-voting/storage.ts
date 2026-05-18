import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV1070 from '../enjinV1070'
import * as v1070 from '../v1070'

export const votingFor = {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    enjinV100: new StorageType(
        'ConvictionVoting.VotingFor',
        'Default',
        [enjinV100.AccountId32, sts.number()],
        enjinV100.Voting
    ) as VotingForEnjinV100,
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    enjinV1070: new StorageType(
        'ConvictionVoting.VotingFor',
        'Default',
        [enjinV1070.AccountId32, sts.number(), enjinV1070.VoteCurrency],
        enjinV1070.Voting
    ) as VotingForEnjinV1070,
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v100: new StorageType(
        'ConvictionVoting.VotingFor',
        'Default',
        [v100.AccountId32, sts.number()],
        v100.Voting
    ) as VotingForV100,
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    v1070: new StorageType(
        'ConvictionVoting.VotingFor',
        'Default',
        [v1070.AccountId32, sts.number(), v1070.VoteCurrency],
        v1070.Voting
    ) as VotingForV1070,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Voting
    get(block: Block, key1: enjinV100.AccountId32, key2: number): Promise<enjinV100.Voting | undefined>
    getMany(block: Block, keys: [enjinV100.AccountId32, number][]): Promise<(enjinV100.Voting | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV100.AccountId32): Promise<[enjinV100.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV100.AccountId32, key2: number): Promise<[enjinV100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32
    ): AsyncIterable<[enjinV100.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32,
        key2: number
    ): AsyncIterable<[enjinV100.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [enjinV100.AccountId32, number], v: enjinV100.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV100.AccountId32
    ): Promise<[k: [enjinV100.AccountId32, number], v: enjinV100.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV100.AccountId32,
        key2: number
    ): Promise<[k: [enjinV100.AccountId32, number], v: enjinV100.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV100.AccountId32, number], v: enjinV100.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32
    ): AsyncIterable<[k: [enjinV100.AccountId32, number], v: enjinV100.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32,
        key2: number
    ): AsyncIterable<[k: [enjinV100.AccountId32, number], v: enjinV100.Voting | undefined][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForEnjinV1070 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1070.Voting
    get(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number,
        key3: enjinV1070.VoteCurrency
    ): Promise<enjinV1070.Voting | undefined>
    getMany(
        block: Block,
        keys: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]
    ): Promise<(enjinV1070.Voting | undefined)[]>
    getKeys(block: Block): Promise<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: enjinV1070.AccountId32
    ): Promise<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number
    ): Promise<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number,
        key3: enjinV1070.VoteCurrency
    ): Promise<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32
    ): AsyncIterable<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number
    ): AsyncIterable<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number,
        key3: enjinV1070.VoteCurrency
    ): AsyncIterable<[enjinV1070.AccountId32, number, enjinV1070.VoteCurrency][]>
    getPairs(
        block: Block
    ): Promise<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1070.AccountId32
    ): Promise<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number
    ): Promise<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number,
        key3: enjinV1070.VoteCurrency
    ): Promise<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32
    ): AsyncIterable<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number
    ): AsyncIterable<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: number,
        key3: enjinV1070.VoteCurrency
    ): AsyncIterable<[k: [enjinV1070.AccountId32, number, enjinV1070.VoteCurrency], v: enjinV1070.Voting | undefined][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.Voting
    get(block: Block, key1: v100.AccountId32, key2: number): Promise<v100.Voting | undefined>
    getMany(block: Block, keys: [v100.AccountId32, number][]): Promise<(v100.Voting | undefined)[]>
    getKeys(block: Block): Promise<[v100.AccountId32, number][]>
    getKeys(block: Block, key1: v100.AccountId32): Promise<[v100.AccountId32, number][]>
    getKeys(block: Block, key1: v100.AccountId32, key2: number): Promise<[v100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v100.AccountId32): AsyncIterable<[v100.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32,
        key2: number
    ): AsyncIterable<[v100.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v100.AccountId32, number], v: v100.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: v100.AccountId32
    ): Promise<[k: [v100.AccountId32, number], v: v100.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: v100.AccountId32,
        key2: number
    ): Promise<[k: [v100.AccountId32, number], v: v100.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v100.AccountId32, number], v: v100.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32
    ): AsyncIterable<[k: [v100.AccountId32, number], v: v100.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32,
        key2: number
    ): AsyncIterable<[k: [v100.AccountId32, number], v: v100.Voting | undefined][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForV1070 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1070.Voting
    get(
        block: Block,
        key1: v1070.AccountId32,
        key2: number,
        key3: v1070.VoteCurrency
    ): Promise<v1070.Voting | undefined>
    getMany(
        block: Block,
        keys: [v1070.AccountId32, number, v1070.VoteCurrency][]
    ): Promise<(v1070.Voting | undefined)[]>
    getKeys(block: Block): Promise<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeys(block: Block, key1: v1070.AccountId32): Promise<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: v1070.AccountId32,
        key2: number
    ): Promise<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: v1070.AccountId32,
        key2: number,
        key3: v1070.VoteCurrency
    ): Promise<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32
    ): AsyncIterable<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32,
        key2: number
    ): AsyncIterable<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32,
        key2: number,
        key3: v1070.VoteCurrency
    ): AsyncIterable<[v1070.AccountId32, number, v1070.VoteCurrency][]>
    getPairs(block: Block): Promise<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: v1070.AccountId32
    ): Promise<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: v1070.AccountId32,
        key2: number
    ): Promise<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairs(
        block: Block,
        key1: v1070.AccountId32,
        key2: number,
        key3: v1070.VoteCurrency
    ): Promise<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32
    ): AsyncIterable<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32,
        key2: number
    ): AsyncIterable<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32,
        key2: number,
        key3: v1070.VoteCurrency
    ): AsyncIterable<[k: [v1070.AccountId32, number, v1070.VoteCurrency], v: v1070.Voting | undefined][]>
}

export const classLocksFor = {
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    enjinV100: new StorageType(
        'ConvictionVoting.ClassLocksFor',
        'Default',
        [enjinV100.AccountId32],
        sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))
    ) as ClassLocksForEnjinV100,
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    enjinV1070: new StorageType(
        'ConvictionVoting.ClassLocksFor',
        'Default',
        [enjinV1070.AccountId32, enjinV1070.VoteCurrency],
        sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))
    ) as ClassLocksForEnjinV1070,
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    v100: new StorageType(
        'ConvictionVoting.ClassLocksFor',
        'Default',
        [v100.AccountId32],
        sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))
    ) as ClassLocksForV100,
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    v1070: new StorageType(
        'ConvictionVoting.ClassLocksFor',
        'Default',
        [v1070.AccountId32, v1070.VoteCurrency],
        sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))
    ) as ClassLocksForV1070,
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ClassLocksForEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key: enjinV100.AccountId32): Promise<[number, bigint][] | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: [number, bigint][] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: [number, bigint][] | undefined][]>
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ClassLocksForEnjinV1070 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: enjinV1070.VoteCurrency
    ): Promise<[number, bigint][] | undefined>
    getMany(
        block: Block,
        keys: [enjinV1070.AccountId32, enjinV1070.VoteCurrency][]
    ): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<[enjinV1070.AccountId32, enjinV1070.VoteCurrency][]>
    getKeys(block: Block, key1: enjinV1070.AccountId32): Promise<[enjinV1070.AccountId32, enjinV1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: enjinV1070.VoteCurrency
    ): Promise<[enjinV1070.AccountId32, enjinV1070.VoteCurrency][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV1070.AccountId32, enjinV1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32
    ): AsyncIterable<[enjinV1070.AccountId32, enjinV1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: enjinV1070.VoteCurrency
    ): AsyncIterable<[enjinV1070.AccountId32, enjinV1070.VoteCurrency][]>
    getPairs(
        block: Block
    ): Promise<[k: [enjinV1070.AccountId32, enjinV1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1070.AccountId32
    ): Promise<[k: [enjinV1070.AccountId32, enjinV1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: enjinV1070.VoteCurrency
    ): Promise<[k: [enjinV1070.AccountId32, enjinV1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV1070.AccountId32, enjinV1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32
    ): AsyncIterable<[k: [enjinV1070.AccountId32, enjinV1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1070.AccountId32,
        key2: enjinV1070.VoteCurrency
    ): AsyncIterable<[k: [enjinV1070.AccountId32, enjinV1070.VoteCurrency], v: [number, bigint][] | undefined][]>
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ClassLocksForV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key: v100.AccountId32): Promise<[number, bigint][] | undefined>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: [number, bigint][] | undefined][]>
    getPairs(block: Block, key: v100.AccountId32): Promise<[k: v100.AccountId32, v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v100.AccountId32, v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v100.AccountId32
    ): AsyncIterable<[k: v100.AccountId32, v: [number, bigint][] | undefined][]>
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ClassLocksForV1070 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key1: v1070.AccountId32, key2: v1070.VoteCurrency): Promise<[number, bigint][] | undefined>
    getMany(block: Block, keys: [v1070.AccountId32, v1070.VoteCurrency][]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<[v1070.AccountId32, v1070.VoteCurrency][]>
    getKeys(block: Block, key1: v1070.AccountId32): Promise<[v1070.AccountId32, v1070.VoteCurrency][]>
    getKeys(
        block: Block,
        key1: v1070.AccountId32,
        key2: v1070.VoteCurrency
    ): Promise<[v1070.AccountId32, v1070.VoteCurrency][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1070.AccountId32, v1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32
    ): AsyncIterable<[v1070.AccountId32, v1070.VoteCurrency][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32,
        key2: v1070.VoteCurrency
    ): AsyncIterable<[v1070.AccountId32, v1070.VoteCurrency][]>
    getPairs(block: Block): Promise<[k: [v1070.AccountId32, v1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairs(
        block: Block,
        key1: v1070.AccountId32
    ): Promise<[k: [v1070.AccountId32, v1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairs(
        block: Block,
        key1: v1070.AccountId32,
        key2: v1070.VoteCurrency
    ): Promise<[k: [v1070.AccountId32, v1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v1070.AccountId32, v1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32
    ): AsyncIterable<[k: [v1070.AccountId32, v1070.VoteCurrency], v: [number, bigint][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1070.AccountId32,
        key2: v1070.VoteCurrency
    ): AsyncIterable<[k: [v1070.AccountId32, v1070.VoteCurrency], v: [number, bigint][] | undefined][]>
}
