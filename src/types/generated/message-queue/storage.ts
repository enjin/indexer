import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const bookStateFor =  {
    /**
     *  The index of the first and last (non-empty) pages.
     */
    matrixEnjinV1010: new StorageType('MessageQueue.BookStateFor', 'Default', [matrixEnjinV1010.AggregateMessageOrigin], matrixEnjinV1010.BookState) as BookStateForMatrixEnjinV1010,
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface BookStateForMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1010.BookState
    get(block: Block, key: matrixEnjinV1010.AggregateMessageOrigin): Promise<(matrixEnjinV1010.BookState | undefined)>
    getMany(block: Block, keys: matrixEnjinV1010.AggregateMessageOrigin[]): Promise<(matrixEnjinV1010.BookState | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1010.AggregateMessageOrigin[]>
    getKeys(block: Block, key: matrixEnjinV1010.AggregateMessageOrigin): Promise<matrixEnjinV1010.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1010.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1010.AggregateMessageOrigin): AsyncIterable<matrixEnjinV1010.AggregateMessageOrigin[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1010.AggregateMessageOrigin, v: (matrixEnjinV1010.BookState | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1010.AggregateMessageOrigin): Promise<[k: matrixEnjinV1010.AggregateMessageOrigin, v: (matrixEnjinV1010.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1010.AggregateMessageOrigin, v: (matrixEnjinV1010.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1010.AggregateMessageOrigin): AsyncIterable<[k: matrixEnjinV1010.AggregateMessageOrigin, v: (matrixEnjinV1010.BookState | undefined)][]>
}

export const serviceHead =  {
    /**
     *  The origin at which we should begin servicing.
     */
    matrixEnjinV1010: new StorageType('MessageQueue.ServiceHead', 'Optional', [], matrixEnjinV1010.AggregateMessageOrigin) as ServiceHeadMatrixEnjinV1010,
}

/**
 *  The origin at which we should begin servicing.
 */
export interface ServiceHeadMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV1010.AggregateMessageOrigin | undefined)>
}

export const pages =  {
    /**
     *  The map of page indices to pages.
     */
    matrixEnjinV1010: new StorageType('MessageQueue.Pages', 'Optional', [matrixEnjinV1010.AggregateMessageOrigin, sts.number()], matrixEnjinV1010.Page) as PagesMatrixEnjinV1010,
}

/**
 *  The map of page indices to pages.
 */
export interface PagesMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin, key2: number): Promise<(matrixEnjinV1010.Page | undefined)>
    getMany(block: Block, keys: [matrixEnjinV1010.AggregateMessageOrigin, number][]): Promise<(matrixEnjinV1010.Page | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1010.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin): Promise<[matrixEnjinV1010.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin, key2: number): Promise<[matrixEnjinV1010.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1010.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin): AsyncIterable<[matrixEnjinV1010.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin, key2: number): AsyncIterable<[matrixEnjinV1010.AggregateMessageOrigin, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV1010.AggregateMessageOrigin, number], v: (matrixEnjinV1010.Page | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin): Promise<[k: [matrixEnjinV1010.AggregateMessageOrigin, number], v: (matrixEnjinV1010.Page | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin, key2: number): Promise<[k: [matrixEnjinV1010.AggregateMessageOrigin, number], v: (matrixEnjinV1010.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV1010.AggregateMessageOrigin, number], v: (matrixEnjinV1010.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin): AsyncIterable<[k: [matrixEnjinV1010.AggregateMessageOrigin, number], v: (matrixEnjinV1010.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV1010.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [matrixEnjinV1010.AggregateMessageOrigin, number], v: (matrixEnjinV1010.Page | undefined)][]>
}
