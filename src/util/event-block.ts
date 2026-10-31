import type { Block } from '~/contexts'
import type { Event } from '~/model'

/** Hook events have no extrinsic; their occurrence time still comes from the same block header. */
export function setEventBlock(event: Event, block: Pick<Block, 'height' | 'timestamp'>, index: number): void {
    event.index = index
    event.blockNumber = block.height
    event.createdAt = block.timestamp == null ? null : new Date(block.timestamp)
}
