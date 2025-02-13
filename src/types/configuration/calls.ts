import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v104 from '../v104'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const setValidationUpgradeCooldown = {
    name: 'Configuration.set_validation_upgrade_cooldown',
    /**
     * Set the validation upgrade cooldown.
     */
    enjinV100: new CallType(
        'Configuration.set_validation_upgrade_cooldown',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setValidationUpgradeDelay = {
    name: 'Configuration.set_validation_upgrade_delay',
    /**
     * Set the validation upgrade delay.
     */
    enjinV100: new CallType(
        'Configuration.set_validation_upgrade_delay',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setCodeRetentionPeriod = {
    name: 'Configuration.set_code_retention_period',
    /**
     * Set the acceptance period for an included candidate.
     */
    enjinV100: new CallType(
        'Configuration.set_code_retention_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxCodeSize = {
    name: 'Configuration.set_max_code_size',
    /**
     * Set the max validation code size for incoming upgrades.
     */
    enjinV100: new CallType(
        'Configuration.set_max_code_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxPovSize = {
    name: 'Configuration.set_max_pov_size',
    /**
     * Set the max POV block size for incoming upgrades.
     */
    enjinV100: new CallType(
        'Configuration.set_max_pov_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxHeadDataSize = {
    name: 'Configuration.set_max_head_data_size',
    /**
     * Set the max head data size for paras.
     */
    enjinV100: new CallType(
        'Configuration.set_max_head_data_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setParathreadCores = {
    name: 'Configuration.set_parathread_cores',
    /**
     * Set the number of parathread execution cores.
     */
    enjinV100: new CallType(
        'Configuration.set_parathread_cores',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setParathreadRetries = {
    name: 'Configuration.set_parathread_retries',
    /**
     * Set the number of retries for a particular parathread.
     */
    enjinV100: new CallType(
        'Configuration.set_parathread_retries',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setGroupRotationFrequency = {
    name: 'Configuration.set_group_rotation_frequency',
    /**
     * Set the parachain validator-group rotation frequency
     */
    enjinV100: new CallType(
        'Configuration.set_group_rotation_frequency',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setChainAvailabilityPeriod = {
    name: 'Configuration.set_chain_availability_period',
    /**
     * Set the availability period for parachains.
     */
    enjinV100: new CallType(
        'Configuration.set_chain_availability_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setThreadAvailabilityPeriod = {
    name: 'Configuration.set_thread_availability_period',
    /**
     * Set the availability period for parathreads.
     */
    enjinV100: new CallType(
        'Configuration.set_thread_availability_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setSchedulingLookahead = {
    name: 'Configuration.set_scheduling_lookahead',
    /**
     * Set the scheduling lookahead, in expected number of blocks at peak throughput.
     */
    enjinV100: new CallType(
        'Configuration.set_scheduling_lookahead',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxValidatorsPerCore = {
    name: 'Configuration.set_max_validators_per_core',
    /**
     * Set the maximum number of validators to assign to any core.
     */
    enjinV100: new CallType(
        'Configuration.set_max_validators_per_core',
        sts.struct({
            new: sts.option(() => sts.number()),
        })
    ),
}

export const setMaxValidators = {
    name: 'Configuration.set_max_validators',
    /**
     * Set the maximum number of validators to use in parachain consensus.
     */
    enjinV100: new CallType(
        'Configuration.set_max_validators',
        sts.struct({
            new: sts.option(() => sts.number()),
        })
    ),
}

export const setDisputePeriod = {
    name: 'Configuration.set_dispute_period',
    /**
     * Set the dispute period, in number of sessions to keep for disputes.
     */
    enjinV100: new CallType(
        'Configuration.set_dispute_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setDisputePostConclusionAcceptancePeriod = {
    name: 'Configuration.set_dispute_post_conclusion_acceptance_period',
    /**
     * Set the dispute post conclusion acceptance period.
     */
    enjinV100: new CallType(
        'Configuration.set_dispute_post_conclusion_acceptance_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setNoShowSlots = {
    name: 'Configuration.set_no_show_slots',
    /**
     * Set the no show slots, in number of number of consensus slots.
     * Must be at least 1.
     */
    enjinV100: new CallType(
        'Configuration.set_no_show_slots',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setNDelayTranches = {
    name: 'Configuration.set_n_delay_tranches',
    /**
     * Set the total number of delay tranches.
     */
    enjinV100: new CallType(
        'Configuration.set_n_delay_tranches',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setZerothDelayTrancheWidth = {
    name: 'Configuration.set_zeroth_delay_tranche_width',
    /**
     * Set the zeroth delay tranche width.
     */
    enjinV100: new CallType(
        'Configuration.set_zeroth_delay_tranche_width',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setNeededApprovals = {
    name: 'Configuration.set_needed_approvals',
    /**
     * Set the number of validators needed to approve a block.
     */
    enjinV100: new CallType(
        'Configuration.set_needed_approvals',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setRelayVrfModuloSamples = {
    name: 'Configuration.set_relay_vrf_modulo_samples',
    /**
     * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
     */
    enjinV100: new CallType(
        'Configuration.set_relay_vrf_modulo_samples',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxUpwardQueueCount = {
    name: 'Configuration.set_max_upward_queue_count',
    /**
     * Sets the maximum items that can present in a upward dispatch queue at once.
     */
    enjinV100: new CallType(
        'Configuration.set_max_upward_queue_count',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxUpwardQueueSize = {
    name: 'Configuration.set_max_upward_queue_size',
    /**
     * Sets the maximum total size of items that can present in a upward dispatch queue at once.
     */
    enjinV100: new CallType(
        'Configuration.set_max_upward_queue_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxDownwardMessageSize = {
    name: 'Configuration.set_max_downward_message_size',
    /**
     * Set the critical downward message size.
     */
    enjinV100: new CallType(
        'Configuration.set_max_downward_message_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setUmpServiceTotalWeight = {
    name: 'Configuration.set_ump_service_total_weight',
    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    enjinV100: new CallType(
        'Configuration.set_ump_service_total_weight',
        sts.struct({
            new: enjinV100.Weight,
        })
    ),
}

export const setMaxUpwardMessageSize = {
    name: 'Configuration.set_max_upward_message_size',
    /**
     * Sets the maximum size of an upward message that can be sent by a candidate.
     */
    enjinV100: new CallType(
        'Configuration.set_max_upward_message_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxUpwardMessageNumPerCandidate = {
    name: 'Configuration.set_max_upward_message_num_per_candidate',
    /**
     * Sets the maximum number of messages that a candidate can contain.
     */
    enjinV100: new CallType(
        'Configuration.set_max_upward_message_num_per_candidate',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpOpenRequestTtl = {
    name: 'Configuration.set_hrmp_open_request_ttl',
    /**
     * Sets the number of sessions after which an HRMP open channel request expires.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_open_request_ttl',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpSenderDeposit = {
    name: 'Configuration.set_hrmp_sender_deposit',
    /**
     * Sets the amount of funds that the sender should provide for opening an HRMP channel.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_sender_deposit',
        sts.struct({
            new: sts.bigint(),
        })
    ),
}

export const setHrmpRecipientDeposit = {
    name: 'Configuration.set_hrmp_recipient_deposit',
    /**
     * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
     * channel.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_recipient_deposit',
        sts.struct({
            new: sts.bigint(),
        })
    ),
}

export const setHrmpChannelMaxCapacity = {
    name: 'Configuration.set_hrmp_channel_max_capacity',
    /**
     * Sets the maximum number of messages allowed in an HRMP channel at once.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_channel_max_capacity',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpChannelMaxTotalSize = {
    name: 'Configuration.set_hrmp_channel_max_total_size',
    /**
     * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_channel_max_total_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParachainInboundChannels = {
    name: 'Configuration.set_hrmp_max_parachain_inbound_channels',
    /**
     * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_max_parachain_inbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParathreadInboundChannels = {
    name: 'Configuration.set_hrmp_max_parathread_inbound_channels',
    /**
     * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_max_parathread_inbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpChannelMaxMessageSize = {
    name: 'Configuration.set_hrmp_channel_max_message_size',
    /**
     * Sets the maximum size of a message that could ever be put into an HRMP channel.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_channel_max_message_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParachainOutboundChannels = {
    name: 'Configuration.set_hrmp_max_parachain_outbound_channels',
    /**
     * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_max_parachain_outbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxParathreadOutboundChannels = {
    name: 'Configuration.set_hrmp_max_parathread_outbound_channels',
    /**
     * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_max_parathread_outbound_channels',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setHrmpMaxMessageNumPerCandidate = {
    name: 'Configuration.set_hrmp_max_message_num_per_candidate',
    /**
     * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
     */
    enjinV100: new CallType(
        'Configuration.set_hrmp_max_message_num_per_candidate',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setUmpMaxIndividualWeight = {
    name: 'Configuration.set_ump_max_individual_weight',
    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    enjinV100: new CallType(
        'Configuration.set_ump_max_individual_weight',
        sts.struct({
            new: enjinV100.Weight,
        })
    ),
}

export const setPvfCheckingEnabled = {
    name: 'Configuration.set_pvf_checking_enabled',
    /**
     * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
     */
    enjinV100: new CallType(
        'Configuration.set_pvf_checking_enabled',
        sts.struct({
            new: sts.boolean(),
        })
    ),
}

export const setPvfVotingTtl = {
    name: 'Configuration.set_pvf_voting_ttl',
    /**
     * Set the number of session changes after which a PVF pre-checking voting is rejected.
     */
    enjinV100: new CallType(
        'Configuration.set_pvf_voting_ttl',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMinimumValidationUpgradeDelay = {
    name: 'Configuration.set_minimum_validation_upgrade_delay',
    /**
     * Sets the minimum delay between announcing the upgrade block for a parachain until the
     * upgrade taking place.
     *
     * See the field documentation for information and constraints for the new value.
     */
    enjinV100: new CallType(
        'Configuration.set_minimum_validation_upgrade_delay',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setBypassConsistencyCheck = {
    name: 'Configuration.set_bypass_consistency_check',
    /**
     * Setting this to true will disable consistency checks for the configuration setters.
     * Use with caution.
     */
    enjinV100: new CallType(
        'Configuration.set_bypass_consistency_check',
        sts.struct({
            new: sts.boolean(),
        })
    ),
}

export const setAsyncBackingParams = {
    name: 'Configuration.set_async_backing_params',
    /**
     * Set the asynchronous backing parameters.
     */
    enjinV100: new CallType(
        'Configuration.set_async_backing_params',
        sts.struct({
            new: enjinV100.AsyncBackingParams,
        })
    ),
}

export const setExecutorParams = {
    name: 'Configuration.set_executor_params',
    /**
     * Set PVF executor parameters.
     */
    enjinV100: new CallType(
        'Configuration.set_executor_params',
        sts.struct({
            new: sts.array(() => enjinV100.V4ExecutorParam),
        })
    ),
    /**
     * Set PVF executor parameters.
     */
    enjinV1032: new CallType(
        'Configuration.set_executor_params',
        sts.struct({
            new: sts.array(() => enjinV1032.V6ExecutorParam),
        })
    ),
    /**
     * Set PVF executor parameters.
     */
    v104: new CallType(
        'Configuration.set_executor_params',
        sts.struct({
            new: sts.array(() => v104.V4ExecutorParam),
        })
    ),
    /**
     * Set PVF executor parameters.
     */
    v1030: new CallType(
        'Configuration.set_executor_params',
        sts.struct({
            new: sts.array(() => v1030.V6ExecutorParam),
        })
    ),
}

export const setCoretimeCores = {
    name: 'Configuration.set_coretime_cores',
    /**
     * Set the number of coretime execution cores.
     *
     * Note that this configuration is managed by the coretime chain. Only manually change
     * this, if you really know what you are doing!
     */
    enjinV1032: new CallType(
        'Configuration.set_coretime_cores',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMaxAvailabilityTimeouts = {
    name: 'Configuration.set_max_availability_timeouts',
    /**
     * Set the max number of times a claim may timeout on a core before it is abandoned
     */
    enjinV1032: new CallType(
        'Configuration.set_max_availability_timeouts',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setParasAvailabilityPeriod = {
    name: 'Configuration.set_paras_availability_period',
    /**
     * Set the availability period for paras.
     */
    enjinV1032: new CallType(
        'Configuration.set_paras_availability_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setOnDemandBaseFee = {
    name: 'Configuration.set_on_demand_base_fee',
    /**
     * Set the on demand (parathreads) base fee.
     */
    enjinV1032: new CallType(
        'Configuration.set_on_demand_base_fee',
        sts.struct({
            new: sts.bigint(),
        })
    ),
}

export const setOnDemandFeeVariability = {
    name: 'Configuration.set_on_demand_fee_variability',
    /**
     * Set the on demand (parathreads) fee variability.
     */
    enjinV1032: new CallType(
        'Configuration.set_on_demand_fee_variability',
        sts.struct({
            new: enjinV1032.Perbill,
        })
    ),
}

export const setOnDemandQueueMaxSize = {
    name: 'Configuration.set_on_demand_queue_max_size',
    /**
     * Set the on demand (parathreads) queue max size.
     */
    enjinV1032: new CallType(
        'Configuration.set_on_demand_queue_max_size',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setOnDemandTargetQueueUtilization = {
    name: 'Configuration.set_on_demand_target_queue_utilization',
    /**
     * Set the on demand (parathreads) fee variability.
     */
    enjinV1032: new CallType(
        'Configuration.set_on_demand_target_queue_utilization',
        sts.struct({
            new: enjinV1032.Perbill,
        })
    ),
}

export const setOnDemandTtl = {
    name: 'Configuration.set_on_demand_ttl',
    /**
     * Set the on demand (parathreads) ttl in the claimqueue.
     */
    enjinV1032: new CallType(
        'Configuration.set_on_demand_ttl',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setMinimumBackingVotes = {
    name: 'Configuration.set_minimum_backing_votes',
    /**
     * Set the minimum backing votes threshold.
     */
    enjinV1032: new CallType(
        'Configuration.set_minimum_backing_votes',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const setNodeFeature = {
    name: 'Configuration.set_node_feature',
    /**
     * Set/Unset a node feature.
     */
    enjinV1032: new CallType(
        'Configuration.set_node_feature',
        sts.struct({
            index: sts.number(),
            value: sts.boolean(),
        })
    ),
}

export const setApprovalVotingParams = {
    name: 'Configuration.set_approval_voting_params',
    /**
     * Set approval-voting-params.
     */
    enjinV1032: new CallType(
        'Configuration.set_approval_voting_params',
        sts.struct({
            new: enjinV1032.ApprovalVotingParams,
        })
    ),
}

export const setSchedulerParams = {
    name: 'Configuration.set_scheduler_params',
    /**
     * Set scheduler-params.
     */
    enjinV1032: new CallType(
        'Configuration.set_scheduler_params',
        sts.struct({
            new: enjinV1032.SchedulerParams,
        })
    ),
}

export const setDisputeConclusionByTimeOutPeriod = {
    name: 'Configuration.set_dispute_conclusion_by_time_out_period',
    /**
     * Set the dispute conclusion by time out period.
     */
    v100: new CallType(
        'Configuration.set_dispute_conclusion_by_time_out_period',
        sts.struct({
            new: sts.number(),
        })
    ),
}
