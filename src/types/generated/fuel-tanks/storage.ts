import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1012 from '../v1012'

export const tanks =  {
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV603: new StorageType('FuelTanks.Tanks', 'Optional', [matrixEnjinV603.AccountId32], matrixEnjinV603.FuelTank) as TanksMatrixEnjinV603,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV1000: new StorageType('FuelTanks.Tanks', 'Optional', [matrixEnjinV1000.AccountId32], matrixEnjinV1000.FuelTank) as TanksMatrixEnjinV1000,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV1012: new StorageType('FuelTanks.Tanks', 'Optional', [matrixEnjinV1012.AccountId32], matrixEnjinV1012.FuelTank) as TanksMatrixEnjinV1012,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v500: new StorageType('FuelTanks.Tanks', 'Optional', [v500.AccountId32], v500.FuelTank) as TanksV500,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1000: new StorageType('FuelTanks.Tanks', 'Optional', [v1000.AccountId32], v1000.FuelTank) as TanksV1000,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1010: new StorageType('FuelTanks.Tanks', 'Optional', [v1010.AccountId32], v1010.FuelTank) as TanksV1010,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1012: new StorageType('FuelTanks.Tanks', 'Optional', [v1012.AccountId32], v1012.FuelTank) as TanksV1012,
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

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<(matrixEnjinV1000.FuelTank | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<(matrixEnjinV1000.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.FuelTank | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.FuelTank | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<(matrixEnjinV1012.FuelTank | undefined)>
    getMany(block: Block, keys: matrixEnjinV1012.AccountId32[]): Promise<(matrixEnjinV1012.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AccountId32, v: (matrixEnjinV1012.FuelTank | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1012.AccountId32): Promise<[k: matrixEnjinV1012.AccountId32, v: (matrixEnjinV1012.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: (matrixEnjinV1012.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: (matrixEnjinV1012.FuelTank | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v500.AccountId32): Promise<(v500.FuelTank | undefined)>
    getMany(block: Block, keys: v500.AccountId32[]): Promise<(v500.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v500.AccountId32[]>
    getKeys(block: Block, key: v500.AccountId32): Promise<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<v500.AccountId32[]>
    getPairs(block: Block): Promise<[k: v500.AccountId32, v: (v500.FuelTank | undefined)][]>
    getPairs(block: Block, key: v500.AccountId32): Promise<[k: v500.AccountId32, v: (v500.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.AccountId32, v: (v500.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<[k: v500.AccountId32, v: (v500.FuelTank | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.AccountId32): Promise<(v1000.FuelTank | undefined)>
    getMany(block: Block, keys: v1000.AccountId32[]): Promise<(v1000.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v1000.AccountId32[]>
    getKeys(block: Block, key: v1000.AccountId32): Promise<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<v1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000.AccountId32, v: (v1000.FuelTank | undefined)][]>
    getPairs(block: Block, key: v1000.AccountId32): Promise<[k: v1000.AccountId32, v: (v1000.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.AccountId32, v: (v1000.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<[k: v1000.AccountId32, v: (v1000.FuelTank | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.AccountId32): Promise<(v1010.FuelTank | undefined)>
    getMany(block: Block, keys: v1010.AccountId32[]): Promise<(v1010.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v1010.AccountId32[]>
    getKeys(block: Block, key: v1010.AccountId32): Promise<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<v1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1010.AccountId32, v: (v1010.FuelTank | undefined)][]>
    getPairs(block: Block, key: v1010.AccountId32): Promise<[k: v1010.AccountId32, v: (v1010.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AccountId32, v: (v1010.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<[k: v1010.AccountId32, v: (v1010.FuelTank | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1012.AccountId32): Promise<(v1012.FuelTank | undefined)>
    getMany(block: Block, keys: v1012.AccountId32[]): Promise<(v1012.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v1012.AccountId32[]>
    getKeys(block: Block, key: v1012.AccountId32): Promise<v1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1012.AccountId32): AsyncIterable<v1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1012.AccountId32, v: (v1012.FuelTank | undefined)][]>
    getPairs(block: Block, key: v1012.AccountId32): Promise<[k: v1012.AccountId32, v: (v1012.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1012.AccountId32, v: (v1012.FuelTank | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1012.AccountId32): AsyncIterable<[k: v1012.AccountId32, v: (v1012.FuelTank | undefined)][]>
}

export const accounts =  {
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV603: new StorageType('FuelTanks.Accounts', 'Optional', [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], matrixEnjinV603.UserAccount) as AccountsMatrixEnjinV603,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV1000: new StorageType('FuelTanks.Accounts', 'Optional', [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], matrixEnjinV1000.UserAccount) as AccountsMatrixEnjinV1000,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV1012: new StorageType('FuelTanks.Accounts', 'Optional', [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], matrixEnjinV1012.UserAccount) as AccountsMatrixEnjinV1012,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v500: new StorageType('FuelTanks.Accounts', 'Optional', [v500.AccountId32, v500.AccountId32], v500.UserAccount) as AccountsV500,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1000: new StorageType('FuelTanks.Accounts', 'Optional', [v1000.AccountId32, v1000.AccountId32], v1000.UserAccount) as AccountsV1000,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1010: new StorageType('FuelTanks.Accounts', 'Optional', [v1010.AccountId32, v1010.AccountId32], v1010.UserAccount) as AccountsV1010,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1012: new StorageType('FuelTanks.Accounts', 'Optional', [v1012.AccountId32, v1012.AccountId32], v1012.UserAccount) as AccountsV1012,
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

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV1000.AccountId32, key2: matrixEnjinV1000.AccountId32): Promise<(matrixEnjinV1000.UserAccount | undefined)>
    getMany(block: Block, keys: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]): Promise<(matrixEnjinV1000.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV1000.AccountId32): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV1000.AccountId32, key2: matrixEnjinV1000.AccountId32): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1000.AccountId32): AsyncIterable<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1000.AccountId32, key2: matrixEnjinV1000.AccountId32): AsyncIterable<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: (matrixEnjinV1000.UserAccount | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1000.AccountId32): Promise<[k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: (matrixEnjinV1000.UserAccount | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1000.AccountId32, key2: matrixEnjinV1000.AccountId32): Promise<[k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: (matrixEnjinV1000.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: (matrixEnjinV1000.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1000.AccountId32): AsyncIterable<[k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: (matrixEnjinV1000.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1000.AccountId32, key2: matrixEnjinV1000.AccountId32): AsyncIterable<[k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: (matrixEnjinV1000.UserAccount | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV1012.AccountId32, key2: matrixEnjinV1012.AccountId32): Promise<(matrixEnjinV1012.UserAccount | undefined)>
    getMany(block: Block, keys: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]): Promise<(matrixEnjinV1012.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV1012.AccountId32): Promise<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV1012.AccountId32, key2: matrixEnjinV1012.AccountId32): Promise<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AccountId32): AsyncIterable<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AccountId32, key2: matrixEnjinV1012.AccountId32): AsyncIterable<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: (matrixEnjinV1012.UserAccount | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1012.AccountId32): Promise<[k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: (matrixEnjinV1012.UserAccount | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1012.AccountId32, key2: matrixEnjinV1012.AccountId32): Promise<[k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: (matrixEnjinV1012.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: (matrixEnjinV1012.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AccountId32): AsyncIterable<[k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: (matrixEnjinV1012.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AccountId32, key2: matrixEnjinV1012.AccountId32): AsyncIterable<[k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: (matrixEnjinV1012.UserAccount | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v500.AccountId32, key2: v500.AccountId32): Promise<(v500.UserAccount | undefined)>
    getMany(block: Block, keys: [v500.AccountId32, v500.AccountId32][]): Promise<(v500.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v500.AccountId32, v500.AccountId32][]>
    getKeys(block: Block, key1: v500.AccountId32): Promise<[v500.AccountId32, v500.AccountId32][]>
    getKeys(block: Block, key1: v500.AccountId32, key2: v500.AccountId32): Promise<[v500.AccountId32, v500.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v500.AccountId32, v500.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v500.AccountId32): AsyncIterable<[v500.AccountId32, v500.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v500.AccountId32, key2: v500.AccountId32): AsyncIterable<[v500.AccountId32, v500.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v500.AccountId32, v500.AccountId32], v: (v500.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v500.AccountId32): Promise<[k: [v500.AccountId32, v500.AccountId32], v: (v500.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v500.AccountId32, key2: v500.AccountId32): Promise<[k: [v500.AccountId32, v500.AccountId32], v: (v500.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v500.AccountId32, v500.AccountId32], v: (v500.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v500.AccountId32): AsyncIterable<[k: [v500.AccountId32, v500.AccountId32], v: (v500.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v500.AccountId32, key2: v500.AccountId32): AsyncIterable<[k: [v500.AccountId32, v500.AccountId32], v: (v500.UserAccount | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1000.AccountId32, key2: v1000.AccountId32): Promise<(v1000.UserAccount | undefined)>
    getMany(block: Block, keys: [v1000.AccountId32, v1000.AccountId32][]): Promise<(v1000.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v1000.AccountId32, v1000.AccountId32][]>
    getKeys(block: Block, key1: v1000.AccountId32): Promise<[v1000.AccountId32, v1000.AccountId32][]>
    getKeys(block: Block, key1: v1000.AccountId32, key2: v1000.AccountId32): Promise<[v1000.AccountId32, v1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1000.AccountId32, v1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1000.AccountId32): AsyncIterable<[v1000.AccountId32, v1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1000.AccountId32, key2: v1000.AccountId32): AsyncIterable<[v1000.AccountId32, v1000.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1000.AccountId32, v1000.AccountId32], v: (v1000.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v1000.AccountId32): Promise<[k: [v1000.AccountId32, v1000.AccountId32], v: (v1000.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v1000.AccountId32, key2: v1000.AccountId32): Promise<[k: [v1000.AccountId32, v1000.AccountId32], v: (v1000.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1000.AccountId32, v1000.AccountId32], v: (v1000.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1000.AccountId32): AsyncIterable<[k: [v1000.AccountId32, v1000.AccountId32], v: (v1000.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1000.AccountId32, key2: v1000.AccountId32): AsyncIterable<[k: [v1000.AccountId32, v1000.AccountId32], v: (v1000.UserAccount | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1010.AccountId32, key2: v1010.AccountId32): Promise<(v1010.UserAccount | undefined)>
    getMany(block: Block, keys: [v1010.AccountId32, v1010.AccountId32][]): Promise<(v1010.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v1010.AccountId32, v1010.AccountId32][]>
    getKeys(block: Block, key1: v1010.AccountId32): Promise<[v1010.AccountId32, v1010.AccountId32][]>
    getKeys(block: Block, key1: v1010.AccountId32, key2: v1010.AccountId32): Promise<[v1010.AccountId32, v1010.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1010.AccountId32, v1010.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.AccountId32): AsyncIterable<[v1010.AccountId32, v1010.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.AccountId32, key2: v1010.AccountId32): AsyncIterable<[v1010.AccountId32, v1010.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1010.AccountId32, v1010.AccountId32], v: (v1010.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v1010.AccountId32): Promise<[k: [v1010.AccountId32, v1010.AccountId32], v: (v1010.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v1010.AccountId32, key2: v1010.AccountId32): Promise<[k: [v1010.AccountId32, v1010.AccountId32], v: (v1010.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1010.AccountId32, v1010.AccountId32], v: (v1010.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.AccountId32): AsyncIterable<[k: [v1010.AccountId32, v1010.AccountId32], v: (v1010.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.AccountId32, key2: v1010.AccountId32): AsyncIterable<[k: [v1010.AccountId32, v1010.AccountId32], v: (v1010.UserAccount | undefined)][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1012.AccountId32, key2: v1012.AccountId32): Promise<(v1012.UserAccount | undefined)>
    getMany(block: Block, keys: [v1012.AccountId32, v1012.AccountId32][]): Promise<(v1012.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v1012.AccountId32, v1012.AccountId32][]>
    getKeys(block: Block, key1: v1012.AccountId32): Promise<[v1012.AccountId32, v1012.AccountId32][]>
    getKeys(block: Block, key1: v1012.AccountId32, key2: v1012.AccountId32): Promise<[v1012.AccountId32, v1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1012.AccountId32, v1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1012.AccountId32): AsyncIterable<[v1012.AccountId32, v1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1012.AccountId32, key2: v1012.AccountId32): AsyncIterable<[v1012.AccountId32, v1012.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1012.AccountId32, v1012.AccountId32], v: (v1012.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v1012.AccountId32): Promise<[k: [v1012.AccountId32, v1012.AccountId32], v: (v1012.UserAccount | undefined)][]>
    getPairs(block: Block, key1: v1012.AccountId32, key2: v1012.AccountId32): Promise<[k: [v1012.AccountId32, v1012.AccountId32], v: (v1012.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1012.AccountId32, v1012.AccountId32], v: (v1012.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1012.AccountId32): AsyncIterable<[k: [v1012.AccountId32, v1012.AccountId32], v: (v1012.UserAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1012.AccountId32, key2: v1012.AccountId32): AsyncIterable<[k: [v1012.AccountId32, v1012.AccountId32], v: (v1012.UserAccount | undefined)][]>
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
