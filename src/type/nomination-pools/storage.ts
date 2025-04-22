import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v101 from '../v101'
import * as v102 from '../v102'
import * as v103 from '../v103'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as v106 from '../v106'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as enjinV1022 from '../enjinV1022'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const minJoinBond = {
    /**
     *  Minimum amount to bond to join a pool.
     */
    enjinV100: new StorageType('NominationPools.MinJoinBond', 'Default', [], sts.bigint()) as MinJoinBondEnjinV100,
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface MinJoinBondEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const minCreateBond = {
    /**
     *  Minimum bond required to create a pool.
     *
     *  This is the amount that the pool creator must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     *
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    enjinV100: new StorageType('NominationPools.MinCreateBond', 'Default', [], sts.bigint()) as MinCreateBondEnjinV100,
}

/**
 *  Minimum bond required to create a pool.
 *
 *  This is the amount that the pool creator must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 *
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface MinCreateBondEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const poolMembers = {
    /**
     *  Active members.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new StorageType(
        'NominationPools.PoolMembers',
        'Optional',
        [sts.number(), enjinV100.AccountId32],
        enjinV100.PoolMember
    ) as PoolMembersEnjinV100,
}

/**
 *  Active members.
 *
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PoolMembersEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<enjinV100.PoolMember | undefined>
    getMany(block: Block, keys: [number, enjinV100.AccountId32][]): Promise<(enjinV100.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV100.AccountId32): Promise<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV100.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[number, enjinV100.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV100.AccountId32], v: enjinV100.PoolMember | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV100.AccountId32], v: enjinV100.PoolMember | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): Promise<[k: [number, enjinV100.AccountId32], v: enjinV100.PoolMember | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV100.AccountId32], v: enjinV100.PoolMember | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV100.AccountId32], v: enjinV100.PoolMember | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV100.AccountId32
    ): AsyncIterable<[k: [number, enjinV100.AccountId32], v: enjinV100.PoolMember | undefined][]>
}

export const bondedPools = {
    /**
     *  Storage for bonded pools.
     */
    enjinV100: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        enjinV100.BondedPoolInner
    ) as BondedPoolsEnjinV100,
    /**
     *  Storage for bonded pools.
     */
    enjinV101: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        enjinV101.BondedPoolInner
    ) as BondedPoolsEnjinV101,
    /**
     *  Storage for bonded pools.
     */
    enjinV110: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        enjinV110.BondedPoolInner
    ) as BondedPoolsEnjinV110,
    /**
     *  Storage for bonded pools.
     */
    enjinV1023: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        enjinV1023.BondedPoolInner
    ) as BondedPoolsEnjinV1023,
    /**
     *  Storage for bonded pools.
     */
    v100: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v100.BondedPoolInner
    ) as BondedPoolsV100,
    /**
     *  Storage for bonded pools.
     */
    v101: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v101.BondedPoolInner
    ) as BondedPoolsV101,
    /**
     *  Storage for bonded pools.
     */
    v102: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v102.BondedPoolInner
    ) as BondedPoolsV102,
    /**
     *  Storage for bonded pools.
     */
    v103: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v103.BondedPoolInner
    ) as BondedPoolsV103,
    /**
     *  Storage for bonded pools.
     */
    v104: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v104.BondedPoolInner
    ) as BondedPoolsV104,
    /**
     *  Storage for bonded pools.
     */
    v105: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v105.BondedPoolInner
    ) as BondedPoolsV105,
    /**
     *  Storage for bonded pools.
     */
    v110: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v110.BondedPoolInner
    ) as BondedPoolsV110,
    /**
     *  Storage for bonded pools.
     */
    v1023: new StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [sts.number()],
        v1023.BondedPoolInner
    ) as BondedPoolsV1023,
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV100.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV101.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV101.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV101.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV101.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV101.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV101.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsEnjinV110 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV110.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV110.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV110.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV110.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV110.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV110.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsEnjinV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1023.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1023.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1023.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1023.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: enjinV1023.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1023.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v100.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v100.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v100.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v100.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v100.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v100.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v101.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v101.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v101.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v101.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v101.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v101.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV102 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v102.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v102.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v102.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v102.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v102.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v102.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV103 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v103.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v103.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v103.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v103.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v103.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v103.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV104 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v104.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v104.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v104.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v104.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v104.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v104.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV105 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v105.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v105.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v105.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v105.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v105.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v105.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV110 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v110.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v110.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v110.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v110.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v110.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v110.BondedPoolInner | undefined][]>
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1023.BondedPoolInner | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1023.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1023.BondedPoolInner | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1023.BondedPoolInner | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1023.BondedPoolInner | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1023.BondedPoolInner | undefined][]>
}

