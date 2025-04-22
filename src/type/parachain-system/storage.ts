import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const pendingValidationCode = {
    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     *
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     *
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.PendingValidationCode',
        'Default',
        [],
        sts.bytes()
    ) as PendingValidationCodeMatrixEnjinV603,
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 *
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 *
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface PendingValidationCodeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<Bytes | undefined>
}

export const newValidationCode = {
    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     *
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.NewValidationCode',
        'Optional',
        [],
        sts.bytes()
    ) as NewValidationCodeMatrixEnjinV603,
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 *
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface NewValidationCodeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<Bytes | undefined>
}

export const validationData = {
    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.ValidationData',
        'Optional',
        [],
        matrixEnjinV603.V4PersistedValidationData
    ) as ValidationDataMatrixEnjinV603,
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ValidationDataMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.V4PersistedValidationData | undefined>
}

export const didSetValidationCode = {
    /**
     *  Were the validation data set to notify the relay chain?
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.DidSetValidationCode',
        'Default',
        [],
        sts.boolean()
    ) as DidSetValidationCodeMatrixEnjinV603,
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface DidSetValidationCodeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}

export const lastRelayChainBlockNumber = {
    /**
     *  The relay chain block number associated with the last parachain block.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.LastRelayChainBlockNumber',
        'Default',
        [],
        sts.number()
    ) as LastRelayChainBlockNumberMatrixEnjinV603,
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface LastRelayChainBlockNumberMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const upgradeRestrictionSignal = {
    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     *
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.UpgradeRestrictionSignal',
        'Default',
        [],
        sts.option(() => matrixEnjinV603.V4UpgradeRestriction)
    ) as UpgradeRestrictionSignalMatrixEnjinV603,
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
export interface UpgradeRestrictionSignalMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.V4UpgradeRestriction | undefined
    get(block: Block): Promise<(matrixEnjinV603.V4UpgradeRestriction | undefined) | undefined>
}

export const relayStateProof = {
    /**
     *  The state proof for the last relay parent block.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.RelayStateProof',
        'Optional',
        [],
        matrixEnjinV603.StorageProof
    ) as RelayStateProofMatrixEnjinV603,
}

/**
 *  The state proof for the last relay parent block.
 *
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 *  This data is also absent from the genesis.
 */
export interface RelayStateProofMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.StorageProof | undefined>
}

export const relevantMessagingState = {
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixEnjinV603.MessagingStateSnapshot
    ) as RelevantMessagingStateMatrixEnjinV603,
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV1012: new StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixEnjinV1012.MessagingStateSnapshot
    ) as RelevantMessagingStateMatrixEnjinV1012,
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV500: new StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixV500.MessagingStateSnapshot
    ) as RelevantMessagingStateMatrixV500,
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV604: new StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixV604.MessagingStateSnapshot
    ) as RelevantMessagingStateMatrixV604,
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV1010: new StorageType(
        'ParachainSystem.RelevantMessagingState',
        'Optional',
        [],
        matrixV1010.MessagingStateSnapshot
    ) as RelevantMessagingStateMatrixV1010,
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
export interface RelevantMessagingStateMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.MessagingStateSnapshot | undefined>
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
export interface RelevantMessagingStateMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1012.MessagingStateSnapshot | undefined>
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
export interface RelevantMessagingStateMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.MessagingStateSnapshot | undefined>
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
export interface RelevantMessagingStateMatrixV604 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV604.MessagingStateSnapshot | undefined>
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
export interface RelevantMessagingStateMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV1010.MessagingStateSnapshot | undefined>
}

export const hostConfiguration = {
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixEnjinV603.V4AbridgedHostConfiguration
    ) as HostConfigurationMatrixEnjinV603,
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixEnjinV1012: new StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixEnjinV1012.V6AbridgedHostConfiguration
    ) as HostConfigurationMatrixEnjinV1012,
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV500: new StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixV500.V2AbridgedHostConfiguration
    ) as HostConfigurationMatrixV500,
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     *
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     *
     *  This data is also absent from the genesis.
     */
    matrixV1010: new StorageType(
        'ParachainSystem.HostConfiguration',
        'Optional',
        [],
        matrixV1010.V6AbridgedHostConfiguration
    ) as HostConfigurationMatrixV1010,
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 *
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.V4AbridgedHostConfiguration | undefined>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 *
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1012.V6AbridgedHostConfiguration | undefined>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 *
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.V2AbridgedHostConfiguration | undefined>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 *
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 *
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV1010.V6AbridgedHostConfiguration | undefined>
}

