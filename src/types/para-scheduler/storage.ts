import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const validatorGroups = {
    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     *
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    enjinV100: new StorageType(
        'ParaScheduler.ValidatorGroups',
        'Default',
        [],
        sts.array(() => sts.array(() => enjinV100.V4ValidatorIndex))
    ) as ValidatorGroupsEnjinV100,
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 *
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
 *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
 */
export interface ValidatorGroupsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.V4ValidatorIndex[][]
    get(block: Block): Promise<enjinV100.V4ValidatorIndex[][] | undefined>
}

export const parathreadQueue = {
    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     *
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    enjinV100: new StorageType(
        'ParaScheduler.ParathreadQueue',
        'Default',
        [],
        enjinV100.ParathreadClaimQueue
    ) as ParathreadQueueEnjinV100,
}

/**
 *  A queue of upcoming claims and which core they should be mapped onto.
 *
 *  The number of queued claims is bounded at the `scheduling_lookahead`
 *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
 */
export interface ParathreadQueueEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.ParathreadClaimQueue
    get(block: Block): Promise<enjinV100.ParathreadClaimQueue | undefined>
}

export const availabilityCores = {
    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    enjinV100: new StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        sts.array(() => sts.option(() => enjinV100.V4CoreOccupied))
    ) as AvailabilityCoresEnjinV100,
    /**
     *  One entry for each availability core. The i'th parachain belongs to the i'th core, with the
     *  remaining cores all being on demand parachain multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    enjinV1032: new StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        sts.array(() => enjinV1032.CoreOccupied)
    ) as AvailabilityCoresEnjinV1032,
    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    v100: new StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        sts.array(() => sts.option(() => v100.V2CoreOccupied))
    ) as AvailabilityCoresV100,
    /**
     *  One entry for each availability core. The i'th parachain belongs to the i'th core, with the
     *  remaining cores all being on demand parachain multiplexers.
     *
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    v1030: new StorageType(
        'ParaScheduler.AvailabilityCores',
        'Default',
        [],
        sts.array(() => v1030.CoreOccupied)
    ) as AvailabilityCoresV1030,
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
 *  temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 *
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface AvailabilityCoresEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (enjinV100.V4CoreOccupied | undefined)[]
    get(block: Block): Promise<(enjinV100.V4CoreOccupied | undefined)[] | undefined>
}

/**
 *  One entry for each availability core. The i'th parachain belongs to the i'th core, with the
 *  remaining cores all being on demand parachain multiplexers.
 *
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface AvailabilityCoresEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.CoreOccupied[]
    get(block: Block): Promise<enjinV1032.CoreOccupied[] | undefined>
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
 *  temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 *
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface AvailabilityCoresV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v100.V2CoreOccupied | undefined)[]
    get(block: Block): Promise<(v100.V2CoreOccupied | undefined)[] | undefined>
}

/**
 *  One entry for each availability core. The i'th parachain belongs to the i'th core, with the
 *  remaining cores all being on demand parachain multiplexers.
 *
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface AvailabilityCoresV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.CoreOccupied[]
    get(block: Block): Promise<v1030.CoreOccupied[] | undefined>
}

export const parathreadClaimIndex = {
    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     *
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    enjinV100: new StorageType(
        'ParaScheduler.ParathreadClaimIndex',
        'Default',
        [],
        sts.array(() => enjinV100.Id)
    ) as ParathreadClaimIndexEnjinV100,
}

/**
 *  An index used to ensure that only one claim on a parathread exists in the queue or is
 *  currently being handled by an occupied core.
 *
 *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
 */
export interface ParathreadClaimIndexEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block): Promise<enjinV100.Id[] | undefined>
}

export const sessionStartBlock = {
    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     *
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    enjinV100: new StorageType(
        'ParaScheduler.SessionStartBlock',
        'Default',
        [],
        sts.number()
    ) as SessionStartBlockEnjinV100,
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations have occurred.
 *
 *  Note that in the context of parachains modules the session change is signaled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface SessionStartBlockEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const scheduled = {
    /**
     *  Currently scheduled cores - free but up to be occupied.
     *
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     *
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    enjinV100: new StorageType(
        'ParaScheduler.Scheduled',
        'Default',
        [],
        sts.array(() => enjinV100.CoreAssignment)
    ) as ScheduledEnjinV100,
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 *
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 *
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ScheduledEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.CoreAssignment[]
    get(block: Block): Promise<enjinV100.CoreAssignment[] | undefined>
}

export const claimQueue = {
    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores for the upcoming block.
     */
    enjinV1032: new StorageType(
        'ParaScheduler.ClaimQueue',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [enjinV1032.V6CoreIndex, sts.array(() => enjinV1032.ParasEntry)]))
    ) as ClaimQueueEnjinV1032,
}

/**
 *  One entry for each availability core. The `VecDeque` represents the assignments to be
 *  scheduled on that core. The value contained here will not be valid after the end of
 *  a block. Runtime APIs should be used to determine scheduled cores for the upcoming block.
 */
export interface ClaimQueueEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV1032.V6CoreIndex, enjinV1032.ParasEntry[]][]
    get(block: Block): Promise<[enjinV1032.V6CoreIndex, enjinV1032.ParasEntry[]][] | undefined>
}