export const counterForBondedPools = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType(
        'NominationPools.CounterForBondedPools',
        'Default',
        [],
        sts.number()
    ) as CounterForBondedPoolsEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForBondedPoolsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const subPoolsStorage = {
    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    enjinV100: new StorageType(
        'NominationPools.SubPoolsStorage',
        'Optional',
        [sts.number()],
        enjinV100.SubPools
    ) as SubPoolsStorageEnjinV100,
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
 *  hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface SubPoolsStorageEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.SubPools | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.SubPools | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.SubPools | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.SubPools | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.SubPools | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.SubPools | undefined][]>
}

export const counterForSubPoolsStorage = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType(
        'NominationPools.CounterForSubPoolsStorage',
        'Default',
        [],
        sts.number()
    ) as CounterForSubPoolsStorageEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForSubPoolsStorageEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const nextPoolId = {
    /**
     *  The next pool id that will be used in [`create`](Pallet::create). Increments by one with
     *  each pool created.
     */
    enjinV100: new StorageType('NominationPools.NextPoolId', 'Default', [], sts.number()) as NextPoolIdEnjinV100,
}

/**
 *  The next pool id that will be used in [`create`](Pallet::create). Increments by one with
 *  each pool created.
 */
export interface NextPoolIdEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const reversePoolIdLookup = {
    /**
     *  A reverse lookup from the pool's account id to its id.
     *
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    enjinV100: new StorageType(
        'NominationPools.ReversePoolIdLookup',
        'Optional',
        [enjinV100.AccountId32],
        sts.number()
    ) as ReversePoolIdLookupEnjinV100,
}

/**
 *  A reverse lookup from the pool's account id to its id.
 *
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface ReversePoolIdLookupEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<number | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: number | undefined][]>
    getPairs(block: Block, key: enjinV100.AccountId32): Promise<[k: enjinV100.AccountId32, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.AccountId32, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: number | undefined][]>
}

export const counterForReversePoolIdLookup = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new StorageType(
        'NominationPools.CounterForReversePoolIdLookup',
        'Default',
        [],
        sts.number()
    ) as CounterForReversePoolIdLookupEnjinV100,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForReversePoolIdLookupEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const usedPoolTokenIds = {
    /**
     *  A reverse lookup from the token_id to pool_id.
     *
     *  This is used for making sure the same token is not used to create multiple pools
     */
    enjinV100: new StorageType(
        'NominationPools.UsedPoolTokenIds',
        'Optional',
        [sts.bigint()],
        sts.number()
    ) as UsedPoolTokenIdsEnjinV100,
}

/**
 *  A reverse lookup from the token_id to pool_id.
 *
 *  This is used for making sure the same token is not used to create multiple pools
 */
export interface UsedPoolTokenIdsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<number | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: number | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: number | undefined][]>
}

export const globalMaxCommission = {
    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     */
    enjinV100: new StorageType(
        'NominationPools.GlobalMaxCommission',
        'Optional',
        [],
        enjinV100.Perbill
    ) as GlobalMaxCommissionEnjinV100,
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 */
export interface GlobalMaxCommissionEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV100.Perbill | undefined>
}