export const lastDmqMqcHead = {
    /**
     *  The last downward message queue chain head we have observed.
     *
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.LastDmqMqcHead',
        'Default',
        [],
        matrixEnjinV603.MessageQueueChain
    ) as LastDmqMqcHeadMatrixEnjinV603,
}

/**
 *  The last downward message queue chain head we have observed.
 *
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface LastDmqMqcHeadMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MessageQueueChain
    get(block: Block): Promise<matrixEnjinV603.MessageQueueChain | undefined>
}

export const lastHrmpMqcHeads = {
    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     *
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.LastHrmpMqcHeads',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [matrixEnjinV603.Id, matrixEnjinV603.MessageQueueChain]))
    ) as LastHrmpMqcHeadsMatrixEnjinV603,
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 *
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface LastHrmpMqcHeadsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV603.Id, matrixEnjinV603.MessageQueueChain][]
    get(block: Block): Promise<[matrixEnjinV603.Id, matrixEnjinV603.MessageQueueChain][] | undefined>
}

export const processedDownwardMessages = {
    /**
     *  Number of downward messages processed in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.ProcessedDownwardMessages',
        'Default',
        [],
        sts.number()
    ) as ProcessedDownwardMessagesMatrixEnjinV603,
}

/**
 *  Number of downward messages processed in a block.
 *
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ProcessedDownwardMessagesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const hrmpWatermark = {
    /**
     *  HRMP watermark that was set in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.HrmpWatermark',
        'Default',
        [],
        sts.number()
    ) as HrmpWatermarkMatrixEnjinV603,
}

/**
 *  HRMP watermark that was set in a block.
 *
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface HrmpWatermarkMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const hrmpOutboundMessages = {
    /**
     *  HRMP messages that were sent in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.HrmpOutboundMessages',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.OutboundHrmpMessage)
    ) as HrmpOutboundMessagesMatrixEnjinV603,
}

/**
 *  HRMP messages that were sent in a block.
 *
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface HrmpOutboundMessagesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.OutboundHrmpMessage[]
    get(block: Block): Promise<matrixEnjinV603.OutboundHrmpMessage[] | undefined>
}

export const upwardMessages = {
    /**
     *  Upward messages that were sent in a block.
     *
     *  This will be cleared in `on_initialize` of each new block.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.UpwardMessages',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as UpwardMessagesMatrixEnjinV603,
}

/**
 *  Upward messages that were sent in a block.
 *
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface UpwardMessagesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const pendingUpwardMessages = {
    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.PendingUpwardMessages',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as PendingUpwardMessagesMatrixEnjinV603,
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface PendingUpwardMessagesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const announcedHrmpMessagesPerCandidate = {
    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.AnnouncedHrmpMessagesPerCandidate',
        'Default',
        [],
        sts.number()
    ) as AnnouncedHrmpMessagesPerCandidateMatrixEnjinV603,
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface AnnouncedHrmpMessagesPerCandidateMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const reservedXcmpWeightOverride = {
    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.ReservedXcmpWeightOverride',
        'Optional',
        [],
        matrixEnjinV603.Weight
    ) as ReservedXcmpWeightOverrideMatrixEnjinV603,
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedXcmpWeightOverrideMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.Weight | undefined>
}

export const reservedDmpWeightOverride = {
    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.ReservedDmpWeightOverride',
        'Optional',
        [],
        matrixEnjinV603.Weight
    ) as ReservedDmpWeightOverrideMatrixEnjinV603,
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedDmpWeightOverrideMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.Weight | undefined>
}

export const authorizedUpgrade = {
    /**
     *  The next authorized upgrade, if there is one.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.AuthorizedUpgrade',
        'Optional',
        [],
        matrixEnjinV603.CodeUpgradeAuthorization
    ) as AuthorizedUpgradeMatrixEnjinV603,
    /**
     *  The next authorized upgrade, if there is one.
     */
    matrixV500: new StorageType(
        'ParachainSystem.AuthorizedUpgrade',
        'Optional',
        [],
        matrixV500.H256
    ) as AuthorizedUpgradeMatrixV500,
    /**
     *  The next authorized upgrade, if there is one.
     */
    matrixV602: new StorageType(
        'ParachainSystem.AuthorizedUpgrade',
        'Optional',
        [],
        matrixV602.CodeUpgradeAuthorization
    ) as AuthorizedUpgradeMatrixV602,
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface AuthorizedUpgradeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.CodeUpgradeAuthorization | undefined>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface AuthorizedUpgradeMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.H256 | undefined>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface AuthorizedUpgradeMatrixV602 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV602.CodeUpgradeAuthorization | undefined>
}

