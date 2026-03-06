import '@polkadot/api-augment/substrate'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '~/util/config'

class Rpc {
    private static _instance: Rpc | null = null

    private readonly _api: ApiPromise

    private constructor(api: ApiPromise) {
        this._api = api
    }

    public static async getInstance(): Promise<Rpc> {
        if (!this._instance) {
            const api = await ApiPromise.create({
                provider: new WsProvider(config.dataSource.chain, 5000),
                types: {
                    FrameSystemAccountInfo: {
                        nonce: 'u32',
                        consumers: 'u32',
                        providers: 'u32',
                        sufficients: 'u32',
                        data: 'PalletBalancesAccountData',
                    },
                    PalletBalancesAccountData: {
                        free: 'u128',
                        reserved: 'u128',
                        frozen: 'u128',
                        flags: 'u128',
                    },
                },
            })
            this._instance = new Rpc(api)
        }

        return this._instance
    }

    public get api(): ApiPromise {
        return this._api
    }

    /**
     * Waits for the RPC connection to be established. If disconnected, polls until
     * the provider reconnects (within timeout). Call before making RPC calls to avoid
     * "WebSocket is not connected" errors after a disconnect.
     */
    public async ensureConnected(timeoutMs = 30_000): Promise<void> {
        if (this._api.isConnected) return

        const deadline = Date.now() + timeoutMs
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (!this._api.isConnected && Date.now() < deadline) {
            await new Promise((r) => setTimeout(r, 1000))
        }

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!this._api.isConnected) {
            throw new Error('RPC connection timeout: WebSocket did not reconnect in time')
        }
    }
}

export default Rpc
