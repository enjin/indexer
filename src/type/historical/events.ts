import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'

export const rootStored = {
    name: 'Historical.RootStored',
    /**
     * The merkle root of the validators of the said session were stored
     */
    v1060: new EventType(
        'Historical.RootStored',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const rootsPruned = {
    name: 'Historical.RootsPruned',
    /**
     * The merkle roots of up to this session index were pruned
     */
    v1060: new EventType(
        'Historical.RootsPruned',
        sts.struct({
            upTo: sts.number(),
        })
    ),
}
