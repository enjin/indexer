import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1020 from '../matrixV1020'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1030 from '../matrixV1030'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const info = {
    /**
     *  Stores information about the marketplace
     */
    matrixEnjinV603: new StorageType(
        'Marketplace.Info',
        'Default',
        [],
        matrixEnjinV603.MarketPlaceInfo
    ) as InfoMatrixEnjinV603,
    /**
     *  Stores information about the marketplace
     */
    matrixV500: new StorageType('Marketplace.Info', 'Default', [], matrixV500.MarketPlaceInfo) as InfoMatrixV500,
    /**
     *  Stores information about the marketplace
     */
    matrixV604: new StorageType('Marketplace.Info', 'Default', [], matrixV604.MarketPlaceInfo) as InfoMatrixV604,
}

/**
 *  Stores information about the marketplace
 */
export interface InfoMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MarketPlaceInfo
    get(block: Block): Promise<matrixEnjinV603.MarketPlaceInfo | undefined>
}

/**
 *  Stores information about the marketplace
 */
export interface InfoMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.MarketPlaceInfo
    get(block: Block): Promise<matrixV500.MarketPlaceInfo | undefined>
}

/**
 *  Stores information about the marketplace
 */
export interface InfoMatrixV604 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV604.MarketPlaceInfo
    get(block: Block): Promise<matrixV604.MarketPlaceInfo | undefined>
}

export const listings = {
    /**
     *  Listings by ID
     */
    matrixEnjinV603: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.Listing
    ) as ListingsMatrixEnjinV603,
    /**
     *  Listings by ID
     */
    matrixEnjinV1012: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixEnjinV1012.H256],
        matrixEnjinV1012.Listing
    ) as ListingsMatrixEnjinV1012,
    /**
     *  Listings by ID (real storage)
     */
    matrixEnjinV1022: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixEnjinV1022.H256],
        matrixEnjinV1022.Listing
    ) as ListingsMatrixEnjinV1022,
    /**
     *  Listings by ID
     */
    matrixV500: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixV500.H256],
        matrixV500.Listing
    ) as ListingsMatrixV500,
    /**
     *  Listings by ID
     */
    matrixV1010: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixV1010.H256],
        matrixV1010.Listing
    ) as ListingsMatrixV1010,
    /**
     *  Listings by ID
     */
    matrixV1011: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixV1011.H256],
        matrixV1011.Listing
    ) as ListingsMatrixV1011,
    /**
     *  Listings by ID (real storage)
     */
    matrixV1020: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixV1020.H256],
        matrixV1020.Listing
    ) as ListingsMatrixV1020,
    /**
     *  Listings by ID (real storage)
     */
    matrixV1030: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [matrixV1030.H256],
        matrixV1030.Listing
    ) as ListingsMatrixV1030,
    /**
     *  Listings by ID
     */
    enjinV110: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [enjinV110.H256],
        enjinV110.Listing
    ) as ListingsEnjinV110,
    /**
     *  Listings by ID
     */
    enjinV1032: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [enjinV1032.H256],
        enjinV1032.Listing
    ) as ListingsEnjinV1032,
    /**
     *  Listings by ID (real storage)
     */
    enjinV1050: new StorageType(
        'Marketplace.Listings',
        'Optional',
        [enjinV1050.H256],
        enjinV1050.Listing
    ) as ListingsEnjinV1050,
    /**
     *  Listings by ID
     */
    v110: new StorageType('Marketplace.Listings', 'Optional', [v110.H256], v110.Listing) as ListingsV110,
    /**
     *  Listings by ID
     */
    v1030: new StorageType('Marketplace.Listings', 'Optional', [v1030.H256], v1030.Listing) as ListingsV1030,
    /**
     *  Listings by ID
     */
    v1031: new StorageType('Marketplace.Listings', 'Optional', [v1031.H256], v1031.Listing) as ListingsV1031,
    /**
     *  Listings by ID (real storage)
     */
    v1050: new StorageType('Marketplace.Listings', 'Optional', [v1050.H256], v1050.Listing) as ListingsV1050,
    /**
     *  Listings by ID (real storage)
     */
    v1060: new StorageType('Marketplace.Listings', 'Optional', [v1060.H256], v1060.Listing) as ListingsV1060,
}

/**
 *  Listings by ID
 */
