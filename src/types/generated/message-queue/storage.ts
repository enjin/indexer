import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const bookStateFor =  {
    /**
     *  The index of the first and last (non-empty) pages.
     */
    matrixEnjinV1012: new StorageType('MessageQueue.BookStateFor', 'Default', [matrixEnjinV1012.AggregateMessageOrigin], matrixEnjinV1012.BookState) as BookStateForMatrixEnjinV1012,
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface BookStateForMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.BookState
    get(block: Block, key: matrixEnjinV1012.AggregateMessageOrigin): Promise<(matrixEnjinV1012.BookState | undefined)>
    getMany(block: Block, keys: matrixEnjinV1012.AggregateMessageOrigin[]): Promise<(matrixEnjinV1012.BookState | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AggregateMessageOrigin[]>
    getKeys(block: Block, key: matrixEnjinV1012.AggregateMessageOrigin): Promise<matrixEnjinV1012.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AggregateMessageOrigin): AsyncIterable<matrixEnjinV1012.AggregateMessageOrigin[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AggregateMessageOrigin, v: (matrixEnjinV1012.BookState | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1012.AggregateMessageOrigin): Promise<[k: matrixEnjinV1012.AggregateMessageOrigin, v: (matrixEnjinV1012.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1012.AggregateMessageOrigin, v: (matrixEnjinV1012.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AggregateMessageOrigin): AsyncIterable<[k: matrixEnjinV1012.AggregateMessageOrigin, v: (matrixEnjinV1012.BookState | undefined)][]>
}

export const serviceHead =  {
    /**
     *  The origin at which we should begin servicing.
     */
    matrixEnjinV1012: new StorageType('MessageQueue.ServiceHead', 'Optional', [], matrixEnjinV1012.AggregateMessageOrigin) as ServiceHeadMatrixEnjinV1012,
}

/**
 *  The origin at which we should begin servicing.
 */
export interface ServiceHeadMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV1012.AggregateMessageOrigin | undefined)>
}

export const pages =  {
    /**
     *  The map of page indices to pages.
     */
    matrixEnjinV1012: new StorageType('MessageQueue.Pages', 'Optional', [matrixEnjinV1012.AggregateMessageOrigin, sts.number()], matrixEnjinV1012.Page) as PagesMatrixEnjinV1012,
}

/**
 *  The map of page indices to pages.
 */
export interface PagesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin, key2: number): Promise<(matrixEnjinV1012.Page | undefined)>
    getMany(block: Block, keys: [matrixEnjinV1012.AggregateMessageOrigin, number][]): Promise<(matrixEnjinV1012.Page | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin): Promise<[matrixEnjinV1012.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin, key2: number): Promise<[matrixEnjinV1012.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1012.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin): AsyncIterable<[matrixEnjinV1012.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin, key2: number): AsyncIterable<[matrixEnjinV1012.AggregateMessageOrigin, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1012.AggregateMessageOrigin, number], v: (matrixEnjinV1012.Page | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin): Promise<[k: [matrixEnjinV1012.AggregateMessageOrigin, number], v: (matrixEnjinV1012.Page | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin, key2: number): Promise<[k: [matrixEnjinV1012.AggregateMessageOrigin, number], v: (matrixEnjinV1012.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV1012.AggregateMessageOrigin, number], v: (matrixEnjinV1012.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin): AsyncIterable<[k: [matrixEnjinV1012.AggregateMessageOrigin, number], v: (matrixEnjinV1012.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1012.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [matrixEnjinV1012.AggregateMessageOrigin, number], v: (matrixEnjinV1012.Page | undefined)][]>
}
