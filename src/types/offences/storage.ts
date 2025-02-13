import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const reports = {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    enjinV100: new StorageType(
        'Offences.Reports',
        'Optional',
        [enjinV100.H256],
        enjinV100.OffenceDetails
    ) as ReportsEnjinV100,
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface ReportsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.H256): Promise<enjinV100.OffenceDetails | undefined>
    getMany(block: Block, keys: enjinV100.H256[]): Promise<(enjinV100.OffenceDetails | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.H256[]>
    getKeys(block: Block, key: enjinV100.H256): Promise<enjinV100.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.H256): AsyncIterable<enjinV100.H256[]>
    getPairs(block: Block): Promise<[k: enjinV100.H256, v: enjinV100.OffenceDetails | undefined][]>
    getPairs(block: Block, key: enjinV100.H256): Promise<[k: enjinV100.H256, v: enjinV100.OffenceDetails | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.H256, v: enjinV100.OffenceDetails | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.H256
    ): AsyncIterable<[k: enjinV100.H256, v: enjinV100.OffenceDetails | undefined][]>
}

export const concurrentReportsIndex = {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    enjinV100: new StorageType(
        'Offences.ConcurrentReportsIndex',
        'Default',
        [sts.bytes(), sts.bytes()],
        sts.array(() => enjinV100.H256)
    ) as ConcurrentReportsIndexEnjinV100,
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface ConcurrentReportsIndexEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.H256[]
    get(block: Block, key1: Bytes, key2: Bytes): Promise<enjinV100.H256[] | undefined>
    getMany(block: Block, keys: [Bytes, Bytes][]): Promise<(enjinV100.H256[] | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, Bytes][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, Bytes][]>
    getKeys(block: Block, key1: Bytes, key2: Bytes): Promise<[Bytes, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: Bytes): AsyncIterable<[Bytes, Bytes][]>
    getPairs(block: Block): Promise<[k: [Bytes, Bytes], v: enjinV100.H256[] | undefined][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, Bytes], v: enjinV100.H256[] | undefined][]>
    getPairs(block: Block, key1: Bytes, key2: Bytes): Promise<[k: [Bytes, Bytes], v: enjinV100.H256[] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, Bytes], v: enjinV100.H256[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: Bytes
    ): AsyncIterable<[k: [Bytes, Bytes], v: enjinV100.H256[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: Bytes,
        key2: Bytes
    ): AsyncIterable<[k: [Bytes, Bytes], v: enjinV100.H256[] | undefined][]>
}

export const reportsByKindIndex = {
    /**
     *  Enumerates all reports of a kind along with the time they happened.
     *
     *  All reports are sorted by the time of offence.
     *
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    v100: new StorageType(
        'Offences.ReportsByKindIndex',
        'Default',
        [sts.bytes()],
        sts.bytes()
    ) as ReportsByKindIndexV100,
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 *
 *  All reports are sorted by the time of offence.
 *
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface ReportsByKindIndexV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: Bytes): Promise<Bytes | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: Bytes | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: Bytes | undefined][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: Bytes | undefined][]>
}
