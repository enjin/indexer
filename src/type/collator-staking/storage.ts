import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1040 from '../matrixV1040'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const collators = {
    /**
     *  The current set of collators
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.Collators',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.Collator)
    ) as CollatorsMatrixEnjinV603,
    /**
     *  The current set of collators
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.Collators',
        'Default',
        [],
        sts.array(() => matrixEnjinV1041.Collator)
    ) as CollatorsMatrixEnjinV1041,
    /**
     *  The current set of collators
     */
    matrixV500: new StorageType(
        'CollatorStaking.Collators',
        'Default',
        [],
        sts.array(() => matrixV500.Collator)
    ) as CollatorsMatrixV500,
    /**
     *  The current set of collators
     */
    matrixV1040: new StorageType(
        'CollatorStaking.Collators',
        'Default',
        [],
        sts.array(() => matrixV1040.Collator)
    ) as CollatorsMatrixV1040,
}

/**
 *  The current set of collators
 */
export interface CollatorsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Collator[]
    get(block: Block): Promise<matrixEnjinV603.Collator[] | undefined>
}

/**
 *  The current set of collators
 */
export interface CollatorsMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1041.Collator[]
    get(block: Block): Promise<matrixEnjinV1041.Collator[] | undefined>
}

/**
 *  The current set of collators
 */
export interface CollatorsMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.Collator[]
    get(block: Block): Promise<matrixV500.Collator[] | undefined>
}

/**
 *  The current set of collators
 */
export interface CollatorsMatrixV1040 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1040.Collator[]
    get(block: Block): Promise<matrixV1040.Collator[] | undefined>
}

export const invulnerables = {
    /**
     *  The invulnerable collators
     *
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.Invulnerables',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.Collator)
    ) as InvulnerablesMatrixEnjinV603,
    /**
     *  The invulnerable collators
     *
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.Invulnerables',
        'Default',
        [],
        sts.array(() => matrixEnjinV1041.Collator)
    ) as InvulnerablesMatrixEnjinV1041,
    /**
     *  The invulnerable collators
     *
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    matrixV500: new StorageType(
        'CollatorStaking.Invulnerables',
        'Default',
        [],
        sts.array(() => matrixV500.Collator)
    ) as InvulnerablesMatrixV500,
    /**
     *  The invulnerable collators
     *
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    matrixV1040: new StorageType(
        'CollatorStaking.Invulnerables',
        'Default',
        [],
        sts.array(() => matrixV1040.Collator)
    ) as InvulnerablesMatrixV1040,
}

/**
 *  The invulnerable collators
 *
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface InvulnerablesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Collator[]
    get(block: Block): Promise<matrixEnjinV603.Collator[] | undefined>
}

/**
 *  The invulnerable collators
 *
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface InvulnerablesMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1041.Collator[]
    get(block: Block): Promise<matrixEnjinV1041.Collator[] | undefined>
}

/**
 *  The invulnerable collators
 *
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface InvulnerablesMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.Collator[]
    get(block: Block): Promise<matrixV500.Collator[] | undefined>
}

/**
 *  The invulnerable collators
 *
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface InvulnerablesMatrixV1040 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1040.Collator[]
    get(block: Block): Promise<matrixV1040.Collator[] | undefined>
}

export const candidates = {
    /**
     *  The current set of candidates for collation.
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.Candidates',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.Collator)
    ) as CandidatesMatrixEnjinV603,
    /**
     *  The current set of candidates for collation.
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.Candidates',
        'Default',
        [],
        sts.array(() => matrixEnjinV1041.Collator)
    ) as CandidatesMatrixEnjinV1041,
    /**
     *  The current set of candidates for collation.
     */
    matrixV500: new StorageType(
        'CollatorStaking.Candidates',
        'Default',
        [],
        sts.array(() => matrixV500.Collator)
    ) as CandidatesMatrixV500,
    /**
     *  The current set of candidates for collation.
     */
    matrixV1040: new StorageType(
        'CollatorStaking.Candidates',
        'Default',
        [],
        sts.array(() => matrixV1040.Collator)
    ) as CandidatesMatrixV1040,
}

/**
 *  The current set of candidates for collation.
 */
export interface CandidatesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Collator[]
    get(block: Block): Promise<matrixEnjinV603.Collator[] | undefined>
}

/**
 *  The current set of candidates for collation.
 */
export interface CandidatesMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1041.Collator[]
    get(block: Block): Promise<matrixEnjinV1041.Collator[] | undefined>
}

/**
 *  The current set of candidates for collation.
 */
export interface CandidatesMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.Collator[]
    get(block: Block): Promise<matrixV500.Collator[] | undefined>
}

/**
 *  The current set of candidates for collation.
 */
export interface CandidatesMatrixV1040 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1040.Collator[]
    get(block: Block): Promise<matrixV1040.Collator[] | undefined>
}

export const desiredCandidatesCount = {
    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.DesiredCandidatesCount',
        'Default',
        [],
        sts.number()
    ) as DesiredCandidatesCountMatrixEnjinV603,
}

