import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const assetTeleported = {
    name: 'TokenGateway.AssetTeleported',
    /**
     * An asset has been teleported
     */
    matrixV1030: new EventType(
        'TokenGateway.AssetTeleported',
        sts.struct({
            /**
             * Source account
             */
            from: matrixV1030.AccountId32,
            /**
             * beneficiary account on destination
             */
            to: matrixV1030.H256,
            /**
             * Amount transferred
             */
            amount: sts.bigint(),
            /**
             * Destination chain
             */
            dest: matrixV1030.StateMachine,
            /**
             * Request commitment
             */
            commitment: matrixV1030.H256,
        })
    ),
}

export const assetReceived = {
    name: 'TokenGateway.AssetReceived',
    /**
     * An asset has been received and transferred to the beneficiary's account
     */
    matrixV1030: new EventType(
        'TokenGateway.AssetReceived',
        sts.struct({
            /**
             * beneficiary account on relaychain
             */
            beneficiary: matrixV1030.AccountId32,
            /**
             * Amount transferred
             */
            amount: sts.bigint(),
            /**
             * Destination chain
             */
            source: matrixV1030.StateMachine,
        })
    ),
}

export const assetRefunded = {
    name: 'TokenGateway.AssetRefunded',
    /**
     * An asset has been refunded and transferred to the beneficiary's account
     */
    matrixV1030: new EventType(
        'TokenGateway.AssetRefunded',
        sts.struct({
            /**
             * beneficiary account on relaychain
             */
            beneficiary: matrixV1030.AccountId32,
            /**
             * Amount transferred
             */
            amount: sts.bigint(),
            /**
             * Destination chain
             */
            source: matrixV1030.StateMachine,
        })
    ),
}

export const erc6160AssetRegistrationDispatched = {
    name: 'TokenGateway.ERC6160AssetRegistrationDispatched',
    /**
     * ERC6160 asset creation request dispatched to hyperbridge
     */
    matrixV1030: new EventType(
        'TokenGateway.ERC6160AssetRegistrationDispatched',
        sts.struct({
            /**
             * Request commitment
             */
            commitment: matrixV1030.H256,
        })
    ),
}

export const assetRegisteredLocally = {
    name: 'TokenGateway.AssetRegisteredLocally',
    /**
     * An asset has been registered locally
     */
    matrixV1030: new EventType(
        'TokenGateway.AssetRegisteredLocally',
        sts.struct({
            /**
             * The local asset id
             */
            localId: matrixV1030.AssetId,
            /**
             * The token gateway asset id
             */
            assetId: matrixV1030.H256,
        })
    ),
}
