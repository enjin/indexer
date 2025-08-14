import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v101 from '../v101'
import * as enjinV101 from '../enjinV101'
import * as v102 from '../v102'
import * as v106 from '../v106'
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1020 from '../matrixV1020'
import * as matrixV1021 from '../matrixV1021'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as v1030 from '../v1030'
import * as matrixV1030 from '../matrixV1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const tokenAccounts = {
    /**
     *  Accounts per token
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixEnjinV603.AccountId32],
        matrixEnjinV603.TokenAccount
    ) as TokenAccountsMatrixEnjinV603,
    /**
     *  Accounts per token
     */
    matrixEnjinV1012: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.TokenAccount
    ) as TokenAccountsMatrixEnjinV1012,
    /**
     *  Accounts per token (real storage)
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixEnjinV1022.AccountId32],
        matrixEnjinV1022.TokenAccount
    ) as TokenAccountsMatrixEnjinV1022,
    /**
     *  Accounts per token
     */
    matrixV500: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixV500.AccountId32],
        matrixV500.TokenAccount
    ) as TokenAccountsMatrixV500,
    /**
     *  Accounts per token
     */
    matrixV1010: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixV1010.AccountId32],
        matrixV1010.TokenAccount
    ) as TokenAccountsMatrixV1010,
    /**
     *  Accounts per token (real storage)
     */
    matrixV1020: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixV1020.AccountId32],
        matrixV1020.TokenAccount
    ) as TokenAccountsMatrixV1020,
    /**
     *  Accounts per token
     */
    enjinV100: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), enjinV100.AccountId32],
        enjinV100.TokenAccount
    ) as TokenAccountsEnjinV100,
    /**
     *  Accounts per token
     */
    enjinV1032: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), enjinV1032.AccountId32],
        enjinV1032.TokenAccount
    ) as TokenAccountsEnjinV1032,
    /**
     *  Accounts per token (real storage)
     */
    enjinV1050: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), enjinV1050.AccountId32],
        enjinV1050.TokenAccount
    ) as TokenAccountsEnjinV1050,
    /**
     *  Accounts per token
     */
    v100: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [v100.AccountId32, sts.bigint(), sts.bigint()],
        v100.TokenAccount
    ) as TokenAccountsV100,
    /**
     *  Accounts per token
     */
    v101: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), v101.AccountId32],
        v101.TokenAccount
    ) as TokenAccountsV101,
    /**
     *  Accounts per token
     */
    v1030: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), v1030.AccountId32],
        v1030.TokenAccount
    ) as TokenAccountsV1030,
    /**
     *  Accounts per token (real storage)
     */
    v1050: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), v1050.AccountId32],
        v1050.TokenAccount
    ) as TokenAccountsV1050,
    /**
     *  Accounts per token (real storage)
     */
    matrixV1030: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), matrixV1030.AccountId32],
        matrixV1030.TokenAccount
    ) as TokenAccountsMatrixV1030,
    /**
     *  Accounts per token (real storage)
     */
    v1060: new StorageType(
        'MultiTokens.TokenAccounts',
        'Optional',
        [sts.bigint(), sts.bigint(), v1060.AccountId32],
        v1060.TokenAccount
    ) as TokenAccountsV1060,
}

/**
 *  Accounts per token
 */
export interface TokenAccountsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV603.AccountId32
    ): Promise<matrixEnjinV603.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixEnjinV603.AccountId32][]
    ): Promise<(matrixEnjinV603.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV603.AccountId32
    ): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV603.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV603.AccountId32
    ): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1012.AccountId32
    ): Promise<matrixEnjinV1012.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixEnjinV1012.AccountId32][]
    ): Promise<(matrixEnjinV1012.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1012.AccountId32
    ): Promise<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixEnjinV1012.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1012.AccountId32
    ): Promise<[k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1012.AccountId32
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1012.AccountId32], v: matrixEnjinV1012.TokenAccount | undefined][]
    >
}

/**
 *  Accounts per token (real storage)
 */
export interface TokenAccountsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1022.AccountId32
    ): Promise<matrixEnjinV1022.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixEnjinV1022.AccountId32][]
    ): Promise<(matrixEnjinV1022.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1022.AccountId32
    ): Promise<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1022.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixEnjinV1022.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1022.AccountId32
    ): Promise<[k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixEnjinV1022.AccountId32
    ): AsyncIterable<
        [k: [bigint, bigint, matrixEnjinV1022.AccountId32], v: matrixEnjinV1022.TokenAccount | undefined][]
    >
}

/**
 *  Accounts per token
 */
export interface TokenAccountsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV500.AccountId32
    ): Promise<matrixV500.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixV500.AccountId32][]
    ): Promise<(matrixV500.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixV500.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixV500.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixV500.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV500.AccountId32
    ): Promise<[bigint, bigint, matrixV500.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixV500.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixV500.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixV500.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV500.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixV500.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV500.AccountId32
    ): Promise<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV500.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, matrixV500.AccountId32], v: matrixV500.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1010.AccountId32
    ): Promise<matrixV1010.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixV1010.AccountId32][]
    ): Promise<(matrixV1010.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1010.AccountId32
    ): Promise<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixV1010.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1010.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixV1010.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1010.AccountId32
    ): Promise<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1010.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, matrixV1010.AccountId32], v: matrixV1010.TokenAccount | undefined][]>
}

/**
 *  Accounts per token (real storage)
 */