/**
 *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
 */
export interface DesiredCandidatesCountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const nominators = {
    /**
     *  The current set of nominators.
     *
     *  Each nominator is allowed to nominate one collator.
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.Nominators',
        'Optional',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.Nomination
    ) as NominatorsMatrixEnjinV603,
    /**
     *  The current set of nominators.
     *
     *  Each nominator is allowed to nominate one collator.
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.Nominators',
        'Optional',
        [matrixEnjinV1041.AccountId32],
        matrixEnjinV1041.Nomination
    ) as NominatorsMatrixEnjinV1041,
    /**
     *  The current set of nominators.
     *
     *  Each nominator is allowed to nominate one collator.
     */
    matrixV500: new StorageType(
        'CollatorStaking.Nominators',
        'Optional',
        [matrixV500.AccountId32],
        matrixV500.Nomination
    ) as NominatorsMatrixV500,
    /**
     *  The current set of nominators.
     *
     *  Each nominator is allowed to nominate one collator.
     */
    matrixV1040: new StorageType(
        'CollatorStaking.Nominators',
        'Optional',
        [matrixV1040.AccountId32],
        matrixV1040.Nomination
    ) as NominatorsMatrixV1040,
}

/**
 *  The current set of nominators.
 *
 *  Each nominator is allowed to nominate one collator.
 */
export interface NominatorsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.Nomination | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.Nomination | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.Nomination | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.Nomination | undefined][]>
}

/**
 *  The current set of nominators.
 *
 *  Each nominator is allowed to nominate one collator.
 */
export interface NominatorsMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1041.AccountId32): Promise<matrixEnjinV1041.Nomination | undefined>
    getMany(block: Block, keys: matrixEnjinV1041.AccountId32[]): Promise<(matrixEnjinV1041.Nomination | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1041.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1041.AccountId32): Promise<matrixEnjinV1041.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1041.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1041.AccountId32
    ): AsyncIterable<matrixEnjinV1041.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1041.AccountId32, v: matrixEnjinV1041.Nomination | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1041.AccountId32
    ): Promise<[k: matrixEnjinV1041.AccountId32, v: matrixEnjinV1041.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1041.AccountId32, v: matrixEnjinV1041.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1041.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1041.AccountId32, v: matrixEnjinV1041.Nomination | undefined][]>
}

/**
 *  The current set of nominators.
 *
 *  Each nominator is allowed to nominate one collator.
 */
export interface NominatorsMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.Nomination | undefined>
    getMany(block: Block, keys: matrixV500.AccountId32[]): Promise<(matrixV500.Nomination | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.AccountId32[]>
    getKeys(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.AccountId32): AsyncIterable<matrixV500.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV500.AccountId32, v: matrixV500.Nomination | undefined][]>
    getPairs(
        block: Block,
        key: matrixV500.AccountId32
    ): Promise<[k: matrixV500.AccountId32, v: matrixV500.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.AccountId32
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.Nomination | undefined][]>
}

/**
 *  The current set of nominators.
 *
 *  Each nominator is allowed to nominate one collator.
 */
export interface NominatorsMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1040.AccountId32): Promise<matrixV1040.Nomination | undefined>
    getMany(block: Block, keys: matrixV1040.AccountId32[]): Promise<(matrixV1040.Nomination | undefined)[]>
    getKeys(block: Block): Promise<matrixV1040.AccountId32[]>
    getKeys(block: Block, key: matrixV1040.AccountId32): Promise<matrixV1040.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1040.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1040.AccountId32): AsyncIterable<matrixV1040.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1040.AccountId32, v: matrixV1040.Nomination | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1040.AccountId32
    ): Promise<[k: matrixV1040.AccountId32, v: matrixV1040.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1040.AccountId32, v: matrixV1040.Nomination | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1040.AccountId32
    ): AsyncIterable<[k: matrixV1040.AccountId32, v: matrixV1040.Nomination | undefined][]>
}

export const currentRound = {
    /**
     *  The current round information.
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.CurrentRound',
        'Default',
        [],
        matrixEnjinV603.Round
    ) as CurrentRoundMatrixEnjinV603,
    /**
     *  The current round information.
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.CurrentRound',
        'Default',
        [],
        matrixEnjinV1041.Round
    ) as CurrentRoundMatrixEnjinV1041,
    /**
     *  The current round information.
     */
    matrixV500: new StorageType(
        'CollatorStaking.CurrentRound',
        'Default',
        [],
        matrixV500.Round
    ) as CurrentRoundMatrixV500,
    /**
     *  The current round information.
     */
    matrixV1040: new StorageType(
        'CollatorStaking.CurrentRound',
        'Default',
        [],
        matrixV1040.Round
    ) as CurrentRoundMatrixV1040,
}

/**
 *  The current round information.
 */
export interface CurrentRoundMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Round
    get(block: Block): Promise<matrixEnjinV603.Round | undefined>
}

