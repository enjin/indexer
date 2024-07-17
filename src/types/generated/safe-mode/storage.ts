import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const enteredUntil =  {
    /**
     *  Contains the last block number that the safe-mode will remain entered in.
     * 
     *   Set to `None` when safe-mode is exited.
     * 
     *  Safe-mode is automatically exited when the current block number exceeds this value.
     */
    v1010: new StorageType('SafeMode.EnteredUntil', 'Optional', [], sts.number()) as EnteredUntilV1010,
}

/**
 *  Contains the last block number that the safe-mode will remain entered in.
 * 
 *   Set to `None` when safe-mode is exited.
 * 
 *  Safe-mode is automatically exited when the current block number exceeds this value.
 */
export interface EnteredUntilV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const deposits =  {
    /**
     *  Holds the reserve that was taken from an account at a specific block number.
     * 
     *  This helps governance to have an overview of outstanding deposits that should be returned or
     *  slashed.
     */
    v1010: new StorageType('SafeMode.Deposits', 'Optional', [v1010.AccountId32, sts.number()], sts.bigint()) as DepositsV1010,
}

/**
 *  Holds the reserve that was taken from an account at a specific block number.
 * 
 *  This helps governance to have an overview of outstanding deposits that should be returned or
 *  slashed.
 */
export interface DepositsV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1010.AccountId32, key2: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v1010.AccountId32, number][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v1010.AccountId32, number][]>
    getKeys(block: Block, key1: v1010.AccountId32): Promise<[v1010.AccountId32, number][]>
    getKeys(block: Block, key1: v1010.AccountId32, key2: number): Promise<[v1010.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1010.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.AccountId32): AsyncIterable<[v1010.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.AccountId32, key2: number): AsyncIterable<[v1010.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v1010.AccountId32): Promise<[k: [v1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v1010.AccountId32, key2: number): Promise<[k: [v1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.AccountId32): AsyncIterable<[k: [v1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.AccountId32, key2: number): AsyncIterable<[k: [v1010.AccountId32, number], v: (bigint | undefined)][]>
}