export interface TokenAccountsMatrixV1020 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1020.AccountId32
    ): Promise<matrixV1020.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixV1020.AccountId32][]
    ): Promise<(matrixV1020.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1020.AccountId32
    ): Promise<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixV1020.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1020.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixV1020.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1020.AccountId32
    ): Promise<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1020.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, matrixV1020.AccountId32], v: matrixV1020.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV100.AccountId32
    ): Promise<enjinV100.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, enjinV100.AccountId32][]
    ): Promise<(enjinV100.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, enjinV100.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, enjinV100.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV100.AccountId32
    ): Promise<[bigint, bigint, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, enjinV100.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint, enjinV100.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, enjinV100.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV100.AccountId32
    ): AsyncIterable<[bigint, bigint, enjinV100.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV100.AccountId32
    ): Promise<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV100.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, enjinV100.AccountId32], v: enjinV100.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1032.AccountId32
    ): Promise<enjinV1032.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, enjinV1032.AccountId32][]
    ): Promise<(enjinV1032.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1032.AccountId32
    ): Promise<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, enjinV1032.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1032.AccountId32
    ): AsyncIterable<[bigint, bigint, enjinV1032.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1032.AccountId32
    ): Promise<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1032.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, enjinV1032.AccountId32], v: enjinV1032.TokenAccount | undefined][]>
}

/**
 *  Accounts per token (real storage)
 */
export interface TokenAccountsEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1050.AccountId32
    ): Promise<enjinV1050.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, enjinV1050.AccountId32][]
    ): Promise<(enjinV1050.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1050.AccountId32
    ): Promise<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, enjinV1050.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1050.AccountId32
    ): AsyncIterable<[bigint, bigint, enjinV1050.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1050.AccountId32
    ): Promise<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: enjinV1050.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, enjinV1050.AccountId32], v: enjinV1050.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v100.AccountId32, key2: bigint, key3: bigint): Promise<v100.TokenAccount | undefined>
    getMany(block: Block, keys: [v100.AccountId32, bigint, bigint][]): Promise<(v100.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[v100.AccountId32, bigint, bigint][]>
    getKeys(block: Block, key1: v100.AccountId32): Promise<[v100.AccountId32, bigint, bigint][]>
    getKeys(block: Block, key1: v100.AccountId32, key2: bigint): Promise<[v100.AccountId32, bigint, bigint][]>
    getKeys(
        block: Block,
        key1: v100.AccountId32,
        key2: bigint,
        key3: bigint
    ): Promise<[v100.AccountId32, bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v100.AccountId32, bigint, bigint][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32
    ): AsyncIterable<[v100.AccountId32, bigint, bigint][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32,
        key2: bigint
    ): AsyncIterable<[v100.AccountId32, bigint, bigint][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32,
        key2: bigint,
        key3: bigint
    ): AsyncIterable<[v100.AccountId32, bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v100.AccountId32
    ): Promise<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v100.AccountId32,
        key2: bigint
    ): Promise<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: v100.AccountId32,
        key2: bigint,
        key3: bigint
    ): Promise<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32
    ): AsyncIterable<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32,
        key2: bigint
    ): AsyncIterable<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: v100.AccountId32,
        key2: bigint,
        key3: bigint
    ): AsyncIterable<[k: [v100.AccountId32, bigint, bigint], v: v100.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint, key3: v101.AccountId32): Promise<v101.TokenAccount | undefined>
    getMany(block: Block, keys: [bigint, bigint, v101.AccountId32][]): Promise<(v101.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, v101.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, v101.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, v101.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v101.AccountId32
    ): Promise<[bigint, bigint, v101.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, v101.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint, v101.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, v101.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v101.AccountId32
    ): AsyncIterable<[bigint, bigint, v101.AccountId32][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v101.AccountId32
    ): Promise<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v101.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, v101.AccountId32], v: v101.TokenAccount | undefined][]>
}

/**
 *  Accounts per token
 */
export interface TokenAccountsV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint, key3: v1030.AccountId32): Promise<v1030.TokenAccount | undefined>
    getMany(block: Block, keys: [bigint, bigint, v1030.AccountId32][]): Promise<(v1030.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, v1030.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, v1030.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, v1030.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1030.AccountId32
    ): Promise<[bigint, bigint, v1030.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, v1030.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint, v1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, v1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1030.AccountId32
    ): AsyncIterable<[bigint, bigint, v1030.AccountId32][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1030.AccountId32
    ): Promise<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1030.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, v1030.AccountId32], v: v1030.TokenAccount | undefined][]>
}

/**
 *  Accounts per token (real storage)
 */
export interface TokenAccountsV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint, key3: v1050.AccountId32): Promise<v1050.TokenAccount | undefined>
    getMany(block: Block, keys: [bigint, bigint, v1050.AccountId32][]): Promise<(v1050.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, v1050.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, v1050.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, v1050.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1050.AccountId32
    ): Promise<[bigint, bigint, v1050.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, v1050.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint, v1050.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, v1050.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1050.AccountId32
    ): AsyncIterable<[bigint, bigint, v1050.AccountId32][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1050.AccountId32
    ): Promise<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1050.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, v1050.AccountId32], v: v1050.TokenAccount | undefined][]>
}

/**
 *  Accounts per token (real storage)
 */
export interface TokenAccountsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1030.AccountId32
    ): Promise<matrixV1030.TokenAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint, matrixV1030.AccountId32][]
    ): Promise<(matrixV1030.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1030.AccountId32
    ): Promise<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, matrixV1030.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1030.AccountId32
    ): AsyncIterable<[bigint, bigint, matrixV1030.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1030.AccountId32
    ): Promise<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: matrixV1030.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, matrixV1030.AccountId32], v: matrixV1030.TokenAccount | undefined][]>
}

/**
 *  Accounts per token (real storage)
 */
