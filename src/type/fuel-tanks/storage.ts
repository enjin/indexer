import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v102 from '../v102'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as v1030 from '../v1030'
import * as matrixV1030 from '../matrixV1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'

export const tanks = {
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV603: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.FuelTank
    ) as TanksMatrixEnjinV603,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV1000: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixEnjinV1000.AccountId32],
        matrixEnjinV1000.FuelTank
    ) as TanksMatrixEnjinV1000,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixEnjinV1012: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.FuelTank
    ) as TanksMatrixEnjinV1012,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV500: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV500.AccountId32],
        matrixV500.FuelTank
    ) as TanksMatrixV500,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1000: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1000.AccountId32],
        matrixV1000.FuelTank
    ) as TanksMatrixV1000,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1010: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1010.AccountId32],
        matrixV1010.FuelTank
    ) as TanksMatrixV1010,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1012: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1012.AccountId32],
        matrixV1012.FuelTank
    ) as TanksMatrixV1012,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    enjinV100: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.FuelTank
    ) as TanksEnjinV100,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    enjinV1021: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [enjinV1021.AccountId32],
        enjinV1021.FuelTank
    ) as TanksEnjinV1021,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    enjinV1032: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [enjinV1032.AccountId32],
        enjinV1032.FuelTank
    ) as TanksEnjinV1032,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v102: new StorageType('FuelTanks.Tanks', 'Optional', [v102.AccountId32], v102.FuelTank) as TanksV102,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1021: new StorageType('FuelTanks.Tanks', 'Optional', [v1021.AccountId32], v1021.FuelTank) as TanksV1021,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1030: new StorageType('FuelTanks.Tanks', 'Optional', [v1030.AccountId32], v1030.FuelTank) as TanksV1030,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    v1032: new StorageType('FuelTanks.Tanks', 'Optional', [v1032.AccountId32], v1032.FuelTank) as TanksV1032,
    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    matrixV1030: new StorageType(
        'FuelTanks.Tanks',
        'Optional',
        [matrixV1030.AccountId32],
        matrixV1030.FuelTank
    ) as TanksMatrixV1030,
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.FuelTank | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.FuelTank | undefined>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<(matrixEnjinV1000.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): Promise<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.FuelTank | undefined>
    getMany(block: Block, keys: matrixEnjinV1012.AccountId32[]): Promise<(matrixEnjinV1012.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.FuelTank | undefined>
    getMany(block: Block, keys: matrixV500.AccountId32[]): Promise<(matrixV500.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.AccountId32[]>
    getKeys(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.AccountId32): AsyncIterable<matrixV500.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV500.AccountId32, v: matrixV500.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixV500.AccountId32
    ): Promise<[k: matrixV500.AccountId32, v: matrixV500.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.AccountId32
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1000.AccountId32): Promise<matrixV1000.FuelTank | undefined>
    getMany(block: Block, keys: matrixV1000.AccountId32[]): Promise<(matrixV1000.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixV1000.AccountId32[]>
    getKeys(block: Block, key: matrixV1000.AccountId32): Promise<matrixV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1000.AccountId32): AsyncIterable<matrixV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1000.AccountId32, v: matrixV1000.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1000.AccountId32
    ): Promise<[k: matrixV1000.AccountId32, v: matrixV1000.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1000.AccountId32, v: matrixV1000.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1000.AccountId32
    ): AsyncIterable<[k: matrixV1000.AccountId32, v: matrixV1000.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1010.AccountId32): Promise<matrixV1010.FuelTank | undefined>
    getMany(block: Block, keys: matrixV1010.AccountId32[]): Promise<(matrixV1010.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.AccountId32[]>
    getKeys(block: Block, key: matrixV1010.AccountId32): Promise<matrixV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1010.AccountId32): AsyncIterable<matrixV1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1010.AccountId32, v: matrixV1010.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1010.AccountId32
    ): Promise<[k: matrixV1010.AccountId32, v: matrixV1010.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.AccountId32, v: matrixV1010.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.AccountId32
    ): AsyncIterable<[k: matrixV1010.AccountId32, v: matrixV1010.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1012.AccountId32): Promise<matrixV1012.FuelTank | undefined>
    getMany(block: Block, keys: matrixV1012.AccountId32[]): Promise<(matrixV1012.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixV1012.AccountId32[]>
    getKeys(block: Block, key: matrixV1012.AccountId32): Promise<matrixV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1012.AccountId32): AsyncIterable<matrixV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1012.AccountId32, v: matrixV1012.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1012.AccountId32
    ): Promise<[k: matrixV1012.AccountId32, v: matrixV1012.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1012.AccountId32, v: matrixV1012.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1012.AccountId32
    ): AsyncIterable<[k: matrixV1012.AccountId32, v: matrixV1012.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.FuelTank | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksEnjinV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1021.AccountId32): Promise<enjinV1021.FuelTank | undefined>
    getMany(block: Block, keys: enjinV1021.AccountId32[]): Promise<(enjinV1021.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<enjinV1021.AccountId32[]>
    getKeys(block: Block, key: enjinV1021.AccountId32): Promise<enjinV1021.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1021.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1021.AccountId32): AsyncIterable<enjinV1021.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1021.AccountId32, v: enjinV1021.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1021.AccountId32
    ): Promise<[k: enjinV1021.AccountId32, v: enjinV1021.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1021.AccountId32, v: enjinV1021.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1021.AccountId32
    ): AsyncIterable<[k: enjinV1021.AccountId32, v: enjinV1021.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.FuelTank | undefined>
    getMany(block: Block, keys: enjinV1032.AccountId32[]): Promise<(enjinV1032.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.AccountId32[]>
    getKeys(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<enjinV1032.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1032.AccountId32, v: enjinV1032.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1032.AccountId32
    ): Promise<[k: enjinV1032.AccountId32, v: enjinV1032.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: enjinV1032.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.AccountId32
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: enjinV1032.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV102 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v102.AccountId32): Promise<v102.FuelTank | undefined>
    getMany(block: Block, keys: v102.AccountId32[]): Promise<(v102.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v102.AccountId32[]>
    getKeys(block: Block, key: v102.AccountId32): Promise<v102.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v102.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v102.AccountId32): AsyncIterable<v102.AccountId32[]>
    getPairs(block: Block): Promise<[k: v102.AccountId32, v: v102.FuelTank | undefined][]>
    getPairs(block: Block, key: v102.AccountId32): Promise<[k: v102.AccountId32, v: v102.FuelTank | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v102.AccountId32, v: v102.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v102.AccountId32
    ): AsyncIterable<[k: v102.AccountId32, v: v102.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1021.AccountId32): Promise<v1021.FuelTank | undefined>
    getMany(block: Block, keys: v1021.AccountId32[]): Promise<(v1021.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v1021.AccountId32[]>
    getKeys(block: Block, key: v1021.AccountId32): Promise<v1021.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1021.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1021.AccountId32): AsyncIterable<v1021.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1021.AccountId32, v: v1021.FuelTank | undefined][]>
    getPairs(block: Block, key: v1021.AccountId32): Promise<[k: v1021.AccountId32, v: v1021.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1021.AccountId32, v: v1021.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1021.AccountId32
    ): AsyncIterable<[k: v1021.AccountId32, v: v1021.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.AccountId32): Promise<v1030.FuelTank | undefined>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<(v1030.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: v1030.FuelTank | undefined][]>
    getPairs(block: Block, key: v1030.AccountId32): Promise<[k: v1030.AccountId32, v: v1030.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1030.AccountId32, v: v1030.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.AccountId32
    ): AsyncIterable<[k: v1030.AccountId32, v: v1030.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1032.AccountId32): Promise<v1032.FuelTank | undefined>
    getMany(block: Block, keys: v1032.AccountId32[]): Promise<(v1032.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<v1032.AccountId32[]>
    getKeys(block: Block, key: v1032.AccountId32): Promise<v1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1032.AccountId32): AsyncIterable<v1032.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1032.AccountId32, v: v1032.FuelTank | undefined][]>
    getPairs(block: Block, key: v1032.AccountId32): Promise<[k: v1032.AccountId32, v: v1032.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1032.AccountId32, v: v1032.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1032.AccountId32
    ): AsyncIterable<[k: v1032.AccountId32, v: v1032.FuelTank | undefined][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface TanksMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.AccountId32): Promise<matrixV1030.FuelTank | undefined>
    getMany(block: Block, keys: matrixV1030.AccountId32[]): Promise<(matrixV1030.FuelTank | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.AccountId32[]>
    getKeys(block: Block, key: matrixV1030.AccountId32): Promise<matrixV1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.AccountId32): AsyncIterable<matrixV1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1030.AccountId32, v: matrixV1030.FuelTank | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.AccountId32
    ): Promise<[k: matrixV1030.AccountId32, v: matrixV1030.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.AccountId32, v: matrixV1030.FuelTank | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.AccountId32
    ): AsyncIterable<[k: matrixV1030.AccountId32, v: matrixV1030.FuelTank | undefined][]>
}

