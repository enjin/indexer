import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v104 from '../v104'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    enjinV100: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexEnjinV100,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    enjinV100: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()]))) as AuthoritiesEnjinV100,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, bigint][]
    get(block: Block): Promise<([Bytes, bigint][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    enjinV100: new StorageType('Babe.GenesisSlot', 'Default', [], enjinV100.Slot) as GenesisSlotEnjinV100,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Slot
    get(block: Block): Promise<(enjinV100.Slot | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    enjinV100: new StorageType('Babe.CurrentSlot', 'Default', [], enjinV100.Slot) as CurrentSlotEnjinV100,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Slot
    get(block: Block): Promise<(enjinV100.Slot | undefined)>
}

export const randomness =  {
    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    enjinV100: new StorageType('Babe.Randomness', 'Default', [], sts.bytes()) as RandomnessEnjinV100,
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface RandomnessEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const pendingEpochConfigChange =  {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    enjinV100: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], enjinV100.NextConfigDescriptor) as PendingEpochConfigChangeEnjinV100,
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.NextConfigDescriptor | undefined)>
}

export const nextRandomness =  {
    /**
     *  Next epoch randomness.
     */
    enjinV100: new StorageType('Babe.NextRandomness', 'Default', [], sts.bytes()) as NextRandomnessEnjinV100,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    enjinV100: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()]))) as NextAuthoritiesEnjinV100,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, bigint][]
    get(block: Block): Promise<([Bytes, bigint][] | undefined)>
}

export const segmentIndex =  {
    /**
     *  Randomness under construction.
     * 
     *  We make a trade-off between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    enjinV100: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexEnjinV100,
}

/**
 *  Randomness under construction.
 * 
 *  We make a trade-off between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface SegmentIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    enjinV100: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => sts.bytes())) as UnderConstructionEnjinV100,
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface UnderConstructionEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block, key: number): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes[] | undefined)][]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    enjinV100: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => enjinV100.PreDigest)) as InitializedEnjinV100,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    enjinV1032: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => enjinV1032.PreDigest)) as InitializedEnjinV1032,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v100: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v100.PreDigest)) as InitializedV100,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v104: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v104.PreDigest)) as InitializedV104,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v1030: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v1030.PreDigest)) as InitializedV1030,
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((enjinV100.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((enjinV1032.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v100.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV104  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v104.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV1030  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v1030.PreDigest | undefined) | undefined)>
}

export const authorVrfRandomness =  {
    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    enjinV100: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], sts.option(() => sts.bytes())) as AuthorVrfRandomnessEnjinV100,
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface AuthorVrfRandomnessEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (Bytes | undefined)
    get(block: Block): Promise<((Bytes | undefined) | undefined)>
}

export const epochStart =  {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    enjinV100: new StorageType('Babe.EpochStart', 'Default', [], sts.tuple(() => [sts.number(), sts.number()])) as EpochStartEnjinV100,
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface EpochStartEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block): Promise<([number, number] | undefined)>
}

export const lateness =  {
    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    enjinV100: new StorageType('Babe.Lateness', 'Default', [], sts.number()) as LatenessEnjinV100,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const epochConfig =  {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    enjinV100: new StorageType('Babe.EpochConfig', 'Optional', [], enjinV100.BabeEpochConfiguration) as EpochConfigEnjinV100,
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface EpochConfigEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.BabeEpochConfiguration | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    enjinV100: new StorageType('Babe.NextEpochConfig', 'Optional', [], enjinV100.BabeEpochConfiguration) as NextEpochConfigEnjinV100,
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface NextEpochConfigEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.BabeEpochConfiguration | undefined)>
}

export const skippedEpochs =  {
    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    enjinV100: new StorageType('Babe.SkippedEpochs', 'Default', [], sts.array(() => sts.tuple(() => [sts.bigint(), sts.number()]))) as SkippedEpochsEnjinV100,
}

/**
 *  A list of the last 100 skipped epochs and the corresponding session index
 *  when the epoch was skipped.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof
 *  must contains a key-ownership proof for a given session, therefore we need a
 *  way to tie together sessions and epoch indices, i.e. we need to validate that
 *  a validator was the owner of a given key on a given session, and what the
 *  active epoch index was during that session.
 */
export interface SkippedEpochsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, number][]
    get(block: Block): Promise<([bigint, number][] | undefined)>
}
