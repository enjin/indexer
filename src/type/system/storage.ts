import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as v100 from '../v100'
import * as enjinV100 from '../enjinV100'
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
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixV601 from '../matrixV601'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1013 from '../matrixV1013'
import * as matrixEnjinV1014 from '../matrixEnjinV1014'
import * as matrixV1020 from '../matrixV1020'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'
import * as enjinV1022 from '../enjinV1022'
import * as v1022 from '../v1022'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as enjinV1032 from '../enjinV1032'
import * as v1032 from '../v1032'
import * as enjinV1033 from '../enjinV1033'
import * as v1033 from '../v1033'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const account = {
    /**
     *  The full account information for a particular account ID.
     */
    matrixEnjinV603: new StorageType(
        'System.Account',
        'Default',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.AccountInfo
    ) as AccountMatrixEnjinV603,
    /**
     *  The full account information for a particular account ID.
     */
    matrixV500: new StorageType(
        'System.Account',
        'Default',
        [matrixV500.AccountId32],
        matrixV500.AccountInfo
    ) as AccountMatrixV500,
    /**
     *  The full account information for a particular account ID.
     */
    matrixV602: new StorageType(
        'System.Account',
        'Default',
        [matrixV602.AccountId32],
        matrixV602.AccountInfo
    ) as AccountMatrixV602,
    /**
     *  The full account information for a particular account ID.
     */
    v100: new StorageType('System.Account', 'Default', [v100.AccountId32], v100.AccountInfo) as AccountV100,
    /**
     *  The full account information for a particular account ID.
     */
    v104: new StorageType('System.Account', 'Default', [v104.AccountId32], v104.AccountInfo) as AccountV104,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountInfo
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountInfo | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountInfo | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountInfo | undefined][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.AccountInfo
    get(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.AccountInfo | undefined>
    getMany(block: Block, keys: matrixV500.AccountId32[]): Promise<(matrixV500.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.AccountId32[]>
    getKeys(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.AccountId32): AsyncIterable<matrixV500.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV500.AccountId32, v: matrixV500.AccountInfo | undefined][]>
    getPairs(
        block: Block,
        key: matrixV500.AccountId32
    ): Promise<[k: matrixV500.AccountId32, v: matrixV500.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.AccountId32
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.AccountInfo | undefined][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountMatrixV602 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV602.AccountInfo
    get(block: Block, key: matrixV602.AccountId32): Promise<matrixV602.AccountInfo | undefined>
    getMany(block: Block, keys: matrixV602.AccountId32[]): Promise<(matrixV602.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<matrixV602.AccountId32[]>
    getKeys(block: Block, key: matrixV602.AccountId32): Promise<matrixV602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV602.AccountId32): AsyncIterable<matrixV602.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV602.AccountId32, v: matrixV602.AccountInfo | undefined][]>
    getPairs(
        block: Block,
        key: matrixV602.AccountId32
    ): Promise<[k: matrixV602.AccountId32, v: matrixV602.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV602.AccountId32, v: matrixV602.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV602.AccountId32
    ): AsyncIterable<[k: matrixV602.AccountId32, v: matrixV602.AccountInfo | undefined][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.AccountInfo
    get(block: Block, key: v100.AccountId32): Promise<v100.AccountInfo | undefined>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<(v100.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: v100.AccountInfo | undefined][]>
    getPairs(block: Block, key: v100.AccountId32): Promise<[k: v100.AccountId32, v: v100.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v100.AccountId32, v: v100.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v100.AccountId32
    ): AsyncIterable<[k: v100.AccountId32, v: v100.AccountInfo | undefined][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV104 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v104.AccountInfo
    get(block: Block, key: v104.AccountId32): Promise<v104.AccountInfo | undefined>
    getMany(block: Block, keys: v104.AccountId32[]): Promise<(v104.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v104.AccountId32[]>
    getKeys(block: Block, key: v104.AccountId32): Promise<v104.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v104.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v104.AccountId32): AsyncIterable<v104.AccountId32[]>
    getPairs(block: Block): Promise<[k: v104.AccountId32, v: v104.AccountInfo | undefined][]>
    getPairs(block: Block, key: v104.AccountId32): Promise<[k: v104.AccountId32, v: v104.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v104.AccountId32, v: v104.AccountInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v104.AccountId32
    ): AsyncIterable<[k: v104.AccountId32, v: v104.AccountInfo | undefined][]>
}

export const extrinsicCount = {
    /**
     *  Total extrinsics count for the current block.
     */
    matrixEnjinV603: new StorageType(
        'System.ExtrinsicCount',
        'Optional',
        [],
        sts.number()
    ) as ExtrinsicCountMatrixEnjinV603,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const blockWeight = {
    /**
     *  The current weight for the block.
     */
    matrixEnjinV603: new StorageType(
        'System.BlockWeight',
        'Default',
        [],
        matrixEnjinV603.PerDispatchClass
    ) as BlockWeightMatrixEnjinV603,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.PerDispatchClass
    get(block: Block): Promise<matrixEnjinV603.PerDispatchClass | undefined>
}

export const allExtrinsicsLen = {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    matrixEnjinV603: new StorageType(
        'System.AllExtrinsicsLen',
        'Optional',
        [],
        sts.number()
    ) as AllExtrinsicsLenMatrixEnjinV603,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}

export const blockHash = {
    /**
     *  Map of block numbers to block hashes.
     */
    matrixEnjinV603: new StorageType(
        'System.BlockHash',
        'Default',
        [sts.number()],
        matrixEnjinV603.H256
    ) as BlockHashMatrixEnjinV603,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.H256
    get(block: Block, key: number): Promise<matrixEnjinV603.H256 | undefined>
    getMany(block: Block, keys: number[]): Promise<(matrixEnjinV603.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: matrixEnjinV603.H256 | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: matrixEnjinV603.H256 | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: matrixEnjinV603.H256 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: matrixEnjinV603.H256 | undefined][]>
}

export const extrinsicData = {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    matrixEnjinV603: new StorageType(
        'System.ExtrinsicData',
        'Default',
        [sts.number()],
        sts.bytes()
    ) as ExtrinsicDataMatrixEnjinV603,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<Bytes | undefined>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: Bytes | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: Bytes | undefined][]>
}

export const number = {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    matrixEnjinV603: new StorageType('System.Number', 'Default', [], sts.number()) as NumberMatrixEnjinV603,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const parentHash = {
    /**
     *  Hash of the previous block.
     */
    matrixEnjinV603: new StorageType(
        'System.ParentHash',
        'Default',
        [],
        matrixEnjinV603.H256
    ) as ParentHashMatrixEnjinV603,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.H256
    get(block: Block): Promise<matrixEnjinV603.H256 | undefined>
}

export const digest = {
    /**
     *  Digest of the current block, also part of the block header.
     */
    matrixEnjinV603: new StorageType('System.Digest', 'Default', [], matrixEnjinV603.Digest) as DigestMatrixEnjinV603,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Digest
    get(block: Block): Promise<matrixEnjinV603.Digest | undefined>
}

export const events = {
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV603: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.EventRecord)
    ) as EventsMatrixEnjinV603,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1000: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV1000.EventRecord)
    ) as EventsMatrixEnjinV1000,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1004: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV1004.EventRecord)
    ) as EventsMatrixEnjinV1004,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1005: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV1005.EventRecord)
    ) as EventsMatrixEnjinV1005,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1012: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV1012.EventRecord)
    ) as EventsMatrixEnjinV1012,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1014: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV1014.EventRecord)
    ) as EventsMatrixEnjinV1014,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1022: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixEnjinV1022.EventRecord)
    ) as EventsMatrixEnjinV1022,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV500: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV500.EventRecord)
    ) as EventsMatrixV500,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV600: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV600.EventRecord)
    ) as EventsMatrixV600,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV601: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV601.EventRecord)
    ) as EventsMatrixV601,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV602: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV602.EventRecord)
    ) as EventsMatrixV602,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV604: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV604.EventRecord)
    ) as EventsMatrixV604,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1000: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1000.EventRecord)
    ) as EventsMatrixV1000,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1004: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1004.EventRecord)
    ) as EventsMatrixV1004,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1005: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1005.EventRecord)
    ) as EventsMatrixV1005,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1010: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1010.EventRecord)
    ) as EventsMatrixV1010,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1011: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1011.EventRecord)
    ) as EventsMatrixV1011,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1012: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1012.EventRecord)
    ) as EventsMatrixV1012,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1013: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1013.EventRecord)
    ) as EventsMatrixV1013,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1020: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1020.EventRecord)
    ) as EventsMatrixV1020,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixV1022: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => matrixV1022.EventRecord)
    ) as EventsMatrixV1022,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV100: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV100.EventRecord)
    ) as EventsEnjinV100,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV101: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV101.EventRecord)
    ) as EventsEnjinV101,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV110: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV110.EventRecord)
    ) as EventsEnjinV110,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV120: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV120.EventRecord)
    ) as EventsEnjinV120,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1021: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1021.EventRecord)
    ) as EventsEnjinV1021,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1022: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1022.EventRecord)
    ) as EventsEnjinV1022,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1023: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1023.EventRecord)
    ) as EventsEnjinV1023,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1026: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1026.EventRecord)
    ) as EventsEnjinV1026,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1032: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1032.EventRecord)
    ) as EventsEnjinV1032,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1033: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1033.EventRecord)
    ) as EventsEnjinV1033,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    enjinV1050: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => enjinV1050.EventRecord)
    ) as EventsEnjinV1050,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v100: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v100.EventRecord)
    ) as EventsV100,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v101: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v101.EventRecord)
    ) as EventsV101,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v102: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v102.EventRecord)
    ) as EventsV102,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v103: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v103.EventRecord)
    ) as EventsV103,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v104: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v104.EventRecord)
    ) as EventsV104,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v105: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v105.EventRecord)
    ) as EventsV105,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v106: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v106.EventRecord)
    ) as EventsV106,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v110: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v110.EventRecord)
    ) as EventsV110,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v120: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v120.EventRecord)
    ) as EventsV120,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1021: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1021.EventRecord)
    ) as EventsV1021,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1022: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1022.EventRecord)
    ) as EventsV1022,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1023: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1023.EventRecord)
    ) as EventsV1023,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1026: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1026.EventRecord)
    ) as EventsV1026,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1030: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1030.EventRecord)
    ) as EventsV1030,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1031: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1031.EventRecord)
    ) as EventsV1031,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1032: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1032.EventRecord)
    ) as EventsV1032,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1033: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1033.EventRecord)
    ) as EventsV1033,
    /**
     *  Events deposited for the current block.
     *
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     *
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1050: new StorageType(
        'System.Events',
        'Default',
        [],
        sts.array(() => v1050.EventRecord)
    ) as EventsV1050,
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.EventRecord[]
    get(block: Block): Promise<matrixEnjinV603.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1000.EventRecord[]
    get(block: Block): Promise<matrixEnjinV1000.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1004 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1004.EventRecord[]
    get(block: Block): Promise<matrixEnjinV1004.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1005 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1005.EventRecord[]
    get(block: Block): Promise<matrixEnjinV1005.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.EventRecord[]
    get(block: Block): Promise<matrixEnjinV1012.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1014 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1014.EventRecord[]
    get(block: Block): Promise<matrixEnjinV1014.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1022.EventRecord[]
    get(block: Block): Promise<matrixEnjinV1022.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.EventRecord[]
    get(block: Block): Promise<matrixV500.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV600 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV600.EventRecord[]
    get(block: Block): Promise<matrixV600.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV601 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV601.EventRecord[]
    get(block: Block): Promise<matrixV601.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV602 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV602.EventRecord[]
    get(block: Block): Promise<matrixV602.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV604 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV604.EventRecord[]
    get(block: Block): Promise<matrixV604.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1000 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1000.EventRecord[]
    get(block: Block): Promise<matrixV1000.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1004 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1004.EventRecord[]
    get(block: Block): Promise<matrixV1004.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1005 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1005.EventRecord[]
    get(block: Block): Promise<matrixV1005.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1010.EventRecord[]
    get(block: Block): Promise<matrixV1010.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1011 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1011.EventRecord[]
    get(block: Block): Promise<matrixV1011.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1012.EventRecord[]
    get(block: Block): Promise<matrixV1012.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1013 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1013.EventRecord[]
    get(block: Block): Promise<matrixV1013.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1020 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1020.EventRecord[]
    get(block: Block): Promise<matrixV1020.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1022.EventRecord[]
    get(block: Block): Promise<matrixV1022.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.EventRecord[]
    get(block: Block): Promise<enjinV100.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV101 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV101.EventRecord[]
    get(block: Block): Promise<enjinV101.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV110 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV110.EventRecord[]
    get(block: Block): Promise<enjinV110.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV120 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV120.EventRecord[]
    get(block: Block): Promise<enjinV120.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1021 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1021.EventRecord[]
    get(block: Block): Promise<enjinV1021.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1022.EventRecord[]
    get(block: Block): Promise<enjinV1022.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1023 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1023.EventRecord[]
    get(block: Block): Promise<enjinV1023.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1026 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1026.EventRecord[]
    get(block: Block): Promise<enjinV1026.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.EventRecord[]
    get(block: Block): Promise<enjinV1032.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1033 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1033.EventRecord[]
    get(block: Block): Promise<enjinV1033.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsEnjinV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1050.EventRecord[]
    get(block: Block): Promise<enjinV1050.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.EventRecord[]
    get(block: Block): Promise<v100.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV101 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v101.EventRecord[]
    get(block: Block): Promise<v101.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV102 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v102.EventRecord[]
    get(block: Block): Promise<v102.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV103 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v103.EventRecord[]
    get(block: Block): Promise<v103.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV104 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v104.EventRecord[]
    get(block: Block): Promise<v104.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV105 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v105.EventRecord[]
    get(block: Block): Promise<v105.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV106 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v106.EventRecord[]
    get(block: Block): Promise<v106.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV110 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v110.EventRecord[]
    get(block: Block): Promise<v110.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV120 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v120.EventRecord[]
    get(block: Block): Promise<v120.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1021 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1021.EventRecord[]
    get(block: Block): Promise<v1021.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1022.EventRecord[]
    get(block: Block): Promise<v1022.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1023 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1023.EventRecord[]
    get(block: Block): Promise<v1023.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1026 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1026.EventRecord[]
    get(block: Block): Promise<v1026.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.EventRecord[]
    get(block: Block): Promise<v1030.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1031 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1031.EventRecord[]
    get(block: Block): Promise<v1031.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1032.EventRecord[]
    get(block: Block): Promise<v1032.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1033 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1033.EventRecord[]
    get(block: Block): Promise<v1033.EventRecord[] | undefined>
}

/**
 *  Events deposited for the current block.
 *
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 *
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.EventRecord[]
    get(block: Block): Promise<v1050.EventRecord[] | undefined>
}

export const eventCount = {
    /**
     *  The number of events in the `Events<T>` list.
     */
    matrixEnjinV603: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountMatrixEnjinV603,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const eventTopics = {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     *
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     *
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    matrixEnjinV603: new StorageType(
        'System.EventTopics',
        'Default',
        [matrixEnjinV603.H256],
        sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))
    ) as EventTopicsMatrixEnjinV603,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 *
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 *
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: matrixEnjinV603.H256): Promise<[number, number][] | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: [number, number][] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.H256
    ): Promise<[k: matrixEnjinV603.H256, v: [number, number][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: [number, number][] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H256
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: [number, number][] | undefined][]>
}

