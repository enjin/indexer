import { connectionManager } from '../contexts'
import { ChainInfo } from '../model'

export class DataService {
    private static instance: DataService
    private _chainInfo: ChainInfo | undefined | null
    private _isInitialized = false

    private constructor() {}

    static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService()
        }
        return DataService.instance
    }

    async initialize(): Promise<void> {
        if (this._isInitialized) return

        const em = await connectionManager()
        this._chainInfo = await em
            .getRepository(ChainInfo)
            .createQueryBuilder('chainInfo')
            .orderBy('chainInfo.blockNumber', 'DESC')
            .getOne()

        this._isInitialized = true
    }

    get lastBlockNumber(): number {
        if (!this._isInitialized) {
            throw new Error('DataService not initialized')
        }

        return this._chainInfo?.blockNumber ?? 0
    }

    get chainInfo(): ChainInfo {
        if (!this._isInitialized || !this._chainInfo) {
            throw new Error('DataService not initialized')
        }

        return this._chainInfo
    }

    set chainInfo(value: ChainInfo) {
        this._chainInfo = value
    }
}
