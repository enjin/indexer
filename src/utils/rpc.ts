import { createClient, PolkadotClient } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/node'
import { withPolkadotSdkCompat } from 'polkadot-api/polkadot-sdk-compat'
import config from '../config'

class Rpc {
    private static _instance: Rpc | null = null

    private readonly _client: PolkadotClient

    private constructor(client: PolkadotClient) {
        this._client = client
    }

    public static getInstance(): Rpc {
        if (!this._instance) {
            const client = createClient(withPolkadotSdkCompat(getWsProvider(config.dataSource.chain)))

            this._instance = new Rpc(client)
        }

        return this._instance
    }

    public get client(): PolkadotClient {
        return this._client
    }
}

export default Rpc