export const lastRuntimeUpgrade = {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    matrixEnjinV603: new StorageType(
        'System.LastRuntimeUpgrade',
        'Optional',
        [],
        matrixEnjinV603.LastRuntimeUpgradeInfo
    ) as LastRuntimeUpgradeMatrixEnjinV603,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.LastRuntimeUpgradeInfo | undefined>
}

export const upgradedToU32RefCount = {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    matrixEnjinV603: new StorageType(
        'System.UpgradedToU32RefCount',
        'Default',
        [],
        sts.boolean()
    ) as UpgradedToU32RefCountMatrixEnjinV603,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const upgradedToTripleRefCount = {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    matrixEnjinV603: new StorageType(
        'System.UpgradedToTripleRefCount',
        'Default',
        [],
        sts.boolean()
    ) as UpgradedToTripleRefCountMatrixEnjinV603,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const executionPhase = {
    /**
     *  The execution phase of the block.
     */
    matrixEnjinV603: new StorageType(
        'System.ExecutionPhase',
        'Optional',
        [],
        matrixEnjinV603.Phase
    ) as ExecutionPhaseMatrixEnjinV603,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.Phase | undefined>
}

export const inherentsApplied = {
    /**
     *  Whether all inherents have been applied.
     */
    matrixEnjinV1012: new StorageType(
        'System.InherentsApplied',
        'Default',
        [],
        sts.boolean()
    ) as InherentsAppliedMatrixEnjinV1012,
}

/**
 *  Whether all inherents have been applied.
 */
export interface InherentsAppliedMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const authorizedUpgrade = {
    /**
     *  `Some` if a code upgrade has been authorized.
     */
    matrixEnjinV1012: new StorageType(
        'System.AuthorizedUpgrade',
        'Optional',
        [],
        matrixEnjinV1012.CodeUpgradeAuthorization
    ) as AuthorizedUpgradeMatrixEnjinV1012,
}

/**
 *  `Some` if a code upgrade has been authorized.
 */
export interface AuthorizedUpgradeMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1012.CodeUpgradeAuthorization | undefined>
}
