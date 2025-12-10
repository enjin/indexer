import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const coreSchedules = {
    /**
     *  Scheduled assignment sets.
     *
     *  Assignments as of the given block number. They will go into state once the block number is
     *  reached (and replace whatever was in there before).
     */
    enjinV1062: new StorageType(
        'CoretimeAssignmentProvider.CoreSchedules',
        'Optional',
        [sts.tuple(() => [sts.number(), enjinV1062.V8CoreIndex])],
        enjinV1062.Schedule
    ) as CoreSchedulesEnjinV1062,
}

/**
 *  Scheduled assignment sets.
 *
 *  Assignments as of the given block number. They will go into state once the block number is
 *  reached (and replace whatever was in there before).
 */
export interface CoreSchedulesEnjinV1062 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [number, enjinV1062.V8CoreIndex]): Promise<enjinV1062.Schedule | undefined>
    getMany(block: Block, keys: [number, enjinV1062.V8CoreIndex][]): Promise<(enjinV1062.Schedule | undefined)[]>
}

export const coreDescriptors = {
    /**
     *  Assignments which are currently active.
     *
     *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
     *  `PendingAssignments`.
     */
    enjinV1062: new StorageType(
        'CoretimeAssignmentProvider.CoreDescriptors',
        'Default',
        [enjinV1062.V8CoreIndex],
        enjinV1062.CoreDescriptor
    ) as CoreDescriptorsEnjinV1062,
}

/**
 *  Assignments which are currently active.
 *
 *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
 *  `PendingAssignments`.
 */
export interface CoreDescriptorsEnjinV1062 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1062.CoreDescriptor
    get(block: Block, key: enjinV1062.V8CoreIndex): Promise<enjinV1062.CoreDescriptor | undefined>
    getMany(block: Block, keys: enjinV1062.V8CoreIndex[]): Promise<(enjinV1062.CoreDescriptor | undefined)[]>
}
