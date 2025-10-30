import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const newSession = {
    name: 'Session.NewSession',
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    matrixEnjinV603: new EventType(
        'Session.NewSession',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}

export const newQueued = {
    name: 'Session.NewQueued',
    /**
     * The `NewSession` event in the current block also implies a new validator set to be
     * queued.
     */
    matrixV1030: new EventType('Session.NewQueued', sts.unit()),
}

export const validatorDisabled = {
    name: 'Session.ValidatorDisabled',
    /**
     * Validator has been disabled.
     */
    matrixV1030: new EventType(
        'Session.ValidatorDisabled',
        sts.struct({
            validator: matrixV1030.AccountId32,
        })
    ),
}

export const validatorReenabled = {
    name: 'Session.ValidatorReenabled',
    /**
     * Validator has been re-enabled.
     */
    matrixV1030: new EventType(
        'Session.ValidatorReenabled',
        sts.struct({
            validator: matrixV1030.AccountId32,
        })
    ),
}