export interface ListingsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.Listing | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Listing | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.H256
    ): Promise<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H256
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.H256): Promise<matrixEnjinV1012.Listing | undefined>
    getMany(block: Block, keys: matrixEnjinV1012.H256[]): Promise<(matrixEnjinV1012.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.H256[]>
    getKeys(block: Block, key: matrixEnjinV1012.H256): Promise<matrixEnjinV1012.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.H256): AsyncIterable<matrixEnjinV1012.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Listing | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.H256
    ): Promise<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.H256
    ): AsyncIterable<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Listing | undefined][]>
}

/**
 *  Listings by ID (real storage)
 */
export interface ListingsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1022.H256): Promise<matrixEnjinV1022.Listing | undefined>
    getMany(block: Block, keys: matrixEnjinV1022.H256[]): Promise<(matrixEnjinV1022.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1022.H256[]>
    getKeys(block: Block, key: matrixEnjinV1022.H256): Promise<matrixEnjinV1022.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1022.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1022.H256): AsyncIterable<matrixEnjinV1022.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Listing | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1022.H256
    ): Promise<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1022.H256
    ): AsyncIterable<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV500.H256): Promise<matrixV500.Listing | undefined>
    getMany(block: Block, keys: matrixV500.H256[]): Promise<(matrixV500.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.H256[]>
    getKeys(block: Block, key: matrixV500.H256): Promise<matrixV500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.H256): AsyncIterable<matrixV500.H256[]>
    getPairs(block: Block): Promise<[k: matrixV500.H256, v: matrixV500.Listing | undefined][]>
    getPairs(block: Block, key: matrixV500.H256): Promise<[k: matrixV500.H256, v: matrixV500.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV500.H256, v: matrixV500.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.H256
    ): AsyncIterable<[k: matrixV500.H256, v: matrixV500.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1010.H256): Promise<matrixV1010.Listing | undefined>
    getMany(block: Block, keys: matrixV1010.H256[]): Promise<(matrixV1010.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.H256[]>
    getKeys(block: Block, key: matrixV1010.H256): Promise<matrixV1010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1010.H256): AsyncIterable<matrixV1010.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1010.H256, v: matrixV1010.Listing | undefined][]>
    getPairs(block: Block, key: matrixV1010.H256): Promise<[k: matrixV1010.H256, v: matrixV1010.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.H256, v: matrixV1010.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.H256
    ): AsyncIterable<[k: matrixV1010.H256, v: matrixV1010.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsMatrixV1011 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1011.H256): Promise<matrixV1011.Listing | undefined>
    getMany(block: Block, keys: matrixV1011.H256[]): Promise<(matrixV1011.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixV1011.H256[]>
    getKeys(block: Block, key: matrixV1011.H256): Promise<matrixV1011.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1011.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1011.H256): AsyncIterable<matrixV1011.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1011.H256, v: matrixV1011.Listing | undefined][]>
    getPairs(block: Block, key: matrixV1011.H256): Promise<[k: matrixV1011.H256, v: matrixV1011.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1011.H256, v: matrixV1011.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1011.H256
    ): AsyncIterable<[k: matrixV1011.H256, v: matrixV1011.Listing | undefined][]>
}

/**
 *  Listings by ID (real storage)
 */
export interface ListingsMatrixV1020 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1020.H256): Promise<matrixV1020.Listing | undefined>
    getMany(block: Block, keys: matrixV1020.H256[]): Promise<(matrixV1020.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixV1020.H256[]>
    getKeys(block: Block, key: matrixV1020.H256): Promise<matrixV1020.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1020.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1020.H256): AsyncIterable<matrixV1020.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1020.H256, v: matrixV1020.Listing | undefined][]>
    getPairs(block: Block, key: matrixV1020.H256): Promise<[k: matrixV1020.H256, v: matrixV1020.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1020.H256, v: matrixV1020.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1020.H256
    ): AsyncIterable<[k: matrixV1020.H256, v: matrixV1020.Listing | undefined][]>
}

/**
 *  Listings by ID (real storage)
 */
