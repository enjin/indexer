import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const stateMachineAdded = {
    name: 'IsmpGrandpa.StateMachineAdded',
    /**
     * State machines have been added to whitelist
     */
    matrixV1030: new EventType(
        'IsmpGrandpa.StateMachineAdded',
        sts.struct({
            /**
             * The state machines in question
             */
            stateMachines: sts.array(() => matrixV1030.StateMachine),
        })
    ),
}

export const stateMachineRemoved = {
    name: 'IsmpGrandpa.StateMachineRemoved',
    /**
     * State machines have been removed from the whitelist
     */
    matrixV1030: new EventType(
        'IsmpGrandpa.StateMachineRemoved',
        sts.struct({
            /**
             * The state machines in question
             */
            stateMachines: sts.array(() => matrixV1030.StateMachine),
        })
    ),
}
