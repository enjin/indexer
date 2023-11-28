import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const tanks =  {
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV603: new StorageType('FuelTanks.Tanks', 'Optional', [matrixEnjinV603.AccountId32], matrixEnjinV603.FuelTank) as TanksMatrixEnjinV603,
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.FuelTank | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.FuelTank | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.FuelTank | undefined)][]>
}

export const accounts =  {
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV603: new StorageType('FuelTanks.Accounts', 'Optional', [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], matrixEnjinV603.UserAccount) as AccountsMatrixEnjinV603,
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV603.AccountId32, key2: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.UserAccount | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]): Promise<(matrixEnjinV603.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32, key2: matrixEnjinV603.AccountId32): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32): AsyncIterable<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32, key2: matrixEnjinV603.AccountId32): AsyncIterable<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.UserAccount | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.UserAccount | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.AccountId32, key2: matrixEnjinV603.AccountId32): Promise<[k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32): AsyncIterable<[k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32, key2: matrixEnjinV603.AccountId32): AsyncIterable<[k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.UserAccount | undefined)][]>
}

export const freezeQueue =  {
    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    matrixEnjinV603: new StorageType('FuelTanks.FreezeQueue', 'Default', [], sts.array(() => matrixEnjinV603.FreezeQueueItem)) as FreezeQueueMatrixEnjinV603,
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FreezeQueueMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.FreezeQueueItem[]
    get(block: Block): Promise<(matrixEnjinV603.FreezeQueueItem[] | undefined)>
}
