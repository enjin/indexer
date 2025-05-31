import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const round =  {
    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.Round', 'Default', [], sts.number()) as RoundEnjinV100,
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface RoundEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const currentPhase =  {
    /**
     *  Current phase.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.CurrentPhase', 'Default', [], enjinV100.Phase) as CurrentPhaseEnjinV100,
}

/**
 *  Current phase.
 */
export interface CurrentPhaseEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Phase
    get(block: Block): Promise<(enjinV100.Phase | undefined)>
}

export const queuedSolution =  {
    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.QueuedSolution', 'Optional', [], enjinV100.ReadySolution) as QueuedSolutionEnjinV100,
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface QueuedSolutionEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.ReadySolution | undefined)>
}

export const snapshot =  {
    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.Snapshot', 'Optional', [], enjinV100.RoundSnapshot) as SnapshotEnjinV100,
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface SnapshotEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.RoundSnapshot | undefined)>
}

export const desiredTargets =  {
    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.DesiredTargets', 'Optional', [], sts.number()) as DesiredTargetsEnjinV100,
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface DesiredTargetsEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const snapshotMetadata =  {
    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.SnapshotMetadata', 'Optional', [], enjinV100.SolutionOrSnapshotSize) as SnapshotMetadataEnjinV100,
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface SnapshotMetadataEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.SolutionOrSnapshotSize | undefined)>
}

export const signedSubmissionNextIndex =  {
    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.SignedSubmissionNextIndex', 'Default', [], sts.number()) as SignedSubmissionNextIndexEnjinV100,
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface SignedSubmissionNextIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const signedSubmissionIndices =  {
    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.SignedSubmissionIndices', 'Default', [], sts.array(() => sts.tuple(() => [enjinV100.ElectionScore, sts.number(), sts.number()]))) as SignedSubmissionIndicesEnjinV100,
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface SignedSubmissionIndicesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV100.ElectionScore, number, number][]
    get(block: Block): Promise<([enjinV100.ElectionScore, number, number][] | undefined)>
}

export const signedSubmissionsMap =  {
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Optional', [sts.number()], enjinV100.SignedSubmission) as SignedSubmissionsMapEnjinV100,
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(enjinV100.SignedSubmission | undefined)>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.SignedSubmission | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (enjinV100.SignedSubmission | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (enjinV100.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (enjinV100.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (enjinV100.SignedSubmission | undefined)][]>
}

export const minimumUntrustedScore =  {
    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    enjinV100: new StorageType('ElectionProviderMultiPhase.MinimumUntrustedScore', 'Optional', [], enjinV100.ElectionScore) as MinimumUntrustedScoreEnjinV100,
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface MinimumUntrustedScoreEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.ElectionScore | undefined)>
}