export interface TokenAccountsV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint, key3: v1060.AccountId32): Promise<v1060.TokenAccount | undefined>
    getMany(block: Block, keys: [bigint, bigint, v1060.AccountId32][]): Promise<(v1060.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, v1060.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, v1060.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, v1060.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1060.AccountId32
    ): Promise<[bigint, bigint, v1060.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, v1060.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint, v1060.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[bigint, bigint, v1060.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1060.AccountId32
    ): AsyncIterable<[bigint, bigint, v1060.AccountId32][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1060.AccountId32
    ): Promise<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint,
        key3: v1060.AccountId32
    ): AsyncIterable<[k: [bigint, bigint, v1060.AccountId32], v: v1060.TokenAccount | undefined][]>
}

export const collections = {
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixEnjinV603.Collection
    ) as CollectionsMatrixEnjinV603,
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV1012: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixEnjinV1012.Collection
    ) as CollectionsMatrixEnjinV1012,
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixEnjinV1022.Collection
    ) as CollectionsMatrixEnjinV1022,
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV500: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixV500.Collection
    ) as CollectionsMatrixV500,
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV1010: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixV1010.Collection
    ) as CollectionsMatrixV1010,
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV1020: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixV1020.Collection
    ) as CollectionsMatrixV1020,
    /**
     *  The collections in existence and their ownership details.
     */
    enjinV100: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        enjinV100.Collection
    ) as CollectionsEnjinV100,
    /**
     *  The collections in existence and their ownership details.
     */
    enjinV1032: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        enjinV1032.Collection
    ) as CollectionsEnjinV1032,
    /**
     *  The collections in existence and their ownership details.
     */
    enjinV1050: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        enjinV1050.Collection
    ) as CollectionsEnjinV1050,
    /**
     *  The collections in existence and their ownership details.
     */
    v100: new StorageType('MultiTokens.Collections', 'Optional', [sts.bigint()], v100.Collection) as CollectionsV100,
    /**
     *  The collections in existence and their ownership details.
     */
    v1030: new StorageType('MultiTokens.Collections', 'Optional', [sts.bigint()], v1030.Collection) as CollectionsV1030,
    /**
     *  The collections in existence and their ownership details.
     */
    v1050: new StorageType('MultiTokens.Collections', 'Optional', [sts.bigint()], v1050.Collection) as CollectionsV1050,
    /**
     *  The collections in existence and their ownership details.
     */
    matrixV1030: new StorageType(
        'MultiTokens.Collections',
        'Optional',
        [sts.bigint()],
        matrixV1030.Collection
    ) as CollectionsMatrixV1030,
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixEnjinV603.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV603.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixEnjinV603.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixEnjinV603.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixEnjinV603.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixEnjinV603.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixEnjinV1012.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV1012.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixEnjinV1012.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixEnjinV1012.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1012.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1012.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixEnjinV1022.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV1022.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixEnjinV1022.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixEnjinV1022.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1022.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1022.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixV500.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixV500.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixV500.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixV500.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: matrixV500.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixV500.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixV1010.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixV1010.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixV1010.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixV1010.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: matrixV1010.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixV1010.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixV1020 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixV1020.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixV1020.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixV1020.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixV1020.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: matrixV1020.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixV1020.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV100.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV100.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV100.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV100.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV100.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV100.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV1032.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV1032.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV1032.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV1032.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV1032.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV1032.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV1050.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV1050.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV1050.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV1050.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV1050.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV1050.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v100.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v100.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v100.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v100.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v100.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v100.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v1030.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v1030.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v1030.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v1030.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v1030.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v1030.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v1050.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v1050.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v1050.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v1050.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v1050.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v1050.Collection | undefined][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixV1030.Collection | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixV1030.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixV1030.Collection | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixV1030.Collection | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: matrixV1030.Collection | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixV1030.Collection | undefined][]>
}

export const tokens = {
    /**
     *  Tokens storage
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixEnjinV603.Token
    ) as TokensMatrixEnjinV603,
    /**
     *  Tokens storage
     */
    matrixEnjinV1012: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixEnjinV1012.Token
    ) as TokensMatrixEnjinV1012,
    /**
     *  Tokens storage
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixEnjinV1022.Token
    ) as TokensMatrixEnjinV1022,
    /**
     *  Tokens storage
     */
    matrixV500: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV500.Token
    ) as TokensMatrixV500,
    /**
     *  Tokens storage
     */
    matrixV600: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV600.Token
    ) as TokensMatrixV600,
    /**
     *  Tokens storage
     */
    matrixV1010: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV1010.Token
    ) as TokensMatrixV1010,
    /**
     *  Tokens storage
     */
    matrixV1020: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV1020.Token
    ) as TokensMatrixV1020,
    /**
     *  Tokens storage
     */
    enjinV100: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        enjinV100.Token
    ) as TokensEnjinV100,
    /**
     *  Tokens storage
     */
    enjinV1032: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        enjinV1032.Token
    ) as TokensEnjinV1032,
    /**
     *  Tokens storage
     */
    enjinV1050: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        enjinV1050.Token
    ) as TokensEnjinV1050,
    /**
     *  Tokens storage
     */
    v100: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], v100.Token) as TokensV100,
    /**
     *  Tokens storage
     */
    v102: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], v102.Token) as TokensV102,
    /**
     *  Tokens storage
     */
    v1030: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], v1030.Token) as TokensV1030,
    /**
     *  Tokens storage
     */
    v1050: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], v1050.Token) as TokensV1050,
    /**
     *  Tokens storage
     */
    matrixV1030: new StorageType(
        'MultiTokens.Tokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixV1030.Token
    ) as TokensMatrixV1030,
}

/**
 *  Tokens storage
 */
