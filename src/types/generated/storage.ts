import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v100 from './v100'
import * as matrixEnjinV603 from './matrixEnjinV603'
import * as v101 from './v101'
import * as v102 from './v102'
import * as v103 from './v103'
import * as matrixEnjinV1000 from './matrixEnjinV1000'
import * as matrixEnjinV1003 from './matrixEnjinV1003'
import * as v104 from './v104'
import * as v105 from './v105'
import * as v106 from './v106'
import * as v110 from './v110'
import * as v120 from './v120'
import * as v1021 from './v1021'
import * as v1022 from './v1022'
import * as v1023 from './v1023'

export class AssignedSlotsActiveTemporarySlotCountStorage extends StorageBase {
    protected getPrefix() {
        return 'AssignedSlots'
    }

    protected getName() {
        return 'ActiveTemporarySlotCount'
    }

    /**
     *  Number of active temporary slots in current slot lease period.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of active temporary slots in current slot lease period.
     */
    get asV100(): AssignedSlotsActiveTemporarySlotCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Number of active temporary slots in current slot lease period.
 */
export interface AssignedSlotsActiveTemporarySlotCountStorageV100 {
    get(): Promise<number>
}

export class AssignedSlotsPermanentSlotCountStorage extends StorageBase {
    protected getPrefix() {
        return 'AssignedSlots'
    }

    protected getName() {
        return 'PermanentSlotCount'
    }

    /**
     *  Number of assigned (and active) permanent slots.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of assigned (and active) permanent slots.
     */
    get asV100(): AssignedSlotsPermanentSlotCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Number of assigned (and active) permanent slots.
 */
export interface AssignedSlotsPermanentSlotCountStorageV100 {
    get(): Promise<number>
}

export class AssignedSlotsPermanentSlotsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssignedSlots'
    }

    protected getName() {
        return 'PermanentSlots'
    }

    /**
     *  Assigned permanent slots, with their start lease period, and duration.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '64f6fad977398ea0f020d91e69710216bdd3a0e0f8b47325c10ede7efb06b5eb'
    }

    /**
     *  Assigned permanent slots, with their start lease period, and duration.
     */
    get asV100(): AssignedSlotsPermanentSlotsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Assigned permanent slots, with their start lease period, and duration.
 */
export interface AssignedSlotsPermanentSlotsStorageV100 {
    get(key: number): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number]][]>
}

export class AssignedSlotsTemporarySlotCountStorage extends StorageBase {
    protected getPrefix() {
        return 'AssignedSlots'
    }

    protected getName() {
        return 'TemporarySlotCount'
    }

    /**
     *  Number of assigned temporary slots.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of assigned temporary slots.
     */
    get asV100(): AssignedSlotsTemporarySlotCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Number of assigned temporary slots.
 */
export interface AssignedSlotsTemporarySlotCountStorageV100 {
    get(): Promise<number>
}

export class AssignedSlotsTemporarySlotsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssignedSlots'
    }

    protected getName() {
        return 'TemporarySlots'
    }

    /**
     *  Assigned temporary slots.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '9909762f2978689612b1cf996a2ee152d19247e7606a099a6f204cc814635147'
    }

    /**
     *  Assigned temporary slots.
     */
    get asV100(): AssignedSlotsTemporarySlotsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Assigned temporary slots.
 */
export interface AssignedSlotsTemporarySlotsStorageV100 {
    get(key: number): Promise<(v100.ParachainTemporarySlot | undefined)>
    getAll(): Promise<v100.ParachainTemporarySlot[]>
    getMany(keys: number[]): Promise<(v100.ParachainTemporarySlot | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ParachainTemporarySlot][]>
    getPairs(key: number): Promise<[k: number, v: v100.ParachainTemporarySlot][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ParachainTemporarySlot][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ParachainTemporarySlot][]>
}

export class AuctionsAuctionCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionCounter'
    }

    /**
     *  Number of auctions started so far.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of auctions started so far.
     */
    get asV100(): AuctionsAuctionCounterStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionsAuctionCounterStorageV100 {
    get(): Promise<number>
}

export class AuctionsAuctionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionInfo'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get asV100(): AuctionsAuctionInfoStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionsAuctionInfoStorageV100 {
    get(): Promise<([number, number] | undefined)>
}

export class AuctionsReservedAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'ReservedAmounts'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'fda6a5cc800624ef757b3d079b088c0eebe85aa8e842b133f55d4d490b10f527'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get asV100(): AuctionsReservedAmountsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface AuctionsReservedAmountsStorageV100 {
    get(key: [Uint8Array, number]): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, number][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
}

export class AuctionsWinningStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'Winning'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '50afa484f0cd0b49800ca936e6d5aef816fcfd7b469149f3f61b1d41d4e2bd86'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get asV100(): AuctionsWinningStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface AuctionsWinningStorageV100 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asMatrixEnjinV603(): AuthorshipAuthorStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'AuthorVrfRandomness'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get asV100(): BabeAuthorVrfRandomnessStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface BabeAuthorVrfRandomnessStorageV100 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Current epoch authorities.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV100(): BabeAuthoritiesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV100 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  Current slot number.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV100(): BabeCurrentSlotStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV100 {
    get(): Promise<bigint>
}

export class BabeEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochConfig'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get asV100(): BabeEpochConfigStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface BabeEpochConfigStorageV100 {
    get(): Promise<(v100.BabeEpochConfiguration | undefined)>
}

export class BabeEpochIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochIndex'
    }

    /**
     *  Current epoch index.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV100(): BabeEpochIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV100 {
    get(): Promise<bigint>
}

export class BabeEpochStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochStart'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV100(): BabeEpochStartStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface BabeEpochStartStorageV100 {
    get(): Promise<[number, number]>
}

export class BabeGenesisSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'GenesisSlot'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV100(): BabeGenesisSlotStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV100 {
    get(): Promise<bigint>
}

export class BabeInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Initialized'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV100(): BabeInitializedStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV104(): boolean {
        return this.getTypeHash() === 'd640aa265bbc697c1d06e978513ab478b54cefe16a2b8b11b22c93e5a17fb0de'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV104(): BabeInitializedStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV100 {
    get(): Promise<((v100.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV104 {
    get(): Promise<((v104.PreDigest | undefined) | undefined)>
}

export class BabeLatenessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Lateness'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV100(): BabeLatenessStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface BabeLatenessStorageV100 {
    get(): Promise<number>
}

export class BabeNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Next epoch authorities.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV100(): BabeNextAuthoritiesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV100 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeNextEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextEpochConfig'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get isV100(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV100(): BabeNextEpochConfigStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV100 {
    get(): Promise<(v100.BabeEpochConfiguration | undefined)>
}

export class BabeNextRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextRandomness'
    }

    /**
     *  Next epoch randomness.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV100(): BabeNextRandomnessStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV100 {
    get(): Promise<Uint8Array>
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'PendingEpochConfigChange'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV100(): BabePendingEpochConfigChangeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV100 {
    get(): Promise<(v100.NextConfigDescriptor | undefined)>
}

export class BabeRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Randomness'
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
    get isV100(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
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
    get asV100(): BabeRandomnessStorageV100 {
        assert(this.isV100)
        return this as any
    }
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
export interface BabeRandomnessStorageV100 {
    get(): Promise<Uint8Array>
}

export class BabeSegmentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SegmentIndex'
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
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
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
    get asV100(): BabeSegmentIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
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
export interface BabeSegmentIndexStorageV100 {
    get(): Promise<number>
}

export class BabeSkippedEpochsStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SkippedEpochs'
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
    get isV104(): boolean {
        return this.getTypeHash() === '3df30e4db0015157d5d69bc8676ac0eac9290eba6d0cca73267e7c398c14a688'
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
    get asV104(): BabeSkippedEpochsStorageV104 {
        assert(this.isV104)
        return this as any
    }
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
export interface BabeSkippedEpochsStorageV104 {
    get(): Promise<[bigint, number][]>
}

export class BabeUnderConstructionStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'UnderConstruction'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get asV100(): BabeUnderConstructionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface BabeUnderConstructionStorageV100 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asMatrixEnjinV603(): BalancesAccountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV100(): BalancesAccountStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV104(): BalancesAccountStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.AccountData>
    getAll(): Promise<matrixEnjinV603.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV100 {
    get(key: Uint8Array): Promise<v100.AccountData>
    getAll(): Promise<v100.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v100.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV104 {
    get(key: Uint8Array): Promise<v104.AccountData>
    getAll(): Promise<v104.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v104.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v104.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v104.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v104.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v104.AccountData][]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asMatrixEnjinV603(): BalancesFreezesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.IdAmount[]>
    getAll(): Promise<matrixEnjinV603.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asMatrixEnjinV603(): BalancesHoldsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.IdAmount[]>
    getAll(): Promise<matrixEnjinV603.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asMatrixEnjinV603(): BalancesInactiveIssuanceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asMatrixEnjinV603(): BalancesLocksStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.BalanceLock[]>
    getAll(): Promise<matrixEnjinV603.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asMatrixEnjinV603(): BalancesReservesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.ReserveData[]>
    getAll(): Promise<matrixEnjinV603.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asMatrixEnjinV603(): BalancesTotalIssuanceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class BeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authorities set
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  The current authorities set
     */
    get asV100(): BeefyAuthoritiesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current authorities set
 */
export interface BeefyAuthoritiesStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class BeefyGenesisBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'GenesisBlock'
    }

    /**
     *  Block number where BEEFY consensus is enabled/started.
     *  If changing this, make sure `Self::ValidatorSetId` is also reset to
     *  `GENESIS_AUTHORITY_SET_ID` in the state of the new block number configured here.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
    }

    /**
     *  Block number where BEEFY consensus is enabled/started.
     *  If changing this, make sure `Self::ValidatorSetId` is also reset to
     *  `GENESIS_AUTHORITY_SET_ID` in the state of the new block number configured here.
     */
    get asV104(): BeefyGenesisBlockStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  Block number where BEEFY consensus is enabled/started.
 *  If changing this, make sure `Self::ValidatorSetId` is also reset to
 *  `GENESIS_AUTHORITY_SET_ID` in the state of the new block number configured here.
 */
export interface BeefyGenesisBlockStorageV104 {
    get(): Promise<(number | undefined)>
}

export class BeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get asV100(): BeefyNextAuthoritiesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface BeefyNextAuthoritiesStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class BeefySetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `ValidatorSetId` is not under user control.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `ValidatorSetId` is not under user control.
     */
    get asV104(): BeefySetIdSessionStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `ValidatorSetId` is not under user control.
 */
export interface BeefySetIdSessionStorageV104 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class BeefyValidatorSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'ValidatorSetId'
    }

    /**
     *  The current validator set id
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current validator set id
     */
    get asV100(): BeefyValidatorSetIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current validator set id
 */
export interface BeefyValidatorSetIdStorageV100 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asMatrixEnjinV603(): BountiesBountiesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.Bounty | undefined)>
    getAll(): Promise<matrixEnjinV603.Bounty[]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixEnjinV603.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: matrixEnjinV603.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixEnjinV603.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixEnjinV603.Bounty][]>
}

export class BountiesBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asMatrixEnjinV603(): BountiesBountyApprovalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageMatrixEnjinV603 {
    get(): Promise<number[]>
}

export class BountiesBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asMatrixEnjinV603(): BountiesBountyCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asMatrixEnjinV603(): BountiesBountyDescriptionsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageMatrixEnjinV603 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ClaimsAccountNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'AccountNonce'
    }

    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b66e643893eeb22eb47e70e5963130466a65d7fdc06d6f4fefd82f3ba4c900bd'
    }

    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    get asMatrixEnjinV603(): ClaimsAccountNonceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
 *  claimed.
 */
export interface ClaimsAccountNonceStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class ClaimsApprovedBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'ApprovedBlockNumber'
    }

    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    get isV101(): boolean {
        return this.getTypeHash() === '9a5c57c0fba14b65d0c87c39b55c2a918905695f933da9b666d5ccdfa9c3b77f'
    }

    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    get asV101(): ClaimsApprovedBlockNumberStorageV101 {
        assert(this.isV101)
        return this as any
    }
}

/**
 *  Latest block number on Ethereum for which requested claims have been approved.
 */
export interface ClaimsApprovedBlockNumberStorageV101 {
    get(): Promise<(v101.TrackedBlockNumbers | undefined)>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b59addc95e4ad12f850fe4129a0ee964077180ad25eacf666dc124f2f5e0f166'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get asMatrixEnjinV603(): ClaimsClaimsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    get isV101(): boolean {
        return this.getTypeHash() === '898502079a98d13674aa6970cae6fc0555ae0d655f2e253a6707c38bf183d8e6'
    }

    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    get asV101(): ClaimsClaimsStorageV101 {
        assert(this.isV101)
        return this as any
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get isV102(): boolean {
        return this.getTypeHash() === '7b0ab5c17274ee8c8276530517903f0a8cd78243fa8e5e16acf3aacab7494019'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get asV102(): ClaimsClaimsStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsClaimsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.ClaimData[] | undefined)>
    getAll(): Promise<matrixEnjinV603.ClaimData[][]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.ClaimData[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
}

/**
 *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
 *  claim for.
 */
export interface ClaimsClaimsStorageV101 {
    get(key: v101.Account): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v101.Account[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v101.Account[]>
    getKeys(key: v101.Account): Promise<v101.Account[]>
    getKeysPaged(pageSize: number): AsyncIterable<v101.Account[]>
    getKeysPaged(pageSize: number, key: v101.Account): AsyncIterable<v101.Account[]>
    getPairs(): Promise<[k: v101.Account, v: bigint][]>
    getPairs(key: v101.Account): Promise<[k: v101.Account, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v101.Account, v: bigint][]>
    getPairsPaged(pageSize: number, key: v101.Account): AsyncIterable<[k: v101.Account, v: bigint][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsClaimsStorageV102 {
    get(key: v102.Account): Promise<(v102.ClaimData[] | undefined)>
    getAll(): Promise<v102.ClaimData[][]>
    getMany(keys: v102.Account[]): Promise<(v102.ClaimData[] | undefined)[]>
    getKeys(): Promise<v102.Account[]>
    getKeys(key: v102.Account): Promise<v102.Account[]>
    getKeysPaged(pageSize: number): AsyncIterable<v102.Account[]>
    getKeysPaged(pageSize: number, key: v102.Account): AsyncIterable<v102.Account[]>
    getPairs(): Promise<[k: v102.Account, v: v102.ClaimData[]][]>
    getPairs(key: v102.Account): Promise<[k: v102.Account, v: v102.ClaimData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v102.Account, v: v102.ClaimData[]][]>
    getPairsPaged(pageSize: number, key: v102.Account): AsyncIterable<[k: v102.Account, v: v102.ClaimData[]][]>
}

export class ClaimsDelayClaimsPeriodStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'DelayClaimsPeriod'
    }

    /**
     *  Delay time in block numbers before the user could claim
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Delay time in block numbers before the user could claim
     */
    get asMatrixEnjinV603(): ClaimsDelayClaimsPeriodStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Delay time in block numbers before the user could claim
 */
export interface ClaimsDelayClaimsPeriodStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class ClaimsEarlyBirdRewardsLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'EarlyBirdRewardsLookup'
    }

    /**
     *  EarlyBirdRewardsLookup
     *  This stores early bird rewards of user
     */
    get isV102(): boolean {
        return this.getTypeHash() === 'c132b8417343879764eef281d3d767c23f948740516b1909430169e994b85dfb'
    }

    /**
     *  EarlyBirdRewardsLookup
     *  This stores early bird rewards of user
     */
    get asV102(): ClaimsEarlyBirdRewardsLookupStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  EarlyBirdRewardsLookup
 *  This stores early bird rewards of user
 */
export interface ClaimsEarlyBirdRewardsLookupStorageV102 {
    get(key: Uint8Array): Promise<(v102.EarlyBirdRewardsData | undefined)>
    getAll(): Promise<v102.EarlyBirdRewardsData[]>
    getMany(keys: Uint8Array[]): Promise<(v102.EarlyBirdRewardsData | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v102.EarlyBirdRewardsData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v102.EarlyBirdRewardsData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v102.EarlyBirdRewardsData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v102.EarlyBirdRewardsData][]>
}

export class ClaimsExchangeRateStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'ExchangeRate'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asMatrixEnjinV603(): ClaimsExchangeRateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isV101(): boolean {
        return this.getTypeHash() === '8339208fdff8cc2cbfb9fe1daa9bd886d23b8951771ccf6b00d8cb68da55bcc5'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asV101(): ClaimsExchangeRateStorageV101 {
        assert(this.isV101)
        return this as any
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isV102(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asV102(): ClaimsExchangeRateStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV101 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV102 {
    get(): Promise<(number | undefined)>
}

export class ClaimsLatestBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'LatestBlockNumber'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get asMatrixEnjinV603(): ClaimsLatestBlockNumberStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    get isV101(): boolean {
        return this.getTypeHash() === '9a5c57c0fba14b65d0c87c39b55c2a918905695f933da9b666d5ccdfa9c3b77f'
    }

    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    get asV101(): ClaimsLatestBlockNumberStorageV101 {
        assert(this.isV101)
        return this as any
    }
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageV101 {
    get(): Promise<(v101.TrackedBlockNumbers | undefined)>
}

export class ClaimsPendingApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'PendingApprovals'
    }

    get isV101(): boolean {
        return this.getTypeHash() === 'ec33c23b52f19052c2b84430adf5ca0d4d679518203eba4b8e7ec684b4532785'
    }

    get asV101(): ClaimsPendingApprovalsStorageV101 {
        assert(this.isV101)
        return this as any
    }
}

export interface ClaimsPendingApprovalsStorageV101 {
    get(key: [Uint8Array, (number | undefined)]): Promise<(v101.TransactionData | undefined)>
    getAll(): Promise<v101.TransactionData[]>
    getMany(keys: [Uint8Array, (number | undefined)][]): Promise<(v101.TransactionData | undefined)[]>
    getKeys(): Promise<[Uint8Array, (number | undefined)][]>
    getKeys(key: [Uint8Array, (number | undefined)]): Promise<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getPairs(): Promise<[k: [Uint8Array, (number | undefined)], v: v101.TransactionData][]>
    getPairs(key: [Uint8Array, (number | undefined)]): Promise<[k: [Uint8Array, (number | undefined)], v: v101.TransactionData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: v101.TransactionData][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: v101.TransactionData][]>
}

export class ClaimsTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Total'
    }

    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    get isV101(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    get asV101(): ClaimsTotalStorageV101 {
        assert(this.isV101)
        return this as any
    }
}

/**
 *  This is the total amount for which claims have been approved and are not yet claimed.
 */
export interface ClaimsTotalStorageV101 {
    get(): Promise<bigint>
}

export class ClaimsTotalUnclaimedAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'TotalUnclaimedAmount'
    }

    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    get asMatrixEnjinV603(): ClaimsTotalUnclaimedAmountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  This is the total amount for which claims have been requested and are not yet claimed.
 */
export interface ClaimsTotalUnclaimedAmountStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class ClaimsTransactionHashLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'TransactionHashLookup'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    get asMatrixEnjinV603(): ClaimsTransactionHashLookupStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    get isV102(): boolean {
        return this.getTypeHash() === '1fc676874c282411ee2e157d81aa1a921301f4216f6625ab86b2e268ae8301b7'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    get asV102(): ClaimsTransactionHashLookupStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface ClaimsTransactionHashLookupStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface ClaimsTransactionHashLookupStorageV102 {
    get(key: [Uint8Array, (number | undefined)]): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, (number | undefined)][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, (number | undefined)][]>
    getKeys(key: [Uint8Array, (number | undefined)]): Promise<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getPairs(): Promise<[k: [Uint8Array, (number | undefined)], v: null][]>
    getPairs(key: [Uint8Array, (number | undefined)]): Promise<[k: [Uint8Array, (number | undefined)], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: null][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: null][]>
}

export class CollatorStakingCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The current set of candidates for collation.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of candidates for collation.
     */
    get asMatrixEnjinV603(): CollatorStakingCandidatesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of candidates for collation.
 */
export interface CollatorStakingCandidatesStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Collator[]>
}

export class CollatorStakingCollatorExitsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'CollatorExits'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get asMatrixEnjinV603(): CollatorStakingCollatorExitsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorStakingCollatorExitsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class CollatorStakingCollatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Collators'
    }

    /**
     *  The current set of collators
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of collators
     */
    get asMatrixEnjinV603(): CollatorStakingCollatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of collators
 */
export interface CollatorStakingCollatorsStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Collator[]>
}

export class CollatorStakingCurrentRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'CurrentRound'
    }

    /**
     *  The current round information.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '55f635cb275994673c2b749928c20c824098d354b6ce574fd0854fccb2dfd74e'
    }

    /**
     *  The current round information.
     */
    get asMatrixEnjinV603(): CollatorStakingCurrentRoundStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current round information.
 */
export interface CollatorStakingCurrentRoundStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Round>
}

export class CollatorStakingDesiredCandidatesCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'DesiredCandidatesCount'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get asMatrixEnjinV603(): CollatorStakingDesiredCandidatesCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
 */
export interface CollatorStakingDesiredCandidatesCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class CollatorStakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get asMatrixEnjinV603(): CollatorStakingInvulnerablesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface CollatorStakingInvulnerablesStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Collator[]>
}

export class CollatorStakingMinCollatorStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'MinCollatorStake'
    }

    /**
     *  The min stake amount for collators
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The min stake amount for collators
     */
    get asMatrixEnjinV603(): CollatorStakingMinCollatorStakeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The min stake amount for collators
 */
export interface CollatorStakingMinCollatorStakeStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class CollatorStakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '11643981c5f057df403241a3175aad7384102829be78567ad40af375e54362df'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get asMatrixEnjinV603(): CollatorStakingNominatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of nominators.
 * 
 *  Each nominator is allowed to nominate one collator.
 */
export interface CollatorStakingNominatorsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Nomination | undefined)>
    getAll(): Promise<matrixEnjinV603.Nomination[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Nomination | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
}

export class CollatorStakingSessionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'SessionInfo'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '158926fcec32bbcafd0b7803e082429e4e807c32a63362ded7d2c8c3c9e95edb'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get asMatrixEnjinV603(): CollatorStakingSessionInfoStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface CollatorStakingSessionInfoStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: number): Promise<matrixEnjinV603.CollatorSessionInfo>
    getAll(): Promise<matrixEnjinV603.CollatorSessionInfo[]>
    getMany(keys: [Uint8Array, number][]): Promise<matrixEnjinV603.CollatorSessionInfo[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
}

export class CommunityPoolApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asMatrixEnjinV603(): CommunityPoolApprovalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface CommunityPoolApprovalsStorageMatrixEnjinV603 {
    get(): Promise<number[]>
}

export class CommunityPoolDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asMatrixEnjinV603(): CommunityPoolDeactivatedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface CommunityPoolDeactivatedStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class CommunityPoolProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asMatrixEnjinV603(): CommunityPoolProposalCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface CommunityPoolProposalCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class CommunityPoolProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asMatrixEnjinV603(): CommunityPoolProposalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface CommunityPoolProposalsStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.Proposal | undefined)>
    getAll(): Promise<matrixEnjinV603.Proposal[]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixEnjinV603.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: matrixEnjinV603.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixEnjinV603.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixEnjinV603.Proposal][]>
}

export class ConfigurationActiveConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'ActiveConfig'
    }

    /**
     *  The active configuration for the current session.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'cf652c18f01bf19a2433f416ea01f8cb5359f558fae8b079f28f8569f8cb2350'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV100(): ConfigurationActiveConfigStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV104(): boolean {
        return this.getTypeHash() === 'ca24d99f8fea569d11276f4c694f1c66e82ffea6823784cf4985d47aa472b537'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV104(): ConfigurationActiveConfigStorageV104 {
        assert(this.isV104)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '24f593f62af5132d4398465549747162bc59bf53c6747b027b6e9da9a173b00e'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV105(): ConfigurationActiveConfigStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV100 {
    get(): Promise<v100.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV104 {
    get(): Promise<v104.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV105 {
    get(): Promise<v105.HostConfiguration>
}

export class ConfigurationBypassConsistencyCheckStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'BypassConsistencyCheck'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get asV100(): ConfigurationBypassConsistencyCheckStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface ConfigurationBypassConsistencyCheckStorageV100 {
    get(): Promise<boolean>
}

export class ConfigurationPendingConfigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'PendingConfigs'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '7e1cf5dcc03b8629ac374a7ef87cf4c04216a6b720c26877b65e525f2bde0fbd'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV100(): ConfigurationPendingConfigsStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '7e133ae8bb548ce7f1c88397dd27ac1808948dafcc866287775db507703d05aa'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV104(): ConfigurationPendingConfigsStorageV104 {
        assert(this.isV104)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV105(): boolean {
        return this.getTypeHash() === 'effacbdd6b4609dc6facb4c783561c64a8ff31afbe4522f854216f3780d31010'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV105(): ConfigurationPendingConfigsStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV100 {
    get(): Promise<[number, v100.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV104 {
    get(): Promise<[number, v104.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV105 {
    get(): Promise<[number, v105.HostConfiguration][]>
}

export class ConvictionVotingClassLocksForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'ClassLocksFor'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '82641f40f081979db4386ae71b3895881f193f9a8e6fe1a5537661ac52af877c'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get asV100(): ConvictionVotingClassLocksForStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ConvictionVotingClassLocksForStorageV100 {
    get(key: Uint8Array): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: Uint8Array[]): Promise<[number, bigint][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV100(): ConvictionVotingVotingForStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV100 {
    get(key1: Uint8Array, key2: number): Promise<v100.Voting>
    getAll(): Promise<v100.Voting[]>
    getMany(keys: [Uint8Array, number][]): Promise<v100.Voting[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v100.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v100.Voting][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asMatrixEnjinV603(): CouncilMembersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asMatrixEnjinV603(): CouncilPrimeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asMatrixEnjinV603(): CouncilProposalCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV603(): CouncilProposalOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '8c127c77fbad28fe03cea74e3dc13593f4abc6334ac06ebee57fced2ba801c79'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1000(): CouncilProposalOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1003(): boolean {
        return this.getTypeHash() === '7e38c81de9998b7ee5c1f6e2e1600141fe0b26a1eaa70c1e65ce1f8a2af3a057'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1003(): CouncilProposalOfStorageMatrixEnjinV1003 {
        assert(this.isMatrixEnjinV1003)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Call | undefined)>
    getAll(): Promise<matrixEnjinV603.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.Call | undefined)>
    getAll(): Promise<matrixEnjinV1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV1003 {
    get(key: Uint8Array): Promise<(matrixEnjinV1003.Call | undefined)>
    getAll(): Promise<matrixEnjinV1003.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1003.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asMatrixEnjinV603(): CouncilProposalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asMatrixEnjinV603(): CouncilVotingStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Votes | undefined)>
    getAll(): Promise<matrixEnjinV603.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
}

export class CrowdloanEndingsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'EndingsCount'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get asV100(): CrowdloanEndingsCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of auctions that have entered into their ending period so far.
 */
export interface CrowdloanEndingsCountStorageV100 {
    get(): Promise<number>
}

export class CrowdloanFundsStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'Funds'
    }

    /**
     *  Info on all of the funds.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'e837aa8c7af80bff126d455e0237189b2b62b5bf6586a1f2e67a22edfaf5a596'
    }

    /**
     *  Info on all of the funds.
     */
    get asV100(): CrowdloanFundsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Info on all of the funds.
 */
export interface CrowdloanFundsStorageV100 {
    get(key: number): Promise<(v100.FundInfo | undefined)>
    getAll(): Promise<v100.FundInfo[]>
    getMany(keys: number[]): Promise<(v100.FundInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.FundInfo][]>
    getPairs(key: number): Promise<[k: number, v: v100.FundInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.FundInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.FundInfo][]>
}

export class CrowdloanNewRaiseStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NewRaise'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get asV100(): CrowdloanNewRaiseStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The funds that have had additional contributions during the last block. This is used
 *  in order to determine which funds should submit new or updated bids.
 */
export interface CrowdloanNewRaiseStorageV100 {
    get(): Promise<number[]>
}

export class CrowdloanNextFundIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NextFundIndex'
    }

    /**
     *  Tracker for the next available fund index
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Tracker for the next available fund index
     */
    get asV100(): CrowdloanNextFundIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Tracker for the next available fund index
 */
export interface CrowdloanNextFundIndexStorageV100 {
    get(): Promise<number>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asMatrixEnjinV603(): DemocracyBlacklistStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asMatrixEnjinV603(): DemocracyCancellationsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asMatrixEnjinV603(): DemocracyDepositOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageMatrixEnjinV603 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asMatrixEnjinV603(): DemocracyLastTabledWasExternalStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asMatrixEnjinV603(): DemocracyLowestUnbakedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DemocracyMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a67a07e9fffcce1c75e0f4b23d9fdf10851d6031a73b67c731af0a1b8e2197e2'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asMatrixEnjinV603(): DemocracyMetadataOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  General information concerning any proposal or referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface DemocracyMetadataOfStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.MetadataOwner): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: matrixEnjinV603.MetadataOwner[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<matrixEnjinV603.MetadataOwner[]>
    getKeys(key: matrixEnjinV603.MetadataOwner): Promise<matrixEnjinV603.MetadataOwner[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.MetadataOwner[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.MetadataOwner): AsyncIterable<matrixEnjinV603.MetadataOwner[]>
    getPairs(): Promise<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
    getPairs(key: matrixEnjinV603.MetadataOwner): Promise<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.MetadataOwner): AsyncIterable<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asMatrixEnjinV603(): DemocracyNextExternalStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageMatrixEnjinV603 {
    get(): Promise<([matrixEnjinV603.Bounded, matrixEnjinV603.VoteThreshold] | undefined)>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asMatrixEnjinV603(): DemocracyPublicPropCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asMatrixEnjinV603(): DemocracyPublicPropsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageMatrixEnjinV603 {
    get(): Promise<[number, matrixEnjinV603.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asMatrixEnjinV603(): DemocracyReferendumCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asMatrixEnjinV603(): DemocracyReferendumInfoOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.ReferendumInfo | undefined)>
    getAll(): Promise<matrixEnjinV603.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asMatrixEnjinV603(): DemocracyVotingOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.Voting>
    getAll(): Promise<matrixEnjinV603.Voting[]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
}

export class DmpDeliveryFeeFactorStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DeliveryFeeFactor'
    }

    /**
     *  The number to multiply the base delivery fee by.
     */
    get isV104(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The number to multiply the base delivery fee by.
     */
    get asV104(): DmpDeliveryFeeFactorStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  The number to multiply the base delivery fee by.
 */
export interface DmpDeliveryFeeFactorStorageV104 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class DmpDownwardMessageQueueHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueueHeads'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get asV100(): DmpDownwardMessageQueueHeadsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A mapping that stores the downward message queue MQC head for each para.
 * 
 *  Each link in this chain has a form:
 *  `(prev_head, B, H(M))`, where
 *  - `prev_head`: is the previous head hash or zero if none.
 *  - `B`: is the relay-chain block number in which a message was appended.
 *  - `H(M)`: is the hash of the message being appended.
 */
export interface DmpDownwardMessageQueueHeadsStorageV100 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class DmpDownwardMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueues'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'e425c5091a0f36e0ae5ace2a5590775033870437355c96c2667307bf868e3248'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get asV100(): DmpDownwardMessageQueuesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DmpDownwardMessageQueuesStorageV100 {
    get(key: number): Promise<v100.InboundDownwardMessage[]>
    getAll(): Promise<v100.InboundDownwardMessage[][]>
    getMany(keys: number[]): Promise<v100.InboundDownwardMessage[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.InboundDownwardMessage[]][]>
    getPairs(key: number): Promise<[k: number, v: v100.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.InboundDownwardMessage[]][]>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asMatrixEnjinV603(): DmpQueueConfigurationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.ConfigData>
}

export class DmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asMatrixEnjinV603(): DmpQueueCounterForOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asMatrixEnjinV603(): DmpQueueOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageMatrixEnjinV603 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asMatrixEnjinV603(): DmpQueuePageIndexStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asMatrixEnjinV603(): DmpQueuePagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageMatrixEnjinV603 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'CurrentPhase'
    }

    /**
     *  Current phase.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV100(): ElectionProviderMultiPhaseCurrentPhaseStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV100 {
    get(): Promise<v100.Phase>
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'DesiredTargets'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV100(): ElectionProviderMultiPhaseDesiredTargetsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV100 {
    get(): Promise<(number | undefined)>
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'MinimumUntrustedScore'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV100(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV100 {
    get(): Promise<(v100.ElectionScore | undefined)>
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'QueuedSolution'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV100(): ElectionProviderMultiPhaseQueuedSolutionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV100 {
    get(): Promise<(v100.ReadySolution | undefined)>
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get asV100(): ElectionProviderMultiPhaseRoundStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface ElectionProviderMultiPhaseRoundStorageV100 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionIndices'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'aecbdca3369396b8f7ae7da45a210e0b48c62258a15e0f7c1a7cb29c941f666c'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV100(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV100 {
    get(): Promise<[v100.ElectionScore, number, number][]>
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionNextIndex'
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
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
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
    get asV100(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
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
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV100 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionsMap'
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
    get isV100(): boolean {
        return this.getTypeHash() === '0bdd7939a257877febf5ab7215f0cc9cfa33db8610c6c8a3d48cb0f3cb8c7219'
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
    get asV100(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV100 {
        assert(this.isV100)
        return this as any
    }
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
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV100 {
    get(key: number): Promise<(v100.SignedSubmission | undefined)>
    getAll(): Promise<v100.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v100.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v100.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.SignedSubmission][]>
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Snapshot'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV100(): ElectionProviderMultiPhaseSnapshotStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV100 {
    get(): Promise<(v100.RoundSnapshot | undefined)>
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SnapshotMetadata'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV100(): ElectionProviderMultiPhaseSnapshotMetadataStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV100 {
    get(): Promise<(v100.SolutionOrSnapshotSize | undefined)>
}

export class ExtrinsicPausePausedExtrinsicsStorage extends StorageBase {
    protected getPrefix() {
        return 'ExtrinsicPause'
    }

    protected getName() {
        return 'PausedExtrinsics'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9914d71a2b43fa7da00c957184ae8b79abfcf4e6a63fb1b814680e322156164c'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get asMatrixEnjinV603(): ExtrinsicPausePausedExtrinsicsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Paused extrinsics map
 * 
 *  The key is tuple with the name of the pallet and the extrinsic name and value is
 *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
 */
export interface ExtrinsicPausePausedExtrinsicsStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.ExtrinsicInfo): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: matrixEnjinV603.ExtrinsicInfo[]): Promise<(null | undefined)[]>
    getKeys(): Promise<matrixEnjinV603.ExtrinsicInfo[]>
    getKeys(key: matrixEnjinV603.ExtrinsicInfo): Promise<matrixEnjinV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.ExtrinsicInfo): AsyncIterable<matrixEnjinV603.ExtrinsicInfo[]>
    getPairs(): Promise<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
    getPairs(key: matrixEnjinV603.ExtrinsicInfo): Promise<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.ExtrinsicInfo): AsyncIterable<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
}

export class FellowshipCollectiveIdToIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'IdToIndex'
    }

    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '67b0fac305c176b999788fde10f74baea68d2152b7d296978e0a74990c1b7ed1'
    }

    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    get asV100(): FellowshipCollectiveIdToIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The index of each ranks's member into the group of members who have at least that rank.
 */
export interface FellowshipCollectiveIdToIndexStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class FellowshipCollectiveIndexToIdStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'IndexToId'
    }

    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '3898d28b3a87fb9c6c757faf07a03c0902aaa0485168c5cc4bf0aaaaf6df9331'
    }

    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    get asV100(): FellowshipCollectiveIndexToIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The members in the collective by index. All indices in the range `0..MemberCount` will
 *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
export interface FellowshipCollectiveIndexToIdStorageV100 {
    get(key1: number, key2: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class FellowshipCollectiveMemberCountStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'MemberCount'
    }

    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    get asV100(): FellowshipCollectiveMemberCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of members in the collective who have at least the rank according to the index
 *  of the vec.
 */
export interface FellowshipCollectiveMemberCountStorageV100 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class FellowshipCollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd95386a32a2255ec60d17f52bc22c1cb6efed6254df24f0b8dbec46c5f6bef52'
    }

    /**
     *  The current members of the collective.
     */
    get asV100(): FellowshipCollectiveMembersStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current members of the collective.
 */
export interface FellowshipCollectiveMembersStorageV100 {
    get(key: Uint8Array): Promise<(v100.MemberRecord | undefined)>
    getAll(): Promise<v100.MemberRecord[]>
    getMany(keys: Uint8Array[]): Promise<(v100.MemberRecord | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.MemberRecord][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.MemberRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.MemberRecord][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.MemberRecord][]>
}

export class FellowshipCollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '86d2faf8b5d77a999750c18089275cdc40d9d653cb2242d978fb841e0999d838'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV100(): FellowshipCollectiveVotingStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface FellowshipCollectiveVotingStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(v100.VoteRecord | undefined)>
    getAll(): Promise<v100.VoteRecord[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v100.VoteRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.VoteRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.VoteRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.VoteRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.VoteRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.VoteRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.VoteRecord][]>
}

export class FellowshipCollectiveVotingCleanupStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'VotingCleanup'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    get asV100(): FellowshipCollectiveVotingCleanupStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface FellowshipCollectiveVotingCleanupStorageV100 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class FellowshipReferendaDecidingCountStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'DecidingCount'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get asV100(): FellowshipReferendaDecidingCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of referenda being decided currently.
 */
export interface FellowshipReferendaDecidingCountStorageV100 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class FellowshipReferendaMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV104(): FellowshipReferendaMetadataOfStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface FellowshipReferendaMetadataOfStorageV104 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class FellowshipReferendaReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV100(): FellowshipReferendaReferendumCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface FellowshipReferendaReferendumCountStorageV100 {
    get(): Promise<number>
}

export class FellowshipReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '29b0cb2b9b918ed41e8674ef43a4827131e2da63866746b7eefd415d705ac5db'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV100(): FellowshipReferendaReferendumInfoForStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '59f302c7aca910651c87b7d8251cb6e1d1d848970139e28071cea82a1d8fceb0'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV105(): FellowshipReferendaReferendumInfoForStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV100 {
    get(key: number): Promise<(v100.Type_780 | undefined)>
    getAll(): Promise<v100.Type_780[]>
    getMany(keys: number[]): Promise<(v100.Type_780 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.Type_780][]>
    getPairs(key: number): Promise<[k: number, v: v100.Type_780][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.Type_780][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.Type_780][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV105 {
    get(key: number): Promise<(v105.Type_935 | undefined)>
    getAll(): Promise<v105.Type_935[]>
    getMany(keys: number[]): Promise<(v105.Type_935 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v105.Type_935][]>
    getPairs(key: number): Promise<[k: number, v: v105.Type_935][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v105.Type_935][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v105.Type_935][]>
}

export class FellowshipReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b2efb85b7225fbdea5c80c4afda7babcfa0569947ac63eb97788ff9a18c7aa5c'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV100(): FellowshipReferendaTrackQueueStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface FellowshipReferendaTrackQueueStorageV100 {
    get(key: number): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: number[]): Promise<[number, number][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number][]][]>
}

export class FuelTanksAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asMatrixEnjinV603(): FuelTanksAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'd14766567f5c29c282b272050ea78a1a1a9f3ee86b48cb7caf97fb5e4d4d4cd7'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asMatrixEnjinV1000(): FuelTanksAccountsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isV102(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asV102(): FuelTanksAccountsStorageV102 {
        assert(this.isV102)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isV1021(): boolean {
        return this.getTypeHash() === 'd14766567f5c29c282b272050ea78a1a1a9f3ee86b48cb7caf97fb5e4d4d4cd7'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asV1021(): FuelTanksAccountsStorageV1021 {
        assert(this.isV1021)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixEnjinV603.UserAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixEnjinV603.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageMatrixEnjinV1000 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixEnjinV1000.UserAccount | undefined)>
    getAll(): Promise<matrixEnjinV1000.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixEnjinV1000.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageV102 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v102.UserAccount | undefined)>
    getAll(): Promise<v102.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v102.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v102.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v102.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v102.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v102.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v102.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v102.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageV1021 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1021.UserAccount | undefined)>
    getAll(): Promise<v1021.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1021.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1021.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1021.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1021.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1021.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1021.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1021.UserAccount][]>
}

export class FuelTanksFreezeQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'FreezeQueue'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '6417b6c5aebb64849792349d17be222d1c212c6254e5517ec62f89a5e5e14ddc'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get asMatrixEnjinV603(): FuelTanksFreezeQueueStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FuelTanksFreezeQueueStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.FreezeQueueItem[]>
}

export class FuelTanksTanksStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'Tanks'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asMatrixEnjinV603(): FuelTanksTanksStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'cc21aa9f97b2a2a9d5d8eec8eff3577d3167eb091b5cc8ac45d30f96fa9b0197'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asMatrixEnjinV1000(): FuelTanksTanksStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isV102(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asV102(): FuelTanksTanksStorageV102 {
        assert(this.isV102)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isV1021(): boolean {
        return this.getTypeHash() === 'cc21aa9f97b2a2a9d5d8eec8eff3577d3167eb091b5cc8ac45d30f96fa9b0197'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asV1021(): FuelTanksTanksStorageV1021 {
        assert(this.isV1021)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.FuelTank | undefined)>
    getAll(): Promise<matrixEnjinV603.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.FuelTank | undefined)>
    getAll(): Promise<matrixEnjinV1000.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageV102 {
    get(key: Uint8Array): Promise<(v102.FuelTank | undefined)>
    getAll(): Promise<v102.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(v102.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v102.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v102.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v102.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v102.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageV1021 {
    get(key: Uint8Array): Promise<(v1021.FuelTank | undefined)>
    getAll(): Promise<v1021.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(v1021.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1021.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1021.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1021.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1021.FuelTank][]>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV100(): GrandpaCurrentSetIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV100 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV100(): GrandpaNextForcedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV100 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV100(): GrandpaPendingChangeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV100 {
    get(): Promise<(v100.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV100(): GrandpaSetIdSessionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV100 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV100(): GrandpaStalledStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV100 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV100(): GrandpaStateStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV100 {
    get(): Promise<v100.StoredState>
}

export class HrmpHrmpAcceptedChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpAcceptedChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get asV100(): HrmpHrmpAcceptedChannelRequestCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpHrmpAcceptedChannelRequestCountStorageV100 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpChannelContentsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelContents'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '6cd143ae2730de334efd938bdf6af5805612dab0823423596dcf6bbbeddccfb3'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get asV100(): HrmpHrmpChannelContentsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpHrmpChannelContentsStorageV100 {
    get(key: v100.HrmpChannelId): Promise<v100.InboundHrmpMessage[]>
    getAll(): Promise<v100.InboundHrmpMessage[][]>
    getMany(keys: v100.HrmpChannelId[]): Promise<v100.InboundHrmpMessage[][]>
    getKeys(): Promise<v100.HrmpChannelId[]>
    getKeys(key: v100.HrmpChannelId): Promise<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<v100.HrmpChannelId[]>
    getPairs(): Promise<[k: v100.HrmpChannelId, v: v100.InboundHrmpMessage[]][]>
    getPairs(key: v100.HrmpChannelId): Promise<[k: v100.HrmpChannelId, v: v100.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v100.HrmpChannelId, v: v100.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<[k: v100.HrmpChannelId, v: v100.InboundHrmpMessage[]][]>
}

export class HrmpHrmpChannelDigestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelDigests'
    }

    /**
     *  Maintains a mapping that can be used to answer the question: What paras sent a message at
     *  the given block number for a given receiver. Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the
     *    same block number.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8b00bb4a27873ea090234c4f7aeea8dbf9ae2628a4945d4910f497ed81c5e21f'
    }

    /**
     *  Maintains a mapping that can be used to answer the question: What paras sent a message at
     *  the given block number for a given receiver. Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the
     *    same block number.
     */
    get asV100(): HrmpHrmpChannelDigestsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Maintains a mapping that can be used to answer the question: What paras sent a message at
 *  the given block number for a given receiver. Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the
 *    same block number.
 */
export interface HrmpHrmpChannelDigestsStorageV100 {
    get(key: number): Promise<[number, number[]][]>
    getAll(): Promise<[number, number[]][][]>
    getMany(keys: number[]): Promise<[number, number[]][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number[]][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
}

export class HrmpHrmpChannelsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannels'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd5f877f4add6df244ed0d4f20e980d9cbb8f6ecb91c8f56abca84b72441b6447'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV100(): HrmpHrmpChannelsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpChannelsStorageV100 {
    get(key: v100.HrmpChannelId): Promise<(v100.HrmpChannel | undefined)>
    getAll(): Promise<v100.HrmpChannel[]>
    getMany(keys: v100.HrmpChannelId[]): Promise<(v100.HrmpChannel | undefined)[]>
    getKeys(): Promise<v100.HrmpChannelId[]>
    getKeys(key: v100.HrmpChannelId): Promise<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<v100.HrmpChannelId[]>
    getPairs(): Promise<[k: v100.HrmpChannelId, v: v100.HrmpChannel][]>
    getPairs(key: v100.HrmpChannelId): Promise<[k: v100.HrmpChannelId, v: v100.HrmpChannel][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v100.HrmpChannelId, v: v100.HrmpChannel][]>
    getPairsPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<[k: v100.HrmpChannelId, v: v100.HrmpChannel][]>
}

export class HrmpHrmpCloseChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequests'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session
     *  change. Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '7755b93c00c932e936c6bfaff914a35cc38f873e39a57ea414c8be676db098d8'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session
     *  change. Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV100(): HrmpHrmpCloseChannelRequestsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session
 *  change. Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpCloseChannelRequestsStorageV100 {
    get(key: v100.HrmpChannelId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: v100.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(): Promise<v100.HrmpChannelId[]>
    getKeys(key: v100.HrmpChannelId): Promise<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<v100.HrmpChannelId[]>
    getPairs(): Promise<[k: v100.HrmpChannelId, v: null][]>
    getPairs(key: v100.HrmpChannelId): Promise<[k: v100.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v100.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<[k: v100.HrmpChannelId, v: null][]>
}

export class HrmpHrmpCloseChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequestsList'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV100(): HrmpHrmpCloseChannelRequestsListStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface HrmpHrmpCloseChannelRequestsListStorageV100 {
    get(): Promise<v100.HrmpChannelId[]>
}

export class HrmpHrmpEgressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpEgressChannelsIndex'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    get asV100(): HrmpHrmpEgressChannelsIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface HrmpHrmpEgressChannelsIndexStorageV100 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpIngressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpIngressChannelsIndex'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
     *  I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in
     *    `HrmpChannels` as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in
     *    `HrmpChannels` as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
     *  I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in
     *    `HrmpChannels` as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in
     *    `HrmpChannels` as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get asV100(): HrmpHrmpIngressChannelsIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
 *  I.e.
 * 
 *  (a) ingress index allows to find all the senders for a given recipient.
 *  (b) egress index allows to find all the recipients for a given sender.
 * 
 *  Invariants:
 *  - for each ingress index entry for `P` each item `I` in the index should present in
 *    `HrmpChannels` as `(I, P)`.
 *  - for each egress index entry for `P` each item `E` in the index should present in
 *    `HrmpChannels` as `(P, E)`.
 *  - there should be no other dangling channels in `HrmpChannels`.
 *  - the vectors are sorted.
 */
export interface HrmpHrmpIngressChannelsIndexStorageV100 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpOpenChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
     *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
     *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get asV100(): HrmpHrmpOpenChannelRequestCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests are initiated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
 *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpHrmpOpenChannelRequestCountStorageV100 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpOpenChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequests'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '14e894f64f4951bc0cda7e287037e971a9cfbd68c302fa59695038b358ef76b9'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV100(): HrmpHrmpOpenChannelRequestsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpOpenChannelRequestsStorageV100 {
    get(key: v100.HrmpChannelId): Promise<(v100.HrmpOpenChannelRequest | undefined)>
    getAll(): Promise<v100.HrmpOpenChannelRequest[]>
    getMany(keys: v100.HrmpChannelId[]): Promise<(v100.HrmpOpenChannelRequest | undefined)[]>
    getKeys(): Promise<v100.HrmpChannelId[]>
    getKeys(key: v100.HrmpChannelId): Promise<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<v100.HrmpChannelId[]>
    getPairs(): Promise<[k: v100.HrmpChannelId, v: v100.HrmpOpenChannelRequest][]>
    getPairs(key: v100.HrmpChannelId): Promise<[k: v100.HrmpChannelId, v: v100.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v100.HrmpChannelId, v: v100.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number, key: v100.HrmpChannelId): AsyncIterable<[k: v100.HrmpChannelId, v: v100.HrmpOpenChannelRequest][]>
}

export class HrmpHrmpOpenChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestsList'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV100(): HrmpHrmpOpenChannelRequestsListStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface HrmpHrmpOpenChannelRequestsListStorageV100 {
    get(): Promise<v100.HrmpChannelId[]>
}

export class HrmpHrmpWatermarksStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpWatermarks'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV100(): HrmpHrmpWatermarksStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpWatermarksStorageV100 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asMatrixEnjinV1000(): IdentityIdentityOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.Registration | undefined)>
    getAll(): Promise<matrixEnjinV1000.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asMatrixEnjinV1000(): IdentityRegistrarsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageMatrixEnjinV1000 {
    get(): Promise<(matrixEnjinV1000.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asMatrixEnjinV1000(): IdentitySubsOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asMatrixEnjinV1000(): IdentitySuperOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<([Uint8Array, matrixEnjinV1000.Data] | undefined)>
    getAll(): Promise<[Uint8Array, matrixEnjinV1000.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, matrixEnjinV1000.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'AuthoredBlocks'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get asV100(): ImOnlineAuthoredBlocksStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'HeartbeatAfter'
    }

    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    get asV100(): ImOnlineHeartbeatAfterStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The block number after which it's ok to send heartbeats in the current
 *  session.
 * 
 *  At the beginning of each session we set this to a value that should fall
 *  roughly in the middle of the session duration. The idea is to first wait for
 *  the validators to produce a block in the current session, so that the
 *  heartbeat later on will not be necessary.
 * 
 *  This value will only be used as a fallback if we fail to get a proper session
 *  progress estimate from `NextSessionRotation`, as those estimates should be
 *  more accurate then the value we calculate for `HeartbeatAfter`.
 */
export interface ImOnlineHeartbeatAfterStorageV100 {
    get(): Promise<number>
}

export class ImOnlineKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV100(): ImOnlineKeysStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'ReceivedHeartbeats'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get asV100(): ImOnlineReceivedHeartbeatsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV100 {
    get(key1: number, key2: number): Promise<([number, v100.BoundedOpaqueNetworkState] | undefined)>
    getAll(): Promise<[number, v100.BoundedOpaqueNetworkState][]>
    getMany(keys: [number, number][]): Promise<([number, v100.BoundedOpaqueNetworkState] | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, v100.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, v100.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, v100.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, v100.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, v100.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, v100.BoundedOpaqueNetworkState]][]>
}

export class InitializerBufferedSessionChangesStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'BufferedSessionChanges'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8ca8921e3e82455d025ef60ac4a362641034332241c6a69a4183e6e8f6e58800'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get asV100(): InitializerBufferedSessionChangesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Buffered session changes along with the block number at which they should be applied.
 * 
 *  Typically this will be empty or one element long. Apart from that this item never hits
 *  the storage.
 * 
 *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
 *  upgrade boundaries or if governance intervenes.
 */
export interface InitializerBufferedSessionChangesStorageV100 {
    get(): Promise<v100.BufferedSessionChange[]>
}

export class InitializerHasInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'HasInitialized'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    get asV100(): InitializerHasInitializedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Whether the parachains modules have been initialized within this block.
 * 
 *  Semantically a `bool`, but this guarantees it should never hit the trie,
 *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
 * 
 *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
 *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
 *  the semantics of this variable.
 */
export interface InitializerHasInitializedStorageV100 {
    get(): Promise<(null | undefined)>
}

export class MarketplaceInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Info'
    }

    /**
     *  Stores information about the marketplace
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'cf0eb405cb6ed3bb6861e38a8d936f67fa9f71862d7c3c2be2ca3f90d3ad8b3d'
    }

    /**
     *  Stores information about the marketplace
     */
    get asMatrixEnjinV603(): MarketplaceInfoStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.MarketPlaceInfo>
}

export class MarketplaceListingsStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Listings'
    }

    /**
     *  Listings by ID
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
    }

    /**
     *  Listings by ID
     */
    get asMatrixEnjinV603(): MarketplaceListingsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Listing | undefined)>
    getAll(): Promise<matrixEnjinV603.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
}

export class MatrixXcmMinimumWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'MatrixXcm'
    }

    protected getName() {
        return 'MinimumWeights'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asMatrixEnjinV603(): MatrixXcmMinimumWeightsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MatrixXcmMinimumWeightsStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.MinimumWeightFeePair>
    getAll(): Promise<matrixEnjinV603.MinimumWeightFeePair[]>
    getMany(keys: matrixEnjinV603.XcmOperation[]): Promise<matrixEnjinV603.MinimumWeightFeePair[]>
    getKeys(): Promise<matrixEnjinV603.XcmOperation[]>
    getKeys(key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.XcmOperation): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getPairs(): Promise<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
    getPairs(key: matrixEnjinV603.XcmOperation): Promise<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.XcmOperation): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
}

