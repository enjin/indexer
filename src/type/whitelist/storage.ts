import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const whitelistedCall = {
    enjinV100: new StorageType(
        'Whitelist.WhitelistedCall',
        'Optional',
        [enjinV100.H256],
        sts.unit()
    ) as WhitelistedCallEnjinV100,
}

export interface WhitelistedCallEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.H256): Promise<null | undefined>
    getMany(block: Block, keys: enjinV100.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.H256[]>
    getKeys(block: Block, key: enjinV100.H256): Promise<enjinV100.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.H256): AsyncIterable<enjinV100.H256[]>
    getPairs(block: Block): Promise<[k: enjinV100.H256, v: null | undefined][]>
    getPairs(block: Block, key: enjinV100.H256): Promise<[k: enjinV100.H256, v: null | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.H256, v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.H256
    ): AsyncIterable<[k: enjinV100.H256, v: null | undefined][]>
}
