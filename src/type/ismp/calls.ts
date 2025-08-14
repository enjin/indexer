import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const handleUnsigned = {
    name: 'Ismp.handle_unsigned',
    /**
     * Execute the provided batch of ISMP messages, this will short-circuit and revert if any
     * of the provided messages are invalid. This is an unsigned extrinsic that permits anyone
     * execute ISMP messages for free, provided they have valid proofs and the messages have
     * not been previously processed.
     *
     * The dispatch origin for this call must be an unsigned one.
     *
     * - `messages`: the messages to handle or process.
     *
     * Emits different message events based on the Message received if successful.
     */
    matrixV1030: new CallType(
        'Ismp.handle_unsigned',
        sts.struct({
            messages: sts.array(() => matrixV1030.Message),
        })
    ),
}

export const createConsensusClient = {
    name: 'Ismp.create_consensus_client',
    /**
     * Create a consensus client, using a subjectively chosen consensus state. This can also
     * be used to overwrite an existing consensus state. The dispatch origin for this
     * call must be `T::AdminOrigin`.
     *
     * - `message`: [`CreateConsensusState`] struct.
     *
     * Emits [`Event::ConsensusClientCreated`] if successful.
     */
    matrixV1030: new CallType(
        'Ismp.create_consensus_client',
        sts.struct({
            message: matrixV1030.CreateConsensusState,
        })
    ),
}

export const updateConsensusState = {
    name: 'Ismp.update_consensus_state',
    /**
     * Modify the unbonding period and challenge period for a consensus state.
     * The dispatch origin for this call must be `T::AdminOrigin`.
     *
     * - `message`: `UpdateConsensusState` struct.
     */
    matrixV1030: new CallType(
        'Ismp.update_consensus_state',
        sts.struct({
            message: matrixV1030.UpdateConsensusState,
        })
    ),
}

export const fundMessage = {
    name: 'Ismp.fund_message',
    /**
     * Add more funds to a message (request or response) to be used for delivery and execution.
     *
     * Should not be called on a message that has been completed (delivered or timed-out) as
     * those funds will be lost forever.
     */
    matrixV1030: new CallType(
        'Ismp.fund_message',
        sts.struct({
            message: matrixV1030.FundMessageParams,
        })
    ),
}