export class MessageQueueBookStateForStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'BookStateFor'
    }

    /**
     *  The index of the first and last (non-empty) pages.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '93fe23159341636a8044518de6373ca2f3d3b1c3055b6d2ce00b9962e365158d'
    }

    /**
     *  The index of the first and last (non-empty) pages.
     */
    get asV105(): MessageQueueBookStateForStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface MessageQueueBookStateForStorageV105 {
    get(key: v105.AggregateMessageOrigin): Promise<v105.BookState>
    getAll(): Promise<v105.BookState[]>
    getMany(keys: v105.AggregateMessageOrigin[]): Promise<v105.BookState[]>
    getKeys(): Promise<v105.AggregateMessageOrigin[]>
    getKeys(key: v105.AggregateMessageOrigin): Promise<v105.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number): AsyncIterable<v105.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, key: v105.AggregateMessageOrigin): AsyncIterable<v105.AggregateMessageOrigin[]>
    getPairs(): Promise<[k: v105.AggregateMessageOrigin, v: v105.BookState][]>
    getPairs(key: v105.AggregateMessageOrigin): Promise<[k: v105.AggregateMessageOrigin, v: v105.BookState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v105.AggregateMessageOrigin, v: v105.BookState][]>
    getPairsPaged(pageSize: number, key: v105.AggregateMessageOrigin): AsyncIterable<[k: v105.AggregateMessageOrigin, v: v105.BookState][]>
}

export class MessageQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The map of page indices to pages.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '90748ccdff779a7f9bace80620324853a2532f6f04d7a1fa795ab57a3c0fc734'
    }

    /**
     *  The map of page indices to pages.
     */
    get asV105(): MessageQueuePagesStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  The map of page indices to pages.
 */
export interface MessageQueuePagesStorageV105 {
    get(key1: v105.AggregateMessageOrigin, key2: number): Promise<(v105.Page | undefined)>
    getAll(): Promise<v105.Page[]>
    getMany(keys: [v105.AggregateMessageOrigin, number][]): Promise<(v105.Page | undefined)[]>
    getKeys(): Promise<[v105.AggregateMessageOrigin, number][]>
    getKeys(key1: v105.AggregateMessageOrigin): Promise<[v105.AggregateMessageOrigin, number][]>
    getKeys(key1: v105.AggregateMessageOrigin, key2: number): Promise<[v105.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v105.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, key1: v105.AggregateMessageOrigin): AsyncIterable<[v105.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, key1: v105.AggregateMessageOrigin, key2: number): AsyncIterable<[v105.AggregateMessageOrigin, number][]>
    getPairs(): Promise<[k: [v105.AggregateMessageOrigin, number], v: v105.Page][]>
    getPairs(key1: v105.AggregateMessageOrigin): Promise<[k: [v105.AggregateMessageOrigin, number], v: v105.Page][]>
    getPairs(key1: v105.AggregateMessageOrigin, key2: number): Promise<[k: [v105.AggregateMessageOrigin, number], v: v105.Page][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v105.AggregateMessageOrigin, number], v: v105.Page][]>
    getPairsPaged(pageSize: number, key1: v105.AggregateMessageOrigin): AsyncIterable<[k: [v105.AggregateMessageOrigin, number], v: v105.Page][]>
    getPairsPaged(pageSize: number, key1: v105.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [v105.AggregateMessageOrigin, number], v: v105.Page][]>
}

export class MessageQueueServiceHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'ServiceHead'
    }

    /**
     *  The origin at which we should begin servicing.
     */
    get isV105(): boolean {
        return this.getTypeHash() === 'd502ee4c5986385a23f736bd2e5ae2da53f75570a11c375a5cced66c634c3760'
    }

    /**
     *  The origin at which we should begin servicing.
     */
    get asV105(): MessageQueueServiceHeadStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  The origin at which we should begin servicing.
 */
export interface MessageQueueServiceHeadStorageV105 {
    get(): Promise<(v105.AggregateMessageOrigin | undefined)>
}

export class MmrNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'Nodes'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'ffc087e1323413e73a9729e444bf115bb89bc74cab9f4347c9dc890a14ae8d68'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get asV100(): MmrNodesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface MmrNodesStorageV100 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MmrNumberOfLeavesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'NumberOfLeaves'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get asV100(): MmrNumberOfLeavesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface MmrNumberOfLeavesStorageV100 {
    get(): Promise<bigint>
}

export class MmrRootHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'RootHash'
    }

    /**
     *  Latest MMR Root hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Latest MMR Root hash.
     */
    get asV100(): MmrRootHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Latest MMR Root hash.
 */
export interface MmrRootHashStorageV100 {
    get(): Promise<Uint8Array>
}

export class MmrLeafBeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MmrLeaf'
    }

    protected getName() {
        return 'BeefyAuthorities'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get asV100(): MmrLeafBeefyAuthoritiesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Details of current BEEFY authority set.
 */
export interface MmrLeafBeefyAuthoritiesStorageV100 {
    get(): Promise<v100.BeefyAuthoritySet>
}

export class MmrLeafBeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MmrLeaf'
    }

    protected getName() {
        return 'BeefyNextAuthorities'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get asV100(): MmrLeafBeefyNextAuthoritiesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface MmrLeafBeefyNextAuthoritiesStorageV100 {
    get(): Promise<v100.BeefyAuthoritySet>
}

export class MultiTokensAssetIdsByLocationStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'AssetIdsByLocation'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7920f1b519a7f965b522a230108d367f65586e4e31d2aa9d94778fd4f0aab869'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asMatrixEnjinV603(): MultiTokensAssetIdsByLocationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.V3MultiLocation): Promise<(matrixEnjinV603.AssetId | undefined)>
    getAll(): Promise<matrixEnjinV603.AssetId[]>
    getMany(keys: matrixEnjinV603.V3MultiLocation[]): Promise<(matrixEnjinV603.AssetId | undefined)[]>
    getKeys(): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeys(key: matrixEnjinV603.V3MultiLocation): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.V3MultiLocation): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getPairs(): Promise<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
    getPairs(key: matrixEnjinV603.V3MultiLocation): Promise<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.V3MultiLocation): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
}

export class MultiTokensAttributesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Attributes'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get asMatrixEnjinV603(): MultiTokensAttributesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Metadata of collections and tokens.
 */
export interface MultiTokensAttributesStorageMatrixEnjinV603 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<(matrixEnjinV603.Attribute | undefined)>
    getAll(): Promise<matrixEnjinV603.Attribute[]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(matrixEnjinV603.Attribute | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
}

export class MultiTokensClaimableCollectionIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'ClaimableCollectionIds'
    }

    /**
     *  Stores data for an ethereum address
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'fdfff90ed5af79ee1858a1d55d303d04b33fc21c6c879b2ea5fbb5725ee9ca02'
    }

    /**
     *  Stores data for an ethereum address
     */
    get asMatrixEnjinV1000(): MultiTokensClaimableCollectionIdsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  Stores data for an ethereum address
 */
export interface MultiTokensClaimableCollectionIdsStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: Uint8Array[]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
}

export class MultiTokensCollectionAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'CollectionAccounts'
    }

    /**
     *  Stores information for an account per collection
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
    }

    /**
     *  Stores information for an account per collection
     */
    get asMatrixEnjinV603(): MultiTokensCollectionAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores information for an account per collection
 */
export interface MultiTokensCollectionAccountsStorageMatrixEnjinV603 {
    get(key1: bigint, key2: Uint8Array): Promise<(matrixEnjinV603.CollectionAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.CollectionAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(matrixEnjinV603.CollectionAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
}

export class MultiTokensCollectionsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Collections'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asMatrixEnjinV603(): MultiTokensCollectionsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(matrixEnjinV603.Collection | undefined)>
    getAll(): Promise<matrixEnjinV603.Collection[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV603.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV603.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV603.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV603.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV603.Collection][]>
}

export class MultiTokensEthereumAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumAccounts'
    }

    /**
     *  Stores data for an ethereum address
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7cc397680e440faaf2a40fafae4d9fde6957423c8489984029cd2e04818a92f7'
    }

    /**
     *  Stores data for an ethereum address
     */
    get asMatrixEnjinV603(): MultiTokensEthereumAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores data for an ethereum address
 */
export interface MultiTokensEthereumAccountsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.EthereumAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.EthereumAccount[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.EthereumAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
}

export class MultiTokensEthereumBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumBalances'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'c6d469a2bb1159ba1b3bfd48909f40e09449e74f982e2dee969f83c6e45d4ea9'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get asMatrixEnjinV603(): MultiTokensEthereumBalancesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Holds the ethereum balance for each token
 */
export interface MultiTokensEthereumBalancesStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
}

export class MultiTokensEthereumTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumTokens'
    }

    /**
     *  The token assets from ethereum
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8862d6dd197aaeee063a1d9f6b6879d6d08545ad6f66ce3d357775bbceb00bc9'
    }

    /**
     *  The token assets from ethereum
     */
    get asMatrixEnjinV603(): MultiTokensEthereumTokensStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The token assets from ethereum
 */
export interface MultiTokensEthereumTokensStorageMatrixEnjinV603 {
    get(key1: bigint, key2: bigint): Promise<(matrixEnjinV603.EthereumToken | undefined)>
    getAll(): Promise<matrixEnjinV603.EthereumToken[]>
    getMany(keys: [bigint, bigint][]): Promise<(matrixEnjinV603.EthereumToken | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
}

export class MultiTokensIdleOperationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'IdleOperations'
    }

    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'ec6db42c13dba4897e1ce4c4d70fe8bb97c8e9d28f3b74c9fb0c50aa25ec55e1'
    }

    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    get asV100(): MultiTokensIdleOperationsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Pending operations to be executed on [`Hooks::on_idle`].
 */
export interface MultiTokensIdleOperationsStorageV100 {
    get(): Promise<v100.WeightedIdleOperation[]>
}

export class MultiTokensLastIteratedMigrationKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'LastIteratedMigrationKey'
    }

    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    get isV100(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    get asV100(): MultiTokensLastIteratedMigrationKeyStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Stores last iterated key for migrations. Used by multi block migrations
 */
export interface MultiTokensLastIteratedMigrationKeyStorageV100 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MultiTokensMigrationStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'MigrationStatus'
    }

    /**
     *  Status of the current multi-block migration
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b774eae9b764e58709b24f1cf13f47feebc5721c1a9d4e0ed22e4d0aaff8a169'
    }

    /**
     *  Status of the current multi-block migration
     */
    get asMatrixEnjinV603(): MultiTokensMigrationStatusStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Status of the current multi-block migration
 */
export interface MultiTokensMigrationStatusStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.MigrationStage>
}

export class MultiTokensMigrationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Migrations'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '63315d583f765c75d71965bc03cd236f3e328b0d0c36349716dd7e18cb40721d'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get asMatrixEnjinV603(): MultiTokensMigrationsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores last iterated keys for migrations. Used by multi block migrations
 *  to resume from the last iterated key.
 * 
 *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
 *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
 */
export interface MultiTokensMigrationsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Migration | undefined)>
    getAll(): Promise<matrixEnjinV603.Migration[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Migration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
}

export class MultiTokensNativeCollectionIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NativeCollectionIds'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '03ac0b80fdf641bd511733299fc9539a6f79a9c134c3b7d7af44cad8d25fa71a'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get asMatrixEnjinV603(): MultiTokensNativeCollectionIdsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Map of ethereum collection id to the native collection id
 */
export interface MultiTokensNativeCollectionIdsStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class MultiTokensNextCollectionIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NextCollectionId'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get asMatrixEnjinV603(): MultiTokensNextCollectionIdStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Sequencer for collectionID generators.
 */
export interface MultiTokensNextCollectionIdStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class MultiTokensTokenAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'TokenAccounts'
    }

    /**
     *  Accounts per token
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '022fd18d40c53146908df260f1461b3e2a5e157129bb9cf34fd0207c0910c0a9'
    }

    /**
     *  Accounts per token
     */
    get asMatrixEnjinV603(): MultiTokensTokenAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Accounts per token
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
    }

    /**
     *  Accounts per token
     */
    get asV100(): MultiTokensTokenAccountsStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Accounts per token
     */
    get isV101(): boolean {
        return this.getTypeHash() === '022fd18d40c53146908df260f1461b3e2a5e157129bb9cf34fd0207c0910c0a9'
    }

    /**
     *  Accounts per token
     */
    get asV101(): MultiTokensTokenAccountsStorageV101 {
        assert(this.isV101)
        return this as any
    }
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageMatrixEnjinV603 {
    get(key1: bigint, key2: bigint, key3: Uint8Array): Promise<(matrixEnjinV603.TokenAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.TokenAccount[]>
    getMany(keys: [bigint, bigint, Uint8Array][]): Promise<(matrixEnjinV603.TokenAccount | undefined)[]>
    getKeys(): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageV100 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(v100.TokenAccount | undefined)>
    getAll(): Promise<v100.TokenAccount[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(v100.TokenAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: v100.TokenAccount][]>
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageV101 {
    get(key1: bigint, key2: bigint, key3: Uint8Array): Promise<(v101.TokenAccount | undefined)>
    getAll(): Promise<v101.TokenAccount[]>
    getMany(keys: [bigint, bigint, Uint8Array][]): Promise<(v101.TokenAccount | undefined)[]>
    getKeys(): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v101.TokenAccount][]>
}

export class MultiTokensTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Tokens'
    }

    /**
     *  Tokens storage
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asMatrixEnjinV603(): MultiTokensTokensStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isV100(): boolean {
        return this.getTypeHash() === '4a69c75f61a970937687e30fb5e813537829154fe6e4cd7a99f23a9b880ca004'
    }

    /**
     *  Tokens storage
     */
    get asV100(): MultiTokensTokensStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isV102(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asV102(): MultiTokensTokensStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageMatrixEnjinV603 {
    get(key1: bigint, key2: bigint): Promise<(matrixEnjinV603.Token | undefined)>
    getAll(): Promise<matrixEnjinV603.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(matrixEnjinV603.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageV100 {
    get(key1: bigint, key2: bigint): Promise<(v100.Token | undefined)>
    getAll(): Promise<v100.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(v100.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v100.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v100.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v100.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v100.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v100.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v100.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageV102 {
    get(key1: bigint, key2: bigint): Promise<(v102.Token | undefined)>
    getAll(): Promise<v102.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(v102.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v102.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v102.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v102.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v102.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v102.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v102.Token][]>
}

export class MultiTokensUnmintableTokenIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'UnmintableTokenIds'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0d4d9ebe1fd4a49e1a98cae9e4f2da1f4465c6dbdbc2902d364eefd30c55ef87'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get asMatrixEnjinV603(): MultiTokensUnmintableTokenIdsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'c6dd1e5d786cc8c920e7ae514edddfde5ec30f29c3eae8b4826005bc74c2fc57'
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get asMatrixEnjinV1000(): MultiTokensUnmintableTokenIdsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get isV106(): boolean {
        return this.getTypeHash() === '0d4d9ebe1fd4a49e1a98cae9e4f2da1f4465c6dbdbc2902d364eefd30c55ef87'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get asV106(): MultiTokensUnmintableTokenIdsStorageV106 {
        assert(this.isV106)
        return this as any
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get isV1021(): boolean {
        return this.getTypeHash() === 'c6dd1e5d786cc8c920e7ae514edddfde5ec30f29c3eae8b4826005bc74c2fc57'
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get asV1021(): MultiTokensUnmintableTokenIdsStorageV1021 {
        assert(this.isV1021)
        return this as any
    }
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface MultiTokensUnmintableTokenIdsStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(matrixEnjinV603.RangeInclusive | undefined)>
    getAll(): Promise<matrixEnjinV603.RangeInclusive[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV603.RangeInclusive | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface MultiTokensUnmintableTokenIdsStorageMatrixEnjinV1000 {
    get(key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface MultiTokensUnmintableTokenIdsStorageV106 {
    get(key: bigint): Promise<(v106.RangeInclusive | undefined)>
    getAll(): Promise<v106.RangeInclusive[]>
    getMany(keys: bigint[]): Promise<(v106.RangeInclusive | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v106.RangeInclusive][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v106.RangeInclusive][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v106.RangeInclusive][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v106.RangeInclusive][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface MultiTokensUnmintableTokenIdsStorageV1021 {
    get(key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asMatrixEnjinV603(): MultisigMultisigsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixEnjinV603.Multisig | undefined)>
    getAll(): Promise<matrixEnjinV603.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixEnjinV603.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
}

export class NominationPoolsBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'BondedPools'
    }

    /**
     *  Storage for bonded pools.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '640ffb56eecd4a1aae6a1f7a103c42dd9eb513aafa6fcc6e729d6418e20587be'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV100(): NominationPoolsBondedPoolsStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV101(): boolean {
        return this.getTypeHash() === '1b2d466643e562aa73e2867776a69ec5801015aab60b56f166cad7972be66a56'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV101(): NominationPoolsBondedPoolsStorageV101 {
        assert(this.isV101)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV102(): boolean {
        return this.getTypeHash() === 'f79c276dc028d3ac60991d6b439888d029045245222493c531d7c343a33ba993'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV102(): NominationPoolsBondedPoolsStorageV102 {
        assert(this.isV102)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV103(): boolean {
        return this.getTypeHash() === '7d0672d63164c058dff0cfe7ea90dcbf1627416221dc41815a07a03eee9f5e11'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV103(): NominationPoolsBondedPoolsStorageV103 {
        assert(this.isV103)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV104(): boolean {
        return this.getTypeHash() === 'cac874fe9eb1663a8d5625ab14f3b742f11966f1c7b75a0aee5eefb9232d9bd7'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV104(): NominationPoolsBondedPoolsStorageV104 {
        assert(this.isV104)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '3a805d9177dfde226b222b8ccd6278b873dd73436c9ba57adcdd84b4bbb3e7e1'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV105(): NominationPoolsBondedPoolsStorageV105 {
        assert(this.isV105)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV110(): boolean {
        return this.getTypeHash() === '8becf549e3de92c60af0e9e76acf208cb0e5cda2832dd73c12a7165b32fa0529'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV110(): NominationPoolsBondedPoolsStorageV110 {
        assert(this.isV110)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV1023(): boolean {
        return this.getTypeHash() === 'd7e2eb9cfaff8e3b461b3de3913b54e54ae6114115e2cdcc3ba1b13cb8ca2fc3'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV1023(): NominationPoolsBondedPoolsStorageV1023 {
        assert(this.isV1023)
        return this as any
    }
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV100 {
    get(key: number): Promise<(v100.BondedPoolInner | undefined)>
    getAll(): Promise<v100.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v100.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v100.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV101 {
    get(key: number): Promise<(v101.BondedPoolInner | undefined)>
    getAll(): Promise<v101.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v101.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v101.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v101.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v101.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v101.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV102 {
    get(key: number): Promise<(v102.BondedPoolInner | undefined)>
    getAll(): Promise<v102.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v102.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v102.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v102.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v102.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v102.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV103 {
    get(key: number): Promise<(v103.BondedPoolInner | undefined)>
    getAll(): Promise<v103.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v103.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v103.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v103.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v103.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v103.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV104 {
    get(key: number): Promise<(v104.BondedPoolInner | undefined)>
    getAll(): Promise<v104.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v104.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v104.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v104.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v104.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v104.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV105 {
    get(key: number): Promise<(v105.BondedPoolInner | undefined)>
    getAll(): Promise<v105.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v105.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v105.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v105.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v105.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v105.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV110 {
    get(key: number): Promise<(v110.BondedPoolInner | undefined)>
    getAll(): Promise<v110.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v110.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v110.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v110.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v110.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v110.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV1023 {
    get(key: number): Promise<(v1023.BondedPoolInner | undefined)>
    getAll(): Promise<v1023.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v1023.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1023.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v1023.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1023.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1023.BondedPoolInner][]>
}

export class NominationPoolsCounterForBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForBondedPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): NominationPoolsCounterForBondedPoolsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForBondedPoolsStorageV100 {
    get(): Promise<number>
}

export class NominationPoolsCounterForReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForReversePoolIdLookup'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): NominationPoolsCounterForReversePoolIdLookupStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForReversePoolIdLookupStorageV100 {
    get(): Promise<number>
}

export class NominationPoolsCounterForSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForSubPoolsStorage'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): NominationPoolsCounterForSubPoolsStorageStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForSubPoolsStorageStorageV100 {
    get(): Promise<number>
}

export class NominationPoolsEarlyBirdBonusInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'EarlyBirdBonusInfo'
    }

    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    get isV106(): boolean {
        return this.getTypeHash() === '755c75988866d6eef973165408c8cafecef368328ced1d2d949a7aa054ecbb48'
    }

    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    get asV106(): NominationPoolsEarlyBirdBonusInfoStorageV106 {
        assert(this.isV106)
        return this as any
    }

    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    get isV1021(): boolean {
        return this.getTypeHash() === '1709cedfb296c6671d529dd27df9eeb2e2746d0193d97a3f3d1aef17858ae382'
    }

    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    get asV1021(): NominationPoolsEarlyBirdBonusInfoStorageV1021 {
        assert(this.isV1021)
        return this as any
    }

    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    get isV1023(): boolean {
        return this.getTypeHash() === '3d63cf176b769fc2e3ca1ed705ffd0395b6e51da2f64dfc55ace66e1da2d54c9'
    }

    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    get asV1023(): NominationPoolsEarlyBirdBonusInfoStorageV1023 {
        assert(this.isV1023)
        return this as any
    }
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface NominationPoolsEarlyBirdBonusInfoStorageV106 {
    get(): Promise<v106.EarlyBirdInfo>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface NominationPoolsEarlyBirdBonusInfoStorageV1021 {
    get(): Promise<v1021.EarlyBirdInfo>
}

/**
 *  The queue of bonuses that should be distributed to the pools
 */
export interface NominationPoolsEarlyBirdBonusInfoStorageV1023 {
    get(): Promise<v1023.EarlyBirdInfo>
}

export class NominationPoolsEarlyBirdSharesStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'EarlyBirdShares'
    }

    /**
     *  The percentage shares of pool users for early bird rewards
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '6f76c240d84978d53ba03b8592b6fd7fbef26e766d19d4221be70c6326f6f240'
    }

    /**
     *  The percentage shares of pool users for early bird rewards
     */
    get asV1022(): NominationPoolsEarlyBirdSharesStorageV1022 {
        assert(this.isV1022)
        return this as any
    }
}

/**
 *  The percentage shares of pool users for early bird rewards
 */
export interface NominationPoolsEarlyBirdSharesStorageV1022 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
}

export class NominationPoolsEraPayoutInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'EraPayoutInfo'
    }

    /**
     *  Tracks payout information for an era
     */
    get isV110(): boolean {
        return this.getTypeHash() === '76ff1021fdc8be5d39056e3355097644cf670e2432619e8a110e560d5294e29e'
    }

    /**
     *  Tracks payout information for an era
     */
    get asV110(): NominationPoolsEraPayoutInfoStorageV110 {
        assert(this.isV110)
        return this as any
    }

    /**
     *  Tracks payout information for an era
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'f41d38aa05ac53dbb35edc04e8b05aa3c069ee3416b4ac753e9eb4b94bb79101'
    }

    /**
     *  Tracks payout information for an era
     */
    get asV120(): NominationPoolsEraPayoutInfoStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Tracks payout information for an era
 */
export interface NominationPoolsEraPayoutInfoStorageV110 {
    get(): Promise<v110.EraPayout>
}

/**
 *  Tracks payout information for an era
 */
export interface NominationPoolsEraPayoutInfoStorageV120 {
    get(): Promise<v120.EraPayout>
}

export class NominationPoolsGlobalMaxCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'GlobalMaxCommission'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     */
    get asV100(): NominationPoolsGlobalMaxCommissionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 */
export interface NominationPoolsGlobalMaxCommissionStorageV100 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsLastPoolIdStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'LastPoolId'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get asV100(): NominationPoolsLastPoolIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface NominationPoolsLastPoolIdStorageV100 {
    get(): Promise<number>
}

export class NominationPoolsMinCreateBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinCreateBond'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    get asV100(): NominationPoolsMinCreateBondStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 * 
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface NominationPoolsMinCreateBondStorageV100 {
    get(): Promise<bigint>
}

export class NominationPoolsMinJoinBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinJoinBond'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get asV100(): NominationPoolsMinJoinBondStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface NominationPoolsMinJoinBondStorageV100 {
    get(): Promise<bigint>
}

export class NominationPoolsNextPoolIdStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'NextPoolId'
    }

    /**
     *  The next pool id that will be used in [`create`](Pallet::create). Increments by one with
     *  each pool created.
     */
    get isV103(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next pool id that will be used in [`create`](Pallet::create). Increments by one with
     *  each pool created.
     */
    get asV103(): NominationPoolsNextPoolIdStorageV103 {
        assert(this.isV103)
        return this as any
    }
}

/**
 *  The next pool id that will be used in [`create`](Pallet::create). Increments by one with
 *  each pool created.
 */
export interface NominationPoolsNextPoolIdStorageV103 {
    get(): Promise<number>
}

export class NominationPoolsPoolBonusInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'PoolBonusInfos'
    }

    /**
     *  Storage for pool bonus info
     */
    get isV1021(): boolean {
        return this.getTypeHash() === 'b51c9afb2ef6352dbef055d69acf8d2e3d577b09c4eea98e33331d73dd1c3c0d'
    }

    /**
     *  Storage for pool bonus info
     */
    get asV1021(): NominationPoolsPoolBonusInfosStorageV1021 {
        assert(this.isV1021)
        return this as any
    }

    /**
     *  Storage for pool bonus info
     */
    get isV1023(): boolean {
        return this.getTypeHash() === '40eeb6a17d836908ec640de25fba7604b319c600f497750a125b642f08dc2540'
    }

    /**
     *  Storage for pool bonus info
     */
    get asV1023(): NominationPoolsPoolBonusInfosStorageV1023 {
        assert(this.isV1023)
        return this as any
    }
}

/**
 *  Storage for pool bonus info
 */
export interface NominationPoolsPoolBonusInfosStorageV1021 {
    get(key: number): Promise<(v1021.PoolBonusInfo | undefined)>
    getAll(): Promise<v1021.PoolBonusInfo[]>
    getMany(keys: number[]): Promise<(v1021.PoolBonusInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1021.PoolBonusInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1021.PoolBonusInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1021.PoolBonusInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1021.PoolBonusInfo][]>
}

/**
 *  Storage for pool bonus info
 */
export interface NominationPoolsPoolBonusInfosStorageV1023 {
    get(key: number): Promise<(v1023.PoolBonusInfo | undefined)>
    getAll(): Promise<v1023.PoolBonusInfo[]>
    getMany(keys: number[]): Promise<(v1023.PoolBonusInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1023.PoolBonusInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1023.PoolBonusInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1023.PoolBonusInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1023.PoolBonusInfo][]>
}

export class NominationPoolsPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'PoolMembers'
    }

    /**
     *  Active members.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'ffbd8ced3f7180da32eedd2be06b3a4555c7e2b8f639c957bde418d0d6bd58eb'
    }

    /**
     *  Active members.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV100(): NominationPoolsPoolMembersStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Active members.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface NominationPoolsPoolMembersStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(v100.PoolMember | undefined)>
    getAll(): Promise<v100.PoolMember[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v100.PoolMember | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.PoolMember][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.PoolMember][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.PoolMember][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.PoolMember][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.PoolMember][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.PoolMember][]>
}

export class NominationPoolsReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ReversePoolIdLookup'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get asV100(): NominationPoolsReversePoolIdLookupStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface NominationPoolsReversePoolIdLookupStorageV100 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class NominationPoolsStakingInformationStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'StakingInformation'
    }

    /**
     *  The general staking parameters
     */
    get isV105(): boolean {
        return this.getTypeHash() === '7f3a46db667c49dd80d12a4f4467884431b90013ec472a4819ca8fe29379a5db'
    }

    /**
     *  The general staking parameters
     */
    get asV105(): NominationPoolsStakingInformationStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  The general staking parameters
 */
export interface NominationPoolsStakingInformationStorageV105 {
    get(): Promise<(v105.StakingInfo | undefined)>
}

export class NominationPoolsSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'SubPoolsStorage'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'dc5bb02a122fb418c88fbe5c06d8e91818c8d4fffe761fe0299ea8709df81bb3'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    get asV100(): NominationPoolsSubPoolsStorageStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
 *  hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface NominationPoolsSubPoolsStorageStorageV100 {
    get(key: number): Promise<(v100.SubPools | undefined)>
    getAll(): Promise<v100.SubPools[]>
    getMany(keys: number[]): Promise<(v100.SubPools | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.SubPools][]>
    getPairs(key: number): Promise<[k: number, v: v100.SubPools][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.SubPools][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.SubPools][]>
}

export class NominationPoolsUnbondingMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'UnbondingMembers'
    }

    /**
     *  Pool Members who are Unbonding.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV105(): boolean {
        return this.getTypeHash() === 'ffbd8ced3f7180da32eedd2be06b3a4555c7e2b8f639c957bde418d0d6bd58eb'
    }

    /**
     *  Pool Members who are Unbonding.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV105(): NominationPoolsUnbondingMembersStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  Pool Members who are Unbonding.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface NominationPoolsUnbondingMembersStorageV105 {
    get(key1: number, key2: Uint8Array): Promise<(v105.PoolMember | undefined)>
    getAll(): Promise<v105.PoolMember[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v105.PoolMember | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v105.PoolMember][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v105.PoolMember][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v105.PoolMember][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v105.PoolMember][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v105.PoolMember][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v105.PoolMember][]>
}

export class NominationPoolsUsedPoolTokenIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'UsedPoolTokenIds'
    }

    /**
     *  A reverse lookup from the token_id to pool_id.
     * 
     *  This is used for making sure the same token is not used to create multiple pools
     */
    get isV101(): boolean {
        return this.getTypeHash() === '9f62a6a8b43200f35fa1fc57463869be42d2dc9a1bddbdf57ca30f05c51d6786'
    }

    /**
     *  A reverse lookup from the token_id to pool_id.
     * 
     *  This is used for making sure the same token is not used to create multiple pools
     */
    get asV101(): NominationPoolsUsedPoolTokenIdsStorageV101 {
        assert(this.isV101)
        return this as any
    }
}

/**
 *  A reverse lookup from the token_id to pool_id.
 * 
 *  This is used for making sure the same token is not used to create multiple pools
 */
export interface NominationPoolsUsedPoolTokenIdsStorageV101 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ConcurrentReportsIndex'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV100(): OffencesConcurrentReportsIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV100 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
}

export class OffencesReportsStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'Reports'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV100(): OffencesReportsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV100 {
    get(key: Uint8Array): Promise<(v100.OffenceDetails | undefined)>
    getAll(): Promise<v100.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v100.OffenceDetails | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.OffenceDetails][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.OffenceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.OffenceDetails][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.OffenceDetails][]>
}

export class OffencesReportsByKindIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ReportsByKindIndex'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0f535b9892aaca40228e6d3f57b63c241690838a686fa8be3e7f0992bfda0d19'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get asV100(): OffencesReportsByKindIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface OffencesReportsByKindIndexStorageV100 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ParaInclusionAvailabilityBitfieldsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'AvailabilityBitfields'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'bf97f32483242f327da32063a836c1f797b9f0b05ea5417192cc00309d339c23'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get asV100(): ParaInclusionAvailabilityBitfieldsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface ParaInclusionAvailabilityBitfieldsStorageV100 {
    get(key: number): Promise<(v100.AvailabilityBitfieldRecord | undefined)>
    getAll(): Promise<v100.AvailabilityBitfieldRecord[]>
    getMany(keys: number[]): Promise<(v100.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.AvailabilityBitfieldRecord][]>
    getPairs(key: number): Promise<[k: number, v: v100.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.AvailabilityBitfieldRecord][]>
}

export class ParaInclusionPendingAvailabilityStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailability'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd1ce28ee05b8364d55d8ee99dab4ba7567356381f70d142c1dda5b6de4abf79b'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get asV100(): ParaInclusionPendingAvailabilityStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityStorageV100 {
    get(key: number): Promise<(v100.CandidatePendingAvailability | undefined)>
    getAll(): Promise<v100.CandidatePendingAvailability[]>
    getMany(keys: number[]): Promise<(v100.CandidatePendingAvailability | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.CandidatePendingAvailability][]>
    getPairs(key: number): Promise<[k: number, v: v100.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.CandidatePendingAvailability][]>
}

export class ParaInclusionPendingAvailabilityCommitmentsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailabilityCommitments'
    }

    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '4e6f7845cb653fd4982455ab1aefc6bf2c68b8591ae7b58226dd2c5b0621f0cf'
    }

    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    get asV100(): ParaInclusionPendingAvailabilityCommitmentsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The commitments of candidates pending availability, by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityCommitmentsStorageV100 {
    get(key: number): Promise<(v100.V2CandidateCommitments | undefined)>
    getAll(): Promise<v100.V2CandidateCommitments[]>
    getMany(keys: number[]): Promise<(v100.V2CandidateCommitments | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.V2CandidateCommitments][]>
    getPairs(key: number): Promise<[k: number, v: v100.V2CandidateCommitments][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.V2CandidateCommitments][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.V2CandidateCommitments][]>
}

export class ParaInherentIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get asV100(): ParaInherentIncludedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface ParaInherentIncludedStorageV100 {
    get(): Promise<(null | undefined)>
}

export class ParaInherentOnChainVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'OnChainVotes'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '90024dc5cb8ad039cc5c064f6dae6d9b18bbb24fd2d8b5dda8f60b533147590b'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get asV100(): ParaInherentOnChainVotesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface ParaInherentOnChainVotesStorageV100 {
    get(): Promise<(v100.V2ScrapedOnChainVotes | undefined)>
}

export class ParaSchedulerAvailabilityCoresStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'AvailabilityCores'
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
    get isV100(): boolean {
        return this.getTypeHash() === '7f07eeae3b19707b6c2d7d6d316072b68175ffebbad0a2329e61a8413e936151'
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
    get asV100(): ParaSchedulerAvailabilityCoresStorageV100 {
        assert(this.isV100)
        return this as any
    }
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
export interface ParaSchedulerAvailabilityCoresStorageV100 {
    get(): Promise<(v100.V2CoreOccupied | undefined)[]>
}

export class ParaSchedulerParathreadClaimIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ParathreadClaimIndex'
    }

    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    get asV100(): ParaSchedulerParathreadClaimIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  An index used to ensure that only one claim on a parathread exists in the queue or is
 *  currently being handled by an occupied core.
 * 
 *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
 */
export interface ParaSchedulerParathreadClaimIndexStorageV100 {
    get(): Promise<number[]>
}

export class ParaSchedulerParathreadQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ParathreadQueue'
    }

    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'c75714ddf007711a84c1420eb03081789539e9248fd15ec5bdfd7ef07d871660'
    }

    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    get asV100(): ParaSchedulerParathreadQueueStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A queue of upcoming claims and which core they should be mapped onto.
 * 
 *  The number of queued claims is bounded at the `scheduling_lookahead`
 *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
 */
export interface ParaSchedulerParathreadQueueStorageV100 {
    get(): Promise<v100.ParathreadClaimQueue>
}

export class ParaSchedulerScheduledStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'Scheduled'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'ba9a2a711ca71cdb5388a14f4c122bb3979325380609bfba73d66568069257a7'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get asV100(): ParaSchedulerScheduledStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 * 
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 * 
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ParaSchedulerScheduledStorageV100 {
    get(): Promise<v100.CoreAssignment[]>
}

export class ParaSchedulerSessionStartBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'SessionStartBlock'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get asV100(): ParaSchedulerSessionStartBlockStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations have occurred.
 * 
 *  Note that in the context of parachains modules the session change is signaled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface ParaSchedulerSessionStartBlockStorageV100 {
    get(): Promise<number>
}

export class ParaSchedulerValidatorGroupsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ValidatorGroups'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '6812c4f54daaeff8842c0895b0d89bea407fdfe1c921e760ce2f412477ce233d'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    get asV100(): ParaSchedulerValidatorGroupsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 * 
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
 *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
 */
export interface ParaSchedulerValidatorGroupsStorageV100 {
    get(): Promise<number[][]>
}

export class ParaSessionInfoAccountKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AccountKeys'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '9ec34a723b63dfc1d78a2d356bbdb08e5be19ef85e221f93b46f03e24229ffd0'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get asV100(): ParaSessionInfoAccountKeysStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The validator account keys of the validators actively participating in parachain consensus.
 */
export interface ParaSessionInfoAccountKeysStorageV100 {
    get(key: number): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParaSessionInfoAssignmentKeysUnsafeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AssignmentKeysUnsafe'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get asV100(): ParaSessionInfoAssignmentKeysUnsafeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface ParaSessionInfoAssignmentKeysUnsafeStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class ParaSessionInfoEarliestStoredSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'EarliestStoredSession'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get asV100(): ParaSessionInfoEarliestStoredSessionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface ParaSessionInfoEarliestStoredSessionStorageV100 {
    get(): Promise<number>
}

export class ParaSessionInfoSessionExecutorParamsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'SessionExecutorParams'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get isV104(): boolean {
        return this.getTypeHash() === 'adef626da99b30a4e9862c45fef3ada49ed979bf86b1897fe7492b09dfa62a31'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get asV104(): ParaSessionInfoSessionExecutorParamsStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  Executor parameter set for a given session index
 */
export interface ParaSessionInfoSessionExecutorParamsStorageV104 {
    get(key: number): Promise<(v104.V4ExecutorParam[] | undefined)>
    getAll(): Promise<v104.V4ExecutorParam[][]>
    getMany(keys: number[]): Promise<(v104.V4ExecutorParam[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v104.V4ExecutorParam[]][]>
    getPairs(key: number): Promise<[k: number, v: v104.V4ExecutorParam[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v104.V4ExecutorParam[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v104.V4ExecutorParam[]][]>
}

export class ParaSessionInfoSessionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'Sessions'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2df170f53bbb8953f8c99d9d7899c64705f4a7bf2a4a355720ab5a1d2f0698f5'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get asV100(): ParaSessionInfoSessionsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface ParaSessionInfoSessionsStorageV100 {
    get(key: number): Promise<(v100.V2SessionInfo | undefined)>
    getAll(): Promise<v100.V2SessionInfo[]>
    getMany(keys: number[]): Promise<(v100.V2SessionInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.V2SessionInfo][]>
    getPairs(key: number): Promise<[k: number, v: v100.V2SessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.V2SessionInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.V2SessionInfo][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asMatrixEnjinV603(): ParachainInfoParachainIdStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asMatrixEnjinV603(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asMatrixEnjinV603(): ParachainSystemAuthorizedUpgradeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.CodeUpgradeAuthorization | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asMatrixEnjinV603(): ParachainSystemCustomValidationHeadDataStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asMatrixEnjinV603(): ParachainSystemDidSetValidationCodeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asMatrixEnjinV603(): ParachainSystemHostConfigurationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.V4AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemHrmpOutboundMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemHrmpWatermarkStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asMatrixEnjinV603(): ParachainSystemLastDmqMqcHeadStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asMatrixEnjinV603(): ParachainSystemLastHrmpMqcHeadsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageMatrixEnjinV603 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asMatrixEnjinV603(): ParachainSystemLastRelayChainBlockNumberStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asMatrixEnjinV603(): ParachainSystemNewValidationCodeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asMatrixEnjinV603(): ParachainSystemPendingUpwardMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get asMatrixEnjinV603(): ParachainSystemPendingValidationCodeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 * 
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface ParachainSystemPendingValidationCodeStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemProcessedDownwardMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asMatrixEnjinV603(): ParachainSystemRelayStateProofStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2e08e09c21eea176bfd53411112b867efc3c3d71f51431e11288adfb3e3ede6f'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asMatrixEnjinV603(): ParachainSystemRelevantMessagingStateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asMatrixEnjinV603(): ParachainSystemReservedDmpWeightOverrideStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asMatrixEnjinV603(): ParachainSystemReservedXcmpWeightOverrideStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.Weight | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asMatrixEnjinV603(): ParachainSystemUpgradeRestrictionSignalStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.V4UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemUpwardMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get asMatrixEnjinV603(): ParachainSystemValidationDataStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ParachainSystemValidationDataStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.V4PersistedValidationData | undefined)>
}

export class ParasActionsQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ActionsQueue'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get asV100(): ParasActionsQueueStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ParasActionsQueueStorageV100 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class ParasCodeByHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHash'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get asV100(): ParasCodeByHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Validation code stored by its hash.
 * 
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface ParasCodeByHashStorageV100 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ParasCodeByHashRefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHashRefs'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get asV100(): ParasCodeByHashRefsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface ParasCodeByHashRefsStorageV100 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class ParasCurrentCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CurrentCodeHash'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV100(): ParasCurrentCodeHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The validation code hash of every live para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasCurrentCodeHashStorageV100 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeHash'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV100(): ParasFutureCodeHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The actual future code hash of a para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasFutureCodeHashStorageV100 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeUpgrades'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get asV100(): ParasFutureCodeUpgradesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface ParasFutureCodeUpgradesStorageV100 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParasHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Heads'
    }

    /**
     *  The head-data of every registered para.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The head-data of every registered para.
     */
    get asV100(): ParasHeadsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The head-data of every registered para.
 */
export interface ParasHeadsStorageV100 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasParaLifecyclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ParaLifecycles'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '473075bfac0a21c841bb0ec54a9d1b0a1103a28ca5c11fc19789ead6f56d4516'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get asV100(): ParasParaLifecyclesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParasParaLifecyclesStorageV100 {
    get(key: number): Promise<(v100.ParaLifecycle | undefined)>
    getAll(): Promise<v100.ParaLifecycle[]>
    getMany(keys: number[]): Promise<(v100.ParaLifecycle | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ParaLifecycle][]>
    getPairs(key: number): Promise<[k: number, v: v100.ParaLifecycle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ParaLifecycle][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ParaLifecycle][]>
}

export class ParasParachainsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Parachains'
    }

    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     * 
     *  Consider using the [`ParachainsCache`] type of modifying.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     * 
     *  Consider using the [`ParachainsCache`] type of modifying.
     */
    get asV100(): ParasParachainsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
 * 
 *  Consider using the [`ParachainsCache`] type of modifying.
 */
export interface ParasParachainsStorageV100 {
    get(): Promise<number[]>
}

export class ParasPastCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeHash'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0d2411ae362670c0960f353ffe86371ae2c0b12979565bcbd9e6dd986619632d'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV100(): ParasPastCodeHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasPastCodeHashStorageV100 {
    get(key: [number, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class ParasPastCodeMetaStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeMeta'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for approval checkers.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for approval checkers.
     */
    get asV100(): ParasPastCodeMetaStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for approval checkers.
 */
export interface ParasPastCodeMetaStorageV100 {
    get(key: number): Promise<v100.ParaPastCodeMeta>
    getAll(): Promise<v100.ParaPastCodeMeta[]>
    getMany(keys: number[]): Promise<v100.ParaPastCodeMeta[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ParaPastCodeMeta][]>
    getPairs(key: number): Promise<[k: number, v: v100.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ParaPastCodeMeta][]>
}

export class ParasPastCodePruningStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodePruning'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get asV100(): ParasPastCodePruningStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
 *  Note that this is the actual height of the included block, not the expected height at which the
 *  code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
 *  from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface ParasPastCodePruningStorageV100 {
    get(): Promise<[number, number][]>
}

export class ParasPvfActiveVoteListStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteList'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get asV100(): ParasPvfActiveVoteListStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface ParasPvfActiveVoteListStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class ParasPvfActiveVoteMapStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteMap'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '929cea40d98e7c9edbcba116da5df6e71054833d758ad8f6150d78bb4140a230'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get asV100(): ParasPvfActiveVoteMapStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface ParasPvfActiveVoteMapStorageV100 {
    get(key: Uint8Array): Promise<(v100.PvfCheckActiveVoteState | undefined)>
    getAll(): Promise<v100.PvfCheckActiveVoteState[]>
    getMany(keys: Uint8Array[]): Promise<(v100.PvfCheckActiveVoteState | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.PvfCheckActiveVoteState][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.PvfCheckActiveVoteState][]>
}

export class ParasUpcomingParasGenesisStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingParasGenesis'
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd289d3b26c8320e9e0c7aba2fd8c14649921cc8f60b7a8425448a47acb39146f'
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get asV100(): ParasUpcomingParasGenesisStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Upcoming paras instantiation arguments.
 * 
 *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
 *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
 */
export interface ParasUpcomingParasGenesisStorageV100 {
    get(key: number): Promise<(v100.ParaGenesisArgs | undefined)>
    getAll(): Promise<v100.ParaGenesisArgs[]>
    getMany(keys: number[]): Promise<(v100.ParaGenesisArgs | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ParaGenesisArgs][]>
    getPairs(key: number): Promise<[k: number, v: v100.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ParaGenesisArgs][]>
}

export class ParasUpcomingUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingUpgrades'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get asV100(): ParasUpcomingUpgradesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpcomingUpgradesStorageV100 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeCooldownsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeCooldowns'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get asV100(): ParasUpgradeCooldownsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpgradeCooldownsStorageV100 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeGoAheadSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeGoAheadSignal'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '786a03d0aa558686ca05fde11178abf8294fdf543e7653a81ffbb6a04bbe926d'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV100(): ParasUpgradeGoAheadSignalStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
 * 
 *  This value is absent when there are no upgrades scheduled or during the time the relay chain
 *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
 *  can switch its upgrade function. As soon as the parachain's block is included, the value
 *  gets reset to `None`.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeGoAheadSignalStorageV100 {
    get(key: number): Promise<(v100.V2UpgradeGoAhead | undefined)>
    getAll(): Promise<v100.V2UpgradeGoAhead[]>
    getMany(keys: number[]): Promise<(v100.V2UpgradeGoAhead | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.V2UpgradeGoAhead][]>
    getPairs(key: number): Promise<[k: number, v: v100.V2UpgradeGoAhead][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.V2UpgradeGoAhead][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.V2UpgradeGoAhead][]>
}

export class ParasUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '62e7d5f232f72916126ae45cffcab9e9fdfc355aeb79076a51f4aebd84afeb61'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV100(): ParasUpgradeRestrictionSignalStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate that there are restrictions for performing
 *  an upgrade for this parachain.
 * 
 *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
 *  potential use case is when we want to perform some maintenance (such as storage migration)
 *  we could restrict upgrades to make the process simpler.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeRestrictionSignalStorageV100 {
    get(key: number): Promise<(v100.V2UpgradeRestriction | undefined)>
    getAll(): Promise<v100.V2UpgradeRestriction[]>
    getMany(keys: number[]): Promise<(v100.V2UpgradeRestriction | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.V2UpgradeRestriction][]>
    getPairs(key: number): Promise<[k: number, v: v100.V2UpgradeRestriction][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.V2UpgradeRestriction][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.V2UpgradeRestriction][]>
}

export class ParasDisputesBackersOnDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'BackersOnDisputes'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0927addfecff9f8363e42d134edf2ce1156c2efdf83e698127f2c98bf17267de'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get asV100(): ParasDisputesBackersOnDisputesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface ParasDisputesBackersOnDisputesStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(number[] | undefined)>
    getAll(): Promise<number[][]>
    getMany(keys: [number, Uint8Array][]): Promise<(number[] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
}

export class ParasDisputesDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Disputes'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '33f09b62f3e474c60f6ef89b56ae30d73cc40bae8a2b340cfd6d7548cf01234e'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get asV100(): ParasDisputesDisputesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface ParasDisputesDisputesStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(v100.V2DisputeState | undefined)>
    getAll(): Promise<v100.V2DisputeState[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v100.V2DisputeState | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.V2DisputeState][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.V2DisputeState][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.V2DisputeState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.V2DisputeState][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.V2DisputeState][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.V2DisputeState][]>
}

export class ParasDisputesFrozenStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Frozen'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get asV100(): ParasDisputesFrozenStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface ParasDisputesFrozenStorageV100 {
    get(): Promise<(number | undefined)>
}

export class ParasDisputesIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '6c6235f5b0f971e080667bebe750cb6adb3a9877df221e67b3dc7a4419cdc5c1'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get asV100(): ParasDisputesIncludedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface ParasDisputesIncludedStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ParasDisputesLastPrunedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'LastPrunedSession'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get asV100(): ParasDisputesLastPrunedSessionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface ParasDisputesLastPrunedSessionStorageV100 {
    get(): Promise<(number | undefined)>
}

export class ParasSharedActiveValidatorIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorIndices'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get asV100(): ParasSharedActiveValidatorIndicesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ParasSharedActiveValidatorIndicesStorageV100 {
    get(): Promise<number[]>
}

export class ParasSharedActiveValidatorKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorKeys'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    get asV100(): ParasSharedActiveValidatorKeysStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ParasSharedActiveValidatorKeysStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class ParasSharedCurrentSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'CurrentSessionIndex'
    }

    /**
     *  The current session index.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current session index.
     */
    get asV100(): ParasSharedCurrentSessionIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current session index.
 */
export interface ParasSharedCurrentSessionIndexStorageV100 {
    get(): Promise<number>
}

export class ParasSlashingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasSlashing'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  Validators pending dispute slashes.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '74c2dadfcd08c5fc0cd7baaf8297441d73fb8e8fb487d1da56cc9fd4b6202edc'
    }

    /**
     *  Validators pending dispute slashes.
     */
    get asV100(): ParasSlashingUnappliedSlashesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Validators pending dispute slashes.
 */
export interface ParasSlashingUnappliedSlashesStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(v100.PendingSlashes | undefined)>
    getAll(): Promise<v100.PendingSlashes[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v100.PendingSlashes | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.PendingSlashes][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.PendingSlashes][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.PendingSlashes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.PendingSlashes][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.PendingSlashes][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.PendingSlashes][]>
}

export class ParasSlashingValidatorSetCountsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasSlashing'
    }

    protected getName() {
        return 'ValidatorSetCounts'
    }

    /**
     *  `ValidatorSetCount` per session.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  `ValidatorSetCount` per session.
     */
    get asV100(): ParasSlashingValidatorSetCountsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  `ValidatorSetCount` per session.
 */
export interface ParasSlashingValidatorSetCountsStorageV100 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asMatrixEnjinV603(): PolkadotXcmAssetTrapsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asMatrixEnjinV603(): PolkadotXcmCurrentMigrationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.VersionMigrationStage | undefined)>
}

