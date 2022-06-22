import { CommonHandlerContext } from '../types/contexts'
import { ActionData } from '../types/data'

export function getMeta(data: ActionData) {
    const { id, extrinsicHash, timestamp, blockNumber } = data
    return {
        id,
        extrinsicHash,
        timestamp,
        blockNumber,
    }
}

export function createPrevStorageContext(ctx: CommonHandlerContext) {
    return {
        _chain: ctx._chain,
        block: {
            ...ctx.block,
            hash: ctx.block.parentHash,
            height: ctx.block.height,
        },
    }
}