export const unbondingMembers = {
    /**
     *  Pool Members who are Unbonding.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV101: new StorageType(
        'NominationPools.UnbondingMembers',
        'Optional',
        [sts.number(), enjinV101.AccountId32],
        enjinV101.PoolMember
    ) as UnbondingMembersEnjinV101,
}

/**
 *  Pool Members who are Unbonding.
 *
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface UnbondingMembersEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV101.AccountId32): Promise<enjinV101.PoolMember | undefined>
    getMany(block: Block, keys: [number, enjinV101.AccountId32][]): Promise<(enjinV101.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV101.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV101.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV101.AccountId32): Promise<[number, enjinV101.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV101.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV101.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): AsyncIterable<[number, enjinV101.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV101.AccountId32], v: enjinV101.PoolMember | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV101.AccountId32], v: enjinV101.PoolMember | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): Promise<[k: [number, enjinV101.AccountId32], v: enjinV101.PoolMember | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV101.AccountId32], v: enjinV101.PoolMember | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV101.AccountId32], v: enjinV101.PoolMember | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV101.AccountId32
    ): AsyncIterable<[k: [number, enjinV101.AccountId32], v: enjinV101.PoolMember | undefined][]>
}

export const stakingInformation = {
    /**
     *  The general staking parameters
     */
    enjinV101: new StorageType(
        'NominationPools.StakingInformation',
        'Optional',
        [],
        enjinV101.StakingInfo
    ) as StakingInformationEnjinV101,
    /**
     *  The general staking parameters
     */
    enjinV1032: new StorageType(
        'NominationPools.StakingInformation',
        'Optional',
        [],
        enjinV1032.StakingInfo
    ) as StakingInformationEnjinV1032,
    /**
     *  The general staking parameters
     */
    v105: new StorageType(
        'NominationPools.StakingInformation',
        'Optional',
        [],
        v105.StakingInfo
    ) as StakingInformationV105,
    /**
     *  The general staking parameters
     */
    v1030: new StorageType(
        'NominationPools.StakingInformation',
        'Optional',
        [],
        v1030.StakingInfo
    ) as StakingInformationV1030,
}

/**
 *  The general staking parameters
 */
export interface StakingInformationEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV101.StakingInfo | undefined>
}

/**
 *  The general staking parameters
 */
export interface StakingInformationEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV1032.StakingInfo | undefined>
}

/**
 *  The general staking parameters
 */
export interface StakingInformationV105 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v105.StakingInfo | undefined>
}

/**
 *  The general staking parameters
 */
export interface StakingInformationV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v1030.StakingInfo | undefined>
}

export const earlyBirdBonusInfo = {
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    enjinV101: new StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        enjinV101.EarlyBirdInfo
    ) as EarlyBirdBonusInfoEnjinV101,
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    enjinV1021: new StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        enjinV1021.EarlyBirdInfo
    ) as EarlyBirdBonusInfoEnjinV1021,
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    enjinV1023: new StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        enjinV1023.EarlyBirdInfo
    ) as EarlyBirdBonusInfoEnjinV1023,
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    v106: new StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        v106.EarlyBirdInfo
    ) as EarlyBirdBonusInfoV106,
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    v1021: new StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        v1021.EarlyBirdInfo
    ) as EarlyBirdBonusInfoV1021,
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    v1023: new StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        v1023.EarlyBirdInfo
    ) as EarlyBirdBonusInfoV1023,
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface EarlyBirdBonusInfoEnjinV101 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV101.EarlyBirdInfo
    get(block: Block): Promise<enjinV101.EarlyBirdInfo | undefined>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface EarlyBirdBonusInfoEnjinV1021 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1021.EarlyBirdInfo
    get(block: Block): Promise<enjinV1021.EarlyBirdInfo | undefined>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface EarlyBirdBonusInfoEnjinV1023 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1023.EarlyBirdInfo
    get(block: Block): Promise<enjinV1023.EarlyBirdInfo | undefined>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface EarlyBirdBonusInfoV106 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v106.EarlyBirdInfo
    get(block: Block): Promise<v106.EarlyBirdInfo | undefined>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface EarlyBirdBonusInfoV1021 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1021.EarlyBirdInfo
    get(block: Block): Promise<v1021.EarlyBirdInfo | undefined>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface EarlyBirdBonusInfoV1023 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1023.EarlyBirdInfo
    get(block: Block): Promise<v1023.EarlyBirdInfo | undefined>
}

export const eraPayoutInfo = {
    /**
     *  Tracks payout information for an era
     */
    enjinV110: new StorageType(
        'NominationPools.EraPayoutInfo',
        'Default',
        [],
        enjinV110.EraPayout
    ) as EraPayoutInfoEnjinV110,
    /**
     *  Tracks payout information for an era
     */
    enjinV120: new StorageType(
        'NominationPools.EraPayoutInfo',
        'Default',
        [],
        enjinV120.EraPayout
    ) as EraPayoutInfoEnjinV120,
    /**
     *  Tracks payout information for an era
     */
    v110: new StorageType('NominationPools.EraPayoutInfo', 'Default', [], v110.EraPayout) as EraPayoutInfoV110,
    /**
     *  Tracks payout information for an era
     */
    v120: new StorageType('NominationPools.EraPayoutInfo', 'Default', [], v120.EraPayout) as EraPayoutInfoV120,
}

/**
 *  Tracks payout information for an era
 */
export interface EraPayoutInfoEnjinV110 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV110.EraPayout
    get(block: Block): Promise<enjinV110.EraPayout | undefined>
}

