import '@polkadot/api-augment'
import { ApiPromise, WsProvider } from '@polkadot/api'
import config from '../config'
import * as definitions from './interfaces/definitions'

class Rpc {
    private static _instance: Rpc | null = null

    private readonly _api: ApiPromise

    private constructor(api: ApiPromise) {
        this._api = api
    }

    public static async getInstance(): Promise<Rpc> {
        if (!this._instance) {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {})

            const api = await ApiPromise.create({
                provider: new WsProvider(config.dataSource.chain, 2000),
                types: {
                    ...types,
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
