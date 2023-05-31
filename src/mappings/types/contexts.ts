import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { Logger } from '@subsquid/logger'

export interface BatchBlock<Item> {
    header: SubstrateBlock
    items: Item[]
}

export interface BatchContext<Store, Item> {
    _chain: Chain
    log: Logger
    store: Store
    blocks: BatchBlock<Item>[]
}