export class PolkadotXcmLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asMatrixEnjinV603(): PolkadotXcmLockedFungiblesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, matrixEnjinV603.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asMatrixEnjinV603(): PolkadotXcmQueriesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(matrixEnjinV603.QueryStatus | undefined)>
    getAll(): Promise<matrixEnjinV603.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV603.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asMatrixEnjinV603(): PolkadotXcmQueryCounterStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class PolkadotXcmRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asMatrixEnjinV603(): PolkadotXcmRemoteLockedFungiblesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageMatrixEnjinV603 {
    get(key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): Promise<(matrixEnjinV603.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<matrixEnjinV603.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, matrixEnjinV603.VersionedAssetId][]): Promise<(matrixEnjinV603.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asMatrixEnjinV603(): PolkadotXcmSafeXcmVersionStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asMatrixEnjinV603(): PolkadotXcmSupportedVersionStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageMatrixEnjinV603 {
    get(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asMatrixEnjinV603(): PolkadotXcmVersionDiscoveryQueueStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageMatrixEnjinV603 {
    get(): Promise<[matrixEnjinV603.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asMatrixEnjinV603(): PolkadotXcmVersionNotifiersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageMatrixEnjinV603 {
    get(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asMatrixEnjinV603(): PolkadotXcmVersionNotifyTargetsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageMatrixEnjinV603 {
    get(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<([bigint, matrixEnjinV603.Weight, number] | undefined)>
    getAll(): Promise<[bigint, matrixEnjinV603.Weight, number][]>
    getMany(keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<([bigint, matrixEnjinV603.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairs(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
}

export class PolkadotXcmXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asMatrixEnjinV603(): PolkadotXcmXcmExecutionSuspendedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface PolkadotXcmXcmExecutionSuspendedStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class PoolsPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Pools'
    }

    protected getName() {
        return 'Pools'
    }

    /**
     *  Information about the pools
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
    }

    /**
     *  Information about the pools
     */
    get asMatrixEnjinV603(): PoolsPoolsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Information about the pools
 */
export interface PoolsPoolsStorageMatrixEnjinV603 {
    get(): Promise<[Uint8Array, matrixEnjinV603.Pool][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asMatrixEnjinV603(): PreimagePreimageForStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface PreimagePreimageForStorageMatrixEnjinV603 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asMatrixEnjinV603(): PreimageStatusForStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.RequestStatus | undefined)>
    getAll(): Promise<matrixEnjinV603.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV100(): RandomnessCollectiveFlipRandomMaterialStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class ReferendaDecidingCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'DecidingCount'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get asV100(): ReferendaDecidingCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of referenda being decided currently.
 */
export interface ReferendaDecidingCountStorageV100 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ReferendaMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV104(): ReferendaMetadataOfStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface ReferendaMetadataOfStorageV104 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ReferendaReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV100(): ReferendaReferendumCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendaReferendumCountStorageV100 {
    get(): Promise<number>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b783aed1e1683215adf5471eb8f843e885439da42c25e264de9ec7fc7c58dfb4'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV100(): ReferendaReferendumInfoForStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '3b8ef604b9fae5b40310b9d37150b42f2b59f78cf4656ac03931413adc871d33'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV105(): ReferendaReferendumInfoForStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV100 {
    get(key: number): Promise<(v100.ReferendumInfo | undefined)>
    getAll(): Promise<v100.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v100.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v100.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV105 {
    get(key: number): Promise<(v105.ReferendumInfo | undefined)>
    getAll(): Promise<v105.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v105.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v105.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v105.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v105.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v105.ReferendumInfo][]>
}

export class ReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd59fac77bd4348bf0179a7e6c5ac239a8b8781c07a1524886ec03b3194de72e3'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV100(): ReferendaTrackQueueStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface ReferendaTrackQueueStorageV100 {
    get(key: number): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: number[]): Promise<[number, bigint][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
}

export class RegistrarNextFreeParaIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'NextFreeParaId'
    }

    /**
     *  The next free `ParaId`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free `ParaId`.
     */
    get asV100(): RegistrarNextFreeParaIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The next free `ParaId`.
 */
export interface RegistrarNextFreeParaIdStorageV100 {
    get(): Promise<number>
}

export class RegistrarParasStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Paras'
    }

    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may only do
     *  so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a66817b4476764416e1f466dedf67727ff0df383806cc68dc6be044679888b0c'
    }

    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may only do
     *  so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    get asV100(): RegistrarParasStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may only do
 *  so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface RegistrarParasStorageV100 {
    get(key: number): Promise<(v100.ParaInfo | undefined)>
    getAll(): Promise<v100.ParaInfo[]>
    getMany(keys: number[]): Promise<(v100.ParaInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.ParaInfo][]>
    getPairs(key: number): Promise<[k: number, v: v100.ParaInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.ParaInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.ParaInfo][]>
}

export class RegistrarPendingSwapStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'PendingSwap'
    }

    /**
     *  Pending swap operations.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  Pending swap operations.
     */
    get asV100(): RegistrarPendingSwapStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Pending swap operations.
 */
export interface RegistrarPendingSwapStorageV100 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '6fe031a319b530f979b7d99af729c9762ca4fc70785d6631d8088992a71ae701'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asMatrixEnjinV603(): SchedulerAgendaStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'afebe469f29b45da48c0ee03a1883e5d9f9bf4da9c68afdac407ac2f9b107345'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV100(): SchedulerAgendaStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '5a72c02d13c56c799ee111f25eda3338079ea18e3f7d92530e028356cd2e03ef'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV105(): SchedulerAgendaStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.Scheduled | undefined)[]>
    getAll(): Promise<(matrixEnjinV603.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV100 {
    get(key: number): Promise<(v100.Scheduled | undefined)[]>
    getAll(): Promise<(v100.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v100.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v100.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v100.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV105 {
    get(key: number): Promise<(v105.Scheduled | undefined)[]>
    getAll(): Promise<(v105.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v105.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v105.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v105.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v105.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v105.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asMatrixEnjinV603(): SchedulerIncompleteSinceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asMatrixEnjinV603(): SchedulerLookupStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asMatrixEnjinV603(): SessionCurrentIndexStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asMatrixEnjinV603(): SessionDisabledValidatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageMatrixEnjinV603 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asMatrixEnjinV603(): SessionKeyOwnerStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageMatrixEnjinV603 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
    }

    /**
     *  The next session keys for a validator.
     */
    get asMatrixEnjinV603(): SessionNextKeysStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '3c6fcbefe7410f15bad0495b3f73dc8ed831dd09252a3ac11e3510578bfb8ced'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV100(): SessionNextKeysStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.SessionKeys | undefined)>
    getAll(): Promise<matrixEnjinV603.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV100 {
    get(key: Uint8Array): Promise<(v100.SessionKeys | undefined)>
    getAll(): Promise<v100.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v100.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asMatrixEnjinV603(): SessionQueuedChangedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asMatrixEnjinV603(): SessionQueuedKeysStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1453d2146c195e5be6172441e0d99613270f104e70759afa2ff52f346b3ea040'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV100(): SessionQueuedKeysStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageMatrixEnjinV603 {
    get(): Promise<[Uint8Array, matrixEnjinV603.SessionKeys][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV100 {
    get(): Promise<[Uint8Array, v100.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asMatrixEnjinV603(): SessionValidatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class SlotsLeasesStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Leases'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '045289c99cd38832bbd83d1da1c2329eef49e8a0cf672722d68751b969c19980'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get asV100(): SlotsLeasesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Amounts held on deposit for each (possibly future) leased parachain.
 * 
 *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
 *  of the items in this list whose first value is the account.
 * 
 *  The first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this pallet is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface SlotsLeasesStorageV100 {
    get(key: number): Promise<([Uint8Array, bigint] | undefined)[]>
    getAll(): Promise<([Uint8Array, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
}

export class StakeExchangeLiquidityConfigsStorage extends StorageBase {
    protected getPrefix() {
        return 'StakeExchange'
    }

    protected getName() {
        return 'LiquidityConfigs'
    }

    /**
     *  Mapping of LP accounts to their configuration
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'c2bd40fd258ce3c918b687ea9bd41c7173523d9b7a7b35c7ecc9f6e9129d1a71'
    }

    /**
     *  Mapping of LP accounts to their configuration
     */
    get asV100(): StakeExchangeLiquidityConfigsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Mapping of LP accounts to their configuration
 */
export interface StakeExchangeLiquidityConfigsStorageV100 {
    get(key: Uint8Array): Promise<(v100.LiquidityAccountConfig | undefined)>
    getAll(): Promise<v100.LiquidityAccountConfig[]>
    getMany(keys: Uint8Array[]): Promise<(v100.LiquidityAccountConfig | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.LiquidityAccountConfig][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.LiquidityAccountConfig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.LiquidityAccountConfig][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.LiquidityAccountConfig][]>
}

export class StakeExchangeNextOfferIdStorage extends StorageBase {
    protected getPrefix() {
        return 'StakeExchange'
    }

    protected getName() {
        return 'NextOfferId'
    }

    /**
     *  Value to use for Next offer Id
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Value to use for Next offer Id
     */
    get asV100(): StakeExchangeNextOfferIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Value to use for Next offer Id
 */
export interface StakeExchangeNextOfferIdStorageV100 {
    get(): Promise<bigint>
}

export class StakeExchangeOffersStorage extends StorageBase {
    protected getPrefix() {
        return 'StakeExchange'
    }

    protected getName() {
        return 'Offers'
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get isV100(): boolean {
        return this.getTypeHash() === '379249dd15716497ecbcc6f05a3c8d3302523ab5a79fd581b130ff37b1a1311d'
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get asV100(): StakeExchangeOffersStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get isV101(): boolean {
        return this.getTypeHash() === '65aacf0872b20f70e15fdb2a0139337410f52325de06181bcc9fc404619973a8'
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get asV101(): StakeExchangeOffersStorageV101 {
        assert(this.isV101)
        return this as any
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'ce6e4be7cef6c3f33257948f0c9b55aea941b5f7a2169e8cca6eb1407ff564e9'
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get asV120(): StakeExchangeOffersStorageV120 {
        assert(this.isV120)
        return this as any
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get isV1021(): boolean {
        return this.getTypeHash() === 'c8861268a4f9c6abafe83a2e0aa6328e4d151724e3d3e613f3d5b3545a1a74c7'
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get asV1021(): StakeExchangeOffersStorageV1021 {
        assert(this.isV1021)
        return this as any
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get isV1023(): boolean {
        return this.getTypeHash() === 'f3e0d06080cd8d38289fde6a95317139e5cbef6cd6b025ce5a50b52570880352'
    }

    /**
     *  Mapping of LPAccountId to their active offer
     */
    get asV1023(): StakeExchangeOffersStorageV1023 {
        assert(this.isV1023)
        return this as any
    }
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface StakeExchangeOffersStorageV100 {
    get(key: bigint): Promise<(v100.Offer | undefined)>
    getAll(): Promise<v100.Offer[]>
    getMany(keys: bigint[]): Promise<(v100.Offer | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v100.Offer][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v100.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v100.Offer][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v100.Offer][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface StakeExchangeOffersStorageV101 {
    get(key: bigint): Promise<(v101.Offer | undefined)>
    getAll(): Promise<v101.Offer[]>
    getMany(keys: bigint[]): Promise<(v101.Offer | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v101.Offer][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v101.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v101.Offer][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v101.Offer][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface StakeExchangeOffersStorageV120 {
    get(key: bigint): Promise<(v120.Offer | undefined)>
    getAll(): Promise<v120.Offer[]>
    getMany(keys: bigint[]): Promise<(v120.Offer | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v120.Offer][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v120.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v120.Offer][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v120.Offer][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface StakeExchangeOffersStorageV1021 {
    get(key: bigint): Promise<(v1021.Offer | undefined)>
    getAll(): Promise<v1021.Offer[]>
    getMany(keys: bigint[]): Promise<(v1021.Offer | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1021.Offer][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1021.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1021.Offer][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1021.Offer][]>
}

/**
 *  Mapping of LPAccountId to their active offer
 */
export interface StakeExchangeOffersStorageV1023 {
    get(key: bigint): Promise<(v1023.Offer | undefined)>
    getAll(): Promise<v1023.Offer[]>
    getMany(keys: bigint[]): Promise<(v1023.Offer | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1023.Offer][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1023.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1023.Offer][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1023.Offer][]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get asV100(): StakingActiveEraStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface StakingActiveEraStorageV100 {
    get(): Promise<(v100.ActiveEraInfo | undefined)>
}

export class StakingBondedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Bonded'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV100(): StakingBondedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingBondedStorageV100 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class StakingBondedErasStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'BondedEras'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get asV100(): StakingBondedErasStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface StakingBondedErasStorageV100 {
    get(): Promise<[number, number][]>
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CanceledSlashPayout'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV100(): StakingCanceledSlashPayoutStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV100 {
    get(): Promise<bigint>
}

export class StakingChillThresholdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ChillThreshold'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get asV100(): StakingChillThresholdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV100 {
    get(): Promise<(number | undefined)>
}

export class StakingCounterForNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForNominators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): StakingCounterForNominatorsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForNominatorsStorageV100 {
    get(): Promise<number>
}

export class StakingCounterForValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForValidators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): StakingCounterForValidatorsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForValidatorsStorageV100 {
    get(): Promise<number>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get asV100(): StakingCurrentEraStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV100 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentPlannedSession'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get asV100(): StakingCurrentPlannedSessionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV100 {
    get(): Promise<number>
}

export class StakingErasRewardPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasRewardPoints'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV100(): StakingErasRewardPointsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV100 {
    get(key: number): Promise<v100.EraRewardPoints>
    getAll(): Promise<v100.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v100.EraRewardPoints[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.EraRewardPoints][]>
    getPairs(key: number): Promise<[k: number, v: v100.EraRewardPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.EraRewardPoints][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.EraRewardPoints][]>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV100(): StakingErasStakersStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<v100.Exposure>
    getAll(): Promise<v100.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v100.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.Exposure][]>
}

export class StakingErasStakersClippedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersClipped'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV100(): StakingErasStakersClippedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersClippedStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<v100.Exposure>
    getAll(): Promise<v100.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v100.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.Exposure][]>
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStartSessionIndex'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get asV100(): StakingErasStartSessionIndexStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface StakingErasStartSessionIndexStorageV100 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class StakingErasTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasTotalStake'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV100(): StakingErasTotalStakeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV100 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorPrefs'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV100(): StakingErasValidatorPrefsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<v100.ValidatorPrefs>
    getAll(): Promise<v100.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v100.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v100.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v100.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v100.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v100.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v100.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v100.ValidatorPrefs][]>
}

export class StakingErasValidatorRewardStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorReward'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV100(): StakingErasValidatorRewardStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV100 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  Mode of era forcing.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV100(): StakingForceEraStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface StakingForceEraStorageV100 {
    get(): Promise<v100.Forcing>
}

export class StakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV100(): StakingInvulnerablesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class StakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV100(): StakingLedgerStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV100 {
    get(key: Uint8Array): Promise<(v100.StakingLedger | undefined)>
    getAll(): Promise<v100.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v100.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.StakingLedger][]>
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxNominatorsCount'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV100(): StakingMaxNominatorsCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV100 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxValidatorsCount'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV100(): StakingMaxValidatorsCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV100 {
    get(): Promise<(number | undefined)>
}

export class StakingMinCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinCommission'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV100(): StakingMinCommissionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV100 {
    get(): Promise<number>
}

export class StakingMinNominatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinNominatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV100(): StakingMinNominatorBondStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV100 {
    get(): Promise<bigint>
}

export class StakingMinValidatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinValidatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV100(): StakingMinValidatorBondStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV100 {
    get(): Promise<bigint>
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumActiveStake'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV100(): StakingMinimumActiveStakeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV100 {
    get(): Promise<bigint>
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumValidatorCount'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV100(): StakingMinimumValidatorCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV100 {
    get(): Promise<number>
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NominatorSlashInEra'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV100(): StakingNominatorSlashInEraStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
}

export class StakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
    }

    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV100(): StakingNominatorsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The map from nominator stash key to their nomination preferences, namely the validators that
 *  they wish to support.
 * 
 *  Note that the keys of this storage map might become non-decodable in case the
 *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
 *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
 *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
 *  nominators will effectively not-exist, until they re-submit their preferences such that it
 *  is within the bounds of the newly set `Config::MaxNominations`.
 * 
 *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
 *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
 *  number of keys that exist.
 * 
 *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
 *  [`Call::chill_other`] dispatchable by anyone.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingNominatorsStorageV100 {
    get(key: Uint8Array): Promise<(v100.Nominations | undefined)>
    getAll(): Promise<v100.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v100.Nominations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.Nominations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.Nominations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.Nominations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.Nominations][]>
}

export class StakingOffendingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'OffendingValidators'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get asV100(): StakingOffendingValidatorsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface StakingOffendingValidatorsStorageV100 {
    get(): Promise<[number, boolean][]>
}

export class StakingPayeeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Payee'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV100(): StakingPayeeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingPayeeStorageV100 {
    get(key: Uint8Array): Promise<v100.RewardDestination>
    getAll(): Promise<v100.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v100.RewardDestination[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.RewardDestination][]>
}

export class StakingSlashRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashRewardFraction'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV100(): StakingSlashRewardFractionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV100 {
    get(): Promise<number>
}

export class StakingSlashingSpansStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashingSpans'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV100(): StakingSlashingSpansStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV100 {
    get(key: Uint8Array): Promise<(v100.SlashingSpans | undefined)>
    getAll(): Promise<v100.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v100.SlashingSpans | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.SlashingSpans][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.SlashingSpans][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.SlashingSpans][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.SlashingSpans][]>
}

export class StakingSpanSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SpanSlash'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV100(): StakingSpanSlashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV100 {
    get(key: [Uint8Array, number]): Promise<v100.SpanRecord>
    getAll(): Promise<v100.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v100.SpanRecord[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v100.SpanRecord][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: v100.SpanRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v100.SpanRecord][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: v100.SpanRecord][]>
}

export class StakingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV100(): StakingUnappliedSlashesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV100 {
    get(key: number): Promise<v100.UnappliedSlash[]>
    getAll(): Promise<v100.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v100.UnappliedSlash[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.UnappliedSlash[]][]>
    getPairs(key: number): Promise<[k: number, v: v100.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.UnappliedSlash[]][]>
}

export class StakingValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorCount'
    }

    /**
     *  The ideal number of active validators.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of active validators.
     */
    get asV100(): StakingValidatorCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The ideal number of active validators.
 */
export interface StakingValidatorCountStorageV100 {
    get(): Promise<number>
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorSlashInEra'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV100(): StakingValidatorSlashInEraStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV100 {
    get(key1: number, key2: Uint8Array): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
}

export class StakingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV100(): StakingValidatorsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingValidatorsStorageV100 {
    get(key: Uint8Array): Promise<v100.ValidatorPrefs>
    getAll(): Promise<v100.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v100.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.ValidatorPrefs][]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV100(): SudoKeyStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV100 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asMatrixEnjinV603(): SystemAccountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV100(): SystemAccountStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV104(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV104(): SystemAccountStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.AccountInfo>
    getAll(): Promise<matrixEnjinV603.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV100 {
    get(key: Uint8Array): Promise<v100.AccountInfo>
    getAll(): Promise<v100.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v100.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV104 {
    get(key: Uint8Array): Promise<v104.AccountInfo>
    getAll(): Promise<v104.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v104.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v104.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v104.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v104.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v104.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asMatrixEnjinV603(): SystemAllExtrinsicsLenStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asMatrixEnjinV603(): SystemBlockHashStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageMatrixEnjinV603 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asMatrixEnjinV603(): SystemBlockWeightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asMatrixEnjinV603(): SystemDigestStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asMatrixEnjinV603(): SystemEventCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
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
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
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
    get asMatrixEnjinV603(): SystemEventTopicsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
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
export interface SystemEventTopicsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
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
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a57dd21e7aeaa4b8e9f0e55f1f48c7e44e142ba9a66bb9c49a3cdf88a9cc9c46'
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
    get asMatrixEnjinV603(): SystemEventsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
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
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'ccb08bdde54ca78439622595397d717ed012b142e923d7ceaede19fb7fe0b412'
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
    get asMatrixEnjinV1000(): SystemEventsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
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
    get isV100(): boolean {
        return this.getTypeHash() === '77737ebab30ad029672f403c1ddad8c3cb7d9725b16783ec05482679db4a3628'
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
    get asV100(): SystemEventsStorageV100 {
        assert(this.isV100)
        return this as any
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
    get isV101(): boolean {
        return this.getTypeHash() === '5d3c9e0ba4b21805bc764d1e83ac410bbfa4e7d4e553201b3691e78944893ace'
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
    get asV101(): SystemEventsStorageV101 {
        assert(this.isV101)
        return this as any
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
    get isV102(): boolean {
        return this.getTypeHash() === '9e54d5efbde1c2c3d2563d0f2525f08f7bdc78242886739bf7af9014290e0b7c'
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
    get asV102(): SystemEventsStorageV102 {
        assert(this.isV102)
        return this as any
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
    get isV103(): boolean {
        return this.getTypeHash() === 'e966007583ef185391ae5e22bb92f7885d892b568aaba7e1e80f22473122f5c3'
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
    get asV103(): SystemEventsStorageV103 {
        assert(this.isV103)
        return this as any
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
    get isV104(): boolean {
        return this.getTypeHash() === 'ba5f2bc742b71eaeb32e7f506d4223f2a3be3c163c92f56ab78d8c271ad066f7'
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
    get asV104(): SystemEventsStorageV104 {
        assert(this.isV104)
        return this as any
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
    get isV105(): boolean {
        return this.getTypeHash() === 'ea6f03153c925c022fc015ebe1d1e2e9c878e76d44f23632dc42bee508ec29ce'
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
    get asV105(): SystemEventsStorageV105 {
        assert(this.isV105)
        return this as any
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
    get isV106(): boolean {
        return this.getTypeHash() === '40942eabfb0678df8f5cca4fed6033cd859d6c6736d193f38c624f7937101b77'
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
    get asV106(): SystemEventsStorageV106 {
        assert(this.isV106)
        return this as any
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
    get isV110(): boolean {
        return this.getTypeHash() === 'c8160b400bff66c2448affd0e5428d5f17809b4d7b022c9d2cd78693f4c65e29'
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
    get asV110(): SystemEventsStorageV110 {
        assert(this.isV110)
        return this as any
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
    get isV120(): boolean {
        return this.getTypeHash() === '11497f2ed499a749dea9bcb86942f92c96dc1e3c129c8cca77c973c30f1111e1'
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
    get asV120(): SystemEventsStorageV120 {
        assert(this.isV120)
        return this as any
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
    get isV1021(): boolean {
        return this.getTypeHash() === '523a63a18e64307cc00d7c853263bafeb21a232cc155eb0a85f2d132b0654d8f'
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
    get asV1021(): SystemEventsStorageV1021 {
        assert(this.isV1021)
        return this as any
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
    get isV1022(): boolean {
        return this.getTypeHash() === '3895d55a42c2dc5fd7eceefd72882caa9b64c9dded0d263959414fe1d0ff74e9'
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
    get asV1022(): SystemEventsStorageV1022 {
        assert(this.isV1022)
        return this as any
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
    get isV1023(): boolean {
        return this.getTypeHash() === '51e3683747ac67f46baf33a7f194dfe00dc1448eead9906d9ce5ac8ffbb14489'
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
    get asV1023(): SystemEventsStorageV1023 {
        assert(this.isV1023)
        return this as any
    }
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
export interface SystemEventsStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.EventRecord[]>
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
export interface SystemEventsStorageMatrixEnjinV1000 {
    get(): Promise<matrixEnjinV1000.EventRecord[]>
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
export interface SystemEventsStorageV100 {
    get(): Promise<v100.EventRecord[]>
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
export interface SystemEventsStorageV101 {
    get(): Promise<v101.EventRecord[]>
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
export interface SystemEventsStorageV102 {
    get(): Promise<v102.EventRecord[]>
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
export interface SystemEventsStorageV103 {
    get(): Promise<v103.EventRecord[]>
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
export interface SystemEventsStorageV104 {
    get(): Promise<v104.EventRecord[]>
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
export interface SystemEventsStorageV105 {
    get(): Promise<v105.EventRecord[]>
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
export interface SystemEventsStorageV106 {
    get(): Promise<v106.EventRecord[]>
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
export interface SystemEventsStorageV110 {
    get(): Promise<v110.EventRecord[]>
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
export interface SystemEventsStorageV120 {
    get(): Promise<v120.EventRecord[]>
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
export interface SystemEventsStorageV1021 {
    get(): Promise<v1021.EventRecord[]>
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
export interface SystemEventsStorageV1022 {
    get(): Promise<v1022.EventRecord[]>
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
export interface SystemEventsStorageV1023 {
    get(): Promise<v1023.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asMatrixEnjinV603(): SystemExecutionPhaseStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asMatrixEnjinV603(): SystemExtrinsicCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asMatrixEnjinV603(): SystemExtrinsicDataStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageMatrixEnjinV603 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asMatrixEnjinV603(): SystemLastRuntimeUpgradeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asMatrixEnjinV603(): SystemNumberStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asMatrixEnjinV603(): SystemParentHashStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asMatrixEnjinV603(): SystemUpgradedToTripleRefCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asMatrixEnjinV603(): SystemUpgradedToU32RefCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asMatrixEnjinV603(): TechnicalCommitteeMembersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asMatrixEnjinV603(): TechnicalCommitteePrimeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeProposalCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeProposalOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '8c127c77fbad28fe03cea74e3dc13593f4abc6334ac06ebee57fced2ba801c79'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1000(): TechnicalCommitteeProposalOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1003(): boolean {
        return this.getTypeHash() === '7e38c81de9998b7ee5c1f6e2e1600141fe0b26a1eaa70c1e65ce1f8a2af3a057'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1003(): TechnicalCommitteeProposalOfStorageMatrixEnjinV1003 {
        assert(this.isMatrixEnjinV1003)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Call | undefined)>
    getAll(): Promise<matrixEnjinV603.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.Call | undefined)>
    getAll(): Promise<matrixEnjinV1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV1003 {
    get(key: Uint8Array): Promise<(matrixEnjinV1003.Call | undefined)>
    getAll(): Promise<matrixEnjinV1003.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1003.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeProposalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeVotingStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Votes | undefined)>
    getAll(): Promise<matrixEnjinV603.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asMatrixEnjinV603(): TechnicalMembershipMembersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asMatrixEnjinV603(): TechnicalMembershipPrimeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asMatrixEnjinV603(): TimestampDidUpdateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asMatrixEnjinV603(): TimestampNowStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asMatrixEnjinV603(): TransactionPaymentNextFeeMultiplierStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asMatrixEnjinV603(): TransactionPaymentStorageVersionStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Releases>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV100(): TreasuryApprovalsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV100 {
    get(): Promise<number[]>
}

export class TreasuryDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV100(): TreasuryDeactivatedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryDeactivatedStorageV100 {
    get(): Promise<bigint>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV100(): TreasuryProposalCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV100 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV100(): TreasuryProposalsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV100 {
    get(key: number): Promise<(v100.Proposal | undefined)>
    getAll(): Promise<v100.Proposal[]>
    getMany(keys: number[]): Promise<(v100.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.Proposal][]>
}

export class UmpCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): UmpCounterForOverweightStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface UmpCounterForOverweightStorageV100 {
    get(): Promise<number>
}

export class UmpNeedsDispatchStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'NeedsDispatch'
    }

    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    get asV100(): UmpNeedsDispatchStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface UmpNeedsDispatchStorageV100 {
    get(): Promise<number[]>
}

export class UmpNextDispatchRoundStartWithStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'NextDispatchRoundStartWith'
    }

    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    get asV100(): UmpNextDispatchRoundStartWithStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface UmpNextDispatchRoundStartWithStorageV100 {
    get(): Promise<(number | undefined)>
}

export class UmpOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    get asV100(): UmpOverweightStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These messages stay there until manually dispatched.
 */
export interface UmpOverweightStorageV100 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class UmpOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    get asV100(): UmpOverweightCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
 *  index).
 */
export interface UmpOverweightCountStorageV100 {
    get(): Promise<bigint>
}

export class UmpRelayDispatchQueueSizeStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'RelayDispatchQueueSize'
    }

    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
    }

    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    get asV100(): UmpRelayDispatchQueueSizeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
 * 
 *  First item in the tuple is the count of messages and second
 *  is the total length (in bytes) of the message payloads.
 * 
 *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
 *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
 *  loading the whole message queue if only the total size and count are required.
 * 
 *  Invariant:
 *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
 */
export interface UmpRelayDispatchQueueSizeStorageV100 {
    get(key: number): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<[number, number][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number]][]>
}

export class UmpRelayDispatchQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'RelayDispatchQueues'
    }

    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    get asV100(): UmpRelayDispatchQueuesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface UmpRelayDispatchQueuesStorageV100 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ValidatorManagerValidatorsToAddStorage extends StorageBase {
    protected getPrefix() {
        return 'ValidatorManager'
    }

    protected getName() {
        return 'ValidatorsToAdd'
    }

    /**
     *  Validators that should be added.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Validators that should be added.
     */
    get asV100(): ValidatorManagerValidatorsToAddStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Validators that should be added.
 */
export interface ValidatorManagerValidatorsToAddStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class ValidatorManagerValidatorsToRetireStorage extends StorageBase {
    protected getPrefix() {
        return 'ValidatorManager'
    }

    protected getName() {
        return 'ValidatorsToRetire'
    }

    /**
     *  Validators that should be retired, because their Parachain was deregistered.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Validators that should be retired, because their Parachain was deregistered.
     */
    get asV100(): ValidatorManagerValidatorsToRetireStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Validators that should be retired, because their Parachain was deregistered.
 */
export interface ValidatorManagerValidatorsToRetireStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class VoteManagerVoteCurrenciesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoteManager'
    }

    protected getName() {
        return 'VoteCurrencies'
    }

    /**
     *  The currency used by `AccountId` to vote in Poll with
     *  `PollIndex`
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '86735904f7d031bd905dcd510b1729300cb9799816c839548cb6f8972363b867'
    }

    /**
     *  The currency used by `AccountId` to vote in Poll with
     *  `PollIndex`
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV120(): VoteManagerVoteCurrenciesStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The currency used by `AccountId` to vote in Poll with
 *  `PollIndex`
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface VoteManagerVoteCurrenciesStorageV120 {
    get(key1: Uint8Array, key2: number): Promise<(v120.VoteCurrency | undefined)>
    getAll(): Promise<v120.VoteCurrency[]>
    getMany(keys: [Uint8Array, number][]): Promise<(v120.VoteCurrency | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v120.VoteCurrency][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v120.VoteCurrency][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v120.VoteCurrency][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v120.VoteCurrency][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v120.VoteCurrency][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v120.VoteCurrency][]>
}

export class VoteManagerVotesToUnlockStorage extends StorageBase {
    protected getPrefix() {
        return 'VoteManager'
    }

    protected getName() {
        return 'VotesToUnlock'
    }

    /**
     *  The currency used by `AccountId` to vote in referendum with
     *  `ReferendumIndex`
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'ad7950476ddce7a7c94d1ff8840a8c26eacf2eda5ffc5e7bea93f3022e218c8e'
    }

    /**
     *  The currency used by `AccountId` to vote in referendum with
     *  `ReferendumIndex`
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV120(): VoteManagerVotesToUnlockStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The currency used by `AccountId` to vote in referendum with
 *  `ReferendumIndex`
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface VoteManagerVotesToUnlockStorageV120 {
    get(key1: Uint8Array, key2: number): Promise<(v120.BalanceToUnlock | undefined)>
    getAll(): Promise<v120.BalanceToUnlock[]>
    getMany(keys: [Uint8Array, number][]): Promise<(v120.BalanceToUnlock | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v120.BalanceToUnlock][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v120.BalanceToUnlock][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v120.BalanceToUnlock][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v120.BalanceToUnlock][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v120.BalanceToUnlock][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v120.BalanceToUnlock][]>
}

export class VoterListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV100(): VoterListCounterForListNodesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface VoterListCounterForListNodesStorageV100 {
    get(): Promise<number>
}

export class VoterListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV100(): VoterListListBagsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface VoterListListBagsStorageV100 {
    get(key: bigint): Promise<(v100.Bag | undefined)>
    getAll(): Promise<v100.Bag[]>
    getMany(keys: bigint[]): Promise<(v100.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v100.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v100.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v100.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v100.Bag][]>
}

export class VoterListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV100(): VoterListListNodesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface VoterListListNodesStorageV100 {
    get(key: Uint8Array): Promise<(v100.Node | undefined)>
    getAll(): Promise<v100.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v100.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.Node][]>
}

export class WhitelistWhitelistedCallStorage extends StorageBase {
    protected getPrefix() {
        return 'Whitelist'
    }

    protected getName() {
        return 'WhitelistedCall'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    get asV100(): WhitelistWhitelistedCallStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface WhitelistWhitelistedCallStorageV100 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class XcmPalletAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV100(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV100(): XcmPalletAssetTrapsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface XcmPalletAssetTrapsStorageV100 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class XcmPalletCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV100(): XcmPalletCurrentMigrationStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface XcmPalletCurrentMigrationStorageV100 {
    get(): Promise<(v100.VersionMigrationStage | undefined)>
}

export class XcmPalletLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV100(): XcmPalletLockedFungiblesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface XcmPalletLockedFungiblesStorageV100 {
    get(key: Uint8Array): Promise<([bigint, v100.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v100.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v100.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v100.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v100.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v100.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v100.VersionedMultiLocation][]][]>
}

export class XcmPalletQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV100(): XcmPalletQueriesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV100 {
    get(key: bigint): Promise<(v100.QueryStatus | undefined)>
    getAll(): Promise<v100.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v100.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v100.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v100.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v100.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v100.QueryStatus][]>
}

export class XcmPalletQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV100(): XcmPalletQueryCounterStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface XcmPalletQueryCounterStorageV100 {
    get(): Promise<bigint>
}

export class XcmPalletRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV100(): XcmPalletRemoteLockedFungiblesStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV105(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV105(): XcmPalletRemoteLockedFungiblesStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV100 {
    get(key1: number, key2: Uint8Array, key3: v100.VersionedAssetId): Promise<(v100.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v100.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v100.VersionedAssetId][]): Promise<(v100.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v100.VersionedAssetId): Promise<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v100.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v100.VersionedAssetId): AsyncIterable<[number, Uint8Array, v100.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v100.VersionedAssetId): Promise<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v100.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v100.VersionedAssetId], v: v100.RemoteLockedFungibleRecord][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV105 {
    get(key1: number, key2: Uint8Array, key3: v105.VersionedAssetId): Promise<(v105.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v105.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v105.VersionedAssetId][]): Promise<(v105.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v105.VersionedAssetId): Promise<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v105.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v105.VersionedAssetId): AsyncIterable<[number, Uint8Array, v105.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v105.VersionedAssetId): Promise<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v105.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v105.VersionedAssetId], v: v105.RemoteLockedFungibleRecord][]>
}

export class XcmPalletSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV100(): XcmPalletSafeXcmVersionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface XcmPalletSafeXcmVersionStorageV100 {
    get(): Promise<(number | undefined)>
}

export class XcmPalletSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV100(): XcmPalletSupportedVersionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV100 {
    get(key1: number, key2: v100.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v100.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v100.VersionedMultiLocation): Promise<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v100.VersionedMultiLocation): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v100.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v100.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v100.VersionedMultiLocation): Promise<[k: [number, v100.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v100.VersionedMultiLocation): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: number][]>
}

export class XcmPalletVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV100(): XcmPalletVersionDiscoveryQueueStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV100 {
    get(): Promise<[v100.VersionedMultiLocation, number][]>
}

export class XcmPalletVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV100(): XcmPalletVersionNotifiersStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV100 {
    get(key1: number, key2: v100.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v100.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v100.VersionedMultiLocation): Promise<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v100.VersionedMultiLocation): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v100.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v100.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v100.VersionedMultiLocation): Promise<[k: [number, v100.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v100.VersionedMultiLocation): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: bigint][]>
}

export class XcmPalletVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV100(): XcmPalletVersionNotifyTargetsStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV100 {
    get(key1: number, key2: v100.VersionedMultiLocation): Promise<([bigint, v100.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v100.Weight, number][]>
    getMany(keys: [number, v100.VersionedMultiLocation][]): Promise<([bigint, v100.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v100.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v100.VersionedMultiLocation): Promise<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v100.VersionedMultiLocation): AsyncIterable<[number, v100.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number]][]>
    getPairs(key1: number, key2: v100.VersionedMultiLocation): Promise<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v100.VersionedMultiLocation): AsyncIterable<[k: [number, v100.VersionedMultiLocation], v: [bigint, v100.Weight, number]][]>
}

export class XcmPalletXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isV104(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asV104(): XcmPalletXcmExecutionSuspendedStorageV104 {
        assert(this.isV104)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmPalletXcmExecutionSuspendedStorageV104 {
    get(): Promise<boolean>
}

export class XcmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asMatrixEnjinV603(): XcmpQueueCounterForOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asMatrixEnjinV603(): XcmpQueueInboundXcmpMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageMatrixEnjinV603 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asMatrixEnjinV603(): XcmpQueueInboundXcmpStatusStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asMatrixEnjinV603(): XcmpQueueOutboundXcmpMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageMatrixEnjinV603 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asMatrixEnjinV603(): XcmpQueueOutboundXcmpStatusStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asMatrixEnjinV603(): XcmpQueueOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageMatrixEnjinV603 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asMatrixEnjinV603(): XcmpQueueOverweightCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asMatrixEnjinV603(): XcmpQueueQueueConfigStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asMatrixEnjinV603(): XcmpQueueQueueSuspendedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asMatrixEnjinV603(): XcmpQueueSignalMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageMatrixEnjinV603 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
