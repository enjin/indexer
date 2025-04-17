import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const epochDuration =  {
    /**
     *  The amount of time, in slots, that each epoch should last.
     *  NOTE: Currently it is not possible to change the epoch duration after
     *  the chain has started. Attempting to do so will brick block production.
     */
    enjinV100: new ConstantType(
        'Babe.EpochDuration',
        sts.bigint()
    ),
}

export const expectedBlockTime =  {
    /**
     *  The expected average block time at which BABE should be creating
     *  blocks. Since BABE is probabilistic it is not trivial to figure out
     *  what the expected average block time should be based on the slot
     *  duration and the security parameter `c` (where `1 - c` represents
     *  the probability of a slot being empty).
     */
    enjinV100: new ConstantType(
        'Babe.ExpectedBlockTime',
        sts.bigint()
    ),
}

export const maxAuthorities =  {
    /**
     *  Max number of authorities allowed
     */
    enjinV100: new ConstantType(
        'Babe.MaxAuthorities',
        sts.number()
    ),
}

export const maxNominators =  {
    /**
     *  The maximum number of nominators for each validator.
     */
    enjinV1032: new ConstantType(
        'Babe.MaxNominators',
        sts.number()
    ),
}
