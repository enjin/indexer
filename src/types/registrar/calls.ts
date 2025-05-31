import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const register =  {
    name: 'Registrar.register',
    /**
     * Register head data and validation code for a reserved Para Id.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin.
     * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
     * - `genesis_head`: The genesis head data of the parachain/thread.
     * - `validation_code`: The initial validation code of the parachain/thread.
     * 
     * ## Deposits/Fees
     * The origin signed account must reserve a corresponding deposit for the registration. Anything already
     * reserved previously for this para ID is accounted for.
     * 
     * ## Events
     * The `Registered` event is emitted in case of success.
     */
    enjinV100: new CallType(
        'Registrar.register',
        sts.struct({
            id: enjinV100.Id,
            genesisHead: enjinV100.HeadData,
            validationCode: enjinV100.ValidationCode,
        })
    ),
}

export const forceRegister =  {
    name: 'Registrar.force_register',
    /**
     * Force the registration of a Para Id on the relay chain.
     * 
     * This function must be called by a Root origin.
     * 
     * The deposit taken can be specified for this registration. Any `ParaId`
     * can be registered, including sub-1000 IDs which are System Parachains.
     */
    enjinV100: new CallType(
        'Registrar.force_register',
        sts.struct({
            who: enjinV100.AccountId32,
            deposit: sts.bigint(),
            id: enjinV100.Id,
            genesisHead: enjinV100.HeadData,
            validationCode: enjinV100.ValidationCode,
        })
    ),
}

export const deregister =  {
    name: 'Registrar.deregister',
    /**
     * Deregister a Para Id, freeing all data and returning any deposit.
     * 
     * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
     */
    enjinV100: new CallType(
        'Registrar.deregister',
        sts.struct({
            id: enjinV100.Id,
        })
    ),
}

export const swap =  {
    name: 'Registrar.swap',
    /**
     * Swap a parachain with another parachain or parathread.
     * 
     * The origin must be Root, the `para` owner, or the `para` itself.
     * 
     * The swap will happen only if there is already an opposite swap pending. If there is not,
     * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
     * 
     * The `ParaId`s remain mapped to the same head data and code so external code can rely on
     * `ParaId` to be a long-term identifier of a notional "parachain". However, their
     * scheduling info (i.e. whether they're a parathread or parachain), auction information
     * and the auction deposit are switched.
     */
    enjinV100: new CallType(
        'Registrar.swap',
        sts.struct({
            id: enjinV100.Id,
            other: enjinV100.Id,
        })
    ),
}

export const removeLock =  {
    name: 'Registrar.remove_lock',
    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin or the parachain.
     */
    enjinV100: new CallType(
        'Registrar.remove_lock',
        sts.struct({
            para: enjinV100.Id,
        })
    ),
}

export const reserve =  {
    name: 'Registrar.reserve',
    /**
     * Reserve a Para Id on the relay chain.
     * 
     * This function will reserve a new Para Id to be owned/managed by the origin account.
     * The origin account is able to register head data and validation code using `register` to create
     * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
     * 
     * ## Deposits/Fees
     * The origin must reserve a deposit of `ParaDeposit` for the registration.
     * 
     * ## Events
     * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
     */
    enjinV100: new CallType(
        'Registrar.reserve',
        sts.unit()
    ),
}

export const addLock =  {
    name: 'Registrar.add_lock',
    /**
     * Add a manager lock from a para. This will prevent the manager of a
     * para to deregister or swap a para.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    enjinV100: new CallType(
        'Registrar.add_lock',
        sts.struct({
            para: enjinV100.Id,
        })
    ),
}

export const scheduleCodeUpgrade =  {
    name: 'Registrar.schedule_code_upgrade',
    /**
     * Schedule a parachain upgrade.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    enjinV100: new CallType(
        'Registrar.schedule_code_upgrade',
        sts.struct({
            para: enjinV100.Id,
            newCode: enjinV100.ValidationCode,
        })
    ),
}

export const setCurrentHead =  {
    name: 'Registrar.set_current_head',
    /**
     * Set the parachain's current head.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    enjinV100: new CallType(
        'Registrar.set_current_head',
        sts.struct({
            para: enjinV100.Id,
            newHead: enjinV100.HeadData,
        })
    ),
}