export interface TokensMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixEnjinV603.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixEnjinV603.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixEnjinV1012.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixEnjinV1012.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixEnjinV1012.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV1012.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixEnjinV1012.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV1012.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV1012.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV1012.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixEnjinV1022.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixEnjinV1022.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixEnjinV1022.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV1022.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixEnjinV1022.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV1022.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV1022.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV1022.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV500.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV500.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV500.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV500.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixV500.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV500.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixV600 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV600.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV600.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV600.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV600.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixV600.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV600.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV600.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV600.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV1010.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV1010.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV1010.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV1010.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixV1010.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1010.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1010.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1010.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixV1020 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV1020.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV1020.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV1020.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV1020.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixV1020.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1020.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1020.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1020.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<enjinV100.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(enjinV100.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: enjinV100.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: enjinV100.Token | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: enjinV100.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV100.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV100.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV100.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<enjinV1032.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(enjinV1032.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: enjinV1032.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: enjinV1032.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: enjinV1032.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV1032.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV1032.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV1032.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<enjinV1050.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(enjinV1050.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: enjinV1050.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: enjinV1050.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: enjinV1050.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV1050.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV1050.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: enjinV1050.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<v100.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v100.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: v100.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: v100.Token | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v100.Token | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: v100.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v100.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v100.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensV102 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<v102.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v102.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: v102.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: v102.Token | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v102.Token | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: v102.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v102.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v102.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<v1030.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v1030.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: v1030.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: v1030.Token | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v1030.Token | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: v1030.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v1030.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v1030.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<v1050.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v1050.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: v1050.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: v1050.Token | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v1050.Token | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: v1050.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v1050.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: v1050.Token | undefined][]>
}

/**
 *  Tokens storage
 */
export interface TokensMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixV1030.Token | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixV1030.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixV1030.Token | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixV1030.Token | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixV1030.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1030.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1030.Token | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixV1030.Token | undefined][]>
}

export const nextCollectionId = {
    /**
     *  Sequencer for collectionID generators.
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.NextCollectionId',
        'Default',
        [],
        sts.bigint()
    ) as NextCollectionIdMatrixEnjinV603,
}

/**
 *  Sequencer for collectionID generators.
 */
export interface NextCollectionIdMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const collectionAccounts = {
    /**
     *  Stores information for an account per collection
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.CollectionAccounts',
        'Optional',
        [sts.bigint(), matrixEnjinV603.AccountId32],
        matrixEnjinV603.CollectionAccount
    ) as CollectionAccountsMatrixEnjinV603,
}

/**
 *  Stores information for an account per collection
 */
export interface CollectionAccountsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: matrixEnjinV603.AccountId32
    ): Promise<matrixEnjinV603.CollectionAccount | undefined>
    getMany(
        block: Block,
        keys: [bigint, matrixEnjinV603.AccountId32][]
    ): Promise<(matrixEnjinV603.CollectionAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, matrixEnjinV603.AccountId32][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: matrixEnjinV603.AccountId32
    ): Promise<[bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: matrixEnjinV603.AccountId32
    ): AsyncIterable<[bigint, matrixEnjinV603.AccountId32][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.CollectionAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.CollectionAccount | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: matrixEnjinV603.AccountId32
    ): Promise<[k: [bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.CollectionAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.CollectionAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.CollectionAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: [bigint, matrixEnjinV603.AccountId32], v: matrixEnjinV603.CollectionAccount | undefined][]>
}

export const attributes = {
    /**
     *  Metadata of collections and tokens.
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        matrixEnjinV603.Attribute
    ) as AttributesMatrixEnjinV603,
    /**
     *  Metadata of collections and tokens. Contains the attribute's value and the storage deposit.
     */
    matrixEnjinV1012: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        matrixEnjinV1012.Attribute
    ) as AttributesMatrixEnjinV1012,
    /**
     *  Metadata of collections and tokens.
     */
    matrixV500: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        matrixV500.Attribute
    ) as AttributesMatrixV500,
    /**
     *  Metadata of collections and tokens.
     */
    matrixV1010: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        matrixV1010.Attribute
    ) as AttributesMatrixV1010,
    /**
     *  Metadata of collections and tokens.
     */
    enjinV100: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        enjinV100.Attribute
    ) as AttributesEnjinV100,
    /**
     *  Metadata of collections and tokens. Contains the attribute's value and the storage deposit.
     */
    enjinV1032: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        enjinV1032.Attribute
    ) as AttributesEnjinV1032,
    /**
     *  Metadata of collections and tokens.
     */
    v100: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        v100.Attribute
    ) as AttributesV100,
    /**
     *  Metadata of collections and tokens.
     */
    v1030: new StorageType(
        'MultiTokens.Attributes',
        'Optional',
        [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()],
        v1030.Attribute
    ) as AttributesV1030,
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<matrixEnjinV603.Attribute | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint | undefined, Bytes][]
    ): Promise<(matrixEnjinV603.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV603.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens. Contains the attribute's value and the storage deposit.
 */
export interface AttributesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<matrixEnjinV1012.Attribute | undefined>
    getMany(
        block: Block,
        keys: [bigint, bigint | undefined, Bytes][]
    ): Promise<(matrixEnjinV1012.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(
        block: Block
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixEnjinV1012.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint | undefined, key3: Bytes): Promise<matrixV500.Attribute | undefined>
    getMany(block: Block, keys: [bigint, bigint | undefined, Bytes][]): Promise<(matrixV500.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV500.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint | undefined, key3: Bytes): Promise<matrixV1010.Attribute | undefined>
    getMany(block: Block, keys: [bigint, bigint | undefined, Bytes][]): Promise<(matrixV1010.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: matrixV1010.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint | undefined, key3: Bytes): Promise<enjinV100.Attribute | undefined>
    getMany(block: Block, keys: [bigint, bigint | undefined, Bytes][]): Promise<(enjinV100.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV100.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens. Contains the attribute's value and the storage deposit.
 */
export interface AttributesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint | undefined, key3: Bytes): Promise<enjinV1032.Attribute | undefined>
    getMany(block: Block, keys: [bigint, bigint | undefined, Bytes][]): Promise<(enjinV1032.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: enjinV1032.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint | undefined, key3: Bytes): Promise<v100.Attribute | undefined>
    getMany(block: Block, keys: [bigint, bigint | undefined, Bytes][]): Promise<(v100.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v100.Attribute | undefined][]>
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint | undefined, key3: Bytes): Promise<v1030.Attribute | undefined>
    getMany(block: Block, keys: [bigint, bigint | undefined, Bytes][]): Promise<(v1030.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: bigint | undefined): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeys(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[bigint, bigint | undefined, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): Promise<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint | undefined,
        key3: Bytes
    ): AsyncIterable<[k: [bigint, bigint | undefined, Bytes], v: v1030.Attribute | undefined][]>
}

