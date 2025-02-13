import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const registerValidators = {
    name: 'ValidatorManager.register_validators',
    /**
     * Add new validators to the set.
     *
     * The new validators will be active from current session + 2.
     */
    enjinV100: new CallType(
        'ValidatorManager.register_validators',
        sts.struct({
            validators: sts.array(() => enjinV100.AccountId32),
        })
    ),
}

export const deregisterValidators = {
    name: 'ValidatorManager.deregister_validators',
    /**
     * Remove validators from the set.
     *
     * The removed validators will be deactivated from current session + 2.
     */
    enjinV100: new CallType(
        'ValidatorManager.deregister_validators',
        sts.struct({
            validators: sts.array(() => enjinV100.AccountId32),
        })
    ),
}