/**
 *  The current round information.
 */
export interface CurrentRoundMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1041.Round
    get(block: Block): Promise<matrixEnjinV1041.Round | undefined>
}

/**
 *  The current round information.
 */
export interface CurrentRoundMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.Round
    get(block: Block): Promise<matrixV500.Round | undefined>
}

/**
 *  The current round information.
 */
export interface CurrentRoundMatrixV1040 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1040.Round
    get(block: Block): Promise<matrixV1040.Round | undefined>
}

export const collatorExits = {
    /**
     *  The list of collators who requested an exit.
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.CollatorExits',
        'Optional',
        [matrixEnjinV603.AccountId32],
        sts.number()
    ) as CollatorExitsMatrixEnjinV603,
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorExitsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<number | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: number | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: number | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: number | undefined][]>
}

export const minCollatorStake = {
    /**
     *  The min stake amount for collators
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.MinCollatorStake',
        'Default',
        [],
        sts.bigint()
    ) as MinCollatorStakeMatrixEnjinV603,
}

/**
 *  The min stake amount for collators
 */
export interface MinCollatorStakeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const sessionInfo = {
    /**
     *  The session info of collators including produced blocks and uptime
     */
    matrixEnjinV603: new StorageType(
        'CollatorStaking.SessionInfo',
        'Default',
        [matrixEnjinV603.AccountId32, sts.number()],
        matrixEnjinV603.CollatorSessionInfo
    ) as SessionInfoMatrixEnjinV603,
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface SessionInfoMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.CollatorSessionInfo
    get(
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: number
    ): Promise<matrixEnjinV603.CollatorSessionInfo | undefined>
    getMany(
        block: Block,
        keys: [matrixEnjinV603.AccountId32, number][]
    ): Promise<(matrixEnjinV603.CollatorSessionInfo | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.AccountId32, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[matrixEnjinV603.AccountId32, number][]>
    getKeys(
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: number
    ): Promise<[matrixEnjinV603.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): AsyncIterable<[matrixEnjinV603.AccountId32, number][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: number
    ): AsyncIterable<[matrixEnjinV603.AccountId32, number][]>
    getPairs(
        block: Block
    ): Promise<[k: [matrixEnjinV603.AccountId32, number], v: matrixEnjinV603.CollatorSessionInfo | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): Promise<[k: [matrixEnjinV603.AccountId32, number], v: matrixEnjinV603.CollatorSessionInfo | undefined][]>
    getPairs(
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: number
    ): Promise<[k: [matrixEnjinV603.AccountId32, number], v: matrixEnjinV603.CollatorSessionInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [matrixEnjinV603.AccountId32, number], v: matrixEnjinV603.CollatorSessionInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: [matrixEnjinV603.AccountId32, number], v: matrixEnjinV603.CollatorSessionInfo | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key1: matrixEnjinV603.AccountId32,
        key2: number
    ): AsyncIterable<[k: [matrixEnjinV603.AccountId32, number], v: matrixEnjinV603.CollatorSessionInfo | undefined][]>
}

export const exitCursor = {
    /**
     *  Resume point for the paginated end-of-session exit sweep.
     *
     *  `None` means the next sweep starts from the beginning of [`CollatorExits`]. The account is
     *  stored rather than a raw storage key because it reads better in state inspection, and
     *  because a cursor pointing at an entry that has since been removed is still a valid resume
     *  point — `iter_from` needs the key's position in hash order, not its presence.
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.ExitCursor',
        'Optional',
        [],
        matrixEnjinV1041.AccountId32
    ) as ExitCursorMatrixEnjinV1041,
}

/**
 *  Resume point for the paginated end-of-session exit sweep.
 *
 *  `None` means the next sweep starts from the beginning of [`CollatorExits`]. The account is
 *  stored rather than a raw storage key because it reads better in state inspection, and
 *  because a cursor pointing at an entry that has since been removed is still a valid resume
 *  point — `iter_from` needs the key's position in hash order, not its presence.
 */
export interface ExitCursorMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1041.AccountId32 | undefined>
}

export const sessionInfoPruneCursor = {
    /**
     *  Resume point for the `on_idle` [`SessionInfo`] retention sweep.
     *
     *  `None` means the next sweep starts from the beginning of the map. The sweep wraps around
     *  continuously, so this is a position rather than a completion marker.
     */
    matrixEnjinV1041: new StorageType(
        'CollatorStaking.SessionInfoPruneCursor',
        'Optional',
        [],
        sts.tuple(() => [matrixEnjinV1041.AccountId32, sts.number()])
    ) as SessionInfoPruneCursorMatrixEnjinV1041,
}

/**
 *  Resume point for the `on_idle` [`SessionInfo`] retention sweep.
 *
 *  `None` means the next sweep starts from the beginning of the map. The sweep wraps around
 *  continuously, so this is a position rather than a completion marker.
 */
export interface SessionInfoPruneCursorMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<[matrixEnjinV1041.AccountId32, number] | undefined>
}