export const assetIdsByLocation = {
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixEnjinV603.V3MultiLocation],
        matrixEnjinV603.AssetId
    ) as AssetIdsByLocationMatrixEnjinV603,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixEnjinV1012: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixEnjinV1012.V4Location],
        matrixEnjinV1012.AssetId
    ) as AssetIdsByLocationMatrixEnjinV1012,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixV500: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixV500.V3MultiLocation],
        matrixV500.AssetId
    ) as AssetIdsByLocationMatrixV500,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixV1010: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixV1010.V4Location],
        matrixV1010.AssetId
    ) as AssetIdsByLocationMatrixV1010,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    enjinV100: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [enjinV100.V3MultiLocation],
        enjinV100.AssetId
    ) as AssetIdsByLocationEnjinV100,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    enjinV1032: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [enjinV1032.V4Location],
        enjinV1032.AssetId
    ) as AssetIdsByLocationEnjinV1032,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    v100: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [v100.V3MultiLocation],
        v100.AssetId
    ) as AssetIdsByLocationV100,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    v1030: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [v1030.V4Location],
        v1030.AssetId
    ) as AssetIdsByLocationV1030,
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixV1030: new StorageType(
        'MultiTokens.AssetIdsByLocation',
        'Optional',
        [matrixV1030.V5Location],
        matrixV1030.AssetId
    ) as AssetIdsByLocationMatrixV1030,
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.V3MultiLocation): Promise<matrixEnjinV603.AssetId | undefined>
    getMany(block: Block, keys: matrixEnjinV603.V3MultiLocation[]): Promise<(matrixEnjinV603.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeys(block: Block, key: matrixEnjinV603.V3MultiLocation): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.V3MultiLocation
    ): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.V3MultiLocation
    ): Promise<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.V3MultiLocation
    ): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.V4Location): Promise<matrixEnjinV1012.AssetId | undefined>
    getMany(block: Block, keys: matrixEnjinV1012.V4Location[]): Promise<(matrixEnjinV1012.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.V4Location[]>
    getKeys(block: Block, key: matrixEnjinV1012.V4Location): Promise<matrixEnjinV1012.V4Location[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.V4Location[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.V4Location
    ): AsyncIterable<matrixEnjinV1012.V4Location[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.V4Location, v: matrixEnjinV1012.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.V4Location
    ): Promise<[k: matrixEnjinV1012.V4Location, v: matrixEnjinV1012.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.V4Location, v: matrixEnjinV1012.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.V4Location
    ): AsyncIterable<[k: matrixEnjinV1012.V4Location, v: matrixEnjinV1012.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV500.V3MultiLocation): Promise<matrixV500.AssetId | undefined>
    getMany(block: Block, keys: matrixV500.V3MultiLocation[]): Promise<(matrixV500.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.V3MultiLocation[]>
    getKeys(block: Block, key: matrixV500.V3MultiLocation): Promise<matrixV500.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.V3MultiLocation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.V3MultiLocation
    ): AsyncIterable<matrixV500.V3MultiLocation[]>
    getPairs(block: Block): Promise<[k: matrixV500.V3MultiLocation, v: matrixV500.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: matrixV500.V3MultiLocation
    ): Promise<[k: matrixV500.V3MultiLocation, v: matrixV500.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV500.V3MultiLocation, v: matrixV500.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.V3MultiLocation
    ): AsyncIterable<[k: matrixV500.V3MultiLocation, v: matrixV500.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1010.V4Location): Promise<matrixV1010.AssetId | undefined>
    getMany(block: Block, keys: matrixV1010.V4Location[]): Promise<(matrixV1010.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.V4Location[]>
    getKeys(block: Block, key: matrixV1010.V4Location): Promise<matrixV1010.V4Location[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.V4Location[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1010.V4Location): AsyncIterable<matrixV1010.V4Location[]>
    getPairs(block: Block): Promise<[k: matrixV1010.V4Location, v: matrixV1010.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1010.V4Location
    ): Promise<[k: matrixV1010.V4Location, v: matrixV1010.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.V4Location, v: matrixV1010.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.V4Location
    ): AsyncIterable<[k: matrixV1010.V4Location, v: matrixV1010.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.V3MultiLocation): Promise<enjinV100.AssetId | undefined>
    getMany(block: Block, keys: enjinV100.V3MultiLocation[]): Promise<(enjinV100.AssetId | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.V3MultiLocation[]>
    getKeys(block: Block, key: enjinV100.V3MultiLocation): Promise<enjinV100.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.V3MultiLocation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.V3MultiLocation
    ): AsyncIterable<enjinV100.V3MultiLocation[]>
    getPairs(block: Block): Promise<[k: enjinV100.V3MultiLocation, v: enjinV100.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.V3MultiLocation
    ): Promise<[k: enjinV100.V3MultiLocation, v: enjinV100.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.V3MultiLocation, v: enjinV100.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.V3MultiLocation
    ): AsyncIterable<[k: enjinV100.V3MultiLocation, v: enjinV100.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.V4Location): Promise<enjinV1032.AssetId | undefined>
    getMany(block: Block, keys: enjinV1032.V4Location[]): Promise<(enjinV1032.AssetId | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.V4Location[]>
    getKeys(block: Block, key: enjinV1032.V4Location): Promise<enjinV1032.V4Location[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.V4Location[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.V4Location): AsyncIterable<enjinV1032.V4Location[]>
    getPairs(block: Block): Promise<[k: enjinV1032.V4Location, v: enjinV1032.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1032.V4Location
    ): Promise<[k: enjinV1032.V4Location, v: enjinV1032.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.V4Location, v: enjinV1032.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.V4Location
    ): AsyncIterable<[k: enjinV1032.V4Location, v: enjinV1032.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v100.V3MultiLocation): Promise<v100.AssetId | undefined>
    getMany(block: Block, keys: v100.V3MultiLocation[]): Promise<(v100.AssetId | undefined)[]>
    getKeys(block: Block): Promise<v100.V3MultiLocation[]>
    getKeys(block: Block, key: v100.V3MultiLocation): Promise<v100.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.V3MultiLocation): AsyncIterable<v100.V3MultiLocation[]>
    getPairs(block: Block): Promise<[k: v100.V3MultiLocation, v: v100.AssetId | undefined][]>
    getPairs(block: Block, key: v100.V3MultiLocation): Promise<[k: v100.V3MultiLocation, v: v100.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v100.V3MultiLocation, v: v100.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v100.V3MultiLocation
    ): AsyncIterable<[k: v100.V3MultiLocation, v: v100.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.V4Location): Promise<v1030.AssetId | undefined>
    getMany(block: Block, keys: v1030.V4Location[]): Promise<(v1030.AssetId | undefined)[]>
    getKeys(block: Block): Promise<v1030.V4Location[]>
    getKeys(block: Block, key: v1030.V4Location): Promise<v1030.V4Location[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.V4Location[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.V4Location): AsyncIterable<v1030.V4Location[]>
    getPairs(block: Block): Promise<[k: v1030.V4Location, v: v1030.AssetId | undefined][]>
    getPairs(block: Block, key: v1030.V4Location): Promise<[k: v1030.V4Location, v: v1030.AssetId | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1030.V4Location, v: v1030.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.V4Location
    ): AsyncIterable<[k: v1030.V4Location, v: v1030.AssetId | undefined][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.V5Location): Promise<matrixV1030.AssetId | undefined>
    getMany(block: Block, keys: matrixV1030.V5Location[]): Promise<(matrixV1030.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.V5Location[]>
    getKeys(block: Block, key: matrixV1030.V5Location): Promise<matrixV1030.V5Location[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.V5Location[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.V5Location): AsyncIterable<matrixV1030.V5Location[]>
    getPairs(block: Block): Promise<[k: matrixV1030.V5Location, v: matrixV1030.AssetId | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.V5Location
    ): Promise<[k: matrixV1030.V5Location, v: matrixV1030.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.V5Location, v: matrixV1030.AssetId | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.V5Location
    ): AsyncIterable<[k: matrixV1030.V5Location, v: matrixV1030.AssetId | undefined][]>
}

export const migrations = {
    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     *
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.Migrations',
        'Optional',
        [sts.bytes()],
        matrixEnjinV603.Migration
    ) as MigrationsMatrixEnjinV603,
}

/**
 *  Stores last iterated keys for migrations. Used by multi block migrations
 *  to resume from the last iterated key.
 *
 *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
 *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
 */
export interface MigrationsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<matrixEnjinV603.Migration | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(matrixEnjinV603.Migration | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: matrixEnjinV603.Migration | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: matrixEnjinV603.Migration | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: matrixEnjinV603.Migration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: Bytes
    ): AsyncIterable<[k: Bytes, v: matrixEnjinV603.Migration | undefined][]>
}

export const migrationStatus = {
    /**
     *  Status of the current multi-block migration
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.MigrationStatus',
        'Default',
        [],
        matrixEnjinV603.MigrationStage
    ) as MigrationStatusMatrixEnjinV603,
}

/**
 *  Status of the current multi-block migration
 */
export interface MigrationStatusMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MigrationStage
    get(block: Block): Promise<matrixEnjinV603.MigrationStage | undefined>
}

export const ethereumTokens = {
    /**
     *  The token assets from ethereum
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.EthereumTokens',
        'Optional',
        [sts.bigint(), sts.bigint()],
        matrixEnjinV603.EthereumToken
    ) as EthereumTokensMatrixEnjinV603,
}

/**
 *  The token assets from ethereum
 */
export interface EthereumTokensMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<matrixEnjinV603.EthereumToken | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixEnjinV603.EthereumToken | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: bigint
    ): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken | undefined][]>
}

export const ethereumBalances = {
    /**
     *  Holds the ethereum balance for each token
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.EthereumBalances',
        'Optional',
        [matrixEnjinV603.H160, sts.bigint(), sts.bigint()],
        sts.bigint()
    ) as EthereumBalancesMatrixEnjinV603,
}

/**
 *  Holds the ethereum balance for each token
 */
export interface EthereumBalancesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV603.H160, key2: bigint, key3: bigint): Promise<bigint | undefined>
    getMany(block: Block, keys: [matrixEnjinV603.H160, bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeys(block: Block, key1: matrixEnjinV603.H160): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeys(block: Block, key1: matrixEnjinV603.H160, key2: bigint): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint,
        key3: bigint
    ): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.H160
    ): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint
    ): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint,
        key3: bigint
    ): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV603.H160
    ): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint
    ): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint,
        key3: bigint
    ): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.H160
    ): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint
    ): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.H160,
        key2: bigint,
        key3: bigint
    ): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: bigint | undefined][]>
}