export interface ListingsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.H256): Promise<matrixV1030.Listing | undefined>
    getMany(block: Block, keys: matrixV1030.H256[]): Promise<(matrixV1030.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.H256[]>
    getKeys(block: Block, key: matrixV1030.H256): Promise<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.H256): AsyncIterable<matrixV1030.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1030.H256, v: matrixV1030.Listing | undefined][]>
    getPairs(block: Block, key: matrixV1030.H256): Promise<[k: matrixV1030.H256, v: matrixV1030.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.H256, v: matrixV1030.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.H256
    ): AsyncIterable<[k: matrixV1030.H256, v: matrixV1030.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsEnjinV110 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV110.H256): Promise<enjinV110.Listing | undefined>
    getMany(block: Block, keys: enjinV110.H256[]): Promise<(enjinV110.Listing | undefined)[]>
    getKeys(block: Block): Promise<enjinV110.H256[]>
    getKeys(block: Block, key: enjinV110.H256): Promise<enjinV110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV110.H256): AsyncIterable<enjinV110.H256[]>
    getPairs(block: Block): Promise<[k: enjinV110.H256, v: enjinV110.Listing | undefined][]>
    getPairs(block: Block, key: enjinV110.H256): Promise<[k: enjinV110.H256, v: enjinV110.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV110.H256, v: enjinV110.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV110.H256
    ): AsyncIterable<[k: enjinV110.H256, v: enjinV110.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.H256): Promise<enjinV1032.Listing | undefined>
    getMany(block: Block, keys: enjinV1032.H256[]): Promise<(enjinV1032.Listing | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.H256[]>
    getKeys(block: Block, key: enjinV1032.H256): Promise<enjinV1032.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.H256): AsyncIterable<enjinV1032.H256[]>
    getPairs(block: Block): Promise<[k: enjinV1032.H256, v: enjinV1032.Listing | undefined][]>
    getPairs(block: Block, key: enjinV1032.H256): Promise<[k: enjinV1032.H256, v: enjinV1032.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.H256, v: enjinV1032.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.H256
    ): AsyncIterable<[k: enjinV1032.H256, v: enjinV1032.Listing | undefined][]>
}

/**
 *  Listings by ID (real storage)
 */
export interface ListingsEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1050.H256): Promise<enjinV1050.Listing | undefined>
    getMany(block: Block, keys: enjinV1050.H256[]): Promise<(enjinV1050.Listing | undefined)[]>
    getKeys(block: Block): Promise<enjinV1050.H256[]>
    getKeys(block: Block, key: enjinV1050.H256): Promise<enjinV1050.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1050.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1050.H256): AsyncIterable<enjinV1050.H256[]>
    getPairs(block: Block): Promise<[k: enjinV1050.H256, v: enjinV1050.Listing | undefined][]>
    getPairs(block: Block, key: enjinV1050.H256): Promise<[k: enjinV1050.H256, v: enjinV1050.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1050.H256, v: enjinV1050.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1050.H256
    ): AsyncIterable<[k: enjinV1050.H256, v: enjinV1050.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsV110 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v110.H256): Promise<v110.Listing | undefined>
    getMany(block: Block, keys: v110.H256[]): Promise<(v110.Listing | undefined)[]>
    getKeys(block: Block): Promise<v110.H256[]>
    getKeys(block: Block, key: v110.H256): Promise<v110.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.H256): AsyncIterable<v110.H256[]>
    getPairs(block: Block): Promise<[k: v110.H256, v: v110.Listing | undefined][]>
    getPairs(block: Block, key: v110.H256): Promise<[k: v110.H256, v: v110.Listing | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v110.H256, v: v110.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v110.H256
    ): AsyncIterable<[k: v110.H256, v: v110.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.H256): Promise<v1030.Listing | undefined>
    getMany(block: Block, keys: v1030.H256[]): Promise<(v1030.Listing | undefined)[]>
    getKeys(block: Block): Promise<v1030.H256[]>
    getKeys(block: Block, key: v1030.H256): Promise<v1030.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.H256): AsyncIterable<v1030.H256[]>
    getPairs(block: Block): Promise<[k: v1030.H256, v: v1030.Listing | undefined][]>
    getPairs(block: Block, key: v1030.H256): Promise<[k: v1030.H256, v: v1030.Listing | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1030.H256, v: v1030.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.H256
    ): AsyncIterable<[k: v1030.H256, v: v1030.Listing | undefined][]>
}

/**
 *  Listings by ID
 */
export interface ListingsV1031 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1031.H256): Promise<v1031.Listing | undefined>
    getMany(block: Block, keys: v1031.H256[]): Promise<(v1031.Listing | undefined)[]>
    getKeys(block: Block): Promise<v1031.H256[]>
    getKeys(block: Block, key: v1031.H256): Promise<v1031.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1031.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1031.H256): AsyncIterable<v1031.H256[]>
    getPairs(block: Block): Promise<[k: v1031.H256, v: v1031.Listing | undefined][]>
    getPairs(block: Block, key: v1031.H256): Promise<[k: v1031.H256, v: v1031.Listing | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1031.H256, v: v1031.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1031.H256
    ): AsyncIterable<[k: v1031.H256, v: v1031.Listing | undefined][]>
}

