import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV1032 from '../enjinV1032'

export const historicalSessions =  {
    /**
     *  Mapping from historical session indices to session-data root hash and validator count.
     */
    enjinV1032: new StorageType('Historical.HistoricalSessions', 'Optional', [sts.number()], sts.tuple(() => [enjinV1032.H256, sts.number()])) as HistoricalSessionsEnjinV1032,
}

/**
 *  Mapping from historical session indices to session-data root hash and validator count.
 */
export interface HistoricalSessionsEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<([enjinV1032.H256, number] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([enjinV1032.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([enjinV1032.H256, number] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([enjinV1032.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([enjinV1032.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([enjinV1032.H256, number] | undefined)][]>
}

export const storedRange =  {
    /**
     *  The range of historical sessions we store. [first, last)
     */
    enjinV1032: new StorageType('Historical.StoredRange', 'Optional', [], sts.tuple(() => [sts.number(), sts.number()])) as StoredRangeEnjinV1032,
}

/**
 *  The range of historical sessions we store. [first, last)
 */
export interface StoredRangeEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([number, number] | undefined)>
}
