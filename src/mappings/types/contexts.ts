import { EntityManager } from 'typeorm'
import {
    BlockHandlerContext as PrBlockHandlerContext,
    EventHandlerContext as PrEventHandlerContext,
    CallHandlerContext as PrCallHandlerContext,
    CommonHandlerContext as PrCommonHandlerContext,
} from '@subsquid/substrate-processor'
import { CallDataRequest, EventDataRequest } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export type EventHandlerContext<T extends EventDataRequest = { event: true }> = PrEventHandlerContext<EntityManager, T>
export type BlockHandlerContext = PrBlockHandlerContext<EntityManager>
export type CallHandlerContext<T extends CallDataRequest = { call: true; extrinsic: true }> = PrCallHandlerContext<
    EntityManager,
    T
>
export type CommonContext = PrCommonHandlerContext<EntityManager>

export { CallContext, EventContext } from '../../types/generated/support'
