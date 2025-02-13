import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v1050 from '../v1050'

export const availabilityBitfields = {
    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    enjinV100: new StorageType(
        'ParaInclusion.AvailabilityBitfields',
        'Optional',
        [enjinV100.V4ValidatorIndex],
        enjinV100.AvailabilityBitfieldRecord
    ) as AvailabilityBitfieldsEnjinV100,
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface AvailabilityBitfieldsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.V4ValidatorIndex): Promise<enjinV100.AvailabilityBitfieldRecord | undefined>
    getMany(
        block: Block,
        keys: enjinV100.V4ValidatorIndex[]
    ): Promise<(enjinV100.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.V4ValidatorIndex[]>
    getKeys(block: Block, key: enjinV100.V4ValidatorIndex): Promise<enjinV100.V4ValidatorIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.V4ValidatorIndex[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.V4ValidatorIndex
    ): AsyncIterable<enjinV100.V4ValidatorIndex[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV100.V4ValidatorIndex, v: enjinV100.AvailabilityBitfieldRecord | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.V4ValidatorIndex
    ): Promise<[k: enjinV100.V4ValidatorIndex, v: enjinV100.AvailabilityBitfieldRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.V4ValidatorIndex, v: enjinV100.AvailabilityBitfieldRecord | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.V4ValidatorIndex
    ): AsyncIterable<[k: enjinV100.V4ValidatorIndex, v: enjinV100.AvailabilityBitfieldRecord | undefined][]>
}

export const pendingAvailability = {
    /**
     *  Candidates pending availability by `ParaId`.
     */
    enjinV100: new StorageType(
        'ParaInclusion.PendingAvailability',
        'Optional',
        [enjinV100.Id],
        enjinV100.CandidatePendingAvailability
    ) as PendingAvailabilityEnjinV100,
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface PendingAvailabilityEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.CandidatePendingAvailability | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.CandidatePendingAvailability | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.CandidatePendingAvailability | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.Id
    ): Promise<[k: enjinV100.Id, v: enjinV100.CandidatePendingAvailability | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.CandidatePendingAvailability | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.CandidatePendingAvailability | undefined][]>
}

export const pendingAvailabilityCommitments = {
    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    enjinV100: new StorageType(
        'ParaInclusion.PendingAvailabilityCommitments',
        'Optional',
        [enjinV100.Id],
        enjinV100.V4CandidateCommitments
    ) as PendingAvailabilityCommitmentsEnjinV100,
}

/**
 *  The commitments of candidates pending availability, by `ParaId`.
 */
export interface PendingAvailabilityCommitmentsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.V4CandidateCommitments | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.V4CandidateCommitments | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.V4CandidateCommitments | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.Id
    ): Promise<[k: enjinV100.Id, v: enjinV100.V4CandidateCommitments | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.V4CandidateCommitments | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.V4CandidateCommitments | undefined][]>
}

export const v1 = {
    /**
     *  Candidates pending availability by `ParaId`. They form a chain starting from the latest
     *  included head of the para.
     *  Use a different prefix post-migration to v1, since the v0 `PendingAvailability` storage
     *  would otherwise have the exact same prefix which could cause undefined behaviour when doing
     *  the migration.
     */
    v1050: new StorageType(
        'ParaInclusion.V1',
        'Optional',
        [v1050.Id],
        sts.array(() => v1050.CandidatePendingAvailability)
    ) as V1V1050,
}

/**
 *  Candidates pending availability by `ParaId`. They form a chain starting from the latest
 *  included head of the para.
 *  Use a different prefix post-migration to v1, since the v0 `PendingAvailability` storage
 *  would otherwise have the exact same prefix which could cause undefined behaviour when doing
 *  the migration.
 */
export interface V1V1050 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1050.Id): Promise<v1050.CandidatePendingAvailability[] | undefined>
    getMany(block: Block, keys: v1050.Id[]): Promise<(v1050.CandidatePendingAvailability[] | undefined)[]>
    getKeys(block: Block): Promise<v1050.Id[]>
    getKeys(block: Block, key: v1050.Id): Promise<v1050.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1050.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1050.Id): AsyncIterable<v1050.Id[]>
    getPairs(block: Block): Promise<[k: v1050.Id, v: v1050.CandidatePendingAvailability[] | undefined][]>
    getPairs(block: Block, key: v1050.Id): Promise<[k: v1050.Id, v: v1050.CandidatePendingAvailability[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1050.Id, v: v1050.CandidatePendingAvailability[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1050.Id
    ): AsyncIterable<[k: v1050.Id, v: v1050.CandidatePendingAvailability[] | undefined][]>
}
