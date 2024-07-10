import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const enteredUntil =  {
    /**
     *  Contains the last block number that the safe-mode will remain entered in.
     * 
     *   Set to `None` when safe-mode is exited.
     * 
     *  Safe-mode is automatically exited when the current block number exceeds this value.
     */
    matrixEnjinV1010: new StorageType('SafeMode.EnteredUntil', 'Optional', [], sts.number()) as EnteredUntilMatrixEnjinV1010,
}

/**
 *  Contains the last block number that the safe-mode will remain entered in.
 * 
 *   Set to `None` when safe-mode is exited.
 * 
 *  Safe-mode is automatically exited when the current block number exceeds this value.
 */
export interface EnteredUntilMatrixEnjinV1010  {
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
    matrixEnjinV1010: new StorageType('SafeMode.Deposits', 'Optional', [matrixEnjinV1010.AccountId32, sts.number()], sts.bigint()) as DepositsMatrixEnjinV1010,
}

/**
 *  Holds the reserve that was taken from an account at a specific block number.
 * 
 *  This helps governance to have an overview of outstanding deposits that should be returned or
 *  slashed.
 */
export interface DepositsMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV1010.AccountId32, key2: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [matrixEnjinV1010.AccountId32, number][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1010.AccountId32, number][]>
    getKeys(block: Block, key1: matrixEnjinV1010.AccountId32): Promise<[matrixEnjinV1010.AccountId32, number][]>
    getKeys(block: Block, key1: matrixEnjinV1010.AccountId32, key2: number): Promise<[matrixEnjinV1010.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1010.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AccountId32): AsyncIterable<[matrixEnjinV1010.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AccountId32, key2: number): AsyncIterable<[matrixEnjinV1010.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1010.AccountId32): Promise<[k: [matrixEnjinV1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1010.AccountId32, key2: number): Promise<[k: [matrixEnjinV1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AccountId32): AsyncIterable<[k: [matrixEnjinV1010.AccountId32, number], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AccountId32, key2: number): AsyncIterable<[k: [matrixEnjinV1010.AccountId32, number], v: (bigint | undefined)][]>
}
