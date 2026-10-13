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

export async function withRpcTimeout<T>(operation: Promise<T>, timeoutMs = 30_000): Promise<T> {
    let timer: ReturnType<typeof setTimeout> | undefined
    try {
        return await Promise.race([
            operation,
            new Promise<never>((_resolve, reject) => {
                timer = setTimeout(() => {
                    reject(new Error('Codec RPC request timed out'))
                }, timeoutMs)
            }),
        ])
    } finally {
        clearTimeout(timer)
    }
}

class DecoderRpc {
    private static readonly instances = new Map<Network, Promise<DecoderRpc>>()

    private constructor(public readonly api: ApiPromise) {}

    public static getInstance(network: Network): Promise<DecoderRpc> {
        const existing = this.instances.get(network)
        if (existing) return existing

        const api = new ApiPromise({ provider: new WsProvider(getRpcEndpoint(network), 5000, {}, 30_000) })
        const instance = withRpcTimeout(api.isReadyOrError)
            .then((api) => new DecoderRpc(api))
            .catch(async (error: unknown) => {
                this.instances.delete(network)
                await api.disconnect().catch(() => undefined)
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
