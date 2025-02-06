import {
    BlockHeader as _BlockHeader,
    Call,
    DataHandlerContext,
    Event,
    SubstrateBatchProcessorFields,
} from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { processor } from '../../processor'

type Fields = SubstrateBatchProcessorFields<typeof processor>

export type CommonContext = DataHandlerContext<Store, Fields>
export type EventItem = Event<Fields>
export type BlockHeader = _BlockHeader<Fields>
export type CallItem = Call<Fields>
