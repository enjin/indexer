import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v101 from '../v101'
import * as v102 from '../v102'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixV1030 from '../matrixV1030'

export const claims = {
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    matrixEnjinV603: new StorageType(
        'Claims.Claims',
        'Optional',
        [matrixEnjinV603.H160],
        sts.array(() => matrixEnjinV603.ClaimData)
    ) as ClaimsMatrixEnjinV603,
    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    matrixV500: new StorageType('Claims.Claims', 'Optional', [matrixV500.Account], sts.bigint()) as ClaimsMatrixV500,
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    matrixV604: new StorageType(
        'Claims.Claims',
        'Optional',
        [matrixV604.H160],
        sts.array(() => matrixV604.ClaimData)
    ) as ClaimsMatrixV604,
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    enjinV100: new StorageType(
        'Claims.Claims',
        'Optional',
        [enjinV100.Account],
        sts.array(() => enjinV100.ClaimData)
    ) as ClaimsEnjinV100,
    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    v101: new StorageType('Claims.Claims', 'Optional', [v101.Account], sts.bigint()) as ClaimsV101,
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    v102: new StorageType(
        'Claims.Claims',
        'Optional',
        [v102.Account],
        sts.array(() => v102.ClaimData)
    ) as ClaimsV102,
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    matrixV1030: new StorageType(
        'Claims.Claims',
        'Optional',
        [matrixV1030.H160],
        sts.array(() => matrixV1030.ClaimData)
    ) as ClaimsMatrixV1030,
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.ClaimData[] | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H160[]): Promise<(matrixEnjinV603.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H160[]>
    getKeys(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<matrixEnjinV603.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H160, v: matrixEnjinV603.ClaimData[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.H160
    ): Promise<[k: matrixEnjinV603.H160, v: matrixEnjinV603.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.H160, v: matrixEnjinV603.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H160
    ): AsyncIterable<[k: matrixEnjinV603.H160, v: matrixEnjinV603.ClaimData[] | undefined][]>
}

/**
 *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
 *  claim for.
 */
export interface ClaimsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV500.Account): Promise<bigint | undefined>
    getMany(block: Block, keys: matrixV500.Account[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.Account[]>
    getKeys(block: Block, key: matrixV500.Account): Promise<matrixV500.Account[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.Account[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.Account): AsyncIterable<matrixV500.Account[]>
    getPairs(block: Block): Promise<[k: matrixV500.Account, v: bigint | undefined][]>
    getPairs(block: Block, key: matrixV500.Account): Promise<[k: matrixV500.Account, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV500.Account, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.Account
    ): AsyncIterable<[k: matrixV500.Account, v: bigint | undefined][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsMatrixV604 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV604.H160): Promise<matrixV604.ClaimData[] | undefined>
    getMany(block: Block, keys: matrixV604.H160[]): Promise<(matrixV604.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<matrixV604.H160[]>
    getKeys(block: Block, key: matrixV604.H160): Promise<matrixV604.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV604.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV604.H160): AsyncIterable<matrixV604.H160[]>
    getPairs(block: Block): Promise<[k: matrixV604.H160, v: matrixV604.ClaimData[] | undefined][]>
    getPairs(block: Block, key: matrixV604.H160): Promise<[k: matrixV604.H160, v: matrixV604.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV604.H160, v: matrixV604.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV604.H160
    ): AsyncIterable<[k: matrixV604.H160, v: matrixV604.ClaimData[] | undefined][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Account): Promise<enjinV100.ClaimData[] | undefined>
    getMany(block: Block, keys: enjinV100.Account[]): Promise<(enjinV100.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Account[]>
    getKeys(block: Block, key: enjinV100.Account): Promise<enjinV100.Account[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Account[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Account): AsyncIterable<enjinV100.Account[]>
    getPairs(block: Block): Promise<[k: enjinV100.Account, v: enjinV100.ClaimData[] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.Account
    ): Promise<[k: enjinV100.Account, v: enjinV100.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Account, v: enjinV100.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Account
    ): AsyncIterable<[k: enjinV100.Account, v: enjinV100.ClaimData[] | undefined][]>
}

/**
 *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
 *  claim for.
 */
export interface ClaimsV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v101.Account): Promise<bigint | undefined>
    getMany(block: Block, keys: v101.Account[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v101.Account[]>
    getKeys(block: Block, key: v101.Account): Promise<v101.Account[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v101.Account[]>
    getKeysPaged(pageSize: number, block: Block, key: v101.Account): AsyncIterable<v101.Account[]>
    getPairs(block: Block): Promise<[k: v101.Account, v: bigint | undefined][]>
    getPairs(block: Block, key: v101.Account): Promise<[k: v101.Account, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v101.Account, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v101.Account
    ): AsyncIterable<[k: v101.Account, v: bigint | undefined][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsV102 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v102.Account): Promise<v102.ClaimData[] | undefined>
    getMany(block: Block, keys: v102.Account[]): Promise<(v102.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<v102.Account[]>
    getKeys(block: Block, key: v102.Account): Promise<v102.Account[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v102.Account[]>
    getKeysPaged(pageSize: number, block: Block, key: v102.Account): AsyncIterable<v102.Account[]>
    getPairs(block: Block): Promise<[k: v102.Account, v: v102.ClaimData[] | undefined][]>
    getPairs(block: Block, key: v102.Account): Promise<[k: v102.Account, v: v102.ClaimData[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v102.Account, v: v102.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v102.Account
    ): AsyncIterable<[k: v102.Account, v: v102.ClaimData[] | undefined][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.H160): Promise<matrixV1030.ClaimData[] | undefined>
    getMany(block: Block, keys: matrixV1030.H160[]): Promise<(matrixV1030.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.H160[]>
    getKeys(block: Block, key: matrixV1030.H160): Promise<matrixV1030.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.H160): AsyncIterable<matrixV1030.H160[]>
    getPairs(block: Block): Promise<[k: matrixV1030.H160, v: matrixV1030.ClaimData[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.H160
    ): Promise<[k: matrixV1030.H160, v: matrixV1030.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.H160, v: matrixV1030.ClaimData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.H160
    ): AsyncIterable<[k: matrixV1030.H160, v: matrixV1030.ClaimData[] | undefined][]>
}

export const transactionHashLookup = {
    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    matrixEnjinV603: new StorageType(
        'Claims.TransactionHashLookup',
        'Optional',
        [matrixEnjinV603.H256],
        sts.unit()
    ) as TransactionHashLookupMatrixEnjinV603,
    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    enjinV100: new StorageType(
        'Claims.TransactionHashLookup',
        'Optional',
        [sts.tuple(() => [enjinV100.H256, sts.option(() => sts.number())])],
        sts.unit()
    ) as TransactionHashLookupEnjinV100,
    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    matrixV1030: new StorageType(
        'Claims.TransactionHashLookup',
        'Optional',
        [matrixV1030.H256],
        sts.unit()
    ) as TransactionHashLookupMatrixV1030,
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface TransactionHashLookupMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<null | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: null | undefined][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: null | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H256
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: null | undefined][]>
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface TransactionHashLookupEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [enjinV100.H256, number | undefined]): Promise<null | undefined>
    getMany(block: Block, keys: [enjinV100.H256, number | undefined][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.H256, number | undefined][]>
    getKeys(block: Block, key: [enjinV100.H256, number | undefined]): Promise<[enjinV100.H256, number | undefined][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.H256, number | undefined][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [enjinV100.H256, number | undefined]
    ): AsyncIterable<[enjinV100.H256, number | undefined][]>
    getPairs(block: Block): Promise<[k: [enjinV100.H256, number | undefined], v: null | undefined][]>
    getPairs(
        block: Block,
        key: [enjinV100.H256, number | undefined]
    ): Promise<[k: [enjinV100.H256, number | undefined], v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV100.H256, number | undefined], v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [enjinV100.H256, number | undefined]
    ): AsyncIterable<[k: [enjinV100.H256, number | undefined], v: null | undefined][]>
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface TransactionHashLookupMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.H256): Promise<null | undefined>
    getMany(block: Block, keys: matrixV1030.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.H256[]>
    getKeys(block: Block, key: matrixV1030.H256): Promise<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.H256): AsyncIterable<matrixV1030.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1030.H256, v: null | undefined][]>
    getPairs(block: Block, key: matrixV1030.H256): Promise<[k: matrixV1030.H256, v: null | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV1030.H256, v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.H256
    ): AsyncIterable<[k: matrixV1030.H256, v: null | undefined][]>
}

export const totalUnclaimedAmount = {
    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    matrixEnjinV603: new StorageType(
        'Claims.TotalUnclaimedAmount',
        'Default',
        [],
        sts.bigint()
    ) as TotalUnclaimedAmountMatrixEnjinV603,
}

/**
 *  This is the total amount for which claims have been requested and are not yet claimed.
 */
export interface TotalUnclaimedAmountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const delayClaimsPeriod = {
    /**
     *  Delay time in block numbers before the user could claim
     */
    matrixEnjinV603: new StorageType(
        'Claims.DelayClaimsPeriod',
        'Optional',
        [],
        sts.number()
    ) as DelayClaimsPeriodMatrixEnjinV603,
}

/**
 *  Delay time in block numbers before the user could claim
 */
export interface DelayClaimsPeriodMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const latestBlockNumber = {
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    matrixEnjinV603: new StorageType(
        'Claims.LatestBlockNumber',
        'Optional',
        [],
        sts.number()
    ) as LatestBlockNumberMatrixEnjinV603,
    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    matrixV500: new StorageType(
        'Claims.LatestBlockNumber',
        'Optional',
        [],
        matrixV500.TrackedBlockNumbers
    ) as LatestBlockNumberMatrixV500,
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    matrixV604: new StorageType(
        'Claims.LatestBlockNumber',
        'Optional',
        [],
        sts.number()
    ) as LatestBlockNumberMatrixV604,
    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    enjinV100: new StorageType(
        'Claims.LatestBlockNumber',
        'Optional',
        [],
        enjinV100.TrackedBlockNumbers
    ) as LatestBlockNumberEnjinV100,
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    matrixV1030: new StorageType(
        'Claims.LatestBlockNumber',
        'Optional',
        [],
        sts.number()
    ) as LatestBlockNumberMatrixV1030,
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.TrackedBlockNumbers | undefined>
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberMatrixV604 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV100.TrackedBlockNumbers | undefined>
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const exchangeRate = {
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixEnjinV603: new StorageType(
        'Claims.ExchangeRate',
        'Optional',
        [],
        matrixEnjinV603.Perbill
    ) as ExchangeRateMatrixEnjinV603,
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixV500: new StorageType('Claims.ExchangeRate', 'Optional', [], matrixV500.FixedU128) as ExchangeRateMatrixV500,
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixV604: new StorageType('Claims.ExchangeRate', 'Optional', [], matrixV604.Perbill) as ExchangeRateMatrixV604,
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    v101: new StorageType('Claims.ExchangeRate', 'Optional', [], v101.FixedU128) as ExchangeRateV101,
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    v102: new StorageType('Claims.ExchangeRate', 'Optional', [], v102.Perbill) as ExchangeRateV102,
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.Perbill | undefined>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.FixedU128 | undefined>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateMatrixV604 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV604.Perbill | undefined>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateV101 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v101.FixedU128 | undefined>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateV102 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v102.Perbill | undefined>
}

export const accountNonce = {
    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    matrixEnjinV603: new StorageType(
        'Claims.AccountNonce',
        'Optional',
        [matrixEnjinV603.H160],
        sts.number()
    ) as AccountNonceMatrixEnjinV603,
}

/**
 *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
 *  claimed.
 */
export interface AccountNonceMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H160): Promise<number | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H160[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H160[]>
    getKeys(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<matrixEnjinV603.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H160, v: number | undefined][]>
    getPairs(block: Block, key: matrixEnjinV603.H160): Promise<[k: matrixEnjinV603.H160, v: number | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H160, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H160
    ): AsyncIterable<[k: matrixEnjinV603.H160, v: number | undefined][]>
}

export const total = {
    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    matrixV500: new StorageType('Claims.Total', 'Default', [], sts.bigint()) as TotalMatrixV500,
}

/**
 *  This is the total amount for which claims have been approved and are not yet claimed.
 */
export interface TotalMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const pendingApprovals = {
    matrixV500: new StorageType(
        'Claims.PendingApprovals',
        'Optional',
        [sts.tuple(() => [matrixV500.H256, sts.option(() => sts.number())])],
        matrixV500.TransactionData
    ) as PendingApprovalsMatrixV500,
}

export interface PendingApprovalsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [matrixV500.H256, number | undefined]): Promise<matrixV500.TransactionData | undefined>
    getMany(
        block: Block,
        keys: [matrixV500.H256, number | undefined][]
    ): Promise<(matrixV500.TransactionData | undefined)[]>
    getKeys(block: Block): Promise<[matrixV500.H256, number | undefined][]>
    getKeys(block: Block, key: [matrixV500.H256, number | undefined]): Promise<[matrixV500.H256, number | undefined][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixV500.H256, number | undefined][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [matrixV500.H256, number | undefined]
    ): AsyncIterable<[matrixV500.H256, number | undefined][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixV500.H256, number | undefined], v: matrixV500.TransactionData | undefined][]>
    getPairs(
        block: Block,
        key: [matrixV500.H256, number | undefined]
    ): Promise<[k: [matrixV500.H256, number | undefined], v: matrixV500.TransactionData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixV500.H256, number | undefined], v: matrixV500.TransactionData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [matrixV500.H256, number | undefined]
    ): AsyncIterable<[k: [matrixV500.H256, number | undefined], v: matrixV500.TransactionData | undefined][]>
}

export const approvedBlockNumber = {
    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    matrixV500: new StorageType(
        'Claims.ApprovedBlockNumber',
        'Optional',
        [],
        matrixV500.TrackedBlockNumbers
    ) as ApprovedBlockNumberMatrixV500,
}

/**
 *  Latest block number on Ethereum for which requested claims have been approved.
 */
export interface ApprovedBlockNumberMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.TrackedBlockNumbers | undefined>
}

export const earlyBirdRewardsLookup = {
    /**
     *  EarlyBirdRewardsLookup
     *  This stores early bird rewards of user
     */
    enjinV100: new StorageType(
        'Claims.EarlyBirdRewardsLookup',
        'Optional',
        [enjinV100.AccountId32],
        enjinV100.EarlyBirdRewardsData
    ) as EarlyBirdRewardsLookupEnjinV100,
}

/**
 *  EarlyBirdRewardsLookup
 *  This stores early bird rewards of user
 */
export interface EarlyBirdRewardsLookupEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.EarlyBirdRewardsData | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.EarlyBirdRewardsData | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.EarlyBirdRewardsData | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.EarlyBirdRewardsData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.EarlyBirdRewardsData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.EarlyBirdRewardsData | undefined][]>
}