export const accounts = {
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV603: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32],
        matrixEnjinV603.UserAccount
    ) as AccountsMatrixEnjinV603,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV1000: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32],
        matrixEnjinV1000.UserAccount
    ) as AccountsMatrixEnjinV1000,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixEnjinV1012: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.UserAccount
    ) as AccountsMatrixEnjinV1012,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV500: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV500.AccountId32, matrixV500.AccountId32],
        matrixV500.UserAccount
    ) as AccountsMatrixV500,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1000: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1000.AccountId32, matrixV1000.AccountId32],
        matrixV1000.UserAccount
    ) as AccountsMatrixV1000,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1010: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1010.AccountId32, matrixV1010.AccountId32],
        matrixV1010.UserAccount
    ) as AccountsMatrixV1010,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1012: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1012.AccountId32, matrixV1012.AccountId32],
        matrixV1012.UserAccount
    ) as AccountsMatrixV1012,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    enjinV100: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [enjinV100.AccountId32, enjinV100.AccountId32],
        enjinV100.UserAccount
    ) as AccountsEnjinV100,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    enjinV1021: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [enjinV1021.AccountId32, enjinV1021.AccountId32],
        enjinV1021.UserAccount
    ) as AccountsEnjinV1021,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    enjinV1032: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [enjinV1032.AccountId32, enjinV1032.AccountId32],
        enjinV1032.UserAccount
    ) as AccountsEnjinV1032,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v102: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v102.AccountId32, v102.AccountId32],
        v102.UserAccount
    ) as AccountsV102,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1021: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v1021.AccountId32, v1021.AccountId32],
        v1021.UserAccount
    ) as AccountsV1021,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1030: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v1030.AccountId32, v1030.AccountId32],
        v1030.UserAccount
    ) as AccountsV1030,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    v1032: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [v1032.AccountId32, v1032.AccountId32],
        v1032.UserAccount
    ) as AccountsV1032,
    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    matrixV1030: new StorageType(
        'FuelTanks.Accounts',
        'Optional',
        [matrixV1030.AccountId32, matrixV1030.AccountId32],
        matrixV1030.UserAccount
    ) as AccountsMatrixV1030,
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: matrixEnjinV603.AccountId32
    ): Promise<matrixEnjinV603.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]
    ): Promise<(matrixEnjinV603.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: matrixEnjinV603.AccountId32
    ): Promise<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): AsyncIterable<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: matrixEnjinV603.AccountId32
    ): AsyncIterable<[matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: matrixEnjinV603.UserAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): Promise<
        [k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: matrixEnjinV603.UserAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: matrixEnjinV603.AccountId32
    ): Promise<
        [k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: matrixEnjinV603.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: matrixEnjinV603.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: matrixEnjinV603.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: matrixEnjinV603.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV603.AccountId32, matrixEnjinV603.AccountId32], v: matrixEnjinV603.UserAccount | undefined][]
    >
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixEnjinV1000.AccountId32,
        key2: matrixEnjinV1000.AccountId32
    ): Promise<matrixEnjinV1000.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]
    ): Promise<(matrixEnjinV1000.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1000.AccountId32
    ): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1000.AccountId32,
        key2: matrixEnjinV1000.AccountId32
    ): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1000.AccountId32
    ): AsyncIterable<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1000.AccountId32,
        key2: matrixEnjinV1000.AccountId32
    ): AsyncIterable<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: matrixEnjinV1000.UserAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1000.AccountId32
    ): Promise<
        [k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: matrixEnjinV1000.UserAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1000.AccountId32,
        key2: matrixEnjinV1000.AccountId32
    ): Promise<
        [k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: matrixEnjinV1000.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: matrixEnjinV1000.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1000.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: matrixEnjinV1000.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1000.AccountId32,
        key2: matrixEnjinV1000.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.AccountId32], v: matrixEnjinV1000.UserAccount | undefined][]
    >
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: matrixEnjinV1012.AccountId32
    ): Promise<matrixEnjinV1012.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]
    ): Promise<(matrixEnjinV1012.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): Promise<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: matrixEnjinV1012.AccountId32
    ): Promise<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.UserAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): Promise<
        [k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.UserAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: matrixEnjinV1012.AccountId32
    ): Promise<
        [k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.UserAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.AccountId32,
        key2: matrixEnjinV1012.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV1012.AccountId32, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.UserAccount | undefined][]
    >
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.AccountId32
    ): Promise<matrixV500.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixV500.AccountId32, matrixV500.AccountId32][]
    ): Promise<(matrixV500.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixV500.AccountId32, matrixV500.AccountId32][]>
    getKeys(block: Block, key1: matrixV500.AccountId32): Promise<[matrixV500.AccountId32, matrixV500.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.AccountId32
    ): Promise<[matrixV500.AccountId32, matrixV500.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV500.AccountId32, matrixV500.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32
    ): AsyncIterable<[matrixV500.AccountId32, matrixV500.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.AccountId32
    ): AsyncIterable<[matrixV500.AccountId32, matrixV500.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV500.AccountId32, matrixV500.AccountId32], v: matrixV500.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV500.AccountId32
    ): Promise<[k: [matrixV500.AccountId32, matrixV500.AccountId32], v: matrixV500.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.AccountId32
    ): Promise<[k: [matrixV500.AccountId32, matrixV500.AccountId32], v: matrixV500.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV500.AccountId32, matrixV500.AccountId32], v: matrixV500.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32
    ): AsyncIterable<[k: [matrixV500.AccountId32, matrixV500.AccountId32], v: matrixV500.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.AccountId32
    ): AsyncIterable<[k: [matrixV500.AccountId32, matrixV500.AccountId32], v: matrixV500.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixV1000 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixV1000.AccountId32,
        key2: matrixV1000.AccountId32
    ): Promise<matrixV1000.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixV1000.AccountId32, matrixV1000.AccountId32][]
    ): Promise<(matrixV1000.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1000.AccountId32, matrixV1000.AccountId32][]>
    getKeys(block: Block, key1: matrixV1000.AccountId32): Promise<[matrixV1000.AccountId32, matrixV1000.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixV1000.AccountId32,
        key2: matrixV1000.AccountId32
    ): Promise<[matrixV1000.AccountId32, matrixV1000.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1000.AccountId32, matrixV1000.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1000.AccountId32
    ): AsyncIterable<[matrixV1000.AccountId32, matrixV1000.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1000.AccountId32,
        key2: matrixV1000.AccountId32
    ): AsyncIterable<[matrixV1000.AccountId32, matrixV1000.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV1000.AccountId32, matrixV1000.AccountId32], v: matrixV1000.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1000.AccountId32
    ): Promise<[k: [matrixV1000.AccountId32, matrixV1000.AccountId32], v: matrixV1000.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1000.AccountId32,
        key2: matrixV1000.AccountId32
    ): Promise<[k: [matrixV1000.AccountId32, matrixV1000.AccountId32], v: matrixV1000.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1000.AccountId32, matrixV1000.AccountId32], v: matrixV1000.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1000.AccountId32
    ): AsyncIterable<[k: [matrixV1000.AccountId32, matrixV1000.AccountId32], v: matrixV1000.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1000.AccountId32,
        key2: matrixV1000.AccountId32
    ): AsyncIterable<[k: [matrixV1000.AccountId32, matrixV1000.AccountId32], v: matrixV1000.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixV1010.AccountId32,
        key2: matrixV1010.AccountId32
    ): Promise<matrixV1010.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixV1010.AccountId32, matrixV1010.AccountId32][]
    ): Promise<(matrixV1010.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1010.AccountId32, matrixV1010.AccountId32][]>
    getKeys(block: Block, key1: matrixV1010.AccountId32): Promise<[matrixV1010.AccountId32, matrixV1010.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixV1010.AccountId32,
        key2: matrixV1010.AccountId32
    ): Promise<[matrixV1010.AccountId32, matrixV1010.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1010.AccountId32, matrixV1010.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1010.AccountId32
    ): AsyncIterable<[matrixV1010.AccountId32, matrixV1010.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1010.AccountId32,
        key2: matrixV1010.AccountId32
    ): AsyncIterable<[matrixV1010.AccountId32, matrixV1010.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV1010.AccountId32, matrixV1010.AccountId32], v: matrixV1010.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1010.AccountId32
    ): Promise<[k: [matrixV1010.AccountId32, matrixV1010.AccountId32], v: matrixV1010.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1010.AccountId32,
        key2: matrixV1010.AccountId32
    ): Promise<[k: [matrixV1010.AccountId32, matrixV1010.AccountId32], v: matrixV1010.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1010.AccountId32, matrixV1010.AccountId32], v: matrixV1010.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1010.AccountId32
    ): AsyncIterable<[k: [matrixV1010.AccountId32, matrixV1010.AccountId32], v: matrixV1010.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1010.AccountId32,
        key2: matrixV1010.AccountId32
    ): AsyncIterable<[k: [matrixV1010.AccountId32, matrixV1010.AccountId32], v: matrixV1010.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixV1012 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixV1012.AccountId32,
        key2: matrixV1012.AccountId32
    ): Promise<matrixV1012.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixV1012.AccountId32, matrixV1012.AccountId32][]
    ): Promise<(matrixV1012.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1012.AccountId32, matrixV1012.AccountId32][]>
    getKeys(block: Block, key1: matrixV1012.AccountId32): Promise<[matrixV1012.AccountId32, matrixV1012.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixV1012.AccountId32,
        key2: matrixV1012.AccountId32
    ): Promise<[matrixV1012.AccountId32, matrixV1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1012.AccountId32, matrixV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1012.AccountId32
    ): AsyncIterable<[matrixV1012.AccountId32, matrixV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1012.AccountId32,
        key2: matrixV1012.AccountId32
    ): AsyncIterable<[matrixV1012.AccountId32, matrixV1012.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV1012.AccountId32, matrixV1012.AccountId32], v: matrixV1012.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1012.AccountId32
    ): Promise<[k: [matrixV1012.AccountId32, matrixV1012.AccountId32], v: matrixV1012.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1012.AccountId32,
        key2: matrixV1012.AccountId32
    ): Promise<[k: [matrixV1012.AccountId32, matrixV1012.AccountId32], v: matrixV1012.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1012.AccountId32, matrixV1012.AccountId32], v: matrixV1012.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1012.AccountId32
    ): AsyncIterable<[k: [matrixV1012.AccountId32, matrixV1012.AccountId32], v: matrixV1012.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1012.AccountId32,
        key2: matrixV1012.AccountId32
    ): AsyncIterable<[k: [matrixV1012.AccountId32, matrixV1012.AccountId32], v: matrixV1012.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: enjinV100.AccountId32,
        key2: enjinV100.AccountId32
    ): Promise<enjinV100.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [enjinV100.AccountId32, enjinV100.AccountId32][]
    ): Promise<(enjinV100.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.AccountId32, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: enjinV100.AccountId32): Promise<[enjinV100.AccountId32, enjinV100.AccountId32][]>
    getKeys(
        block: Block,
        key1: enjinV100.AccountId32,
        key2: enjinV100.AccountId32
    ): Promise<[enjinV100.AccountId32, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.AccountId32, enjinV100.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32
    ): AsyncIterable<[enjinV100.AccountId32, enjinV100.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[enjinV100.AccountId32, enjinV100.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [enjinV100.AccountId32, enjinV100.AccountId32], v: enjinV100.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV100.AccountId32
    ): Promise<[k: [enjinV100.AccountId32, enjinV100.AccountId32], v: enjinV100.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV100.AccountId32,
        key2: enjinV100.AccountId32
    ): Promise<[k: [enjinV100.AccountId32, enjinV100.AccountId32], v: enjinV100.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV100.AccountId32, enjinV100.AccountId32], v: enjinV100.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32
    ): AsyncIterable<[k: [enjinV100.AccountId32, enjinV100.AccountId32], v: enjinV100.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV100.AccountId32,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[k: [enjinV100.AccountId32, enjinV100.AccountId32], v: enjinV100.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsEnjinV1021 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: enjinV1021.AccountId32,
        key2: enjinV1021.AccountId32
    ): Promise<enjinV1021.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [enjinV1021.AccountId32, enjinV1021.AccountId32][]
    ): Promise<(enjinV1021.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[enjinV1021.AccountId32, enjinV1021.AccountId32][]>
    getKeys(block: Block, key1: enjinV1021.AccountId32): Promise<[enjinV1021.AccountId32, enjinV1021.AccountId32][]>
    getKeys(
        block: Block,
        key1: enjinV1021.AccountId32,
        key2: enjinV1021.AccountId32
    ): Promise<[enjinV1021.AccountId32, enjinV1021.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV1021.AccountId32, enjinV1021.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1021.AccountId32
    ): AsyncIterable<[enjinV1021.AccountId32, enjinV1021.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1021.AccountId32,
        key2: enjinV1021.AccountId32
    ): AsyncIterable<[enjinV1021.AccountId32, enjinV1021.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [enjinV1021.AccountId32, enjinV1021.AccountId32], v: enjinV1021.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1021.AccountId32
    ): Promise<[k: [enjinV1021.AccountId32, enjinV1021.AccountId32], v: enjinV1021.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1021.AccountId32,
        key2: enjinV1021.AccountId32
    ): Promise<[k: [enjinV1021.AccountId32, enjinV1021.AccountId32], v: enjinV1021.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV1021.AccountId32, enjinV1021.AccountId32], v: enjinV1021.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1021.AccountId32
    ): AsyncIterable<[k: [enjinV1021.AccountId32, enjinV1021.AccountId32], v: enjinV1021.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1021.AccountId32,
        key2: enjinV1021.AccountId32
    ): AsyncIterable<[k: [enjinV1021.AccountId32, enjinV1021.AccountId32], v: enjinV1021.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: enjinV1032.AccountId32,
        key2: enjinV1032.AccountId32
    ): Promise<enjinV1032.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [enjinV1032.AccountId32, enjinV1032.AccountId32][]
    ): Promise<(enjinV1032.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[enjinV1032.AccountId32, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: enjinV1032.AccountId32): Promise<[enjinV1032.AccountId32, enjinV1032.AccountId32][]>
    getKeys(
        block: Block,
        key1: enjinV1032.AccountId32,
        key2: enjinV1032.AccountId32
    ): Promise<[enjinV1032.AccountId32, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV1032.AccountId32, enjinV1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1032.AccountId32
    ): AsyncIterable<[enjinV1032.AccountId32, enjinV1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1032.AccountId32,
        key2: enjinV1032.AccountId32
    ): AsyncIterable<[enjinV1032.AccountId32, enjinV1032.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [enjinV1032.AccountId32, enjinV1032.AccountId32], v: enjinV1032.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1032.AccountId32
    ): Promise<[k: [enjinV1032.AccountId32, enjinV1032.AccountId32], v: enjinV1032.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: enjinV1032.AccountId32,
        key2: enjinV1032.AccountId32
    ): Promise<[k: [enjinV1032.AccountId32, enjinV1032.AccountId32], v: enjinV1032.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV1032.AccountId32, enjinV1032.AccountId32], v: enjinV1032.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1032.AccountId32
    ): AsyncIterable<[k: [enjinV1032.AccountId32, enjinV1032.AccountId32], v: enjinV1032.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: enjinV1032.AccountId32,
        key2: enjinV1032.AccountId32
    ): AsyncIterable<[k: [enjinV1032.AccountId32, enjinV1032.AccountId32], v: enjinV1032.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV102 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v102.AccountId32, key2: v102.AccountId32): Promise<v102.UserAccount | undefined>
    getMany(block: Block, keys: [v102.AccountId32, v102.AccountId32][]): Promise<(v102.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v102.AccountId32, v102.AccountId32][]>
    getKeys(block: Block, key1: v102.AccountId32): Promise<[v102.AccountId32, v102.AccountId32][]>
    getKeys(
        block: Block,
        key1: v102.AccountId32,
        key2: v102.AccountId32
    ): Promise<[v102.AccountId32, v102.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v102.AccountId32, v102.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v102.AccountId32
    ): AsyncIterable<[v102.AccountId32, v102.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v102.AccountId32,
        key2: v102.AccountId32
    ): AsyncIterable<[v102.AccountId32, v102.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v102.AccountId32, v102.AccountId32], v: v102.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v102.AccountId32
    ): Promise<[k: [v102.AccountId32, v102.AccountId32], v: v102.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v102.AccountId32,
        key2: v102.AccountId32
    ): Promise<[k: [v102.AccountId32, v102.AccountId32], v: v102.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v102.AccountId32, v102.AccountId32], v: v102.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v102.AccountId32
    ): AsyncIterable<[k: [v102.AccountId32, v102.AccountId32], v: v102.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v102.AccountId32,
        key2: v102.AccountId32
    ): AsyncIterable<[k: [v102.AccountId32, v102.AccountId32], v: v102.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1021.AccountId32, key2: v1021.AccountId32): Promise<v1021.UserAccount | undefined>
    getMany(block: Block, keys: [v1021.AccountId32, v1021.AccountId32][]): Promise<(v1021.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v1021.AccountId32, v1021.AccountId32][]>
    getKeys(block: Block, key1: v1021.AccountId32): Promise<[v1021.AccountId32, v1021.AccountId32][]>
    getKeys(
        block: Block,
        key1: v1021.AccountId32,
        key2: v1021.AccountId32
    ): Promise<[v1021.AccountId32, v1021.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1021.AccountId32, v1021.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1021.AccountId32
    ): AsyncIterable<[v1021.AccountId32, v1021.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1021.AccountId32,
        key2: v1021.AccountId32
    ): AsyncIterable<[v1021.AccountId32, v1021.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1021.AccountId32, v1021.AccountId32], v: v1021.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v1021.AccountId32
    ): Promise<[k: [v1021.AccountId32, v1021.AccountId32], v: v1021.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v1021.AccountId32,
        key2: v1021.AccountId32
    ): Promise<[k: [v1021.AccountId32, v1021.AccountId32], v: v1021.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v1021.AccountId32, v1021.AccountId32], v: v1021.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1021.AccountId32
    ): AsyncIterable<[k: [v1021.AccountId32, v1021.AccountId32], v: v1021.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1021.AccountId32,
        key2: v1021.AccountId32
    ): AsyncIterable<[k: [v1021.AccountId32, v1021.AccountId32], v: v1021.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1030.AccountId32, key2: v1030.AccountId32): Promise<v1030.UserAccount | undefined>
    getMany(block: Block, keys: [v1030.AccountId32, v1030.AccountId32][]): Promise<(v1030.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v1030.AccountId32, v1030.AccountId32][]>
    getKeys(block: Block, key1: v1030.AccountId32): Promise<[v1030.AccountId32, v1030.AccountId32][]>
    getKeys(
        block: Block,
        key1: v1030.AccountId32,
        key2: v1030.AccountId32
    ): Promise<[v1030.AccountId32, v1030.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1030.AccountId32, v1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1030.AccountId32
    ): AsyncIterable<[v1030.AccountId32, v1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1030.AccountId32,
        key2: v1030.AccountId32
    ): AsyncIterable<[v1030.AccountId32, v1030.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1030.AccountId32, v1030.AccountId32], v: v1030.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v1030.AccountId32
    ): Promise<[k: [v1030.AccountId32, v1030.AccountId32], v: v1030.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v1030.AccountId32,
        key2: v1030.AccountId32
    ): Promise<[k: [v1030.AccountId32, v1030.AccountId32], v: v1030.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v1030.AccountId32, v1030.AccountId32], v: v1030.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1030.AccountId32
    ): AsyncIterable<[k: [v1030.AccountId32, v1030.AccountId32], v: v1030.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1030.AccountId32,
        key2: v1030.AccountId32
    ): AsyncIterable<[k: [v1030.AccountId32, v1030.AccountId32], v: v1030.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1032.AccountId32, key2: v1032.AccountId32): Promise<v1032.UserAccount | undefined>
    getMany(block: Block, keys: [v1032.AccountId32, v1032.AccountId32][]): Promise<(v1032.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[v1032.AccountId32, v1032.AccountId32][]>
    getKeys(block: Block, key1: v1032.AccountId32): Promise<[v1032.AccountId32, v1032.AccountId32][]>
    getKeys(
        block: Block,
        key1: v1032.AccountId32,
        key2: v1032.AccountId32
    ): Promise<[v1032.AccountId32, v1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1032.AccountId32, v1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1032.AccountId32
    ): AsyncIterable<[v1032.AccountId32, v1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v1032.AccountId32,
        key2: v1032.AccountId32
    ): AsyncIterable<[v1032.AccountId32, v1032.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1032.AccountId32, v1032.AccountId32], v: v1032.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v1032.AccountId32
    ): Promise<[k: [v1032.AccountId32, v1032.AccountId32], v: v1032.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v1032.AccountId32,
        key2: v1032.AccountId32
    ): Promise<[k: [v1032.AccountId32, v1032.AccountId32], v: v1032.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v1032.AccountId32, v1032.AccountId32], v: v1032.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1032.AccountId32
    ): AsyncIterable<[k: [v1032.AccountId32, v1032.AccountId32], v: v1032.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v1032.AccountId32,
        key2: v1032.AccountId32
    ): AsyncIterable<[k: [v1032.AccountId32, v1032.AccountId32], v: v1032.UserAccount | undefined][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface AccountsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixV1030.AccountId32,
        key2: matrixV1030.AccountId32
    ): Promise<matrixV1030.UserAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixV1030.AccountId32, matrixV1030.AccountId32][]
    ): Promise<(matrixV1030.UserAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixV1030.AccountId32, matrixV1030.AccountId32][]>
    getKeys(block: Block, key1: matrixV1030.AccountId32): Promise<[matrixV1030.AccountId32, matrixV1030.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixV1030.AccountId32,
        key2: matrixV1030.AccountId32
    ): Promise<[matrixV1030.AccountId32, matrixV1030.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV1030.AccountId32, matrixV1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AccountId32
    ): AsyncIterable<[matrixV1030.AccountId32, matrixV1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AccountId32,
        key2: matrixV1030.AccountId32
    ): AsyncIterable<[matrixV1030.AccountId32, matrixV1030.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV1030.AccountId32, matrixV1030.AccountId32], v: matrixV1030.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.AccountId32
    ): Promise<[k: [matrixV1030.AccountId32, matrixV1030.AccountId32], v: matrixV1030.UserAccount | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV1030.AccountId32,
        key2: matrixV1030.AccountId32
    ): Promise<[k: [matrixV1030.AccountId32, matrixV1030.AccountId32], v: matrixV1030.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV1030.AccountId32, matrixV1030.AccountId32], v: matrixV1030.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AccountId32
    ): AsyncIterable<[k: [matrixV1030.AccountId32, matrixV1030.AccountId32], v: matrixV1030.UserAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV1030.AccountId32,
        key2: matrixV1030.AccountId32
    ): AsyncIterable<[k: [matrixV1030.AccountId32, matrixV1030.AccountId32], v: matrixV1030.UserAccount | undefined][]>
}

export const freezeQueue = {
    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    matrixEnjinV603: new StorageType(
        'FuelTanks.FreezeQueue',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.FreezeQueueItem)
    ) as FreezeQueueMatrixEnjinV603,
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FreezeQueueMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.FreezeQueueItem[]
    get(block: Block): Promise<matrixEnjinV603.FreezeQueueItem[] | undefined>
}

export const destroyedTanks = {
    /**
     *  Fuel tank accounts that will be removed in `on_idle`
     */
    matrixV1030: new StorageType(
        'FuelTanks.DestroyedTanks',
        'Default',
        [],
        sts.array(() => matrixV1030.AccountId32)
    ) as DestroyedTanksMatrixV1030,
}

/**
 *  Fuel tank accounts that will be removed in `on_idle`
 */
export interface DestroyedTanksMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1030.AccountId32[]
    get(block: Block): Promise<matrixV1030.AccountId32[] | undefined>
}
