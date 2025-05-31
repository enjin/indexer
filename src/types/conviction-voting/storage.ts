import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const votingFor =  {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    enjinV100: new StorageType('ConvictionVoting.VotingFor', 'Default', [enjinV100.AccountId32, sts.number()], enjinV100.Voting) as VotingForEnjinV100,
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface VotingForEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Voting
    get(block: Block, key1: enjinV100.AccountId32, key2: number): Promise<(enjinV100.Voting | undefined)>
    getMany(block: Block, keys: [enjinV100.AccountId32, number][]): Promise<(enjinV100.Voting | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV100.AccountId32): Promise<[enjinV100.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV100.AccountId32, key2: number): Promise<[enjinV100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: enjinV100.AccountId32): AsyncIterable<[enjinV100.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: enjinV100.AccountId32, key2: number): AsyncIterable<[enjinV100.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [enjinV100.AccountId32, number], v: (enjinV100.Voting | undefined)][]>
    getPairs(block: Block, key1: enjinV100.AccountId32): Promise<[k: [enjinV100.AccountId32, number], v: (enjinV100.Voting | undefined)][]>
    getPairs(block: Block, key1: enjinV100.AccountId32, key2: number): Promise<[k: [enjinV100.AccountId32, number], v: (enjinV100.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [enjinV100.AccountId32, number], v: (enjinV100.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: enjinV100.AccountId32): AsyncIterable<[k: [enjinV100.AccountId32, number], v: (enjinV100.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: enjinV100.AccountId32, key2: number): AsyncIterable<[k: [enjinV100.AccountId32, number], v: (enjinV100.Voting | undefined)][]>
}

export const classLocksFor =  {
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    enjinV100: new StorageType('ConvictionVoting.ClassLocksFor', 'Default', [enjinV100.AccountId32], sts.array(() => sts.tuple(() => [sts.number(), sts.bigint()]))) as ClassLocksForEnjinV100,
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ClassLocksForEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, bigint][]
    get(block: Block, key: enjinV100.AccountId32): Promise<([number, bigint][] | undefined)>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<([number, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: ([number, bigint][] | undefined)][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: ([number, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: ([number, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<[k: enjinV100.AccountId32, v: ([number, bigint][] | undefined)][]>
}