export const ethereumAccounts = {
    /**
     *  Stores data for an ethereum address
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.EthereumAccounts',
        'Optional',
        [matrixEnjinV603.H160],
        matrixEnjinV603.EthereumAccount
    ) as EthereumAccountsMatrixEnjinV603,
}

/**
 *  Stores data for an ethereum address
 */
export interface EthereumAccountsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.EthereumAccount | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H160[]): Promise<(matrixEnjinV603.EthereumAccount | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H160[]>
    getKeys(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<matrixEnjinV603.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H160, v: matrixEnjinV603.EthereumAccount | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.H160
    ): Promise<[k: matrixEnjinV603.H160, v: matrixEnjinV603.EthereumAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.H160, v: matrixEnjinV603.EthereumAccount | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H160
    ): AsyncIterable<[k: matrixEnjinV603.H160, v: matrixEnjinV603.EthereumAccount | undefined][]>
}

export const unmintableTokenIds = {
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint()],
        matrixEnjinV603.RangeInclusive
    ) as UnmintableTokenIdsMatrixEnjinV603,
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    matrixEnjinV1000: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint(), sts.bigint()],
        sts.bigint()
    ) as UnmintableTokenIdsMatrixEnjinV1000,
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    matrixV604: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint()],
        matrixV604.RangeInclusive
    ) as UnmintableTokenIdsMatrixV604,
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    matrixV1000: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint(), sts.bigint()],
        sts.bigint()
    ) as UnmintableTokenIdsMatrixV1000,
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    enjinV101: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint()],
        enjinV101.RangeInclusive
    ) as UnmintableTokenIdsEnjinV101,
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    enjinV1021: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint(), sts.bigint()],
        sts.bigint()
    ) as UnmintableTokenIdsEnjinV1021,
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    v106: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint()],
        v106.RangeInclusive
    ) as UnmintableTokenIdsV106,
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    v1021: new StorageType(
        'MultiTokens.UnmintableTokenIds',
        'Optional',
        [sts.bigint(), sts.bigint()],
        sts.bigint()
    ) as UnmintableTokenIdsV1021,
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface UnmintableTokenIdsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixEnjinV603.RangeInclusive | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV603.RangeInclusive | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixEnjinV603.RangeInclusive | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixEnjinV603.RangeInclusive | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixEnjinV603.RangeInclusive | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixEnjinV603.RangeInclusive | undefined][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface UnmintableTokenIdsMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<bigint | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface UnmintableTokenIdsMatrixV604 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixV604.RangeInclusive | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixV604.RangeInclusive | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixV604.RangeInclusive | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixV604.RangeInclusive | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixV604.RangeInclusive | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixV604.RangeInclusive | undefined][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface UnmintableTokenIdsMatrixV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<bigint | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface UnmintableTokenIdsEnjinV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<enjinV101.RangeInclusive | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(enjinV101.RangeInclusive | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: enjinV101.RangeInclusive | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: enjinV101.RangeInclusive | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: enjinV101.RangeInclusive | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: enjinV101.RangeInclusive | undefined][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface UnmintableTokenIdsEnjinV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<bigint | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface UnmintableTokenIdsV106 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<v106.RangeInclusive | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(v106.RangeInclusive | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: v106.RangeInclusive | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: v106.RangeInclusive | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: v106.RangeInclusive | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: v106.RangeInclusive | undefined][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface UnmintableTokenIdsV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<bigint | undefined>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: bigint
    ): AsyncIterable<[k: [bigint, bigint], v: bigint | undefined][]>
}

export const nativeCollectionIds = {
    /**
     *  Map of ethereum collection id to the native collection id
     */
    matrixEnjinV603: new StorageType(
        'MultiTokens.NativeCollectionIds',
        'Optional',
        [sts.bigint()],
        sts.bigint()
    ) as NativeCollectionIdsMatrixEnjinV603,
}

/**
 *  Map of ethereum collection id to the native collection id
 */
export interface NativeCollectionIdsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<bigint | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: bigint | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: bigint | undefined][]>
}

