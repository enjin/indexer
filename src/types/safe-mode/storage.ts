import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const enteredUntil = {
    /**
     *  Contains the last block number that the safe-mode will remain entered in.
     *
     *   Set to `None` when safe-mode is exited.
     *
     *  Safe-mode is automatically exited when the current block number exceeds this value.
     */
    matrixEnjinV1012: new StorageType(
        'SafeMode.EnteredUntil',
        'Optional',
        [],
        sts.number()
    ) as EnteredUntilMatrixEnjinV1012,
}

/**
 *  Contains the last block number that the safe-mode will remain entered in.
 *
 *   Set to `None` when safe-mode is exited.
 *
 *  Safe-mode is automatically exited when the current block number exceeds this value.
 */
export interface EnteredUntilMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const deposits = {
    /**
     *  Holds the reserve that was taken from an account at a specific block number.
     *
     *  This helps governance to have an overview of outstanding deposits that should be returned or
     *  slashed.
     */
    matrixEnjinV1012: new StorageType(
        'SafeMode.Deposits',
        'Optional',
        [matrixEnjinV1012.AccountId32, sts.number()],
        sts.bigint()
    ) as DepositsMatrixEnjinV1012,
}

/**
 *  Holds the reserve that was taken from an account at a specific block number.
 *
 *  This helps governance to have an overview of outstanding deposits that should be returned or
 *  slashed.
 */
export interface DepositsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV1012.AccountId32, key2: number): Promise<bigint | undefined>
    getMany(block: Block, keys: [matrixEnjinV1012.AccountId32, number][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.AccountId32, number][]>
    getKeys(block: Block, key1: matrixEnjinV1012.AccountId32): Promise<[matrixEnjinV1012.AccountId32, number][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: number
    ): Promise<[matrixEnjinV1012.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1012.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[matrixEnjinV1012.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: number
    ): AsyncIterable<[matrixEnjinV1012.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1012.AccountId32, number], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): Promise<[k: [matrixEnjinV1012.AccountId32, number], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: number
    ): Promise<[k: [matrixEnjinV1012.AccountId32, number], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixEnjinV1012.AccountId32, number], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[k: [matrixEnjinV1012.AccountId32, number], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: number
    ): AsyncIterable<[k: [matrixEnjinV1012.AccountId32, number], v: bigint | undefined][]>
}
