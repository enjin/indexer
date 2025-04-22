import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'

export const keys = {
    /**
     *  Keys of the current authority set.
     */
    enjinV1032: new StorageType(
        'AuthorityDiscovery.Keys',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as KeysEnjinV1032,
}

/**
 *  Keys of the current authority set.
 */
export interface KeysEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const nextKeys = {
    /**
     *  Keys of the next authority set.
     */
    enjinV1032: new StorageType(
        'AuthorityDiscovery.NextKeys',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as NextKeysEnjinV1032,
}

/**
 *  Keys of the next authority set.
 */
export interface NextKeysEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}
