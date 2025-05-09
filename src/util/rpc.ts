import '@polkadot/api-augment/substrate'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from './config'

class Rpc {
    private static _instance: Rpc | null = null

    private readonly _api: ApiPromise

    private constructor(api: ApiPromise) {
        this._api = api
    }

    public static async getInstance(): Promise<Rpc> {
        if (!this._instance) {
            const api = await ApiPromise.create({
                provider: new WsProvider(config.dataSource.chain, 1000),
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
}

export default Rpc
