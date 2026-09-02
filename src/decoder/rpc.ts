import '@polkadot/api-augment/substrate'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '~/util/config'
import { NETWORK_ALIASES, type Network } from './types'

export const NETWORK_RPC_ENDPOINTS: Record<Network, string> = {
    'enjin-matrixchain': 'wss://archive.matrix.blockchain.enjin.io',
    'canary-matrixchain': 'wss://archive.matrix.canary.enjin.io',
    'enjin-relaychain': 'wss://archive.relay.blockchain.enjin.io',
    'canary-relaychain': 'wss://archive.relay.canary.enjin.io',
}

export function getRpcEndpoint(network: Network): string {
    return NETWORK_ALIASES[config.chainName] === network ? config.dataSource.chain : NETWORK_RPC_ENDPOINTS[network]
}

class DecoderRpc {
    private static readonly instances = new Map<Network, Promise<DecoderRpc>>()

    private constructor(public readonly api: ApiPromise) {}

    public static getInstance(network: Network): Promise<DecoderRpc> {
        const existing = this.instances.get(network)
        if (existing) return existing

        const instance = ApiPromise.create({ provider: new WsProvider(getRpcEndpoint(network), 5000) })
            .then((api) => new DecoderRpc(api))
            .catch((error: unknown) => {
                this.instances.delete(network)
                throw error
            })

        this.instances.set(network, instance)
        return instance
    }

    public async ensureConnected(timeoutMs = 30_000): Promise<void> {
        if (this.api.isConnected) return

        const deadline = Date.now() + timeoutMs
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (!this.api.isConnected && Date.now() < deadline) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!this.api.isConnected) {
            throw new Error('RPC connection timeout: WebSocket did not reconnect in time')
        }
    }
}

export default DecoderRpc
