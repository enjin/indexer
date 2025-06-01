import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v105 from '../v105'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const incompleteSince =  {
    matrixEnjinV603: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceMatrixEnjinV603,
}

export interface IncompleteSinceMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixEnjinV603: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => matrixEnjinV603.Scheduled))) as AgendaMatrixEnjinV603,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixEnjinV1012: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => matrixEnjinV1012.Scheduled))) as AgendaMatrixEnjinV1012,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixV500: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => matrixV500.Scheduled))) as AgendaMatrixV500,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixV1010: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => matrixV1010.Scheduled))) as AgendaMatrixV1010,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    enjinV100: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => enjinV100.Scheduled))) as AgendaEnjinV100,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    enjinV101: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => enjinV101.Scheduled))) as AgendaEnjinV101,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    enjinV1032: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => enjinV1032.Scheduled))) as AgendaEnjinV1032,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v100: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v100.Scheduled))) as AgendaV100,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v105: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v105.Scheduled))) as AgendaV105,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1030: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1030.Scheduled))) as AgendaV1030,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV603.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((matrixEnjinV603.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((matrixEnjinV603.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV1012.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((matrixEnjinV1012.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((matrixEnjinV1012.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaMatrixV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixV500.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((matrixV500.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((matrixV500.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((matrixV500.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((matrixV500.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((matrixV500.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((matrixV500.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaMatrixV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixV1010.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((matrixV1010.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((matrixV1010.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((matrixV1010.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((matrixV1010.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((matrixV1010.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((matrixV1010.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (enjinV100.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((enjinV100.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((enjinV100.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((enjinV100.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((enjinV100.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((enjinV100.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((enjinV100.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaEnjinV101  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (enjinV101.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((enjinV101.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((enjinV101.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((enjinV101.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((enjinV101.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((enjinV101.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((enjinV101.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaEnjinV1032  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (enjinV1032.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((enjinV1032.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((enjinV1032.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((enjinV1032.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((enjinV1032.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((enjinV1032.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((enjinV1032.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v100.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v100.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v100.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v100.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v100.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v100.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v100.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV105  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v105.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v105.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v105.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v105.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v105.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v105.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v105.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1030.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1030.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1030.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1030.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1030.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1030.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1030.Scheduled | undefined)[] | undefined)][]>
}

export const lookup =  {
    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    matrixEnjinV603: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], sts.tuple(() => [sts.number(), sts.number()])) as LookupMatrixEnjinV603,
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface LookupMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([number, number] | undefined)][]>
}

export const retries =  {
    /**
     *  Retry configurations for items to be executed, indexed by task address.
     */
    matrixEnjinV1012: new StorageType('Scheduler.Retries', 'Optional', [sts.tuple(() => [sts.number(), sts.number()])], matrixEnjinV1012.RetryConfig) as RetriesMatrixEnjinV1012,
}

/**
 *  Retry configurations for items to be executed, indexed by task address.
 */
export interface RetriesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [number, number]): Promise<(matrixEnjinV1012.RetryConfig | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(matrixEnjinV1012.RetryConfig | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
    getPairs(block: Block, key: [number, number]): Promise<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [number, number]): AsyncIterable<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
}
