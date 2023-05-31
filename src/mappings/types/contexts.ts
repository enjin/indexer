import { Store } from '@subsquid/typeorm-store'
import { DataHandlerContext } from '@subsquid/substrate-processor'

export type CommonContext = DataHandlerContext<Store, any>
