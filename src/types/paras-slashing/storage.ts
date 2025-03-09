import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const unappliedSlashes =  {
    /**
     *  Validators pending dispute slashes.
     */
    enjinV100: new StorageType('ParasSlashing.UnappliedSlashes', 'Optional', [sts.number(), enjinV100.CandidateHash], enjinV100.PendingSlashes) as UnappliedSlashesEnjinV100,
}

/**
 *  Validators pending dispute slashes.
 */
export interface UnappliedSlashesEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<(enjinV100.PendingSlashes | undefined)>
    getMany(block: Block, keys: [number, enjinV100.CandidateHash][]): Promise<(enjinV100.PendingSlashes | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.CandidateHash][]>
    getKeys(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.CandidateHash): AsyncIterable<[number, enjinV100.CandidateHash][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.CandidateHash], v: (enjinV100.PendingSlashes | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, enjinV100.CandidateHash], v: (enjinV100.PendingSlashes | undefined)][]>
    getPairs(block: Block, key1: number, key2: enjinV100.CandidateHash): Promise<[k: [number, enjinV100.CandidateHash], v: (enjinV100.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: (enjinV100.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: (enjinV100.PendingSlashes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: enjinV100.CandidateHash): AsyncIterable<[k: [number, enjinV100.CandidateHash], v: (enjinV100.PendingSlashes | undefined)][]>
}

export const validatorSetCounts =  {
    /**
     *  `ValidatorSetCount` per session.
     */
    enjinV100: new StorageType('ParasSlashing.ValidatorSetCounts', 'Optional', [sts.number()], sts.number()) as ValidatorSetCountsEnjinV100,
}

/**
 *  `ValidatorSetCount` per session.
 */
export interface ValidatorSetCountsEnjinV100  {
    is(block: RuntimeCtx): boolean
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
