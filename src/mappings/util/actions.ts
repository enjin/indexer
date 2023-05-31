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