import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const maxAuthorities = {
    /**
     *  Max Authorities in use
     */
    enjinV100: new ConstantType('Grandpa.MaxAuthorities', sts.number()),
}

export const maxSetIdSessionEntries = {
    /**
     *  The maximum number of entries to keep in the set id to session index mapping.
     *
     *  Since the `SetIdSession` map is only used for validating equivocations this
     *  value should relate to the bonding duration of whatever staking system is
     *  being used (if any). If equivocation handling is not enabled then this value
     *  can be zero.
     */
    enjinV100: new ConstantType('Grandpa.MaxSetIdSessionEntries', sts.bigint()),
}

export const maxNominators = {
    /**
     *  The maximum number of nominators for each validator.
     */
    enjinV1032: new ConstantType('Grandpa.MaxNominators', sts.number()),
}