export const claimableCollectionIds = {
    /**
     *  Stores data for an ethereum address
     */
    matrixEnjinV1000: new StorageType(
        'MultiTokens.ClaimableCollectionIds',
        'Optional',
        [matrixEnjinV1000.H160],
        sts.array(() => sts.bigint())
    ) as ClaimableCollectionIdsMatrixEnjinV1000,
}

/**
 *  Stores data for an ethereum address
 */
export interface ClaimableCollectionIdsMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.H160): Promise<bigint[] | undefined>
    getMany(block: Block, keys: matrixEnjinV1000.H160[]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.H160[]>
    getKeys(block: Block, key: matrixEnjinV1000.H160): Promise<matrixEnjinV1000.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.H160): AsyncIterable<matrixEnjinV1000.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.H160, v: bigint[] | undefined][]>
    getPairs(block: Block, key: matrixEnjinV1000.H160): Promise<[k: matrixEnjinV1000.H160, v: bigint[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.H160, v: bigint[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.H160
    ): AsyncIterable<[k: matrixEnjinV1000.H160, v: bigint[] | undefined][]>
}

export const pendingCollectionTransfers = {
    /**
     *  Collections waiting to be transferred
     */
    matrixEnjinV1004: new StorageType(
        'MultiTokens.PendingCollectionTransfers',
        'Optional',
        [sts.bigint()],
        matrixEnjinV1004.AccountId32
    ) as PendingCollectionTransfersMatrixEnjinV1004,
}

/**
 *  Collections waiting to be transferred
 */
export interface PendingCollectionTransfersMatrixEnjinV1004 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixEnjinV1004.AccountId32 | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV1004.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixEnjinV1004.AccountId32 | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixEnjinV1004.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1004.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1004.AccountId32 | undefined][]>
}

