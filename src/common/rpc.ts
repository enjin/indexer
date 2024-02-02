import '@polkadot/api-augment'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '../config'

class Rpc {
    private static _instance: Rpc | null = null

    private readonly _api: ApiPromise

    private constructor(api: ApiPromise) {
        this._api = api
    }

    public static async getInstance(): Promise<Rpc> {
        if (!this._instance) {
            const api = await ApiPromise.create({ provider: new WsProvider(config.dataSource.chain, 1000) })
            this._instance = new Rpc(api)
        }

        return this._instance
    }

    public get api(): ApiPromise {
        return this._api
    }
}

export default Rpc
