'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.setOnDemandFeeVariability =
    exports.setOnDemandBaseFee =
    exports.setParasAvailabilityPeriod =
    exports.setMaxAvailabilityTimeouts =
    exports.setCoretimeCores =
    exports.setExecutorParams =
    exports.setAsyncBackingParams =
    exports.setBypassConsistencyCheck =
    exports.setMinimumValidationUpgradeDelay =
    exports.setPvfVotingTtl =
    exports.setPvfCheckingEnabled =
    exports.setUmpMaxIndividualWeight =
    exports.setHrmpMaxMessageNumPerCandidate =
    exports.setHrmpMaxParathreadOutboundChannels =
    exports.setHrmpMaxParachainOutboundChannels =
    exports.setHrmpChannelMaxMessageSize =
    exports.setHrmpMaxParathreadInboundChannels =
    exports.setHrmpMaxParachainInboundChannels =
    exports.setHrmpChannelMaxTotalSize =
    exports.setHrmpChannelMaxCapacity =
    exports.setHrmpRecipientDeposit =
    exports.setHrmpSenderDeposit =
    exports.setHrmpOpenRequestTtl =
    exports.setMaxUpwardMessageNumPerCandidate =
    exports.setMaxUpwardMessageSize =
    exports.setUmpServiceTotalWeight =
    exports.setMaxDownwardMessageSize =
    exports.setMaxUpwardQueueSize =
    exports.setMaxUpwardQueueCount =
    exports.setRelayVrfModuloSamples =
    exports.setNeededApprovals =
    exports.setZerothDelayTrancheWidth =
    exports.setNDelayTranches =
    exports.setNoShowSlots =
    exports.setDisputePostConclusionAcceptancePeriod =
    exports.setDisputePeriod =
    exports.setMaxValidators =
    exports.setMaxValidatorsPerCore =
    exports.setSchedulingLookahead =
    exports.setThreadAvailabilityPeriod =
    exports.setChainAvailabilityPeriod =
    exports.setGroupRotationFrequency =
    exports.setParathreadRetries =
    exports.setParathreadCores =
    exports.setMaxHeadDataSize =
    exports.setMaxPovSize =
    exports.setMaxCodeSize =
    exports.setCodeRetentionPeriod =
    exports.setValidationUpgradeDelay =
    exports.setValidationUpgradeCooldown =
        void 0
