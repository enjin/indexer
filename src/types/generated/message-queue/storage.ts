import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const bookStateFor =  {
    /**
     *  The index of the first and last (non-empty) pages.
     */
    v1010: new StorageType('MessageQueue.BookStateFor', 'Default', [v1010.AggregateMessageOrigin], v1010.BookState) as BookStateForV1010,
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface BookStateForV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1010.BookState
    get(block: Block, key: v1010.AggregateMessageOrigin): Promise<(v1010.BookState | undefined)>
    getMany(block: Block, keys: v1010.AggregateMessageOrigin[]): Promise<(v1010.BookState | undefined)[]>
    getKeys(block: Block): Promise<v1010.AggregateMessageOrigin[]>
    getKeys(block: Block, key: v1010.AggregateMessageOrigin): Promise<v1010.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AggregateMessageOrigin): AsyncIterable<v1010.AggregateMessageOrigin[]>
    getPairs(block: Block): Promise<[k: v1010.AggregateMessageOrigin, v: (v1010.BookState | undefined)][]>
    getPairs(block: Block, key: v1010.AggregateMessageOrigin): Promise<[k: v1010.AggregateMessageOrigin, v: (v1010.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AggregateMessageOrigin, v: (v1010.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AggregateMessageOrigin): AsyncIterable<[k: v1010.AggregateMessageOrigin, v: (v1010.BookState | undefined)][]>
}

export const serviceHead =  {
    /**
     *  The origin at which we should begin servicing.
     */
    v1010: new StorageType('MessageQueue.ServiceHead', 'Optional', [], v1010.AggregateMessageOrigin) as ServiceHeadV1010,
}

/**
 *  The origin at which we should begin servicing.
 */
export interface ServiceHeadV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1010.AggregateMessageOrigin | undefined)>
}

export const pages =  {
    /**
     *  The map of page indices to pages.
     */
    v1010: new StorageType('MessageQueue.Pages', 'Optional', [v1010.AggregateMessageOrigin, sts.number()], v1010.Page) as PagesV1010,
}

/**
 *  The map of page indices to pages.
 */
export interface PagesV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1010.AggregateMessageOrigin, key2: number): Promise<(v1010.Page | undefined)>
    getMany(block: Block, keys: [v1010.AggregateMessageOrigin, number][]): Promise<(v1010.Page | undefined)[]>
    getKeys(block: Block): Promise<[v1010.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: v1010.AggregateMessageOrigin): Promise<[v1010.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: v1010.AggregateMessageOrigin, key2: number): Promise<[v1010.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1010.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.AggregateMessageOrigin): AsyncIterable<[v1010.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1010.AggregateMessageOrigin, key2: number): AsyncIterable<[v1010.AggregateMessageOrigin, number][]>
    getPairs(block: Block): Promise<[k: [v1010.AggregateMessageOrigin, number], v: (v1010.Page | undefined)][]>
    getPairs(block: Block, key1: v1010.AggregateMessageOrigin): Promise<[k: [v1010.AggregateMessageOrigin, number], v: (v1010.Page | undefined)][]>
    getPairs(block: Block, key1: v1010.AggregateMessageOrigin, key2: number): Promise<[k: [v1010.AggregateMessageOrigin, number], v: (v1010.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1010.AggregateMessageOrigin, number], v: (v1010.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.AggregateMessageOrigin): AsyncIterable<[k: [v1010.AggregateMessageOrigin, number], v: (v1010.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1010.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [v1010.AggregateMessageOrigin, number], v: (v1010.Page | undefined)][]>
}
