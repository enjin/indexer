import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const coreSchedules = {
    /**
     *  Scheduled assignment sets.
     *
     *  Assignments as of the given block number. They will go into state once the block number is
     *  reached (and replace whatever was in there before).
     */
    v1060: new StorageType(
        'CoretimeAssignmentProvider.CoreSchedules',
        'Optional',
        [sts.tuple(() => [sts.number(), v1060.V8CoreIndex])],
        v1060.Schedule
    ) as CoreSchedulesV1060,
}

/**
 *  Scheduled assignment sets.
 *
 *  Assignments as of the given block number. They will go into state once the block number is
 *  reached (and replace whatever was in there before).
 */
export interface CoreSchedulesV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [number, v1060.V8CoreIndex]): Promise<v1060.Schedule | undefined>
    getMany(block: Block, keys: [number, v1060.V8CoreIndex][]): Promise<(v1060.Schedule | undefined)[]>
}

export const coreDescriptors = {
    /**
     *  Assignments which are currently active.
     *
     *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
     *  `PendingAssignments`.
     */
    v1060: new StorageType(
        'CoretimeAssignmentProvider.CoreDescriptors',
        'Default',
        [v1060.V8CoreIndex],
        v1060.CoreDescriptor
    ) as CoreDescriptorsV1060,
}

/**
 *  Assignments which are currently active.
 *
 *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
 *  `PendingAssignments`.
 */
export interface CoreDescriptorsV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1060.CoreDescriptor
    get(block: Block, key: v1060.V8CoreIndex): Promise<v1060.CoreDescriptor | undefined>
    getMany(block: Block, keys: v1060.V8CoreIndex[]): Promise<(v1060.CoreDescriptor | undefined)[]>
}
