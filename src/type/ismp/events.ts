import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const stateMachineUpdated = {
    name: 'Ismp.StateMachineUpdated',
    /**
     * Emitted when a state machine is successfully updated to a new height
     */
    matrixV1030: new EventType(
        'Ismp.StateMachineUpdated',
        sts.struct({
            /**
             * State machine identifier
             */
            stateMachineId: matrixV1030.StateMachineId,
            /**
             * State machine latest height
             */
            latestHeight: sts.bigint(),
        })
    ),
}

export const stateCommitmentVetoed = {
    name: 'Ismp.StateCommitmentVetoed',
    /**
     * Emitted when a state commitment is vetoed by a fisherman
     */
    matrixV1030: new EventType(
        'Ismp.StateCommitmentVetoed',
        sts.struct({
            /**
             * State machine height
             */
            height: matrixV1030.StateMachineHeight,
            /**
             * responsible fisherman
             */
            fisherman: sts.bytes(),
        })
    ),
}

export const consensusClientCreated = {
    name: 'Ismp.ConsensusClientCreated',
    /**
     * Indicates that a consensus client has been created
     */
    matrixV1030: new EventType(
        'Ismp.ConsensusClientCreated',
        sts.struct({
            /**
             * Consensus client id
             */
            consensusClientId: sts.bytes(),
        })
    ),
}

export const consensusClientFrozen = {
    name: 'Ismp.ConsensusClientFrozen',
    /**
     * Indicates that a consensus client has been created
     */
    matrixV1030: new EventType(
        'Ismp.ConsensusClientFrozen',
        sts.struct({
            /**
             * Consensus client id
             */
            consensusClientId: sts.bytes(),
        })
    ),
}

export const response = {
    name: 'Ismp.Response',
    /**
     * An Outgoing Response has been deposited
     */
    matrixV1030: new EventType(
        'Ismp.Response',
        sts.struct({
            /**
             * Chain that this response will be routed to
             */
            destChain: matrixV1030.StateMachine,
            /**
             * Source Chain for this response
             */
            sourceChain: matrixV1030.StateMachine,
            /**
             * Nonce for the request which this response is for
             */
            requestNonce: sts.bigint(),
            /**
             * Response Commitment
             */
            commitment: matrixV1030.H256,
            /**
             * Request commitment
             */
            reqCommitment: matrixV1030.H256,
        })
    ),
}

export const request = {
    name: 'Ismp.Request',
    /**
     * An Outgoing Request has been deposited
     */
    matrixV1030: new EventType(
        'Ismp.Request',
        sts.struct({
            /**
             * Chain that this request will be routed to
             */
            destChain: matrixV1030.StateMachine,
            /**
             * Source Chain for request
             */
            sourceChain: matrixV1030.StateMachine,
            /**
             * Request nonce
             */
            requestNonce: sts.bigint(),
            /**
             * Commitment
             */
            commitment: matrixV1030.H256,
        })
    ),
}

export const errors = {
    name: 'Ismp.Errors',
    /**
     * Some errors handling some ismp messages
     */
    matrixV1030: new EventType(
        'Ismp.Errors',
        sts.struct({
            /**
             * Message handling errors
             */
            errors: sts.array(() => matrixV1030.HandlingError),
        })
    ),
}

export const postRequestHandled = {
    name: 'Ismp.PostRequestHandled',
    /**
     * Post Request Handled
     */
    matrixV1030: new EventType('Ismp.PostRequestHandled', matrixV1030.RequestResponseHandled),
}

export const postResponseHandled = {
    name: 'Ismp.PostResponseHandled',
    /**
     * Post Response Handled
     */
    matrixV1030: new EventType('Ismp.PostResponseHandled', matrixV1030.RequestResponseHandled),
}

export const getRequestHandled = {
    name: 'Ismp.GetRequestHandled',
    /**
     * Get Response Handled
     */
    matrixV1030: new EventType('Ismp.GetRequestHandled', matrixV1030.RequestResponseHandled),
}

export const postRequestTimeoutHandled = {
    name: 'Ismp.PostRequestTimeoutHandled',
    /**
     * Post request timeout handled
     */
    matrixV1030: new EventType('Ismp.PostRequestTimeoutHandled', matrixV1030.TimeoutHandled),
}

export const postResponseTimeoutHandled = {
    name: 'Ismp.PostResponseTimeoutHandled',
    /**
     * Post response timeout handled
     */
    matrixV1030: new EventType('Ismp.PostResponseTimeoutHandled', matrixV1030.TimeoutHandled),
}

export const getRequestTimeoutHandled = {
    name: 'Ismp.GetRequestTimeoutHandled',
    /**
     * Get request timeout handled
     */
    matrixV1030: new EventType('Ismp.GetRequestTimeoutHandled', matrixV1030.TimeoutHandled),
}
