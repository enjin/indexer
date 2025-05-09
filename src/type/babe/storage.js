'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.skippedEpochs =
    exports.nextEpochConfig =
    exports.epochConfig =
    exports.lateness =
    exports.epochStart =
    exports.authorVrfRandomness =
    exports.initialized =
    exports.underConstruction =
    exports.segmentIndex =
    exports.nextAuthorities =
    exports.nextRandomness =
    exports.pendingEpochConfigChange =
    exports.randomness =
    exports.currentSlot =
    exports.genesisSlot =
    exports.authorities =
    exports.epochIndex =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v104 = require('../v104')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.epochIndex = {
    /**
     *  Current epoch index.
     */
    enjinV100: new support_1.StorageType('Babe.EpochIndex', 'Default', [], support_1.sts.bigint()),
}
exports.authorities = {
    /**
     *  Current epoch authorities.
     */
    enjinV100: new support_1.StorageType(
        'Babe.Authorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bytes(), support_1.sts.bigint()]
            })
        })
    ),
}
exports.genesisSlot = {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    enjinV100: new support_1.StorageType('Babe.GenesisSlot', 'Default', [], enjinV100.Slot),
}
exports.currentSlot = {
    /**
     *  Current slot number.
     */
    enjinV100: new support_1.StorageType('Babe.CurrentSlot', 'Default', [], enjinV100.Slot),
}
exports.randomness = {
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
    enjinV100: new support_1.StorageType('Babe.Randomness', 'Default', [], support_1.sts.bytes()),
}
exports.pendingEpochConfigChange = {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    enjinV100: new support_1.StorageType(
        'Babe.PendingEpochConfigChange',
        'Optional',
        [],
        enjinV100.NextConfigDescriptor
    ),
}
exports.nextRandomness = {
    /**
     *  Next epoch randomness.
     */
    enjinV100: new support_1.StorageType('Babe.NextRandomness', 'Default', [], support_1.sts.bytes()),
}
exports.nextAuthorities = {
    /**
     *  Next epoch authorities.
     */
    enjinV100: new support_1.StorageType(
        'Babe.NextAuthorities',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bytes(), support_1.sts.bigint()]
            })
        })
    ),
}
exports.segmentIndex = {
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
    enjinV100: new support_1.StorageType('Babe.SegmentIndex', 'Default', [], support_1.sts.number()),
}
exports.underConstruction = {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    enjinV100: new support_1.StorageType(
        'Babe.UnderConstruction',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.initialized = {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    enjinV100: new support_1.StorageType(
        'Babe.Initialized',
        'Optional',
        [],
        support_1.sts.option(function () {
            return enjinV100.PreDigest
        })
    ),
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    enjinV1032: new support_1.StorageType(
        'Babe.Initialized',
        'Optional',
        [],
        support_1.sts.option(function () {
            return enjinV1032.PreDigest
        })
    ),
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v100: new support_1.StorageType(
        'Babe.Initialized',
        'Optional',
        [],
        support_1.sts.option(function () {
            return v100.PreDigest
        })
    ),
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v104: new support_1.StorageType(
        'Babe.Initialized',
        'Optional',
        [],
        support_1.sts.option(function () {
            return v104.PreDigest
        })
    ),
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v1030: new support_1.StorageType(
        'Babe.Initialized',
        'Optional',
        [],
        support_1.sts.option(function () {
            return v1030.PreDigest
        })
    ),
}
exports.authorVrfRandomness = {
    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     *
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    enjinV100: new support_1.StorageType(
        'Babe.AuthorVrfRandomness',
        'Default',
        [],
        support_1.sts.option(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.epochStart = {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    enjinV100: new support_1.StorageType(
        'Babe.EpochStart',
        'Default',
        [],
        support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        })
    ),
}
exports.lateness = {
    /**
     *  How late the current block is compared to its parent.
     *
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    enjinV100: new support_1.StorageType('Babe.Lateness', 'Default', [], support_1.sts.number()),
}
exports.epochConfig = {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    enjinV100: new support_1.StorageType('Babe.EpochConfig', 'Optional', [], enjinV100.BabeEpochConfiguration),
}
exports.nextEpochConfig = {
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    enjinV100: new support_1.StorageType('Babe.NextEpochConfig', 'Optional', [], enjinV100.BabeEpochConfiguration),
}
exports.skippedEpochs = {
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
    enjinV100: new support_1.StorageType(
        'Babe.SkippedEpochs',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), support_1.sts.number()]
            })
        })
    ),
}