/**
 *  Listings by ID (real storage)
 */
export interface ListingsV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.H256): Promise<v1050.Listing | undefined>
    getMany(block: Block, keys: v1050.H256[]): Promise<(v1050.Listing | undefined)[]>
    getKeys(block: Block): Promise<v1050.H256[]>
    getKeys(block: Block, key: v1050.H256): Promise<v1050.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1050.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1050.H256): AsyncIterable<v1050.H256[]>
    getPairs(block: Block): Promise<[k: v1050.H256, v: v1050.Listing | undefined][]>
    getPairs(block: Block, key: v1050.H256): Promise<[k: v1050.H256, v: v1050.Listing | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1050.H256, v: v1050.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1050.H256
    ): AsyncIterable<[k: v1050.H256, v: v1050.Listing | undefined][]>
}

/**
 *  Listings by ID (real storage)
 */
export interface ListingsV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1060.H256): Promise<v1060.Listing | undefined>
    getMany(block: Block, keys: v1060.H256[]): Promise<(v1060.Listing | undefined)[]>
    getKeys(block: Block): Promise<v1060.H256[]>
    getKeys(block: Block, key: v1060.H256): Promise<v1060.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.H256): AsyncIterable<v1060.H256[]>
    getPairs(block: Block): Promise<[k: v1060.H256, v: v1060.Listing | undefined][]>
    getPairs(block: Block, key: v1060.H256): Promise<[k: v1060.H256, v: v1060.Listing | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1060.H256, v: v1060.Listing | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.H256
    ): AsyncIterable<[k: v1060.H256, v: v1060.Listing | undefined][]>
}

export const counterOffers = {
    /**
     *  Counter offers by listing id and account
     */
    matrixEnjinV1012: new StorageType(
        'Marketplace.CounterOffers',
        'Optional',
        [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.CounterOffer
    ) as CounterOffersMatrixEnjinV1012,
}

/**
 *  Counter offers by listing id and account
 */
export interface CounterOffersMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixEnjinV1012.H256,
        key2: matrixEnjinV1012.AccountId32
    ): Promise<matrixEnjinV1012.CounterOffer | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]
    ): Promise<(matrixEnjinV1012.CounterOffer | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV1012.H256): Promise<[matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1012.H256,
        key2: matrixEnjinV1012.AccountId32
    ): Promise<[matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.H256
    ): AsyncIterable<[matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.H256,
        key2: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.CounterOffer | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.H256
    ): Promise<
        [k: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.CounterOffer | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1012.H256,
        key2: matrixEnjinV1012.AccountId32
    ): Promise<
        [k: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.CounterOffer | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.CounterOffer | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.H256
    ): AsyncIterable<
        [k: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.CounterOffer | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1012.H256,
        key2: matrixEnjinV1012.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV1012.H256, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.CounterOffer | undefined][]
    >
}

export const nextListingIdInput = {
    /**
     *  Used to generate the next listing id. Increments by one every time a listing is created.
     */
    matrixEnjinV1012: new StorageType(
        'Marketplace.NextListingIdInput',
        'Default',
        [],
        sts.bigint()
    ) as NextListingIdInputMatrixEnjinV1012,
}

/**
 *  Used to generate the next listing id. Increments by one every time a listing is created.
 */
export interface NextListingIdInputMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const pendingListingIds = {
    /**
     *  Listing ids that will be processed in on idle
     */
    matrixEnjinV1012: new StorageType(
        'Marketplace.PendingListingIds',
        'Default',
        [],
        sts.array(() => matrixEnjinV1012.H256)
    ) as PendingListingIdsMatrixEnjinV1012,
}

/**
 *  Listing ids that will be processed in on idle
 */
export interface PendingListingIdsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.H256[]
    get(block: Block): Promise<matrixEnjinV1012.H256[] | undefined>
}

export const pendingActions = {
    /**
     *  Actions that will be processed in on idle
     */
    matrixEnjinV1022: new StorageType(
        'Marketplace.PendingActions',
        'Default',
        [],
        sts.array(() => matrixEnjinV1022.PendingAction)
    ) as PendingActionsMatrixEnjinV1022,
}

/**
 *  Actions that will be processed in on idle
 */
export interface PendingActionsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1022.PendingAction[]
    get(block: Block): Promise<matrixEnjinV1022.PendingAction[] | undefined>
}

export const whitelistedAccounts = {
    matrixEnjinV1022: new StorageType(
        'Marketplace.WhitelistedAccounts',
        'Optional',
        [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32],
        matrixEnjinV1022.WhitelistedAccount
    ) as WhitelistedAccountsMatrixEnjinV1022,
}

