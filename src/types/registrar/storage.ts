import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const pendingSwap =  {
    /**
     *  Pending swap operations.
     */
    enjinV100: new StorageType('Registrar.PendingSwap', 'Optional', [enjinV100.Id], enjinV100.Id) as PendingSwapEnjinV100,
}

/**
 *  Pending swap operations.
 */
export interface PendingSwapEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.Id | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.Id | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.Id | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.Id | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.Id | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.Id | undefined)][]>
}

export const paras =  {
    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may only do
     *  so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    enjinV100: new StorageType('Registrar.Paras', 'Optional', [enjinV100.Id], enjinV100.ParaInfo) as ParasEnjinV100,
    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    enjinV1032: new StorageType('Registrar.Paras', 'Optional', [enjinV1032.Id], enjinV1032.ParaInfo) as ParasEnjinV1032,
    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may only do
     *  so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    v100: new StorageType('Registrar.Paras', 'Optional', [v100.Id], v100.ParaInfo) as ParasV100,
    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    v1030: new StorageType('Registrar.Paras', 'Optional', [v1030.Id], v1030.ParaInfo) as ParasV1030,
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may only do
 *  so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface ParasEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.ParaInfo | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.ParaInfo | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.ParaInfo | undefined)][]>
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may
 *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface ParasEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.Id): Promise<(enjinV1032.ParaInfo | undefined)>
    getMany(block: Block, keys: enjinV1032.Id[]): Promise<(enjinV1032.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.Id[]>
    getKeys(block: Block, key: enjinV1032.Id): Promise<enjinV1032.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.Id): AsyncIterable<enjinV1032.Id[]>
    getPairs(block: Block): Promise<[k: enjinV1032.Id, v: (enjinV1032.ParaInfo | undefined)][]>
    getPairs(block: Block, key: enjinV1032.Id): Promise<[k: enjinV1032.Id, v: (enjinV1032.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV1032.Id, v: (enjinV1032.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV1032.Id): AsyncIterable<[k: enjinV1032.Id, v: (enjinV1032.ParaInfo | undefined)][]>
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may only do
 *  so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface ParasV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v100.Id): Promise<(v100.ParaInfo | undefined)>
    getMany(block: Block, keys: v100.Id[]): Promise<(v100.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<v100.Id[]>
    getKeys(block: Block, key: v100.Id): Promise<v100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.Id): AsyncIterable<v100.Id[]>
    getPairs(block: Block): Promise<[k: v100.Id, v: (v100.ParaInfo | undefined)][]>
    getPairs(block: Block, key: v100.Id): Promise<[k: v100.Id, v: (v100.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v100.Id, v: (v100.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v100.Id): AsyncIterable<[k: v100.Id, v: (v100.ParaInfo | undefined)][]>
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may
 *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface ParasV1030  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.Id): Promise<(v1030.ParaInfo | undefined)>
    getMany(block: Block, keys: v1030.Id[]): Promise<(v1030.ParaInfo | undefined)[]>
    getKeys(block: Block): Promise<v1030.Id[]>
    getKeys(block: Block, key: v1030.Id): Promise<v1030.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.Id): AsyncIterable<v1030.Id[]>
    getPairs(block: Block): Promise<[k: v1030.Id, v: (v1030.ParaInfo | undefined)][]>
    getPairs(block: Block, key: v1030.Id): Promise<[k: v1030.Id, v: (v1030.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1030.Id, v: (v1030.ParaInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1030.Id): AsyncIterable<[k: v1030.Id, v: (v1030.ParaInfo | undefined)][]>
}

export const nextFreeParaId =  {
    /**
     *  The next free `ParaId`.
     */
    enjinV100: new StorageType('Registrar.NextFreeParaId', 'Default', [], enjinV100.Id) as NextFreeParaIdEnjinV100,
}

/**
 *  The next free `ParaId`.
 */
export interface NextFreeParaIdEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id
    get(block: Block): Promise<(enjinV100.Id | undefined)>
}
