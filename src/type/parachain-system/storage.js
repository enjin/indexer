'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.upwardDeliveryFeeFactor =
    exports.upgradeGoAhead =
    exports.aggregatedUnincludedSegment =
    exports.unincludedSegment =
    exports.customValidationHeadData =
    exports.authorizedUpgrade =
    exports.reservedDmpWeightOverride =
    exports.reservedXcmpWeightOverride =
    exports.announcedHrmpMessagesPerCandidate =
    exports.pendingUpwardMessages =
    exports.upwardMessages =
    exports.hrmpOutboundMessages =
    exports.hrmpWatermark =
    exports.processedDownwardMessages =
    exports.lastHrmpMqcHeads =
    exports.lastDmqMqcHead =
    exports.hostConfiguration =
    exports.relevantMessagingState =
    exports.relayStateProof =
    exports.upgradeRestrictionSignal =
    exports.lastRelayChainBlockNumber =
    exports.didSetValidationCode =
    exports.validationData =
    exports.newValidationCode =
    exports.pendingValidationCode =
        void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.pendingValidationCode = {
    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     *
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     *
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.PendingValidationCode',
        'Default',
        [],
        support_1.sts.bytes()
    ),
}
exports.newValidationCode = {
    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     *
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.NewValidationCode',
        'Optional',
        [],
        support_1.sts.bytes()
    ),
}
exports.validationData = {
    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.ValidationData',
        'Optional',
        [],
        matrixEnjinV603.V4PersistedValidationData
    ),
}
exports.didSetValidationCode = {
    /**
     *  Were the validation data set to notify the relay chain?
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.DidSetValidationCode',
        'Default',
        [],
        support_1.sts.boolean()
    ),
}
exports.lastRelayChainBlockNumber = {
    /**
     *  The relay chain block number associated with the last parachain block.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.LastRelayChainBlockNumber',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.upgradeRestrictionSignal = {
    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     *
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.UpgradeRestrictionSignal',
        'Default',
        [],
        support_1.sts.option(function () {
            return matrixEnjinV603.V4UpgradeRestriction
        })
    ),
}
exports.relayStateProof = {
    /**
     *  The state proof for the last relay parent block.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.RelayStateProof',
        'Optional',
        [],
        matrixEnjinV603.StorageProof
    ),
}
exports.relevantMessagingState = {
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixEnjinV603.MessagingStateSnapshot
    ),
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixEnjinV1012.MessagingStateSnapshot
    ),
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV500: new support_1.StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixV500.MessagingStateSnapshot
    ),
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV604: new support_1.StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixV604.MessagingStateSnapshot
    ),
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV1010: new support_1.StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixV1010.MessagingStateSnapshot
    ),
}
exports.hostConfiguration = {
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixEnjinV603.V4AbridgedHostConfiguration
    ),
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixEnjinV1012.V6AbridgedHostConfiguration
    ),
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV500: new support_1.StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixV500.V2AbridgedHostConfiguration
    ),
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV1010: new support_1.StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixV1010.V6AbridgedHostConfiguration
    ),
}
exports.lastDmqMqcHead = {
    /**
     *  The last downward message queue chain head we have observed.
     *
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.LastDmqMqcHead',
        'Default',
        [],
        matrixEnjinV603.MessageQueueChain
    ),
}
exports.lastHrmpMqcHeads = {
    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     *
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.LastHrmpMqcHeads',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [matrixEnjinV603.Id, matrixEnjinV603.MessageQueueChain]
            })
        })
    ),
}
exports.processedDownwardMessages = {
    /**
     *  Number of downward messages processed in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.ProcessedDownwardMessages',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.hrmpWatermark = {
    /**
     *  HRMP watermark that was set in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new support_1.StorageType('ParachainSystem.HrmpWatermark', 'Default', [], support_1.sts.number()),
}
exports.hrmpOutboundMessages = {
    /**
     *  HRMP messages that were sent in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.HrmpOutboundMessages',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV603.OutboundHrmpMessage
        })
    ),
}
exports.upwardMessages = {
    /**
     *  Upward messages that were sent in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.UpwardMessages',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.pendingUpwardMessages = {
    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.PendingUpwardMessages',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.bytes()
        })
    ),
}
exports.announcedHrmpMessagesPerCandidate = {
    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.AnnouncedHrmpMessagesPerCandidate',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.reservedXcmpWeightOverride = {
    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.ReservedXcmpWeightOverride',
        'Optional',
        [],
        matrixEnjinV603.Weight
    ),
}
exports.reservedDmpWeightOverride = {
    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.ReservedDmpWeightOverride',
        'Optional',
        [],
        matrixEnjinV603.Weight
    ),
}
exports.authorizedUpgrade = {
    /**
     *  The next authorized upgrade, if there is one.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.AuthorizedUpgrade',
        'Optional',
        [],
        matrixEnjinV603.CodeUpgradeAuthorization
    ),
    /**
     *  The next authorized upgrade, if there is one.
     */
    matrixV500: new support_1.StorageType('ParachainSystem.AuthorizedUpgrade', 'Optional', [], matrixV500.H256),
    /**
     *  The next authorized upgrade, if there is one.
     */
    matrixV602: new support_1.StorageType(
        'ParachainSystem.AuthorizedUpgrade',
        'Optional',
        [],
        matrixV602.CodeUpgradeAuthorization
    ),
}
exports.customValidationHeadData = {
    /**
     *  A custom head data that should be returned as result of `validate_block`.
     *
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    matrixEnjinV603: new support_1.StorageType(
        'ParachainSystem.CustomValidationHeadData',
        'Optional',
        [],
        support_1.sts.bytes()
    ),
}
exports.unincludedSegment = {
    /**
     *  Latest included block descendants the runtime accepted. In other words, these are
     *  ancestors of the currently executing block which have not been included in the observed
     *  relay-chain state.
     *
     *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
     *  in the pallet.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'ParachainSystem.UnincludedSegment',
        'Default',
        [],
        support_1.sts.array(function () {
            return matrixEnjinV1012.Ancestor
        })
    ),
}
exports.aggregatedUnincludedSegment = {
    /**
     *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
     *  latest HRMP watermark. Used for limiting the acceptance of new blocks with
     *  respect to relay chain constraints.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'ParachainSystem.AggregatedUnincludedSegment',
        'Optional',
        [],
        matrixEnjinV1012.SegmentTracker
    ),
}
exports.upgradeGoAhead = {
    /**
     *  Optional upgrade go-ahead signal from the relay-chain.
     *
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'ParachainSystem.UpgradeGoAhead',
        'Default',
        [],
        support_1.sts.option(function () {
            return matrixEnjinV1012.V6UpgradeGoAhead
        })
    ),
}
exports.upwardDeliveryFeeFactor = {
    /**
     *  The factor to multiply the base delivery fee by for UMP.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'ParachainSystem.UpwardDeliveryFeeFactor',
        'Default',
        [],
        matrixEnjinV1012.FixedU128
    ),
}