export interface WhitelistedAccountsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: matrixEnjinV1022.H256,
        key2: matrixEnjinV1022.AccountId32
    ): Promise<matrixEnjinV1022.WhitelistedAccount | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]
    ): Promise<(matrixEnjinV1022.WhitelistedAccount | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]>
    getKeys(block: Block, key1: matrixEnjinV1022.H256): Promise<[matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV1022.H256,
        key2: matrixEnjinV1022.AccountId32
    ): Promise<[matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1022.H256
    ): AsyncIterable<[matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1022.H256,
        key2: matrixEnjinV1022.AccountId32
    ): AsyncIterable<[matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<
        [k: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.WhitelistedAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1022.H256
    ): Promise<
        [k: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.WhitelistedAccount | undefined][]
    >
    getPairs(
        block: Block,
        key1: matrixEnjinV1022.H256,
        key2: matrixEnjinV1022.AccountId32
    ): Promise<
        [k: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.WhitelistedAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.WhitelistedAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1022.H256
    ): AsyncIterable<
        [k: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.WhitelistedAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV1022.H256,
        key2: matrixEnjinV1022.AccountId32
    ): AsyncIterable<
        [k: [matrixEnjinV1022.H256, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.WhitelistedAccount | undefined][]
    >
}

export const upgradeBlockNumber = {
    /**
     *  The block number that the upgrade took place on
     */
    matrixEnjinV1022: new StorageType(
        'Marketplace.UpgradeBlockNumber',
        'Optional',
        [],
        sts.number()
    ) as UpgradeBlockNumberMatrixEnjinV1022,
}

/**
 *  The block number that the upgrade took place on
 */
export interface UpgradeBlockNumberMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const listingIdsByMakeAsset = {
    /**
     *  Listing Ids by make asset's collection id and token id
     */
    matrixV500: new StorageType(
        'Marketplace.ListingIdsByMakeAsset',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV500.H256
    ) as ListingIdsByMakeAssetMatrixV500,
}

/**
 *  Listing Ids by make asset's collection id and token id
 */
export interface ListingIdsByMakeAssetMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV500.H256 | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV500.H256 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
}

export const listingIdsByTakeAsset = {
    /**
     *  Listing Ids by take asset's collection id and token id
     */
    matrixV500: new StorageType(
        'Marketplace.ListingIdsByTakeAsset',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV500.H256
    ) as ListingIdsByTakeAssetMatrixV500,
}

/**
 *  Listing Ids by take asset's collection id and token id
 */
export interface ListingIdsByTakeAssetMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV500.H256 | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV500.H256 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.H256 | undefined][]>
}

export const listingIdsByAccountId = {
    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    matrixV500: new StorageType(
        'Marketplace.ListingIdsByAccountId',
        'Optional',
        [matrixV500.AccountId32, matrixV500.H256],
        sts.unit()
    ) as ListingIdsByAccountIdMatrixV500,
}

/**
 *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
 */
export interface ListingIdsByAccountIdMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixV500.AccountId32, key2: matrixV500.H256): Promise<null | undefined>
    getMany(block: Block, keys: [matrixV500.AccountId32, matrixV500.H256][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[matrixV500.AccountId32, matrixV500.H256][]>
    getKeys(block: Block, key1: matrixV500.AccountId32): Promise<[matrixV500.AccountId32, matrixV500.H256][]>
    getKeys(
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.H256
    ): Promise<[matrixV500.AccountId32, matrixV500.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV500.AccountId32, matrixV500.H256][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32
    ): AsyncIterable<[matrixV500.AccountId32, matrixV500.H256][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.H256
    ): AsyncIterable<[matrixV500.AccountId32, matrixV500.H256][]>
    getPairs(block: Block): Promise<[k: [matrixV500.AccountId32, matrixV500.H256], v: null | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV500.AccountId32
    ): Promise<[k: [matrixV500.AccountId32, matrixV500.H256], v: null | undefined][]>
    getPairs(
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.H256
    ): Promise<[k: [matrixV500.AccountId32, matrixV500.H256], v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV500.AccountId32, matrixV500.H256], v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32
    ): AsyncIterable<[k: [matrixV500.AccountId32, matrixV500.H256], v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixV500.AccountId32,
        key2: matrixV500.H256
    ): AsyncIterable<[k: [matrixV500.AccountId32, matrixV500.H256], v: null | undefined][]>
}
