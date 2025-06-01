import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const currentCodeUpdated =  {
    name: 'Paras.CurrentCodeUpdated',
    /**
     * Current code has been updated for a Para. `para_id`
     */
    enjinV100: new EventType(
        'Paras.CurrentCodeUpdated',
        enjinV100.Id
    ),
}

export const currentHeadUpdated =  {
    name: 'Paras.CurrentHeadUpdated',
    /**
     * Current head has been updated for a Para. `para_id`
     */
    enjinV100: new EventType(
        'Paras.CurrentHeadUpdated',
        enjinV100.Id
    ),
}

export const codeUpgradeScheduled =  {
    name: 'Paras.CodeUpgradeScheduled',
    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    enjinV100: new EventType(
        'Paras.CodeUpgradeScheduled',
        enjinV100.Id
    ),
}

export const newHeadNoted =  {
    name: 'Paras.NewHeadNoted',
    /**
     * A new head has been noted for a Para. `para_id`
     */
    enjinV100: new EventType(
        'Paras.NewHeadNoted',
        enjinV100.Id
    ),
}

export const actionQueued =  {
    name: 'Paras.ActionQueued',
    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    enjinV100: new EventType(
        'Paras.ActionQueued',
        sts.tuple([enjinV100.Id, sts.number()])
    ),
}

export const pvfCheckStarted =  {
    name: 'Paras.PvfCheckStarted',
    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    enjinV100: new EventType(
        'Paras.PvfCheckStarted',
        sts.tuple([enjinV100.ValidationCodeHash, enjinV100.Id])
    ),
}

export const pvfCheckAccepted =  {
    name: 'Paras.PvfCheckAccepted',
    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    enjinV100: new EventType(
        'Paras.PvfCheckAccepted',
        sts.tuple([enjinV100.ValidationCodeHash, enjinV100.Id])
    ),
}

export const pvfCheckRejected =  {
    name: 'Paras.PvfCheckRejected',
    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    enjinV100: new EventType(
        'Paras.PvfCheckRejected',
        sts.tuple([enjinV100.ValidationCodeHash, enjinV100.Id])
    ),
}
