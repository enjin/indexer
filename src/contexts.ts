import { Store } from '@subsquid/typeorm-store'
import {
    BlockHeader as _BlockHeader,
    Call,
    DataHandlerContext,
    Event,
    Extrinsic,
    SubstrateBatchProcessorFields,
} from '@subsquid/substrate-processor'
import { processorConfig } from '~/processor.config'
import { getDataSource } from '~/connection'

export const connectionManager = async () => {
    const con = await getDataSource()

    return con.manager
}

export const dataHandlerContext = async () => {
    const con = await getDataSource()

    const store = new Store(() => con.manager)
    return { store } as DataHandlerContext<Store, never>
}

type Fields = SubstrateBatchProcessorFields<typeof processorConfig>

export type CommonContext = DataHandlerContext<Store, Fields>
export type Block = _BlockHeader<Fields>
export type CallItem = Call<Fields>
export type EventItem = Event<Fields>
export type ExtrinsicItem = Extrinsic<Fields>