exports.setDisputeConclusionByTimeOutPeriod =
    exports.setSchedulerParams =
    exports.setApprovalVotingParams =
    exports.setNodeFeature =
    exports.setMinimumBackingVotes =
    exports.setOnDemandTtl =
    exports.setOnDemandTargetQueueUtilization =
    exports.setOnDemandQueueMaxSize =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v104 = require('../v104')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.setValidationUpgradeCooldown = {
    name: 'Configuration.set_validation_upgrade_cooldown',
    /**
     * Set the validation upgrade cooldown.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_validation_upgrade_cooldown',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setValidationUpgradeDelay = {
    name: 'Configuration.set_validation_upgrade_delay',
    /**
     * Set the validation upgrade delay.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_validation_upgrade_delay',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setCodeRetentionPeriod = {
    name: 'Configuration.set_code_retention_period',
    /**
     * Set the acceptance period for an included candidate.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_code_retention_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxCodeSize = {
    name: 'Configuration.set_max_code_size',
    /**
     * Set the max validation code size for incoming upgrades.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_code_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxPovSize = {
    name: 'Configuration.set_max_pov_size',
    /**
     * Set the max POV block size for incoming upgrades.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_pov_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxHeadDataSize = {
    name: 'Configuration.set_max_head_data_size',
    /**
     * Set the max head data size for paras.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_head_data_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setParathreadCores = {
    name: 'Configuration.set_parathread_cores',
    /**
     * Set the number of parathread execution cores.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_parathread_cores',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setParathreadRetries = {
    name: 'Configuration.set_parathread_retries',
    /**
     * Set the number of retries for a particular parathread.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_parathread_retries',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setGroupRotationFrequency = {
    name: 'Configuration.set_group_rotation_frequency',
    /**
     * Set the parachain validator-group rotation frequency
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_group_rotation_frequency',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setChainAvailabilityPeriod = {
    name: 'Configuration.set_chain_availability_period',
    /**
     * Set the availability period for parachains.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_chain_availability_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setThreadAvailabilityPeriod = {
    name: 'Configuration.set_thread_availability_period',
    /**
     * Set the availability period for parathreads.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_thread_availability_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setSchedulingLookahead = {
    name: 'Configuration.set_scheduling_lookahead',
    /**
     * Set the scheduling lookahead, in expected number of blocks at peak throughput.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_scheduling_lookahead',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxValidatorsPerCore = {
    name: 'Configuration.set_max_validators_per_core',
    /**
     * Set the maximum number of validators to assign to any core.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_validators_per_core',
        support_1.sts.struct({
            new: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.setMaxValidators = {
    name: 'Configuration.set_max_validators',
    /**
     * Set the maximum number of validators to use in parachain consensus.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_validators',
        support_1.sts.struct({
            new: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.setDisputePeriod = {
    name: 'Configuration.set_dispute_period',
    /**
     * Set the dispute period, in number of sessions to keep for disputes.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_dispute_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setDisputePostConclusionAcceptancePeriod = {
    name: 'Configuration.set_dispute_post_conclusion_acceptance_period',
    /**
     * Set the dispute post conclusion acceptance period.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_dispute_post_conclusion_acceptance_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setNoShowSlots = {
    name: 'Configuration.set_no_show_slots',
    /**
     * Set the no show slots, in number of number of consensus slots.
     * Must be at least 1.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_no_show_slots',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setNDelayTranches = {
    name: 'Configuration.set_n_delay_tranches',
    /**
     * Set the total number of delay tranches.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_n_delay_tranches',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setZerothDelayTrancheWidth = {
    name: 'Configuration.set_zeroth_delay_tranche_width',
    /**
     * Set the zeroth delay tranche width.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_zeroth_delay_tranche_width',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setNeededApprovals = {
    name: 'Configuration.set_needed_approvals',
    /**
     * Set the number of validators needed to approve a block.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_needed_approvals',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setRelayVrfModuloSamples = {
    name: 'Configuration.set_relay_vrf_modulo_samples',
    /**
     * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_relay_vrf_modulo_samples',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxUpwardQueueCount = {
    name: 'Configuration.set_max_upward_queue_count',
    /**
     * Sets the maximum items that can present in a upward dispatch queue at once.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_upward_queue_count',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxUpwardQueueSize = {
    name: 'Configuration.set_max_upward_queue_size',
    /**
     * Sets the maximum total size of items that can present in a upward dispatch queue at once.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_upward_queue_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxDownwardMessageSize = {
    name: 'Configuration.set_max_downward_message_size',
    /**
     * Set the critical downward message size.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_downward_message_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setUmpServiceTotalWeight = {
    name: 'Configuration.set_ump_service_total_weight',
    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_ump_service_total_weight',
        support_1.sts.struct({
            new: enjinV100.Weight,
        })
    ),
}
exports.setMaxUpwardMessageSize = {
    name: 'Configuration.set_max_upward_message_size',
    /**
     * Sets the maximum size of an upward message that can be sent by a candidate.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_upward_message_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxUpwardMessageNumPerCandidate = {
    name: 'Configuration.set_max_upward_message_num_per_candidate',
    /**
     * Sets the maximum number of messages that a candidate can contain.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_max_upward_message_num_per_candidate',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpOpenRequestTtl = {
    name: 'Configuration.set_hrmp_open_request_ttl',
    /**
     * Sets the number of sessions after which an HRMP open channel request expires.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_open_request_ttl',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpSenderDeposit = {
    name: 'Configuration.set_hrmp_sender_deposit',
    /**
     * Sets the amount of funds that the sender should provide for opening an HRMP channel.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_sender_deposit',
        support_1.sts.struct({
            new: support_1.sts.bigint(),
        })
    ),
}
exports.setHrmpRecipientDeposit = {
    name: 'Configuration.set_hrmp_recipient_deposit',
    /**
     * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
     * channel.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_recipient_deposit',
        support_1.sts.struct({
            new: support_1.sts.bigint(),
        })
    ),
}
exports.setHrmpChannelMaxCapacity = {
    name: 'Configuration.set_hrmp_channel_max_capacity',
    /**
     * Sets the maximum number of messages allowed in an HRMP channel at once.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_channel_max_capacity',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpChannelMaxTotalSize = {
    name: 'Configuration.set_hrmp_channel_max_total_size',
    /**
     * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_channel_max_total_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpMaxParachainInboundChannels = {
    name: 'Configuration.set_hrmp_max_parachain_inbound_channels',
    /**
     * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_max_parachain_inbound_channels',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpMaxParathreadInboundChannels = {
    name: 'Configuration.set_hrmp_max_parathread_inbound_channels',
    /**
     * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_max_parathread_inbound_channels',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpChannelMaxMessageSize = {
    name: 'Configuration.set_hrmp_channel_max_message_size',
    /**
     * Sets the maximum size of a message that could ever be put into an HRMP channel.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_channel_max_message_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpMaxParachainOutboundChannels = {
    name: 'Configuration.set_hrmp_max_parachain_outbound_channels',
    /**
     * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_max_parachain_outbound_channels',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpMaxParathreadOutboundChannels = {
    name: 'Configuration.set_hrmp_max_parathread_outbound_channels',
    /**
     * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_max_parathread_outbound_channels',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setHrmpMaxMessageNumPerCandidate = {
    name: 'Configuration.set_hrmp_max_message_num_per_candidate',
    /**
     * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_hrmp_max_message_num_per_candidate',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setUmpMaxIndividualWeight = {
    name: 'Configuration.set_ump_max_individual_weight',
    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_ump_max_individual_weight',
        support_1.sts.struct({
            new: enjinV100.Weight,
        })
    ),
}
exports.setPvfCheckingEnabled = {
    name: 'Configuration.set_pvf_checking_enabled',
    /**
     * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_pvf_checking_enabled',
        support_1.sts.struct({
            new: support_1.sts.boolean(),
        })
    ),
}
exports.setPvfVotingTtl = {
    name: 'Configuration.set_pvf_voting_ttl',
    /**
     * Set the number of session changes after which a PVF pre-checking voting is rejected.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_pvf_voting_ttl',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMinimumValidationUpgradeDelay = {
    name: 'Configuration.set_minimum_validation_upgrade_delay',
    /**
     * Sets the minimum delay between announcing the upgrade block for a parachain until the
     * upgrade taking place.
     *
     * See the field documentation for information and constraints for the new value.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_minimum_validation_upgrade_delay',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setBypassConsistencyCheck = {
    name: 'Configuration.set_bypass_consistency_check',
    /**
     * Setting this to true will disable consistency checks for the configuration setters.
     * Use with caution.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_bypass_consistency_check',
        support_1.sts.struct({
            new: support_1.sts.boolean(),
        })
    ),
}
exports.setAsyncBackingParams = {
    name: 'Configuration.set_async_backing_params',
    /**
     * Set the asynchronous backing parameters.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_async_backing_params',
        support_1.sts.struct({
            new: enjinV100.AsyncBackingParams,
        })
    ),
}
exports.setExecutorParams = {
    name: 'Configuration.set_executor_params',
    /**
     * Set PVF executor parameters.
     */
    enjinV100: new support_1.CallType(
        'Configuration.set_executor_params',
        support_1.sts.struct({
            new: support_1.sts.array(function () {
                return enjinV100.V4ExecutorParam
            }),
        })
    ),
    /**
     * Set PVF executor parameters.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_executor_params',
        support_1.sts.struct({
            new: support_1.sts.array(function () {
                return enjinV1032.V6ExecutorParam
            }),
        })
    ),
    /**
     * Set PVF executor parameters.
     */
    v104: new support_1.CallType(
        'Configuration.set_executor_params',
        support_1.sts.struct({
            new: support_1.sts.array(function () {
                return v104.V4ExecutorParam
            }),
        })
    ),
    /**
     * Set PVF executor parameters.
     */
    v1030: new support_1.CallType(
        'Configuration.set_executor_params',
        support_1.sts.struct({
            new: support_1.sts.array(function () {
                return v1030.V6ExecutorParam
            }),
        })
    ),
}
exports.setCoretimeCores = {
    name: 'Configuration.set_coretime_cores',
    /**
     * Set the number of coretime execution cores.
     *
     * Note that this configuration is managed by the coretime chain. Only manually change
     * this, if you really know what you are doing!
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_coretime_cores',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMaxAvailabilityTimeouts = {
    name: 'Configuration.set_max_availability_timeouts',
    /**
     * Set the max number of times a claim may timeout on a core before it is abandoned
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_max_availability_timeouts',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setParasAvailabilityPeriod = {
    name: 'Configuration.set_paras_availability_period',
    /**
     * Set the availability period for paras.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_paras_availability_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setOnDemandBaseFee = {
    name: 'Configuration.set_on_demand_base_fee',
    /**
     * Set the on demand (parathreads) base fee.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_on_demand_base_fee',
        support_1.sts.struct({
            new: support_1.sts.bigint(),
        })
    ),
}
exports.setOnDemandFeeVariability = {
    name: 'Configuration.set_on_demand_fee_variability',
    /**
     * Set the on demand (parathreads) fee variability.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_on_demand_fee_variability',
        support_1.sts.struct({
            new: enjinV1032.Perbill,
        })
    ),
}
exports.setOnDemandQueueMaxSize = {
    name: 'Configuration.set_on_demand_queue_max_size',
    /**
     * Set the on demand (parathreads) queue max size.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_on_demand_queue_max_size',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setOnDemandTargetQueueUtilization = {
    name: 'Configuration.set_on_demand_target_queue_utilization',
    /**
     * Set the on demand (parathreads) fee variability.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_on_demand_target_queue_utilization',
        support_1.sts.struct({
            new: enjinV1032.Perbill,
        })
    ),
}
exports.setOnDemandTtl = {
    name: 'Configuration.set_on_demand_ttl',
    /**
     * Set the on demand (parathreads) ttl in the claimqueue.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_on_demand_ttl',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setMinimumBackingVotes = {
    name: 'Configuration.set_minimum_backing_votes',
    /**
     * Set the minimum backing votes threshold.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_minimum_backing_votes',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
exports.setNodeFeature = {
    name: 'Configuration.set_node_feature',
    /**
     * Set/Unset a node feature.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_node_feature',
        support_1.sts.struct({
            index: support_1.sts.number(),
            value: support_1.sts.boolean(),
        })
    ),
}
exports.setApprovalVotingParams = {
    name: 'Configuration.set_approval_voting_params',
    /**
     * Set approval-voting-params.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_approval_voting_params',
        support_1.sts.struct({
            new: enjinV1032.ApprovalVotingParams,
        })
    ),
}
exports.setSchedulerParams = {
    name: 'Configuration.set_scheduler_params',
    /**
     * Set scheduler-params.
     */
    enjinV1032: new support_1.CallType(
        'Configuration.set_scheduler_params',
        support_1.sts.struct({
            new: enjinV1032.SchedulerParams,
        })
    ),
}
exports.setDisputeConclusionByTimeOutPeriod = {
    name: 'Configuration.set_dispute_conclusion_by_time_out_period',
    /**
     * Set the dispute conclusion by time out period.
     */
    v100: new support_1.CallType(
        'Configuration.set_dispute_conclusion_by_time_out_period',
        support_1.sts.struct({
            new: support_1.sts.number(),
        })
    ),
}
