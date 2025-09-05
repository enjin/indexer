import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const teleport = {
    name: 'TokenGateway.teleport',
    /**
     * Teleports a registered asset
     * locks the asset and dispatches a request to token gateway on the destination
     */
    matrixV1030: new CallType(
        'TokenGateway.teleport',
        sts.struct({
            params: matrixV1030.TeleportParams,
        })
    ),
}

export const setTokenGatewayAddresses = {
    name: 'TokenGateway.set_token_gateway_addresses',
    /**
     * Set the token gateway address for specified chains
     */
    matrixV1030: new CallType(
        'TokenGateway.set_token_gateway_addresses',
        sts.struct({
            addresses: sts.array(() => sts.tuple(() => [matrixV1030.StateMachine, sts.bytes()])),
        })
    ),
}

export const createErc6160Asset = {
    name: 'TokenGateway.create_erc6160_asset',
    /**
     * Registers a multi-chain ERC6160 asset. The asset should not already exist.
     *
     * This works by dispatching a request to the TokenGateway module on each requested chain
     * to create the asset.
     * `native` should be true if this asset originates from this chain
     */
    matrixV1030: new CallType(
        'TokenGateway.create_erc6160_asset',
        sts.struct({
            asset: matrixV1030.AssetRegistration,
        })
    ),
}

export const updateErc6160Asset = {
    name: 'TokenGateway.update_erc6160_asset',
    /**
     * Registers a multi-chain ERC6160 asset. The asset should not already exist.
     *
     * This works by dispatching a request to the TokenGateway module on each requested chain
     * to create the asset.
     */
    matrixV1030: new CallType(
        'TokenGateway.update_erc6160_asset',
        sts.struct({
            asset: matrixV1030.GatewayAssetUpdate,
        })
    ),
}

export const updateAssetPrecision = {
    name: 'TokenGateway.update_asset_precision',
    /**
     * Update the precision for an existing asset
     */
    matrixV1030: new CallType(
        'TokenGateway.update_asset_precision',
        sts.struct({
            update: matrixV1030.PrecisionUpdate,
        })
    ),
}
