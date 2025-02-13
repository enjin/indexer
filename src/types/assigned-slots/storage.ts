import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const permanentSlots = {
    /**
     *  Assigned permanent slots, with their start lease period, and duration.
     */
    enjinV100: new StorageType(
        'AssignedSlots.PermanentSlots',
        'Optional',
        [enjinV100.Id],
        sts.tuple(() => [sts.number(), sts.number()])
    ) as PermanentSlotsEnjinV100,
}

/**
 *  Assigned permanent slots, with their start lease period, and duration.
 */
export interface PermanentSlotsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<[number, number] | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: [number, number] | undefined][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: [number, number] | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: [number, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: [number, number] | undefined][]>
}

export const permanentSlotCount = {
    /**
     *  Number of assigned (and active) permanent slots.
     */
    enjinV100: new StorageType(
        'AssignedSlots.PermanentSlotCount',
        'Default',
        [],
        sts.number()
    ) as PermanentSlotCountEnjinV100,
}

/**
 *  Number of assigned (and active) permanent slots.
 */
export interface PermanentSlotCountEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const temporarySlots = {
    /**
     *  Assigned temporary slots.
     */
    enjinV100: new StorageType(
        'AssignedSlots.TemporarySlots',
        'Optional',
        [enjinV100.Id],
        enjinV100.ParachainTemporarySlot
    ) as TemporarySlotsEnjinV100,
}

/**
 *  Assigned temporary slots.
 */
export interface TemporarySlotsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<enjinV100.ParachainTemporarySlot | undefined>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.ParachainTemporarySlot | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: enjinV100.ParachainTemporarySlot | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.Id
    ): Promise<[k: enjinV100.Id, v: enjinV100.ParachainTemporarySlot | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParachainTemporarySlot | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.Id
    ): AsyncIterable<[k: enjinV100.Id, v: enjinV100.ParachainTemporarySlot | undefined][]>
}

export const temporarySlotCount = {
    /**
     *  Number of assigned temporary slots.
     */
    enjinV100: new StorageType(
        'AssignedSlots.TemporarySlotCount',
        'Default',
        [],
        sts.number()
    ) as TemporarySlotCountEnjinV100,
}

/**
 *  Number of assigned temporary slots.
 */
export interface TemporarySlotCountEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const activeTemporarySlotCount = {
    /**
     *  Number of active temporary slots in current slot lease period.
     */
    enjinV100: new StorageType(
        'AssignedSlots.ActiveTemporarySlotCount',
        'Default',
        [],
        sts.number()
    ) as ActiveTemporarySlotCountEnjinV100,
}

/**
 *  Number of active temporary slots in current slot lease period.
 */
export interface ActiveTemporarySlotCountEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const maxTemporarySlots = {
    /**
     *   The max number of temporary slots that can be assigned.
     */
    enjinV1032: new StorageType(
        'AssignedSlots.MaxTemporarySlots',
        'Default',
        [],
        sts.number()
    ) as MaxTemporarySlotsEnjinV1032,
}

/**
 *   The max number of temporary slots that can be assigned.
 */
export interface MaxTemporarySlotsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const maxPermanentSlots = {
    /**
     *  The max number of permanent slots that can be assigned.
     */
    enjinV1032: new StorageType(
        'AssignedSlots.MaxPermanentSlots',
        'Default',
        [],
        sts.number()
    ) as MaxPermanentSlotsEnjinV1032,
}

/**
 *  The max number of permanent slots that can be assigned.
 */
export interface MaxPermanentSlotsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}
