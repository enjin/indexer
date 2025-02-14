import { DataSource, DataSourceOptions } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { Store } from '@subsquid/typeorm-store'
import {
    BlockHeader as _BlockHeader,
    Call,
    DataHandlerContext,
    Event,
    Extrinsic,
    SubstrateBatchProcessorFields,
} from '@subsquid/substrate-processor'
import { processor } from './processor'
import { calls } from './types'

const cfg: DataSourceOptions = createOrmConfig() as PostgresConnectionOptions
const con: DataSource = new DataSource({ ...cfg, poolSize: 200, pool: { max: 100 } } as PostgresConnectionOptions)

export default con

export const dataHandlerContext = () => {
    if (!con.isInitialized) {
        con.initialize().catch((err: unknown) => {
            throw err
        })
    }

    const store = new Store(() => con.manager)
    return { store } as DataHandlerContext<Store, never>
}

type Fields = SubstrateBatchProcessorFields<typeof processor>

export type CommonContext = DataHandlerContext<Store, Fields>
export type BlockHeader = _BlockHeader<Fields>
export type CallItem = Call<Fields> & {
    wasDispatched?: boolean
}
export type EventItem = Event<Fields>
export type ExtrinsicItem = Extrinsic<Fields>

export const CallItem = (call: Call<Fields>): CallItem => {
    return {
        ...call,
        wasDispatched: [calls.fuelTanks.dispatch.name, calls.fuelTanks.dispatchAndTouch.name].includes(call.name),
    }
}
