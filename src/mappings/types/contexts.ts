import { DataHandlerContext,  } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

export type CommonContext = DataHandlerContext<
    Store,
    {
        block: {
            timestamp: true
        }
        call: {
            origin: true
            success: true
            args: true
            name: true
        }
        extrinsic: {
            fee: true
            hash: true
            tip: true
            signature: true
            version: true
            success: true
            error: true
        }
    }
>

export { CallContext, EventContext } from '../../types/generated/support'
