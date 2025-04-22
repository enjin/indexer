import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const validatorsRegistered = {
    name: 'ValidatorManager.ValidatorsRegistered',
    /**
     * New validators were added to the set.
     */
    enjinV100: new EventType(
        'ValidatorManager.ValidatorsRegistered',
        sts.array(() => enjinV100.AccountId32)
    ),
}

export const validatorsDeregistered = {
    name: 'ValidatorManager.ValidatorsDeregistered',
    /**
     * Validators were removed from the set.
     */
    enjinV100: new EventType(
        'ValidatorManager.ValidatorsDeregistered',
        sts.array(() => enjinV100.AccountId32)
    ),
}
