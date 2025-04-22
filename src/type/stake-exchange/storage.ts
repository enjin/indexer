import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v101 from '../v101'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'

export const liquidityConfigs = {
    /**
     *  Mapping of LP accounts to their configuration
     */
    enjinV100: new StorageType(
        'StakeExchange.LiquidityConfigs',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.LiquidityAccountConfig
    ) as LiquidityConfigsEnjinV100,
}

/**
 *  Mapping of LP accounts to their configuration
 */
export interface LiquidityConfigsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.LiquidityAccountConfig | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.LiquidityAccountConfig | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.LiquidityAccountConfig | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.LiquidityAccountConfig | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.LiquidityAccountConfig | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.LiquidityAccountConfig | undefined][]>
}

export const offers = {
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV100: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], enjinV100.Offer) as OffersEnjinV100,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV120: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], enjinV120.Offer) as OffersEnjinV120,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV1021: new StorageType(
        'StakeExchange.Offers',
        'Optional',
        [sts.bigint()],
        enjinV1021.Offer
    ) as OffersEnjinV1021,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    enjinV1023: new StorageType(
        'StakeExchange.Offers',
        'Optional',
        [sts.bigint()],
        enjinV1023.Offer
    ) as OffersEnjinV1023,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v100: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], v100.Offer) as OffersV100,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v101: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], v101.Offer) as OffersV101,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v120: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], v120.Offer) as OffersV120,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v1021: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], v1021.Offer) as OffersV1021,
    /**
     *  Mapping of LPAccountId to their active offer
     */
    v1023: new StorageType('StakeExchange.Offers', 'Optional', [sts.bigint()], v1023.Offer) as OffersV1023,
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV100.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV100.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV100.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV100.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV100.Offer | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV100.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersEnjinV120 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV120.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV120.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV120.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV120.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV120.Offer | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV120.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersEnjinV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV1021.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV1021.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV1021.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV1021.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV1021.Offer | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV1021.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersEnjinV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV1023.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV1023.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV1023.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV1023.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV1023.Offer | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV1023.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v100.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v100.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v100.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v100.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v100.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: v100.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v101.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v101.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v101.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v101.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v101.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: v101.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersV120 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v120.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v120.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v120.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v120.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v120.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: v120.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v1021.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v1021.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v1021.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v1021.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v1021.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: v1021.Offer | undefined][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface OffersV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v1023.Offer | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v1023.Offer | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v1023.Offer | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v1023.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v1023.Offer | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: v1023.Offer | undefined][]>
}

export const nextOfferId = {
    /**
     *  Value to use for Next offer Id
     */
    enjinV100: new StorageType('StakeExchange.NextOfferId', 'Default', [], sts.bigint()) as NextOfferIdEnjinV100,
}

/**
 *  Value to use for Next offer Id
 */
export interface NextOfferIdEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}