export const customValidationHeadData = {
    /**
     *  A custom head data that should be returned as result of `validate_block`.
     *
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    matrixEnjinV603: new StorageType(
        'ParachainSystem.CustomValidationHeadData',
        'Optional',
        [],
        sts.bytes()
    ) as CustomValidationHeadDataMatrixEnjinV603,
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 *
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface CustomValidationHeadDataMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<Bytes | undefined>
}

export const unincludedSegment = {
    /**
     *  Latest included block descendants the runtime accepted. In other words, these are
     *  ancestors of the currently executing block which have not been included in the observed
     *  relay-chain state.
     *
     *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
     *  in the pallet.
     */
    matrixEnjinV1012: new StorageType(
        'ParachainSystem.UnincludedSegment',
        'Default',
        [],
        sts.array(() => matrixEnjinV1012.Ancestor)
    ) as UnincludedSegmentMatrixEnjinV1012,
}

/**
 *  Latest included block descendants the runtime accepted. In other words, these are
 *  ancestors of the currently executing block which have not been included in the observed
 *  relay-chain state.
 *
 *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
 *  in the pallet.
 */
export interface UnincludedSegmentMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.Ancestor[]
    get(block: Block): Promise<matrixEnjinV1012.Ancestor[] | undefined>
}

export const aggregatedUnincludedSegment = {
    /**
     *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
     *  latest HRMP watermark. Used for limiting the acceptance of new blocks with
     *  respect to relay chain constraints.
     */
    matrixEnjinV1012: new StorageType(
        'ParachainSystem.AggregatedUnincludedSegment',
        'Optional',
        [],
        matrixEnjinV1012.SegmentTracker
    ) as AggregatedUnincludedSegmentMatrixEnjinV1012,
}

/**
 *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
 *  latest HRMP watermark. Used for limiting the acceptance of new blocks with
 *  respect to relay chain constraints.
 */
export interface AggregatedUnincludedSegmentMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1012.SegmentTracker | undefined>
}

export const upgradeGoAhead = {
    /**
     *  Optional upgrade go-ahead signal from the relay-chain.
     *
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    matrixEnjinV1012: new StorageType(
        'ParachainSystem.UpgradeGoAhead',
        'Default',
        [],
        sts.option(() => matrixEnjinV1012.V6UpgradeGoAhead)
    ) as UpgradeGoAheadMatrixEnjinV1012,
}

/**
 *  Optional upgrade go-ahead signal from the relay-chain.
 *
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface UpgradeGoAheadMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.V6UpgradeGoAhead | undefined
    get(block: Block): Promise<(matrixEnjinV1012.V6UpgradeGoAhead | undefined) | undefined>
}

export const upwardDeliveryFeeFactor = {
    /**
     *  The factor to multiply the base delivery fee by for UMP.
     */
    matrixEnjinV1012: new StorageType(
        'ParachainSystem.UpwardDeliveryFeeFactor',
        'Default',
        [],
        matrixEnjinV1012.FixedU128
    ) as UpwardDeliveryFeeFactorMatrixEnjinV1012,
}

/**
 *  The factor to multiply the base delivery fee by for UMP.
 */
export interface UpwardDeliveryFeeFactorMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.FixedU128
    get(block: Block): Promise<matrixEnjinV1012.FixedU128 | undefined>
}