export const nextTokenGroupId = {
    /**
     *  Sequencer for token group id generators.
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.NextTokenGroupId',
        'Default',
        [],
        sts.bigint()
    ) as NextTokenGroupIdMatrixEnjinV1022,
}

/**
 *  Sequencer for token group id generators.
 */
export interface NextTokenGroupIdMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const tokenGroups = {
    /**
     *  Stores token group data, keeping track of the collection id where they belong, and the
     *  number of tokens and attributes in the group
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.TokenGroups',
        'Optional',
        [sts.bigint()],
        matrixEnjinV1022.TokenGroup
    ) as TokenGroupsMatrixEnjinV1022,
}

/**
 *  Stores token group data, keeping track of the collection id where they belong, and the
 *  number of tokens and attributes in the group
 */
export interface TokenGroupsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<matrixEnjinV1022.TokenGroup | undefined>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV1022.TokenGroup | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: matrixEnjinV1022.TokenGroup | undefined][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: matrixEnjinV1022.TokenGroup | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1022.TokenGroup | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: bigint
    ): AsyncIterable<[k: bigint, v: matrixEnjinV1022.TokenGroup | undefined][]>
}

export const tokenGroupAttributes = {
    /**
     *  Metadata of token groups. Contains the attribute's value and the storage deposit.
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.TokenGroupAttributes',
        'Optional',
        [sts.bigint(), sts.bytes()],
        matrixEnjinV1022.Attribute
    ) as TokenGroupAttributesMatrixEnjinV1022,
}

/**
 *  Metadata of token groups. Contains the attribute's value and the storage deposit.
 */
export interface TokenGroupAttributesMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: Bytes): Promise<matrixEnjinV1022.Attribute | undefined>
    getMany(block: Block, keys: [bigint, Bytes][]): Promise<(matrixEnjinV1022.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, Bytes][]>
    getKeys(block: Block, key1: bigint, key2: Bytes): Promise<[bigint, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: Bytes): AsyncIterable<[bigint, Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, Bytes], v: matrixEnjinV1022.Attribute | undefined][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, Bytes], v: matrixEnjinV1022.Attribute | undefined][]>
    getPairs(
        block: Block,
        key1: bigint,
        key2: Bytes
    ): Promise<[k: [bigint, Bytes], v: matrixEnjinV1022.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [bigint, Bytes], v: matrixEnjinV1022.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint
    ): AsyncIterable<[k: [bigint, Bytes], v: matrixEnjinV1022.Attribute | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: bigint,
        key2: Bytes
    ): AsyncIterable<[k: [bigint, Bytes], v: matrixEnjinV1022.Attribute | undefined][]>
}

export const collectionDepositRecalculationStatus = {
    matrixEnjinV1022: new StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        matrixEnjinV1022.CollectionDepositUpdateStatus
    ) as CollectionDepositRecalculationStatusMatrixEnjinV1022,
    matrixV1020: new StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        matrixV1020.CollectionDepositUpdateStatus
    ) as CollectionDepositRecalculationStatusMatrixV1020,
    matrixV1021: new StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        matrixV1021.CollectionDepositUpdateStatus
    ) as CollectionDepositRecalculationStatusMatrixV1021,
    enjinV1050: new StorageType(
        'MultiTokens.CollectionDepositRecalculationStatus',
        'Optional',
        [],
        enjinV1050.CollectionDepositUpdateStatus
    ) as CollectionDepositRecalculationStatusEnjinV1050,
}

export interface CollectionDepositRecalculationStatusMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1022.CollectionDepositUpdateStatus | undefined>
}

export interface CollectionDepositRecalculationStatusMatrixV1020 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV1020.CollectionDepositUpdateStatus | undefined>
}

export interface CollectionDepositRecalculationStatusMatrixV1021 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV1021.CollectionDepositUpdateStatus | undefined>
}

export interface CollectionDepositRecalculationStatusEnjinV1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV1050.CollectionDepositUpdateStatus | undefined>
}

export const upgradeBlockNumber = {
    /**
     *  Block number when the last runtime upgrade occured. Used for recalculating block numbers.
     */
    matrixEnjinV1022: new StorageType(
        'MultiTokens.UpgradeBlockNumber',
        'Optional',
        [],
        sts.number()
    ) as UpgradeBlockNumberMatrixEnjinV1022,
}

/**
 *  Block number when the last runtime upgrade occured. Used for recalculating block numbers.
 */
export interface UpgradeBlockNumberMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const idleOperations = {
    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    matrixV500: new StorageType(
        'MultiTokens.IdleOperations',
        'Default',
        [],
        sts.array(() => matrixV500.WeightedIdleOperation)
    ) as IdleOperationsMatrixV500,
}

/**
 *  Pending operations to be executed on [`Hooks::on_idle`].
 */
export interface IdleOperationsMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.WeightedIdleOperation[]
    get(block: Block): Promise<matrixV500.WeightedIdleOperation[] | undefined>
}

export const lastIteratedMigrationKey = {
    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    v100: new StorageType(
        'MultiTokens.LastIteratedMigrationKey',
        'Optional',
        [],
        sts.bytes()
    ) as LastIteratedMigrationKeyV100,
}

/**
 *  Stores last iterated key for migrations. Used by multi block migrations
 */
export interface LastIteratedMigrationKeyV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<Bytes | undefined>
}