/**
 *  Tracks payout information for an era
 */
export interface EraPayoutInfoEnjinV120 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV120.EraPayout
    get(block: Block): Promise<enjinV120.EraPayout | undefined>
}

/**
 *  Tracks payout information for an era
 */
export interface EraPayoutInfoV110 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.EraPayout
    get(block: Block): Promise<v110.EraPayout | undefined>
}

/**
 *  Tracks payout information for an era
 */
export interface EraPayoutInfoV120 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v120.EraPayout
    get(block: Block): Promise<v120.EraPayout | undefined>
}

export const poolBonusInfos = {
    /**
     *  Storage for pool bonus info
     */
    enjinV1021: new StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [sts.number()],
        enjinV1021.PoolBonusInfo
    ) as PoolBonusInfosEnjinV1021,
    /**
     *  Storage for pool bonus info
     */
    enjinV1023: new StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [sts.number()],
        enjinV1023.PoolBonusInfo
    ) as PoolBonusInfosEnjinV1023,
    /**
     *  Storage for pool bonus info
     */
    v1021: new StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [sts.number()],
        v1021.PoolBonusInfo
    ) as PoolBonusInfosV1021,
    /**
     *  Storage for pool bonus info
     */
    v1023: new StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [sts.number()],
        v1023.PoolBonusInfo
    ) as PoolBonusInfosV1023,
}

/**
 *  Storage for pool bonus info
 */
export interface PoolBonusInfosEnjinV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1021.PoolBonusInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1021.PoolBonusInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1021.PoolBonusInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1021.PoolBonusInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV1021.PoolBonusInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1021.PoolBonusInfo | undefined][]>
}

/**
 *  Storage for pool bonus info
 */
export interface PoolBonusInfosEnjinV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1023.PoolBonusInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1023.PoolBonusInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1023.PoolBonusInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1023.PoolBonusInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV1023.PoolBonusInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1023.PoolBonusInfo | undefined][]>
}

/**
 *  Storage for pool bonus info
 */
export interface PoolBonusInfosV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1021.PoolBonusInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1021.PoolBonusInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1021.PoolBonusInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1021.PoolBonusInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1021.PoolBonusInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1021.PoolBonusInfo | undefined][]>
}

/**
 *  Storage for pool bonus info
 */
export interface PoolBonusInfosV1023 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<v1023.PoolBonusInfo | undefined>
    getMany(block: Block, keys: number[]): Promise<(v1023.PoolBonusInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: v1023.PoolBonusInfo | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: v1023.PoolBonusInfo | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: v1023.PoolBonusInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: v1023.PoolBonusInfo | undefined][]>
}

export const earlyBirdShares = {
    /**
     *  The percentage shares of pool users for early bird rewards
     */
    enjinV1022: new StorageType(
        'NominationPools.EarlyBirdShares',
        'Optional',
        [sts.number(), enjinV1022.AccountId32],
        enjinV1022.Perquintill
    ) as EarlyBirdSharesEnjinV1022,
}

/**
 *  The percentage shares of pool users for early bird rewards
 */
export interface EarlyBirdSharesEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: enjinV1022.AccountId32): Promise<enjinV1022.Perquintill | undefined>
    getMany(block: Block, keys: [number, enjinV1022.AccountId32][]): Promise<(enjinV1022.Perquintill | undefined)[]>
    getKeys(block: Block): Promise<[number, enjinV1022.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, enjinV1022.AccountId32][]>
    getKeys(block: Block, key1: number, key2: enjinV1022.AccountId32): Promise<[number, enjinV1022.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, enjinV1022.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, enjinV1022.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1022.AccountId32
    ): AsyncIterable<[number, enjinV1022.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>
    getPairs(
        block: Block,
        key1: number
    ): Promise<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>
    getPairs(
        block: Block,
        key1: number,
        key2: enjinV1022.AccountId32
    ): Promise<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number
    ): AsyncIterable<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: number,
        key2: enjinV1022.AccountId32
    ): AsyncIterable<[k: [number, enjinV1022.AccountId32], v: enjinV1022.Perquintill | undefined][]>
}

export const lastPoolId = {
    /**
     *  Ever increasing number of all pools created so far.
     */
    v100: new StorageType('NominationPools.LastPoolId', 'Default', [], sts.number()) as LastPoolIdV100,
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface LastPoolIdV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}
